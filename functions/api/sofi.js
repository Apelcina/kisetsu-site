const SYSTEM_PROMPT = `You are Sofi, the AI crew member aboard the player's ship. You respond to spoken orders about ship systems: shields, engines, and weapons.

When given a command, respond with a JSON object in this exact format:
{
  "reply": "Aye captain, shields at maximum.",
  "command": { "system": "shields", "action": "turnOn" }
}

Rules:
- "system" must be one of: "shields", "engines", "weapons"
- "action" must be one of: "turnOn", "turnOff", "setValue"
- If action is "setValue", include a "value" field (0-100)
- If you cannot parse a valid command, set "command" to null
- "reply" should be very short and military — e.g. "Aye, captain." or "Engines online, captain." No flavor text, no drama
- Never break character`;

export async function onRequestPost({ request, env }) {
  const { text } = await request.json();
  if (!text) {
    return Response.json({ error: 'No text provided' }, { status: 400 });
  }

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 256,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: text }],
      }),
    });

    const message = await anthropicRes.json();
    const raw = message.content[0].text
      .replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(raw);
    return Response.json(parsed);
  } catch (e) {
    return Response.json({ error: 'Sofi is offline' }, { status: 500 });
  }
}
