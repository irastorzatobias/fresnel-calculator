(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))_(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&_(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function _(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var z,s,Ne,H,te,$e,K,F={},Se=[],We=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function Pe(e){var t=e.parentNode;t&&t.removeChild(e)}function Q(e,t,n){var _,o,r,i={};for(r in t)r=="key"?_=t[r]:r=="ref"?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return D(e,i,_,o,null)}function D(e,t,n,_,o){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ne};return o==null&&s.vnode!=null&&s.vnode(r),r}function U(e){return e.children}function $(e,t){this.props=e,this.context=t}function O(e,t){if(t==null)return e.__?O(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?O(e):null}function He(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return He(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!W.__r++||te!==s.debounceRendering)&&((te=s.debounceRendering)||$e)(W)}function W(){var e,t,n,_,o,r,i,c,a;for(H.sort(K);e=H.shift();)e.__d&&(t=H.length,_=void 0,o=void 0,r=void 0,c=(i=(n=e).__v).__e,(a=n.__P)&&(_=[],o=[],(r=P({},i)).__v=i.__v+1,J(a,i,r,n.__n,a.ownerSVGElement!==void 0,i.__h!=null?[c]:null,_,c??O(i),i.__h,o),Ue(_,i,o),i.__e!=c&&He(i)),H.length>t&&H.sort(K));W.__r=0}function Ce(e,t,n,_,o,r,i,c,a,v,p){var l,m,f,u,d,C,y,b,N,x=0,k=_&&_.__k||Se,L=k.length,S=L,E=t.length;for(n.__k=[],l=0;l<E;l++)(u=n.__k[l]=(u=t[l])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?D(null,u,null,null,u):B(u)?D(U,{children:u},null,null,null):u.__b>0?D(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=n,u.__b=n.__b+1,(b=Me(u,k,y=l+x,S))===-1?f=F:(f=k[b]||F,k[b]=void 0,S--),J(e,u,f,o,r,i,c,a,v,p),d=u.__e,(m=u.ref)&&f.ref!=m&&(f.ref&&ee(f.ref,null,u),p.push(m,u.__c||d,u)),d!=null&&(C==null&&(C=d),(N=f===F||f.__v===null)?b==-1&&x--:b!==y&&(b===y+1?x++:b>y?S>E-y?x+=b-y:x--:x=b<y&&b==y-1?b-y:0),y=l+x,typeof u.type!="function"||b===y&&f.__k!==u.__k?typeof u.type=="function"||b===y&&!N?u.__d!==void 0?(a=u.__d,u.__d=void 0):a=d.nextSibling:a=Fe(e,d,a):a=Ee(u,a,e),typeof n.type=="function"&&(n.__d=a))):(f=k[l])&&f.key==null&&f.__e&&(f.__e==a&&(a=O(f)),X(f,f,!1));for(n.__e=C,l=L;l--;)k[l]!=null&&(typeof n.type=="function"&&k[l].__e!=null&&k[l].__e==n.__d&&(n.__d=k[l].__e.nextSibling),X(k[l],k[l]))}function Ee(e,t,n){for(var _,o=e.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=e,t=typeof _.type=="function"?Ee(_,t,n):Fe(n,_.__e,t));return t}function M(e,t){return t=t||[],e==null||typeof e=="boolean"||(B(e)?e.some(function(n){M(n,t)}):t.push(e)),t}function Fe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function Me(e,t,n,_){var o=e.key,r=e.type,i=n-1,c=n+1,a=t[n];if(a===null||a&&o==a.key&&r===a.type)return n;if(_>(a!=null?1:0))for(;i>=0||c<t.length;){if(i>=0){if((a=t[i])&&o==a.key&&r===a.type)return i;i--}if(c<t.length){if((a=t[c])&&o==a.key&&r===a.type)return c;c++}}return-1}function Ie(e,t,n,_,o){var r;for(r in n)r==="children"||r==="key"||r in t||I(e,r,null,n[r],_);for(r in t)o&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||I(e,r,t[r],n[r],_)}function _e(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||We.test(t)?n:n+"px"}function I(e,t,n,_,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||_e(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||_e(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?oe:re,r):e.removeEventListener(t,r?oe:re,r);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function re(e){return this.l[e.type+!1](s.event?s.event(e):e)}function oe(e){return this.l[e.type+!0](s.event?s.event(e):e)}function J(e,t,n,_,o,r,i,c,a,v){var p,l,m,f,u,d,C,y,b,N,x,k,L,S,E,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,c=t.__e=n.__e,t.__h=null,r=[c]),(p=s.__b)&&p(t);e:if(typeof w=="function")try{if(y=t.props,b=(p=w.contextType)&&_[p.__c],N=p?b?b.props.value:p.__:_,n.__c?C=(l=t.__c=n.__c).__=l.__E:("prototype"in w&&w.prototype.render?t.__c=l=new w(y,N):(t.__c=l=new $(y,N),l.constructor=w,l.render=qe),b&&b.sub(l),l.props=y,l.state||(l.state={}),l.context=N,l.__n=_,m=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),w.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=P({},l.__s)),P(l.__s,w.getDerivedStateFromProps(y,l.__s))),f=l.props,u=l.state,l.__v=t,m)w.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(w.getDerivedStateFromProps==null&&y!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,N),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,N)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=y,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),x=0;x<l._sb.length;x++)l.__h.push(l._sb[x]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,N),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,u,d)})}if(l.context=N,l.props=y,l.__P=e,l.__e=!1,k=s.__r,L=0,"prototype"in w&&w.prototype.render){for(l.state=l.__s,l.__d=!1,k&&k(t),p=l.render(l.props,l.state,l.context),S=0;S<l._sb.length;S++)l.__h.push(l._sb[S]);l._sb=[]}else do l.__d=!1,k&&k(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++L<25);l.state=l.__s,l.getChildContext!=null&&(_=P(P({},_),l.getChildContext())),m||l.getSnapshotBeforeUpdate==null||(d=l.getSnapshotBeforeUpdate(f,u)),Ce(e,B(E=p!=null&&p.type===U&&p.key==null?p.props.children:p)?E:[E],t,n,_,o,r,i,c,a,v),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),C&&(l.__E=l.__=null)}catch(T){t.__v=null,(a||r!=null)&&(t.__e=c,t.__h=!!a,r[r.indexOf(c)]=null),s.__e(T,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=je(n.__e,t,n,_,o,r,i,a,v);(p=s.diffed)&&p(t)}function Ue(e,t,n){for(var _=0;_<n.length;_++)ee(n[_],n[++_],n[++_]);s.__c&&s.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){s.__e(r,o.__v)}})}function je(e,t,n,_,o,r,i,c,a){var v,p,l,m=n.props,f=t.props,u=t.type,d=0;if(u==="svg"&&(o=!0),r!=null){for(;d<r.length;d++)if((v=r[d])&&"setAttribute"in v==!!u&&(u?v.localName===u:v.nodeType===3)){e=v,r[d]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=o?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),r=null,c=!1}if(u===null)m===f||c&&e.data===f||(e.data=f);else{if(r=r&&z.call(e.childNodes),p=(m=n.props||F).dangerouslySetInnerHTML,l=f.dangerouslySetInnerHTML,!c){if(r!=null)for(m={},d=0;d<e.attributes.length;d++)m[e.attributes[d].name]=e.attributes[d].value;(l||p)&&(l&&(p&&l.__html==p.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Ie(e,f,m,o,c),l)t.__k=[];else if(Ce(e,B(d=t.props.children)?d:[d],t,n,_,o&&u!=="foreignObject",r,i,r?r[0]:n.__k&&O(n,0),c,a),r!=null)for(d=r.length;d--;)r[d]!=null&&Pe(r[d]);c||("value"in f&&(d=f.value)!==void 0&&(d!==e.value||u==="progress"&&!d||u==="option"&&d!==m.value)&&I(e,"value",d,m.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==e.checked&&I(e,"checked",d,m.checked,!1))}return e}function ee(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){s.__e(_,n)}}function X(e,t,n){var _,o;if(s.unmount&&s.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||ee(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){s.__e(r,t)}_.base=_.__P=null,e.__c=void 0}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&X(_[o],t,n||typeof e.type!="function");n||e.__e==null||Pe(e.__e),e.__=e.__e=e.__d=void 0}function qe(e,t,n){return this.constructor(e,n)}function ze(e,t,n){var _,o,r,i;s.__&&s.__(e,t),o=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],i=[],J(t,e=(!_&&n||t).__k=Q(U,null,[e]),o||F,F,t.ownerSVGElement!==void 0,!_&&n?[n]:o?null:t.firstChild?z.call(t.childNodes):null,r,!_&&n?n:o?o.__e:t.firstChild,_,i),Ue(r,e,i)}z=Se.slice,s={__e:function(e,t,n,_){for(var o,r,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,_||{}),i=o.__d),i)return o.__E=o}catch(c){e=c}throw e}},Ne=0,$.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},$.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},$.prototype.render=U,H=[],$e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0;const Be="/fresnel-calculator/assets/formula-3f93d1a4.png";var Ze=0;function h(e,t,n,_,o,r){var i,c,a={};for(c in t)c=="ref"?i=t[c]:a[c]=t[c];var v={type:e,props:a,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ze,__source:o,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(c in i)a[c]===void 0&&(a[c]=i[c]);return s.vnode&&s.vnode(v),v}const Ge=()=>h("section",{className:"bg-gray-800 rounded-lg p-6 mt-8 shadow-lg w-full sm:w-[600px] mx-auto",children:h("div",{className:"flex flex-col md:flex-row items-center md:space-x-6 justify-center",children:h("div",{className:"text-md flex flex-col justify-center items-center ",children:[h("h2",{className:"font-semibold text-2xl mb-4",children:"Formula utilizada"}),h("img",{src:Be,alt:"Fresnel",className:"w-[300px] shadow-lg mb-2"}),h("p",{children:'La Zona Fresnel describe cómo las ondas de radio se propagan en el espacio entre dos puntos, como una antena transmisora y una receptora. La "Zona" es una región elipsoidal alrededor de la línea directa entre estos dos puntos. Los obstáculos dentro de esta zona pueden causar difracciones e interferencias que afectan la calidad de la señal.'}),h("ul",{className:"list-disc list-inside mt-4",children:[h("li",{children:[h("strong",{children:"Ver Televisión:"})," Si un edificio alto está bloqueando parte de la Zona Fresnel entre las antenas, la señal podría ser débil."]}),h("li",{children:[h("strong",{children:"Usar Wi-Fi:"})," Las paredes u otros obstáculos pueden interferir con la Zona Fresnel y reducir la velocidad de Internet."]}),h("li",{children:[h("strong",{children:"Hablar por Teléfono Celular:"})," Una montaña entre la torre de telefonía móvil y tu teléfono podría causar mala recepción."]})]})]})})});var j,g,Z,le,q=0,Le=[],R=[],ie=s.__b,ce=s.__r,ae=s.diffed,se=s.__c,ue=s.unmount;function Oe(e,t){s.__h&&s.__h(g,e,q||t),q=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:R}),n.__[e]}function Ke(e){return q=1,Qe(Te,e)}function Qe(e,t,n){var _=Oe(j++,2);if(_.t=e,!_.__c&&(_.__=[n?n(t):Te(void 0,t),function(c){var a=_.__N?_.__N[0]:_.__[0],v=_.t(a,c);a!==v&&(_.__N=[v,_.__[1]],_.__c.setState({}))}],_.__c=g,!g.u)){var o=function(c,a,v){if(!_.__c.__H)return!0;var p=_.__c.__H.__.filter(function(m){return m.__c});if(p.every(function(m){return!m.__N}))return!r||r.call(this,c,a,v);var l=!1;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(l=!0)}}),!(!l&&_.__c.props===c)&&(!r||r.call(this,c,a,v))};g.u=!0;var r=g.shouldComponentUpdate,i=g.componentWillUpdate;g.componentWillUpdate=function(c,a,v){if(this.__e){var p=r;r=void 0,o(c,a,v),r=p}i&&i.call(this,c,a,v)},g.shouldComponentUpdate=o}return _.__N||_.__}function fe(e){return q=5,Xe(function(){return{current:e}},[])}function Xe(e,t){var n=Oe(j++,7);return et(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ye(){for(var e;e=Le.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){g=null,ie&&ie(e)},s.__r=function(e){ce&&ce(e),j=0;var t=(g=e.__c).__H;t&&(Z===g?(t.__h=[],g.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=R,n.__N=n.i=void 0})):(t.__h.forEach(V),t.__h.forEach(Y),t.__h=[],j=0)),Z=g},s.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Le.push(t)!==1&&le===s.requestAnimationFrame||((le=s.requestAnimationFrame)||Je)(Ye)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==R&&(n.__=n.__V),n.i=void 0,n.__V=R})),Z=g=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(V),n.__h=n.__h.filter(function(_){return!_.__||Y(_)})}catch(_){t.some(function(o){o.__h&&(o.__h=[])}),t=[],s.__e(_,n.__v)}}),se&&se(e,t)},s.unmount=function(e){ue&&ue(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{V(_)}catch(o){t=o}}),n.__H=void 0,t&&s.__e(t,n.__v))};var pe=typeof requestAnimationFrame=="function";function Je(e){var t,n=function(){clearTimeout(_),pe&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);pe&&(t=requestAnimationFrame(n))}function V(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function Y(e){var t=g;e.__c=e.__(),g=t}function et(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function Te(e,t){return typeof t=="function"?t(e):t}function Ae(e,t){for(var n in t)e[n]=t[n];return e}function de(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function he(e){this.props=e}(he.prototype=new $).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(e,t){return de(this.props,e)||de(this.state,t)};var ve=s.__b;s.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ve&&ve(e)};var tt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function nt(e){function t(n){var _=Ae({},n);return delete _.ref,e(_,n.ref||null)}return t.$$typeof=tt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var _t=s.__e;s.__e=function(e,t,n,_){if(e.then){for(var o,r=t;r=r.__;)if((o=r.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}_t(e,t,n,_)};var me=s.unmount;function De(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=Ae({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return De(_,t,n)})),e}function Re(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return Re(_,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function G(){this.__u=0,this.t=null,this.__b=null}function Ve(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function A(){this.u=null,this.o=null}s.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),me&&me(e)},(G.prototype=new $).__c=function(e,t){var n=t.__c,_=this;_.t==null&&(_.t=[]),_.t.push(n);var o=Ve(_.__v),r=!1,i=function(){r||(r=!0,n.__R=null,o?o(c):c())};n.__R=i;var c=function(){if(!--_.__u){if(_.state.__a){var v=_.state.__a;_.__v.__k[0]=Re(v,v.__c.__P,v.__c.__O)}var p;for(_.setState({__a:_.__b=null});p=_.t.pop();)p.forceUpdate()}},a=t.__h===!0;_.__u++||a||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(i,i)},G.prototype.componentWillUnmount=function(){this.t=[]},G.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=De(this.__b,n,_.__O=_.__P)}this.__b=null}var o=t.__a&&Q(U,null,e.fallback);return o&&(o.__h=null),[Q(U,null,t.__a?null:e.children),o]};var ye=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(A.prototype=new $).__a=function(e){var t=this,n=Ve(t.__v),_=t.o.get(e);return _[0]++,function(o){var r=function(){t.props.revealOrder?(_.push(o),ye(t,e,_)):o()};n?n(r):r()}},A.prototype.render=function(e){this.u=null,this.o=new Map;var t=M(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},A.prototype.componentDidUpdate=A.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){ye(e,n,t)})};var rt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ot=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,lt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,it=/[A-Z0-9]/g,ct=typeof document<"u",at=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};$.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty($.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ge=s.event;function st(){}function ut(){return this.cancelBubble}function ft(){return this.defaultPrevented}s.event=function(e){return ge&&(e=ge(e)),e.persist=st,e.isPropagationStopped=ut,e.isDefaultPrevented=ft,e.nativeEvent=e};var pt={enumerable:!1,configurable:!0,get:function(){return this.class}},be=s.vnode;s.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,_=t.type,o={};for(var r in n){var i=n[r];if(!(r==="value"&&"defaultValue"in n&&i==null||ct&&r==="children"&&_==="noscript"||r==="class"||r==="className")){var c=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&i===!0?i="":c==="ondoubleclick"?r="ondblclick":c!=="onchange"||_!=="input"&&_!=="textarea"||at(n.type)?c==="onfocus"?r="onfocusin":c==="onblur"?r="onfocusout":lt.test(r)?r=c:_.indexOf("-")===-1&&ot.test(r)?r=r.replace(it,"-$&").toLowerCase():i===null&&(i=void 0):c=r="oninput",c==="oninput"&&o[r=c]&&(r="oninputCapture"),o[r]=i}}_=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=M(n.children).forEach(function(a){a.props.selected=o.value.indexOf(a.props.value)!=-1})),_=="select"&&o.defaultValue!=null&&(o.value=M(n.children).forEach(function(a){a.props.selected=o.multiple?o.defaultValue.indexOf(a.props.value)!=-1:o.defaultValue==a.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",pt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=rt,be&&be(e)};var ke=s.__r;s.__r=function(e){ke&&ke(e),e.__c};var xe=s.diffed;s.diffed=function(e){xe&&xe(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const we=nt((e,t)=>h("div",{className:"relative mt-2 rounded-md shadow-sm",children:[h("input",{ref:t,type:"number",step:"any",className:"block w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:e.placeholder||"0.00",required:!0}),h("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",children:h("span",{className:"text-gray-900 sm:text-sm",children:e.label})})]})),dt=({result:e})=>h("p",{class:"font-semibold text-lg text-center bg-green-700 rounded-md mt-2",children:[e," metros"]}),ht=()=>{const e=fe(null),t=fe(null),[n,_]=Ke(null),o=i=>{var v,p;i.preventDefault();const c=(v=e.current)==null?void 0:v.value,a=(p=t.current)==null?void 0:p.value;if(c&&a){const l=parseFloat(c),m=parseFloat(a),f=8.657*Math.sqrt(l/m);_(f.toFixed(2))}},r=()=>{e.current.value="",t.current.value="",_(null)};return h("form",{onSubmit:o,className:"w-full flex justify-center flex-col items-center",children:h("div",{className:"w-full sm:w-[600px] bg-gray-700 flex flex-col px-2 py-2 rounded-md",children:[h("h1",{class:"font-semibold",children:"Calcular el radio de la Zona Fresnel"}),h(we,{ref:e,label:"km",placeholder:"Ingrese los KM, ej: 7.37"}),h(we,{ref:t,label:"GHz",placeholder:"Ingrese los Ghz, ej: 2.4"}),h("div",{class:"w-full flex justify-between gap-2",children:[h("button",{type:"submit",class:"bg-indigo-500 rounded-md p-2 mt-2 w-1/2",children:"Calculate"}),h("button",{onClick:r,class:"bg-red-500 rounded-md p-2 mt-2 w-1/2",children:"Limpiar"})]}),n&&h(dt,{result:n})]})})};function vt(){return h("div",{className:"h-full min-h-screen bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white p-4 sm:p-8 md:p-20",children:[h("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2",children:"Zona Fresnel"}),h(ht,{}),h(Ge,{})]})}ze(h(vt,{}),document.getElementById("app"));
