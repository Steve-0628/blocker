function N(){}function T(t){return t&&typeof t=="object"&&typeof t.then=="function"}function O(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(O)}function z(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function X(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function B(t){return Object.keys(t).length===0}function Y(t,e){t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function nt(){return F(" ")}function rt(){return F("")}function ct(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function l(t){p=t}function U(){if(!p)throw new Error("Function called outside component initialization");return p}const m=[],S=[],$=[],q=[],D=Promise.resolve();let w=!1;function G(){w||(w=!0,D.then(E))}function v(t){$.push(t)}const k=new Set;let y=0;function E(){const t=p;do{for(;y<m.length;){const e=m[y];y++,l(e),H(e.$$)}for(l(null),m.length=0,y=0;S.length;)S.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];k.has(n)||(k.add(n),n())}$.length=0}while(m.length);for(;q.length;)q.pop()();w=!1,k.clear(),l(t)}function H(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const x=new Set;let f;function I(){f={r:0,c:[],p:f}}function J(){f.r||g(f.c),f=f.p}function L(t,e){t&&t.i&&(x.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(x.has(t))return;x.add(t),f.c.push(()=>{x.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function ot(t,e){const n=e.token={};function r(u,a,i,d){if(e.token!==n)return;e.resolved=d;let s=e.ctx;i!==void 0&&(s=s.slice(),s[i]=d);const c=u&&(e.current=u)(s);let _=!1;e.block&&(e.blocks?e.blocks.forEach((o,h)=>{h!==a&&o&&(I(),K(o,1,1,()=>{e.blocks[h]===o&&(e.blocks[h]=null)}),J())}):e.block.d(1),c.c(),L(c,1),c.m(e.mount(),e.anchor),_=!0),e.block=c,e.blocks&&(e.blocks[a]=c),_&&E()}if(T(t)){const u=U();if(t.then(a=>{l(u),r(e.then,1,e.value,a),l(null)},a=>{if(l(u),r(e.catch,2,e.error,a),l(null),!e.hasCatch)throw a}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function at(t,e,n){const r=e.slice(),{resolved:u}=t;t.current===t.then&&(r[t.value]=u),t.current===t.catch&&(r[t.error]=u),t.block.p(r,n)}function lt(t){t&&t.c()}function Q(t,e,n,r){const{fragment:u,on_mount:a,on_destroy:i,after_update:d}=t.$$;u&&u.m(e,n),r||v(()=>{const s=a.map(O).filter(z);i?i.push(...s):g(s),t.$$.on_mount=[]}),d.forEach(v)}function R(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){t.$$.dirty[0]===-1&&(m.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(t,e,n,r,u,a,i,d=[-1]){const s=p;l(t);const c=t.$$={fragment:null,ctx:null,props:a,update:N,not_equal:u,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:C(),dirty:d,skip_bound:!1,root:e.target||s.$$.root};i&&i(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(o,h,...j)=>{const A=j.length?j[0]:h;return c.ctx&&u(c.ctx[o],c.ctx[o]=A)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](A),_&&V(t,o)),h}):[],c.update(),_=!0,g(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const o=P(e.target);c.fragment&&c.fragment.l(o),o.forEach(M)}else c.fragment&&c.fragment.c();e.intro&&L(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),E()}l(s)}class ft{$destroy(){R(this,1),this.$destroy=N}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function dt(t){return"screen_name"in t}export{ft as S,ut as a,Z as b,rt as c,M as d,et as e,nt as f,Y as g,ot as h,it as i,st as j,dt as k,ct as l,X as m,N as n,tt as o,L as p,K as q,g as r,W as s,F as t,at as u,lt as v,Q as w,R as x};