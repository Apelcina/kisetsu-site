(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=e.getContext(`webgl2`);if(!t)throw Error(`WebGL2 not supported in this browser`);return t.enable(t.DEPTH_TEST),t.clearColor(.05,.05,.1,1),t}var t=typeof Float32Array<`u`?Float32Array:Array,n=Math.PI/180;180/Math.PI;function r(e){return e*n}function i(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function a(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function o(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function s(e,t,n){var r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function c(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function l(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function u(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function d(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function f(e,t,n,r,i){var a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var o=1/(r-i);e[10]=(i+r)*o,e[14]=2*i*r*o}else e[10]=-1,e[14]=-2*r;return e}var p=f;function m(e,t,n,r){var i,o,s,c,l,u,d,f,p,m,h=t[0],g=t[1],_=t[2],v=r[0],y=r[1],b=r[2],x=n[0],S=n[1],C=n[2];return Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6&&Math.abs(_-C)<1e-6?a(e):(d=h-x,f=g-S,p=_-C,m=1/Math.sqrt(d*d+f*f+p*p),d*=m,f*=m,p*=m,i=y*p-b*f,o=b*d-v*p,s=v*f-y*d,m=Math.sqrt(i*i+o*o+s*s),m?(m=1/m,i*=m,o*=m,s*=m):(i=0,o=0,s=0),c=f*s-p*o,l=p*i-d*s,u=d*o-f*i,m=Math.sqrt(c*c+l*l+u*u),m?(m=1/m,c*=m,l*=m,u*=m):(c=0,l=0,u=0),e[0]=i,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(i*h+o*g+s*_),e[13]=-(c*h+l*g+u*_),e[14]=-(d*h+f*g+p*_),e[15]=1,e)}var h=o;function g(){var e=new t(3);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function _(e){var n=new t(3);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function v(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function y(e,n,r){var i=new t(3);return i[0]=e,i[1]=n,i[2]=r,i}function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function x(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function S(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function C(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function w(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function T(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function E(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function D(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function O(e,t,n,r){var i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}var k=S;(function(){var e=g();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function A(){var e=new t(4);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function ee(e,n,r,i){var a=new t(4);return a[0]=e,a[1]=n,a[2]=r,a[3]=i,a}function j(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=A();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var M=class{gl;program;constructor(e,t,n){this.gl=e,this.program=this.link(this.compile(e.VERTEX_SHADER,t),this.compile(e.FRAGMENT_SHADER,n))}compile(e,t){let n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(`Shader compile error: ${n.getShaderInfoLog(r)}`);return r}link(e,t){let n=this.gl,r=n.createProgram();if(n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS))throw Error(`Program link error: ${n.getProgramInfoLog(r)}`);return n.deleteShader(e),n.deleteShader(t),r}use(){this.gl.useProgram(this.program)}setFloat(e,t){this.gl.uniform1f(this.gl.getUniformLocation(this.program,e),t)}setVec3(e,t){this.gl.uniform3fv(this.gl.getUniformLocation(this.program,e),t)}setMat4(e,t){this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program,e),!1,t)}},N=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 view;
uniform mat4 projection;

void main() {
    gl_Position = projection * view * vec4(aPos, 1.0);
}
`,P=`#version 300 es
precision mediump float;

out vec4 FragColor;

void main() {
    FragColor = vec4(0.4, 0.4, 0.4, 1.0);
}
`,te=class{shader;vao;lineCount;gl;constructor(e,t=100,n=2){this.gl=e,this.shader=new M(e,N,P);let r=[];for(let e=-t;e<=t;e+=n){let n=e,i=t;r.push(-i,-2,n,i,-2,n),r.push(n,-2,-i,n,-2,i)}this.lineCount=r.length/3,this.vao=e.createVertexArray();let i=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null)}draw(e,t){let n=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),n.bindVertexArray(this.vao),n.drawArrays(n.LINES,0,this.lineCount),n.bindVertexArray(null)}},ne=`#version 300 es
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
`,F=`#version 300 es
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
`,I=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,ne,F);let{vao:t,indexCount:n}=this.buildSphere(24,24);this.vao=t,this.indexCount=n}buildSphere(e,t){let n=this.gl,r=[],i=[];for(let n=0;n<=e;n++){let i=Math.PI*n/e;for(let e=0;e<=t;e++){let n=2*Math.PI*e/t,a=Math.sin(i)*Math.cos(n),o=Math.cos(i),s=Math.sin(i)*Math.sin(n);r.push(a,o,s,a,o,s)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=n*(t+1)+e,a=r+t+1;i.push(r,a,r+1,a,a+1,r+1)}let a=n.createVertexArray(),o=n.createBuffer(),s=n.createBuffer();return n.bindVertexArray(a),n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(i),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,24,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,24,12),n.bindVertexArray(null),{vao:a,indexCount:i.length}}draw(e,t,n,r,i,a=y(0,.5,1),o=0,s=y(0,0,1),c=-1){let l=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`viewPos`,r),this.shader.setVec3(`shieldColor`,a),this.shader.setFloat(`shieldStrength`,i/100),this.shader.setFloat(`hitRing`,o),this.shader.setVec3(`hitPos`,s),this.shader.setFloat(`chargeWave`,c),l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),l.depthMask(!1),l.bindVertexArray(this.vao),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_INT,0),l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}},re=`#version 300 es
layout (location = 0) in vec3 aPos;

out vec3 LocalPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    LocalPos    = aPos;
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
`,L=`#version 300 es
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
`,R=class{shader;coneVao;coneIndexCount;orbVao;orbIndexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,re,L);let t=this.buildCone(16,16);this.coneVao=t.vao,this.coneIndexCount=t.indexCount;let n=this.buildHemisphere(16,16);this.orbVao=n.vao,this.orbIndexCount=n.indexCount}buildCone(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=r/e,a=.4+i*.6;for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),-i)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}buildHemisphere(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=Math.PI/2*(r/e),a=Math.sin(i),o=-Math.cos(i);for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),o)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}upload(e,t){let n=this.gl,r=n.createVertexArray(),i=n.createBuffer(),a=n.createBuffer();return n.bindVertexArray(r),n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(t),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,12,0),n.bindVertexArray(null),{vao:r,indexCount:t.length}}draw(e,t,n,r,a,l){let u=this.gl,d=a/100,f=1+.06*Math.sin(l*6);this.shader.use(),this.shader.setMat4(`view`,n),this.shader.setMat4(`projection`,r),this.shader.setFloat(`engineStrength`,d),this.shader.setFloat(`u_time`,l),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE),u.depthMask(!1);let p=.2*f,m=i();s(m,m,e),o(m,m,t),c(m,m,[p*.5,p,p]),this.shader.setMat4(`model`,m),this.shader.setFloat(`isOrb`,1),u.bindVertexArray(this.orbVao),u.drawElements(u.TRIANGLES,this.orbIndexCount,u.UNSIGNED_INT,0);let h=i();s(h,h,e),o(h,h,t),c(h,h,[.1*f,.18*f,(.1+d*3)*f]),this.shader.setMat4(`model`,h),this.shader.setFloat(`isOrb`,0),u.bindVertexArray(this.coneVao),u.drawElements(u.TRIANGLES,this.coneIndexCount,u.UNSIGNED_INT,0),u.bindVertexArray(null),u.depthMask(!0),u.disable(u.BLEND)}},z=`#version 300 es
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
`,B=class{shader;vao;vertexCount;gl;constructor(e,t){this.gl=e,this.shader=new M(e,z,ie),this.vertexCount=t.vertexCount,this.vao=e.createVertexArray();let n=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t.interleaved,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,36,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,36,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,36,24),e.bindVertexArray(null)}draw(e,t,n,r,i){let a=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`lightPos`,r),this.shader.setVec3(`lightColor`,y(1,1,1)),this.shader.setVec3(`viewPos`,i),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,this.vertexCount),a.bindVertexArray(null)}};function ae(e){let t={},n=``;for(let r of e.split(`
`)){let e=r.trim();if(e.startsWith(`newmtl `))n=e.slice(7).trim();else if(e.startsWith(`Kd `)&&n){let[,r,i,a]=e.split(/\s+/);t[n]={r:parseFloat(r),g:parseFloat(i),b:parseFloat(a)}}}return t}async function V(e,t){let n=await fetch(e).then(e=>e.text()),r={},i=n.match(/^mtllib (.+)$/m),a=t??(i?e.replace(/[^/]+$/,i[1].trim()):null);a&&(r=ae(await fetch(a).then(e=>e.text()).catch(()=>``)));let o=[],s=[],c=[],l={r:.7,g:.75,b:.8};for(let e of n.split(`
`)){let t=e.trim();if(t.startsWith(`v `)){let[,e,n,r]=t.split(/\s+/);o.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`vn `)){let[,e,n,r]=t.split(/\s+/);s.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`usemtl `)){let e=t.slice(7).trim();l=r[e]??l}else if(t.startsWith(`f `)){let e=t.split(/\s+/).slice(1);for(let t=1;t<e.length-1;t++)for(let n of[e[0],e[t],e[t+1]]){let e=n.split(`/`),t=(parseInt(e[0])-1)*3;if(c.push(o[t],o[t+1],o[t+2]),e[2]&&e[2]!==``){let t=(parseInt(e[2])-1)*3;c.push(s[t],s[t+1],s[t+2])}else c.push(0,1,0);c.push(l.r,l.g,l.b)}}}return{interleaved:new Float32Array(c),vertexCount:c.length/9}}var oe=class{keys=new Set;justPressed_=new Set;orbitAzimuth=0;orbitElevation=15;orbitDistance=30;mouseDown=!1;lastMouseX=0;lastMouseY=0;constructor(e){window.addEventListener(`keydown`,e=>{this.keys.has(e.code)||this.justPressed_.add(e.code),this.keys.add(e.code)}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener(`mousemove`,e=>{if(!this.mouseDown)return;let t=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY;this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,this.orbitAzimuth-=t*.15,this.orbitElevation=Math.max(-80,Math.min(80,this.orbitElevation+n*.15))}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.orbitDistance=Math.max(3,Math.min(50,this.orbitDistance+e.deltaY*.02))},{passive:!1})}isOrbiting(){return this.mouseDown}held(e){return document.activeElement?.tagName===`INPUT`?!1:this.keys.has(e)}justPressed(e){return document.activeElement?.tagName===`INPUT`?!1:this.justPressed_.has(e)}clearJustPressed(){this.justPressed_.clear()}};function H(e,t,n,r){return{name:e,key:t,energyCost:n,reloading:!1,reloadTimer:0,reloadTime:r,pendingFire:!1}}function U(){return{shields:20,maxShields:100,overloadTimer:0,health:10,maxHealth:10,engines:30,maxEngines:30,energy:0,maxEnergy:6,lasers:H(`LASERS`,`1`,1,.25),ionBeam:H(`ION BEAM`,`2`,4,4),railShot:H(`RAIL`,`3`,5,3),pulseCannon:H(`PULSE`,`4`,5,8),shieldOverload:H(`SH.OVLD`,`5`,3,5),hitRing:0,hitPos:y(0,0,1),chargeWave:-1}}var W=class{constructor(e){let t=document.createElement(`div`);t.id=`hud`,t.innerHTML=`
      <div class="hud-hint">
        W/S pitch &nbsp;·&nbsp; A/D turn &nbsp;·&nbsp; Shift accel &nbsp;·&nbsp; Space brake<br>
        E lock/unlock &nbsp;·&nbsp; R cycle &nbsp;·&nbsp; 1-5 weapons &nbsp;·&nbsp; O orbit &nbsp;·&nbsp; F follow
      </div>`,document.body.appendChild(t);let n=document.createElement(`style`);n.textContent=`
      #hud { display: none; }
    `,document.head.appendChild(n)}update(e,t){}},G={lasers:{label:`LASERS`,cost:1},ionBeam:{label:`ION BEAM`,cost:4},railShot:{label:`RAIL`,cost:5},pulseCannon:{label:`PULSE`,cost:5}},se=class{slots;slotEls=[];state;dragSrcIdx=null;ghostEl=null;pendingSrc=null;pendingPos=null;constructor(e,t){this.state=e,this.slots=[...t],this.build(),this.injectStyles()}getSlots(){return this.slots}build(){let e=document.createElement(`div`);e.id=`weapon-slots-hud`;for(let t=0;t<this.slots.length;t++){let n=document.createElement(`div`);n.className=`wpn-slot`,n.dataset.idx=String(t),this.fillSlot(n,t),this.bindSlot(n,t),this.slotEls.push(n),e.appendChild(n)}let t=document.getElementById(`ps-bottom-row`);t?t.appendChild(e):document.body.appendChild(e),window.addEventListener(`mousemove`,e=>this.onMove(e)),window.addEventListener(`mouseup`,e=>this.onUp(e))}fillSlot(e,t){e.innerHTML=``;let n=this.slots[t];if(!n){e.classList.add(`empty`),e.innerHTML=`<span class="ws-empty-label">EMPTY</span>`;return}e.classList.remove(`empty`);let r=G[n];e.innerHTML=`
      <div class="ws-key">[${t+1}]</div>
      <div class="ws-name">${r.label}</div>
      <div class="ws-timer" id="wst-${t}"></div>
      <div class="ws-cost">${Array.from({length:r.cost},(e,n)=>`<span class="ws-dot" id="wsd-${t}-${n}"></span>`).join(``)}</div>
    `}bindSlot(e,t){e.addEventListener(`mousedown`,e=>{e.button!==0||!this.slots[t]||(e.preventDefault(),this.pendingSrc=t,this.pendingPos={x:e.clientX,y:e.clientY})}),e.addEventListener(`mouseenter`,()=>{this.dragSrcIdx!==null&&e.classList.add(`drop-hover`)}),e.addEventListener(`mouseleave`,()=>{e.classList.remove(`drop-hover`)})}startDrag(e,t,n){this.dragSrcIdx=e;let r=document.createElement(`div`);r.id=`ws-ghost`,r.textContent=G[this.slots[e]].label,r.style.left=`${t-44}px`,r.style.top=`${n-16}px`,document.body.appendChild(r),this.ghostEl=r,this.slotEls[e].classList.add(`dragging`),this.slotEls.forEach((e,t)=>{this.slots[t]||e.classList.add(`drop-hover`)})}onMove(e){if(this.ghostEl){this.ghostEl.style.left=`${e.clientX-44}px`,this.ghostEl.style.top=`${e.clientY-16}px`;return}this.pendingSrc!==null&&this.pendingPos&&e.buttons===1&&Math.hypot(e.clientX-this.pendingPos.x,e.clientY-this.pendingPos.y)>6&&(this.startDrag(this.pendingSrc,e.clientX,e.clientY),this.pendingSrc=null,this.pendingPos=null)}onUp(e){if(this.pendingSrc=null,this.pendingPos=null,this.dragSrcIdx===null)return;let t=this.dragSrcIdx;this.dragSrcIdx=null,this.ghostEl?.remove(),this.ghostEl=null,this.slotEls.forEach(e=>e.classList.remove(`dragging`,`drop-hover`));let n=document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`.wpn-slot`);if(!n)return;let r=parseInt(n.dataset.idx??`-1`);r<0||r===t||([this.slots[t],this.slots[r]]=[this.slots[r],this.slots[t]],this.fillSlot(this.slotEls[t],t),this.fillSlot(this.slotEls[r],r))}update(e,t){let n=this.state,r={lasers:n.lasers,ionBeam:n.ionBeam,railShot:n.railShot,pulseCannon:n.pulseCannon};for(let t of Object.values(r))t.reloading&&(t.reloadTimer-=e,t.reloadTimer<=0&&(t.reloading=!1,t.reloadTimer=0));this.slots.forEach((e,i)=>{if(!e)return;let a=r[e],o=G[e],s=n.energy>=o.cost,c=this.slotEls[i],l=t?a.reloading?`reload`:s?`ready`:`nopwr`:`off`;c.dataset.state=l;let u=document.getElementById(`wst-${i}`);u&&(u.textContent=a.reloading?`${a.reloadTimer.toFixed(1)}s`:``);for(let e=0;e<o.cost;e++){let n=document.getElementById(`wsd-${i}-${e}`);n&&(n.className=`ws-dot${s&&t?` full`:``}`)}})}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #weapon-slots-hud {
        display: flex; flex-direction: row; gap: 8px; align-items: stretch;
        pointer-events: none;
      }

      .wpn-slot {
        width: 92px;
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(100,180,255,0.28);
        border-radius: 6px;
        padding: 14px 10px;
        display: flex; flex-direction: column;
        align-items: center; justify-content: space-between;
        box-sizing: border-box;
        pointer-events: all;
        cursor: grab;
        user-select: none;
        transition: border-color 0.15s, box-shadow 0.15s, opacity 0.1s;
        font-family: 'Courier New', monospace;
      }
      .wpn-slot.empty {
        cursor: default;
        border-style: dashed;
        border-color: rgba(100,180,255,0.14);
      }
      .wpn-slot.dragging  { opacity: 0.38; cursor: grabbing; }
      .wpn-slot.drop-hover {
        border-color: rgba(60,220,110,0.85);
        box-shadow: 0 0 16px rgba(60,220,110,0.30);
      }
      .wpn-slot[data-state="ready"] {
        border-color: rgba(100,210,255,0.65);
        box-shadow: 0 0 10px rgba(100,210,255,0.18);
      }

      .ws-key   { font-size: 11px; color: rgba(100,180,255,0.38); align-self: flex-start; }
      .ws-name  {
        font-size: 13px; letter-spacing: 0.8px; text-align: center;
        line-height: 1.25; color: rgba(160,230,255,0.9);
        transition: color 0.12s;
      }
      .wpn-slot[data-state="reload"] .ws-name { color: rgba(100,180,255,0.32); }
      .wpn-slot[data-state="nopwr"]  .ws-name { color: rgba(200,100,50,0.5); }
      .wpn-slot[data-state="off"]    .ws-name { color: rgba(100,180,255,0.16); }

      .ws-timer  { font-size: 13px; color: #f84; min-height: 18px; }
      .ws-cost   { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; }
      .ws-dot {
        width: 9px; height: 9px; border-radius: 50%;
        border: 2px solid rgba(255,160,60,0.22);
        background: transparent;
        transition: background 0.12s, border-color 0.12s, box-shadow 0.12s;
      }
      .ws-dot.full {
        background: rgba(255,160,60,0.88);
        border-color: rgba(255,210,80,1);
        box-shadow: 0 0 5px rgba(255,160,60,0.55);
      }
      .ws-empty-label {
        font-size: 10px; letter-spacing: 2px; color: rgba(100,180,255,0.18);
      }

      #ws-ghost {
        position: fixed; pointer-events: none; z-index: 999;
        background: rgba(0,20,50,0.92);
        border: 1px solid rgba(100,210,255,0.65);
        border-radius: 4px; padding: 6px 14px;
        font-family: 'Courier New', monospace; font-size: 12px;
        color: rgba(160,230,255,0.95); letter-spacing: 1px;
        box-shadow: 0 0 14px rgba(100,210,255,0.28);
      }
    `,document.head.appendChild(e)}},ce=class{el;lockedEnemy=null;orbiting=!1;following=!1;rows=[];onLockChange;onOrbitToggle;onFollowToggle;onLockToggle;onCycleTarget;constructor(e,t,n,r,i){this.onLockChange=e,this.onOrbitToggle=t,this.onFollowToggle=n,this.onLockToggle=r,this.onCycleTarget=i,this.el=document.createElement(`div`),this.el.id=`target-hud`,this.el.innerHTML=`
      <div class="tgt-panel" id="tgt-panel">
        <div class="tgt-header">
          <span class="tgt-label">HOSTILES</span>
          <span class="tgt-count" id="tgt-count"></span>
        </div>
        <div id="tgt-rows"></div>
      </div>
      <div class="tgt-eq-wrap">
        <button class="tgt-eq-btn tgt-eq-e" id="tgt-eq-e">
          <span class="tgt-eq-key">E</span>
          <span class="tgt-eq-label" id="tgt-eq-e-label">LOCK</span>
        </button>
        <button class="tgt-eq-btn tgt-eq-q" id="tgt-eq-q">
          <span class="tgt-eq-key">Q</span>
          <span class="tgt-eq-label">CYCLE</span>
        </button>
      </div>
      <div class="tgt-ctrl-wrap">
        <button class="tgt-ctrl-toggle" id="tgt-ctrl-toggle">CONTROLS ▾</button>
        <div class="tgt-ctrl-body" id="tgt-ctrl-body" style="display:none">
          <div class="tgt-ctrl-section">TARGETING</div>
          <div class="tgt-ctrl-row"><span class="tgt-k">E</span><span>lock / unlock</span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">Q</span><span>cycle targets</span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">R</span><span>follow → orbit → free</span></div>
          <div class="tgt-ctrl-section">FLIGHT</div>
          <div class="tgt-ctrl-row"><span class="tgt-k">SHIFT</span><span>accelerate</span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">SPC</span><span>decelerate</span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">W / S</span><span>pitch up / down</span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">A / D</span><span>yaw left / right</span></div>
          <div class="tgt-ctrl-section">WEAPONS</div>
          <div class="tgt-ctrl-row"><span class="tgt-k">1</span><span>Lasers  <em>1e</em></span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">2</span><span>Ion Beam  <em>3e</em></span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">3</span><span>Rail Shot  <em>5e, hold</em></span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">4</span><span>Pulse Cannon  <em>5e</em></span></div>
          <div class="tgt-ctrl-row"><span class="tgt-k">5</span><span>Shield Overload  <em>3e</em></span></div>
          <div class="tgt-ctrl-section">SOFI</div>
          <div class="tgt-ctrl-row"><span class="tgt-k">V</span><span>hold to speak</span></div>
        </div>
      </div>`,document.body.appendChild(this.el),document.getElementById(`tgt-eq-e`).addEventListener(`click`,()=>this.onLockToggle()),document.getElementById(`tgt-eq-q`).addEventListener(`click`,()=>this.onCycleTarget()),document.getElementById(`tgt-ctrl-toggle`).addEventListener(`click`,()=>{let e=document.getElementById(`tgt-ctrl-body`),t=document.getElementById(`tgt-ctrl-toggle`),n=e.style.display===`none`;e.style.display=n?`block`:`none`,t.textContent=n?`CONTROLS ▴`:`CONTROLS ▾`}),this.injectStyles()}update(e){let t=e.filter(e=>e.dist<150);this.lockedEnemy&&!t.find(e=>e.obj===this.lockedEnemy)&&(this.lockedEnemy=null,this.orbiting=!1,this.following=!1,this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1));let n=document.getElementById(`tgt-panel`);t.length===0?n.style.display=`none`:(n.style.display=`block`,document.getElementById(`tgt-count`).textContent=`${t.length}`);let r=document.getElementById(`tgt-rows`);for(;this.rows.length<t.length;){let e=document.createElement(`div`);e.className=`tgt-row`,e.innerHTML=`<span class="tgt-ship-type">FIGHTER</span>`;let t={el:e,enemy:null};e.addEventListener(`click`,()=>{this.lockedEnemy===t.enemy?(this.lockedEnemy=null,this.orbiting=!1,this.following=!1,this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1)):(this.lockedEnemy=t.enemy,this.onLockChange(!0,t.enemy)),this.syncELabel()}),r.appendChild(e),this.rows.push(t)}this.rows.forEach((e,n)=>{e.el.style.display=n<t.length?`flex`:`none`,n<t.length&&(e.enemy=t[n].obj,e.el.classList.toggle(`locked`,e.enemy===this.lockedEnemy))})}clearLock(){this.lockedEnemy=null,this.orbiting=!1,this.following=!1,this.syncELabel()}externalLock(e){this.lockedEnemy=e,this.onLockChange(!0,e),this.syncELabel()}syncELabel(){let e=document.getElementById(`tgt-eq-e-label`);e&&(e.textContent=this.lockedEnemy?`UNLOCK`:`LOCK`);let t=document.getElementById(`tgt-eq-e`);t&&t.classList.toggle(`locked`,!!this.lockedEnemy)}syncOrbit(e){this.orbiting=e}syncFollow(e){this.following=e}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #target-hud {
        position: fixed; top: 16px; left: 16px;
        font-family: 'Courier New', monospace; font-size: 15px;
        z-index: 10; display: block; min-width: 260px;
      }
      .tgt-panel {
        display: none;
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(100,180,255,0.35);
        border-radius: 5px; padding: 12px 16px; color: #8cf;
      }
      .tgt-header {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 8px; padding-bottom: 6px;
        border-bottom: 1px solid rgba(100,180,255,0.15);
      }
      .tgt-label { color: #f84; letter-spacing: 1px; font-size: 13px; }
      .tgt-count {
        font-size: 18px; font-weight: bold; color: rgba(255,130,50,0.8);
        letter-spacing: 1px;
      }
      .tgt-row {
        display: flex; align-items: center;
        padding: 6px 4px; cursor: pointer;
        border-left: 2px solid transparent;
        border-radius: 2px;
        transition: background 0.12s, border-color 0.12s;
      }
      .tgt-row:hover { background: rgba(100,180,255,0.06); }
      .tgt-row.locked {
        border-left-color: rgba(255,130,50,0.8);
        background: rgba(255,100,30,0.07);
      }
      .tgt-ship-type {
        font-size: 12px; letter-spacing: 2px;
        color: rgba(100,180,255,0.6);
      }
      .tgt-row.locked .tgt-ship-type { color: #f84; }

      /* E / Q large buttons */
      .tgt-eq-wrap {
        display: flex; gap: 6px; margin-top: 6px; pointer-events: all;
      }
      .tgt-eq-btn {
        flex: 1; display: flex; flex-direction: column; align-items: center;
        gap: 4px; padding: 10px 6px;
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(100,180,255,0.28);
        border-radius: 5px; cursor: pointer;
        font-family: 'Courier New', monospace;
        transition: background 0.15s, border-color 0.15s;
      }
      .tgt-eq-btn:hover { background: rgba(0,20,50,0.9); border-color: rgba(100,180,255,0.6); }
      .tgt-eq-key   { font-size: 28px; font-weight: bold; line-height: 1; }
      .tgt-eq-label { font-size: 10px; letter-spacing: 2px; }
      .tgt-eq-e .tgt-eq-key   { color: rgba(255,130,50,0.85); }
      .tgt-eq-e .tgt-eq-label { color: rgba(255,130,50,0.6); }
      .tgt-eq-e.locked .tgt-eq-key   { color: rgba(255,180,80,1); }
      .tgt-eq-e.locked .tgt-eq-label { color: rgba(255,180,80,0.75); }
      .tgt-eq-q .tgt-eq-key   { color: rgba(100,180,255,0.85); }
      .tgt-eq-q .tgt-eq-label { color: rgba(100,180,255,0.55); }

      /* controls dropdown */
      .tgt-ctrl-wrap { margin-top: 6px; }
      .tgt-ctrl-toggle {
        width: 100%;
        background: rgba(0,10,30,0.75);
        border: 1px solid rgba(100,180,255,0.22);
        border-radius: 4px;
        color: rgba(100,180,255,0.45);
        font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 2px;
        padding: 5px 0; cursor: pointer;
        transition: color 0.15s, border-color 0.15s;
      }
      .tgt-ctrl-toggle:hover { color: #8cf; border-color: rgba(100,180,255,0.5); }
      .tgt-ctrl-body {
        background: rgba(0,8,22,0.88);
        border: 1px solid rgba(100,180,255,0.2);
        border-top: none; border-radius: 0 0 4px 4px;
        padding: 10px 14px 12px; font-size: 12px;
      }
      .tgt-ctrl-section {
        color: rgba(100,180,255,0.38); font-size: 10px; letter-spacing: 2px;
        margin: 10px 0 4px; padding-top: 8px;
        border-top: 1px solid rgba(100,180,255,0.1);
      }
      .tgt-ctrl-section:first-child { margin-top: 0; padding-top: 0; border-top: none; }
      .tgt-ctrl-row {
        display: flex; align-items: baseline; gap: 10px;
        padding: 2px 0; color: rgba(100,180,255,0.6);
      }
      .tgt-ctrl-row em { font-style: normal; color: rgba(255,160,60,0.55); font-size: 11px; }
      .tgt-k {
        background: rgba(100,180,255,0.08);
        border: 1px solid rgba(100,180,255,0.3);
        border-radius: 3px; padding: 1px 5px;
        font-size: 11px; color: #8cf; white-space: nowrap;
        min-width: 36px; text-align: center; flex-shrink: 0;
      }
    `,document.head.appendChild(e)}},K=260,le=260,ue=130,de=class{el;shieldCircles=[];healthBlocks=[];chargeRow;chargeFill;modeEl;lastLeft=0;lastTop=0;lastSide=`right`;constructor(){this.el=document.createElement(`div`),this.el.id=`tgt-detail`,this.el.innerHTML=`
      <div class="tdh-keys" id="tdh-keys">
        <span class="tdh-key tdh-kq">R</span><span id="tdh-mode" class="tdh-mode"> FREE</span>
      </div>
      <div class="tdh-panel">
        <div class="tdh-top">
          <div class="tdh-ship">${fe()}</div>
          <div class="tdh-stats">
            <div class="tdh-label">SHIELDS</div>
            <div class="tdh-circles" id="tdh-circles"></div>
            <div class="tdh-label" style="margin-top:10px">HULL</div>
            <div class="tdh-health" id="tdh-health"></div>
          </div>
        </div>
        <div class="tdh-charge-row" id="tdh-charge-row">
          <span class="tdh-charge-label">⚡ PULSE CHARGING</span>
          <div class="tdh-charge-track">
            <div class="tdh-charge-fill" id="tdh-charge-fill"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.el);let e=document.getElementById(`tdh-circles`);for(let t=0;t<5;t++){let t=document.createElement(`div`);t.className=`tdh-circle`,e.appendChild(t),this.shieldCircles.push(t)}let t=document.getElementById(`tdh-health`);for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`tdh-hblock`,t.appendChild(e),this.healthBlocks.push(e)}this.chargeRow=document.getElementById(`tdh-charge-row`),this.chargeFill=document.getElementById(`tdh-charge-fill`),this.modeEl=document.getElementById(`tdh-mode`),this.el.style.display=`none`,this.injectStyles()}show(e){this.el.style.display=`block`,this.update(e)}hide(){this.el.style.display=`none`}updateKeys(e,t){let n=e?` FOLLOW`:t?` ORBIT`:` FREE`;this.modeEl.textContent=n,this.modeEl.dataset.mode=e?`follow`:t?`orbit`:`free`}setScreenPos(e,t,n){if(this.el.style.display===`none`)return;let r=e+ue;this.lastSide=`right`,r+K>n-8&&(r=e-ue-K,this.lastSide=`left`);let i=Math.max(8,Math.min(t-le/2,window.innerHeight-le-8));this.el.style.left=`${r}px`,this.el.style.top=`${i}px`,this.lastLeft=r,this.lastTop=i}update(e){this.shieldCircles.forEach((t,n)=>{let r=n*20;e.shields>=r+20?t.className=`tdh-circle full`:e.shields>=r+10?t.className=`tdh-circle half`:t.className=`tdh-circle`});let t=Math.ceil(e.health/e.maxHealth*10);this.healthBlocks.forEach((e,n)=>{e.className=`tdh-hblock${n>=t?` empty`:``}`});let n=e.chargeState===`charging`;this.chargeRow.style.display=n?`flex`:`none`,n&&(this.chargeFill.style.width=`${e.chargeProgress*100}%`)}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #tgt-detail {
        position: fixed;
        pointer-events: none;
        z-index: 10;
        width: ${K}px;
      }
      /* ---- keys row ---- */
      .tdh-keys {
        display: flex; align-items: center; gap: 2px;
        margin-bottom: 6px;
        font-family: 'Courier New', monospace; font-size: 12px;
        background: rgba(0,8,22,0.72);
        border: 1px solid rgba(100,180,255,0.15);
        border-radius: 4px; padding: 5px 10px;
        white-space: nowrap;
      }
      .tdh-key {
        font-weight: bold; font-size: 13px;
        border: 1px solid currentColor;
        border-radius: 3px; padding: 1px 5px;
      }
      .tdh-ksep { color: rgba(100,180,255,0.38); font-size: 11px; margin-right: 2px; }
      .tdh-kdot { color: rgba(100,180,255,0.18); }
      @keyframes tdh-kq-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
      .tdh-kq { color:#6f6; border-color:rgba(80,220,80,.6); animation:tdh-kq-pulse 1.4s ease-in-out infinite .2s; }
      .tdh-mode { color:#6f6; font-size:12px; }
      .tdh-mode[data-mode="follow"] { color:#6f6; }
      .tdh-mode[data-mode="orbit"]  { color:#fc6; }
      .tdh-mode[data-mode="free"]   { color:rgba(100,180,255,.4); }
      /* ---- panel ---- */
      .tdh-panel {
        background: rgba(0,8,24,0.9);
        border: 1px solid rgba(100,180,255,0.38);
        border-radius: 6px; padding: 14px 16px;
        font-family: 'Courier New', monospace; font-size: 14px; color: #8cf;
      }
      .tdh-top { display: flex; gap: 14px; align-items: flex-start; }
      .tdh-ship { flex-shrink: 0; opacity: 0.9; }
      .tdh-stats { display: flex; flex-direction: column; flex: 1; }
      .tdh-label {
        color: rgba(100,180,255,0.45); font-size: 11px; letter-spacing: 1px;
        margin-bottom: 5px;
      }
      .tdh-circles { display: flex; gap: 5px; flex-wrap: wrap; }
      .tdh-circle {
        width: 14px; height: 14px; border-radius: 50%;
        border: 1px solid rgba(100,180,255,0.2); background: transparent;
      }
      .tdh-circle.half { border-color: rgba(100,180,255,0.75); border-width: 2px; }
      .tdh-circle.full {
        border-color: rgba(100,180,255,0.9);
        background: rgba(100,180,255,0.65);
        box-shadow: 0 0 6px rgba(100,180,255,0.45);
      }
      .tdh-health { display: flex; gap: 3px; flex-wrap: wrap; }
      .tdh-hblock {
        width: 12px; height: 14px;
        background: rgba(60,220,80,0.8); border: 1px solid rgba(60,220,80,0.4);
      }
      .tdh-hblock.empty {
        background: rgba(60,220,80,0.07); border-color: rgba(60,220,80,0.2);
      }
      .tdh-charge-row {
        display: flex; flex-direction: column; gap: 5px;
        margin-top: 12px; padding: 8px 10px;
        border: 1px solid rgba(255,100,0,0.5);
        border-radius: 3px;
        animation: tdh-charge-pulse 0.55s ease-in-out infinite;
      }
      @keyframes tdh-charge-pulse {
        0%, 100% { border-color: rgba(255,80,0,0.35); background: rgba(255,40,0,0.04); }
        50%       { border-color: rgba(255,180,0,0.9); background: rgba(255,60,0,0.1); }
      }
      .tdh-charge-label { color: #f84; font-size: 12px; letter-spacing: 1px; }
      .tdh-charge-track {
        width: 100%; height: 7px;
        background: rgba(255,100,0,0.15); border-radius: 2px; overflow: hidden;
      }
      .tdh-charge-fill {
        height: 100%;
        background: linear-gradient(90deg, rgba(255,80,0,0.9), rgba(255,220,0,1));
        border-radius: 2px; transition: width 0.08s linear;
      }
    `,document.head.appendChild(e)}};function fe(){return`<svg viewBox="-22 -28 44 58" width="80" height="106" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,-24 L7,2 L10,20 L0,14 L-10,20 L-7,2 Z"
          fill="rgba(100,180,255,0.18)" stroke="rgba(100,180,255,0.65)" stroke-width="1.2"/>
    <path d="M-7,-2 L-20,16 L-9,11 Z"
          fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.35)" stroke-width="1"/>
    <path d="M7,-2 L20,16 L9,11 Z"
          fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.35)" stroke-width="1"/>
    <circle cx="0" cy="-8" r="3" fill="rgba(100,180,255,0.45)" stroke="rgba(100,180,255,0.85)" stroke-width="1"/>
    <line x1="-4" y1="4" x2="4" y2="4" stroke="rgba(100,180,255,0.4)" stroke-width="1"/>
  </svg>`}var pe=class{healthBlocks=[];shieldCircles=[];energySlots=[];speedFill;state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`player-status-wrap`;let n=document.createElement(`div`);n.id=`sofi-slot`;let r=document.createElement(`div`);r.id=`ps-bottom-row`;let i=document.createElement(`div`);i.className=`ps-main`;let a=document.createElement(`div`);a.className=`ps-row`;let o=document.createElement(`span`);o.className=`ps-label`,o.textContent=`HULL`;let s=document.createElement(`div`);s.className=`ps-blocks`;for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`ps-health-block`,s.appendChild(e),this.healthBlocks.push(e)}a.append(o,s);let c=document.createElement(`div`);c.className=`ps-row`;let l=document.createElement(`span`);l.className=`ps-label`,l.textContent=`SHLD`;let u=document.createElement(`div`);u.className=`ps-circles`;for(let e=0;e<8;e++){let e=document.createElement(`div`);e.className=`ps-shield-circle`,u.appendChild(e),this.shieldCircles.push(e)}c.append(l,u);let d=document.createElement(`div`);d.className=`ps-row`;let f=document.createElement(`span`);f.className=`ps-label`,f.textContent=`SPD`;let p=document.createElement(`div`);p.className=`ps-speed-track`,this.speedFill=document.createElement(`div`),this.speedFill.className=`ps-speed-fill`,p.appendChild(this.speedFill),d.append(f,p),i.append(a,c,d);let m=document.createElement(`div`);m.className=`ps-power`;let h=document.createElement(`div`);h.className=`pp-label`,h.textContent=`PWR`;let g=document.createElement(`div`);g.className=`pp-grid`;for(let e=0;e<6;e++){let e=document.createElement(`div`);e.className=`pp-slot`,g.appendChild(e),this.energySlots.push(e)}m.append(h,g),r.append(i,m),t.append(n,r),document.body.appendChild(t),this.injectStyles()}update(e=0,t=!1,n=0){let{health:r,maxHealth:i,shields:a,maxShields:o,energy:s,overloadTimer:c}=this.state,l=t?Math.min(100,e/2)+e/2:e;this.speedFill.style.width=`${Math.min(100,l)}%`,this.speedFill.className=`ps-speed-fill${t?` boosting`:n>0?` cooldown`:``}`;let u=Math.max(0,Math.round(r/i*10));this.healthBlocks.forEach((e,t)=>{e.className=`ps-health-block${t>=u?` empty`:``}`});let d=c>0,f=d?a:Math.min(a,o);this.shieldCircles.forEach((e,t)=>{if(t>=5){if(!d){e.className=`ps-shield-circle hidden`;return}let n=o+(t-5)*20;f>=n+20?e.className=`ps-shield-circle overload-full`:f>=n+10?e.className=`ps-shield-circle overload-half`:e.className=`ps-shield-circle overload-empty`;return}let n=t*20;f>=n+20?e.className=`ps-shield-circle full`:f>=n+10?e.className=`ps-shield-circle half`:e.className=`ps-shield-circle`});let p=Math.floor(s);this.energySlots.forEach((e,t)=>{e.className=`pp-slot${t<p?` filled`:``}`})}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #player-status-wrap {
        position: fixed; bottom: 20px; left: 20px;
        display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
        pointer-events: none; z-index: 11;
        font-family: 'Courier New', monospace;
      }
      #ps-bottom-row {
        display: flex; flex-direction: row; align-items: stretch; gap: 10px;
      }
      /* health + shields */
      .ps-main {
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(100,180,255,0.35);
        border-radius: 6px; padding: 16px 20px;
        display: flex; flex-direction: column; gap: 14px;
      }
      .ps-row { display: flex; align-items: center; gap: 14px; }
      .ps-label { font-size: 13px; letter-spacing: 2px; color: rgba(100,180,255,0.55); width: 44px; text-align: right; }
      .ps-blocks { display: flex; gap: 5px; }
      .ps-health-block {
        width: 18px; height: 32px;
        background: rgba(60,220,80,0.85); border: 1px solid rgba(60,220,80,0.5);
        box-shadow: 0 0 8px rgba(60,220,80,0.35);
      }
      .ps-health-block.empty { background: rgba(60,220,80,0.07); border-color: rgba(60,220,80,0.18); box-shadow: none; }
      .ps-circles { display: flex; gap: 8px; }
      .ps-shield-circle { width: 26px; height: 26px; border-radius: 50%; border: 2px solid rgba(100,180,255,0.2); background: transparent; }
      .ps-shield-circle.half  { border-color: rgba(100,180,255,0.8); border-width: 3px; }
      .ps-shield-circle.full  { border-color: rgba(100,180,255,0.9); background: rgba(100,180,255,0.7); box-shadow: 0 0 10px rgba(100,180,255,0.5); }
      .ps-shield-circle.hidden        { display: none; }
      .ps-shield-circle.overload-empty { border: 2px solid rgba(255,255,255,0.25); }
      .ps-shield-circle.overload-half  { border: 3px solid rgba(255,255,255,0.7); }
      .ps-shield-circle.overload-full  { border: 2px solid rgba(255,255,255,0.9); background: rgba(255,255,255,0.75); box-shadow: 0 0 12px rgba(255,255,255,0.65); }

      /* speed bar */
      .ps-speed-track {
        flex: 1; height: 10px;
        background: rgba(255,210,0,0.07);
        border: 1px solid rgba(255,210,0,0.22);
        border-radius: 3px; overflow: hidden;
      }
      .ps-speed-fill {
        height: 100%; width: 0%;
        background: linear-gradient(90deg, rgba(255,180,0,0.85), rgba(255,240,60,1));
        box-shadow: 0 0 8px rgba(255,210,0,0.5);
        border-radius: 3px;
        transition: width 0.1s linear, background 0.3s, box-shadow 0.3s;
      }
      .ps-speed-fill.boosting {
        background: linear-gradient(90deg, rgba(180,220,255,0.9), rgba(255,255,255,1));
        box-shadow: 0 0 16px rgba(180,220,255,0.9);
        animation: boost-pulse 0.4s ease-in-out infinite alternate;
      }
      .ps-speed-fill.cooldown {
        background: linear-gradient(90deg, rgba(255,120,0,0.6), rgba(255,200,40,0.7));
        box-shadow: 0 0 6px rgba(255,160,0,0.3);
      }
      @keyframes boost-pulse {
        from { box-shadow: 0 0 10px rgba(180,220,255,0.7); }
        to   { box-shadow: 0 0 22px rgba(220,240,255,1.0); }
      }

      /* power — same height as .ps-main, wider slots */
      .ps-power {
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(255,160,60,0.4);
        border-radius: 6px; padding: 14px 16px;
        display: flex; flex-direction: column; align-items: center; justify-content: space-between;
      }
      .pp-label { font-size: 13px; letter-spacing: 2px; color: rgba(255,160,60,0.6); }
      .pp-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; flex: 1; align-content: center; }
      .pp-slot {
        width: 32px; height: 32px;
        border: 2px solid rgba(255,160,60,0.25); border-radius: 4px;
        background: rgba(255,160,60,0.04);
        transition: background 0.1s, box-shadow 0.1s;
      }
      .pp-slot.filled {
        background: rgba(255,160,60,0.88);
        border-color: rgba(255,210,80,0.95);
        box-shadow: 0 0 10px rgba(255,160,60,0.6);
      }
    `,document.head.appendChild(e)}},me=class{recognition;listening=!1;onResult;onStateChange;constructor(e,t){this.onResult=e,this.onStateChange=t;let n=window.SpeechRecognition??window.webkitSpeechRecognition;if(!n)throw Error(`SpeechRecognition not supported`);this.recognition=new n,this.recognition.lang=`en-US`,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=e=>{let t=e.results[0][0].transcript;this.onResult(t)},this.recognition.onend=()=>{this.listening=!1,this.onStateChange(!1)},this.recognition.onerror=()=>{this.listening=!1,this.onStateChange(!1)}}start(){this.listening||(this.recognition.start(),this.listening=!0,this.onStateChange(!0))}stop(){this.listening&&this.recognition.stop()}toggle(){this.listening?this.stop():this.start()}get active(){return this.listening}};async function he(e){let t=await fetch(`/api/sofi`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e})});if(!t.ok)throw Error(`Sofi is offline`);return t.json()}var ge=class{micBtn;ripple;voice=null;state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`sofi-panel`,this.micBtn=document.createElement(`div`),this.micBtn.id=`sofi-mic`;let n=document.createElement(`div`);n.id=`sofi-dot`,this.ripple=document.createElement(`div`),this.ripple.id=`sofi-ripple`,this.micBtn.appendChild(n),this.micBtn.appendChild(this.ripple);let r=document.createElement(`div`);r.id=`sofi-label`,r.textContent=`SOFI`,t.appendChild(this.micBtn),t.appendChild(r);let i=document.getElementById(`sofi-slot`)??document.getElementById(`player-status-wrap`);i?i.appendChild(t):document.body.appendChild(t),speechSynthesis.getVoices(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices());try{this.voice=new me(e=>this.submit(e),e=>this.setListening(e))}catch{}this.micBtn.addEventListener(`click`,()=>this.voice?.toggle()),window.addEventListener(`keydown`,e=>{e.code===`KeyV`&&!e.repeat&&this.voice?.start()}),window.addEventListener(`keyup`,e=>{e.code===`KeyV`&&this.voice?.stop()}),this.injectStyles()}setListening(e){this.micBtn.classList.toggle(`listening`,e),document.getElementById(`sofi-label`).textContent=e?`LISTENING`:`SOFI`}async submit(e){if(!e)return;let t;try{t=await he(e)}catch{this.speak(`Sofi is offline, Captain.`);return}let n=t.command;if(!n){this.speak(t.reply);return}if(n.action===`setValue`&&n.value!==void 0){let e=Math.max(0,Math.min(100,n.value));n.system===`shields`?(this.state.maxShields=e,this.state.shields=Math.min(this.state.shields,e)):n.system===`engines`?(this.state.maxEngines=e,this.state.engines=Math.min(this.state.engines,e)):this.state[n.system]=e}else n.action===`turnOn`?n.system===`weapons`?this.state.lasers.pendingFire=!0:n.system===`shields`?(this.state.maxShields=100,this.state.shields=Math.min(this.state.shields,100)):n.system===`engines`?(this.state.maxEngines=100,this.state.engines=100):this.state[n.system]=100:n.action===`turnOff`&&(n.system===`weapons`?this.state.lasers.pendingFire=!1:n.system===`shields`?(this.state.maxShields=0,this.state.shields=0):n.system===`engines`?(this.state.maxEngines=0,this.state.engines=0):this.state[n.system]=0);this.speak(t.reply)}speak(e){let t=new SpeechSynthesisUtterance(e);t.pitch=1.1,t.rate=1;let n=speechSynthesis.getVoices().find(e=>/female|zira|samantha|karen|moira|victoria/i.test(e.name));n&&(t.voice=n),speechSynthesis.cancel(),speechSynthesis.speak(t)}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #sofi-panel {
        width: 82px; height: 82px;
        background: rgba(0,10,30,0.82);
        border: 1px solid rgba(100,180,255,0.32);
        border-radius: 6px;
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
        pointer-events: all; cursor: default; box-sizing: border-box;
      }
      #sofi-mic {
        position: relative;
        width: 38px; height: 38px;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
      }
      #sofi-dot {
        width: 16px; height: 16px; border-radius: 50%;
        background: rgba(100,180,255,0.55);
        border: 2px solid rgba(100,180,255,0.8);
        box-shadow: 0 0 8px rgba(100,180,255,0.3);
        transition: background 0.2s, box-shadow 0.2s;
        z-index: 1;
      }
      #sofi-ripple {
        position: absolute;
        width: 30px; height: 30px; border-radius: 50%;
        border: 2px solid rgba(100,180,255,0.25);
        transition: border-color 0.2s;
      }

      /* listening state */
      #sofi-mic.listening #sofi-dot {
        background: rgba(220,50,50,0.9);
        border-color: rgba(255,80,80,1);
        box-shadow: 0 0 14px rgba(255,60,60,0.7);
        animation: sofi-dot-pulse 0.9s ease-in-out infinite;
      }
      #sofi-mic.listening #sofi-ripple {
        border-color: rgba(255,60,60,0.5);
        animation: sofi-ripple-expand 0.9s ease-out infinite;
      }
      @keyframes sofi-dot-pulse {
        0%, 100% { transform: scale(1);   box-shadow: 0 0 10px rgba(255,60,60,0.6); }
        50%       { transform: scale(1.18); box-shadow: 0 0 22px rgba(255,60,60,0.9); }
      }
      @keyframes sofi-ripple-expand {
        0%   { transform: scale(0.85); opacity: 0.8; }
        100% { transform: scale(1.55); opacity: 0; }
      }

      #sofi-label {
        font-family: 'Courier New', monospace;
        font-size: 11px; letter-spacing: 3px;
        color: rgba(100,180,255,0.55);
        transition: color 0.2s;
      }
      #sofi-mic.listening ~ #sofi-label {
        color: rgba(255,100,100,0.8);
        letter-spacing: 2px;
      }
    `,document.head.appendChild(e)}},_e=144,ve=120,ye=2,be=10;function xe(e,t){let n=E(g(),k(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function Se(e,t,n,r){for(let i of e){if(i.dead)continue;let e=_e*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>ve){i.dead=!0;continue}T(i.pos,n)<ye&&(r(be,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var Ce=210;function we(e,t){let n=E(g(),k(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function Te(e,t,n,r){for(let i of e){if(i.dead)continue;let e=Ce*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>200){i.dead=!0;continue}T(i.pos,n)<2.5&&(r(35,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var q=70,J=2,Ee=12,De=14,Oe=35,ke=10,Ae=1.4,je=60,Me=2.2,Ne=144,Pe=2.5,Fe=8,Ie=3.5,Le=160,Re=200,ze=class{pos=y(20,4,-20);heading=y(-1,0,0);shields=80;maxShields=80;health=10;maxHealth=10;hitRing=0;hitPos=y(0,0,1);chargeWave=-1;lasers=[];heavyShots=[];chargeState=`idle`;chargeProgress=0;ionGlowTimer=0;prevShieldBubble=0;target=g();yaw=180;pitch=0;rollAngle=0;fireTimer=Math.random()*Me;chargeTimer=0;cooldownTimer=0;chargeIntervalTimer=Fe*(.5+Math.random());constructor(e){e&&b(this.pos,e),this.pickWaypoint()}pickWaypoint(){this.target=y((Math.random()*2-1)*q,J+Math.random()*(Ee-J),(Math.random()*2-1)*q)}interruptCharge(){this.chargeState===`charging`&&(this.chargeState=`cooldown`,this.cooldownTimer=Ie*.5,this.chargeProgress=0)}update(e,t){let n=k(g(),this.target,this.pos);v(n)<ke&&this.pickWaypoint();let i=Math.atan2(n[0],n[2])*180/Math.PI,a=Math.atan2(n[1],Math.sqrt(n[0]**2+n[2]**2))*180/Math.PI,o=Oe*e,s=((i-this.yaw)%360+540)%360-180,c=a-this.pitch;s=Math.max(-o,Math.min(o,s)),c=Math.max(-o,Math.min(o,c));let l=this.yaw;this.yaw+=s,this.pitch+=c;let u=((this.yaw-l)%360+540)%360-180,d=Math.max(-70,Math.min(70,-u*60*60));this.rollAngle+=(d-this.rollAngle)*Math.min(1,.1*e*60);let f=r(this.yaw),p=r(this.pitch);if(this.heading=E(g(),y(Math.sin(f)*Math.cos(p),Math.sin(p),Math.cos(f)*Math.cos(p))),w(this.pos,this.pos,this.heading,De*e),this.pos[0]=Math.max(-70,Math.min(q,this.pos[0])),this.pos[1]=Math.max(J,Math.min(Ee,this.pos[1])),this.pos[2]=Math.max(-70,Math.min(q,this.pos[2])),t){let n=T(this.pos,t);this.fireTimer-=e,this.fireTimer<=0&&n<je&&(this.lasers.push(xe(this.pos,t)),this.fireTimer=Me)}switch(this.chargeState){case`idle`:this.chargeIntervalTimer-=e,this.chargeIntervalTimer<=0&&t&&(this.chargeState=`charging`,this.chargeTimer=0);break;case`charging`:if(this.chargeTimer+=e,this.chargeProgress=Math.min(1,this.chargeTimer/Pe),this.chargeTimer>=Pe){if(t){let e=E(g(),k(g(),t,this.pos));this.heavyShots.push({pos:_(this.pos),dir:e,traveled:0,dead:!1})}this.chargeState=`cooldown`,this.cooldownTimer=Ie,this.chargeProgress=0}break;case`cooldown`:this.cooldownTimer-=e,this.cooldownTimer<=0&&(this.chargeState=`idle`,this.chargeIntervalTimer=Fe);break}for(let t of this.lasers){if(t.dead)continue;let n=Ne*e;w(t.pos,t.pos,t.dir,n),t.traveled+=n,t.traveled>120&&(t.dead=!0)}for(let e=this.lasers.length-1;e>=0;e--)this.lasers[e].dead&&this.lasers.splice(e,1);for(let t of this.heavyShots){if(t.dead)continue;let n=Le*e;w(t.pos,t.pos,t.dir,n),t.traveled+=n,t.traveled>Re&&(t.dead=!0)}for(let e=this.heavyShots.length-1;e>=0;e--)this.heavyShots[e].dead&&this.heavyShots.splice(e,1);this.shields=Math.min(this.maxShields,this.shields+Ae*e);let m=Math.floor(this.shields/20);m>this.prevShieldBubble&&(this.chargeWave=0),this.prevShieldBubble=m,this.chargeWave>=0&&(this.chargeWave+=e*2.5,this.chargeWave>=1&&(this.chargeWave=-1)),this.hitRing>0&&(this.hitRing+=e*2.5,this.hitRing>=1&&(this.hitRing=0)),this.ionGlowTimer>0&&(this.ionGlowTimer=Math.max(0,this.ionGlowTimer-e))}get modelMatrix(){let e=i();return s(e,e,this.pos),u(e,e,r(this.yaw)),l(e,e,r(-this.pitch)),d(e,e,r(this.rollAngle)),e}},Be=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out float vT;

void main() {
    vT = aPos.z; // 0=tail, 1=head
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
`,Ve=`#version 300 es
precision mediump float;

in float vT;
out vec4 FragColor;

uniform vec3 laserColor;

void main() {
    float brightness = pow(vT, 0.4); // bright at head, fade at tail
    FragColor = vec4(laserColor * brightness, brightness);
}
`,He=3,Y=.06,Ue=1.4,We=.18,Ge=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,Be,Ve);let{vao:t,indexCount:n}=this.buildQuad();this.vao=t,this.indexCount=n}buildQuad(){let e=this.gl,t=Y,n=new Float32Array([-.06,-.06,0,t,-.06,0,t,t,0,-.06,t,0,-.06,-.06,1,t,-.06,1,t,t,1,-.06,t,1]),r=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),i=e.createVertexArray(),a=e.createBuffer(),o=e.createBuffer();return e.bindVertexArray(i),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),{vao:i,indexCount:r.length}}draw(e,t,n,r=y(.2,1,1),a=He,o=Y){if(e.length===0)return;let l=this.gl;this.shader.use(),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`laserColor`,r),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE),l.depthMask(!1),l.bindVertexArray(this.vao);for(let t of e){let e=i();s(e,e,w(g(),t.pos,t.dir,-a));let n=Math.abs(t.dir[1])<.99?y(0,1,0):y(1,0,0),r=E(g(),D(g(),n,t.dir)),u=D(g(),t.dir,r);e[0]=r[0],e[1]=r[1],e[2]=r[2],e[4]=u[0],e[5]=u[1],e[6]=u[2],e[8]=t.dir[0],e[9]=t.dir[1],e[10]=t.dir[2],c(e,e,[o/Y,o/Y,a]),this.shader.setMat4(`model`,e),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_SHORT,0)}l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}get pulseLength(){return Ue}get pulseWidth(){return We}get pulseColor(){return y(1,.5,.05)}},Ke=`#version 300 es
precision mediump float;
layout (location = 0) in vec3 aPos;

uniform mat4 view;
uniform mat4 projection;
uniform vec3 startPos;
uniform vec3 endPos;
uniform vec3 viewPos;
uniform float width;
uniform float uTime;

out float vAlongBeam;

void main() {
    vec3 dir    = normalize(endPos - startPos);
    vec3 midPt  = mix(startPos, endPos, aPos.z);
    vec3 toEye  = normalize(viewPos - midPt);
    vec3 right  = normalize(cross(dir, toEye));

    // pulsate width
    float pw = width * (1.0 + 0.38 * sin(uTime * 11.0));
    vec3 worldPos = midPt + right * (aPos.x * pw);
    vAlongBeam = aPos.z;
    gl_Position = projection * view * vec4(worldPos, 1.0);
}
`,qe=`#version 300 es
precision mediump float;

in float vAlongBeam;
out vec4 FragColor;

uniform vec3  beamColor;
uniform float alpha;
uniform float uTime;

float streak(float speed, float phase) {
    float t = fract(vAlongBeam - uTime * speed + phase);
    return smoothstep(0.82, 1.0, t);
}

void main() {
    // fade at both ends
    float edge = min(vAlongBeam, 1.0 - vAlongBeam) * 6.0;
    float a = clamp(edge, 0.0, 1.0) * alpha;

    // white streaks travelling along beam
    float s = streak(2.4, 0.0) + streak(3.1, 0.37) + streak(1.7, 0.71);
    s = clamp(s, 0.0, 1.0);

    // base beam colour + streak glow
    vec3 col = beamColor + vec3(s * 2.2);

    FragColor = vec4(col, a);
}
`,Je=class{shader;vao;gl;constructor(e){this.gl=e,this.shader=new M(e,Ke,qe),this.vao=this.buildQuad()}buildQuad(){let e=this.gl,t=new Float32Array([-1,0,0,1,0,0,1,0,1,-1,0,1]),n=new Uint16Array([0,1,2,0,2,3]),r=e.createVertexArray(),i=e.createBuffer(),a=e.createBuffer();return e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),r}draw(e,t,n,r,i,a,o,s=y(1,.05,.05),c=.04,l=.55,u=0){let d=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),this.shader.setVec3(`startPos`,n),this.shader.setVec3(`endPos`,r),this.shader.setVec3(`viewPos`,i),this.shader.setFloat(`width`,c),this.shader.setVec3(`beamColor`,s),this.shader.setFloat(`alpha`,a/o*l),this.shader.setFloat(`uTime`,u),d.enable(d.BLEND),d.blendFunc(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA),d.depthMask(!1),d.bindVertexArray(this.vao),d.drawElements(d.TRIANGLES,6,d.UNSIGNED_SHORT,0),d.bindVertexArray(null),d.depthMask(!0),d.disable(d.BLEND)}},Ye=180,Xe=Ye*1.5,Ze=4.5,Qe=6;function $e(e,t){let n=E(g(),k(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1,origin:_(e)}}function et(e,t,n,r){for(let i of e){if(i.dead)continue;let e=E(g(),k(g(),n,i.pos));O(i.dir,i.dir,e,Qe*t),E(i.dir,i.dir);let a=Ye*t;if(w(i.pos,i.pos,i.dir,a),i.traveled+=a,i.traveled>Xe){i.dead=!0;continue}T(i.pos,n)<Ze&&(r(_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var tt=class{ctx=null;master;sfxBus;musicBus;reverbConv;reverbSend;musicStarted=!1;musicMuted=!1;musicReverbSend;padOscs=[];chordPhase=0;CHORDS=[[110,164.81,220,329.63],[130.81,196,261.63,392],[146.83,220,293.66,440],[164.81,246.94,329.63,493.88]];ARP_PATTERN=[0,1,2,3,3,2,1,0];MELODY=[440,523.25,587.33,659.25,783.99,880,1046.5];boot(){if(this.ctx){this.ctx.resume();return}let e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=.78,this.master.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=.44,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.62,this.sfxBus.connect(this.master),this.reverbConv=this.mkReverb(e,4.5,.44);let t=e.createGain();t.gain.value=.24,this.reverbConv.connect(t),t.connect(this.master),this.reverbSend=e.createGain(),this.reverbSend.gain.value=1,this.reverbSend.connect(this.reverbConv),this.musicReverbSend=e.createGain(),this.musicReverbSend.gain.value=1,this.musicReverbSend.connect(this.reverbConv),document.addEventListener(`visibilitychange`,()=>{document.hidden?e.suspend():e.resume()}),window.addEventListener(`beforeunload`,()=>e.close()),this.injectMuteButton()}injectMuteButton(){let e=document.createElement(`button`);e.id=`music-mute-btn`,e.textContent=`♫`,e.title=`Toggle Music`,e.style.cssText=[`position:fixed`,`top:16px`,`right:16px`,`width:36px`,`height:36px`,`background:rgba(0,10,30,0.82)`,`border:1px solid rgba(100,180,255,0.35)`,`border-radius:6px`,`color:rgba(100,180,255,0.8)`,`font-size:16px`,`cursor:pointer`,`z-index:100`,`pointer-events:auto`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,color 0.15s`].join(`;`),e.addEventListener(`click`,()=>{this.musicMuted=!this.musicMuted,this.musicBus.gain.value=this.musicMuted?0:.44,this.musicReverbSend.gain.value=+!this.musicMuted,e.textContent=this.musicMuted?`🔇`:`♫`,e.style.color=this.musicMuted?`rgba(255,80,80,0.7)`:`rgba(100,180,255,0.8)`}),document.body.appendChild(e)}startMusic(){if(this.musicStarted||!this.ctx)return;this.musicStarted=!0;let e=this.ctx;this.spawnDrone(e),this.spawnPad(e);let t=e.currentTime;this.runScheduler(e,t+nt,t+1.5,t+2.5)}spawnDrone(e){for(let[t,n]of[[55,.055],[82.41,.038],[110,.025]]){let r=e.createOscillator(),i=e.createGain();r.type=`sine`,r.frequency.value=t,i.gain.setValueAtTime(0,e.currentTime),i.gain.linearRampToValueAtTime(n,e.currentTime+6),r.connect(i),i.connect(this.musicBus),r.start()}}spawnPad(e){let t=e.createBiquadFilter();t.type=`lowpass`,t.frequency.value=850,t.Q.value=1.15,t.connect(this.musicBus);let n=e.createOscillator(),r=e.createGain();n.frequency.value=.034,r.gain.value=290,n.connect(r),r.connect(t.frequency),n.start();let i=e.createGain();i.gain.value=.5,t.connect(i),i.connect(this.musicReverbSend);for(let n of this.CHORDS[0])for(let r of[-5,5]){let i=e.createOscillator(),a=e.createGain();i.type=`triangle`,i.frequency.value=n,i.detune.value=r,a.gain.setValueAtTime(0,e.currentTime),a.gain.linearRampToValueAtTime(.09,e.currentTime+4),i.connect(a),a.connect(t),i.start(),this.padOscs.push(i)}}runScheduler(e,t,n,r){let i=t,a=n,o=r,s=0,c=()=>{let t=e.currentTime;if(t>=i-.5&&(this.chordPhase=(this.chordPhase+1)%this.CHORDS.length,this.CHORDS[this.chordPhase].forEach((e,t)=>{this.padOscs[t*2]?.frequency.linearRampToValueAtTime(e,i+2.2),this.padOscs[t*2+1]?.frequency.linearRampToValueAtTime(e,i+2.2)}),i+=nt),t>=a-.05){let t=this.CHORDS[this.chordPhase][this.ARP_PATTERN[s%this.ARP_PATTERN.length]]*2;this.spawnArpNote(e,a,t),s++,a+=.42}if(t>=o-.12){let n=this.MELODY[Math.floor(Math.random()*this.MELODY.length)];this.spawnMelodyNote(e,o,n),o=t+3.5+Math.random()*6}window.setTimeout(c,80)};c()}spawnArpNote(e,t,n){let r=e.createOscillator(),i=e.createGain(),a=e.createGain();r.type=`sine`,r.frequency.value=n,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.14,t+.015),i.gain.exponentialRampToValueAtTime(.001,t+.38),a.gain.value=.55,r.connect(i),i.connect(this.musicBus),i.connect(a),a.connect(this.musicReverbSend),r.start(t),r.stop(t+.42)}spawnMelodyNote(e,t,n){let r=e.createOscillator(),i=e.createOscillator(),a=e.createGain(),o=e.createGain(),s=e.createGain();r.type=`sine`,r.frequency.value=n,i.frequency.value=5,a.gain.value=n*.005,i.connect(a),a.connect(r.frequency),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.18,t+.45),o.gain.linearRampToValueAtTime(.1,t+1.5),o.gain.linearRampToValueAtTime(0,t+4.2),s.gain.value=.75,r.connect(o),o.connect(this.musicBus),o.connect(s),s.connect(this.musicReverbSend),r.start(t),i.start(t),r.stop(t+4.3),i.stop(t+4.3)}sfxLaser(){let e=this.ctx;if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sawtooth`,n.frequency.setValueAtTime(1300,t),n.frequency.exponentialRampToValueAtTime(180,t+.13),r.gain.setValueAtTime(.32,t),r.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(r),r.connect(this.sfxBus),n.start(t),n.stop(t+.15)}sfxIon(){let e=this.ctx;if(!e)return;let t=e.currentTime;for(let[n,r,i]of[[300,720,.17],[600,1400,.11],[160,380,.13]]){let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(n,t),a.frequency.linearRampToValueAtTime(r,t+.26),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+.04),o.gain.exponentialRampToValueAtTime(.001,t+.28),a.connect(o),o.connect(this.sfxBus),a.start(t),a.stop(t+.3)}}sfxRailPulse(){let e=this.ctx;if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sawtooth`,n.frequency.setValueAtTime(300,t),n.frequency.linearRampToValueAtTime(640,t+.07),r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.22,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.09),n.connect(r),r.connect(this.sfxBus),n.start(t),n.stop(t+.1);let i=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();i.type=`sawtooth`,i.frequency.setValueAtTime(600,t+.07),i.frequency.exponentialRampToValueAtTime(145,t+.34),a.type=`lowpass`,a.frequency.value=1800,o.gain.setValueAtTime(0,t+.07),o.gain.linearRampToValueAtTime(.4,t+.09),o.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(a),a.connect(o),o.connect(this.sfxBus),i.start(t+.07),i.stop(t+.36);let s=this.mkNoise(e,.22),c=e.createBiquadFilter(),l=e.createGain();c.type=`bandpass`,c.frequency.value=460,c.Q.value=1.8,l.gain.setValueAtTime(.1,t+.07),l.gain.exponentialRampToValueAtTime(.001,t+.28),s.connect(c),c.connect(l),l.connect(this.sfxBus),s.start(t+.07)}sfxShieldHit(){let e=this.ctx;if(!e)return;let t=e.currentTime;for(let[n,r,i]of[[2400,.55,.28],[4800,.22,.1],[850,.65,.2]]){let a=e.createOscillator(),o=e.createGain(),s=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(n,t),a.frequency.exponentialRampToValueAtTime(n*.22,t+r),o.gain.setValueAtTime(i,t),o.gain.exponentialRampToValueAtTime(.001,t+r),s.gain.value=.38,a.connect(o),o.connect(this.sfxBus),o.connect(s),s.connect(this.reverbSend),a.start(t),a.stop(t+r+.05)}}sfxHullHit(){let e=this.ctx;if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(28,t+.38),r.gain.setValueAtTime(.72,t),r.gain.exponentialRampToValueAtTime(.001,t+.38),n.connect(r),r.connect(this.sfxBus),n.start(t),n.stop(t+.39);let i=this.mkNoise(e,.3),a=e.createBiquadFilter(),o=e.createGain();a.type=`bandpass`,a.frequency.value=350,a.Q.value=1,o.gain.setValueAtTime(.8,t),o.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(a),a.connect(o),o.connect(this.sfxBus),i.start(t);let s=this.mkNoise(e,.2),c=e.createBiquadFilter(),l=e.createGain();c.type=`bandpass`,c.frequency.value=140,c.Q.value=.8,l.gain.setValueAtTime(.45,t),l.gain.exponentialRampToValueAtTime(.001,t+.2),s.connect(c),c.connect(l),l.connect(this.sfxBus),s.start(t)}sfxBigExplosion(){let e=this.ctx;if(!e)return;let t=e.currentTime;for(let[n,r,i]of[[7e3,1.2,.9],[2500,1.4,.7],[700,1.6,.5]]){let a=this.mkNoise(e,r),o=e.createBiquadFilter(),s=e.createGain();o.type=`lowpass`,o.frequency.setValueAtTime(n,t),o.frequency.exponentialRampToValueAtTime(55,t+r),s.gain.setValueAtTime(i,t),s.gain.exponentialRampToValueAtTime(.001,t+r),a.connect(o),o.connect(s),s.connect(this.sfxBus),a.start(t)}let n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(82,t),n.frequency.exponentialRampToValueAtTime(20,t+.9),r.gain.setValueAtTime(1,t),r.gain.exponentialRampToValueAtTime(.001,t+.9),n.connect(r),r.connect(this.sfxBus),n.start(t),n.stop(t+.91);let i=this.mkNoise(e,.4),a=e.createBiquadFilter(),o=e.createGain();a.type=`lowpass`,a.frequency.value=700,o.gain.setValueAtTime(.55,t),o.gain.exponentialRampToValueAtTime(.001,t+.4),i.connect(a),a.connect(o),o.connect(this.reverbSend),i.start(t)}sfxLockOn(){let e=this.ctx;if(!e)return;let t=e.currentTime;for(let n=0;n<2;n++){let r=e.createOscillator(),i=e.createGain();r.type=`sine`,r.frequency.value=n===0?880:1174.66;let a=t+n*.14;i.gain.setValueAtTime(.26,a),i.gain.exponentialRampToValueAtTime(.001,a+.1),r.connect(i),i.connect(this.sfxBus),r.start(a),r.stop(a+.11)}}sfxShieldOverload(){let e=this.ctx;if(!e)return;let t=e.currentTime;for(let[n,r,i]of[[200,900,.14],[300,1350,.11],[400,1800,.08],[533,2400,.05]]){let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(n,t),a.frequency.exponentialRampToValueAtTime(r,t+.7),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i,t+.08),o.gain.linearRampToValueAtTime(i*.35,t+.7),o.gain.linearRampToValueAtTime(0,t+.9),a.connect(o),o.connect(this.sfxBus),a.start(t),a.stop(t+.91)}}sfxPulseCannon(){let e=this.ctx;if(!e)return;let t=e.currentTime,n=t+.28;for(let[r,i,a]of[[88,310,.2],[176,465,.13],[264,620,.07]]){let o=e.createOscillator(),s=e.createGain();o.type=`sine`,o.frequency.setValueAtTime(r,t),o.frequency.linearRampToValueAtTime(i,n-.01),s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(a,n-.02),s.gain.exponentialRampToValueAtTime(.001,n+.05),o.connect(s),s.connect(this.sfxBus),o.start(t),o.stop(n+.06)}let r=e.createOscillator(),i=e.createGain();r.type=`sine`,r.frequency.setValueAtTime(72,n),r.frequency.exponentialRampToValueAtTime(20,n+.55),i.gain.setValueAtTime(.92,n),i.gain.exponentialRampToValueAtTime(.001,n+.55),r.connect(i),i.connect(this.sfxBus),r.start(n),r.stop(n+.56);let a=e.createOscillator(),o=e.createGain();a.type=`sine`,a.frequency.setValueAtTime(155,n),a.frequency.exponentialRampToValueAtTime(42,n+.4),o.gain.setValueAtTime(.55,n),o.gain.exponentialRampToValueAtTime(.001,n+.4),a.connect(o),o.connect(this.sfxBus),a.start(n),a.stop(n+.41);let s=this.mkNoise(e,.35),c=e.createBiquadFilter(),l=e.createGain();c.type=`bandpass`,c.frequency.value=320,c.Q.value=.7,l.gain.setValueAtTime(.6,n),l.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(c),c.connect(l),l.connect(this.sfxBus),s.start(n)}mkNoise(e,t){let n=Math.ceil(e.sampleRate*t),r=e.createBuffer(1,n,e.sampleRate),i=r.getChannelData(0);for(let e=0;e<n;e++)i[e]=Math.random()*2-1;let a=e.createBufferSource();return a.buffer=r,a}mkReverb(e,t,n){let r=Math.ceil(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**(n*8)}let a=e.createConvolver();return a.buffer=i,a}},nt=10,X=new tt,Z=36,rt=72,Q=90,it=.08,at=35,ot=.07,st=1.2,ct=.35,lt=.15,ut=18,dt=60,ft=class{gl;width;height;grid;shield;engine;ship;hud;playerStatus;weaponSlotsHud;targetHud;targetDetail;cameraLocked=!1;autoLockSuppressed=!1;orbitActive=!1;followActive=!1;orbitRadius=20;smoothCamPos=g();smoothCamTarget=g();camInitialized=!1;wasOrbiting=!1;orbitBlendTimer=0;orbitBlendFrom=g();ready=!1;startTime=performance.now();shipPos=y(0,0,0);shipFront=y(0,0,-1);worldUp=y(0,1,0);yaw=-90;pitch=0;throttle=.3;currentSpeed=Z*.3;rollAngle=0;pitchAngle=0;boostTimer=0;boostCooldown=0;boostMult=1;shipState;input;lightPos=y(10,10,10);enemies=(()=>{let e=new ze,t=new ze(y(-20,4,20));return t.shields=20,t.maxShields=20,[e,t]})();lockedEnemy=null;lastTime=performance.now();enemyShieldColor=y(1,.45,0);laserRenderer;beamRenderer;lasers=[];ionBeams=[];railBeamActive=!1;railFiring=!1;railPulseTimer=0;ionExplosions=[];hullExplosions=[];prevPlayerBubble=0;shieldVisualScale=1.5;audioStarted=!1;constructor(e,t,n,r){this.gl=e,this.width=t,this.height=n,this.shipState=U(),this.input=new oe(r),this.createTargetIndicator();let i=()=>{this.audioStarted||(this.audioStarted=!0,X.boot(),X.startMusic())};document.addEventListener(`keydown`,i,{once:!0}),r.addEventListener(`click`,i,{once:!0}),this.init()}async init(){try{let e=this.gl,t=await V(`/games/yes-captain/models/craft_speederA.obj`);this.grid=new te(e),this.shield=new I(e),this.engine=new R(e),this.ship=new B(e,t),this.playerStatus=new pe(this.shipState),this.hud=new W(this.shipState),this.weaponSlotsHud=new se(this.shipState,[`lasers`,`ionBeam`,`railShot`,null]),this.targetDetail=new de,this.targetHud=new ce((e,t)=>{this.cameraLocked=e,this.lockedEnemy=e?t:null,e?this.targetDetail.show(t):(this.orbitActive=!1,this.followActive=!1,this.targetDetail.hide())},e=>{this.orbitActive=e,e&&(this.followActive=!1,this.orbitRadius=30)},e=>{this.followActive=e,e&&(this.orbitActive=!1)},()=>{this.lockedEnemy?this.unlockTarget():this.lockNearest()},()=>{this.cycleTarget()}),new ge(this.shipState),this.laserRenderer=new Ge(e),this.beamRenderer=new Je(e),this.ready=!0}catch(e){console.error(`Renderer init failed:`,e)}}resize(e,t){this.width=e,this.height=t,this.gl.viewport(0,0,e,t)}frame(){if(!this.ready)return;let e=this.gl,t=performance.now(),n=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;let a=n*(this.lockedEnemy?lt:ct);this.processInput(a,n),this.input.justPressed(`KeyE`)&&(this.lockedEnemy?(this.autoLockSuppressed=!0,this.unlockTarget()):(this.autoLockSuppressed=!1,this.lockNearest()),this.targetHud.syncELabel()),this.input.justPressed(`KeyQ`)&&this.enemies.length>0&&this.cycleTarget();let o={lasers:()=>X.sfxLaser(),ionBeam:()=>X.sfxIon(),pulseCannon:()=>X.sfxPulseCannon()},f=this.weaponSlotsHud.getSlots();for(let e=0;e<4;e++){let t=f[e];t!==`railShot`&&t&&this.input.justPressed(`Digit${e+1}`)&&this.tryFire(t)&&o[t]?.()}this.input.justPressed(`Digit5`)&&this.tryFire(`shieldOverload`);let h=f.indexOf(`railShot`);if(h>=0&&this.input.held(`Digit${h+1}`)&&this.cameraLocked&&this.lockedEnemy){let e=this.shipState;if(this.railPulseTimer-=n,this.railPulseTimer<=0)if(e.energy>=5){e.energy-=5,this.railFiring=!0,this.railPulseTimer=.4,X.sfxRailPulse();let t=this.lockedEnemy;t.shields<20&&(t.health=Math.max(0,t.health-2),this.hullExplosions.push({pos:_(t.pos),timer:.5}),t.health<=0&&this.killEnemy(t))}else this.railFiring=!1,this.railPulseTimer=0;this.railFiring&&(this.railBeamActive=!0)}else this.railFiring=!1,this.railPulseTimer=0;if(this.input.justPressed(`KeyO`)&&this.lockedEnemy){let e=!this.orbitActive;this.orbitActive=e,this.followActive=!1,e&&(this.orbitRadius=30),this.targetHud.syncOrbit(e),this.targetHud.syncFollow(!1)}if(this.input.justPressed(`KeyF`)&&this.lockedEnemy){let e=!this.followActive;this.followActive=e,this.orbitActive=!1,this.targetHud.syncFollow(e),this.targetHud.syncOrbit(!1)}if(this.input.justPressed(`KeyR`)&&this.lockedEnemy&&(!this.followActive&&!this.orbitActive?(this.followActive=!0,this.orbitActive=!1):this.followActive?(this.followActive=!1,this.orbitActive=!0,this.orbitRadius=30):(this.orbitActive=!1,this.followActive=!1),this.targetHud.syncFollow(this.followActive),this.targetHud.syncOrbit(this.orbitActive)),this.input.clearJustPressed(),!this.lockedEnemy&&!this.autoLockSuppressed){for(let e of this.enemies)if(e.chargeState===`charging`){this.lockEnemy(e);break}}if(!this.input.isOrbiting()){let e=Math.atan2(-this.shipFront[0],-this.shipFront[2])*180/Math.PI,t=.08*n*60,r=((e-this.input.orbitAzimuth)%360+540)%360-180;this.input.orbitAzimuth+=r*t,this.input.orbitElevation+=(15-this.input.orbitElevation)*t}let S=r(this.input.orbitAzimuth),w=r(this.input.orbitElevation),D=this.input.orbitDistance,M=y(this.shipPos[0]+D*Math.cos(w)*Math.sin(S),this.shipPos[1]+D*Math.sin(w),this.shipPos[2]+D*Math.cos(w)*Math.cos(S)),N,P;if(this.cameraLocked&&this.lockedEnemy)if(P=this.lockedEnemy.pos,this.input.isOrbiting()){if(this.wasOrbiting)N=M;else{let e=k(g(),this.smoothCamPos,this.shipPos),t=Math.sqrt(e[0]**2+e[2]**2);this.input.orbitElevation=Math.atan2(e[1],t)*180/Math.PI,this.input.orbitAzimuth=Math.atan2(e[0],e[2])*180/Math.PI,this.input.orbitDistance=v(e),this.orbitBlendTimer=0,b(this.orbitBlendFrom,this.smoothCamTarget),N=_(this.smoothCamPos)}this.orbitBlendTimer=Math.min(.4,this.orbitBlendTimer+n);let e=this.orbitBlendTimer/.4,t=e*e*(3-2*e);P=O(g(),this.orbitBlendFrom,this.shipPos,t)}else{this.orbitBlendTimer=0;let e=E(g(),k(g(),this.lockedEnemy.pos,this.shipPos)),t=C(g(),e,-D);t[1]+=D*.25,N=x(g(),this.shipPos,t)}else N=M,P=this.shipPos;this.camInitialized||=(b(this.smoothCamPos,N),b(this.smoothCamTarget,P),!0);let te=.06*n*60,ne=this.cameraLocked&&this.input.isOrbiting()?.03*n*60:.06*n*60;O(this.smoothCamPos,this.smoothCamPos,N,te),O(this.smoothCamTarget,this.smoothCamTarget,P,ne);let F=m(i(),this.smoothCamPos,this.smoothCamTarget,this.worldUp),I=p(i(),r(45),this.width/this.height,.1,1e3);e.viewport(0,0,this.width,this.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.grid.draw(F,I);let re=90-this.yaw,L=i();s(L,L,this.shipPos),u(L,L,r(re)),l(L,L,r(this.pitchAngle)),d(L,L,r(this.rollAngle)),this.ship.draw(L,F,I,this.lightPos,this.smoothCamPos);let R=i();u(R,R,r(re)),l(R,R,r(this.pitchAngle)),d(R,R,r(this.rollAngle));let z=j(A(),ee(0,.3,0,0),R),ie=x(g(),this.shipPos,y(z[0],z[1],z[2])),B=i();s(B,B,ie);let ae=this.shipState.overloadTimer>0,V;if(ae){let e=this.shipState.overloadTimer/3,t=(1-e)*.9,r=1+Math.sin(performance.now()/120)*.04,i=(1.5+t)*r;this.shieldVisualScale+=(i-this.shieldVisualScale)*Math.min(1,n*12);let a=.7+e*.6;V=y(a*.55,a*.85,a*1.4)}else this.shieldVisualScale+=(1.5-this.shieldVisualScale)*Math.min(1,n*5);c(B,B,[this.shieldVisualScale,this.shieldVisualScale,this.shieldVisualScale]),this.shield.draw(B,F,I,this.smoothCamPos,this.shipState.shields,V,this.shipState.hitRing,this.shipState.hitPos,this.shipState.chargeWave);let oe=(performance.now()-this.startTime)/1e3;for(let e of[-.35,.35]){let t=ee(e,.25,-.9,0),n=j(A(),t,R),r=x(g(),this.shipPos,y(n[0],n[1],n[2])),i=this.currentSpeed/Z*100;this.engine.draw(r,R,F,I,i,oe)}let H=this.shipState;H.energy=Math.min(H.maxEnergy,H.energy+st*n),H.overloadTimer>0&&(H.overloadTimer=Math.max(0,H.overloadTimer-n),H.overloadTimer<=0&&(H.shields=Math.min(H.maxShields,H.shields))),H.shields<H.maxShields&&H.overloadTimer<=0&&(H.shields=Math.min(H.maxShields,H.shields+5*n));let U=Math.floor(H.shields/20);U>this.prevPlayerBubble&&(H.chargeWave=0),this.prevPlayerBubble=U,H.chargeWave>=0&&(H.chargeWave+=n*2.5,H.chargeWave>=1&&(H.chargeWave=-1)),H.hitRing>0&&(H.hitRing+=n*2.5,H.hitRing>=1&&(H.hitRing=0));let W=(e,t)=>{let n=this.lockedEnemy;if(!n)return;let r=e=>{let r=k(g(),t,n.pos);E(n.hitPos,r),n.hitRing=.01,n.shields=Math.max(0,n.shields-e)},i=()=>{n.health<=0&&this.killEnemy(n)},a=()=>this.hullExplosions.push({pos:_(t),timer:.5});switch(e){case`laser`:n.shields>=20?(r(8),X.sfxShieldHit()):(n.health=Math.max(0,n.health-.8),a(),X.sfxHullHit(),i());break;case`ion`:n.interruptCharge(),n.ionGlowTimer=1.4,n.shields>0?(r(18),X.sfxShieldHit()):(n.health=Math.max(0,n.health-1.5),a(),X.sfxHullHit(),i());break;case`rail`:n.health=Math.max(0,n.health-2),a(),X.sfxHullHit(),i();break;case`pulse`:n.shields>0?(r(35),n.health=Math.max(0,n.health-2),X.sfxShieldHit()):(n.health=Math.max(0,n.health-4),a(),X.sfxHullHit()),i();break}};if(this.lockedEnemy){let e=this.lockedEnemy;Se(this.lasers,a,e.pos,(e,t)=>W(`laser`,t)),et(this.ionBeams,a,e.pos,e=>{W(`ion`,e),this.ionExplosions.push({pos:_(e),timer:.7})}),Te(this.playerPulses,a,e.pos,(e,t)=>W(`pulse`,t))}if(this.laserRenderer.draw(this.lasers,F,I),this.ionBeams.length>0){let e=performance.now()/1e3,t=y(.35,.85,1.4),n=y(.7,1,1.6);for(let r of this.ionBeams){let a=Math.min(1,r.traveled/15),o=1+Math.sin(e*8)*.18,l=a*1.8*o,u=i();s(u,u,r.pos),c(u,u,[l,l,l]),this.shield.draw(u,F,I,this.smoothCamPos,80,t,0,g(),-1);let d=a*.9,f=i();s(f,f,r.pos),c(f,f,[d,d,d]),this.shield.draw(f,F,I,this.smoothCamPos,80,n,0,g(),-1)}}for(let e=this.ionExplosions.length-1;e>=0;e--){let t=this.ionExplosions[e];if(t.timer-=n,t.timer<=0){this.ionExplosions.splice(e,1);continue}let r=t.timer/.7,a=r*r*3.5,o=i();s(o,o,t.pos),c(o,o,[1.8,1.8,1.8]),this.shield.draw(o,F,I,this.smoothCamPos,80,y(.3*a,.65*a,a),0,g(),-1)}for(let e=this.hullExplosions.length-1;e>=0;e--){let t=this.hullExplosions[e];if(t.timer-=n,t.timer<=0){this.hullExplosions.splice(e,1);continue}let r=t.timer/.5,a=.3+(1-r)*1.6,o=r*r*8,l=i();s(l,l,t.pos),c(l,l,[a,a,a]),this.shield.draw(l,F,I,this.smoothCamPos,80,y(o*.9,o*.18,o*.02),0,g(),-1);let u=i();s(u,u,t.pos),c(u,u,[a*.55,a*.55,a*.55]),this.shield.draw(u,F,I,this.smoothCamPos,80,y(o*1.2,o*.65,o*.1),0,g(),-1)}this.laserRenderer.draw(this.playerPulses,F,I,y(.65,.1,1),2.5,.32),this.railBeamActive&&this.lockedEnemy&&(this.beamRenderer.draw(F,I,this.shipPos,this.lockedEnemy.pos,this.smoothCamPos,1,1,y(1,.28,0),.07,.9,performance.now()/1e3),this.railBeamActive=!1);let G=2.5;for(let e of this.enemies){e.update(a,this.shipPos);for(let t of e.lasers)t.dead||T(t.pos,this.shipPos)<G&&(t.dead=!0,this.takePlayerHit(10,t.pos));for(let t of e.heavyShots)t.dead||T(t.pos,this.shipPos)<G&&(t.dead=!0,this.takePlayerHit(30,t.pos));this.laserRenderer.draw(e.lasers,F,I,y(1,.3,.1)),this.laserRenderer.draw(e.heavyShots,F,I,y(1,.5,0),2.5,.3),this.ship.draw(e.modelMatrix,F,I,this.lightPos,this.smoothCamPos);let t=i();s(t,t,y(e.pos[0],e.pos[1]+.3,e.pos[2])),c(t,t,[1.5,1.5,1.5]),this.shield.draw(t,F,I,this.smoothCamPos,e.shields,this.enemyShieldColor,e.hitRing,e.hitPos,e.chargeWave)}this.targetHud.update(this.enemies.map(e=>({obj:e,shields:e.shields,maxShields:e.maxShields,health:e.health,maxHealth:e.maxHealth,dist:T(this.shipPos,e.pos)}))),this.weaponSlotsHud.update(n,this.cameraLocked),this.playerStatus.update(this.currentSpeed/Z*100,this.boostMult>1.05,this.boostCooldown),this.hud.update(this.shipState,this.currentSpeed/Z*100),this.updateTargetIndicator(F,I),this.lockedEnemy&&(this.targetDetail.update(this.lockedEnemy),this.targetDetail.updateKeys(this.followActive,this.orbitActive)),this.wasOrbiting=this.input.isOrbiting()}lockEnemy(e){this.autoLockSuppressed=!1,this.lockedEnemy=e,this.cameraLocked=!0,this.targetHud.externalLock(e),this.targetDetail.show(e),X.sfxLockOn()}unlockTarget(){this.lockedEnemy=null,this.cameraLocked=!1,this.orbitActive=!1,this.followActive=!1,this.targetHud.clearLock(),this.targetDetail.hide()}lockNearest(){if(this.enemies.length===0)return;let e=null,t=1/0;for(let n of this.enemies){let r=T(this.shipPos,n.pos);r<t&&(t=r,e=n)}e&&this.lockEnemy(e)}cycleTarget(){if(this.enemies.length===0)return;let e=this.lockedEnemy?this.enemies.indexOf(this.lockedEnemy):-1,t=this.enemies[(e+1)%this.enemies.length];this.lockEnemy(t)}killEnemy(e){let t=this.enemies.indexOf(e);t!==-1&&this.enemies.splice(t,1),this.lockedEnemy===e&&this.unlockTarget(),X.sfxBigExplosion()}tryFire(e){if(!this.cameraLocked&&e!==`shieldOverload`)return!1;let t=this.shipState,n=t[e];if(n.reloading)return!1;if(e===`shieldOverload`)return t.energy<n.energyCost?!1:(t.energy-=n.energyCost,t.shields=Math.min(t.maxShields+dt,t.shields+dt),t.overloadTimer=3,n.reloading=!0,n.reloadTimer=n.reloadTime,X.sfxShieldOverload(),!0);if(!this.lockedEnemy||t.energy<n.energyCost)return!1;switch(t.energy-=n.energyCost,e){case`lasers`:this.lasers.push(xe(this.shipPos,this.lockedEnemy.pos));break;case`ionBeam`:this.ionBeams.push($e(this.shipPos,this.lockedEnemy.pos));break;case`railShot`:break;case`pulseCannon`:this.playerPulses.push(we(this.shipPos,this.lockedEnemy.pos));break}return n.reloading=!0,n.reloadTimer=n.reloadTime,!0}playerPulses=[];takePlayerHit(e,t){let n=this.shipState;if(n.shields>=20){n.shields=Math.max(0,n.shields-e);let r=k(g(),t,this.shipPos);E(n.hitPos,r),n.hitRing=.01,X.sfxShieldHit()}else n.health=Math.max(0,n.health-Math.ceil(e/10)),this.hullExplosions.push({pos:_(t),timer:.5}),X.sfxHullHit()}targetLine;createTargetIndicator(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.id=`target-indicator`,e.setAttribute(`style`,`position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9;overflow:visible;`);let t=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);t.setAttribute(`stroke`,`rgba(100,180,255,0.55)`),t.setAttribute(`stroke-width`,`1.5`),t.setAttribute(`stroke-dasharray`,`6 5`),t.setAttribute(`display`,`none`),e.appendChild(t),document.body.appendChild(e),this.targetLine=t}updateTargetIndicator(e,t){if(!this.cameraLocked||!this.lockedEnemy){this.targetLine.setAttribute(`display`,`none`);return}let n=y(this.lockedEnemy.pos[0],this.lockedEnemy.pos[1],this.lockedEnemy.pos[2]),r=h(i(),t,e),a=j(A(),ee(n[0],n[1],n[2],1),r);if(a[3]<=0){this.targetLine.setAttribute(`display`,`none`);return}let o=a[0]/a[3],s=-a[1]/a[3],c=(o+1)/2*this.width,l=(s+1)/2*this.height;this.targetDetail.setScreenPos(c,l,this.width);let u=this.targetDetail,d=u.lastTop+260/2,f;f=u.lastSide===`right`?u.lastLeft:u.lastLeft+260;let p=c-f,m=l-d,g=Math.sqrt(p*p+m*m),_=Math.min(18,g*.25),v=c-p/g*_,b=l-m/g*_;this.targetLine.setAttribute(`x1`,String(f)),this.targetLine.setAttribute(`y1`,String(d)),this.targetLine.setAttribute(`x2`,String(v)),this.targetLine.setAttribute(`y2`,String(b)),this.targetLine.setAttribute(`display`,`inline`)}processInput(e,t){let n=this.input;this.throttle=this.shipState.engines/100,this.shipState.engines=this.throttle*100,(n.justPressed(`ShiftLeft`)||n.justPressed(`ShiftRight`))&&this.boostCooldown<=0&&(this.boostTimer=1.5,this.boostCooldown=5),this.boostTimer=Math.max(0,this.boostTimer-t),this.boostCooldown=Math.max(0,this.boostCooldown-t);let i=this.boostTimer>0?3:1,a=this.boostMult<i?5:2.5;if(this.boostMult+=(i-this.boostMult)*Math.min(1,a*t),this.currentSpeed=this.throttle*Z*this.boostMult,this.followActive&&this.lockedEnemy){let t=this.lockedEnemy,n=E(g(),y(t.heading[0],0,t.heading[2])),i=w(g(),t.pos,n,-18),a=y(i[0]-this.shipPos[0],0,i[2]-this.shipPos[2]),o=v(a),s=this.yaw;if(o>.5){let t=E(g(),a),n=E(g(),y(this.shipFront[0],0,this.shipFront[2]));O(n,n,t,.05*e*60),E(n,n),this.yaw=Math.atan2(n[2],n[0])*180/Math.PI}let c=i[1]-this.shipPos[1],l=Math.max(-35,Math.min(at,-c*3));this.pitch+=(l-this.pitch)*.04*e*60,this.pitch=Math.max(-35,Math.min(at,this.pitch));let u=r(this.yaw),d=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(u)*Math.cos(d),Math.sin(d),Math.sin(u)*Math.cos(d))),this.pitchAngle+=(this.pitch-this.pitchAngle)*ot*e*60;let f=((this.yaw-s)%360+540)%360-180,p=Math.max(-90,Math.min(Q,f*80*60));this.rollAngle+=(p-this.rollAngle)*it*e*60*2;let m=Math.min(1,o/(ut*1.5));w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*m*e);return}if(this.orbitActive&&this.lockedEnemy){let t=this.yaw,n=k(g(),this.shipPos,this.lockedEnemy.pos);n[1]=0;let r=v(n);if(r>.01){let t=E(g(),n),i=E(g(),y(-t[2]+t[0]*(this.orbitRadius-r)*.02,0,t[0]+t[2]*(this.orbitRadius-r)*.02)),a=E(g(),y(this.shipFront[0],0,this.shipFront[2]));O(a,a,i,.04*e*60),E(a,a),this.shipFront[0]=a[0],this.shipFront[2]=a[2],this.shipFront[1]=0}this.pitch=0,this.pitchAngle+=(0-this.pitchAngle)*ot*e*60,this.yaw=Math.atan2(this.shipFront[2],this.shipFront[0])*180/Math.PI;let i=((this.yaw-t)%360+540)%360-180,a=Math.max(-90,Math.min(Q,i*80*60));this.rollAngle+=(a-this.rollAngle)*it*e*60*2,w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e);return}let o=n.held(`KeyA`),s=n.held(`KeyD`),c=o?-90:s?Q:0;this.rollAngle+=(c-this.rollAngle)*it*e*60,this.rollAngle=Math.max(-90,Math.min(Q,this.rollAngle));let l=n.held(`KeyW`),u=n.held(`KeyS`);if(l||u){let t=rt*e*(l?-1:1),n=r(this.rollAngle);this.pitch+=t*Math.cos(n),this.yaw-=t*Math.sin(n),this.pitch=Math.max(-35,Math.min(at,this.pitch))}else this.pitch*=.88**(e*60);this.pitchAngle+=(this.pitch-this.pitchAngle)*ot*e*60;let d=r(this.yaw),f=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(d)*Math.cos(f),Math.sin(f),Math.sin(d)*Math.cos(f))),w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e)}},$=document.getElementById(`glCanvas`);$.width=window.innerWidth,$.height=window.innerHeight,window.addEventListener(`resize`,()=>{$.width=window.innerWidth,$.height=window.innerHeight,pt.resize($.width,$.height)});var pt=new ft(e($),$.width,$.height,$);function mt(){pt.frame(),requestAnimationFrame(mt)}requestAnimationFrame(mt);