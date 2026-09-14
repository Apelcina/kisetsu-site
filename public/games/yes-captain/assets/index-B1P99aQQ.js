(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=e.getContext(`webgl2`);if(!t)throw Error(`WebGL2 not supported in this browser`);return t.enable(t.DEPTH_TEST),t.clearColor(.05,.05,.1,1),t}var t=typeof Float32Array<`u`?Float32Array:Array,n=Math.PI/180;180/Math.PI;function r(e){return e*n}function i(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function a(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function o(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function s(e,t,n){var r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function c(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function l(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function u(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function d(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function f(e,t,n,r,i){var a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var o=1/(r-i);e[10]=(i+r)*o,e[14]=2*i*r*o}else e[10]=-1,e[14]=-2*r;return e}var p=f;function m(e,t,n,r){var i,o,s,c,l,u,d,f,p,m,h=t[0],g=t[1],_=t[2],v=r[0],y=r[1],b=r[2],x=n[0],S=n[1],C=n[2];return Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6&&Math.abs(_-C)<1e-6?a(e):(d=h-x,f=g-S,p=_-C,m=1/Math.sqrt(d*d+f*f+p*p),d*=m,f*=m,p*=m,i=y*p-b*f,o=b*d-v*p,s=v*f-y*d,m=Math.sqrt(i*i+o*o+s*s),m?(m=1/m,i*=m,o*=m,s*=m):(i=0,o=0,s=0),c=f*s-p*o,l=p*i-d*s,u=d*o-f*i,m=Math.sqrt(c*c+l*l+u*u),m?(m=1/m,c*=m,l*=m,u*=m):(c=0,l=0,u=0),e[0]=i,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(i*h+o*g+s*_),e[13]=-(c*h+l*g+u*_),e[14]=-(d*h+f*g+p*_),e[15]=1,e)}var h=o;function g(){var e=new t(3);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function _(e){var n=new t(3);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function v(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function y(e,n,r){var i=new t(3);return i[0]=e,i[1]=n,i[2]=r,i}function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function x(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function S(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function C(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function ee(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function w(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function T(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function E(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function D(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function O(e,t,n,r){var i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}var k=C;(function(){var e=g();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function A(){var e=new t(4);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function j(e,n,r,i){var a=new t(4);return a[0]=e,a[1]=n,a[2]=r,a[3]=i,a}function M(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=A();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var N=class{gl;program;constructor(e,t,n){this.gl=e,this.program=this.link(this.compile(e.VERTEX_SHADER,t),this.compile(e.FRAGMENT_SHADER,n))}compile(e,t){let n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(`Shader compile error: ${n.getShaderInfoLog(r)}`);return r}link(e,t){let n=this.gl,r=n.createProgram();if(n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS))throw Error(`Program link error: ${n.getProgramInfoLog(r)}`);return n.deleteShader(e),n.deleteShader(t),r}use(){this.gl.useProgram(this.program)}setFloat(e,t){this.gl.uniform1f(this.gl.getUniformLocation(this.program,e),t)}setVec3(e,t){this.gl.uniform3fv(this.gl.getUniformLocation(this.program,e),t)}setMat4(e,t){this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program,e),!1,t)}},P=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 view;
uniform mat4 projection;

void main() {
    gl_Position = projection * view * vec4(aPos, 1.0);
}
`,F=`#version 300 es
precision mediump float;

out vec4 FragColor;

void main() {
    FragColor = vec4(0.4, 0.4, 0.4, 1.0);
}
`,I=class{shader;vao;lineCount;gl;constructor(e,t=100,n=2){this.gl=e,this.shader=new N(e,P,F);let r=[];for(let e=-t;e<=t;e+=n){let n=e,i=t;r.push(-i,-2,n,i,-2,n),r.push(n,-2,-i,n,-2,i)}this.lineCount=r.length/3,this.vao=e.createVertexArray();let i=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null)}draw(e,t){let n=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),n.bindVertexArray(this.vao),n.drawArrays(n.LINES,0,this.lineCount),n.bindVertexArray(null)}},L=`#version 300 es
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;

out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    FragPos = vec3(model * vec4(aPos, 1.0));
    Normal  = mat3(transpose(inverse(model))) * aNormal;
}
`,te=`#version 300 es
precision mediump float;

in vec3 Normal;
in vec3 FragPos;

out vec4 FragColor;

uniform float shieldStrength;
uniform vec3  viewPos;
uniform vec3  shieldColor;
uniform vec3  hitPos;      // normalized sphere direction of hit
uniform float hitRing;     // 0 = off, 0..1 = expanding ring
uniform float chargeWave;  // -1 = off, 0..1 = latitude sweep

void main() {
    if (shieldStrength <= 0.0 && hitRing <= 0.0 && chargeWave < 0.0) discard;

    vec3  viewDir = normalize(viewPos - FragPos);
    vec3  norm    = normalize(Normal);
    float fresnel = 1.0 - abs(dot(norm, viewDir));
    fresnel = pow(fresnel, 2.0);

    vec3  color = mix(shieldColor * 0.5, shieldColor + vec3(0.2), fresnel);
    float alpha = (0.15 + 0.5 * fresnel) * shieldStrength;

    // impact splash: white-hot core bleeding to red + expanding shockwave ring
    if (hitRing > 0.0) {
        float cosAngle = dot(norm, normalize(hitPos));
        float angle    = acos(clamp(cosAngle, -1.0, 1.0));
        float fade     = 1.0 - hitRing;

        // core: white centre fading to red at edges
        float maxAngle = 0.95;
        if (angle < maxAngle) {
            float t     = 1.0 - angle / maxAngle;
            vec3  core  = mix(vec3(1.0, 0.05, 0.0), vec3(1.0, 0.9, 0.7), t * t);
            color += core * t * t * fade * 4.0;
            alpha += t * t * fade * 1.2;
        }

        // shockwave ring: thin band expanding outward, fades as it goes
        float ringAngle = hitRing * maxAngle;
        float ringWidth = 0.07;
        float ringDist  = abs(angle - ringAngle);
        if (ringDist < ringWidth && ringAngle < maxAngle) {
            float t    = 1.0 - ringDist / ringWidth;
            float rfade = fade * (1.0 - hitRing * 0.6);
            color += vec3(1.0, 0.5, 0.2) * t * rfade * 3.0;
            alpha += t * rfade * 1.0;
        }
    }

    // charge wave: green latitude sweep from bottom to top
    if (chargeWave >= 0.0) {
        float lat = norm.y * 0.5 + 0.5; // 0=bottom, 1=top
        float waveFront = chargeWave;
        float waveWidth = 0.12;
        float dist = abs(lat - waveFront);
        if (dist < waveWidth) {
            float t = 1.0 - dist / waveWidth;
            color += vec3(0.0, 1.0, 0.3) * t * t * 1.8;
            alpha += t * t * 0.5;
        }
    }

    FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
}
`,R=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new N(e,L,te);let{vao:t,indexCount:n}=this.buildSphere(24,24);this.vao=t,this.indexCount=n}buildSphere(e,t){let n=this.gl,r=[],i=[];for(let n=0;n<=e;n++){let i=Math.PI*n/e;for(let e=0;e<=t;e++){let n=2*Math.PI*e/t,a=Math.sin(i)*Math.cos(n),o=Math.cos(i),s=Math.sin(i)*Math.sin(n);r.push(a,o,s,a,o,s)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=n*(t+1)+e,a=r+t+1;i.push(r,a,r+1,a,a+1,r+1)}let a=n.createVertexArray(),o=n.createBuffer(),s=n.createBuffer();return n.bindVertexArray(a),n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(i),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,24,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,24,12),n.bindVertexArray(null),{vao:a,indexCount:i.length}}draw(e,t,n,r,i,a=y(0,.5,1),o=0,s=y(0,0,1),c=-1){let l=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`viewPos`,r),this.shader.setVec3(`shieldColor`,a),this.shader.setFloat(`shieldStrength`,i/100),this.shader.setFloat(`hitRing`,o),this.shader.setVec3(`hitPos`,s),this.shader.setFloat(`chargeWave`,c),l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),l.depthMask(!1),l.bindVertexArray(this.vao),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_INT,0),l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}},ne=`#version 300 es
layout (location = 0) in vec3 aPos;

out vec3 LocalPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    LocalPos    = aPos;
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
`,z=`#version 300 es
precision mediump float;

in vec3 LocalPos;

out vec4 FragColor;

uniform float engineStrength;
uniform float u_time;
uniform float isOrb;

float hash(float n) { return fract(sin(n) * 43758.5453); }

void main() {
    if (engineStrength <= 0.0) discard;

    float flicker  = 0.85 + 0.15 * hash(floor(u_time * 20.0));
    float pulse    = 0.90 + 0.10 * sin(u_time * 6.0);
    float strength = (0.65 + 0.35 * engineStrength) * flicker * pulse;

    vec3 core = vec3(1.0,  0.95, 0.7);   // hot yellow-white
    vec3 mid  = vec3(1.0,  0.45, 0.05);  // orange
    vec3 rim  = vec3(0.55, 0.05, 0.0);   // deep red

    if (isOrb > 0.5) {
        // Hemisphere: LocalPos.z goes from -1 (dome tip) to 0 (open rim)
        // Brightest at dome tip (deep into space), fades toward the rim.
        float t     = -LocalPos.z;                       // 1 at tip, 0 at rim
        vec3  color = t > 0.5 ? mix(mid, core, (t - 0.5) * 2.0)
                               : mix(rim,  mid, t * 2.0);
        float alpha = strength * (0.3 + 0.7 * t);
        FragColor   = vec4(color * alpha, alpha);
    } else {
        // Cone plume: radial glow fading to transparent at rim
        float radial = length(LocalPos.xy);
        float glow   = pow(1.0 - smoothstep(0.0, 0.9, radial), 1.5);
        vec3  color  = radial < 0.3 ? mix(core, mid, radial / 0.3)
                                    : mix(mid,  rim, (radial - 0.3) / 0.7);
        float alpha  = glow * strength;
        FragColor    = vec4(color * alpha * 3.0, alpha);
    }
}
`,B=class{shader;coneVao;coneIndexCount;orbVao;orbIndexCount;gl;constructor(e){this.gl=e,this.shader=new N(e,ne,z);let t=this.buildCone(16,16);this.coneVao=t.vao,this.coneIndexCount=t.indexCount;let n=this.buildHemisphere(16,16);this.orbVao=n.vao,this.orbIndexCount=n.indexCount}buildCone(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=r/e,a=.4+i*.6;for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),-i)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}buildHemisphere(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=Math.PI/2*(r/e),a=Math.sin(i),o=-Math.cos(i);for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),o)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}upload(e,t){let n=this.gl,r=n.createVertexArray(),i=n.createBuffer(),a=n.createBuffer();return n.bindVertexArray(r),n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(t),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,12,0),n.bindVertexArray(null),{vao:r,indexCount:t.length}}draw(e,t,n,r,a,l){let u=this.gl,d=a/100,f=1+.06*Math.sin(l*6);this.shader.use(),this.shader.setMat4(`view`,n),this.shader.setMat4(`projection`,r),this.shader.setFloat(`engineStrength`,d),this.shader.setFloat(`u_time`,l),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE),u.depthMask(!1);let p=.2*f,m=i();s(m,m,e),o(m,m,t),c(m,m,[p*.5,p,p]),this.shader.setMat4(`model`,m),this.shader.setFloat(`isOrb`,1),u.bindVertexArray(this.orbVao),u.drawElements(u.TRIANGLES,this.orbIndexCount,u.UNSIGNED_INT,0);let h=i();s(h,h,e),o(h,h,t),c(h,h,[.1*f,.18*f,(.1+d*3)*f]),this.shader.setMat4(`model`,h),this.shader.setFloat(`isOrb`,0),u.bindVertexArray(this.coneVao),u.drawElements(u.TRIANGLES,this.coneIndexCount,u.UNSIGNED_INT,0),u.bindVertexArray(null),u.depthMask(!0),u.disable(u.BLEND)}},re=`#version 300 es
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec3 aColor;

out vec3 Normal;
out vec3 FragPos;
out vec3 VertColor;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    FragPos    = vec3(model * vec4(aPos, 1.0));
    Normal     = mat3(transpose(inverse(model))) * aNormal;
    VertColor  = aColor;
}
`,ie=`#version 300 es
precision mediump float;

in vec3 Normal;
in vec3 FragPos;
in vec3 VertColor;

out vec4 FragColor;

uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 viewPos;

void main() {
    float ambientStrength = 0.2;
    vec3 ambient = ambientStrength * lightColor;

    vec3 norm     = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff    = max(dot(norm, lightDir), 0.0);
    vec3 diffuse  = diff * lightColor;

    float specularStrength = 0.4;
    vec3 viewDir    = normalize(viewPos - FragPos);
    vec3 reflectDir = reflect(-lightDir, norm);
    float spec      = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    vec3 specular   = specularStrength * spec * lightColor;

    vec3 result = (ambient + diffuse + specular) * VertColor;
    FragColor = vec4(result, 1.0);
}
`,ae=class{shader;vao;vertexCount;gl;constructor(e,t){this.gl=e,this.shader=new N(e,re,ie),this.vertexCount=t.vertexCount,this.vao=e.createVertexArray();let n=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t.interleaved,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,36,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,36,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,36,24),e.bindVertexArray(null)}draw(e,t,n,r,i){let a=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`lightPos`,r),this.shader.setVec3(`lightColor`,y(1,1,1)),this.shader.setVec3(`viewPos`,i),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,this.vertexCount),a.bindVertexArray(null)}};function V(e){let t={},n=``;for(let r of e.split(`
`)){let e=r.trim();if(e.startsWith(`newmtl `))n=e.slice(7).trim();else if(e.startsWith(`Kd `)&&n){let[,r,i,a]=e.split(/\s+/);t[n]={r:parseFloat(r),g:parseFloat(i),b:parseFloat(a)}}}return t}async function oe(e,t){let n=await fetch(e).then(e=>e.text()),r={},i=n.match(/^mtllib (.+)$/m),a=t??(i?e.replace(/[^/]+$/,i[1].trim()):null);a&&(r=V(await fetch(a).then(e=>e.text()).catch(()=>``)));let o=[],s=[],c=[],l={r:.7,g:.75,b:.8};for(let e of n.split(`
`)){let t=e.trim();if(t.startsWith(`v `)){let[,e,n,r]=t.split(/\s+/);o.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`vn `)){let[,e,n,r]=t.split(/\s+/);s.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`usemtl `)){let e=t.slice(7).trim();l=r[e]??l}else if(t.startsWith(`f `)){let e=t.split(/\s+/).slice(1);for(let t=1;t<e.length-1;t++)for(let n of[e[0],e[t],e[t+1]]){let e=n.split(`/`),t=(parseInt(e[0])-1)*3;if(c.push(o[t],o[t+1],o[t+2]),e[2]&&e[2]!==``){let t=(parseInt(e[2])-1)*3;c.push(s[t],s[t+1],s[t+2])}else c.push(0,1,0);c.push(l.r,l.g,l.b)}}}return{interleaved:new Float32Array(c),vertexCount:c.length/9}}var se=class{keys=new Set;orbitAzimuth=0;orbitElevation=15;orbitDistance=30;mouseDown=!1;lastMouseX=0;lastMouseY=0;constructor(e){window.addEventListener(`keydown`,e=>this.keys.add(e.code)),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener(`mousemove`,e=>{if(!this.mouseDown)return;let t=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY;this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,this.orbitAzimuth-=t*.15,this.orbitElevation=Math.max(-80,Math.min(80,this.orbitElevation+n*.15))}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.orbitDistance=Math.max(3,Math.min(50,this.orbitDistance+e.deltaY*.02))},{passive:!1})}isOrbiting(){return this.mouseDown}held(e){return document.activeElement?.tagName===`INPUT`?!1:this.keys.has(e)}};function ce(){return{shields:20,maxShields:100,health:10,maxHealth:10,engines:30,maxEngines:30,energy:100,maxEnergy:100,pulse:{name:`PULSE`,auto:!1,reloading:!1,reloadTimer:0,reloadTime:4.5,shotsPerBurst:1,pendingFire:!1},lance:{name:`LANCE`,auto:!1,reloading:!1,reloadTimer:0,reloadTime:6,shotsPerBurst:1,pendingFire:!1},hitRing:0,hitPos:y(0,0,1),chargeWave:-1,lasers:{name:`LASERS`,auto:!1,reloading:!1,reloadTimer:0,reloadTime:3,shotsPerBurst:2,pendingFire:!1}}}var le=class{el;constructor(e){this.el=document.createElement(`div`),this.el.id=`hud`,this.el.innerHTML=`
      <div class="hud-panel">
        <div class="hud-row">
          <span class="label">SHIELDS</span>
          <span id="hud-shields">0 / 0</span>
        </div>
        <input type="range" id="hud-shields-slider" min="0" max="100" step="1" value="${e.maxShields}">
        <div class="hud-row">
          <span class="label">ENGINES</span>
          <span id="hud-engines">0 / 0</span>
        </div>
        <input type="range" id="hud-engines-slider" min="0" max="100" step="1" value="${e.maxEngines}">
        <div class="hud-hint">W/S pitch · A/D turn</div>
      </div>
    `,document.body.appendChild(this.el),document.getElementById(`hud-shields-slider`).addEventListener(`change`,t=>{let n=t.target,r=parseInt(n.value);e.maxShields=r,e.shields=Math.min(e.shields,r),n.blur()}),document.getElementById(`hud-engines-slider`).addEventListener(`change`,t=>{let n=t.target,r=parseInt(n.value);e.maxEngines=r,e.engines=r,n.blur()}),this.injectStyles()}update(e,t){document.getElementById(`hud-shields`).textContent=`${Math.round(e.shields)} / ${Math.round(e.maxShields)}`,document.getElementById(`hud-engines`).textContent=`${Math.round(e.engines)} / ${Math.round(e.maxEngines)}`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #hud {
        position: fixed; top: 110px; left: 16px;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        pointer-events: all;
        z-index: 10;
      }
      .hud-panel {
        background: rgba(0,10,30,0.7);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 4px;
        padding: 10px 14px;
        color: #8cf;
        min-width: 220px;
      }
      .hud-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px;
      }
      .label { color: rgba(100,180,255,0.6); text-transform: uppercase; }
      #hud input[type=range] {
        width: 100%;
        margin: 0 0 8px 0;
        accent-color: #4af;
        cursor: pointer;
      }
      .hud-hint {
        margin-top: 4px;
        font-size: 10px;
        color: rgba(100,180,255,0.35);
        border-top: 1px solid rgba(100,180,255,0.15);
        padding-top: 6px;
      }
    `,document.head.appendChild(e)}},ue=class{el;state;constructor(e,t,n,r){this.state=e,this.el=document.createElement(`div`),this.el.id=`weapons-hud`,this.el.innerHTML=this.buildPanel(),document.body.appendChild(this.el),this.el.querySelector(`#btn-fire`).addEventListener(`click`,()=>{e.lasers.reloading||(e.lasers.pendingFire=!0,t())}),this.el.querySelector(`#btn-auto`).addEventListener(`click`,()=>{e.lasers.auto=!e.lasers.auto}),this.el.querySelector(`#btn-pulse-fire`).addEventListener(`click`,()=>{e.pulse.reloading||(e.pulse.pendingFire=!0,n())}),this.el.querySelector(`#btn-pulse-auto`).addEventListener(`click`,()=>{e.pulse.auto=!e.pulse.auto}),this.el.querySelector(`#btn-lance-fire`).addEventListener(`click`,()=>{e.lance.reloading||(e.lance.pendingFire=!0,r())}),this.el.querySelector(`#btn-lance-auto`).addEventListener(`click`,()=>{e.lance.auto=!e.lance.auto}),this.injectStyles()}buildPanel(){return`
      <div class="wpn-panel">
        <div class="wpn-row">
          <span class="wpn-name">LASERS</span>
          <button id="btn-fire" class="wpn-btn">FIRE</button>
          <button id="btn-auto" class="wpn-btn">AUTO</button>
        </div>
        <div class="wpn-status">
          <span id="wpn-status-text">READY</span>
          <span id="wpn-pips"></span>
        </div>
        <div class="wpn-divider"></div>
        <div class="wpn-row">
          <span class="wpn-name wpn-name-pulse">PULSE</span>
          <button id="btn-pulse-fire" class="wpn-btn">FIRE</button>
          <button id="btn-pulse-auto" class="wpn-btn">AUTO</button>
        </div>
        <div class="wpn-status">
          <span id="wpn-pulse-status-text">READY</span>
          <span id="wpn-pulse-pips"></span>
        </div>
        <div class="wpn-divider"></div>
        <div class="wpn-row">
          <span class="wpn-name wpn-name-lance">LANCE</span>
          <button id="btn-lance-fire" class="wpn-btn">FIRE</button>
          <button id="btn-lance-auto" class="wpn-btn">AUTO</button>
        </div>
        <div class="wpn-status">
          <span id="wpn-lance-status-text">READY</span>
          <span id="wpn-lance-pips"></span>
        </div>
      </div>
    `}update(e,t=!1,n=1){let r=.5+.5*n;this.tickWeapon(this.state.lasers,e*r),this.tickWeapon(this.state.pulse,e*r),this.tickWeapon(this.state.lance,e*r);let i=document.getElementById(`wpn-status-text`),a=document.getElementById(`wpn-pips`),o=document.getElementById(`btn-fire`),s=document.getElementById(`btn-auto`),c=document.getElementById(`wpn-pulse-status-text`),l=document.getElementById(`wpn-pulse-pips`),u=document.getElementById(`btn-pulse-fire`),d=document.getElementById(`btn-pulse-auto`),f=document.getElementById(`wpn-lance-status-text`),p=document.getElementById(`wpn-lance-pips`),m=document.getElementById(`btn-lance-fire`),h=document.getElementById(`btn-lance-auto`);this.renderWeaponStatus(this.state.lasers,i,a,o,s,t,`laser`),this.renderWeaponStatus(this.state.pulse,c,l,u,d,t,`pulse`),this.renderWeaponStatus(this.state.lance,f,p,m,h,t,`lance`)}tickWeapon(e,t){e.reloading&&(e.reloadTimer-=t,e.reloadTimer<=0&&(e.reloading=!1,e.reloadTimer=0,e.auto&&(e.pendingFire=!0)))}renderWeaponStatus(e,t,n,r,i,a,o){let s=o===`pulse`?`#fc8`:o===`lance`?`#f88`:`#8cf`,c=o===`pulse`?`#fa6`:o===`lance`?`#f44`:`#f84`;e.reloading?(t.textContent=`RELOADING ${e.reloadTimer.toFixed(1)}s`,t.style.color=c,n.textContent=``):(t.textContent=`READY`,t.style.color=s,n.textContent=`● `.repeat(e.shotsPerBurst).trim()),n.style.color=s,r.disabled=e.reloading||!a,r.style.opacity=e.reloading||!a?`0.35`:`1`,i.style.opacity=`1`,i.style.borderColor=e.auto?`rgba(60,220,80,0.9)`:`rgba(60,220,80,0.25)`,i.style.color=e.auto?`rgba(60,220,80,1)`:`rgba(60,220,80,0.4)`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #weapons-hud {
        position: fixed;
        top: 220px;
        right: 16px;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        z-index: 9;
      }
      .wpn-panel {
        background: rgba(0,10,30,0.7);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 4px;
        padding: 10px 14px;
        color: #8cf;
        min-width: 220px;
      }
      .wpn-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }
      .wpn-name {
        flex: 1;
        color: rgba(100,180,255,0.6);
        letter-spacing: 1px;
      }
      .wpn-name-pulse { color: rgba(255,160,80,0.7); }
      .wpn-name-lance { color: rgba(255,80,80,0.7); }
      .wpn-divider {
        border-top: 1px solid rgba(100,180,255,0.12);
        margin: 8px 0;
      }
      .wpn-btn {
        background: rgba(0,10,30,0.8);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 3px;
        color: #8cf;
        padding: 3px 10px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        cursor: pointer;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .wpn-btn:hover:not(:disabled) { border-color: rgba(100,180,255,0.8); }
      .wpn-status {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
      #wpn-pips { color: #4df; letter-spacing: 2px; }
      #wpn-pulse-pips { letter-spacing: 2px; }
    `,document.head.appendChild(e)}},de=class{el;lockedEnemy=null;orbiting=!1;following=!1;orbitBtn;followBtn;rows=[];onLockChange;onOrbitToggle;onFollowToggle;constructor(e,t,n){this.onLockChange=e,this.onOrbitToggle=t,this.onFollowToggle=n,this.el=document.createElement(`div`),this.el.id=`target-hud`,this.el.innerHTML=`
      <div class="tgt-panel">
        <div class="tgt-header">
          <span class="tgt-label">HOSTILES</span>
          <button id="tgt-follow-btn" class="tgt-orbit-btn">FOLLOW</button>
          <button id="tgt-orbit-btn"  class="tgt-orbit-btn">ORBIT</button>
        </div>
        <div id="tgt-rows"></div>
      </div>`,document.body.appendChild(this.el),this.orbitBtn=document.getElementById(`tgt-orbit-btn`),this.followBtn=document.getElementById(`tgt-follow-btn`),this.orbitBtn.addEventListener(`click`,()=>{if(!this.lockedEnemy)return;let e=!this.orbiting;this.setOrbiting(e),e&&this.setFollowing(!1),this.onOrbitToggle(this.orbiting),this.onFollowToggle(!1)}),this.followBtn.addEventListener(`click`,()=>{if(!this.lockedEnemy)return;let e=!this.following;this.setFollowing(e),e&&this.setOrbiting(!1),this.onFollowToggle(this.following),this.onOrbitToggle(!1)}),this.injectStyles()}update(e){let t=e.filter(e=>e.dist<150);this.lockedEnemy&&!t.find(e=>e.obj===this.lockedEnemy)&&(this.lockedEnemy=null,this.setOrbiting(!1),this.setFollowing(!1),this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1));let n=this.lockedEnemy?`visible`:`hidden`;if(this.orbitBtn.style.visibility=n,this.followBtn.style.visibility=n,t.length===0){this.el.style.display=`none`;return}this.el.style.display=`block`;let r=document.getElementById(`tgt-rows`);for(;this.rows.length<t.length;){let e=document.createElement(`div`);e.className=`tgt-row`;let t=document.createElement(`div`);t.className=`tgt-info`;let n=document.createElement(`span`);n.className=`tgt-key`,n.textContent=`SHD`;let i=document.createElement(`span`),a=document.createElement(`span`);a.className=`tgt-dist`;let o=document.createElement(`button`);o.className=`tgt-lock-btn`,t.append(n,i,a);let s=document.createElement(`div`);s.className=`tgt-bars`;let c=document.createElement(`div`);c.className=`tgt-health-bar`;let l=[];for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`tgt-health-block`,c.appendChild(e),l.push(e)}let u=document.createElement(`div`);u.className=`tgt-shield-bar`;let d=[];for(let e=0;e<5;e++){let e=document.createElement(`div`);e.className=`tgt-shield-circle`,u.appendChild(e),d.push(e)}s.append(c,u),e.append(t,s,o),r.appendChild(e);let f={el:e,shieldsEl:i,distEl:a,btn:o,healthBlocks:l,shieldCircles:d,enemy:null};o.addEventListener(`click`,()=>{this.lockedEnemy===f.enemy?(this.lockedEnemy=null,this.orbiting=!1,this.following=!1,this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1)):(this.lockedEnemy=f.enemy,this.orbitBtn.className=`tgt-orbit-btn available`,this.followBtn.className=`tgt-orbit-btn available`,this.onLockChange(!0,f.enemy))}),this.rows.push(f)}this.rows.forEach((e,n)=>e.el.style.display=n<t.length?`flex`:`none`),t.forEach((e,t)=>{let n=this.rows[t];n.enemy=e.obj,n.shieldsEl.textContent=`${Math.round(e.shields)}`,n.distEl.textContent=`${e.dist.toFixed(0)}u`;let r=Math.max(0,e.health);n.healthBlocks.forEach((e,t)=>{e.className=`tgt-health-block${t>=r?` empty`:``}`}),n.shieldCircles.forEach((t,n)=>{let r=n*20;e.shields>=r+20?t.className=`tgt-shield-circle full`:e.shields>=r+10?t.className=`tgt-shield-circle half`:t.className=`tgt-shield-circle`});let i=e.obj===this.lockedEnemy;n.btn.textContent=`⊕`,n.btn.className=`tgt-lock-btn${i?` locked`:``}`})}clearLock(){this.lockedEnemy=null,this.setOrbiting(!1),this.setFollowing(!1)}setOrbiting(e){this.orbiting=e,this.orbitBtn.className=this.lockedEnemy?e?`tgt-orbit-btn orbiting`:`tgt-orbit-btn available`:`tgt-orbit-btn`}setFollowing(e){this.following=e,this.followBtn.className=this.lockedEnemy?e?`tgt-orbit-btn orbiting`:`tgt-orbit-btn available`:`tgt-orbit-btn`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #target-hud {
        position: fixed; top: 16px; right: 16px;
        font-family: 'Courier New', monospace; font-size: 13px;
        z-index: 10; display: none; min-width: 200px;
      }
      .tgt-panel {
        background: rgba(0,10,30,0.7);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 4px; padding: 10px 14px; color: #8cf;
      }
      .tgt-header { margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid rgba(100,180,255,0.15); }
      .tgt-label { color: #f84; letter-spacing: 1px; }
      .tgt-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 6px; }
      .tgt-info { display: flex; gap: 8px; align-items: center; }
      .tgt-key { color: rgba(100,180,255,0.6); }
      .tgt-info > span:not(.tgt-key) { display: inline-block; min-width: 28px; text-align: right; }
      .tgt-dist { color: rgba(100,180,255,0.5); font-size: 11px; min-width: 36px !important; }
      .tgt-lock-btn {
        background: rgba(0,10,30,0.8); border: 1px solid rgba(100,180,255,0.3);
        border-radius: 3px; color: rgba(100,180,255,0.4); padding: 0;
        width: 20px; height: 20px; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px;
        cursor: pointer; transition: color 0.15s, border-color 0.15s;
      }
      .tgt-lock-btn:hover { border-color: rgba(100,180,255,0.8); color: #8cf; }
      .tgt-lock-btn.locked { border-color: rgba(255,130,50,0.8); color: #f84; }
      .tgt-bars { display: flex; flex-direction: column; gap: 3px; }
      .tgt-health-bar { display: flex; gap: 2px; align-items: center; }
      .tgt-health-block {
        width: 4px; height: 8px;
        background: rgba(60,220,80,0.85);
        border: 1px solid rgba(60,220,80,0.4);
      }
      .tgt-health-block.empty {
        background: rgba(60,220,80,0.1);
        border-color: rgba(60,220,80,0.2);
      }
      .tgt-shield-bar { display: flex; gap: 3px; align-items: center; }
      .tgt-shield-circle {
        width: 8px; height: 8px; border-radius: 50%;
        border: 1px solid rgba(100,180,255,0.2);
        background: transparent;
      }
      .tgt-shield-circle.half {
        border-color: rgba(100,180,255,0.8);
        background: transparent;
      }
      .tgt-shield-circle.full {
        border-color: rgba(100,180,255,0.8);
        background: rgba(100,180,255,0.75);
        box-shadow: 0 0 4px rgba(100,180,255,0.4);
      }
      @keyframes orbit-pulse {
        0%, 100% { opacity: 0.35; box-shadow: none; }
        50%       { opacity: 0.9;  box-shadow: 0 0 6px rgba(100,180,255,0.4); }
      }
      .tgt-orbit-btn {
        background: rgba(0,10,30,0.8); border: 1px solid rgba(100,180,255,0.2);
        border-radius: 3px; color: rgba(100,180,255,0.35); padding: 2px 8px;
        font-family: 'Courier New', monospace; font-size: 11px; cursor: pointer;
        transition: color 0.2s, border-color 0.2s;
      }
      .tgt-orbit-btn.available {
        animation: orbit-pulse 2s ease-in-out infinite;
        color: #8cf; border-color: rgba(100,180,255,0.5);
      }
      .tgt-orbit-btn.orbiting {
        animation: none;
        color: rgba(60,220,80,1); border-color: rgba(60,220,80,0.9);
        box-shadow: 0 0 6px rgba(60,220,80,0.3);
      }
      .tgt-orbit-btn:hover { border-color: rgba(100,180,255,0.8); color: #adf; }
    `,document.head.appendChild(e)}},fe=class{healthBlocks=[];shieldCircles=[];energyFill;state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`player-status`;let n=document.createElement(`div`);n.className=`ps-row`;let r=document.createElement(`span`);r.className=`ps-label`,r.textContent=`HULL`;let i=document.createElement(`div`);i.className=`ps-blocks`;for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`ps-health-block`,i.appendChild(e),this.healthBlocks.push(e)}n.append(r,i);let a=document.createElement(`div`);a.className=`ps-row`;let o=document.createElement(`span`);o.className=`ps-label`,o.textContent=`SHLD`;let s=document.createElement(`div`);s.className=`ps-circles`;for(let e=0;e<5;e++){let e=document.createElement(`div`);e.className=`ps-shield-circle`,s.appendChild(e),this.shieldCircles.push(e)}a.append(o,s);let c=document.createElement(`div`);c.className=`ps-row`;let l=document.createElement(`span`);l.className=`ps-label`,l.textContent=`PWR`;let u=document.createElement(`div`);u.className=`ps-energy-track`,this.energyFill=document.createElement(`div`),this.energyFill.className=`ps-energy-fill`,u.appendChild(this.energyFill),c.append(l,u),t.append(n,a,c),document.body.appendChild(t),this.injectStyles()}update(){let{health:e,maxHealth:t,shields:n,energy:r,maxEnergy:i}=this.state,a=Math.max(0,Math.round(e/t*10));this.healthBlocks.forEach((e,t)=>{e.className=`ps-health-block${t>=a?` empty`:``}`}),this.shieldCircles.forEach((e,t)=>{let r=t*20;n>=r+20?e.className=`ps-shield-circle full`:n>=r+10?e.className=`ps-shield-circle half`:e.className=`ps-shield-circle`});let o=Math.max(0,Math.min(1,r/i))*100;this.energyFill.style.width=`${o}%`;let s=o*1.2;this.energyFill.style.background=`hsl(${s}, 90%, 55%)`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #player-status {
        position: fixed; top: 16px; left: 16px;
        font-family: 'Courier New', monospace;
        background: rgba(0,10,30,0.7);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 4px; padding: 10px 14px;
        display: flex; flex-direction: column; gap: 8px;
        pointer-events: none; z-index: 11;
      }
      .ps-row { display: flex; align-items: center; gap: 10px; }
      .ps-label {
        font-size: 11px; letter-spacing: 1px;
        color: rgba(100,180,255,0.5); width: 32px;
      }
      .ps-blocks { display: flex; gap: 3px; }
      .ps-health-block {
        width: 10px; height: 16px;
        background: rgba(60,220,80,0.85);
        border: 1px solid rgba(60,220,80,0.4);
        box-shadow: 0 0 4px rgba(60,220,80,0.3);
      }
      .ps-health-block.empty {
        background: rgba(60,220,80,0.08);
        border-color: rgba(60,220,80,0.2);
        box-shadow: none;
      }
      .ps-circles { display: flex; gap: 5px; }
      .ps-shield-circle {
        width: 14px; height: 14px; border-radius: 50%;
        border: 1px solid rgba(100,180,255,0.2);
        background: transparent;
      }
      .ps-shield-circle.half {
        border-color: rgba(100,180,255,0.8);
        border-width: 2px;
      }
      .ps-shield-circle.full {
        border-color: rgba(100,180,255,0.8);
        background: rgba(100,180,255,0.75);
        box-shadow: 0 0 6px rgba(100,180,255,0.4);
      }
      .ps-energy-track {
        width: 120px; height: 8px;
        background: rgba(255,255,255,0.08);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 3px; overflow: hidden;
      }
      .ps-energy-fill {
        height: 100%; border-radius: 2px;
        transition: width 0.1s linear, background 0.3s;
      }
    `,document.head.appendChild(e)}},pe=class{recognition;listening=!1;onResult;onStateChange;constructor(e,t){this.onResult=e,this.onStateChange=t;let n=window.SpeechRecognition??window.webkitSpeechRecognition;if(!n)throw Error(`SpeechRecognition not supported`);this.recognition=new n,this.recognition.lang=`en-US`,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=e=>{let t=e.results[0][0].transcript;this.onResult(t)},this.recognition.onend=()=>{this.listening=!1,this.onStateChange(!1)},this.recognition.onerror=()=>{this.listening=!1,this.onStateChange(!1)}}start(){this.listening||(this.recognition.start(),this.listening=!0,this.onStateChange(!0))}stop(){this.listening&&this.recognition.stop()}toggle(){this.listening?this.stop():this.start()}get active(){return this.listening}};async function me(e){let t=await fetch(`/api/sofi`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e})});if(!t.ok)throw Error(`Sofi is offline`);return t.json()}var he=class{input;log;voiceBtn;voice;state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`cmd-wrap`,this.input=document.createElement(`input`),this.input.id=`cmd-input`,this.input.type=`text`,this.input.placeholder=`Enter command...`,this.input.spellcheck=!1,this.voiceBtn=document.createElement(`button`),this.voiceBtn.id=`cmd-voice`,this.voiceBtn.textContent=`🎙`,this.voiceBtn.title=`Hold V or click to speak`;let n=document.createElement(`div`);n.id=`cmd-input-row`,n.appendChild(this.input),n.appendChild(this.voiceBtn),this.log=document.createElement(`div`),this.log.id=`cmd-log`,t.appendChild(this.log),t.appendChild(n),document.body.appendChild(t),speechSynthesis.getVoices(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices()),this.voice=new pe(e=>this.submit(e),e=>{this.voiceBtn.classList.toggle(`listening`,e),this.input.placeholder=e?`Listening...`:`Enter command...`}),this.voiceBtn.addEventListener(`click`,()=>this.voice.toggle()),window.addEventListener(`keydown`,e=>{e.code===`KeyV`&&!e.repeat&&document.activeElement!==this.input&&this.voice.start()}),window.addEventListener(`keyup`,e=>{e.code===`KeyV`&&this.voice.stop()}),this.input.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&(this.submit(this.input.value.trim()),this.input.value=``),e.key===`Escape`&&this.input.blur()}),this.injectStyles()}async submit(e){if(!e)return;this.addLog(`> ${e}`,`...`,!0);let t;try{t=await me(e)}catch{this.replaceLastResponse(`Sofi is offline`,!1);return}let n=t.command;if(!n){this.replaceLastResponse(t.reply,!1),this.speak(t.reply);return}if(n.action===`setValue`&&n.value!==void 0){let e=Math.max(0,Math.min(100,n.value));n.system===`shields`?(this.state.maxShields=e,this.state.shields=Math.min(this.state.shields,e)):n.system===`engines`?(this.state.maxEngines=e,this.state.engines=Math.min(this.state.engines,e)):this.state[n.system]=e}else n.action===`turnOn`?n.system===`weapons`?(this.state.lasers.auto=!0,this.state.lasers.pendingFire=!0):n.system===`shields`?(this.state.maxShields=100,this.state.shields=Math.min(this.state.shields,100)):n.system===`engines`?(this.state.maxEngines=100,this.state.engines=100):this.state[n.system]=100:n.action===`turnOff`&&(n.system===`weapons`?this.state.lasers.auto=!1:n.system===`shields`?(this.state.maxShields=0,this.state.shields=0):n.system===`engines`?(this.state.maxEngines=0,this.state.engines=0):this.state[n.system]=0);this.replaceLastResponse(t.reply,!0),this.speak(t.reply)}speak(e){let t=new SpeechSynthesisUtterance(e);t.pitch=1.1,t.rate=1;let n=speechSynthesis.getVoices().find(e=>/female|zira|samantha|karen|moira|victoria/i.test(e.name));n&&(t.voice=n),speechSynthesis.cancel(),speechSynthesis.speak(t)}replaceLastResponse(e,t){let n=this.log.lastElementChild;if(n){let r=n.querySelector(`.cmd-resp`);r&&(r.textContent=e,r.className=`cmd-resp ${t?`ok`:`err`}`)}}addLog(e,t,n){let r=document.createElement(`div`);for(r.className=`cmd-entry`,r.innerHTML=`<span class="cmd-text">${e}</span><span class="cmd-resp ${n?`ok`:`err`}">${t}</span>`,this.log.appendChild(r),this.log.scrollTop=this.log.scrollHeight;this.log.children.length>6;)this.log.removeChild(this.log.firstChild)}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #cmd-wrap {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 420px;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        z-index: 10;
      }
      #cmd-log {
        margin-bottom: 6px;
        max-height: 120px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .cmd-entry {
        display: flex;
        justify-content: space-between;
        background: rgba(0,10,30,0.6);
        padding: 3px 8px;
        border-radius: 3px;
        color: #8cf;
      }
      .cmd-text { color: rgba(100,180,255,0.5); }
      .cmd-resp.ok  { color: #8cf; }
      .cmd-resp.err { color: #f88; }
      #cmd-input-row {
        display: flex;
        gap: 6px;
      }
      #cmd-input {
        flex: 1;
        background: rgba(0,10,30,0.8);
        border: 1px solid rgba(100,180,255,0.4);
        border-radius: 4px;
        color: #8cf;
        padding: 8px 12px;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        outline: none;
        box-sizing: border-box;
      }
      #cmd-input::placeholder { color: rgba(100,180,255,0.3); }
      #cmd-input:focus { border-color: rgba(100,180,255,0.8); }
      #cmd-voice {
        background: rgba(0,10,30,0.8);
        border: 1px solid rgba(100,180,255,0.4);
        border-radius: 4px;
        color: #8cf;
        padding: 0 10px;
        font-size: 16px;
        cursor: pointer;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      #cmd-voice.listening {
        border-color: rgba(255,80,80,0.8);
        box-shadow: 0 0 8px rgba(255,80,80,0.4);
      }
    `,document.head.appendChild(e)}},ge=144,_e=120,ve=2,ye=10,be=72,xe=120,Se=2.5,Ce=20;function H(e,t){let n=E(g(),k(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function we(e,t,n,r){for(let i of e){if(i.dead)continue;let e=ge*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>_e){i.dead=!0;continue}T(i.pos,n)<ve&&(r(ye,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}function Te(e,t){let n=E(g(),k(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function Ee(e,t,n,r){for(let i of e){if(i.dead)continue;let e=be*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>xe){i.dead=!0;continue}T(i.pos,n)<Se&&(r(Ce,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var U=70,W=2,De=12,Oe=14,ke=35,Ae=10,je=1.4,Me=60,Ne=2.2,Pe=144,Fe=class{pos=y(20,4,-20);heading=y(-1,0,0);shields=80;maxShields=80;health=10;maxHealth=10;hitRing=0;hitPos=y(0,0,1);chargeWave=-1;lasers=[];prevShieldBubble=0;target=g();yaw=180;pitch=0;rollAngle=0;fireTimer=Math.random()*Ne;constructor(e){e&&b(this.pos,e),this.pickWaypoint()}pickWaypoint(){this.target=y((Math.random()*2-1)*U,W+Math.random()*(De-W),(Math.random()*2-1)*U)}update(e,t){let n=k(g(),this.target,this.pos);v(n)<Ae&&this.pickWaypoint();let i=Math.atan2(n[0],n[2])*180/Math.PI,a=Math.atan2(n[1],Math.sqrt(n[0]**2+n[2]**2))*180/Math.PI,o=ke*e,s=((i-this.yaw)%360+540)%360-180,c=a-this.pitch;s=Math.max(-o,Math.min(o,s)),c=Math.max(-o,Math.min(o,c));let l=this.yaw;this.yaw+=s,this.pitch+=c;let u=((this.yaw-l)%360+540)%360-180,d=Math.max(-70,Math.min(70,-u*60*60));this.rollAngle+=(d-this.rollAngle)*Math.min(1,.1*e*60);let f=r(this.yaw),p=r(this.pitch);if(this.heading=E(g(),y(Math.sin(f)*Math.cos(p),Math.sin(p),Math.cos(f)*Math.cos(p))),w(this.pos,this.pos,this.heading,Oe*e),this.pos[0]=Math.max(-70,Math.min(U,this.pos[0])),this.pos[1]=Math.max(W,Math.min(De,this.pos[1])),this.pos[2]=Math.max(-70,Math.min(U,this.pos[2])),t){let n=T(this.pos,t);this.fireTimer-=e,this.fireTimer<=0&&n<Me&&(this.lasers.push(H(this.pos,t)),this.fireTimer=Ne)}for(let t of this.lasers){if(t.dead)continue;let n=Pe*e;w(t.pos,t.pos,t.dir,n),t.traveled+=n,t.traveled>120&&(t.dead=!0)}for(let e=this.lasers.length-1;e>=0;e--)this.lasers[e].dead&&this.lasers.splice(e,1);this.shields=Math.min(this.maxShields,this.shields+je*e);let m=Math.floor(this.shields/20);m>this.prevShieldBubble&&(this.chargeWave=0),this.prevShieldBubble=m,this.chargeWave>=0&&(this.chargeWave+=e*2.5,this.chargeWave>=1&&(this.chargeWave=-1)),this.hitRing>0&&(this.hitRing+=e*2.5,this.hitRing>=1&&(this.hitRing=0))}get modelMatrix(){let e=i();return s(e,e,this.pos),u(e,e,r(this.yaw)),l(e,e,r(-this.pitch)),d(e,e,r(this.rollAngle)),e}},Ie=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out float vT;

void main() {
    vT = aPos.z; // 0=tail, 1=head
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
`,Le=`#version 300 es
precision mediump float;

in float vT;
out vec4 FragColor;

uniform vec3 laserColor;

void main() {
    float brightness = pow(vT, 0.4); // bright at head, fade at tail
    FragColor = vec4(laserColor * brightness, brightness);
}
`,Re=3,G=.06,ze=1.4,Be=.18,Ve=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new N(e,Ie,Le);let{vao:t,indexCount:n}=this.buildQuad();this.vao=t,this.indexCount=n}buildQuad(){let e=this.gl,t=G,n=new Float32Array([-.06,-.06,0,t,-.06,0,t,t,0,-.06,t,0,-.06,-.06,1,t,-.06,1,t,t,1,-.06,t,1]),r=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),i=e.createVertexArray(),a=e.createBuffer(),o=e.createBuffer();return e.bindVertexArray(i),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),{vao:i,indexCount:r.length}}draw(e,t,n,r=y(.2,1,1),a=Re,o=G){if(e.length===0)return;let l=this.gl;this.shader.use(),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`laserColor`,r),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE),l.depthMask(!1),l.bindVertexArray(this.vao);for(let t of e){let e=i();s(e,e,w(g(),t.pos,t.dir,-a));let n=Math.abs(t.dir[1])<.99?y(0,1,0):y(1,0,0),r=E(g(),D(g(),n,t.dir)),u=D(g(),t.dir,r);e[0]=r[0],e[1]=r[1],e[2]=r[2],e[4]=u[0],e[5]=u[1],e[6]=u[2],e[8]=t.dir[0],e[9]=t.dir[1],e[10]=t.dir[2],c(e,e,[o/G,o/G,a]),this.shader.setMat4(`model`,e),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_SHORT,0)}l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}get pulseLength(){return ze}get pulseWidth(){return Be}get pulseColor(){return y(1,.5,.05)}},He=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 view;
uniform mat4 projection;
uniform vec3 startPos;
uniform vec3 endPos;
uniform vec3 viewPos;
uniform float width;

out float vAlongBeam;

void main() {
    vec3 dir    = normalize(endPos - startPos);
    vec3 midPt  = mix(startPos, endPos, aPos.z);
    vec3 toEye  = normalize(viewPos - midPt);
    vec3 right  = normalize(cross(dir, toEye));

    vec3 worldPos = midPt + right * (aPos.x * width);
    vAlongBeam = aPos.z;
    gl_Position = projection * view * vec4(worldPos, 1.0);
}
`,Ue=`#version 300 es
precision mediump float;

in float vAlongBeam;
out vec4 FragColor;

uniform vec3  beamColor;
uniform float alpha;

void main() {
    // fade at both ends
    float edge = min(vAlongBeam, 1.0 - vAlongBeam) * 6.0;
    float a = clamp(edge, 0.0, 1.0) * alpha;
    FragColor = vec4(beamColor, a);
}
`,We=class{shader;vao;gl;constructor(e){this.gl=e,this.shader=new N(e,He,Ue),this.vao=this.buildQuad()}buildQuad(){let e=this.gl,t=new Float32Array([-1,0,0,1,0,0,1,0,1,-1,0,1]),n=new Uint16Array([0,1,2,0,2,3]),r=e.createVertexArray(),i=e.createBuffer(),a=e.createBuffer();return e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),r}draw(e,t,n,r,i,a,o){let s=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),this.shader.setVec3(`startPos`,n),this.shader.setVec3(`endPos`,r),this.shader.setVec3(`viewPos`,i),this.shader.setFloat(`width`,.04),this.shader.setVec3(`beamColor`,y(1,.05,.05)),this.shader.setFloat(`alpha`,a/o*.55),s.enable(s.BLEND),s.blendFunc(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1),s.bindVertexArray(this.vao),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0),s.bindVertexArray(null),s.depthMask(!0),s.disable(s.BLEND)}},K=36,Ge=72,q=90,J=.08,Y=35,X=.07,Ke=class{gl;width;height;grid;shield;engine;ship;hud;playerStatus;weaponsHud;targetHud;cameraLocked=!1;orbitActive=!1;followActive=!1;FOLLOW_DIST=18;orbitRadius=20;smoothCamPos=g();smoothCamTarget=g();camInitialized=!1;wasOrbiting=!1;ready=!1;startTime=performance.now();shipPos=y(0,0,0);shipFront=y(0,0,-1);worldUp=y(0,1,0);yaw=-90;pitch=0;currentSpeed=K*.03;rollAngle=0;pitchAngle=0;shipState;input;lightPos=y(10,10,10);enemies=(()=>{let e=new Fe,t=new Fe(y(-20,4,20));return t.shields=20,t.maxShields=20,[e,t]})();lockedEnemy=null;lastTime=performance.now();enemyShieldColor=y(1,.45,0);laserRenderer;beamRenderer;lasers=[];burstShotsLeft=0;burstCooldown=0;SHOT_INTERVAL=.15;pulses=[];pulseShotsLeft=0;pulseCooldown=0;lanceTimeLeft=0;LANCE_DURATION=1;lanceEndOffset=g();prevPlayerBubble=0;targetIndicator;constructor(e,t,n,r){this.gl=e,this.width=t,this.height=n,this.shipState=ce(),this.input=new se(r),this.createTargetIndicator(),this.init()}async init(){try{let e=this.gl,t=await oe(`/games/yes-captain/models/craft_speederA.obj`);this.grid=new I(e),this.shield=new R(e),this.engine=new B(e),this.ship=new ae(e,t),this.playerStatus=new fe(this.shipState),this.hud=new le(this.shipState),this.weaponsHud=new ue(this.shipState,()=>this.fireBurst(),()=>this.firePulseBurst(),()=>this.fireLance()),this.targetHud=new de((e,t)=>{this.cameraLocked=e,this.lockedEnemy=e?t:null,e||(this.orbitActive=!1,this.followActive=!1)},e=>{this.orbitActive=e,e&&(this.followActive=!1,this.orbitRadius=30)},e=>{this.followActive=e,e&&(this.orbitActive=!1)}),new he(this.shipState),this.laserRenderer=new Ve(e),this.beamRenderer=new We(e),this.ready=!0}catch(e){console.error(`Renderer init failed:`,e)}}resize(e,t){this.width=e,this.height=t,this.gl.viewport(0,0,e,t)}frame(){if(!this.ready)return;let e=this.gl,t=performance.now(),n=Math.min((t-this.lastTime)/1e3,.05);if(this.lastTime=t,this.processInput(n),!this.input.isOrbiting()){let e=Math.atan2(-this.shipFront[0],-this.shipFront[2])*180/Math.PI,t=.08*n*60,r=((e-this.input.orbitAzimuth)%360+540)%360-180;this.input.orbitAzimuth+=r*t,this.input.orbitElevation+=(15-this.input.orbitElevation)*t}let a=r(this.input.orbitAzimuth),o=r(this.input.orbitElevation),f=this.input.orbitDistance,h=y(this.shipPos[0]+f*Math.cos(o)*Math.sin(a),this.shipPos[1]+f*Math.sin(o),this.shipPos[2]+f*Math.cos(o)*Math.cos(a)),_,x;if(this.cameraLocked&&this.lockedEnemy)if(x=this.lockedEnemy.pos,this.input.isOrbiting()){if(!this.wasOrbiting){let e=k(g(),this.smoothCamPos,this.shipPos),t=Math.sqrt(e[0]**2+e[2]**2);this.input.orbitElevation=Math.atan2(e[1],t)*180/Math.PI,this.input.orbitAzimuth=Math.atan2(e[0],e[2])*180/Math.PI,this.input.orbitDistance=v(e)}_=h,x=this.shipPos}else{let e=E(g(),k(g(),this.lockedEnemy.pos,this.shipPos)),t=ee(g(),e,-f);t[1]+=f*.25,_=S(g(),this.shipPos,t)}else _=h,x=this.shipPos;this.camInitialized||=(b(this.smoothCamPos,_),b(this.smoothCamTarget,x),!0);let C=.06*n*60,w=this.cameraLocked&&this.input.isOrbiting()?.03*n*60:.06*n*60;O(this.smoothCamPos,this.smoothCamPos,_,C),O(this.smoothCamTarget,this.smoothCamTarget,x,w);let D=m(i(),this.smoothCamPos,this.smoothCamTarget,this.worldUp),N=p(i(),r(45),this.width/this.height,.1,1e3);e.viewport(0,0,this.width,this.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.grid.draw(D,N);let P=90-this.yaw,F=i();s(F,F,this.shipPos),u(F,F,r(P)),l(F,F,r(this.pitchAngle)),d(F,F,r(this.rollAngle)),this.ship.draw(F,D,N,this.lightPos,this.smoothCamPos);let I=i();u(I,I,r(P)),l(I,I,r(this.pitchAngle)),d(I,I,r(this.rollAngle));let L=M(A(),j(0,.3,0,0),I),te=S(g(),this.shipPos,y(L[0],L[1],L[2])),R=i();s(R,R,te),c(R,R,[1.5,1.5,1.5]),this.shield.draw(R,D,N,this.smoothCamPos,this.shipState.shields,void 0,this.shipState.hitRing,this.shipState.hitPos,this.shipState.chargeWave);let ne=(performance.now()-this.startTime)/1e3;for(let e of[-.35,.35]){let t=j(e,.25,-.9,0),n=M(A(),t,I),r=S(g(),this.shipPos,y(n[0],n[1],n[2])),i=this.currentSpeed/K*100;this.engine.draw(r,I,D,N,i,ne)}this.weaponsHud.update(n,this.cameraLocked,this.shipState.energy/this.shipState.maxEnergy),this.shipState.lasers.pendingFire&&!this.shipState.lasers.reloading&&this.burstShotsLeft===0&&(this.shipState.lasers.pendingFire=!1,this.cameraLocked&&this.fireBurst()),this.burstShotsLeft>0&&(this.burstCooldown-=n,this.burstCooldown<=0&&(this.lockedEnemy&&this.lasers.push(H(this.shipPos,this.lockedEnemy.pos)),this.shipState.energy=Math.max(0,this.shipState.energy-6),this.burstShotsLeft--,this.burstCooldown=this.SHOT_INTERVAL,this.burstShotsLeft===0&&(this.shipState.lasers.reloading=!0,this.shipState.lasers.reloadTimer=this.shipState.lasers.reloadTime))),this.shipState.pulse.pendingFire&&!this.shipState.pulse.reloading&&this.pulseShotsLeft===0&&(this.shipState.pulse.pendingFire=!1,this.cameraLocked&&this.firePulseBurst()),this.pulseShotsLeft>0&&(this.pulseCooldown-=n,this.pulseCooldown<=0&&(this.lockedEnemy&&this.pulses.push(Te(this.shipPos,this.lockedEnemy.pos)),this.shipState.energy=Math.max(0,this.shipState.energy-16),this.pulseShotsLeft--,this.pulseCooldown=.3,this.pulseShotsLeft===0&&(this.shipState.pulse.reloading=!0,this.shipState.pulse.reloadTimer=this.shipState.pulse.reloadTime)));let z=(e,t)=>{if(this.lockedEnemy){if(this.lockedEnemy.shields>=20){this.lockedEnemy.shields=Math.max(0,this.lockedEnemy.shields-e);let n=k(g(),t,this.lockedEnemy.pos);E(this.lockedEnemy.hitPos,n),this.lockedEnemy.hitRing=.01}else if(this.lockedEnemy.health=Math.max(0,this.lockedEnemy.health-e/10),this.lockedEnemy.health<=0){let e=this.enemies.indexOf(this.lockedEnemy);e!==-1&&this.enemies.splice(e,1),this.lockedEnemy=null,this.cameraLocked=!1,this.orbitActive=!1,this.targetHud.clearLock()}}};if(this.lockedEnemy){let e=this.lockedEnemy;we(this.lasers,n,e.pos,z),Ee(this.pulses,n,e.pos,z)}if(this.laserRenderer.draw(this.lasers,D,N),this.laserRenderer.draw(this.pulses,D,N,this.laserRenderer.pulseColor,this.laserRenderer.pulseLength,this.laserRenderer.pulseWidth),this.shipState.lance.pendingFire&&!this.shipState.lance.reloading&&this.lanceTimeLeft<=0&&(this.shipState.lance.pendingFire=!1,this.cameraLocked&&this.fireLance()),this.lanceTimeLeft>0&&this.lockedEnemy){this.lanceTimeLeft-=n;let e=y((Math.random()-.5)*6,(Math.random()-.5)*2,(Math.random()-.5)*6);O(this.lanceEndOffset,this.lanceEndOffset,e,.18);let t=S(g(),this.lockedEnemy.pos,this.lanceEndOffset);this.beamRenderer.draw(D,N,this.shipPos,t,this.smoothCamPos,this.lanceTimeLeft,this.LANCE_DURATION),this.lanceTimeLeft<=0&&(this.shipState.lance.reloading=!0,this.shipState.lance.reloadTimer=this.shipState.lance.reloadTime)}let B=this.currentSpeed/K,re=25-B*15,ie=B*8;this.shipState.energy=Math.min(this.shipState.maxEnergy,this.shipState.energy+(re-ie)*n);let ae=5*(this.shipState.energy/this.shipState.maxEnergy);this.shipState.shields<this.shipState.maxShields&&(this.shipState.energy=Math.max(0,this.shipState.energy-4*n)),this.shipState.shields=Math.min(this.shipState.maxShields,this.shipState.shields+ae*n);let V=Math.floor(this.shipState.shields/20);V>this.prevPlayerBubble&&(this.shipState.chargeWave=0),this.prevPlayerBubble=V,this.shipState.chargeWave>=0&&(this.shipState.chargeWave+=n*2.5,this.shipState.chargeWave>=1&&(this.shipState.chargeWave=-1)),this.shipState.hitRing>0&&(this.shipState.hitRing+=n*2.5,this.shipState.hitRing>=1&&(this.shipState.hitRing=0));for(let e of this.enemies){e.update(n,this.shipPos);for(let t of e.lasers)if(!t.dead&&T(t.pos,this.shipPos)<2.5)if(t.dead=!0,this.shipState.shields>=20){this.shipState.shields=Math.max(0,this.shipState.shields-10);let e=k(g(),t.pos,this.shipPos);E(this.shipState.hitPos,e),this.shipState.hitRing=.01}else this.shipState.health=Math.max(0,this.shipState.health-1);this.laserRenderer.draw(e.lasers,D,N,y(1,.3,.1)),this.ship.draw(e.modelMatrix,D,N,this.lightPos,this.smoothCamPos);let t=i();s(t,t,y(e.pos[0],e.pos[1]+.3,e.pos[2])),c(t,t,[1.5,1.5,1.5]),this.shield.draw(t,D,N,this.smoothCamPos,e.shields,this.enemyShieldColor,e.hitRing,e.hitPos,e.chargeWave)}this.targetHud.update(this.enemies.map(e=>({obj:e,shields:e.shields,maxShields:e.maxShields,health:e.health,maxHealth:e.maxHealth,dist:T(this.shipPos,e.pos)}))),this.playerStatus.update(),this.hud.update(this.shipState,this.currentSpeed/K*100),this.updateTargetIndicator(D,N),this.wasOrbiting=this.input.isOrbiting()}createTargetIndicator(){let e=document.createElement(`style`);e.textContent=`
      @keyframes tgt-bounce {
        0%, 100% { transform: translateX(-50%) translateY(0px); filter: drop-shadow(0 0 4px rgba(255,60,60,0.5)); }
        50%       { transform: translateX(-50%) translateY(-5px); filter: drop-shadow(0 0 10px rgba(255,60,60,0.9)); }
      }
      #target-indicator {
        position: fixed; pointer-events: none; display: none;
        width: 0; height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 14px solid rgba(255, 60, 60, 0.85);
        animation: tgt-bounce 1.1s ease-in-out infinite;
      }
    `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`target-indicator`,document.body.appendChild(t),this.targetIndicator=t}updateTargetIndicator(e,t){if(!this.cameraLocked||!this.lockedEnemy){this.targetIndicator.style.display=`none`;return}let n=y(this.lockedEnemy.pos[0],this.lockedEnemy.pos[1]+3,this.lockedEnemy.pos[2]),r=h(i(),t,e),a=M(A(),j(n[0],n[1],n[2],1),r);if(a[3]<=0){this.targetIndicator.style.display=`none`;return}let o=a[0]/a[3],s=-a[1]/a[3],c=(o+1)/2*this.width,l=(s+1)/2*this.height;this.targetIndicator.style.display=`block`,this.targetIndicator.style.left=`${c}px`,this.targetIndicator.style.top=`${l}px`}fireBurst(){!this.cameraLocked||this.shipState.lasers.reloading||this.burstShotsLeft>0||(this.shipState.lasers.pendingFire=!1,this.burstShotsLeft=this.shipState.lasers.shotsPerBurst,this.burstCooldown=0)}firePulseBurst(){!this.cameraLocked||this.shipState.pulse.reloading||this.pulseShotsLeft>0||(this.shipState.pulse.pendingFire=!1,this.pulseShotsLeft=this.shipState.pulse.shotsPerBurst,this.pulseCooldown=0)}fireLance(){if(!(!this.cameraLocked||this.shipState.lance.reloading||this.lanceTimeLeft>0||!this.lockedEnemy)&&(this.shipState.lance.pendingFire=!1,this.shipState.energy=Math.max(0,this.shipState.energy-30),this.lanceTimeLeft=this.LANCE_DURATION,x(this.lanceEndOffset,0,0,0),!(this.lockedEnemy.shields>=20)&&(this.lockedEnemy.health=Math.max(0,this.lockedEnemy.health-3),this.lockedEnemy.health<=0))){let e=this.enemies.indexOf(this.lockedEnemy);e!==-1&&this.enemies.splice(e,1),this.lockedEnemy=null,this.cameraLocked=!1,this.orbitActive=!1,this.targetHud.clearLock()}}processInput(e){let t=this.input;if(this.shipState.engines=this.shipState.maxEngines,this.currentSpeed=this.shipState.engines/100*K,this.followActive&&this.lockedEnemy){let t=this.lockedEnemy,n=E(g(),y(t.heading[0],0,t.heading[2])),i=w(g(),t.pos,n,-this.FOLLOW_DIST),a=y(i[0]-this.shipPos[0],0,i[2]-this.shipPos[2]),o=v(a),s=this.yaw;if(o>.5){let t=E(g(),a),n=E(g(),y(this.shipFront[0],0,this.shipFront[2]));O(n,n,t,.05*e*60),E(n,n),this.yaw=Math.atan2(n[2],n[0])*180/Math.PI}let c=i[1]-this.shipPos[1],l=Math.max(-35,Math.min(Y,-c*3));this.pitch+=(l-this.pitch)*.04*e*60,this.pitch=Math.max(-35,Math.min(Y,this.pitch));let u=r(this.yaw),d=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(u)*Math.cos(d),Math.sin(d),Math.sin(u)*Math.cos(d))),this.pitchAngle+=(this.pitch-this.pitchAngle)*X*e*60;let f=((this.yaw-s)%360+540)%360-180,p=Math.max(-90,Math.min(q,f*80*60));this.rollAngle+=(p-this.rollAngle)*J*e*60*2;let m=Math.min(1,o/(this.FOLLOW_DIST*1.5));w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*m*e);return}if(this.orbitActive&&this.lockedEnemy){let t=this.yaw,n=k(g(),this.shipPos,this.lockedEnemy.pos);n[1]=0;let r=v(n);if(r>.01){let t=E(g(),n),i=E(g(),y(-t[2]+t[0]*(this.orbitRadius-r)*.02,0,t[0]+t[2]*(this.orbitRadius-r)*.02)),a=E(g(),y(this.shipFront[0],0,this.shipFront[2]));O(a,a,i,.04*e*60),E(a,a),this.shipFront[0]=a[0],this.shipFront[2]=a[2],this.shipFront[1]=0}this.pitch=0,this.pitchAngle+=(0-this.pitchAngle)*X*e*60,this.yaw=Math.atan2(this.shipFront[2],this.shipFront[0])*180/Math.PI;let i=((this.yaw-t)%360+540)%360-180,a=Math.max(-90,Math.min(q,i*80*60));this.rollAngle+=(a-this.rollAngle)*J*e*60*2,w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e);return}let n=t.held(`KeyA`),i=t.held(`KeyD`),a=n?-90:i?q:0;this.rollAngle+=(a-this.rollAngle)*J*e*60,this.rollAngle=Math.max(-90,Math.min(q,this.rollAngle));let o=t.held(`KeyW`),s=t.held(`KeyS`);if(o||s){let t=Ge*e*(o?-1:1),n=r(this.rollAngle);this.pitch+=t*Math.cos(n),this.yaw-=t*Math.sin(n),this.pitch=Math.max(-35,Math.min(Y,this.pitch))}else this.pitch*=.88**(e*60);this.pitchAngle+=(this.pitch-this.pitchAngle)*X*e*60;let c=r(this.yaw),l=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(c)*Math.cos(l),Math.sin(l),Math.sin(c)*Math.cos(l))),w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e)}},Z=document.getElementById(`glCanvas`);Z.width=window.innerWidth,Z.height=window.innerHeight,window.addEventListener(`resize`,()=>{Z.width=window.innerWidth,Z.height=window.innerHeight,Q.resize(Z.width,Z.height)});var Q=new Ke(e(Z),Z.width,Z.height,Z);function $(){Q.frame(),requestAnimationFrame($)}requestAnimationFrame($);