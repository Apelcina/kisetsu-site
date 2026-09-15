(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=e.getContext(`webgl2`);if(!t)throw Error(`WebGL2 not supported in this browser`);return t.enable(t.DEPTH_TEST),t.clearColor(.05,.05,.1,1),t}var t=typeof Float32Array<`u`?Float32Array:Array,n=Math.PI/180;180/Math.PI;function r(e){return e*n}function i(){var e=new t(16);return t!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function a(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function o(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function s(e,t,n){var r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function c(e,t,n){var r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function l(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function u(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function d(e,t,n){var r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function f(e,t,n,r,i){var a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){var o=1/(r-i);e[10]=(i+r)*o,e[14]=2*i*r*o}else e[10]=-1,e[14]=-2*r;return e}var p=f;function m(e,t,n,r){var i,o,s,c,l,u,d,f,p,m,h=t[0],g=t[1],_=t[2],v=r[0],y=r[1],b=r[2],x=n[0],S=n[1],C=n[2];return Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6&&Math.abs(_-C)<1e-6?a(e):(d=h-x,f=g-S,p=_-C,m=1/Math.sqrt(d*d+f*f+p*p),d*=m,f*=m,p*=m,i=y*p-b*f,o=b*d-v*p,s=v*f-y*d,m=Math.sqrt(i*i+o*o+s*s),m?(m=1/m,i*=m,o*=m,s*=m):(i=0,o=0,s=0),c=f*s-p*o,l=p*i-d*s,u=d*o-f*i,m=Math.sqrt(c*c+l*l+u*u),m?(m=1/m,c*=m,l*=m,u*=m):(c=0,l=0,u=0),e[0]=i,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(i*h+o*g+s*_),e[13]=-(c*h+l*g+u*_),e[14]=-(d*h+f*g+p*_),e[15]=1,e)}var h=o;function g(){var e=new t(3);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function _(e){var n=new t(3);return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function v(e){var t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function y(e,n,r){var i=new t(3);return i[0]=e,i[1]=n,i[2]=r,i}function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function x(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function S(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function C(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function w(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function T(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(n*n+r*r+i*i)}function E(e,t){var n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function ee(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function D(e,t,n,r){var i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}var O=S;(function(){var e=g();return function(t,n,r,i,a,o){var s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();function k(){var e=new t(4);return t!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function A(e,n,r,i){var a=new t(4);return a[0]=e,a[1]=n,a[2]=r,a[3]=i,a}function j(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){var e=k();return function(t,n,r,i,a,o){var s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var M=class{gl;program;constructor(e,t,n){this.gl=e,this.program=this.link(this.compile(e.VERTEX_SHADER,t),this.compile(e.FRAGMENT_SHADER,n))}compile(e,t){let n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw Error(`Shader compile error: ${n.getShaderInfoLog(r)}`);return r}link(e,t){let n=this.gl,r=n.createProgram();if(n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS))throw Error(`Program link error: ${n.getProgramInfoLog(r)}`);return n.deleteShader(e),n.deleteShader(t),r}use(){this.gl.useProgram(this.program)}setFloat(e,t){this.gl.uniform1f(this.gl.getUniformLocation(this.program,e),t)}setVec3(e,t){this.gl.uniform3fv(this.gl.getUniformLocation(this.program,e),t)}setMat4(e,t){this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program,e),!1,t)}},N=`#version 300 es
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
`,F=class{shader;vao;lineCount;gl;constructor(e,t=100,n=2){this.gl=e,this.shader=new M(e,N,P);let r=[];for(let e=-t;e<=t;e+=n){let n=e,i=t;r.push(-i,-2,n,i,-2,n),r.push(n,-2,-i,n,-2,i)}this.lineCount=r.length/3,this.vao=e.createVertexArray();let i=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(r),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null)}draw(e,t){let n=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),n.bindVertexArray(this.vao),n.drawArrays(n.LINES,0,this.lineCount),n.bindVertexArray(null)}},I=`#version 300 es
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
`,L=`#version 300 es
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
`,R=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,I,L);let{vao:t,indexCount:n}=this.buildSphere(24,24);this.vao=t,this.indexCount=n}buildSphere(e,t){let n=this.gl,r=[],i=[];for(let n=0;n<=e;n++){let i=Math.PI*n/e;for(let e=0;e<=t;e++){let n=2*Math.PI*e/t,a=Math.sin(i)*Math.cos(n),o=Math.cos(i),s=Math.sin(i)*Math.sin(n);r.push(a,o,s,a,o,s)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=n*(t+1)+e,a=r+t+1;i.push(r,a,r+1,a,a+1,r+1)}let a=n.createVertexArray(),o=n.createBuffer(),s=n.createBuffer();return n.bindVertexArray(a),n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(i),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,24,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,24,12),n.bindVertexArray(null),{vao:a,indexCount:i.length}}draw(e,t,n,r,i,a=y(0,.5,1),o=0,s=y(0,0,1),c=-1){let l=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`viewPos`,r),this.shader.setVec3(`shieldColor`,a),this.shader.setFloat(`shieldStrength`,i/100),this.shader.setFloat(`hitRing`,o),this.shader.setVec3(`hitPos`,s),this.shader.setFloat(`chargeWave`,c),l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),l.depthMask(!1),l.bindVertexArray(this.vao),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_INT,0),l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}},te=`#version 300 es
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
`,B=class{shader;coneVao;coneIndexCount;orbVao;orbIndexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,te,z);let t=this.buildCone(16,16);this.coneVao=t.vao,this.coneIndexCount=t.indexCount;let n=this.buildHemisphere(16,16);this.orbVao=n.vao,this.orbIndexCount=n.indexCount}buildCone(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=r/e,a=.4+i*.6;for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),-i)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}buildHemisphere(e,t){let n=[],r=[];for(let r=0;r<=e;r++){let i=Math.PI/2*(r/e),a=Math.sin(i),o=-Math.cos(i);for(let e=0;e<=t;e++){let r=2*Math.PI*e/t;n.push(a*Math.cos(r),a*Math.sin(r),o)}}for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=n*(t+1)+e,a=i+t+1;r.push(i,a,i+1,a,a+1,i+1)}return this.upload(n,r)}upload(e,t){let n=this.gl,r=n.createVertexArray(),i=n.createBuffer(),a=n.createBuffer();return n.bindVertexArray(r),n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint32Array(t),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,12,0),n.bindVertexArray(null),{vao:r,indexCount:t.length}}draw(e,t,n,r,a,l){let u=this.gl,d=a/100,f=1+.06*Math.sin(l*6);this.shader.use(),this.shader.setMat4(`view`,n),this.shader.setMat4(`projection`,r),this.shader.setFloat(`engineStrength`,d),this.shader.setFloat(`u_time`,l),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE),u.depthMask(!1);let p=.2*f,m=i();s(m,m,e),o(m,m,t),c(m,m,[p*.5,p,p]),this.shader.setMat4(`model`,m),this.shader.setFloat(`isOrb`,1),u.bindVertexArray(this.orbVao),u.drawElements(u.TRIANGLES,this.orbIndexCount,u.UNSIGNED_INT,0);let h=i();s(h,h,e),o(h,h,t),c(h,h,[.1*f,.18*f,(.1+d*3)*f]),this.shader.setMat4(`model`,h),this.shader.setFloat(`isOrb`,0),u.bindVertexArray(this.coneVao),u.drawElements(u.TRIANGLES,this.coneIndexCount,u.UNSIGNED_INT,0),u.bindVertexArray(null),u.depthMask(!0),u.disable(u.BLEND)}},ne=`#version 300 es
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
`,V=`#version 300 es
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
`,H=class{shader;vao;vertexCount;gl;constructor(e,t){this.gl=e,this.shader=new M(e,ne,V),this.vertexCount=t.vertexCount,this.vao=e.createVertexArray();let n=e.createBuffer();e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t.interleaved,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,36,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,36,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,36,24),e.bindVertexArray(null)}draw(e,t,n,r,i){let a=this.gl;this.shader.use(),this.shader.setMat4(`model`,e),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`lightPos`,r),this.shader.setVec3(`lightColor`,y(1,1,1)),this.shader.setVec3(`viewPos`,i),a.bindVertexArray(this.vao),a.drawArrays(a.TRIANGLES,0,this.vertexCount),a.bindVertexArray(null)}};function U(e){let t={},n=``;for(let r of e.split(`
`)){let e=r.trim();if(e.startsWith(`newmtl `))n=e.slice(7).trim();else if(e.startsWith(`Kd `)&&n){let[,r,i,a]=e.split(/\s+/);t[n]={r:parseFloat(r),g:parseFloat(i),b:parseFloat(a)}}}return t}async function re(e,t){let n=await fetch(e).then(e=>e.text()),r={},i=n.match(/^mtllib (.+)$/m),a=t??(i?e.replace(/[^/]+$/,i[1].trim()):null);a&&(r=U(await fetch(a).then(e=>e.text()).catch(()=>``)));let o=[],s=[],c=[],l={r:.7,g:.75,b:.8};for(let e of n.split(`
`)){let t=e.trim();if(t.startsWith(`v `)){let[,e,n,r]=t.split(/\s+/);o.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`vn `)){let[,e,n,r]=t.split(/\s+/);s.push(parseFloat(e),parseFloat(n),parseFloat(r))}else if(t.startsWith(`usemtl `)){let e=t.slice(7).trim();l=r[e]??l}else if(t.startsWith(`f `)){let e=t.split(/\s+/).slice(1);for(let t=1;t<e.length-1;t++)for(let n of[e[0],e[t],e[t+1]]){let e=n.split(`/`),t=(parseInt(e[0])-1)*3;if(c.push(o[t],o[t+1],o[t+2]),e[2]&&e[2]!==``){let t=(parseInt(e[2])-1)*3;c.push(s[t],s[t+1],s[t+2])}else c.push(0,1,0);c.push(l.r,l.g,l.b)}}}return{interleaved:new Float32Array(c),vertexCount:c.length/9}}var ie=class{keys=new Set;justPressed_=new Set;orbitAzimuth=0;orbitElevation=15;orbitDistance=30;mouseDown=!1;lastMouseX=0;lastMouseY=0;constructor(e){window.addEventListener(`keydown`,e=>{this.keys.has(e.code)||this.justPressed_.add(e.code),this.keys.add(e.code)}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener(`mousemove`,e=>{if(!this.mouseDown)return;let t=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY;this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,this.orbitAzimuth-=t*.15,this.orbitElevation=Math.max(-80,Math.min(80,this.orbitElevation+n*.15))}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.orbitDistance=Math.max(3,Math.min(50,this.orbitDistance+e.deltaY*.02))},{passive:!1})}isOrbiting(){return this.mouseDown}held(e){return document.activeElement?.tagName===`INPUT`?!1:this.keys.has(e)}justPressed(e){return document.activeElement?.tagName===`INPUT`?!1:this.justPressed_.has(e)}clearJustPressed(){this.justPressed_.clear()}};function W(e,t,n,r){return{name:e,key:t,energyCost:n,reloading:!1,reloadTimer:0,reloadTime:r,pendingFire:!1}}function ae(){return{shields:20,maxShields:100,overloadTimer:0,health:10,maxHealth:10,engines:30,maxEngines:30,energy:0,maxEnergy:6,lasers:W(`LASERS`,`1`,1,1.5),ionBeam:W(`ION BEAM`,`2`,2,4),railShot:W(`RAIL`,`3`,2,3),pulseCannon:W(`PULSE`,`4`,5,8),shieldOverload:W(`SH.OVLD`,`5`,3,5),hitRing:0,hitPos:y(0,0,1),chargeWave:-1}}var oe=class{el;constructor(e){this.el=document.createElement(`div`),this.el.id=`hud`,this.el.innerHTML=`
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
    `,document.head.appendChild(e)}},se=class{el;state;energySlots=[];constructor(e){this.state=e,this.el=document.createElement(`div`),this.el.id=`weapons-hud`,this.el.innerHTML=this.buildPanel(),document.body.appendChild(this.el),this.energySlots=Array.from(this.el.querySelectorAll(`.wpn-energy-slot`)),this.injectStyles()}buildPanel(){return`
      <div class="wpn-panel">
        <div class="wpn-pwr-row">
          <span class="wpn-pwr-label">PWR</span>
          <div class="wpn-energy-slots">${[,,,,,,].fill(0).map(()=>`<div class="wpn-energy-slot"></div>`).join(``)}</div>
        </div>
        <div class="wpn-divider"></div>
        ${this.row(1,`LASERS`,1)}
        ${this.row(2,`ION BEAM`,2)}
        ${this.row(3,`RAIL`,2)}
        ${this.row(4,`PULSE`,5)}
        ${this.row(5,`SH.OVLD`,3)}
      </div>
    `}row(e,t,n){return`
      <div class="wpn-row" id="wpn-row-${e}">
        <span class="wpn-key">[${e}]</span>
        <span class="wpn-name">${t}</span>
        <span class="wpn-status" id="wpn-st-${e}">---</span>
        <span class="wpn-cost">${`◆`.repeat(n)}</span>
      </div>`}update(e,t){let n=this.state,r=[n.lasers,n.ionBeam,n.railShot,n.pulseCannon,n.shieldOverload],i=Math.floor(n.energy);this.energySlots.forEach((e,t)=>{e.className=`wpn-energy-slot${t<i?` filled`:``}`}),r.forEach((r,i)=>{r.reloading&&(r.reloadTimer-=e,r.reloadTimer<=0&&(r.reloading=!1,r.reloadTimer=0));let a=document.getElementById(`wpn-st-${i+1}`),o=document.getElementById(`wpn-row-${i+1}`),s=n.energy>=r.energyCost;t?r.reloading?(a.textContent=r.reloadTimer.toFixed(1)+`s`,a.style.color=`#f84`,o.dataset.state=`reload`):s?(a.textContent=`READY`,a.style.color=`rgba(80,240,120,0.9)`,o.dataset.state=`ready`):(a.textContent=`NO PWR`,a.style.color=`rgba(255,90,0,0.7)`,o.dataset.state=`nopwr`):(a.textContent=`---`,a.style.color=`rgba(100,180,255,0.25)`,o.dataset.state=`off`)})}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #weapons-hud {
        position: fixed; top: 220px; right: 16px;
        font-family: 'Courier New', monospace; font-size: 12px;
        z-index: 9; pointer-events: none;
      }
      .wpn-panel {
        background: rgba(0,10,30,0.72);
        border: 1px solid rgba(100,180,255,0.28);
        border-radius: 4px; padding: 10px 14px; color: #8cf;
        min-width: 205px;
      }
      .wpn-pwr-row { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
      .wpn-pwr-label { font-size: 11px; color: rgba(255,160,60,0.7); letter-spacing: 1px; }
      .wpn-energy-slots { display: flex; gap: 3px; }
      .wpn-energy-slot {
        width: 16px; height: 14px;
        border: 1px solid rgba(255,160,60,0.25);
        border-radius: 2px;
        background: rgba(255,160,60,0.04);
        transition: background 0.12s, box-shadow 0.12s;
      }
      .wpn-energy-slot.filled {
        background: rgba(255,160,60,0.78);
        border-color: rgba(255,210,80,0.9);
        box-shadow: 0 0 5px rgba(255,160,60,0.45);
      }
      .wpn-divider { border-top: 1px solid rgba(100,180,255,0.1); margin: 8px 0; }
      .wpn-row { display: flex; align-items: center; gap: 6px; padding: 4px 0; }
      .wpn-key  { color: rgba(100,180,255,0.45); width: 24px; flex-shrink: 0; font-size: 11px; }
      .wpn-name { flex: 1; font-size: 11px; letter-spacing: 0.5px; }
      .wpn-status { font-size: 11px; min-width: 52px; text-align: right; }
      .wpn-cost { color: rgba(255,160,60,0.55); font-size: 9px; min-width: 32px; text-align: right; letter-spacing: 1px; }
      .wpn-row[data-state="ready"]  .wpn-name { color: #8cf; }
      .wpn-row[data-state="reload"] .wpn-name { color: rgba(100,180,255,0.4); }
      .wpn-row[data-state="nopwr"]  .wpn-name { color: rgba(255,100,0,0.5); }
      .wpn-row[data-state="off"]    .wpn-name { color: rgba(100,180,255,0.22); }
    `,document.head.appendChild(e)}},ce=class{el;lockedEnemy=null;orbiting=!1;following=!1;orbitBtn;followBtn;rows=[];onLockChange;onOrbitToggle;onFollowToggle;constructor(e,t,n){this.onLockChange=e,this.onOrbitToggle=t,this.onFollowToggle=n,this.el=document.createElement(`div`),this.el.id=`target-hud`,this.el.innerHTML=`
      <div class="tgt-panel">
        <div class="tgt-header">
          <span class="tgt-label">HOSTILES</span>
          <button id="tgt-follow-btn" class="tgt-orbit-btn">FOLLOW</button>
          <button id="tgt-orbit-btn"  class="tgt-orbit-btn">ORBIT</button>
        </div>
        <div id="tgt-rows"></div>
      </div>`,document.body.appendChild(this.el),this.orbitBtn=document.getElementById(`tgt-orbit-btn`),this.followBtn=document.getElementById(`tgt-follow-btn`),this.orbitBtn.addEventListener(`click`,()=>{if(!this.lockedEnemy)return;let e=!this.orbiting;this.setOrbiting(e),e&&this.setFollowing(!1),this.onOrbitToggle(this.orbiting),this.onFollowToggle(!1)}),this.followBtn.addEventListener(`click`,()=>{if(!this.lockedEnemy)return;let e=!this.following;this.setFollowing(e),e&&this.setOrbiting(!1),this.onFollowToggle(this.following),this.onOrbitToggle(!1)}),this.injectStyles()}update(e){let t=e.filter(e=>e.dist<150);this.lockedEnemy&&!t.find(e=>e.obj===this.lockedEnemy)&&(this.lockedEnemy=null,this.setOrbiting(!1),this.setFollowing(!1),this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1));let n=this.lockedEnemy?`visible`:`hidden`;if(this.orbitBtn.style.visibility=n,this.followBtn.style.visibility=n,t.length===0){this.el.style.display=`none`;return}this.el.style.display=`block`;let r=document.getElementById(`tgt-rows`);for(;this.rows.length<t.length;){let e=document.createElement(`div`);e.className=`tgt-row`;let t=document.createElement(`div`);t.className=`tgt-info`;let n=document.createElement(`span`);n.className=`tgt-key`,n.textContent=`SHD`;let i=document.createElement(`span`),a=document.createElement(`span`);a.className=`tgt-dist`;let o=document.createElement(`button`);o.className=`tgt-lock-btn`,t.append(n,i,a);let s=document.createElement(`div`);s.className=`tgt-bars`;let c=document.createElement(`div`);c.className=`tgt-health-bar`;let l=[];for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`tgt-health-block`,c.appendChild(e),l.push(e)}let u=document.createElement(`div`);u.className=`tgt-shield-bar`;let d=[];for(let e=0;e<5;e++){let e=document.createElement(`div`);e.className=`tgt-shield-circle`,u.appendChild(e),d.push(e)}s.append(c,u),e.append(t,s,o),r.appendChild(e);let f={el:e,shieldsEl:i,distEl:a,btn:o,healthBlocks:l,shieldCircles:d,enemy:null};o.addEventListener(`click`,()=>{this.lockedEnemy===f.enemy?(this.lockedEnemy=null,this.orbiting=!1,this.following=!1,this.onLockChange(!1,null),this.onOrbitToggle(!1),this.onFollowToggle(!1)):(this.lockedEnemy=f.enemy,this.orbitBtn.className=`tgt-orbit-btn available`,this.followBtn.className=`tgt-orbit-btn available`,this.onLockChange(!0,f.enemy))}),this.rows.push(f)}this.rows.forEach((e,n)=>e.el.style.display=n<t.length?`flex`:`none`),t.forEach((e,t)=>{let n=this.rows[t];n.enemy=e.obj,n.shieldsEl.textContent=`${Math.round(e.shields)}`,n.distEl.textContent=`${e.dist.toFixed(0)}u`;let r=Math.max(0,e.health);n.healthBlocks.forEach((e,t)=>{e.className=`tgt-health-block${t>=r?` empty`:``}`}),n.shieldCircles.forEach((t,n)=>{let r=n*20;e.shields>=r+20?t.className=`tgt-shield-circle full`:e.shields>=r+10?t.className=`tgt-shield-circle half`:t.className=`tgt-shield-circle`});let i=e.obj===this.lockedEnemy;n.btn.textContent=`⊕`,n.btn.className=`tgt-lock-btn${i?` locked`:``}`})}clearLock(){this.lockedEnemy=null,this.setOrbiting(!1),this.setFollowing(!1)}externalLock(e){this.lockedEnemy=e,this.orbitBtn.className=`tgt-orbit-btn available`,this.followBtn.className=`tgt-orbit-btn available`,this.onLockChange(!0,e)}syncOrbit(e){this.setOrbiting(e)}syncFollow(e){this.setFollowing(e)}setOrbiting(e){this.orbiting=e,this.orbitBtn.className=this.lockedEnemy?e?`tgt-orbit-btn orbiting`:`tgt-orbit-btn available`:`tgt-orbit-btn`}setFollowing(e){this.following=e,this.followBtn.className=this.lockedEnemy?e?`tgt-orbit-btn orbiting`:`tgt-orbit-btn available`:`tgt-orbit-btn`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e)}},le=class{el;shieldCircles=[];healthBlocks=[];chargeRow;chargeFill;constructor(){this.el=document.createElement(`div`),this.el.id=`tgt-detail`,this.el.innerHTML=`
      <div class="tdh-panel">
        <div class="tdh-ship">${this.shipSVG()}</div>
        <div class="tdh-info">
          <div class="tdh-row">
            <span class="tdh-label">SHLD</span>
            <div class="tdh-circles" id="tdh-circles"></div>
          </div>
          <div class="tdh-row">
            <span class="tdh-label">HULL</span>
            <div class="tdh-health" id="tdh-health"></div>
          </div>
          <div class="tdh-charge-row" id="tdh-charge-row">
            <span class="tdh-charge-label">⚡ PULSE CHARGING</span>
            <div class="tdh-charge-track">
              <div class="tdh-charge-fill" id="tdh-charge-fill"></div>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.el);let e=document.getElementById(`tdh-circles`);for(let t=0;t<5;t++){let t=document.createElement(`div`);t.className=`tdh-circle`,e.appendChild(t),this.shieldCircles.push(t)}let t=document.getElementById(`tdh-health`);for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`tdh-hblock`,t.appendChild(e),this.healthBlocks.push(e)}this.chargeRow=document.getElementById(`tdh-charge-row`),this.chargeFill=document.getElementById(`tdh-charge-fill`),this.injectStyles()}show(e){this.el.classList.add(`visible`),this.update(e)}hide(){this.el.classList.remove(`visible`)}update(e){this.shieldCircles.forEach((t,n)=>{let r=n*20;e.shields>=r+20?t.className=`tdh-circle full`:e.shields>=r+10?t.className=`tdh-circle half`:t.className=`tdh-circle`});let t=Math.ceil(e.health/e.maxHealth*10);this.healthBlocks.forEach((e,n)=>{e.className=`tdh-hblock${n>=t?` empty`:``}`});let n=e.chargeState===`charging`;this.chargeRow.style.display=n?`flex`:`none`,n&&(this.chargeFill.style.width=`${e.chargeProgress*100}%`)}shipSVG(){return`<svg viewBox="-22 -28 44 58" width="56" height="74" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,-24 L7,2 L10,20 L0,14 L-10,20 L-7,2 Z"
            fill="rgba(100,180,255,0.18)" stroke="rgba(100,180,255,0.65)" stroke-width="1"/>
      <path d="M-7,-2 L-20,16 L-9,11 Z"
            fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.35)" stroke-width="0.8"/>
      <path d="M7,-2 L20,16 L9,11 Z"
            fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.35)" stroke-width="0.8"/>
      <circle cx="0" cy="-8" r="2.5" fill="rgba(100,180,255,0.45)" stroke="rgba(100,180,255,0.85)" stroke-width="0.8"/>
      <line x1="-3" y1="4" x2="3" y2="4" stroke="rgba(100,180,255,0.4)" stroke-width="0.8"/>
    </svg>`}injectStyles(){let e=document.createElement(`style`);e.textContent=`
      #tgt-detail {
        position: fixed;
        bottom: -200px;
        left: 50%;
        transform: translateX(-50%);
        transition: bottom 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 10;
        pointer-events: none;
      }
      #tgt-detail.visible { bottom: 24px; }
      .tdh-panel {
        display: flex; gap: 16px; align-items: center;
        background: rgba(0,8,24,0.88);
        border: 1px solid rgba(100,180,255,0.32);
        border-radius: 6px; padding: 12px 18px;
        font-family: 'Courier New', monospace; font-size: 12px; color: #8cf;
      }
      .tdh-info { display: flex; flex-direction: column; gap: 8px; min-width: 175px; }
      .tdh-row { display: flex; align-items: center; gap: 8px; }
      .tdh-label {
        color: rgba(100,180,255,0.45); width: 34px; font-size: 11px; letter-spacing: 1px; flex-shrink: 0;
      }
      .tdh-circles { display: flex; gap: 4px; }
      .tdh-circle {
        width: 10px; height: 10px; border-radius: 50%;
        border: 1px solid rgba(100,180,255,0.2); background: transparent;
      }
      .tdh-circle.half { border-color: rgba(100,180,255,0.75); }
      .tdh-circle.full {
        border-color: rgba(100,180,255,0.85);
        background: rgba(100,180,255,0.65);
        box-shadow: 0 0 5px rgba(100,180,255,0.4);
      }
      .tdh-health { display: flex; gap: 2px; }
      .tdh-hblock {
        width: 8px; height: 10px;
        background: rgba(60,220,80,0.8); border: 1px solid rgba(60,220,80,0.4);
      }
      .tdh-hblock.empty {
        background: rgba(60,220,80,0.07); border-color: rgba(60,220,80,0.2);
      }
      .tdh-charge-row {
        display: flex; flex-direction: column; gap: 5px;
        padding: 6px 8px;
        border: 1px solid rgba(255,100,0,0.5);
        border-radius: 3px;
        animation: tdh-charge-pulse 0.55s ease-in-out infinite;
      }
      @keyframes tdh-charge-pulse {
        0%, 100% { border-color: rgba(255,80,0,0.35); background: rgba(255,40,0,0.04); }
        50%       { border-color: rgba(255,180,0,0.85); background: rgba(255,60,0,0.1); }
      }
      .tdh-charge-label { color: #f84; font-size: 11px; letter-spacing: 1px; }
      .tdh-charge-track {
        width: 100%; height: 5px;
        background: rgba(255,100,0,0.15); border-radius: 2px; overflow: hidden;
      }
      .tdh-charge-fill {
        height: 100%;
        background: linear-gradient(90deg, rgba(255,80,0,0.9), rgba(255,220,0,1));
        border-radius: 2px; transition: width 0.08s linear;
      }
    `,document.head.appendChild(e)}},ue=class{healthBlocks=[];shieldCircles=[];energySlots=[];state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`player-status`;let n=document.createElement(`div`);n.className=`ps-row`;let r=document.createElement(`span`);r.className=`ps-label`,r.textContent=`HULL`;let i=document.createElement(`div`);i.className=`ps-blocks`;for(let e=0;e<10;e++){let e=document.createElement(`div`);e.className=`ps-health-block`,i.appendChild(e),this.healthBlocks.push(e)}n.append(r,i);let a=document.createElement(`div`);a.className=`ps-row`;let o=document.createElement(`span`);o.className=`ps-label`,o.textContent=`SHLD`;let s=document.createElement(`div`);s.className=`ps-circles`;for(let e=0;e<8;e++){let e=document.createElement(`div`);e.className=`ps-shield-circle`,s.appendChild(e),this.shieldCircles.push(e)}a.append(o,s);let c=document.createElement(`div`);c.className=`ps-row`;let l=document.createElement(`span`);l.className=`ps-label`,l.textContent=`PWR`;let u=document.createElement(`div`);u.className=`ps-energy-slots`;for(let e=0;e<6;e++){let e=document.createElement(`div`);e.className=`ps-energy-slot`,u.appendChild(e),this.energySlots.push(e)}c.append(l,u),t.append(n,a,c),document.body.appendChild(t),this.injectStyles()}update(){let{health:e,maxHealth:t,shields:n,maxShields:r,energy:i,overloadTimer:a}=this.state,o=Math.max(0,Math.round(e/t*10));this.healthBlocks.forEach((e,t)=>{e.className=`ps-health-block${t>=o?` empty`:``}`});let s=a>0,c=s?n:Math.min(n,r);this.shieldCircles.forEach((e,t)=>{if(t>=5){if(!s){e.className=`ps-shield-circle hidden`;return}let n=r+(t-5)*20;c>=n+20?e.className=`ps-shield-circle overload-full`:c>=n+10?e.className=`ps-shield-circle overload-half`:e.className=`ps-shield-circle overload-empty`;return}let n=t*20;c>=n+20?e.className=`ps-shield-circle full`:c>=n+10?e.className=`ps-shield-circle half`:e.className=`ps-shield-circle`});let l=Math.floor(i);this.energySlots.forEach((e,t)=>{e.className=`ps-energy-slot${t<l?` filled`:``}`})}injectStyles(){let e=document.createElement(`style`);e.textContent=`
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
      .ps-energy-slots { display: flex; gap: 3px; }
      .ps-energy-slot {
        width: 10px; height: 14px;
        border: 1px solid rgba(255,160,60,0.22);
        border-radius: 2px;
        background: rgba(255,160,60,0.04);
        transition: background 0.1s, box-shadow 0.1s;
      }
      .ps-energy-slot.filled {
        background: rgba(255,160,60,0.78);
        border-color: rgba(255,210,80,0.9);
        box-shadow: 0 0 4px rgba(255,160,60,0.4);
      }
      .ps-shield-circle.hidden { display: none; }
      .ps-shield-circle.overload-empty {
        border: 1px solid rgba(255,255,255,0.25); background: transparent;
      }
      .ps-shield-circle.overload-half {
        border: 2px solid rgba(255,255,255,0.7); background: transparent;
      }
      .ps-shield-circle.overload-full {
        border: 1px solid rgba(255,255,255,0.9);
        background: rgba(255,255,255,0.75);
        box-shadow: 0 0 7px rgba(255,255,255,0.6);
      }
    `,document.head.appendChild(e)}},de=class{recognition;listening=!1;onResult;onStateChange;constructor(e,t){this.onResult=e,this.onStateChange=t;let n=window.SpeechRecognition??window.webkitSpeechRecognition;if(!n)throw Error(`SpeechRecognition not supported`);this.recognition=new n,this.recognition.lang=`en-US`,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onresult=e=>{let t=e.results[0][0].transcript;this.onResult(t)},this.recognition.onend=()=>{this.listening=!1,this.onStateChange(!1)},this.recognition.onerror=()=>{this.listening=!1,this.onStateChange(!1)}}start(){this.listening||(this.recognition.start(),this.listening=!0,this.onStateChange(!0))}stop(){this.listening&&this.recognition.stop()}toggle(){this.listening?this.stop():this.start()}get active(){return this.listening}};async function fe(e){let t=await fetch(`/api/sofi`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({text:e})});if(!t.ok)throw Error(`Sofi is offline`);return t.json()}var pe=class{input;log;voiceBtn;voice;state;constructor(e){this.state=e;let t=document.createElement(`div`);t.id=`cmd-wrap`,this.input=document.createElement(`input`),this.input.id=`cmd-input`,this.input.type=`text`,this.input.placeholder=`Enter command...`,this.input.spellcheck=!1,this.voiceBtn=document.createElement(`button`),this.voiceBtn.id=`cmd-voice`,this.voiceBtn.textContent=`🎙`,this.voiceBtn.title=`Hold V or click to speak`;let n=document.createElement(`div`);n.id=`cmd-input-row`,n.appendChild(this.input),n.appendChild(this.voiceBtn),this.log=document.createElement(`div`),this.log.id=`cmd-log`,t.appendChild(this.log),t.appendChild(n),document.body.appendChild(t),speechSynthesis.getVoices(),speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices()),this.voice=new de(e=>this.submit(e),e=>{this.voiceBtn.classList.toggle(`listening`,e),this.input.placeholder=e?`Listening...`:`Enter command...`}),this.voiceBtn.addEventListener(`click`,()=>this.voice.toggle()),window.addEventListener(`keydown`,e=>{e.code===`KeyV`&&!e.repeat&&document.activeElement!==this.input&&this.voice.start()}),window.addEventListener(`keyup`,e=>{e.code===`KeyV`&&this.voice.stop()}),this.input.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&(this.submit(this.input.value.trim()),this.input.value=``),e.key===`Escape`&&this.input.blur()}),this.injectStyles()}async submit(e){if(!e)return;this.addLog(`> ${e}`,`...`,!0);let t;try{t=await fe(e)}catch{this.replaceLastResponse(`Sofi is offline`,!1);return}let n=t.command;if(!n){this.replaceLastResponse(t.reply,!1),this.speak(t.reply);return}if(n.action===`setValue`&&n.value!==void 0){let e=Math.max(0,Math.min(100,n.value));n.system===`shields`?(this.state.maxShields=e,this.state.shields=Math.min(this.state.shields,e)):n.system===`engines`?(this.state.maxEngines=e,this.state.engines=Math.min(this.state.engines,e)):this.state[n.system]=e}else n.action===`turnOn`?n.system===`weapons`?this.state.lasers.pendingFire=!0:n.system===`shields`?(this.state.maxShields=100,this.state.shields=Math.min(this.state.shields,100)):n.system===`engines`?(this.state.maxEngines=100,this.state.engines=100):this.state[n.system]=100:n.action===`turnOff`&&(n.system===`weapons`?this.state.lasers.pendingFire=!1:n.system===`shields`?(this.state.maxShields=0,this.state.shields=0):n.system===`engines`?(this.state.maxEngines=0,this.state.engines=0):this.state[n.system]=0);this.replaceLastResponse(t.reply,!0),this.speak(t.reply)}speak(e){let t=new SpeechSynthesisUtterance(e);t.pitch=1.1,t.rate=1;let n=speechSynthesis.getVoices().find(e=>/female|zira|samantha|karen|moira|victoria/i.test(e.name));n&&(t.voice=n),speechSynthesis.cancel(),speechSynthesis.speak(t)}replaceLastResponse(e,t){let n=this.log.lastElementChild;if(n){let r=n.querySelector(`.cmd-resp`);r&&(r.textContent=e,r.className=`cmd-resp ${t?`ok`:`err`}`)}}addLog(e,t,n){let r=document.createElement(`div`);for(r.className=`cmd-entry`,r.innerHTML=`<span class="cmd-text">${e}</span><span class="cmd-resp ${n?`ok`:`err`}">${t}</span>`,this.log.appendChild(r),this.log.scrollTop=this.log.scrollHeight;this.log.children.length>6;)this.log.removeChild(this.log.firstChild)}injectStyles(){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e)}},me=144,he=120,ge=2,_e=10;function ve(e,t){let n=E(g(),O(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function ye(e,t,n,r){for(let i of e){if(i.dead)continue;let e=me*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>he){i.dead=!0;continue}T(i.pos,n)<ge&&(r(_e,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var be=55;function xe(e,t){let n=E(g(),O(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function Se(e,t,n,r){for(let i of e){if(i.dead)continue;let e=be*t;if(w(i.pos,i.pos,i.dir,e),i.traveled+=e,i.traveled>200){i.dead=!0;continue}T(i.pos,n)<2.5&&(r(35,_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var G=70,K=2,Ce=12,we=14,Te=35,Ee=10,De=1.4,Oe=60,ke=2.2,Ae=144,je=2.5,Me=8,Ne=3.5,Pe=80,Fe=200,Ie=class{pos=y(20,4,-20);heading=y(-1,0,0);shields=80;maxShields=80;health=10;maxHealth=10;hitRing=0;hitPos=y(0,0,1);chargeWave=-1;lasers=[];heavyShots=[];chargeState=`idle`;chargeProgress=0;prevShieldBubble=0;target=g();yaw=180;pitch=0;rollAngle=0;fireTimer=Math.random()*ke;chargeTimer=0;cooldownTimer=0;chargeIntervalTimer=Me*(.5+Math.random());constructor(e){e&&b(this.pos,e),this.pickWaypoint()}pickWaypoint(){this.target=y((Math.random()*2-1)*G,K+Math.random()*(Ce-K),(Math.random()*2-1)*G)}interruptCharge(){this.chargeState===`charging`&&(this.chargeState=`cooldown`,this.cooldownTimer=Ne*.5,this.chargeProgress=0)}update(e,t){let n=O(g(),this.target,this.pos);v(n)<Ee&&this.pickWaypoint();let i=Math.atan2(n[0],n[2])*180/Math.PI,a=Math.atan2(n[1],Math.sqrt(n[0]**2+n[2]**2))*180/Math.PI,o=Te*e,s=((i-this.yaw)%360+540)%360-180,c=a-this.pitch;s=Math.max(-o,Math.min(o,s)),c=Math.max(-o,Math.min(o,c));let l=this.yaw;this.yaw+=s,this.pitch+=c;let u=((this.yaw-l)%360+540)%360-180,d=Math.max(-70,Math.min(70,-u*60*60));this.rollAngle+=(d-this.rollAngle)*Math.min(1,.1*e*60);let f=r(this.yaw),p=r(this.pitch);if(this.heading=E(g(),y(Math.sin(f)*Math.cos(p),Math.sin(p),Math.cos(f)*Math.cos(p))),w(this.pos,this.pos,this.heading,we*e),this.pos[0]=Math.max(-70,Math.min(G,this.pos[0])),this.pos[1]=Math.max(K,Math.min(Ce,this.pos[1])),this.pos[2]=Math.max(-70,Math.min(G,this.pos[2])),t){let n=T(this.pos,t);this.fireTimer-=e,this.fireTimer<=0&&n<Oe&&(this.lasers.push(ve(this.pos,t)),this.fireTimer=ke)}switch(this.chargeState){case`idle`:this.chargeIntervalTimer-=e,this.chargeIntervalTimer<=0&&t&&(this.chargeState=`charging`,this.chargeTimer=0);break;case`charging`:if(this.chargeTimer+=e,this.chargeProgress=Math.min(1,this.chargeTimer/je),this.chargeTimer>=je){if(t){let e=E(g(),O(g(),t,this.pos));this.heavyShots.push({pos:_(this.pos),dir:e,traveled:0,dead:!1})}this.chargeState=`cooldown`,this.cooldownTimer=Ne,this.chargeProgress=0}break;case`cooldown`:this.cooldownTimer-=e,this.cooldownTimer<=0&&(this.chargeState=`idle`,this.chargeIntervalTimer=Me);break}for(let t of this.lasers){if(t.dead)continue;let n=Ae*e;w(t.pos,t.pos,t.dir,n),t.traveled+=n,t.traveled>120&&(t.dead=!0)}for(let e=this.lasers.length-1;e>=0;e--)this.lasers[e].dead&&this.lasers.splice(e,1);for(let t of this.heavyShots){if(t.dead)continue;let n=Pe*e;w(t.pos,t.pos,t.dir,n),t.traveled+=n,t.traveled>Fe&&(t.dead=!0)}for(let e=this.heavyShots.length-1;e>=0;e--)this.heavyShots[e].dead&&this.heavyShots.splice(e,1);this.shields=Math.min(this.maxShields,this.shields+De*e);let m=Math.floor(this.shields/20);m>this.prevShieldBubble&&(this.chargeWave=0),this.prevShieldBubble=m,this.chargeWave>=0&&(this.chargeWave+=e*2.5,this.chargeWave>=1&&(this.chargeWave=-1)),this.hitRing>0&&(this.hitRing+=e*2.5,this.hitRing>=1&&(this.hitRing=0))}get modelMatrix(){let e=i();return s(e,e,this.pos),u(e,e,r(this.yaw)),l(e,e,r(-this.pitch)),d(e,e,r(this.rollAngle)),e}},Le=`#version 300 es
layout (location = 0) in vec3 aPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out float vT;

void main() {
    vT = aPos.z; // 0=tail, 1=head
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}
`,Re=`#version 300 es
precision mediump float;

in float vT;
out vec4 FragColor;

uniform vec3 laserColor;

void main() {
    float brightness = pow(vT, 0.4); // bright at head, fade at tail
    FragColor = vec4(laserColor * brightness, brightness);
}
`,ze=3,q=.06,Be=1.4,Ve=.18,He=class{shader;vao;indexCount;gl;constructor(e){this.gl=e,this.shader=new M(e,Le,Re);let{vao:t,indexCount:n}=this.buildQuad();this.vao=t,this.indexCount=n}buildQuad(){let e=this.gl,t=q,n=new Float32Array([-.06,-.06,0,t,-.06,0,t,t,0,-.06,t,0,-.06,-.06,1,t,-.06,1,t,t,1,-.06,t,1]),r=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7]),i=e.createVertexArray(),a=e.createBuffer(),o=e.createBuffer();return e.bindVertexArray(i),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o),e.bufferData(e.ELEMENT_ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),{vao:i,indexCount:r.length}}draw(e,t,n,r=y(.2,1,1),a=ze,o=q){if(e.length===0)return;let l=this.gl;this.shader.use(),this.shader.setMat4(`view`,t),this.shader.setMat4(`projection`,n),this.shader.setVec3(`laserColor`,r),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE),l.depthMask(!1),l.bindVertexArray(this.vao);for(let t of e){let e=i();s(e,e,w(g(),t.pos,t.dir,-a));let n=Math.abs(t.dir[1])<.99?y(0,1,0):y(1,0,0),r=E(g(),ee(g(),n,t.dir)),u=ee(g(),t.dir,r);e[0]=r[0],e[1]=r[1],e[2]=r[2],e[4]=u[0],e[5]=u[1],e[6]=u[2],e[8]=t.dir[0],e[9]=t.dir[1],e[10]=t.dir[2],c(e,e,[o/q,o/q,a]),this.shader.setMat4(`model`,e),l.drawElements(l.TRIANGLES,this.indexCount,l.UNSIGNED_SHORT,0)}l.bindVertexArray(null),l.depthMask(!0),l.disable(l.BLEND)}get pulseLength(){return Be}get pulseWidth(){return Ve}get pulseColor(){return y(1,.5,.05)}},Ue=`#version 300 es
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
`,We=`#version 300 es
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
`,Ge=class{shader;vao;gl;constructor(e){this.gl=e,this.shader=new M(e,Ue,We),this.vao=this.buildQuad()}buildQuad(){let e=this.gl,t=new Float32Array([-1,0,0,1,0,0,1,0,1,-1,0,1]),n=new Uint16Array([0,1,2,0,2,3]),r=e.createVertexArray(),i=e.createBuffer(),a=e.createBuffer();return e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,12,0),e.bindVertexArray(null),r}draw(e,t,n,r,i,a,o){let s=this.gl;this.shader.use(),this.shader.setMat4(`view`,e),this.shader.setMat4(`projection`,t),this.shader.setVec3(`startPos`,n),this.shader.setVec3(`endPos`,r),this.shader.setVec3(`viewPos`,i),this.shader.setFloat(`width`,.04),this.shader.setVec3(`beamColor`,y(1,.05,.05)),this.shader.setFloat(`alpha`,a/o*.55),s.enable(s.BLEND),s.blendFunc(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1),s.bindVertexArray(this.vao),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0),s.bindVertexArray(null),s.depthMask(!0),s.disable(s.BLEND)}},Ke=210,qe=160,Je=2.2;function Ye(e,t){let n=E(g(),O(g(),t,e));return{pos:_(e),dir:n,traveled:0,dead:!1}}function Xe(e,t,n,r){for(let i of e){if(i.dead)continue;let e=O(g(),n,i.pos);if(v(e)>.1){let t=E(g(),e);D(i.dir,i.dir,t,.12),E(i.dir,i.dir)}let a=Ke*t;if(w(i.pos,i.pos,i.dir,a),i.traveled+=a,i.traveled>qe){i.dead=!0;continue}T(i.pos,n)<Je&&(r(_(i.pos)),i.dead=!0)}for(let t=e.length-1;t>=0;t--)e[t].dead&&e.splice(t,1)}var J=36,Ze=72,Y=90,X=.08,Z=35,Q=.07,Qe=1.2,$e=.2,et=18,tt=60,nt=class{gl;width;height;grid;shield;engine;ship;hud;playerStatus;weaponsHud;targetHud;targetDetail;cameraLocked=!1;orbitActive=!1;followActive=!1;orbitRadius=20;smoothCamPos=g();smoothCamTarget=g();camInitialized=!1;wasOrbiting=!1;ready=!1;startTime=performance.now();shipPos=y(0,0,0);shipFront=y(0,0,-1);worldUp=y(0,1,0);yaw=-90;pitch=0;currentSpeed=J*.03;rollAngle=0;pitchAngle=0;shipState;input;lightPos=y(10,10,10);enemies=(()=>{let e=new Ie,t=new Ie(y(-20,4,20));return t.shields=20,t.maxShields=20,[e,t]})();lockedEnemy=null;lastTime=performance.now();enemyShieldColor=y(1,.45,0);laserRenderer;beamRenderer;lasers=[];ionBeams=[];railFlashTimer=0;prevPlayerBubble=0;targetIndicator;constructor(e,t,n,r){this.gl=e,this.width=t,this.height=n,this.shipState=ae(),this.input=new ie(r),this.createTargetIndicator(),this.init()}async init(){try{let e=this.gl,t=await re(`/games/yes-captain/models/craft_speederA.obj`);this.grid=new F(e),this.shield=new R(e),this.engine=new B(e),this.ship=new H(e,t),this.playerStatus=new ue(this.shipState),this.hud=new oe(this.shipState),this.weaponsHud=new se(this.shipState),this.targetDetail=new le,this.targetHud=new ce((e,t)=>{this.cameraLocked=e,this.lockedEnemy=e?t:null,e?this.targetDetail.show(t):(this.orbitActive=!1,this.followActive=!1,this.targetDetail.hide())},e=>{this.orbitActive=e,e&&(this.followActive=!1,this.orbitRadius=30)},e=>{this.followActive=e,e&&(this.orbitActive=!1)}),new pe(this.shipState),this.laserRenderer=new He(e),this.beamRenderer=new Ge(e),this.ready=!0}catch(e){console.error(`Renderer init failed:`,e)}}resize(e,t){this.width=e,this.height=t,this.gl.viewport(0,0,e,t)}frame(){if(!this.ready)return;let e=this.gl,t=performance.now(),n=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;let a=n*(this.lockedEnemy?$e:1);if(this.processInput(a),this.input.justPressed(`KeyE`)&&(this.lockedEnemy?this.unlockTarget():this.lockNearest()),this.input.justPressed(`KeyR`)&&this.enemies.length>0&&this.cycleTarget(),this.input.justPressed(`Digit1`)&&this.tryFire(`lasers`),this.input.justPressed(`Digit2`)&&this.tryFire(`ionBeam`),this.input.justPressed(`Digit3`)&&this.tryFire(`railShot`),this.input.justPressed(`Digit4`)&&this.tryFire(`pulseCannon`),this.input.justPressed(`Digit5`)&&this.tryFire(`shieldOverload`),this.input.justPressed(`KeyO`)&&this.lockedEnemy){let e=!this.orbitActive;this.orbitActive=e,this.followActive=!1,e&&(this.orbitRadius=30),this.targetHud.syncOrbit(e)}if(this.input.justPressed(`KeyF`)&&this.lockedEnemy){let e=!this.followActive;this.followActive=e,this.orbitActive=!1,this.targetHud.syncFollow(e)}if(this.input.clearJustPressed(),!this.input.isOrbiting()){let e=Math.atan2(-this.shipFront[0],-this.shipFront[2])*180/Math.PI,t=.08*n*60,r=((e-this.input.orbitAzimuth)%360+540)%360-180;this.input.orbitAzimuth+=r*t,this.input.orbitElevation+=(15-this.input.orbitElevation)*t}let o=r(this.input.orbitAzimuth),f=r(this.input.orbitElevation),h=this.input.orbitDistance,_=y(this.shipPos[0]+h*Math.cos(f)*Math.sin(o),this.shipPos[1]+h*Math.sin(f),this.shipPos[2]+h*Math.cos(f)*Math.cos(o)),S,w;if(this.cameraLocked&&this.lockedEnemy)if(w=this.lockedEnemy.pos,this.input.isOrbiting()){if(!this.wasOrbiting){let e=O(g(),this.smoothCamPos,this.shipPos),t=Math.sqrt(e[0]**2+e[2]**2);this.input.orbitElevation=Math.atan2(e[1],t)*180/Math.PI,this.input.orbitAzimuth=Math.atan2(e[0],e[2])*180/Math.PI,this.input.orbitDistance=v(e)}S=_,w=this.shipPos}else{let e=E(g(),O(g(),this.lockedEnemy.pos,this.shipPos)),t=C(g(),e,-h);t[1]+=h*.25,S=x(g(),this.shipPos,t)}else S=_,w=this.shipPos;this.camInitialized||=(b(this.smoothCamPos,S),b(this.smoothCamTarget,w),!0);let ee=.06*n*60,M=this.cameraLocked&&this.input.isOrbiting()?.03*n*60:.06*n*60;D(this.smoothCamPos,this.smoothCamPos,S,ee),D(this.smoothCamTarget,this.smoothCamTarget,w,M);let N=m(i(),this.smoothCamPos,this.smoothCamTarget,this.worldUp),P=p(i(),r(45),this.width/this.height,.1,1e3);e.viewport(0,0,this.width,this.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.grid.draw(N,P);let F=90-this.yaw,I=i();s(I,I,this.shipPos),u(I,I,r(F)),l(I,I,r(this.pitchAngle)),d(I,I,r(this.rollAngle)),this.ship.draw(I,N,P,this.lightPos,this.smoothCamPos);let L=i();u(L,L,r(F)),l(L,L,r(this.pitchAngle)),d(L,L,r(this.rollAngle));let R=j(k(),A(0,.3,0,0),L),te=x(g(),this.shipPos,y(R[0],R[1],R[2])),z=i();s(z,z,te);let B=this.shipState.overloadTimer>0?1.65:1.5;c(z,z,[B,B,B]),this.shield.draw(z,N,P,this.smoothCamPos,this.shipState.shields,void 0,this.shipState.hitRing,this.shipState.hitPos,this.shipState.chargeWave);let ne=(performance.now()-this.startTime)/1e3;for(let e of[-.35,.35]){let t=A(e,.25,-.9,0),n=j(k(),t,L),r=x(g(),this.shipPos,y(n[0],n[1],n[2])),i=this.currentSpeed/J*100;this.engine.draw(r,L,N,P,i,ne)}let V=this.shipState;V.energy=Math.min(V.maxEnergy,V.energy+Qe*n),V.overloadTimer>0&&(V.overloadTimer=Math.max(0,V.overloadTimer-n),V.overloadTimer<=0&&(V.shields=Math.min(V.maxShields,V.shields))),V.shields<V.maxShields&&V.overloadTimer<=0&&(V.shields=Math.min(V.maxShields,V.shields+5*n));let H=Math.floor(V.shields/20);H>this.prevPlayerBubble&&(V.chargeWave=0),this.prevPlayerBubble=H,V.chargeWave>=0&&(V.chargeWave+=n*2.5,V.chargeWave>=1&&(V.chargeWave=-1)),V.hitRing>0&&(V.hitRing+=n*2.5,V.hitRing>=1&&(V.hitRing=0));let U=(e,t)=>{let n=this.lockedEnemy;if(!n)return;let r=e=>{let r=O(g(),t,n.pos);E(n.hitPos,r),n.hitRing=.01,n.shields=Math.max(0,n.shields-e)},i=()=>{n.health<=0&&this.killEnemy(n)};switch(e){case`laser`:n.shields>=20?r(8):(n.health=Math.max(0,n.health-.8),i());break;case`ion`:n.interruptCharge(),n.shields>0?r(12):(n.health=Math.max(0,n.health-1),i());break;case`rail`:n.health=Math.max(0,n.health-2),i();break;case`pulse`:n.shields>0?(r(35),n.health=Math.max(0,n.health-2)):n.health=Math.max(0,n.health-4),i();break}};if(this.lockedEnemy){let e=this.lockedEnemy;ye(this.lasers,a,e.pos,(e,t)=>U(`laser`,t)),Xe(this.ionBeams,a,e.pos,e=>U(`ion`,e)),Se(this.playerPulses,a,e.pos,(e,t)=>U(`pulse`,t))}this.laserRenderer.draw(this.lasers,N,P),this.laserRenderer.draw(this.ionBeams,N,P,y(0,.85,1),4.5,.12),this.laserRenderer.draw(this.playerPulses,N,P,y(1,.55,.05),2,.28),this.railFlashTimer>0&&this.lockedEnemy&&(this.railFlashTimer-=n,this.beamRenderer.draw(N,P,this.shipPos,this.lockedEnemy.pos,this.smoothCamPos,this.railFlashTimer,.15));let re=2.5;for(let e of this.enemies){e.update(a,this.shipPos);for(let t of e.lasers)t.dead||T(t.pos,this.shipPos)<re&&(t.dead=!0,this.takePlayerHit(10,t.pos));for(let t of e.heavyShots)t.dead||T(t.pos,this.shipPos)<re&&(t.dead=!0,this.takePlayerHit(30,t.pos));this.laserRenderer.draw(e.lasers,N,P,y(1,.3,.1)),this.laserRenderer.draw(e.heavyShots,N,P,y(1,.5,0),2.5,.3),this.ship.draw(e.modelMatrix,N,P,this.lightPos,this.smoothCamPos);let t=i();s(t,t,y(e.pos[0],e.pos[1]+.3,e.pos[2])),c(t,t,[1.5,1.5,1.5]),this.shield.draw(t,N,P,this.smoothCamPos,e.shields,this.enemyShieldColor,e.hitRing,e.hitPos,e.chargeWave)}this.targetHud.update(this.enemies.map(e=>({obj:e,shields:e.shields,maxShields:e.maxShields,health:e.health,maxHealth:e.maxHealth,dist:T(this.shipPos,e.pos)}))),this.weaponsHud.update(n,this.cameraLocked),this.playerStatus.update(),this.hud.update(this.shipState,this.currentSpeed/J*100),this.updateTargetIndicator(N,P),this.lockedEnemy&&this.targetDetail.update(this.lockedEnemy),this.wasOrbiting=this.input.isOrbiting()}lockEnemy(e){this.lockedEnemy=e,this.cameraLocked=!0,this.targetHud.externalLock(e),this.targetDetail.show(e)}unlockTarget(){this.lockedEnemy=null,this.cameraLocked=!1,this.orbitActive=!1,this.followActive=!1,this.targetHud.clearLock(),this.targetDetail.hide()}lockNearest(){if(this.enemies.length===0)return;let e=null,t=1/0;for(let n of this.enemies){let r=T(this.shipPos,n.pos);r<t&&(t=r,e=n)}e&&this.lockEnemy(e)}cycleTarget(){if(this.enemies.length===0)return;let e=this.lockedEnemy?this.enemies.indexOf(this.lockedEnemy):-1,t=this.enemies[(e+1)%this.enemies.length];this.lockEnemy(t)}killEnemy(e){let t=this.enemies.indexOf(e);t!==-1&&this.enemies.splice(t,1),this.lockedEnemy===e&&this.unlockTarget()}tryFire(e){if(!this.cameraLocked&&e!==`shieldOverload`)return;let t=this.shipState,n=t[e];if(!n.reloading){if(e===`shieldOverload`){if(t.energy<n.energyCost)return;t.energy-=n.energyCost,t.shields=Math.min(t.maxShields+tt,t.shields+tt),t.overloadTimer=3,n.reloading=!0,n.reloadTimer=n.reloadTime;return}if(this.lockedEnemy&&!(t.energy<n.energyCost)){switch(t.energy-=n.energyCost,e){case`lasers`:this.lasers.push(ve(this.shipPos,this.lockedEnemy.pos));break;case`ionBeam`:this.ionBeams.push(Ye(this.shipPos,this.lockedEnemy.pos));break;case`railShot`:this.railFlashTimer=.15;applyRailHit:{let e=this.lockedEnemy;if(e.health=Math.max(0,e.health-2),e.health<=0){this.killEnemy(e);break applyRailHit}}break;case`pulseCannon`:this.playerPulses.push(xe(this.shipPos,this.lockedEnemy.pos));break}n.reloading=!0,n.reloadTimer=n.reloadTime}}}playerPulses=[];takePlayerHit(e,t){let n=this.shipState;if(n.shields>=20){n.shields=Math.max(0,n.shields-e);let r=O(g(),t,this.shipPos);E(n.hitPos,r),n.hitRing=.01}else n.health=Math.max(0,n.health-Math.ceil(e/10))}createTargetIndicator(){let e=document.createElement(`style`);e.textContent=`
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
    `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`target-indicator`,document.body.appendChild(t),this.targetIndicator=t}updateTargetIndicator(e,t){if(!this.cameraLocked||!this.lockedEnemy){this.targetIndicator.style.display=`none`;return}let n=y(this.lockedEnemy.pos[0],this.lockedEnemy.pos[1]+3,this.lockedEnemy.pos[2]),r=h(i(),t,e),a=j(k(),A(n[0],n[1],n[2],1),r);if(a[3]<=0){this.targetIndicator.style.display=`none`;return}let o=a[0]/a[3],s=-a[1]/a[3],c=(o+1)/2*this.width,l=(s+1)/2*this.height;this.targetIndicator.style.display=`block`,this.targetIndicator.style.left=`${c}px`,this.targetIndicator.style.top=`${l}px`}processInput(e){let t=this.input;if(this.shipState.engines=this.shipState.maxEngines,this.currentSpeed=this.shipState.engines/100*J,this.followActive&&this.lockedEnemy){let t=this.lockedEnemy,n=E(g(),y(t.heading[0],0,t.heading[2])),i=w(g(),t.pos,n,-18),a=y(i[0]-this.shipPos[0],0,i[2]-this.shipPos[2]),o=v(a),s=this.yaw;if(o>.5){let t=E(g(),a),n=E(g(),y(this.shipFront[0],0,this.shipFront[2]));D(n,n,t,.05*e*60),E(n,n),this.yaw=Math.atan2(n[2],n[0])*180/Math.PI}let c=i[1]-this.shipPos[1],l=Math.max(-35,Math.min(Z,-c*3));this.pitch+=(l-this.pitch)*.04*e*60,this.pitch=Math.max(-35,Math.min(Z,this.pitch));let u=r(this.yaw),d=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(u)*Math.cos(d),Math.sin(d),Math.sin(u)*Math.cos(d))),this.pitchAngle+=(this.pitch-this.pitchAngle)*Q*e*60;let f=((this.yaw-s)%360+540)%360-180,p=Math.max(-90,Math.min(Y,f*80*60));this.rollAngle+=(p-this.rollAngle)*X*e*60*2;let m=Math.min(1,o/(et*1.5));w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*m*e);return}if(this.orbitActive&&this.lockedEnemy){let t=this.yaw,n=O(g(),this.shipPos,this.lockedEnemy.pos);n[1]=0;let r=v(n);if(r>.01){let t=E(g(),n),i=E(g(),y(-t[2]+t[0]*(this.orbitRadius-r)*.02,0,t[0]+t[2]*(this.orbitRadius-r)*.02)),a=E(g(),y(this.shipFront[0],0,this.shipFront[2]));D(a,a,i,.04*e*60),E(a,a),this.shipFront[0]=a[0],this.shipFront[2]=a[2],this.shipFront[1]=0}this.pitch=0,this.pitchAngle+=(0-this.pitchAngle)*Q*e*60,this.yaw=Math.atan2(this.shipFront[2],this.shipFront[0])*180/Math.PI;let i=((this.yaw-t)%360+540)%360-180,a=Math.max(-90,Math.min(Y,i*80*60));this.rollAngle+=(a-this.rollAngle)*X*e*60*2,w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e);return}let n=t.held(`KeyA`),i=t.held(`KeyD`),a=n?-90:i?Y:0;this.rollAngle+=(a-this.rollAngle)*X*e*60,this.rollAngle=Math.max(-90,Math.min(Y,this.rollAngle));let o=t.held(`KeyW`),s=t.held(`KeyS`);if(o||s){let t=Ze*e*(o?-1:1),n=r(this.rollAngle);this.pitch+=t*Math.cos(n),this.yaw-=t*Math.sin(n),this.pitch=Math.max(-35,Math.min(Z,this.pitch))}else this.pitch*=.88**(e*60);this.pitchAngle+=(this.pitch-this.pitchAngle)*Q*e*60;let c=r(this.yaw),l=r(-this.pitch);this.shipFront=E(g(),y(Math.cos(c)*Math.cos(l),Math.sin(l),Math.sin(c)*Math.cos(l))),w(this.shipPos,this.shipPos,this.shipFront,this.currentSpeed*e)}},$=document.getElementById(`glCanvas`);$.width=window.innerWidth,$.height=window.innerHeight,window.addEventListener(`resize`,()=>{$.width=window.innerWidth,$.height=window.innerHeight,rt.resize($.width,$.height)});var rt=new nt(e($),$.width,$.height,$);function it(){rt.frame(),requestAnimationFrame(it)}requestAnimationFrame(it);