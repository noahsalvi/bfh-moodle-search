var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}function a(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}function c(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function u(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function d(t,e,n,o,r,i){if(r){const l=c(e,n,o,i);t.p(l,r)}}function f(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function b(t,e){t.appendChild(e)}function m(t,e,n){const o=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;if(e&&e.host)return e;return t.ownerDocument}(t);if(!o.getElementById(e)){const t=v("style");t.id=e,t.textContent=n,function(t,e){b(t.head||t,e)}(o,t)}}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function y(){return x(" ")}function w(){return x("")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:S(t,o,e[o])}function E(t,e){t.value=null==e?"":e}function j(t,e,n){t.classList[n?"add":"remove"](e)}class L{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=v(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}function C(t){const e={};for(const n of t)e[n.name]=n.value;return e}let N;function O(t){N=t}function F(){if(!N)throw new Error("Function called outside component initialization");return N}function M(t){F().$$.on_mount.push(t)}function T(t){F().$$.after_update.push(t)}function z(){const t=F();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function D(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],R=[],U=[],B=[],H=Promise.resolve();let P=!1;function J(){P||(P=!0,H.then(Q))}function q(t){U.push(t)}function K(t){B.push(t)}let X=!1;const G=new Set;function Q(){if(!X){X=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];O(e),V(e.$$)}for(O(null),I.length=0;R.length;)R.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];G.has(e)||(G.add(e),e())}U.length=0}while(I.length);for(;B.length;)B.pop()();P=!1,X=!1,G.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const W=new Set;let Y,Z;function tt(){Y={r:0,c:[],p:Y}}function et(){Y.r||r(Y.c),Y=Y.p}function nt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),Y.c.push((()=>{W.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function rt(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const l=t[i],s=e[i];if(s){for(const t in l)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[i]=s}else for(const t in l)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function it(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function lt(t){t&&t.c()}function st(t,e,o,l){const{fragment:s,on_mount:a,on_destroy:c,after_update:u}=t.$$;s&&s.m(e,o),l||q((()=>{const e=a.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(q)}function at(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,n,i,l,s,a,c,u=[-1]){const d=N;O(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let h=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),Q()}O(d)}"function"==typeof HTMLElement&&(Z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class ut{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var dt,ft,ht=(dt=function(t,e){!function(){var e={};t.exports=e,e.simpleFilter=function(t,n){return n.filter((function(n){return e.test(t,n)}))},e.test=function(t,n){return null!==e.match(t,n)},e.match=function(t,e,n){n=n||{};var o,r=0,i=[],l=e.length,s=0,a=0,c=n.pre||"",u=n.post||"",d=n.caseSensitive&&e||e.toLowerCase();t=n.caseSensitive&&t||t.toLowerCase();for(var f=0;f<l;f++)o=e[f],d[f]===t[r]?(o=c+o+u,r+=1,a+=1+a):a=0,s+=a,i[i.length]=o;return r===t.length?(s=d===t?1/0:s,{rendered:i.join(""),score:s}):null},e.filter=function(t,n,o){return n&&0!==n.length?"string"!=typeof t?n:(o=o||{},n.reduce((function(n,r,i,l){var s=r;o.extract&&(s=o.extract(r));var a=e.match(t,s,o);return null!=a&&(n[n.length]={string:a.rendered,score:a.score,index:i,original:r}),n}),[]).sort((function(t,e){var n=e.score-t.score;return n||t.index-e.index}))):[]}}()},dt(ft={exports:{}},ft.exports),ft.exports);function pt(t){m(t,"svelte-5m0wg6",".hide-label.svelte-5m0wg6{position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}")}const bt=t=>({}),mt=t=>({});function gt(t){let n,o,i,l,s,c,h,p,m,w;const L=t[10].label,C=a(L,t,t[9],mt),N=C||function(t){let e;return{c(){e=x(t[2])},m(t,n){g(t,e,n)},p(t,n){4&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(e,t[2])},d(t){t&&$(e)}}}(t);let O=[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},t[6],{id:t[4]}],F={};for(let t=0;t<O.length;t+=1)F=e(F,O[t]);return{c(){n=v("form"),o=v("label"),N&&N.c(),l=y(),s=v("input"),S(o,"id",i=t[4]+"-label"),S(o,"for",t[4]),S(o,"class","svelte-5m0wg6"),j(o,"hide-label",t[3]),A(s,F),j(s,"svelte-5m0wg6",!0),S(n,"data-svelte-search",""),S(n,"role",c=t[5]?null:"search"),S(n,"aria-labelledby",h=t[5]?null:t[4])},m(e,r){g(e,n,r),b(n,o),N&&N.m(o,null),b(n,l),b(n,s),s.autofocus&&s.focus(),t[17](s),E(s,t[0]),p=!0,m||(w=[k(s,"input",t[18]),k(s,"input",t[12]),k(s,"change",t[13]),k(s,"focus",t[14]),k(s,"blur",t[15]),k(s,"keydown",t[16]),k(n,"submit",_(t[11]))],m=!0)},p(t,[e]){C?C.p&&(!p||512&e)&&d(C,L,t,t[9],p?u(L,t[9],e,bt):f(t[9]),mt):N&&N.p&&(!p||4&e)&&N.p(t,p?e:-1),(!p||16&e&&i!==(i=t[4]+"-label"))&&S(o,"id",i),(!p||16&e)&&S(o,"for",t[4]),8&e&&j(o,"hide-label",t[3]),A(s,F=rt(O,[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},64&e&&t[6],(!p||16&e)&&{id:t[4]}])),1&e&&E(s,t[0]),j(s,"svelte-5m0wg6",!0),(!p||32&e&&c!==(c=t[5]?null:"search"))&&S(n,"role",c),(!p||48&e&&h!==(h=t[5]?null:t[4]))&&S(n,"aria-labelledby",h)},i(t){p||(nt(N,t),p=!0)},o(t){ot(N,t),p=!1},d(e){e&&$(n),N&&N.d(e),t[17](null),m=!1,r(w)}}}function $t(t,n,o){const r=["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"];let i=p(n,r),{$$slots:l={},$$scope:s}=n,{value:a=""}=n,{autofocus:c=!1}=n,{debounce:u=0}=n,{label:d="Label"}=n,{hideLabel:f=!1}=n,{id:b="search"+Math.random().toString(36)}=n,{ref:m=null}=n,{removeFormAriaAttributes:g=!1}=n;const $=z();let v,x=a,y=!1;return M((()=>(c&&window.requestAnimationFrame((()=>m.focus())),()=>clearTimeout(v)))),T((()=>{var t;a.length>0&&a!==x&&(u>0?(t=()=>$("type",a),y||(y=!0,v=setTimeout((()=>{t(),y=!1}),u))):$("type",a)),0===a.length&&x.length>0&&$("clear"),x=a})),t.$$set=t=>{n=e(e({},n),h(t)),o(6,i=p(n,r)),"value"in t&&o(0,a=t.value),"autofocus"in t&&o(7,c=t.autofocus),"debounce"in t&&o(8,u=t.debounce),"label"in t&&o(2,d=t.label),"hideLabel"in t&&o(3,f=t.hideLabel),"id"in t&&o(4,b=t.id),"ref"in t&&o(1,m=t.ref),"removeFormAriaAttributes"in t&&o(5,g=t.removeFormAriaAttributes),"$$scope"in t&&o(9,s=t.$$scope)},[a,m,d,f,b,g,i,c,u,s,l,function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(t){R[t?"unshift":"push"]((()=>{m=t,o(1,m)}))},function(){a=this.value,o(0,a)}]}var vt=class extends ut{constructor(t){super(),ct(this,t,$t,gt,l,{value:0,autofocus:7,debounce:8,label:2,hideLabel:3,id:4,ref:1,removeFormAriaAttributes:5},pt)}};function xt(t){m(t,"svelte-j5n77y","[data-svelte-typeahead].svelte-j5n77y{position:relative;background-color:#fff}ul.svelte-j5n77y{position:absolute;top:100%;left:0;width:100%;padding:0;list-style:none;background-color:inherit;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}li.svelte-j5n77y,.no-results.svelte-j5n77y{padding:0.25rem 1rem}li.svelte-j5n77y{cursor:pointer}li.svelte-j5n77y:not(:last-of-type){border-bottom:1px solid #e0e0e0}li.svelte-j5n77y:hover{background-color:#e5e5e5}.selected.svelte-j5n77y{background-color:#e5e5e5}.selected.svelte-j5n77y:hover{background-color:#cacaca}.disabled.svelte-j5n77y{opacity:0.4;cursor:not-allowed}[data-svelte-search] label{margin-bottom:0.25rem;display:inline-flex;font-size:0.875rem}[data-svelte-search] input{width:100%;padding:0.5rem 0.75rem;background:none;font-size:1rem;border:0;border-radius:0;border:1px solid #e5e5e5}[data-svelte-search] input:focus{outline-color:#0f62fe;outline-offset:2px;outline-width:1px}")}const yt=t=>({value:1&t[0],result:2&t[0]}),wt=t=>({value:t[0],result:t[39],index:t[41]});function kt(t,e,n){const o=t.slice();return o[39]=e[n],o[41]=n,o}const _t=t=>({result:2&t[0],value:1&t[0]}),St=t=>({result:t[39],index:t[41],value:t[0]});function At(t){let e,n,o=t[1],r=[];for(let e=0;e<o.length;e+=1)r[e]=Et(kt(t,o,e));const i=t=>ot(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=w()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);g(t,e,o),n=!0},p(t,n){if(524487&n[0]){let l;for(o=t[1],l=0;l<o.length;l+=1){const i=kt(t,o,l);r[l]?(r[l].p(i,n),nt(r[l],1)):(r[l]=Et(i),r[l].c(),nt(r[l],1),r[l].m(e.parentNode,e))}for(tt(),l=o.length;l<r.length;l+=1)i(l);et()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)nt(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)ot(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&$(e)}}}function Et(t){let e,n,o,r,i,l,s;const c=t[20].default,h=a(c,t,t[19],St),p=h||function(t){let e,n,o=t[39].string+"";return{c(){e=new L,n=w(),e.a=n},m(t,r){e.m(o,t,r),g(t,n,r)},p(t,n){2&n[0]&&o!==(o=t[39].string+"")&&e.p(o)},d(t){t&&$(n),t&&e.d()}}}(t);function m(){return t[34](t[39],t[41])}return{c(){e=v("li"),p&&p.c(),n=y(),S(e,"role","option"),S(e,"id",o=t[2]+"-result-"+t[41]),S(e,"aria-selected",r=t[6]===t[41]),S(e,"class","svelte-j5n77y"),j(e,"selected",t[6]===t[41]),j(e,"disabled",t[39].disabled)},m(t,o){g(t,e,o),p&&p.m(e,null),b(e,n),i=!0,l||(s=k(e,"click",m),l=!0)},p(n,l){t=n,h?h.p&&(!i||524291&l[0])&&d(h,c,t,t[19],i?u(c,t[19],l,_t):f(t[19]),St):p&&p.p&&(!i||2&l[0])&&p.p(t,i?l:[-1,-1]),(!i||4&l[0]&&o!==(o=t[2]+"-result-"+t[41]))&&S(e,"id",o),(!i||64&l[0]&&r!==(r=t[6]===t[41]))&&S(e,"aria-selected",r),64&l[0]&&j(e,"selected",t[6]===t[41]),2&l[0]&&j(e,"disabled",t[39].disabled)},i(t){i||(nt(p,t),i=!0)},o(t){ot(p,t),i=!1},d(t){t&&$(e),p&&p.d(t),l=!1,s()}}}function jt(t){let e,n;const o=t[20]["no-results"],r=a(o,t,t[19],wt);return{c(){e=v("div"),r&&r.c(),S(e,"class","svelte-j5n77y"),j(e,"no-results",!0)},m(t,o){g(t,e,o),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||524291&e[0])&&d(r,o,t,t[19],n?u(o,t[19],e,yt):f(t[19]),wt)},i(t){n||(nt(r,t),n=!0)},o(t){ot(r,t),n=!1},d(t){t&&$(e),r&&r.d(t)}}}function Lt(t){let n,o,r,i,l,s,a,c,u,d,f,h,p,m,x;const w=[{id:t[2]},{removeFormAriaAttributes:!0},t[9],{"aria-autocomplete":"list"},{"aria-controls":t[2]+"-listbox"},{"aria-labelledby":t[2]+"-label"},{"aria-activedescendant":t[6]>=0&&!t[5]&&t[1].length>0?`${t[2]}-result-${t[6]}`:null}];function _(e){t[22](e)}function A(e){t[23](e)}let E={};for(let t=0;t<w.length;t+=1)E=e(E,w[t]);void 0!==t[4]&&(E.ref=t[4]),void 0!==t[0]&&(E.value=t[0]),o=new vt({props:E}),R.push((()=>it(o,"ref",_))),R.push((()=>it(o,"value",A))),o.$on("type",t[24]),o.$on("input",t[25]),o.$on("change",t[26]),o.$on("focus",t[27]),o.$on("focus",t[28]),o.$on("clear",t[29]),o.$on("clear",t[30]),o.$on("blur",t[31]),o.$on("keydown",t[32]),o.$on("keydown",t[33]);let L=!t[5]&&t[1].length>0&&At(t),C=t[8]["no-results"]&&!t[5]&&t[0].length>0&&0===t[1].length&&jt(t);return{c(){n=v("div"),lt(o.$$.fragment),l=y(),s=v("ul"),L&&L.c(),a=y(),C&&C.c(),S(s,"role","listbox"),S(s,"aria-labelledby",c=t[2]+"-label"),S(s,"id",u=t[2]+"-listbox"),S(s,"class","svelte-j5n77y"),j(s,"svelte-typeahead-list",!0),S(n,"data-svelte-typeahead",""),S(n,"role","combobox"),S(n,"aria-haspopup","listbox"),S(n,"aria-owns",d=t[2]+"-listbox"),S(n,"aria-expanded",f=!t[5]&&t[1].length>0),S(n,"id",h=t[2]+"-typeahead"),S(n,"class","svelte-j5n77y"),j(n,"dropdown",t[1].length>0)},m(e,r){g(e,n,r),st(o,n,null),b(n,l),b(n,s),L&&L.m(s,null),b(s,a),C&&C.m(s,null),t[35](n),p=!0,m||(x=k(window,"click",t[21]),m=!0)},p(t,e){const l=614&e[0]?rt(w,[4&e[0]&&{id:t[2]},w[1],512&e[0]&&(b=t[9],"object"==typeof b&&null!==b?b:{}),w[3],4&e[0]&&{"aria-controls":t[2]+"-listbox"},4&e[0]&&{"aria-labelledby":t[2]+"-label"},102&e[0]&&{"aria-activedescendant":t[6]>=0&&!t[5]&&t[1].length>0?`${t[2]}-result-${t[6]}`:null}]):{};var b;!r&&16&e[0]&&(r=!0,l.ref=t[4],K((()=>r=!1))),!i&&1&e[0]&&(i=!0,l.value=t[0],K((()=>i=!1))),o.$set(l),!t[5]&&t[1].length>0?L?(L.p(t,e),34&e[0]&&nt(L,1)):(L=At(t),L.c(),nt(L,1),L.m(s,a)):L&&(tt(),ot(L,1,1,(()=>{L=null})),et()),t[8]["no-results"]&&!t[5]&&t[0].length>0&&0===t[1].length?C?(C.p(t,e),291&e[0]&&nt(C,1)):(C=jt(t),C.c(),nt(C,1),C.m(s,null)):C&&(tt(),ot(C,1,1,(()=>{C=null})),et()),(!p||4&e[0]&&c!==(c=t[2]+"-label"))&&S(s,"aria-labelledby",c),(!p||4&e[0]&&u!==(u=t[2]+"-listbox"))&&S(s,"id",u),(!p||4&e[0]&&d!==(d=t[2]+"-listbox"))&&S(n,"aria-owns",d),(!p||34&e[0]&&f!==(f=!t[5]&&t[1].length>0))&&S(n,"aria-expanded",f),(!p||4&e[0]&&h!==(h=t[2]+"-typeahead"))&&S(n,"id",h),2&e[0]&&j(n,"dropdown",t[1].length>0)},i(t){p||(nt(o.$$.fragment,t),nt(L),nt(C),p=!0)},o(t){ot(o.$$.fragment,t),ot(L),ot(C),p=!1},d(e){e&&$(n),at(o),L&&L.d(),C&&C.d(),t[35](null),m=!1,x()}}}function Ct(t,n,o){let r,i;const l=["id","value","data","extract","disable","filter","autoselect","inputAfterSelect","results","focusAfterSelect","limit"];let s=p(n,l),{$$slots:a={},$$scope:c}=n;const u=function(t){const e={};for(const n in t)e[n]=!0;return e}(a);let{id:d="typeahead-"+Math.random().toString(36)}=n,{value:f=""}=n,{data:b=[]}=n,{extract:m=(t=>t)}=n,{disable:g=(t=>!1)}=n,{filter:$=(t=>!1)}=n,{autoselect:v=!0}=n,{inputAfterSelect:x="update"}=n,{results:y=[]}=n,{focusAfterSelect:w=!1}=n,{limit:k=1/0}=n;const _=z();let S=null,A=null,E=!1,j=-1,L="";async function C(){const t=y[j],e=m(t.original),n=f;"clear"==x&&o(0,f=""),"update"==x&&o(0,f=e),_("select",{selectedIndex:j,searched:n,selected:e,original:t.original,originalIndex:t.index}),await(J(),H),w&&A.focus(),o(5,E=!0)}T((()=>{L!==i&&v&&o(6,j=0),L===i||u["no-results"]||o(5,E=0===y.length),L=i}));return t.$$set=t=>{n=e(e({},n),h(t)),o(9,s=p(n,l)),"id"in t&&o(2,d=t.id),"value"in t&&o(0,f=t.value),"data"in t&&o(10,b=t.data),"extract"in t&&o(11,m=t.extract),"disable"in t&&o(12,g=t.disable),"filter"in t&&o(13,$=t.filter),"autoselect"in t&&o(14,v=t.autoselect),"inputAfterSelect"in t&&o(15,x=t.inputAfterSelect),"results"in t&&o(1,y=t.results),"focusAfterSelect"in t&&o(16,w=t.focusAfterSelect),"limit"in t&&o(17,k=t.limit),"$$scope"in t&&o(19,c=t.$$scope)},t.$$.update=()=>{2048&t.$$.dirty[0]&&o(18,r={pre:"<mark>",post:"</mark>",extract:m}),406529&t.$$.dirty[0]&&o(1,y=ht.filter(f,b,r).filter((({score:t})=>t>0)).slice(0,k).filter((t=>!$(t.original))).map((t=>({...t,disabled:g(t.original)})))),2050&t.$$.dirty[0]&&(i=y.map((t=>m(t.original))).join(""))},[f,y,d,S,A,E,j,C,u,s,b,m,g,$,v,x,w,k,r,c,a,({target:t})=>{E||!S||S.contains(t)||o(5,E=!0)},function(t){A=t,o(4,A)},function(t){f=t,o(0,f)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},()=>{o(5,E=!1)},function(e){D.call(this,t,e)},()=>{o(5,E=!1)},function(e){D.call(this,t,e)},function(e){D.call(this,t,e)},t=>{if(0!==y.length)switch(t.key){case"Enter":C();break;case"ArrowDown":t.preventDefault(),o(6,j+=1),j===y.length&&o(6,j=0);break;case"ArrowUp":t.preventDefault(),o(6,j-=1),j<0&&o(6,j=y.length-1);break;case"Escape":t.preventDefault(),o(0,f=""),A.focus(),o(5,E=!0)}},(t,e)=>{t.disabled||(o(6,j=e),C())},function(t){R[t?"unshift":"push"]((()=>{S=t,o(3,S)}))}]}var Nt=class extends ut{constructor(t){super(),ct(this,t,Ct,Lt,l,{id:2,value:0,data:10,extract:11,disable:12,filter:13,autoselect:14,inputAfterSelect:15,results:1,focusAfterSelect:16,limit:17},xt,[-1,-1])}};const Ot="USER-SCRIPT-COURSE-FULLNAMES",Ft=[{index:0,methodname:"core_course_get_enrolled_courses_by_timeline_classification",args:{offset:0,limit:0,classification:"all",sort:"shortname",customfieldname:"semester",customfieldvalue:""}}];function Mt(t){m(t,"svelte-xwr4a9",'.container.svelte-xwr4a9{z-index:1000000;position:fixed;left:50%;top:20%;transform:translateX(-50%);width:500px}[data-svelte-typeahead]{background:none !important;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}[data-svelte-typeahead] [data-svelte-search] input{margin:0;background:rgba(0, 0, 0, 0.7);-webkit-backdrop-filter:blur(5px);border:2px solid rgba(133, 133, 133, 0.7);border-radius:5px;border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;color:white;padding:10px 10px;padding-bottom:5px;font-size:20px;box-shadow:0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19)}[data-svelte-typeahead] [data-svelte-search] input:focus{outline:none}[data-svelte-typeahead] ul.svelte-typeahead-list{margin:0;box-sizing:border-box;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border:2px solid rgba(133, 133, 133, 0.7);border-top:none;max-width:100%;min-height:5px;background:rgba(0, 0, 0, 0.7);-webkit-backdrop-filter:blur(5px);box-shadow:0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19)}[data-svelte-typeahead] ul.svelte-typeahead-list::before{content:"";z-index:-5;position:absolute;height:100%;width:100%;backdrop-filter:blur(5px)}.svelte-typeahead-list li{background:none;color:whitesmoke;border-radius:5px;border-bottom:none !important;margin:0 8px}.svelte-typeahead-list li:hover{background:#176fc6 !important}.svelte-typeahead-list li:first-child{margin-top:5px}.svelte-typeahead-list li:last-child{margin-bottom:5px}.svelte-typeahead-list li.selected{background:#4b647d}.svelte-typeahead-list li mark{background:none;color:white}[data-svelte-typeahead]::before{content:"";z-index:-5;position:absolute;height:100%;width:100%;backdrop-filter:blur(5px)}')}function Tt(t){let e,n,o;return n=new Nt({props:{autofocus:!0,hideLabel:!0,placeholder:"Modul Suche",data:t[1],extract:It}}),n.$on("select",Dt),n.$on("blur",t[3]),{c(){e=v("div"),lt(n.$$.fragment),S(e,"class","container svelte-xwr4a9")},m(t,r){g(t,e,r),st(n,e,null),o=!0},p(t,e){const o={};2&e&&(o.data=t[1]),n.$set(o)},i(t){o||(nt(n.$$.fragment,t),o=!0)},o(t){ot(n.$$.fragment,t),o=!1},d(t){t&&$(e),at(n)}}}function zt(t){let e,n,o,r,i=t[0]&&Tt(t);return{c(){i&&i.c(),e=w()},m(l,s){i&&i.m(l,s),g(l,e,s),n=!0,o||(r=k(window,"keydown",t[2]),o=!0)},p(t,[n]){t[0]?i?(i.p(t,n),1&n&&nt(i,1)):(i=Tt(t),i.c(),nt(i,1),i.m(e.parentNode,e)):i&&(tt(),ot(i,1,1,(()=>{i=null})),et())},i(t){n||(nt(i),n=!0)},o(t){ot(i),n=!1},d(t){i&&i.d(t),t&&$(e),o=!1,r()}}}function Dt(t){const e=t.detail.original;e&&(location.href="https://moodle.bfh.ch/course/view.php?id="+e.id)}const It=t=>t.fullname;function Rt(t,e,n){let o=!1,r=[];M((()=>{!async function(){var t,e;const o=null===(t=document.head.textContent.match(/sesskey":"(.*?)"/))||void 0===t?void 0:t[1];if(!o)return;const i=`https://moodle.bfh.ch/lib/ajax/service.php?sesskey=${o}&info=core_course_get_enrolled_courses_by_timeline_classification`;if(n(1,r=JSON.parse(sessionStorage.getItem(Ot))),!r){const t=await fetch(i,{method:"POST",body:JSON.stringify(Ft)});if(!t.ok)return;const o=null===(e=await t.json())||void 0===e?void 0:e[0];if(o.error)return;n(1,r=o.data.courses),sessionStorage.setItem(Ot,JSON.stringify(r))}}()}));return[o,r,function(t){"k"===t.key&&(t.metaKey||t.ctrlKey)?n(0,o=!o):o&&"Escape"===t.key&&n(0,o=!1)},()=>n(0,o=!1)]}class Ut extends ut{constructor(t){super(),ct(this,t,Rt,zt,l,{},Mt)}}function Bt(e){let n,o;return n=new Ut({}),{c(){lt(n.$$.fragment),this.c=t},m(t,e){st(n,t,e),o=!0},p:t,i(t){o||(nt(n.$$.fragment,t),o=!0)},o(t){ot(n.$$.fragment,t),o=!1},d(t){at(n,t)}}}class Ht extends Z{constructor(t){super(),ct(this,{target:this.shadowRoot,props:C(this.attributes),customElement:!0},null,Bt,l,{},null),t&&t.target&&g(t.target,this,t.anchor)}}customElements.define("moodle-search",Ht);return new Ht({target:document.body})}();
//# sourceMappingURL=bundle.js.map
