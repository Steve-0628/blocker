var at=Object.defineProperty;var qe=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var He=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))ft.call(t,n)&&He(e,n,t[n]);if(qe)for(var n of qe(t))_t.call(t,n)&&He(e,n,t[n]);return e};const dt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};dt();function k(){}const Ee=e=>e;function pt(e,t){for(const n in t)e[n]=t[n];return e}function mt(e){return e&&typeof e=="object"&&typeof e.then=="function"}function lt(e){return e()}function Ge(){return Object.create(null)}function te(e){e.forEach(lt)}function Oe(e){return typeof e=="function"}function pe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let me;function ne(e,t){return me||(me=document.createElement("a")),me.href=t,e===me.href}function ht(e){return Object.keys(e).length===0}function bt(e,t,n,r){if(e){const l=rt(e,t,n,r);return e[0](l)}}function rt(e,t,n,r){return e[1]&&r?pt(n.ctx.slice(),e[1](r(t))):n.ctx}function kt(e,t,n,r){if(e[2]&&r){const l=e[2](r(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const o=[],s=Math.max(t.dirty.length,l.length);for(let c=0;c<s;c+=1)o[c]=t.dirty[c]|l[c];return o}return t.dirty|l}return t.dirty}function gt(e,t,n,r,l,o){if(l){const s=rt(t,n,r,o);e.p(s,l)}}function vt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}const ot=typeof window!="undefined";let Fe=ot?()=>window.performance.now():()=>Date.now(),Ae=ot?e=>requestAnimationFrame(e):k;const re=new Set;function st(e){re.forEach(t=>{t.c(e)||(re.delete(t),t.f())}),re.size!==0&&Ae(st)}function Be(e){let t;return re.size===0&&Ae(st),{promise:new Promise(n=>{re.add(t={c:e,f:n})}),abort(){re.delete(t)}}}function _(e,t){e.appendChild(t)}function it(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function yt(e){const t=b("style");return wt(it(e),t),t.sheet}function wt(e,t){_(e.head||e,t)}function O(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode.removeChild(e)}function Et(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function oe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function A(e){return document.createTextNode(e)}function F(){return A(" ")}function ie(){return A("")}function se(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ot(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function We(e,t){e.value=t==null?"":t}function jt(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}const ge=new Map;let ve=0;function Mt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Pt(e,t){const n={stylesheet:yt(t),rules:{}};return ge.set(e,n),n}function ye(e,t,n,r,l,o,s,c=0){const i=16.666/r;let u=`{
`;for(let $=0;$<=1;$+=i){const E=t+(n-t)*o($);u+=$*100+`%{${s(E,1-E)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${c}`,d=it(e),{stylesheet:p,rules:g}=ge.get(d)||Pt(d,e);g[a]||(g[a]=!0,p.insertRule(`@keyframes ${a} ${f}`,p.cssRules.length));const P=e.style.animation||"";return e.style.animation=`${P?`${P}, `:""}${a} ${r}ms linear ${l}ms 1 both`,ve+=1,a}function we(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),l=n.length-r.length;l&&(e.style.animation=r.join(", "),ve-=l,ve||$t())}function $t(){Ae(()=>{ve||(ge.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),ge.clear())})}let _e;function Q(e){_e=e}function Ct(){if(!_e)throw new Error("Function called outside component initialization");return _e}const ue=[],Ke=[],be=[],Ve=[],Lt=Promise.resolve();let Ne=!1;function Tt(){Ne||(Ne=!0,Lt.then(Se))}function W(e){be.push(e)}const Te=new Set;let he=0;function Se(){const e=_e;do{for(;he<ue.length;){const t=ue[he];he++,Q(t),Ut(t.$$)}for(Q(null),ue.length=0,he=0;Ke.length;)Ke.pop()();for(let t=0;t<be.length;t+=1){const n=be[t];Te.has(n)||(Te.add(n),n())}be.length=0}while(ue.length);for(;Ve.length;)Ve.pop()();Ne=!1,Te.clear(),Q(e)}function Ut(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}let ce;function Re(){return ce||(ce=Promise.resolve(),ce.then(()=>{ce=null})),ce}function le(e,t,n){e.dispatchEvent(jt(`${t?"intro":"outro"}${n}`))}const ke=new Set;let J;function ae(){J={r:0,c:[],p:J}}function fe(){J.r||te(J.c),J=J.p}function R(e,t){e&&e.i&&(ke.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(ke.has(e))return;ke.add(e),J.c.push(()=>{ke.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const Ie={duration:0};function je(e,t,n){let r=t(e,n),l=!1,o,s,c=0;function i(){o&&we(e,o)}function u(){const{delay:a=0,duration:d=300,easing:p=Ee,tick:g=k,css:P}=r||Ie;P&&(o=ye(e,0,1,d,a,p,P,c++)),g(0,1);const $=Fe()+a,E=$+d;s&&s.abort(),l=!0,W(()=>le(e,!0,"start")),s=Be(C=>{if(l){if(C>=E)return g(1,0),le(e,!0,"end"),i(),l=!1;if(C>=$){const L=p((C-$)/d);g(L,1-L)}}return l})}let f=!1;return{start(){f||(f=!0,we(e),Oe(r)?(r=r(),Re().then(u)):u())},invalidate(){f=!1},end(){l&&(i(),l=!1)}}}function Nt(e,t,n){let r=t(e,n),l=!0,o;const s=J;s.r+=1;function c(){const{delay:i=0,duration:u=300,easing:f=Ee,tick:a=k,css:d}=r||Ie;d&&(o=ye(e,1,0,u,i,f,d));const p=Fe()+i,g=p+u;W(()=>le(e,!1,"start")),Be(P=>{if(l){if(P>=g)return a(0,1),le(e,!1,"end"),--s.r||te(s.c),!1;if(P>=p){const $=f((P-p)/u);a(1-$,$)}}return l})}return Oe(r)?Re().then(()=>{r=r(),c()}):c(),{end(i){i&&r.tick&&r.tick(1,0),l&&(o&&we(e,o),l=!1)}}}function Z(e,t,n,r){let l=t(e,n),o=r?0:1,s=null,c=null,i=null;function u(){i&&we(e,i)}function f(d,p){const g=d.b-o;return p*=Math.abs(g),{a:o,b:d.b,d:g,duration:p,start:d.start,end:d.start+p,group:d.group}}function a(d){const{delay:p=0,duration:g=300,easing:P=Ee,tick:$=k,css:E}=l||Ie,C={start:Fe()+p,b:d};d||(C.group=J,J.r+=1),s||c?c=C:(E&&(u(),i=ye(e,o,d,g,p,P,E)),d&&$(0,1),s=f(C,g),W(()=>le(e,d,"start")),Be(L=>{if(c&&L>c.start&&(s=f(c,g),c=null,le(e,s.b,"start"),E&&(u(),i=ye(e,o,s.b,s.duration,0,P,l.css))),s){if(L>=s.end)$(o=s.b,1-o),le(e,s.b,"end"),c||(s.b?u():--s.group.r||te(s.group.c)),s=null;else if(L>=s.start){const T=L-s.start;o=s.a+s.d*P(T/s.duration),$(o,1-o)}}return!!(s||c)}))}return{run(d){Oe(l)?Re().then(()=>{l=l(),a(d)}):a(d)},end(){u(),s=c=null}}}function x(e,t){const n=t.token={};function r(l,o,s,c){if(t.token!==n)return;t.resolved=c;let i=t.ctx;s!==void 0&&(i=i.slice(),i[s]=c);const u=l&&(t.current=l)(i);let f=!1;t.block&&(t.blocks?t.blocks.forEach((a,d)=>{d!==o&&a&&(ae(),H(a,1,1,()=>{t.blocks[d]===a&&(t.blocks[d]=null)}),fe())}):t.block.d(1),u.c(),R(u,1),u.m(t.mount(),t.anchor),f=!0),t.block=u,t.blocks&&(t.blocks[o]=u),f&&Se()}if(mt(e)){const l=Ct();if(e.then(o=>{Q(l),r(t.then,1,t.value,o),Q(null)},o=>{if(Q(l),r(t.catch,2,t.error,o),Q(null),!t.hasCatch)throw o}),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}}function Me(e,t,n){const r=t.slice(),{resolved:l}=e;e.current===e.then&&(r[e.value]=l),e.current===e.catch&&(r[e.error]=l),e.block.p(r,n)}function ze(e){e&&e.c()}function Pe(e,t,n,r){const{fragment:l,on_mount:o,on_destroy:s,after_update:c}=e.$$;l&&l.m(t,n),r||W(()=>{const i=o.map(lt).filter(Oe);s?s.push(...i):te(i),e.$$.on_mount=[]}),c.forEach(W)}function $e(e,t){const n=e.$$;n.fragment!==null&&(te(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(e,t){e.$$.dirty[0]===-1&&(ue.push(e),Tt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ce(e,t,n,r,l,o,s,c=[-1]){const i=_e;Q(e);const u=e.$$={fragment:null,ctx:null,props:o,update:k,not_equal:l,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:Ge(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(a,d,...p)=>{const g=p.length?p[0]:d;return u.ctx&&l(u.ctx[a],u.ctx[a]=g)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](g),f&&Ft(e,a)),d}):[],u.update(),f=!0,te(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const a=Ot(t.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();t.intro&&R(e.$$.fragment),Pe(e,t.target,t.anchor,t.customElement),Se()}Q(i)}class Le{$destroy(){$e(this,1),this.$destroy=k}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ht(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function At(e){let t,n,r,l,o,s,c,i,u,f,a,d;return{c(){t=b("main"),n=b("div"),n.innerHTML=`<h1>BulkBlock</h1> 
    <p>\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B</p> 
    <p>\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B\u30A2\u30D7\u30EA\u306E\u8AAC\u660E\u3092\u5165\u529B</p>`,r=F(),l=b("a"),o=A("Twitter\u3067\u30ED\u30B0\u30A4\u30F3"),s=F(),c=b("footer"),i=b("iframe"),f=F(),a=b("iframe"),h(l,"class","block"),h(l,"href",ut),h(t,"id","guest"),ne(i.src,u=Bt)||h(i,"src",u),h(i,"title","footer"),ne(a.src,d=St)||h(a,"src",d),h(a,"title","side")},m(p,g){O(p,t,g),_(t,n),_(t,r),_(t,l),_(l,o),O(p,s,g),O(p,c,g),_(c,i),O(p,f,g),O(p,a,g)},p:k,i:k,o:k,d(p){p&&w(t),p&&w(s),p&&w(c),p&&w(f),p&&w(a)}}}const ct="https://hisubway.online/articles/bulkblock/",Bt=ct+"footer/",St=ct+"side/";let ut="/login";location.host==="hisubway.online"&&(ut="http://bulkblock.hisubway.online/login?hisubway=true");class Rt extends Le{constructor(t){super();Ce(this,t,null,At,pe,{})}}function Ye(e){return"screen_name"in e}function It(e){const t=e-1;return t*t*t+1}function de(e,{delay:t=0,duration:n=400,easing:r=Ee}={}){const l=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:o=>`opacity: ${o*l}`}}function ee(e,{delay:t=0,duration:n=400,easing:r=It}={}){const l=getComputedStyle(e),o=+l.opacity,s=parseFloat(l.height),c=parseFloat(l.paddingTop),i=parseFloat(l.paddingBottom),u=parseFloat(l.marginTop),f=parseFloat(l.marginBottom),a=parseFloat(l.borderTopWidth),d=parseFloat(l.borderBottomWidth);return{delay:t,duration:n,easing:r,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*o};height: ${p*s}px;padding-top: ${p*c}px;padding-bottom: ${p*i}px;margin-top: ${p*u}px;margin-bottom: ${p*f}px;border-top-width: ${p*a}px;border-bottom-width: ${p*d}px;`}}function zt(e){let t,n;return{c(){t=b("span"),n=A(e[0]),h(t,"class","svelte-37ab2r")},m(r,l){O(r,t,l),_(t,n)},p(r,l){l&1&&V(n,r[0])},d(r){r&&w(t)}}}function qt(e){let t,n,r,l,o,s,c,i;const u=e[4].default,f=bt(u,e,e[3],null),a=f||zt(e);return{c(){t=b("div"),n=oe("svg"),r=oe("path"),l=oe("path"),s=F(),c=b("div"),a&&a.c(),h(r,"d","M50,5A45 45 0 1 1 49.9999 5"),h(r,"class","svelte-37ab2r"),h(l,"d",o=e[1]()),h(l,"class","svelte-37ab2r"),h(n,"viewBox","0 0 100 100"),h(n,"class","svelte-37ab2r"),h(c,"class","svelte-37ab2r"),h(t,"class","svelte-37ab2r")},m(d,p){O(d,t,p),_(t,n),_(n,r),_(n,l),_(t,s),_(t,c),a&&a.m(c,null),i=!0},p(d,[p]){(!i||p&2&&o!==(o=d[1]()))&&h(l,"d",o),f?f.p&&(!i||p&8)&&gt(f,u,d,d[3],i?kt(u,d[3],p,null):vt(d[3]),null):a&&a.p&&(!i||p&1)&&a.p(d,i?p:-1)},i(d){i||(R(a,d),i=!0)},o(d){H(a,d),i=!1},d(d){d&&w(t),a&&a.d(d)}}}function Ht(e,t,n){let r,{$$slots:l={},$$scope:o}=t,{value:s=0}=t,{max:c=100}=t;return e.$$set=i=>{"value"in i&&n(0,s=i.value),"max"in i&&n(2,c=i.max),"$$scope"in i&&n(3,o=i.$$scope)},e.$$.update=()=>{e.$$.dirty&5&&n(1,r=()=>{if(s<=0)return"";if(s>=c)return"M50,5A45 45 0 1 1 49.9999 5";{const i=Math.PI*2*(s/c),u=50+Math.cos(i-Math.PI/2)*45,f=50+Math.sin(i-Math.PI/2)*45;let a="M50,5";return i>Math.PI&&(a+="A45 45 0 0 1 50 95"),a+=`A45 45 0 0 1 ${u} ${f}`,a}})},[s,r,c,o,l]}class Dt extends Le{constructor(t){super();Ce(this,t,Ht,qt,pe,{value:0,max:2})}}function Je(e,t,n){const r=e.slice();return r[26]=t[n].data,r[27]=t[n].cheched,r[28]=t,r[29]=n,r}function Qe(e){let t,n,r,l,o,s,c;n=new Dt({props:{max:e[5].length,value:e[6],$$slots:{default:[Vt]},$$scope:{ctx:e}}});let i={ctx:e,current:null,token:null,hasCatch:!1,pending:Qt,then:Jt,catch:Yt,value:31,blocks:[,,,]};return x(s=e[7],i),{c(){t=b("div"),ze(n.$$.fragment),l=F(),o=ie(),i.block.c(),h(t,"class","block_progress")},m(u,f){O(u,t,f),Pe(n,t,null),O(u,l,f),O(u,o,f),i.block.m(u,i.anchor=f),i.mount=()=>o.parentNode,i.anchor=o,c=!0},p(u,f){e=u;const a={};f[0]&32&&(a.max=e[5].length),f[0]&64&&(a.value=e[6]),f[0]&224|f[1]&2&&(a.$$scope={dirty:f,ctx:e}),n.$set(a),i.ctx=e,f[0]&128&&s!==(s=e[7])&&x(s,i)||Me(i,e,f)},i(u){c||(R(n.$$.fragment,u),W(()=>{r||(r=Z(t,ee,e[8],!0)),r.run(1)}),R(i.block),c=!0)},o(u){H(n.$$.fragment,u),r||(r=Z(t,ee,e[8],!1)),r.run(0);for(let f=0;f<3;f+=1){const a=i.blocks[f];H(a)}c=!1},d(u){u&&w(t),$e(n),u&&r&&r.end(),u&&w(l),u&&w(o),i.block.d(u),i.token=null,i=null}}}function Gt(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function Wt(e){let t,n,r,l,o;return{c(){t=oe("svg"),n=oe("path"),r=oe("path"),h(n,"d","M0 0h24v24H0V0z"),h(n,"fill","none"),h(r,"d","M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"),h(t,"class","block_complete_icon"),h(t,"xmlns","http://www.w3.org/2000/svg"),h(t,"viewBox","0 0 24 24")},m(s,c){O(s,t,c),_(t,n),_(t,r),o=!0},p(s,c){e=s},i(s){o||(W(()=>{l||(l=Z(t,ee,e[8],!0)),l.run(1)}),o=!0)},o(s){l||(l=Z(t,ee,e[8],!1)),l.run(0),o=!1},d(s){s&&w(t),s&&l&&l.end()}}}function Kt(e){let t,n,r=Math.round(e[6]/e[5].length*100)+"",l,o,s;return{c(){t=b("span"),n=b("span"),l=A(r),o=A("%"),h(t,"class","block_progress_text")},m(c,i){O(c,t,i),_(t,n),_(n,l),_(t,o)},p(c,i){e=c,i[0]&96&&r!==(r=Math.round(e[6]/e[5].length*100)+"")&&V(l,r)},i(c){s||W(()=>{s=je(t,de,e[8]),s.start()})},o:k,d(c){c&&w(t)}}}function Vt(e){let t,n,r,l={ctx:e,current:null,token:null,hasCatch:!1,pending:Kt,then:Wt,catch:Gt,value:31,blocks:[,,,]};return x(n=e[7],l),{c(){t=ie(),l.block.c()},m(o,s){O(o,t,s),l.block.m(o,l.anchor=s),l.mount=()=>t.parentNode,l.anchor=t,r=!0},p(o,s){e=o,l.ctx=e,s[0]&128&&n!==(n=e[7])&&x(n,l)||Me(l,e,s)},i(o){r||(R(l.block),r=!0)},o(o){for(let s=0;s<3;s+=1){const c=l.blocks[s];H(c)}r=!1},d(o){o&&w(t),l.block.d(o),l.token=null,l=null}}}function Yt(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function Jt(e){let t,n,r=Object.values(e[31]).filter(nt).length+"",l,o,s,c,i;return{c(){t=b("div"),n=b("span"),l=A(r),o=A("\u4EBA\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u307E\u3057\u305F"),h(t,"class","users_count")},m(u,f){O(u,t,f),_(t,n),_(n,l),_(t,o),i=!0},p(u,f){e=u,(!i||f[0]&128)&&r!==(r=Object.values(e[31]).filter(nt).length+"")&&V(l,r)},i(u){i||(W(()=>{c&&c.end(1),s=je(t,de,e[8]),s.start()}),i=!0)},o(u){s&&s.invalidate(),c=Nt(t,ee,e[8]),i=!1},d(u){u&&w(t),u&&c&&c.end()}}}function Qt(e){let t,n,r=e[5].length+"",l,o,s;return{c(){t=b("div"),n=b("span"),l=A(r),o=A("\u4EBA\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u307E\u3059\u2026\u2026"),h(t,"class","users_count")},m(c,i){O(c,t,i),_(t,n),_(n,l),_(t,o)},p(c,i){e=c,i[0]&32&&r!==(r=e[5].length+"")&&V(l,r)},i(c){s||W(()=>{s=je(t,ee,e[8]),s.start()})},o:k,d(c){c&&w(t)}}}function Xe(e){let t,n,r,l={ctx:e,current:null,token:null,hasCatch:!1,pending:xt,then:Zt,catch:Xt,value:25,blocks:[,,,]};return x(n=e[1],l),{c(){t=ie(),l.block.c()},m(o,s){O(o,t,s),l.block.m(o,l.anchor=s),l.mount=()=>t.parentNode,l.anchor=t,r=!0},p(o,s){e=o,l.ctx=e,s[0]&2&&n!==(n=e[1])&&x(n,l)||Me(l,e,s)},i(o){r||(R(l.block),r=!0)},o(o){for(let s=0;s<3;s+=1){const c=l.blocks[s];H(c)}r=!1},d(o){o&&w(t),l.block.d(o),l.token=null,l=null}}}function Xt(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function Zt(e){let t,n,r=Object.keys(e[25]).length+"",l,o,s,c;return{c(){t=b("div"),n=b("span"),l=A(r),o=A("\u4EBA\u898B\u3064\u304B\u308A\u307E\u3057\u305F"),h(t,"class","users_count")},m(i,u){O(i,t,u),_(t,n),_(n,l),_(t,o),c=!0},p(i,u){e=i,(!c||u[0]&2)&&r!==(r=Object.keys(e[25]).length+"")&&V(l,r)},i(i){c||(W(()=>{s||(s=Z(t,ee,e[8],!0)),s.run(1)}),c=!0)},o(i){s||(s=Z(t,ee,e[8],!1)),s.run(0),c=!1},d(i){i&&w(t),i&&s&&s.end()}}}function xt(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function Ze(e){let t,n,r,l={ctx:e,current:null,token:null,hasCatch:!0,pending:rn,then:tn,catch:en,value:25,error:30,blocks:[,,,]};return x(n=e[1],l),{c(){t=ie(),l.block.c()},m(o,s){O(o,t,s),l.block.m(o,l.anchor=s),l.mount=()=>t.parentNode,l.anchor=t,r=!0},p(o,s){e=o,l.ctx=e,s[0]&2&&n!==(n=e[1])&&x(n,l)||Me(l,e,s)},i(o){r||(R(l.block),r=!0)},o(o){for(let s=0;s<3;s+=1){const c=l.blocks[s];H(c)}r=!1},d(o){o&&w(t),l.block.d(o),l.token=null,l=null}}}function en(e){let t,n=e[30].message+"",r;return{c(){t=b("p"),r=A(n)},m(l,o){O(l,t,o),_(t,r)},p(l,o){o[0]&2&&n!==(n=l[30].message+"")&&V(r,n)},i:k,o:k,d(l){l&&w(t)}}}function tn(e){let t=L()+"",n,r,l,o,s,c=e[3],i,u,f,a=Object.keys(e[25]).length+"",d,p,g,P,$,E,C;function L(){return e[17](e[25])}let T=xe(e);function G(j,B){return B[0]&2&&(P=null),P==null&&(P=!!Object.values(j[25]).some(sn)),P?ln:nn}let K=G(e,[-1,-1]),z=K(e),I=Object.values(e[25]),U=[];for(let j=0;j<I.length;j+=1)U[j]=tt(Je(e,I,j));return{c(){n=A(t),r=F(),l=b("div"),o=b("header"),s=b("span"),T.c(),i=F(),u=b("span"),f=A("/ "),d=A(a),p=A(" \u4EBA\u3092\u9078\u629E\u6E08\u307F"),g=F(),z.c(),$=F();for(let j=0;j<U.length;j+=1)U[j].c();h(l,"class","users_container")},m(j,B){O(j,n,B),O(j,r,B),O(j,l,B),_(l,o),_(o,s),T.m(s,null),_(s,i),_(s,u),_(u,f),_(u,d),_(u,p),_(o,g),z.m(o,null),_(l,$);for(let m=0;m<U.length;m+=1)U[m].m(l,null);C=!0},p(j,B){if(e=j,(!C||B[0]&10)&&t!==(t=L()+"")&&V(n,t),B[0]&8&&pe(c,c=e[3])?(ae(),H(T,1,1,k),fe(),T=xe(e),T.c(),R(T),T.m(s,i)):T.p(e,B),(!C||B[0]&2)&&a!==(a=Object.keys(e[25]).length+"")&&V(d,a),K===(K=G(e,B))&&z?z.p(e,B):(z.d(1),z=K(e),z&&(z.c(),z.m(o,null))),B[0]&2){I=Object.values(e[25]);let m;for(m=0;m<I.length;m+=1){const v=Je(e,I,m);U[m]?U[m].p(v,B):(U[m]=tt(v),U[m].c(),U[m].m(l,null))}for(;m<U.length;m+=1)U[m].d(1);U.length=I.length}},i(j){C||(R(T),W(()=>{E||(E=Z(l,de,e[8],!0)),E.run(1)}),C=!0)},o(j){H(T),E||(E=Z(l,de,e[8],!1)),E.run(0),C=!1},d(j){j&&w(n),j&&w(r),j&&w(l),T.d(j),z.d(),Et(U,j),j&&E&&E.end()}}}function xe(e){let t,n,r;return{c(){t=b("span"),n=A(e[3])},m(l,o){O(l,t,o),_(t,n)},p(l,o){e=l,o[0]&8&&V(n,e[3])},i(l){r||W(()=>{r=je(t,de,e[8]),r.start()})},o:k,d(l){l&&w(t)}}}function nn(e){let t,n,r;function l(){return e[19](e[25])}return{c(){t=b("button"),t.innerHTML="<i>remove_done</i>"},m(o,s){O(o,t,s),n||(r=se(t,"click",l),n=!0)},p(o,s){e=o},d(o){o&&w(t),n=!1,r()}}}function ln(e){let t,n,r;function l(){return e[18](e[25])}return{c(){t=b("button"),t.innerHTML="<i>done_all</i>"},m(o,s){O(o,t,s),n||(r=se(t,"click",l),n=!0)},p(o,s){e=o},d(o){o&&w(t),n=!1,r()}}}function et(e){let t,n,r,l,o,s,c=e[26].name+"",i,u,f,a,d=e[26].screen_name+"",p,g,P,$,E=e[26].description+"",C,L,T,G=e[27]?"check_box":"check_box_outline_blank",K,z,I,U,j,B;function m(){e[20].call(I,e[28],e[29])}return{c(){t=b("label"),n=b("img"),o=F(),s=b("span"),i=A(c),u=F(),f=b("a"),a=A("@"),p=A(d),P=F(),$=b("span"),C=A(E),L=F(),T=b("i"),K=A(G),z=F(),I=b("input"),U=F(),h(n,"loading","lazy"),ne(n.src,r=e[26].profile_image_url_https)||h(n,"src",r),h(n,"alt",l=e[26].screen_name),h(f,"href",g="https://twitter.com/"+e[26].screen_name),h(f,"target","_blank"),h(f,"rel","noopener noreferrer"),h(s,"class","username"),h($,"class","description"),h(T,"class","check"),h(I,"type","checkbox")},m(v,y){O(v,t,y),_(t,n),_(t,o),_(t,s),_(s,i),_(s,u),_(s,f),_(f,a),_(f,p),_(t,P),_(t,$),_($,C),_(t,L),_(t,T),_(T,K),_(t,z),_(t,I),I.checked=e[27],_(t,U),j||(B=se(I,"change",m),j=!0)},p(v,y){e=v,y[0]&2&&!ne(n.src,r=e[26].profile_image_url_https)&&h(n,"src",r),y[0]&2&&l!==(l=e[26].screen_name)&&h(n,"alt",l),y[0]&2&&c!==(c=e[26].name+"")&&V(i,c),y[0]&2&&d!==(d=e[26].screen_name+"")&&V(p,d),y[0]&2&&g!==(g="https://twitter.com/"+e[26].screen_name)&&h(f,"href",g),y[0]&2&&E!==(E=e[26].description+"")&&V(C,E),y[0]&2&&G!==(G=e[27]?"check_box":"check_box_outline_blank")&&V(K,G),y[0]&2&&(I.checked=e[27])},d(v){v&&w(t),j=!1,B()}}}function tt(e){let t=Ye(e[26]),n,r=t&&et(e);return{c(){r&&r.c(),n=ie()},m(l,o){r&&r.m(l,o),O(l,n,o)},p(l,o){o[0]&2&&(t=Ye(l[26])),t?r?r.p(l,o):(r=et(l),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(l){r&&r.d(l),l&&w(n)}}}function rn(e){return{c:k,m:k,p:k,i:k,o:k,d:k}}function on(e){let t,n,r,l,o,s,c,i,u,f,a,d,p,g,P,$,E,C,L,T,G,K,z,I,U,j,B,m,v,y,X,Y,N=e[7]!==null&&Qe(e),S=e[1]!==null&&Xe(e),q=e[1]!==null&&Ze(e);return{c(){t=b("header"),n=b("h1"),n.textContent="BulkBlock",r=F(),l=b("iframe"),s=F(),c=b("main"),N&&N.c(),i=F(),S&&S.c(),u=F(),f=b("div"),a=b("input"),d=F(),p=b("button"),g=b("i"),g.textContent="search",$=F(),E=b("div"),C=b("div"),L=b("button"),T=A("\u30D6\u30ED\u30C3\u30AF\u3059\u308B"),K=F(),q&&q.c(),z=F(),I=b("footer"),U=b("iframe"),B=F(),m=b("iframe"),ne(l.src,o=e[9])||h(l,"src",o),h(l,"title","header"),h(a,"type","search"),p.disabled=P=e[0]===""||e[2]||e[4],h(f,"class","search_box"),h(L,"class","block"),L.disabled=G=!e[3]||e[4],h(C,"class","top_cover"),h(E,"class","sticky_container"),h(c,"id","logged"),ne(U.src,j=e[10])||h(U,"src",j),h(U,"title","footer"),ne(m.src,v=e[11])||h(m,"src",v),h(m,"title","side")},m(M,D){O(M,t,D),_(t,n),_(t,r),_(t,l),O(M,s,D),O(M,c,D),N&&N.m(c,null),_(c,i),S&&S.m(c,null),_(c,u),_(c,f),_(f,a),We(a,e[0]),_(f,d),_(f,p),_(p,g),_(c,$),_(c,E),_(E,C),_(C,L),_(L,T),_(E,K),q&&q.m(E,null),O(M,z,D),O(M,I,D),_(I,U),O(M,B,D),O(M,m,D),y=!0,X||(Y=[se(a,"input",e[15]),se(p,"click",e[12]),se(L,"click",e[16])],X=!0)},p(M,D){M[7]!==null?N?(N.p(M,D),D[0]&128&&R(N,1)):(N=Qe(M),N.c(),R(N,1),N.m(c,i)):N&&(ae(),H(N,1,1,()=>{N=null}),fe()),M[1]!==null?S?(S.p(M,D),D[0]&2&&R(S,1)):(S=Xe(M),S.c(),R(S,1),S.m(c,u)):S&&(ae(),H(S,1,1,()=>{S=null}),fe()),D[0]&1&&We(a,M[0]),(!y||D[0]&21&&P!==(P=M[0]===""||M[2]||M[4]))&&(p.disabled=P),(!y||D[0]&24&&G!==(G=!M[3]||M[4]))&&(L.disabled=G),M[1]!==null?q?(q.p(M,D),D[0]&2&&R(q,1)):(q=Ze(M),q.c(),R(q,1),q.m(E,null)):q&&(ae(),H(q,1,1,()=>{q=null}),fe())},i(M){y||(R(N),R(S),R(q),y=!0)},o(M){H(N),H(S),H(q),y=!1},d(M){M&&w(t),M&&w(s),M&&w(c),N&&N.d(),S&&S.d(),q&&q.d(),M&&w(z),M&&w(I),M&&w(B),M&&w(m),X=!1,te(Y)}}}const Ue="https://hisubway.online/articles/bulkblock/",sn=({cheched:e})=>!e,nt=({ok:e})=>e;function cn(e,t,n){const r={duration:300},l=Ue+"header/",o=Ue+"footer/",s=Ue+"side/";let c="",{cookie:i}=t;function u(m){const v=new URL(location.origin+m);return v.searchParams.set("access_token",i.access_token),v.searchParams.set("access_token_secret",i.access_token_secret),m=v.toString(),fetch(m,{method:"POST"})}function f(m){const v=new URL(location.origin+m);return v.searchParams.set("access_token",i.access_token),v.searchParams.set("access_token_secret",i.access_token_secret),m=v.toString(),fetch(m,{method:"GET"})}let a=null;async function d(){return new Promise(async(m,v)=>{const y=await f("/search?q="+encodeURIComponent(c));y.ok?m(y.json()):v(Error("\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F: "+y.status))})}async function p(){return new Promise(async(m,v)=>{const y=await f("/following");y.ok?m(y.json()):v(Error("\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F: "+y.status))})}let g=!1,P=0;async function $(){n(2,g=!0),n(3,P=0),n(1,a=new Promise(async(m,v)=>{try{Promise.all([d(),p()]).then(([y,X])=>{let Y={};for(const{user:N}of y.statuses){if(N.id_str in Y)continue;const S=X.ids.includes(N.id_str);Y[N.id_str]={following:S,data:N,cheched:!S}}m(Y)}).catch(y=>{v(y)}).finally(()=>n(2,g=!1))}catch(y){v(y),n(2,g=!1)}}))}let E=!1,C=[],L=0,T=null;async function G(){n(4,E=!0);const m=De({},await a);n(1,a=null),n(3,P=0),n(5,C=Object.values(m).map(({cheched:v,data:y})=>{if(!!v)return y.id_str}).filter(v=>v)),n(7,T=new Promise(async v=>{n(6,L=0);const y={};await Promise.all(C.map(async X=>{const Y=await u("/block?id="+X),{ok:N,statusText:S}=Y;y[X]={data:Y.ok?await Y.json():void 0,ok:N,statusText:S},n(6,L++,L)})),setTimeout(()=>{n(4,E=!1),n(7,T=null)},1500),v(y)}))}function K(){c=this.value,n(0,c)}const z=()=>{const m=document.body.animate([{marginTop:`-${window.pageYOffset-1}px`},{marginTop:0}],{duration:r.duration,easing:"ease-in-out"});window.scroll(0,0),n(4,E=!0),m.addEventListener("finish",()=>{G()})},I=m=>(n(3,P=Object.values(m).filter(({cheched:v})=>v).length),""),U=m=>{Object.keys(m).forEach(v=>{n(1,m[v].cheched=!0,a)})},j=m=>{Object.keys(m).forEach(v=>{n(1,m[v].cheched=!1,a)})};function B(m,v){m[v].cheched=this.checked,n(1,a)}return e.$$set=m=>{"cookie"in m&&n(14,i=m.cookie)},[c,a,g,P,E,C,L,T,r,l,o,s,$,G,i,K,z,I,U,j,B]}class un extends Le{constructor(t){super();Ce(this,t,cn,on,pe,{cookie:14},null,[-1,-1])}}function an(e){let t,n;return t=new Rt({}),{c(){ze(t.$$.fragment)},m(r,l){Pe(t,r,l),n=!0},p:k,i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){$e(t,r)}}}function fn(e){let t,n;return t=new un({props:{cookie:e[0]}}),{c(){ze(t.$$.fragment)},m(r,l){Pe(t,r,l),n=!0},p:k,i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){$e(t,r)}}}function _n(e){let t,n,r,l;const o=[fn,an],s=[];function c(i,u){return i[1]?0:1}return t=c(e),n=s[t]=o[t](e),{c(){n.c(),r=ie()},m(i,u){s[t].m(i,u),O(i,r,u),l=!0},p(i,[u]){n.p(i,u)},i(i){l||(R(n),l=!0)},o(i){H(n),l=!1},d(i){s[t].d(i),i&&w(r)}}}function dn(e){const t={};for(const[n,r]of e.split("; ").map(l=>l.split("=")))t[n]=r;return t}function pn(e){const t=dn(document.cookie),n="access_token"in t&&"access_token_secret"in t;return[t,n]}class mn extends Le{constructor(t){super();Ce(this,t,pn,_n,pe,{})}}new mn({target:document.getElementById("app")});
