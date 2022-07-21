/*!
  * Bootstrap v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class q extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(q,"close"),g(q);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function Rt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const qt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(t,e){void 0===e&&(e=!1);var i=t.getBoundingClientRect(),n=1,s=1;if(zt(t)&&e){var o=t.offsetHeight,r=t.offsetWidth;r>0&&(n=Xt(i.width)/r||1),o>0&&(s=Xt(i.height)/o||1)}return{width:i.width/n,height:i.height/s,top:i.top/s,right:i.right/n,bottom:i.bottom/s,left:i.left/n,x:i.left/n,y:i.top/s}}function Ut(t){var e=Yt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Gt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&Rt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Jt(t){return Bt(t).getComputedStyle(t)}function Zt(t){return["table","td","th"].indexOf(Wt(t))>=0}function te(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ee(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(Rt(t)?t.host:null)||te(t)}function ie(t){return zt(t)&&"fixed"!==Jt(t).position?t.offsetParent:null}function ne(t){for(var e=Bt(t),i=ie(t);i&&Zt(i)&&"static"===Jt(i).position;)i=ie(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===Jt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&zt(t)&&"fixed"===Jt(t).position)return null;var i=ee(t);for(Rt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=Jt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function se(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function oe(t,e,i){return Kt(t,Qt(e,i))}function re(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ae(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const le={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=se(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return re("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ae(t,yt))}(s.padding,i),d=Ut(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=ne(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=oe(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Gt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(t){return t.split("-")[1]}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=ne(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==Jt(A=te(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&he),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var fe={passive:!0};const pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,fe)})),a&&l.addEventListener("resize",i.update,fe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,fe)})),a&&l.removeEventListener("resize",i.update,fe)}},data:{}};var ge={left:"right",right:"left",bottom:"top",top:"bottom"};function me(t){return t.replace(/left|right|bottom|top/g,(function(t){return ge[t]}))}var _e={start:"end",end:"start"};function be(t){return t.replace(/start|end/g,(function(t){return _e[t]}))}function ve(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ye(t){return Yt(te(t)).left+ve(t).scrollLeft}function we(t){var e=Jt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ae(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&we(t)?t:Ae(ee(t))}function Ee(t,e){var i;void 0===e&&(e=[]);var n=Ae(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],we(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ee(ee(r)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ce(t,e){return e===Tt?Te(function(t){var e=Bt(t),i=te(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+ye(t),y:a}}(t)):Ft(e)?function(t){var e=Yt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Te(function(t){var e,i=te(t),n=ve(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+ye(t),l=-n.scrollTop;return"rtl"===Jt(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(te(t)))}function Oe(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?ce(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?se(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function xe(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?Et:o,a=i.rootBoundary,l=void 0===a?Tt:a,c=i.elementContext,h=void 0===c?Ct:c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,g=re("number"!=typeof p?p:ae(p,yt)),m=h===Ct?Ot:Ct,_=t.rects.popper,b=t.elements[u?m:h],v=function(t,e,i){var n="clippingParents"===e?function(t){var e=Ee(ee(t)),i=["absolute","fixed"].indexOf(Jt(t).position)>=0&&zt(t)?ne(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Gt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Ce(t,i);return e.top=Kt(n.top,e.top),e.right=Qt(n.right,e.right),e.bottom=Qt(n.bottom,e.bottom),e.left=Kt(n.left,e.left),e}),Ce(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(Ft(b)?b:b.contextElement||te(t.elements.popper),r,l),y=Yt(t.elements.reference),w=Oe({reference:y,element:_,strategy:"absolute",placement:s}),A=Te(Object.assign({},_,w)),E=h===Ct?A:y,T={top:v.top-E.top+g.top,bottom:E.bottom-v.bottom+g.bottom,left:v.left-E.left+g.left,right:E.right-v.right+g.right},C=t.modifiersData.offset;if(h===Ct&&C){var O=C[s];Object.keys(T).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";T[t]+=O[i]*e}))}return T}function ke(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=ce(n),d=h?a?xt:xt.filter((function(t){return ce(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=xe(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Le={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=me(t);return[be(t),e,be(e)]}(m):[me(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?ke(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=ce(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=xe(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=me(I));var N=me(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function De(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Se(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=xe(e,{elementContext:"reference"}),a=xe(e,{altBoundary:!0}),l=De(r,n),c=De(a,s,o),h=Se(l),d=Se(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},Ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Pe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Oe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},je={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=xe(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=ce(e.placement),v=!b,y=se(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Ut(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],R=F[S],q=oe(0,E[I],B[I]),V=v?E[I]/2-M-q-z-O.mainAxis:H-q-z-O.mainAxis,K=v?-E[I]/2+M+q+R+O.mainAxis:$+q+R+O.mainAxis,Q=e.elements.arrow&&ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=oe(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=oe(t,e,i);return n>i?i:n}(at,et,lt):oe(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function Me(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=te(e),l=Yt(t,r),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||we(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:ve(n)),zt(e)?((h=Yt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=ye(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function He(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function We(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Be(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?$e:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ee(t):t.contextElement?Ee(t.contextElement):[],popper:Ee(e)};var r,c,u=function(t){var e=He(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(We(e,i)){a.rects={reference:Me(e,ne(i),"fixed"===a.options.strategy),popper:Ut(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!We(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var Fe=Be(),ze=Be({defaultModifiers:[pe,Pe,ue,qt]}),Re=Be({defaultModifiers:[pe,Pe,ue,qt,Ne,Le,je,le,Ie]});const qe=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Be,detectOverflow:xe,createPopperBase:Fe,createPopper:Re,createPopperLite:ze,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:qt,arrow:le,computeStyles:ue,eventListeners:pe,flip:Le,hide:Ie,offset:Ne,popperOffsets:Pe,preventOverflow:je},Symbol.toStringTag,{value:"Module"})),Ve="dropdown",Ke="ArrowUp",Qe="ArrowDown",Xe="click.bs.dropdown.data-api",Ye="keydown.bs.dropdown.data-api",Ue="show",Ge='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Je=`${Ge}.show`,Ze=".dropdown-menu",ti=p()?"top-end":"top-start",ei=p()?"top-start":"top-end",ii=p()?"bottom-end":"bottom-start",ni=p()?"bottom-start":"bottom-end",si=p()?"left-start":"right-start",oi=p()?"right-start":"left-start",ri={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ai={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class li extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.findOne(Ze,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ri}static get DefaultType(){return ai}static get NAME(){return Ve}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ue),this._element.classList.add(Ue),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ue),this._element.classList.remove(Ue),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===qe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Re(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ue)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return si;if(t.classList.contains("dropstart"))return oi;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ei:ti:e?ni:ii}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Qe,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=li.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(Je);for(const i of e){const e=li.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ke,Qe].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=Q.findOne(Ge,t.delegateTarget.parentNode),o=li.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ye,Ge,li.dataApiKeydownHandler),P.on(document,Ye,Ze,li.dataApiKeydownHandler),P.on(document,Xe,li.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",li.clearMenus),P.on(document,Xe,Ge,(function(t){t.preventDefault(),li.getOrCreateInstance(this).toggle()})),g(li);const ci=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",hi=".sticky-top",di="padding-right",ui="margin-right";class fi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,di,(e=>e+t)),this._setElementAttributes(ci,di,(e=>e+t)),this._setElementAttributes(hi,ui,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,di),this._resetElementAttributes(ci,di),this._resetElementAttributes(hi,ui)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const pi="show",gi="mousedown.bs.backdrop",mi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},_i={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class bi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return mi}static get DefaultType(){return _i}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(pi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(pi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,gi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,gi,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const vi=".bs.focustrap",yi="backward",wi={autofocus:!0,trapElement:null},Ai={autofocus:"boolean",trapElement:"element"};class Ei extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,vi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,vi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===yi?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?yi:"forward")}}const Ti="hidden.bs.modal",Ci="show.bs.modal",Oi="modal-open",xi="show",ki="modal-static",Li={backdrop:!0,focus:!0,keyboard:!0},Di={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Si extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new fi,this._addEventListeners()}static get Default(){return Li}static get DefaultType(){return Di}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,Ci,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Oi),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xi),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new bi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(xi),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(Oi),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Ti)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(ki)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ki),this._queueCallback((()=>{this._element.classList.remove(ki),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Si.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,Ci,(t=>{t.defaultPrevented||P.one(e,Ti,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Si.getInstance(i).hide(),Si.getOrCreateInstance(e).toggle(this)})),R(Si),g(Si);const Ii="show",Ni="showing",Pi="hiding",ji=".offcanvas.show",Mi="hidePrevented.bs.offcanvas",Hi="hidden.bs.offcanvas",$i={backdrop:!0,keyboard:!0,scroll:!1},Wi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Bi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return $i}static get DefaultType(){return Wi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new fi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ni),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ii),this._element.classList.remove(Ni),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Pi),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Ii,Pi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new fi).reset(),P.trigger(this._element,Hi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new bi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,Mi)}:null})}_initializeFocusTrap(){return new Ei({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,Mi))}))}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,Hi,(()=>{a(this)&&this.focus()}));const i=Q.findOne(ji);i&&i!==e&&Bi.getInstance(i).hide(),Bi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(ji))Bi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Bi.getOrCreateInstance(t).hide()})),R(Bi),g(Bi);const Fi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ri=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,qi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Fi.has(i)||Boolean(zi.test(t.nodeValue)||Ri.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Vi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ki={allowList:Vi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Qi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Xi={entry:"(string|element|function|null)",selector:"(string|element)"};class Yi extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Ki}static get DefaultType(){return Qi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Xi)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)qi(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ui=new Set(["sanitize","allowList","sanitizeFn"]),Gi="fade",Ji="show",Zi=".modal",tn="hide.bs.modal",en="hover",nn="focus",sn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},on={allowList:Vi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},rn={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class an extends z{constructor(t,e){if(void 0===qe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}static get Default(){return on}static get DefaultType(){return rn}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled){if(t){const e=this._initializeOnDelegatedTarget(t);return e._activeTrigger.click=!e._activeTrigger.click,void(e._isWithActiveTrigger()?e._enter():e._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Zi),tn,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this.tip&&(this.tip.remove(),this.tip=null);const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(i),i.classList.add(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{const t=this._isHovered;this._isHovered=!1,P.trigger(this._element,this.constructor.eventName("shown")),t&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(Ji),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||t.remove(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Gi,Ji),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Gi),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Yi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Gi)}_isShown(){return this.tip&&this.tip.classList.contains(Ji)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=sn[e.toUpperCase()];return Re(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>this.toggle(t)));else if("manual"!==e){const t=e===en?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===en?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?nn:en]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?nn:en]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Zi),tn,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._config.originalTitle;t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ui.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.originalTitle=this._element.getAttribute("title")||"","number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=an.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(an);const ln={...an.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},cn={...an.DefaultType,content:"(null|string|element|function)"};class hn extends an{static get Default(){return ln}static get DefaultType(){return cn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=hn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(hn);const dn="click.bs.scrollspy",un="active",fn="[href]",pn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},gn={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class mn extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return pn}static get DefaultType(){return gn}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,dn),P.on(this._config.target,dn,fn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(fn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(un),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(un);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(un)}_clearActiveClass(t){t.classList.remove(un);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(un)}static jQueryInterface(t){return this.each((function(){const e=mn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))mn.getOrCreateInstance(t)})),g(mn);const _n="ArrowLeft",bn="ArrowRight",vn="ArrowUp",yn="ArrowDown",wn="active",An="fade",En="show",Tn='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;class On extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(wn),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(En)}),t,t.classList.contains(An)))}_deactivate(t,e){t&&(t.classList.remove(wn),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(En)}),t,t.classList.contains(An)))}_keydown(t){if(![_n,bn,vn,yn].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[bn,yn].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&On.getOrCreateInstance(i).show()}_getChildren(){return Q.find(Cn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",wn),n(".dropdown-menu",En),n(".dropdown-item",wn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(wn)}_getInnerElement(t){return t.matches(Cn)?t:Q.findOne(Cn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=On.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",Tn,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||On.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))On.getOrCreateInstance(t)})),g(On);const xn="hide",kn="show",Ln="showing",Dn={animation:"boolean",autohide:"boolean",delay:"number"},Sn={animation:!0,autohide:!0,delay:5e3};class In extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Sn}static get DefaultType(){return Dn}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(xn),d(this._element),this._element.classList.add(kn,Ln),this._queueCallback((()=>{this._element.classList.remove(Ln),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Ln),this._queueCallback((()=>{this._element.classList.add(xn),this._element.classList.remove(Ln,kn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(kn),super.dispose()}isShown(){return this._element.classList.contains(kn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=In.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(In),g(In),{Alert:q,Button:K,Carousel:at,Collapse:pt,Dropdown:li,Modal:Si,Offcanvas:Bi,Popover:hn,ScrollSpy:mn,Tab:On,Toast:In,Tooltip:an}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
.fa {
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: var(--fa-style, 900); }

.fa,
.fas,
.fa-solid,
.far,
.fa-regular,
.fal,
.fa-light,
.fat,
.fa-thin,
.fad,
.fa-duotone,
.fab,
.fa-brands {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto; }

.fa-1x {
  font-size: 1em; }

.fa-2x {
  font-size: 2em; }

.fa-3x {
  font-size: 3em; }

.fa-4x {
  font-size: 4em; }

.fa-5x {
  font-size: 5em; }

.fa-6x {
  font-size: 6em; }

.fa-7x {
  font-size: 7em; }

.fa-8x {
  font-size: 8em; }

.fa-9x {
  font-size: 9em; }

.fa-10x {
  font-size: 10em; }

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em; }

.fa-xs {
  font-size: 0.75em;
  line-height: 0.08333em;
  vertical-align: 0.125em; }

.fa-sm {
  font-size: 0.875em;
  line-height: 0.07143em;
  vertical-align: 0.05357em; }

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em; }

.fa-xl {
  font-size: 1.5em;
  line-height: 0.04167em;
  vertical-align: -0.125em; }

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em; }

.fa-fw {
  text-align: center;
  width: 1.25em; }

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0; }
  .fa-ul > li {
    position: relative; }

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit; }

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em); }

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em); }

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em); }

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out); }

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1)); }

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1)); }

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out); }

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear); }

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear); }

.fa-spin-reverse {
  --fa-animation-direction: reverse; }

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8)); }

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s; } }

@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1); }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25)); } }

@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1); }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25)); } }

@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); } }

@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0); }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em)); }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0); }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em)); }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0); } }

@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4); } }

@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4); } }

@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1); }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }

@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1); }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125)); } }

@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }

@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg)); } }

@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg); }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg); }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg); }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg); }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg); }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg); }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg); }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg); }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); } }

@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg); }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg); }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg); }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg); }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg); }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg); }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg); }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg); }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); } }

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg); }

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg); }

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1); }

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1); }

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1); }

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none)); }

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em; }

.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: var(--fa-stack-z-index, auto); }

.fa-stack-1x {
  line-height: inherit; }

.fa-stack-2x {
  font-size: 2em; }

.fa-inverse {
  color: var(--fa-inverse, #fff); }

/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
.fa-0::before {
  content: "\30"; }

.fa-1::before {
  content: "\31"; }

.fa-2::before {
  content: "\32"; }

.fa-3::before {
  content: "\33"; }

.fa-4::before {
  content: "\34"; }

.fa-5::before {
  content: "\35"; }

.fa-6::before {
  content: "\36"; }

.fa-7::before {
  content: "\37"; }

.fa-8::before {
  content: "\38"; }

.fa-9::before {
  content: "\39"; }

.fa-a::before {
  content: "\41"; }

.fa-address-book::before {
  content: "\f2b9"; }

.fa-contact-book::before {
  content: "\f2b9"; }

.fa-address-card::before {
  content: "\f2bb"; }

.fa-contact-card::before {
  content: "\f2bb"; }

.fa-vcard::before {
  content: "\f2bb"; }

.fa-align-center::before {
  content: "\f037"; }

.fa-align-justify::before {
  content: "\f039"; }

.fa-align-left::before {
  content: "\f036"; }

.fa-align-right::before {
  content: "\f038"; }

.fa-anchor::before {
  content: "\f13d"; }

.fa-anchor-circle-check::before {
  content: "\e4aa"; }

.fa-anchor-circle-exclamation::before {
  content: "\e4ab"; }

.fa-anchor-circle-xmark::before {
  content: "\e4ac"; }

.fa-anchor-lock::before {
  content: "\e4ad"; }

.fa-angle-down::before {
  content: "\f107"; }

.fa-angle-left::before {
  content: "\f104"; }

.fa-angle-right::before {
  content: "\f105"; }

.fa-angle-up::before {
  content: "\f106"; }

.fa-angles-down::before {
  content: "\f103"; }

.fa-angle-double-down::before {
  content: "\f103"; }

.fa-angles-left::before {
  content: "\f100"; }

.fa-angle-double-left::before {
  content: "\f100"; }

.fa-angles-right::before {
  content: "\f101"; }

.fa-angle-double-right::before {
  content: "\f101"; }

.fa-angles-up::before {
  content: "\f102"; }

.fa-angle-double-up::before {
  content: "\f102"; }

.fa-ankh::before {
  content: "\f644"; }

.fa-apple-whole::before {
  content: "\f5d1"; }

.fa-apple-alt::before {
  content: "\f5d1"; }

.fa-archway::before {
  content: "\f557"; }

.fa-arrow-down::before {
  content: "\f063"; }

.fa-arrow-down-1-9::before {
  content: "\f162"; }

.fa-sort-numeric-asc::before {
  content: "\f162"; }

.fa-sort-numeric-down::before {
  content: "\f162"; }

.fa-arrow-down-9-1::before {
  content: "\f886"; }

.fa-sort-numeric-desc::before {
  content: "\f886"; }

.fa-sort-numeric-down-alt::before {
  content: "\f886"; }

.fa-arrow-down-a-z::before {
  content: "\f15d"; }

.fa-sort-alpha-asc::before {
  content: "\f15d"; }

.fa-sort-alpha-down::before {
  content: "\f15d"; }

.fa-arrow-down-long::before {
  content: "\f175"; }

.fa-long-arrow-down::before {
  content: "\f175"; }

.fa-arrow-down-short-wide::before {
  content: "\f884"; }

.fa-sort-amount-desc::before {
  content: "\f884"; }

.fa-sort-amount-down-alt::before {
  content: "\f884"; }

.fa-arrow-down-up-across-line::before {
  content: "\e4af"; }

.fa-arrow-down-up-lock::before {
  content: "\e4b0"; }

.fa-arrow-down-wide-short::before {
  content: "\f160"; }

.fa-sort-amount-asc::before {
  content: "\f160"; }

.fa-sort-amount-down::before {
  content: "\f160"; }

.fa-arrow-down-z-a::before {
  content: "\f881"; }

.fa-sort-alpha-desc::before {
  content: "\f881"; }

.fa-sort-alpha-down-alt::before {
  content: "\f881"; }

.fa-arrow-left::before {
  content: "\f060"; }

.fa-arrow-left-long::before {
  content: "\f177"; }

.fa-long-arrow-left::before {
  content: "\f177"; }

.fa-arrow-pointer::before {
  content: "\f245"; }

.fa-mouse-pointer::before {
  content: "\f245"; }

.fa-arrow-right::before {
  content: "\f061"; }

.fa-arrow-right-arrow-left::before {
  content: "\f0ec"; }

.fa-exchange::before {
  content: "\f0ec"; }

.fa-arrow-right-from-bracket::before {
  content: "\f08b"; }

.fa-sign-out::before {
  content: "\f08b"; }

.fa-arrow-right-long::before {
  content: "\f178"; }

.fa-long-arrow-right::before {
  content: "\f178"; }

.fa-arrow-right-to-bracket::before {
  content: "\f090"; }

.fa-sign-in::before {
  content: "\f090"; }

.fa-arrow-right-to-city::before {
  content: "\e4b3"; }

.fa-arrow-rotate-left::before {
  content: "\f0e2"; }

.fa-arrow-left-rotate::before {
  content: "\f0e2"; }

.fa-arrow-rotate-back::before {
  content: "\f0e2"; }

.fa-arrow-rotate-backward::before {
  content: "\f0e2"; }

.fa-undo::before {
  content: "\f0e2"; }

.fa-arrow-rotate-right::before {
  content: "\f01e"; }

.fa-arrow-right-rotate::before {
  content: "\f01e"; }

.fa-arrow-rotate-forward::before {
  content: "\f01e"; }

.fa-redo::before {
  content: "\f01e"; }

.fa-arrow-trend-down::before {
  content: "\e097"; }

.fa-arrow-trend-up::before {
  content: "\e098"; }

.fa-arrow-turn-down::before {
  content: "\f149"; }

.fa-level-down::before {
  content: "\f149"; }

.fa-arrow-turn-up::before {
  content: "\f148"; }

.fa-level-up::before {
  content: "\f148"; }

.fa-arrow-up::before {
  content: "\f062"; }

.fa-arrow-up-1-9::before {
  content: "\f163"; }

.fa-sort-numeric-up::before {
  content: "\f163"; }

.fa-arrow-up-9-1::before {
  content: "\f887"; }

.fa-sort-numeric-up-alt::before {
  content: "\f887"; }

.fa-arrow-up-a-z::before {
  content: "\f15e"; }

.fa-sort-alpha-up::before {
  content: "\f15e"; }

.fa-arrow-up-from-bracket::before {
  content: "\e09a"; }

.fa-arrow-up-from-ground-water::before {
  content: "\e4b5"; }

.fa-arrow-up-from-water-pump::before {
  content: "\e4b6"; }

.fa-arrow-up-long::before {
  content: "\f176"; }

.fa-long-arrow-up::before {
  content: "\f176"; }

.fa-arrow-up-right-dots::before {
  content: "\e4b7"; }

.fa-arrow-up-right-from-square::before {
  content: "\f08e"; }

.fa-external-link::before {
  content: "\f08e"; }

.fa-arrow-up-short-wide::before {
  content: "\f885"; }

.fa-sort-amount-up-alt::before {
  content: "\f885"; }

.fa-arrow-up-wide-short::before {
  content: "\f161"; }

.fa-sort-amount-up::before {
  content: "\f161"; }

.fa-arrow-up-z-a::before {
  content: "\f882"; }

.fa-sort-alpha-up-alt::before {
  content: "\f882"; }

.fa-arrows-down-to-line::before {
  content: "\e4b8"; }

.fa-arrows-down-to-people::before {
  content: "\e4b9"; }

.fa-arrows-left-right::before {
  content: "\f07e"; }

.fa-arrows-h::before {
  content: "\f07e"; }

.fa-arrows-left-right-to-line::before {
  content: "\e4ba"; }

.fa-arrows-rotate::before {
  content: "\f021"; }

.fa-refresh::before {
  content: "\f021"; }

.fa-sync::before {
  content: "\f021"; }

.fa-arrows-spin::before {
  content: "\e4bb"; }

.fa-arrows-split-up-and-left::before {
  content: "\e4bc"; }

.fa-arrows-to-circle::before {
  content: "\e4bd"; }

.fa-arrows-to-dot::before {
  content: "\e4be"; }

.fa-arrows-to-eye::before {
  content: "\e4bf"; }

.fa-arrows-turn-right::before {
  content: "\e4c0"; }

.fa-arrows-turn-to-dots::before {
  content: "\e4c1"; }

.fa-arrows-up-down::before {
  content: "\f07d"; }

.fa-arrows-v::before {
  content: "\f07d"; }

.fa-arrows-up-down-left-right::before {
  content: "\f047"; }

.fa-arrows::before {
  content: "\f047"; }

.fa-arrows-up-to-line::before {
  content: "\e4c2"; }

.fa-asterisk::before {
  content: "\2a"; }

.fa-at::before {
  content: "\40"; }

.fa-atom::before {
  content: "\f5d2"; }

.fa-audio-description::before {
  content: "\f29e"; }

.fa-austral-sign::before {
  content: "\e0a9"; }

.fa-award::before {
  content: "\f559"; }

.fa-b::before {
  content: "\42"; }

.fa-baby::before {
  content: "\f77c"; }

.fa-baby-carriage::before {
  content: "\f77d"; }

.fa-carriage-baby::before {
  content: "\f77d"; }

.fa-backward::before {
  content: "\f04a"; }

.fa-backward-fast::before {
  content: "\f049"; }

.fa-fast-backward::before {
  content: "\f049"; }

.fa-backward-step::before {
  content: "\f048"; }

.fa-step-backward::before {
  content: "\f048"; }

.fa-bacon::before {
  content: "\f7e5"; }

.fa-bacteria::before {
  content: "\e059"; }

.fa-bacterium::before {
  content: "\e05a"; }

.fa-bag-shopping::before {
  content: "\f290"; }

.fa-shopping-bag::before {
  content: "\f290"; }

.fa-bahai::before {
  content: "\f666"; }

.fa-baht-sign::before {
  content: "\e0ac"; }

.fa-ban::before {
  content: "\f05e"; }

.fa-cancel::before {
  content: "\f05e"; }

.fa-ban-smoking::before {
  content: "\f54d"; }

.fa-smoking-ban::before {
  content: "\f54d"; }

.fa-bandage::before {
  content: "\f462"; }

.fa-band-aid::before {
  content: "\f462"; }

.fa-barcode::before {
  content: "\f02a"; }

.fa-bars::before {
  content: "\f0c9"; }

.fa-navicon::before {
  content: "\f0c9"; }

.fa-bars-progress::before {
  content: "\f828"; }

.fa-tasks-alt::before {
  content: "\f828"; }

.fa-bars-staggered::before {
  content: "\f550"; }

.fa-reorder::before {
  content: "\f550"; }

.fa-stream::before {
  content: "\f550"; }

.fa-baseball::before {
  content: "\f433"; }

.fa-baseball-ball::before {
  content: "\f433"; }

.fa-baseball-bat-ball::before {
  content: "\f432"; }

.fa-basket-shopping::before {
  content: "\f291"; }

.fa-shopping-basket::before {
  content: "\f291"; }

.fa-basketball::before {
  content: "\f434"; }

.fa-basketball-ball::before {
  content: "\f434"; }

.fa-bath::before {
  content: "\f2cd"; }

.fa-bathtub::before {
  content: "\f2cd"; }

.fa-battery-empty::before {
  content: "\f244"; }

.fa-battery-0::before {
  content: "\f244"; }

.fa-battery-full::before {
  content: "\f240"; }

.fa-battery::before {
  content: "\f240"; }

.fa-battery-5::before {
  content: "\f240"; }

.fa-battery-half::before {
  content: "\f242"; }

.fa-battery-3::before {
  content: "\f242"; }

.fa-battery-quarter::before {
  content: "\f243"; }

.fa-battery-2::before {
  content: "\f243"; }

.fa-battery-three-quarters::before {
  content: "\f241"; }

.fa-battery-4::before {
  content: "\f241"; }

.fa-bed::before {
  content: "\f236"; }

.fa-bed-pulse::before {
  content: "\f487"; }

.fa-procedures::before {
  content: "\f487"; }

.fa-beer-mug-empty::before {
  content: "\f0fc"; }

.fa-beer::before {
  content: "\f0fc"; }

.fa-bell::before {
  content: "\f0f3"; }

.fa-bell-concierge::before {
  content: "\f562"; }

.fa-concierge-bell::before {
  content: "\f562"; }

.fa-bell-slash::before {
  content: "\f1f6"; }

.fa-bezier-curve::before {
  content: "\f55b"; }

.fa-bicycle::before {
  content: "\f206"; }

.fa-binoculars::before {
  content: "\f1e5"; }

.fa-biohazard::before {
  content: "\f780"; }

.fa-bitcoin-sign::before {
  content: "\e0b4"; }

.fa-blender::before {
  content: "\f517"; }

.fa-blender-phone::before {
  content: "\f6b6"; }

.fa-blog::before {
  content: "\f781"; }

.fa-bold::before {
  content: "\f032"; }

.fa-bolt::before {
  content: "\f0e7"; }

.fa-zap::before {
  content: "\f0e7"; }

.fa-bolt-lightning::before {
  content: "\e0b7"; }

.fa-bomb::before {
  content: "\f1e2"; }

.fa-bone::before {
  content: "\f5d7"; }

.fa-bong::before {
  content: "\f55c"; }

.fa-book::before {
  content: "\f02d"; }

.fa-book-atlas::before {
  content: "\f558"; }

.fa-atlas::before {
  content: "\f558"; }

.fa-book-bible::before {
  content: "\f647"; }

.fa-bible::before {
  content: "\f647"; }

.fa-book-bookmark::before {
  content: "\e0bb"; }

.fa-book-journal-whills::before {
  content: "\f66a"; }

.fa-journal-whills::before {
  content: "\f66a"; }

.fa-book-medical::before {
  content: "\f7e6"; }

.fa-book-open::before {
  content: "\f518"; }

.fa-book-open-reader::before {
  content: "\f5da"; }

.fa-book-reader::before {
  content: "\f5da"; }

.fa-book-quran::before {
  content: "\f687"; }

.fa-quran::before {
  content: "\f687"; }

.fa-book-skull::before {
  content: "\f6b7"; }

.fa-book-dead::before {
  content: "\f6b7"; }

.fa-bookmark::before {
  content: "\f02e"; }

.fa-border-all::before {
  content: "\f84c"; }

.fa-border-none::before {
  content: "\f850"; }

.fa-border-top-left::before {
  content: "\f853"; }

.fa-border-style::before {
  content: "\f853"; }

.fa-bore-hole::before {
  content: "\e4c3"; }

.fa-bottle-droplet::before {
  content: "\e4c4"; }

.fa-bottle-water::before {
  content: "\e4c5"; }

.fa-bowl-food::before {
  content: "\e4c6"; }

.fa-bowl-rice::before {
  content: "\e2eb"; }

.fa-bowling-ball::before {
  content: "\f436"; }

.fa-box::before {
  content: "\f466"; }

.fa-box-archive::before {
  content: "\f187"; }

.fa-archive::before {
  content: "\f187"; }

.fa-box-open::before {
  content: "\f49e"; }

.fa-box-tissue::before {
  content: "\e05b"; }

.fa-boxes-packing::before {
  content: "\e4c7"; }

.fa-boxes-stacked::before {
  content: "\f468"; }

.fa-boxes::before {
  content: "\f468"; }

.fa-boxes-alt::before {
  content: "\f468"; }

.fa-braille::before {
  content: "\f2a1"; }

.fa-brain::before {
  content: "\f5dc"; }

.fa-brazilian-real-sign::before {
  content: "\e46c"; }

.fa-bread-slice::before {
  content: "\f7ec"; }

.fa-bridge::before {
  content: "\e4c8"; }

.fa-bridge-circle-check::before {
  content: "\e4c9"; }

.fa-bridge-circle-exclamation::before {
  content: "\e4ca"; }

.fa-bridge-circle-xmark::before {
  content: "\e4cb"; }

.fa-bridge-lock::before {
  content: "\e4cc"; }

.fa-bridge-water::before {
  content: "\e4ce"; }

.fa-briefcase::before {
  content: "\f0b1"; }

.fa-briefcase-medical::before {
  content: "\f469"; }

.fa-broom::before {
  content: "\f51a"; }

.fa-broom-ball::before {
  content: "\f458"; }

.fa-quidditch::before {
  content: "\f458"; }

.fa-quidditch-broom-ball::before {
  content: "\f458"; }

.fa-brush::before {
  content: "\f55d"; }

.fa-bucket::before {
  content: "\e4cf"; }

.fa-bug::before {
  content: "\f188"; }

.fa-bug-slash::before {
  content: "\e490"; }

.fa-bugs::before {
  content: "\e4d0"; }

.fa-building::before {
  content: "\f1ad"; }

.fa-building-circle-arrow-right::before {
  content: "\e4d1"; }

.fa-building-circle-check::before {
  content: "\e4d2"; }

.fa-building-circle-exclamation::before {
  content: "\e4d3"; }

.fa-building-circle-xmark::before {
  content: "\e4d4"; }

.fa-building-columns::before {
  content: "\f19c"; }

.fa-bank::before {
  content: "\f19c"; }

.fa-institution::before {
  content: "\f19c"; }

.fa-museum::before {
  content: "\f19c"; }

.fa-university::before {
  content: "\f19c"; }

.fa-building-flag::before {
  content: "\e4d5"; }

.fa-building-lock::before {
  content: "\e4d6"; }

.fa-building-ngo::before {
  content: "\e4d7"; }

.fa-building-shield::before {
  content: "\e4d8"; }

.fa-building-un::before {
  content: "\e4d9"; }

.fa-building-user::before {
  content: "\e4da"; }

.fa-building-wheat::before {
  content: "\e4db"; }

.fa-bullhorn::before {
  content: "\f0a1"; }

.fa-bullseye::before {
  content: "\f140"; }

.fa-burger::before {
  content: "\f805"; }

.fa-hamburger::before {
  content: "\f805"; }

.fa-burst::before {
  content: "\e4dc"; }

.fa-bus::before {
  content: "\f207"; }

.fa-bus-simple::before {
  content: "\f55e"; }

.fa-bus-alt::before {
  content: "\f55e"; }

.fa-business-time::before {
  content: "\f64a"; }

.fa-briefcase-clock::before {
  content: "\f64a"; }

.fa-c::before {
  content: "\43"; }

.fa-cake-candles::before {
  content: "\f1fd"; }

.fa-birthday-cake::before {
  content: "\f1fd"; }

.fa-cake::before {
  content: "\f1fd"; }

.fa-calculator::before {
  content: "\f1ec"; }

.fa-calendar::before {
  content: "\f133"; }

.fa-calendar-check::before {
  content: "\f274"; }

.fa-calendar-day::before {
  content: "\f783"; }

.fa-calendar-days::before {
  content: "\f073"; }

.fa-calendar-alt::before {
  content: "\f073"; }

.fa-calendar-minus::before {
  content: "\f272"; }

.fa-calendar-plus::before {
  content: "\f271"; }

.fa-calendar-week::before {
  content: "\f784"; }

.fa-calendar-xmark::before {
  content: "\f273"; }

.fa-calendar-times::before {
  content: "\f273"; }

.fa-camera::before {
  content: "\f030"; }

.fa-camera-alt::before {
  content: "\f030"; }

.fa-camera-retro::before {
  content: "\f083"; }

.fa-camera-rotate::before {
  content: "\e0d8"; }

.fa-campground::before {
  content: "\f6bb"; }

.fa-candy-cane::before {
  content: "\f786"; }

.fa-cannabis::before {
  content: "\f55f"; }

.fa-capsules::before {
  content: "\f46b"; }

.fa-car::before {
  content: "\f1b9"; }

.fa-automobile::before {
  content: "\f1b9"; }

.fa-car-battery::before {
  content: "\f5df"; }

.fa-battery-car::before {
  content: "\f5df"; }

.fa-car-burst::before {
  content: "\f5e1"; }

.fa-car-crash::before {
  content: "\f5e1"; }

.fa-car-on::before {
  content: "\e4dd"; }

.fa-car-rear::before {
  content: "\f5de"; }

.fa-car-alt::before {
  content: "\f5de"; }

.fa-car-side::before {
  content: "\f5e4"; }

.fa-car-tunnel::before {
  content: "\e4de"; }

.fa-caravan::before {
  content: "\f8ff"; }

.fa-caret-down::before {
  content: "\f0d7"; }

.fa-caret-left::before {
  content: "\f0d9"; }

.fa-caret-right::before {
  content: "\f0da"; }

.fa-caret-up::before {
  content: "\f0d8"; }

.fa-carrot::before {
  content: "\f787"; }

.fa-cart-arrow-down::before {
  content: "\f218"; }

.fa-cart-flatbed::before {
  content: "\f474"; }

.fa-dolly-flatbed::before {
  content: "\f474"; }

.fa-cart-flatbed-suitcase::before {
  content: "\f59d"; }

.fa-luggage-cart::before {
  content: "\f59d"; }

.fa-cart-plus::before {
  content: "\f217"; }

.fa-cart-shopping::before {
  content: "\f07a"; }

.fa-shopping-cart::before {
  content: "\f07a"; }

.fa-cash-register::before {
  content: "\f788"; }

.fa-cat::before {
  content: "\f6be"; }

.fa-cedi-sign::before {
  content: "\e0df"; }

.fa-cent-sign::before {
  content: "\e3f5"; }

.fa-certificate::before {
  content: "\f0a3"; }

.fa-chair::before {
  content: "\f6c0"; }

.fa-chalkboard::before {
  content: "\f51b"; }

.fa-blackboard::before {
  content: "\f51b"; }

.fa-chalkboard-user::before {
  content: "\f51c"; }

.fa-chalkboard-teacher::before {
  content: "\f51c"; }

.fa-champagne-glasses::before {
  content: "\f79f"; }

.fa-glass-cheers::before {
  content: "\f79f"; }

.fa-charging-station::before {
  content: "\f5e7"; }

.fa-chart-area::before {
  content: "\f1fe"; }

.fa-area-chart::before {
  content: "\f1fe"; }

.fa-chart-bar::before {
  content: "\f080"; }

.fa-bar-chart::before {
  content: "\f080"; }

.fa-chart-column::before {
  content: "\e0e3"; }

.fa-chart-gantt::before {
  content: "\e0e4"; }

.fa-chart-line::before {
  content: "\f201"; }

.fa-line-chart::before {
  content: "\f201"; }

.fa-chart-pie::before {
  content: "\f200"; }

.fa-pie-chart::before {
  content: "\f200"; }

.fa-chart-simple::before {
  content: "\e473"; }

.fa-check::before {
  content: "\f00c"; }

.fa-check-double::before {
  content: "\f560"; }

.fa-check-to-slot::before {
  content: "\f772"; }

.fa-vote-yea::before {
  content: "\f772"; }

.fa-cheese::before {
  content: "\f7ef"; }

.fa-chess::before {
  content: "\f439"; }

.fa-chess-bishop::before {
  content: "\f43a"; }

.fa-chess-board::before {
  content: "\f43c"; }

.fa-chess-king::before {
  content: "\f43f"; }

.fa-chess-knight::before {
  content: "\f441"; }

.fa-chess-pawn::before {
  content: "\f443"; }

.fa-chess-queen::before {
  content: "\f445"; }

.fa-chess-rook::before {
  content: "\f447"; }

.fa-chevron-down::before {
  content: "\f078"; }

.fa-chevron-left::before {
  content: "\f053"; }

.fa-chevron-right::before {
  content: "\f054"; }

.fa-chevron-up::before {
  content: "\f077"; }

.fa-child::before {
  content: "\f1ae"; }

.fa-child-dress::before {
  content: "\e59c"; }

.fa-child-reaching::before {
  content: "\e59d"; }

.fa-child-rifle::before {
  content: "\e4e0"; }

.fa-children::before {
  content: "\e4e1"; }

.fa-church::before {
  content: "\f51d"; }

.fa-circle::before {
  content: "\f111"; }

.fa-circle-arrow-down::before {
  content: "\f0ab"; }

.fa-arrow-circle-down::before {
  content: "\f0ab"; }

.fa-circle-arrow-left::before {
  content: "\f0a8"; }

.fa-arrow-circle-left::before {
  content: "\f0a8"; }

.fa-circle-arrow-right::before {
  content: "\f0a9"; }

.fa-arrow-circle-right::before {
  content: "\f0a9"; }

.fa-circle-arrow-up::before {
  content: "\f0aa"; }

.fa-arrow-circle-up::before {
  content: "\f0aa"; }

.fa-circle-check::before {
  content: "\f058"; }

.fa-check-circle::before {
  content: "\f058"; }

.fa-circle-chevron-down::before {
  content: "\f13a"; }

.fa-chevron-circle-down::before {
  content: "\f13a"; }

.fa-circle-chevron-left::before {
  content: "\f137"; }

.fa-chevron-circle-left::before {
  content: "\f137"; }

.fa-circle-chevron-right::before {
  content: "\f138"; }

.fa-chevron-circle-right::before {
  content: "\f138"; }

.fa-circle-chevron-up::before {
  content: "\f139"; }

.fa-chevron-circle-up::before {
  content: "\f139"; }

.fa-circle-dollar-to-slot::before {
  content: "\f4b9"; }

.fa-donate::before {
  content: "\f4b9"; }

.fa-circle-dot::before {
  content: "\f192"; }

.fa-dot-circle::before {
  content: "\f192"; }

.fa-circle-down::before {
  content: "\f358"; }

.fa-arrow-alt-circle-down::before {
  content: "\f358"; }

.fa-circle-exclamation::before {
  content: "\f06a"; }

.fa-exclamation-circle::before {
  content: "\f06a"; }

.fa-circle-h::before {
  content: "\f47e"; }

.fa-hospital-symbol::before {
  content: "\f47e"; }

.fa-circle-half-stroke::before {
  content: "\f042"; }

.fa-adjust::before {
  content: "\f042"; }

.fa-circle-info::before {
  content: "\f05a"; }

.fa-info-circle::before {
  content: "\f05a"; }

.fa-circle-left::before {
  content: "\f359"; }

.fa-arrow-alt-circle-left::before {
  content: "\f359"; }

.fa-circle-minus::before {
  content: "\f056"; }

.fa-minus-circle::before {
  content: "\f056"; }

.fa-circle-nodes::before {
  content: "\e4e2"; }

.fa-circle-notch::before {
  content: "\f1ce"; }

.fa-circle-pause::before {
  content: "\f28b"; }

.fa-pause-circle::before {
  content: "\f28b"; }

.fa-circle-play::before {
  content: "\f144"; }

.fa-play-circle::before {
  content: "\f144"; }

.fa-circle-plus::before {
  content: "\f055"; }

.fa-plus-circle::before {
  content: "\f055"; }

.fa-circle-question::before {
  content: "\f059"; }

.fa-question-circle::before {
  content: "\f059"; }

.fa-circle-radiation::before {
  content: "\f7ba"; }

.fa-radiation-alt::before {
  content: "\f7ba"; }

.fa-circle-right::before {
  content: "\f35a"; }

.fa-arrow-alt-circle-right::before {
  content: "\f35a"; }

.fa-circle-stop::before {
  content: "\f28d"; }

.fa-stop-circle::before {
  content: "\f28d"; }

.fa-circle-up::before {
  content: "\f35b"; }

.fa-arrow-alt-circle-up::before {
  content: "\f35b"; }

.fa-circle-user::before {
  content: "\f2bd"; }

.fa-user-circle::before {
  content: "\f2bd"; }

.fa-circle-xmark::before {
  content: "\f057"; }

.fa-times-circle::before {
  content: "\f057"; }

.fa-xmark-circle::before {
  content: "\f057"; }

.fa-city::before {
  content: "\f64f"; }

.fa-clapperboard::before {
  content: "\e131"; }

.fa-clipboard::before {
  content: "\f328"; }

.fa-clipboard-check::before {
  content: "\f46c"; }

.fa-clipboard-list::before {
  content: "\f46d"; }

.fa-clipboard-question::before {
  content: "\e4e3"; }

.fa-clipboard-user::before {
  content: "\f7f3"; }

.fa-clock::before {
  content: "\f017"; }

.fa-clock-four::before {
  content: "\f017"; }

.fa-clock-rotate-left::before {
  content: "\f1da"; }

.fa-history::before {
  content: "\f1da"; }

.fa-clone::before {
  content: "\f24d"; }

.fa-closed-captioning::before {
  content: "\f20a"; }

.fa-cloud::before {
  content: "\f0c2"; }

.fa-cloud-arrow-down::before {
  content: "\f0ed"; }

.fa-cloud-download::before {
  content: "\f0ed"; }

.fa-cloud-download-alt::before {
  content: "\f0ed"; }

.fa-cloud-arrow-up::before {
  content: "\f0ee"; }

.fa-cloud-upload::before {
  content: "\f0ee"; }

.fa-cloud-upload-alt::before {
  content: "\f0ee"; }

.fa-cloud-bolt::before {
  content: "\f76c"; }

.fa-thunderstorm::before {
  content: "\f76c"; }

.fa-cloud-meatball::before {
  content: "\f73b"; }

.fa-cloud-moon::before {
  content: "\f6c3"; }

.fa-cloud-moon-rain::before {
  content: "\f73c"; }

.fa-cloud-rain::before {
  content: "\f73d"; }

.fa-cloud-showers-heavy::before {
  content: "\f740"; }

.fa-cloud-showers-water::before {
  content: "\e4e4"; }

.fa-cloud-sun::before {
  content: "\f6c4"; }

.fa-cloud-sun-rain::before {
  content: "\f743"; }

.fa-clover::before {
  content: "\e139"; }

.fa-code::before {
  content: "\f121"; }

.fa-code-branch::before {
  content: "\f126"; }

.fa-code-commit::before {
  content: "\f386"; }

.fa-code-compare::before {
  content: "\e13a"; }

.fa-code-fork::before {
  content: "\e13b"; }

.fa-code-merge::before {
  content: "\f387"; }

.fa-code-pull-request::before {
  content: "\e13c"; }

.fa-coins::before {
  content: "\f51e"; }

.fa-colon-sign::before {
  content: "\e140"; }

.fa-comment::before {
  content: "\f075"; }

.fa-comment-dollar::before {
  content: "\f651"; }

.fa-comment-dots::before {
  content: "\f4ad"; }

.fa-commenting::before {
  content: "\f4ad"; }

.fa-comment-medical::before {
  content: "\f7f5"; }

.fa-comment-slash::before {
  content: "\f4b3"; }

.fa-comment-sms::before {
  content: "\f7cd"; }

.fa-sms::before {
  content: "\f7cd"; }

.fa-comments::before {
  content: "\f086"; }

.fa-comments-dollar::before {
  content: "\f653"; }

.fa-compact-disc::before {
  content: "\f51f"; }

.fa-compass::before {
  content: "\f14e"; }

.fa-compass-drafting::before {
  content: "\f568"; }

.fa-drafting-compass::before {
  content: "\f568"; }

.fa-compress::before {
  content: "\f066"; }

.fa-computer::before {
  content: "\e4e5"; }

.fa-computer-mouse::before {
  content: "\f8cc"; }

.fa-mouse::before {
  content: "\f8cc"; }

.fa-cookie::before {
  content: "\f563"; }

.fa-cookie-bite::before {
  content: "\f564"; }

.fa-copy::before {
  content: "\f0c5"; }

.fa-copyright::before {
  content: "\f1f9"; }

.fa-couch::before {
  content: "\f4b8"; }

.fa-cow::before {
  content: "\f6c8"; }

.fa-credit-card::before {
  content: "\f09d"; }

.fa-credit-card-alt::before {
  content: "\f09d"; }

.fa-crop::before {
  content: "\f125"; }

.fa-crop-simple::before {
  content: "\f565"; }

.fa-crop-alt::before {
  content: "\f565"; }

.fa-cross::before {
  content: "\f654"; }

.fa-crosshairs::before {
  content: "\f05b"; }

.fa-crow::before {
  content: "\f520"; }

.fa-crown::before {
  content: "\f521"; }

.fa-crutch::before {
  content: "\f7f7"; }

.fa-cruzeiro-sign::before {
  content: "\e152"; }

.fa-cube::before {
  content: "\f1b2"; }

.fa-cubes::before {
  content: "\f1b3"; }

.fa-cubes-stacked::before {
  content: "\e4e6"; }

.fa-d::before {
  content: "\44"; }

.fa-database::before {
  content: "\f1c0"; }

.fa-delete-left::before {
  content: "\f55a"; }

.fa-backspace::before {
  content: "\f55a"; }

.fa-democrat::before {
  content: "\f747"; }

.fa-desktop::before {
  content: "\f390"; }

.fa-desktop-alt::before {
  content: "\f390"; }

.fa-dharmachakra::before {
  content: "\f655"; }

.fa-diagram-next::before {
  content: "\e476"; }

.fa-diagram-predecessor::before {
  content: "\e477"; }

.fa-diagram-project::before {
  content: "\f542"; }

.fa-project-diagram::before {
  content: "\f542"; }

.fa-diagram-successor::before {
  content: "\e47a"; }

.fa-diamond::before {
  content: "\f219"; }

.fa-diamond-turn-right::before {
  content: "\f5eb"; }

.fa-directions::before {
  content: "\f5eb"; }

.fa-dice::before {
  content: "\f522"; }

.fa-dice-d20::before {
  content: "\f6cf"; }

.fa-dice-d6::before {
  content: "\f6d1"; }

.fa-dice-five::before {
  content: "\f523"; }

.fa-dice-four::before {
  content: "\f524"; }

.fa-dice-one::before {
  content: "\f525"; }

.fa-dice-six::before {
  content: "\f526"; }

.fa-dice-three::before {
  content: "\f527"; }

.fa-dice-two::before {
  content: "\f528"; }

.fa-disease::before {
  content: "\f7fa"; }

.fa-display::before {
  content: "\e163"; }

.fa-divide::before {
  content: "\f529"; }

.fa-dna::before {
  content: "\f471"; }

.fa-dog::before {
  content: "\f6d3"; }

.fa-dollar-sign::before {
  content: "\24"; }

.fa-dollar::before {
  content: "\24"; }

.fa-usd::before {
  content: "\24"; }

.fa-dolly::before {
  content: "\f472"; }

.fa-dolly-box::before {
  content: "\f472"; }

.fa-dong-sign::before {
  content: "\e169"; }

.fa-door-closed::before {
  content: "\f52a"; }

.fa-door-open::before {
  content: "\f52b"; }

.fa-dove::before {
  content: "\f4ba"; }

.fa-down-left-and-up-right-to-center::before {
  content: "\f422"; }

.fa-compress-alt::before {
  content: "\f422"; }

.fa-down-long::before {
  content: "\f309"; }

.fa-long-arrow-alt-down::before {
  content: "\f309"; }

.fa-download::before {
  content: "\f019"; }

.fa-dragon::before {
  content: "\f6d5"; }

.fa-draw-polygon::before {
  content: "\f5ee"; }

.fa-droplet::before {
  content: "\f043"; }

.fa-tint::before {
  content: "\f043"; }

.fa-droplet-slash::before {
  content: "\f5c7"; }

.fa-tint-slash::before {
  content: "\f5c7"; }

.fa-drum::before {
  content: "\f569"; }

.fa-drum-steelpan::before {
  content: "\f56a"; }

.fa-drumstick-bite::before {
  content: "\f6d7"; }

.fa-dumbbell::before {
  content: "\f44b"; }

.fa-dumpster::before {
  content: "\f793"; }

.fa-dumpster-fire::before {
  content: "\f794"; }

.fa-dungeon::before {
  content: "\f6d9"; }

.fa-e::before {
  content: "\45"; }

.fa-ear-deaf::before {
  content: "\f2a4"; }

.fa-deaf::before {
  content: "\f2a4"; }

.fa-deafness::before {
  content: "\f2a4"; }

.fa-hard-of-hearing::before {
  content: "\f2a4"; }

.fa-ear-listen::before {
  content: "\f2a2"; }

.fa-assistive-listening-systems::before {
  content: "\f2a2"; }

.fa-earth-africa::before {
  content: "\f57c"; }

.fa-globe-africa::before {
  content: "\f57c"; }

.fa-earth-americas::before {
  content: "\f57d"; }

.fa-earth::before {
  content: "\f57d"; }

.fa-earth-america::before {
  content: "\f57d"; }

.fa-globe-americas::before {
  content: "\f57d"; }

.fa-earth-asia::before {
  content: "\f57e"; }

.fa-globe-asia::before {
  content: "\f57e"; }

.fa-earth-europe::before {
  content: "\f7a2"; }

.fa-globe-europe::before {
  content: "\f7a2"; }

.fa-earth-oceania::before {
  content: "\e47b"; }

.fa-globe-oceania::before {
  content: "\e47b"; }

.fa-egg::before {
  content: "\f7fb"; }

.fa-eject::before {
  content: "\f052"; }

.fa-elevator::before {
  content: "\e16d"; }

.fa-ellipsis::before {
  content: "\f141"; }

.fa-ellipsis-h::before {
  content: "\f141"; }

.fa-ellipsis-vertical::before {
  content: "\f142"; }

.fa-ellipsis-v::before {
  content: "\f142"; }

.fa-envelope::before {
  content: "\f0e0"; }

.fa-envelope-circle-check::before {
  content: "\e4e8"; }

.fa-envelope-open::before {
  content: "\f2b6"; }

.fa-envelope-open-text::before {
  content: "\f658"; }

.fa-envelopes-bulk::before {
  content: "\f674"; }

.fa-mail-bulk::before {
  content: "\f674"; }

.fa-equals::before {
  content: "\3d"; }

.fa-eraser::before {
  content: "\f12d"; }

.fa-ethernet::before {
  content: "\f796"; }

.fa-euro-sign::before {
  content: "\f153"; }

.fa-eur::before {
  content: "\f153"; }

.fa-euro::before {
  content: "\f153"; }

.fa-exclamation::before {
  content: "\21"; }

.fa-expand::before {
  content: "\f065"; }

.fa-explosion::before {
  content: "\e4e9"; }

.fa-eye::before {
  content: "\f06e"; }

.fa-eye-dropper::before {
  content: "\f1fb"; }

.fa-eye-dropper-empty::before {
  content: "\f1fb"; }

.fa-eyedropper::before {
  content: "\f1fb"; }

.fa-eye-low-vision::before {
  content: "\f2a8"; }

.fa-low-vision::before {
  content: "\f2a8"; }

.fa-eye-slash::before {
  content: "\f070"; }

.fa-f::before {
  content: "\46"; }

.fa-face-angry::before {
  content: "\f556"; }

.fa-angry::before {
  content: "\f556"; }

.fa-face-dizzy::before {
  content: "\f567"; }

.fa-dizzy::before {
  content: "\f567"; }

.fa-face-flushed::before {
  content: "\f579"; }

.fa-flushed::before {
  content: "\f579"; }

.fa-face-frown::before {
  content: "\f119"; }

.fa-frown::before {
  content: "\f119"; }

.fa-face-frown-open::before {
  content: "\f57a"; }

.fa-frown-open::before {
  content: "\f57a"; }

.fa-face-grimace::before {
  content: "\f57f"; }

.fa-grimace::before {
  content: "\f57f"; }

.fa-face-grin::before {
  content: "\f580"; }

.fa-grin::before {
  content: "\f580"; }

.fa-face-grin-beam::before {
  content: "\f582"; }

.fa-grin-beam::before {
  content: "\f582"; }

.fa-face-grin-beam-sweat::before {
  content: "\f583"; }

.fa-grin-beam-sweat::before {
  content: "\f583"; }

.fa-face-grin-hearts::before {
  content: "\f584"; }

.fa-grin-hearts::before {
  content: "\f584"; }

.fa-face-grin-squint::before {
  content: "\f585"; }

.fa-grin-squint::before {
  content: "\f585"; }

.fa-face-grin-squint-tears::before {
  content: "\f586"; }

.fa-grin-squint-tears::before {
  content: "\f586"; }

.fa-face-grin-stars::before {
  content: "\f587"; }

.fa-grin-stars::before {
  content: "\f587"; }

.fa-face-grin-tears::before {
  content: "\f588"; }

.fa-grin-tears::before {
  content: "\f588"; }

.fa-face-grin-tongue::before {
  content: "\f589"; }

.fa-grin-tongue::before {
  content: "\f589"; }

.fa-face-grin-tongue-squint::before {
  content: "\f58a"; }

.fa-grin-tongue-squint::before {
  content: "\f58a"; }

.fa-face-grin-tongue-wink::before {
  content: "\f58b"; }

.fa-grin-tongue-wink::before {
  content: "\f58b"; }

.fa-face-grin-wide::before {
  content: "\f581"; }

.fa-grin-alt::before {
  content: "\f581"; }

.fa-face-grin-wink::before {
  content: "\f58c"; }

.fa-grin-wink::before {
  content: "\f58c"; }

.fa-face-kiss::before {
  content: "\f596"; }

.fa-kiss::before {
  content: "\f596"; }

.fa-face-kiss-beam::before {
  content: "\f597"; }

.fa-kiss-beam::before {
  content: "\f597"; }

.fa-face-kiss-wink-heart::before {
  content: "\f598"; }

.fa-kiss-wink-heart::before {
  content: "\f598"; }

.fa-face-laugh::before {
  content: "\f599"; }

.fa-laugh::before {
  content: "\f599"; }

.fa-face-laugh-beam::before {
  content: "\f59a"; }

.fa-laugh-beam::before {
  content: "\f59a"; }

.fa-face-laugh-squint::before {
  content: "\f59b"; }

.fa-laugh-squint::before {
  content: "\f59b"; }

.fa-face-laugh-wink::before {
  content: "\f59c"; }

.fa-laugh-wink::before {
  content: "\f59c"; }

.fa-face-meh::before {
  content: "\f11a"; }

.fa-meh::before {
  content: "\f11a"; }

.fa-face-meh-blank::before {
  content: "\f5a4"; }

.fa-meh-blank::before {
  content: "\f5a4"; }

.fa-face-rolling-eyes::before {
  content: "\f5a5"; }

.fa-meh-rolling-eyes::before {
  content: "\f5a5"; }

.fa-face-sad-cry::before {
  content: "\f5b3"; }

.fa-sad-cry::before {
  content: "\f5b3"; }

.fa-face-sad-tear::before {
  content: "\f5b4"; }

.fa-sad-tear::before {
  content: "\f5b4"; }

.fa-face-smile::before {
  content: "\f118"; }

.fa-smile::before {
  content: "\f118"; }

.fa-face-smile-beam::before {
  content: "\f5b8"; }

.fa-smile-beam::before {
  content: "\f5b8"; }

.fa-face-smile-wink::before {
  content: "\f4da"; }

.fa-smile-wink::before {
  content: "\f4da"; }

.fa-face-surprise::before {
  content: "\f5c2"; }

.fa-surprise::before {
  content: "\f5c2"; }

.fa-face-tired::before {
  content: "\f5c8"; }

.fa-tired::before {
  content: "\f5c8"; }

.fa-fan::before {
  content: "\f863"; }

.fa-faucet::before {
  content: "\e005"; }

.fa-faucet-drip::before {
  content: "\e006"; }

.fa-fax::before {
  content: "\f1ac"; }

.fa-feather::before {
  content: "\f52d"; }

.fa-feather-pointed::before {
  content: "\f56b"; }

.fa-feather-alt::before {
  content: "\f56b"; }

.fa-ferry::before {
  content: "\e4ea"; }

.fa-file::before {
  content: "\f15b"; }

.fa-file-arrow-down::before {
  content: "\f56d"; }

.fa-file-download::before {
  content: "\f56d"; }

.fa-file-arrow-up::before {
  content: "\f574"; }

.fa-file-upload::before {
  content: "\f574"; }

.fa-file-audio::before {
  content: "\f1c7"; }

.fa-file-circle-check::before {
  content: "\e493"; }

.fa-file-circle-exclamation::before {
  content: "\e4eb"; }

.fa-file-circle-minus::before {
  content: "\e4ed"; }

.fa-file-circle-plus::before {
  content: "\e4ee"; }

.fa-file-circle-question::before {
  content: "\e4ef"; }

.fa-file-circle-xmark::before {
  content: "\e494"; }

.fa-file-code::before {
  content: "\f1c9"; }

.fa-file-contract::before {
  content: "\f56c"; }

.fa-file-csv::before {
  content: "\f6dd"; }

.fa-file-excel::before {
  content: "\f1c3"; }

.fa-file-export::before {
  content: "\f56e"; }

.fa-arrow-right-from-file::before {
  content: "\f56e"; }

.fa-file-image::before {
  content: "\f1c5"; }

.fa-file-import::before {
  content: "\f56f"; }

.fa-arrow-right-to-file::before {
  content: "\f56f"; }

.fa-file-invoice::before {
  content: "\f570"; }

.fa-file-invoice-dollar::before {
  content: "\f571"; }

.fa-file-lines::before {
  content: "\f15c"; }

.fa-file-alt::before {
  content: "\f15c"; }

.fa-file-text::before {
  content: "\f15c"; }

.fa-file-medical::before {
  content: "\f477"; }

.fa-file-pdf::before {
  content: "\f1c1"; }

.fa-file-pen::before {
  content: "\f31c"; }

.fa-file-edit::before {
  content: "\f31c"; }

.fa-file-powerpoint::before {
  content: "\f1c4"; }

.fa-file-prescription::before {
  content: "\f572"; }

.fa-file-shield::before {
  content: "\e4f0"; }

.fa-file-signature::before {
  content: "\f573"; }

.fa-file-video::before {
  content: "\f1c8"; }

.fa-file-waveform::before {
  content: "\f478"; }

.fa-file-medical-alt::before {
  content: "\f478"; }

.fa-file-word::before {
  content: "\f1c2"; }

.fa-file-zipper::before {
  content: "\f1c6"; }

.fa-file-archive::before {
  content: "\f1c6"; }

.fa-fill::before {
  content: "\f575"; }

.fa-fill-drip::before {
  content: "\f576"; }

.fa-film::before {
  content: "\f008"; }

.fa-filter::before {
  content: "\f0b0"; }

.fa-filter-circle-dollar::before {
  content: "\f662"; }

.fa-funnel-dollar::before {
  content: "\f662"; }

.fa-filter-circle-xmark::before {
  content: "\e17b"; }

.fa-fingerprint::before {
  content: "\f577"; }

.fa-fire::before {
  content: "\f06d"; }

.fa-fire-burner::before {
  content: "\e4f1"; }

.fa-fire-extinguisher::before {
  content: "\f134"; }

.fa-fire-flame-curved::before {
  content: "\f7e4"; }

.fa-fire-alt::before {
  content: "\f7e4"; }

.fa-fire-flame-simple::before {
  content: "\f46a"; }

.fa-burn::before {
  content: "\f46a"; }

.fa-fish::before {
  content: "\f578"; }

.fa-fish-fins::before {
  content: "\e4f2"; }

.fa-flag::before {
  content: "\f024"; }

.fa-flag-checkered::before {
  content: "\f11e"; }

.fa-flag-usa::before {
  content: "\f74d"; }

.fa-flask::before {
  content: "\f0c3"; }

.fa-flask-vial::before {
  content: "\e4f3"; }

.fa-floppy-disk::before {
  content: "\f0c7"; }

.fa-save::before {
  content: "\f0c7"; }

.fa-florin-sign::before {
  content: "\e184"; }

.fa-folder::before {
  content: "\f07b"; }

.fa-folder-blank::before {
  content: "\f07b"; }

.fa-folder-closed::before {
  content: "\e185"; }

.fa-folder-minus::before {
  content: "\f65d"; }

.fa-folder-open::before {
  content: "\f07c"; }

.fa-folder-plus::before {
  content: "\f65e"; }

.fa-folder-tree::before {
  content: "\f802"; }

.fa-font::before {
  content: "\f031"; }

.fa-football::before {
  content: "\f44e"; }

.fa-football-ball::before {
  content: "\f44e"; }

.fa-forward::before {
  content: "\f04e"; }

.fa-forward-fast::before {
  content: "\f050"; }

.fa-fast-forward::before {
  content: "\f050"; }

.fa-forward-step::before {
  content: "\f051"; }

.fa-step-forward::before {
  content: "\f051"; }

.fa-franc-sign::before {
  content: "\e18f"; }

.fa-frog::before {
  content: "\f52e"; }

.fa-futbol::before {
  content: "\f1e3"; }

.fa-futbol-ball::before {
  content: "\f1e3"; }

.fa-soccer-ball::before {
  content: "\f1e3"; }

.fa-g::before {
  content: "\47"; }

.fa-gamepad::before {
  content: "\f11b"; }

.fa-gas-pump::before {
  content: "\f52f"; }

.fa-gauge::before {
  content: "\f624"; }

.fa-dashboard::before {
  content: "\f624"; }

.fa-gauge-med::before {
  content: "\f624"; }

.fa-tachometer-alt-average::before {
  content: "\f624"; }

.fa-gauge-high::before {
  content: "\f625"; }

.fa-tachometer-alt::before {
  content: "\f625"; }

.fa-tachometer-alt-fast::before {
  content: "\f625"; }

.fa-gauge-simple::before {
  content: "\f629"; }

.fa-gauge-simple-med::before {
  content: "\f629"; }

.fa-tachometer-average::before {
  content: "\f629"; }

.fa-gauge-simple-high::before {
  content: "\f62a"; }

.fa-tachometer::before {
  content: "\f62a"; }

.fa-tachometer-fast::before {
  content: "\f62a"; }

.fa-gavel::before {
  content: "\f0e3"; }

.fa-legal::before {
  content: "\f0e3"; }

.fa-gear::before {
  content: "\f013"; }

.fa-cog::before {
  content: "\f013"; }

.fa-gears::before {
  content: "\f085"; }

.fa-cogs::before {
  content: "\f085"; }

.fa-gem::before {
  content: "\f3a5"; }

.fa-genderless::before {
  content: "\f22d"; }

.fa-ghost::before {
  content: "\f6e2"; }

.fa-gift::before {
  content: "\f06b"; }

.fa-gifts::before {
  content: "\f79c"; }

.fa-glass-water::before {
  content: "\e4f4"; }

.fa-glass-water-droplet::before {
  content: "\e4f5"; }

.fa-glasses::before {
  content: "\f530"; }

.fa-globe::before {
  content: "\f0ac"; }

.fa-golf-ball-tee::before {
  content: "\f450"; }

.fa-golf-ball::before {
  content: "\f450"; }

.fa-gopuram::before {
  content: "\f664"; }

.fa-graduation-cap::before {
  content: "\f19d"; }

.fa-mortar-board::before {
  content: "\f19d"; }

.fa-greater-than::before {
  content: "\3e"; }

.fa-greater-than-equal::before {
  content: "\f532"; }

.fa-grip::before {
  content: "\f58d"; }

.fa-grip-horizontal::before {
  content: "\f58d"; }

.fa-grip-lines::before {
  content: "\f7a4"; }

.fa-grip-lines-vertical::before {
  content: "\f7a5"; }

.fa-grip-vertical::before {
  content: "\f58e"; }

.fa-group-arrows-rotate::before {
  content: "\e4f6"; }

.fa-guarani-sign::before {
  content: "\e19a"; }

.fa-guitar::before {
  content: "\f7a6"; }

.fa-gun::before {
  content: "\e19b"; }

.fa-h::before {
  content: "\48"; }

.fa-hammer::before {
  content: "\f6e3"; }

.fa-hamsa::before {
  content: "\f665"; }

.fa-hand::before {
  content: "\f256"; }

.fa-hand-paper::before {
  content: "\f256"; }

.fa-hand-back-fist::before {
  content: "\f255"; }

.fa-hand-rock::before {
  content: "\f255"; }

.fa-hand-dots::before {
  content: "\f461"; }

.fa-allergies::before {
  content: "\f461"; }

.fa-hand-fist::before {
  content: "\f6de"; }

.fa-fist-raised::before {
  content: "\f6de"; }

.fa-hand-holding::before {
  content: "\f4bd"; }

.fa-hand-holding-dollar::before {
  content: "\f4c0"; }

.fa-hand-holding-usd::before {
  content: "\f4c0"; }

.fa-hand-holding-droplet::before {
  content: "\f4c1"; }

.fa-hand-holding-water::before {
  content: "\f4c1"; }

.fa-hand-holding-hand::before {
  content: "\e4f7"; }

.fa-hand-holding-heart::before {
  content: "\f4be"; }

.fa-hand-holding-medical::before {
  content: "\e05c"; }

.fa-hand-lizard::before {
  content: "\f258"; }

.fa-hand-middle-finger::before {
  content: "\f806"; }

.fa-hand-peace::before {
  content: "\f25b"; }

.fa-hand-point-down::before {
  content: "\f0a7"; }

.fa-hand-point-left::before {
  content: "\f0a5"; }

.fa-hand-point-right::before {
  content: "\f0a4"; }

.fa-hand-point-up::before {
  content: "\f0a6"; }

.fa-hand-pointer::before {
  content: "\f25a"; }

.fa-hand-scissors::before {
  content: "\f257"; }

.fa-hand-sparkles::before {
  content: "\e05d"; }

.fa-hand-spock::before {
  content: "\f259"; }

.fa-handcuffs::before {
  content: "\e4f8"; }

.fa-hands::before {
  content: "\f2a7"; }

.fa-sign-language::before {
  content: "\f2a7"; }

.fa-signing::before {
  content: "\f2a7"; }

.fa-hands-asl-interpreting::before {
  content: "\f2a3"; }

.fa-american-sign-language-interpreting::before {
  content: "\f2a3"; }

.fa-asl-interpreting::before {
  content: "\f2a3"; }

.fa-hands-american-sign-language-interpreting::before {
  content: "\f2a3"; }

.fa-hands-bound::before {
  content: "\e4f9"; }

.fa-hands-bubbles::before {
  content: "\e05e"; }

.fa-hands-wash::before {
  content: "\e05e"; }

.fa-hands-clapping::before {
  content: "\e1a8"; }

.fa-hands-holding::before {
  content: "\f4c2"; }

.fa-hands-holding-child::before {
  content: "\e4fa"; }

.fa-hands-holding-circle::before {
  content: "\e4fb"; }

.fa-hands-praying::before {
  content: "\f684"; }

.fa-praying-hands::before {
  content: "\f684"; }

.fa-handshake::before {
  content: "\f2b5"; }

.fa-handshake-angle::before {
  content: "\f4c4"; }

.fa-hands-helping::before {
  content: "\f4c4"; }

.fa-handshake-simple::before {
  content: "\f4c6"; }

.fa-handshake-alt::before {
  content: "\f4c6"; }

.fa-handshake-simple-slash::before {
  content: "\e05f"; }

.fa-handshake-alt-slash::before {
  content: "\e05f"; }

.fa-handshake-slash::before {
  content: "\e060"; }

.fa-hanukiah::before {
  content: "\f6e6"; }

.fa-hard-drive::before {
  content: "\f0a0"; }

.fa-hdd::before {
  content: "\f0a0"; }

.fa-hashtag::before {
  content: "\23"; }

.fa-hat-cowboy::before {
  content: "\f8c0"; }

.fa-hat-cowboy-side::before {
  content: "\f8c1"; }

.fa-hat-wizard::before {
  content: "\f6e8"; }

.fa-head-side-cough::before {
  content: "\e061"; }

.fa-head-side-cough-slash::before {
  content: "\e062"; }

.fa-head-side-mask::before {
  content: "\e063"; }

.fa-head-side-virus::before {
  content: "\e064"; }

.fa-heading::before {
  content: "\f1dc"; }

.fa-header::before {
  content: "\f1dc"; }

.fa-headphones::before {
  content: "\f025"; }

.fa-headphones-simple::before {
  content: "\f58f"; }

.fa-headphones-alt::before {
  content: "\f58f"; }

.fa-headset::before {
  content: "\f590"; }

.fa-heart::before {
  content: "\f004"; }

.fa-heart-circle-bolt::before {
  content: "\e4fc"; }

.fa-heart-circle-check::before {
  content: "\e4fd"; }

.fa-heart-circle-exclamation::before {
  content: "\e4fe"; }

.fa-heart-circle-minus::before {
  content: "\e4ff"; }

.fa-heart-circle-plus::before {
  content: "\e500"; }

.fa-heart-circle-xmark::before {
  content: "\e501"; }

.fa-heart-crack::before {
  content: "\f7a9"; }

.fa-heart-broken::before {
  content: "\f7a9"; }

.fa-heart-pulse::before {
  content: "\f21e"; }

.fa-heartbeat::before {
  content: "\f21e"; }

.fa-helicopter::before {
  content: "\f533"; }

.fa-helicopter-symbol::before {
  content: "\e502"; }

.fa-helmet-safety::before {
  content: "\f807"; }

.fa-hard-hat::before {
  content: "\f807"; }

.fa-hat-hard::before {
  content: "\f807"; }

.fa-helmet-un::before {
  content: "\e503"; }

.fa-highlighter::before {
  content: "\f591"; }

.fa-hill-avalanche::before {
  content: "\e507"; }

.fa-hill-rockslide::before {
  content: "\e508"; }

.fa-hippo::before {
  content: "\f6ed"; }

.fa-hockey-puck::before {
  content: "\f453"; }

.fa-holly-berry::before {
  content: "\f7aa"; }

.fa-horse::before {
  content: "\f6f0"; }

.fa-horse-head::before {
  content: "\f7ab"; }

.fa-hospital::before {
  content: "\f0f8"; }

.fa-hospital-alt::before {
  content: "\f0f8"; }

.fa-hospital-wide::before {
  content: "\f0f8"; }

.fa-hospital-user::before {
  content: "\f80d"; }

.fa-hot-tub-person::before {
  content: "\f593"; }

.fa-hot-tub::before {
  content: "\f593"; }

.fa-hotdog::before {
  content: "\f80f"; }

.fa-hotel::before {
  content: "\f594"; }

.fa-hourglass::before {
  content: "\f254"; }

.fa-hourglass-2::before {
  content: "\f254"; }

.fa-hourglass-half::before {
  content: "\f254"; }

.fa-hourglass-empty::before {
  content: "\f252"; }

.fa-hourglass-end::before {
  content: "\f253"; }

.fa-hourglass-3::before {
  content: "\f253"; }

.fa-hourglass-start::before {
  content: "\f251"; }

.fa-hourglass-1::before {
  content: "\f251"; }

.fa-house::before {
  content: "\f015"; }

.fa-home::before {
  content: "\f015"; }

.fa-home-alt::before {
  content: "\f015"; }

.fa-home-lg-alt::before {
  content: "\f015"; }

.fa-house-chimney::before {
  content: "\e3af"; }

.fa-home-lg::before {
  content: "\e3af"; }

.fa-house-chimney-crack::before {
  content: "\f6f1"; }

.fa-house-damage::before {
  content: "\f6f1"; }

.fa-house-chimney-medical::before {
  content: "\f7f2"; }

.fa-clinic-medical::before {
  content: "\f7f2"; }

.fa-house-chimney-user::before {
  content: "\e065"; }

.fa-house-chimney-window::before {
  content: "\e00d"; }

.fa-house-circle-check::before {
  content: "\e509"; }

.fa-house-circle-exclamation::before {
  content: "\e50a"; }

.fa-house-circle-xmark::before {
  content: "\e50b"; }

.fa-house-crack::before {
  content: "\e3b1"; }

.fa-house-fire::before {
  content: "\e50c"; }

.fa-house-flag::before {
  content: "\e50d"; }

.fa-house-flood-water::before {
  content: "\e50e"; }

.fa-house-flood-water-circle-arrow-right::before {
  content: "\e50f"; }

.fa-house-laptop::before {
  content: "\e066"; }

.fa-laptop-house::before {
  content: "\e066"; }

.fa-house-lock::before {
  content: "\e510"; }

.fa-house-medical::before {
  content: "\e3b2"; }

.fa-house-medical-circle-check::before {
  content: "\e511"; }

.fa-house-medical-circle-exclamation::before {
  content: "\e512"; }

.fa-house-medical-circle-xmark::before {
  content: "\e513"; }

.fa-house-medical-flag::before {
  content: "\e514"; }

.fa-house-signal::before {
  content: "\e012"; }

.fa-house-tsunami::before {
  content: "\e515"; }

.fa-house-user::before {
  content: "\e1b0"; }

.fa-home-user::before {
  content: "\e1b0"; }

.fa-hryvnia-sign::before {
  content: "\f6f2"; }

.fa-hryvnia::before {
  content: "\f6f2"; }

.fa-hurricane::before {
  content: "\f751"; }

.fa-i::before {
  content: "\49"; }

.fa-i-cursor::before {
  content: "\f246"; }

.fa-ice-cream::before {
  content: "\f810"; }

.fa-icicles::before {
  content: "\f7ad"; }

.fa-icons::before {
  content: "\f86d"; }

.fa-heart-music-camera-bolt::before {
  content: "\f86d"; }

.fa-id-badge::before {
  content: "\f2c1"; }

.fa-id-card::before {
  content: "\f2c2"; }

.fa-drivers-license::before {
  content: "\f2c2"; }

.fa-id-card-clip::before {
  content: "\f47f"; }

.fa-id-card-alt::before {
  content: "\f47f"; }

.fa-igloo::before {
  content: "\f7ae"; }

.fa-image::before {
  content: "\f03e"; }

.fa-image-portrait::before {
  content: "\f3e0"; }

.fa-portrait::before {
  content: "\f3e0"; }

.fa-images::before {
  content: "\f302"; }

.fa-inbox::before {
  content: "\f01c"; }

.fa-indent::before {
  content: "\f03c"; }

.fa-indian-rupee-sign::before {
  content: "\e1bc"; }

.fa-indian-rupee::before {
  content: "\e1bc"; }

.fa-inr::before {
  content: "\e1bc"; }

.fa-industry::before {
  content: "\f275"; }

.fa-infinity::before {
  content: "\f534"; }

.fa-info::before {
  content: "\f129"; }

.fa-italic::before {
  content: "\f033"; }

.fa-j::before {
  content: "\4a"; }

.fa-jar::before {
  content: "\e516"; }

.fa-jar-wheat::before {
  content: "\e517"; }

.fa-jedi::before {
  content: "\f669"; }

.fa-jet-fighter::before {
  content: "\f0fb"; }

.fa-fighter-jet::before {
  content: "\f0fb"; }

.fa-jet-fighter-up::before {
  content: "\e518"; }

.fa-joint::before {
  content: "\f595"; }

.fa-jug-detergent::before {
  content: "\e519"; }

.fa-k::before {
  content: "\4b"; }

.fa-kaaba::before {
  content: "\f66b"; }

.fa-key::before {
  content: "\f084"; }

.fa-keyboard::before {
  content: "\f11c"; }

.fa-khanda::before {
  content: "\f66d"; }

.fa-kip-sign::before {
  content: "\e1c4"; }

.fa-kit-medical::before {
  content: "\f479"; }

.fa-first-aid::before {
  content: "\f479"; }

.fa-kitchen-set::before {
  content: "\e51a"; }

.fa-kiwi-bird::before {
  content: "\f535"; }

.fa-l::before {
  content: "\4c"; }

.fa-land-mine-on::before {
  content: "\e51b"; }

.fa-landmark::before {
  content: "\f66f"; }

.fa-landmark-dome::before {
  content: "\f752"; }

.fa-landmark-alt::before {
  content: "\f752"; }

.fa-landmark-flag::before {
  content: "\e51c"; }

.fa-language::before {
  content: "\f1ab"; }

.fa-laptop::before {
  content: "\f109"; }

.fa-laptop-code::before {
  content: "\f5fc"; }

.fa-laptop-file::before {
  content: "\e51d"; }

.fa-laptop-medical::before {
  content: "\f812"; }

.fa-lari-sign::before {
  content: "\e1c8"; }

.fa-layer-group::before {
  content: "\f5fd"; }

.fa-leaf::before {
  content: "\f06c"; }

.fa-left-long::before {
  content: "\f30a"; }

.fa-long-arrow-alt-left::before {
  content: "\f30a"; }

.fa-left-right::before {
  content: "\f337"; }

.fa-arrows-alt-h::before {
  content: "\f337"; }

.fa-lemon::before {
  content: "\f094"; }

.fa-less-than::before {
  content: "\3c"; }

.fa-less-than-equal::before {
  content: "\f537"; }

.fa-life-ring::before {
  content: "\f1cd"; }

.fa-lightbulb::before {
  content: "\f0eb"; }

.fa-lines-leaning::before {
  content: "\e51e"; }

.fa-link::before {
  content: "\f0c1"; }

.fa-chain::before {
  content: "\f0c1"; }

.fa-link-slash::before {
  content: "\f127"; }

.fa-chain-broken::before {
  content: "\f127"; }

.fa-chain-slash::before {
  content: "\f127"; }

.fa-unlink::before {
  content: "\f127"; }

.fa-lira-sign::before {
  content: "\f195"; }

.fa-list::before {
  content: "\f03a"; }

.fa-list-squares::before {
  content: "\f03a"; }

.fa-list-check::before {
  content: "\f0ae"; }

.fa-tasks::before {
  content: "\f0ae"; }

.fa-list-ol::before {
  content: "\f0cb"; }

.fa-list-1-2::before {
  content: "\f0cb"; }

.fa-list-numeric::before {
  content: "\f0cb"; }

.fa-list-ul::before {
  content: "\f0ca"; }

.fa-list-dots::before {
  content: "\f0ca"; }

.fa-litecoin-sign::before {
  content: "\e1d3"; }

.fa-location-arrow::before {
  content: "\f124"; }

.fa-location-crosshairs::before {
  content: "\f601"; }

.fa-location::before {
  content: "\f601"; }

.fa-location-dot::before {
  content: "\f3c5"; }

.fa-map-marker-alt::before {
  content: "\f3c5"; }

.fa-location-pin::before {
  content: "\f041"; }

.fa-map-marker::before {
  content: "\f041"; }

.fa-location-pin-lock::before {
  content: "\e51f"; }

.fa-lock::before {
  content: "\f023"; }

.fa-lock-open::before {
  content: "\f3c1"; }

.fa-locust::before {
  content: "\e520"; }

.fa-lungs::before {
  content: "\f604"; }

.fa-lungs-virus::before {
  content: "\e067"; }

.fa-m::before {
  content: "\4d"; }

.fa-magnet::before {
  content: "\f076"; }

.fa-magnifying-glass::before {
  content: "\f002"; }

.fa-search::before {
  content: "\f002"; }

.fa-magnifying-glass-arrow-right::before {
  content: "\e521"; }

.fa-magnifying-glass-chart::before {
  content: "\e522"; }

.fa-magnifying-glass-dollar::before {
  content: "\f688"; }

.fa-search-dollar::before {
  content: "\f688"; }

.fa-magnifying-glass-location::before {
  content: "\f689"; }

.fa-search-location::before {
  content: "\f689"; }

.fa-magnifying-glass-minus::before {
  content: "\f010"; }

.fa-search-minus::before {
  content: "\f010"; }

.fa-magnifying-glass-plus::before {
  content: "\f00e"; }

.fa-search-plus::before {
  content: "\f00e"; }

.fa-manat-sign::before {
  content: "\e1d5"; }

.fa-map::before {
  content: "\f279"; }

.fa-map-location::before {
  content: "\f59f"; }

.fa-map-marked::before {
  content: "\f59f"; }

.fa-map-location-dot::before {
  content: "\f5a0"; }

.fa-map-marked-alt::before {
  content: "\f5a0"; }

.fa-map-pin::before {
  content: "\f276"; }

.fa-marker::before {
  content: "\f5a1"; }

.fa-mars::before {
  content: "\f222"; }

.fa-mars-and-venus::before {
  content: "\f224"; }

.fa-mars-and-venus-burst::before {
  content: "\e523"; }

.fa-mars-double::before {
  content: "\f227"; }

.fa-mars-stroke::before {
  content: "\f229"; }

.fa-mars-stroke-right::before {
  content: "\f22b"; }

.fa-mars-stroke-h::before {
  content: "\f22b"; }

.fa-mars-stroke-up::before {
  content: "\f22a"; }

.fa-mars-stroke-v::before {
  content: "\f22a"; }

.fa-martini-glass::before {
  content: "\f57b"; }

.fa-glass-martini-alt::before {
  content: "\f57b"; }

.fa-martini-glass-citrus::before {
  content: "\f561"; }

.fa-cocktail::before {
  content: "\f561"; }

.fa-martini-glass-empty::before {
  content: "\f000"; }

.fa-glass-martini::before {
  content: "\f000"; }

.fa-mask::before {
  content: "\f6fa"; }

.fa-mask-face::before {
  content: "\e1d7"; }

.fa-mask-ventilator::before {
  content: "\e524"; }

.fa-masks-theater::before {
  content: "\f630"; }

.fa-theater-masks::before {
  content: "\f630"; }

.fa-mattress-pillow::before {
  content: "\e525"; }

.fa-maximize::before {
  content: "\f31e"; }

.fa-expand-arrows-alt::before {
  content: "\f31e"; }

.fa-medal::before {
  content: "\f5a2"; }

.fa-memory::before {
  content: "\f538"; }

.fa-menorah::before {
  content: "\f676"; }

.fa-mercury::before {
  content: "\f223"; }

.fa-message::before {
  content: "\f27a"; }

.fa-comment-alt::before {
  content: "\f27a"; }

.fa-meteor::before {
  content: "\f753"; }

.fa-microchip::before {
  content: "\f2db"; }

.fa-microphone::before {
  content: "\f130"; }

.fa-microphone-lines::before {
  content: "\f3c9"; }

.fa-microphone-alt::before {
  content: "\f3c9"; }

.fa-microphone-lines-slash::before {
  content: "\f539"; }

.fa-microphone-alt-slash::before {
  content: "\f539"; }

.fa-microphone-slash::before {
  content: "\f131"; }

.fa-microscope::before {
  content: "\f610"; }

.fa-mill-sign::before {
  content: "\e1ed"; }

.fa-minimize::before {
  content: "\f78c"; }

.fa-compress-arrows-alt::before {
  content: "\f78c"; }

.fa-minus::before {
  content: "\f068"; }

.fa-subtract::before {
  content: "\f068"; }

.fa-mitten::before {
  content: "\f7b5"; }

.fa-mobile::before {
  content: "\f3ce"; }

.fa-mobile-android::before {
  content: "\f3ce"; }

.fa-mobile-phone::before {
  content: "\f3ce"; }

.fa-mobile-button::before {
  content: "\f10b"; }

.fa-mobile-retro::before {
  content: "\e527"; }

.fa-mobile-screen::before {
  content: "\f3cf"; }

.fa-mobile-android-alt::before {
  content: "\f3cf"; }

.fa-mobile-screen-button::before {
  content: "\f3cd"; }

.fa-mobile-alt::before {
  content: "\f3cd"; }

.fa-money-bill::before {
  content: "\f0d6"; }

.fa-money-bill-1::before {
  content: "\f3d1"; }

.fa-money-bill-alt::before {
  content: "\f3d1"; }

.fa-money-bill-1-wave::before {
  content: "\f53b"; }

.fa-money-bill-wave-alt::before {
  content: "\f53b"; }

.fa-money-bill-transfer::before {
  content: "\e528"; }

.fa-money-bill-trend-up::before {
  content: "\e529"; }

.fa-money-bill-wave::before {
  content: "\f53a"; }

.fa-money-bill-wheat::before {
  content: "\e52a"; }

.fa-money-bills::before {
  content: "\e1f3"; }

.fa-money-check::before {
  content: "\f53c"; }

.fa-money-check-dollar::before {
  content: "\f53d"; }

.fa-money-check-alt::before {
  content: "\f53d"; }

.fa-monument::before {
  content: "\f5a6"; }

.fa-moon::before {
  content: "\f186"; }

.fa-mortar-pestle::before {
  content: "\f5a7"; }

.fa-mosque::before {
  content: "\f678"; }

.fa-mosquito::before {
  content: "\e52b"; }

.fa-mosquito-net::before {
  content: "\e52c"; }

.fa-motorcycle::before {
  content: "\f21c"; }

.fa-mound::before {
  content: "\e52d"; }

.fa-mountain::before {
  content: "\f6fc"; }

.fa-mountain-city::before {
  content: "\e52e"; }

.fa-mountain-sun::before {
  content: "\e52f"; }

.fa-mug-hot::before {
  content: "\f7b6"; }

.fa-mug-saucer::before {
  content: "\f0f4"; }

.fa-coffee::before {
  content: "\f0f4"; }

.fa-music::before {
  content: "\f001"; }

.fa-n::before {
  content: "\4e"; }

.fa-naira-sign::before {
  content: "\e1f6"; }

.fa-network-wired::before {
  content: "\f6ff"; }

.fa-neuter::before {
  content: "\f22c"; }

.fa-newspaper::before {
  content: "\f1ea"; }

.fa-not-equal::before {
  content: "\f53e"; }

.fa-note-sticky::before {
  content: "\f249"; }

.fa-sticky-note::before {
  content: "\f249"; }

.fa-notes-medical::before {
  content: "\f481"; }

.fa-o::before {
  content: "\4f"; }

.fa-object-group::before {
  content: "\f247"; }

.fa-object-ungroup::before {
  content: "\f248"; }

.fa-oil-can::before {
  content: "\f613"; }

.fa-oil-well::before {
  content: "\e532"; }

.fa-om::before {
  content: "\f679"; }

.fa-otter::before {
  content: "\f700"; }

.fa-outdent::before {
  content: "\f03b"; }

.fa-dedent::before {
  content: "\f03b"; }

.fa-p::before {
  content: "\50"; }

.fa-pager::before {
  content: "\f815"; }

.fa-paint-roller::before {
  content: "\f5aa"; }

.fa-paintbrush::before {
  content: "\f1fc"; }

.fa-paint-brush::before {
  content: "\f1fc"; }

.fa-palette::before {
  content: "\f53f"; }

.fa-pallet::before {
  content: "\f482"; }

.fa-panorama::before {
  content: "\e209"; }

.fa-paper-plane::before {
  content: "\f1d8"; }

.fa-paperclip::before {
  content: "\f0c6"; }

.fa-parachute-box::before {
  content: "\f4cd"; }

.fa-paragraph::before {
  content: "\f1dd"; }

.fa-passport::before {
  content: "\f5ab"; }

.fa-paste::before {
  content: "\f0ea"; }

.fa-file-clipboard::before {
  content: "\f0ea"; }

.fa-pause::before {
  content: "\f04c"; }

.fa-paw::before {
  content: "\f1b0"; }

.fa-peace::before {
  content: "\f67c"; }

.fa-pen::before {
  content: "\f304"; }

.fa-pen-clip::before {
  content: "\f305"; }

.fa-pen-alt::before {
  content: "\f305"; }

.fa-pen-fancy::before {
  content: "\f5ac"; }

.fa-pen-nib::before {
  content: "\f5ad"; }

.fa-pen-ruler::before {
  content: "\f5ae"; }

.fa-pencil-ruler::before {
  content: "\f5ae"; }

.fa-pen-to-square::before {
  content: "\f044"; }

.fa-edit::before {
  content: "\f044"; }

.fa-pencil::before {
  content: "\f303"; }

.fa-pencil-alt::before {
  content: "\f303"; }

.fa-people-arrows-left-right::before {
  content: "\e068"; }

.fa-people-arrows::before {
  content: "\e068"; }

.fa-people-carry-box::before {
  content: "\f4ce"; }

.fa-people-carry::before {
  content: "\f4ce"; }

.fa-people-group::before {
  content: "\e533"; }

.fa-people-line::before {
  content: "\e534"; }

.fa-people-pulling::before {
  content: "\e535"; }

.fa-people-robbery::before {
  content: "\e536"; }

.fa-people-roof::before {
  content: "\e537"; }

.fa-pepper-hot::before {
  content: "\f816"; }

.fa-percent::before {
  content: "\25"; }

.fa-percentage::before {
  content: "\25"; }

.fa-person::before {
  content: "\f183"; }

.fa-male::before {
  content: "\f183"; }

.fa-person-arrow-down-to-line::before {
  content: "\e538"; }

.fa-person-arrow-up-from-line::before {
  content: "\e539"; }

.fa-person-biking::before {
  content: "\f84a"; }

.fa-biking::before {
  content: "\f84a"; }

.fa-person-booth::before {
  content: "\f756"; }

.fa-person-breastfeeding::before {
  content: "\e53a"; }

.fa-person-burst::before {
  content: "\e53b"; }

.fa-person-cane::before {
  content: "\e53c"; }

.fa-person-chalkboard::before {
  content: "\e53d"; }

.fa-person-circle-check::before {
  content: "\e53e"; }

.fa-person-circle-exclamation::before {
  content: "\e53f"; }

.fa-person-circle-minus::before {
  content: "\e540"; }

.fa-person-circle-plus::before {
  content: "\e541"; }

.fa-person-circle-question::before {
  content: "\e542"; }

.fa-person-circle-xmark::before {
  content: "\e543"; }

.fa-person-digging::before {
  content: "\f85e"; }

.fa-digging::before {
  content: "\f85e"; }

.fa-person-dots-from-line::before {
  content: "\f470"; }

.fa-diagnoses::before {
  content: "\f470"; }

.fa-person-dress::before {
  content: "\f182"; }

.fa-female::before {
  content: "\f182"; }

.fa-person-dress-burst::before {
  content: "\e544"; }

.fa-person-drowning::before {
  content: "\e545"; }

.fa-person-falling::before {
  content: "\e546"; }

.fa-person-falling-burst::before {
  content: "\e547"; }

.fa-person-half-dress::before {
  content: "\e548"; }

.fa-person-harassing::before {
  content: "\e549"; }

.fa-person-hiking::before {
  content: "\f6ec"; }

.fa-hiking::before {
  content: "\f6ec"; }

.fa-person-military-pointing::before {
  content: "\e54a"; }

.fa-person-military-rifle::before {
  content: "\e54b"; }

.fa-person-military-to-person::before {
  content: "\e54c"; }

.fa-person-praying::before {
  content: "\f683"; }

.fa-pray::before {
  content: "\f683"; }

.fa-person-pregnant::before {
  content: "\e31e"; }

.fa-person-rays::before {
  content: "\e54d"; }

.fa-person-rifle::before {
  content: "\e54e"; }

.fa-person-running::before {
  content: "\f70c"; }

.fa-running::before {
  content: "\f70c"; }

.fa-person-shelter::before {
  content: "\e54f"; }

.fa-person-skating::before {
  content: "\f7c5"; }

.fa-skating::before {
  content: "\f7c5"; }

.fa-person-skiing::before {
  content: "\f7c9"; }

.fa-skiing::before {
  content: "\f7c9"; }

.fa-person-skiing-nordic::before {
  content: "\f7ca"; }

.fa-skiing-nordic::before {
  content: "\f7ca"; }

.fa-person-snowboarding::before {
  content: "\f7ce"; }

.fa-snowboarding::before {
  content: "\f7ce"; }

.fa-person-swimming::before {
  content: "\f5c4"; }

.fa-swimmer::before {
  content: "\f5c4"; }

.fa-person-through-window::before {
  content: "\e433"; }

.fa-person-walking::before {
  content: "\f554"; }

.fa-walking::before {
  content: "\f554"; }

.fa-person-walking-arrow-loop-left::before {
  content: "\e551"; }

.fa-person-walking-arrow-right::before {
  content: "\e552"; }

.fa-person-walking-dashed-line-arrow-right::before {
  content: "\e553"; }

.fa-person-walking-luggage::before {
  content: "\e554"; }

.fa-person-walking-with-cane::before {
  content: "\f29d"; }

.fa-blind::before {
  content: "\f29d"; }

.fa-peseta-sign::before {
  content: "\e221"; }

.fa-peso-sign::before {
  content: "\e222"; }

.fa-phone::before {
  content: "\f095"; }

.fa-phone-flip::before {
  content: "\f879"; }

.fa-phone-alt::before {
  content: "\f879"; }

.fa-phone-slash::before {
  content: "\f3dd"; }

.fa-phone-volume::before {
  content: "\f2a0"; }

.fa-volume-control-phone::before {
  content: "\f2a0"; }

.fa-photo-film::before {
  content: "\f87c"; }

.fa-photo-video::before {
  content: "\f87c"; }

.fa-piggy-bank::before {
  content: "\f4d3"; }

.fa-pills::before {
  content: "\f484"; }

.fa-pizza-slice::before {
  content: "\f818"; }

.fa-place-of-worship::before {
  content: "\f67f"; }

.fa-plane::before {
  content: "\f072"; }

.fa-plane-arrival::before {
  content: "\f5af"; }

.fa-plane-circle-check::before {
  content: "\e555"; }

.fa-plane-circle-exclamation::before {
  content: "\e556"; }

.fa-plane-circle-xmark::before {
  content: "\e557"; }

.fa-plane-departure::before {
  content: "\f5b0"; }

.fa-plane-lock::before {
  content: "\e558"; }

.fa-plane-slash::before {
  content: "\e069"; }

.fa-plane-up::before {
  content: "\e22d"; }

.fa-plant-wilt::before {
  content: "\e43b"; }

.fa-plate-wheat::before {
  content: "\e55a"; }

.fa-play::before {
  content: "\f04b"; }

.fa-plug::before {
  content: "\f1e6"; }

.fa-plug-circle-bolt::before {
  content: "\e55b"; }

.fa-plug-circle-check::before {
  content: "\e55c"; }

.fa-plug-circle-exclamation::before {
  content: "\e55d"; }

.fa-plug-circle-minus::before {
  content: "\e55e"; }

.fa-plug-circle-plus::before {
  content: "\e55f"; }

.fa-plug-circle-xmark::before {
  content: "\e560"; }

.fa-plus::before {
  content: "\2b"; }

.fa-add::before {
  content: "\2b"; }

.fa-plus-minus::before {
  content: "\e43c"; }

.fa-podcast::before {
  content: "\f2ce"; }

.fa-poo::before {
  content: "\f2fe"; }

.fa-poo-storm::before {
  content: "\f75a"; }

.fa-poo-bolt::before {
  content: "\f75a"; }

.fa-poop::before {
  content: "\f619"; }

.fa-power-off::before {
  content: "\f011"; }

.fa-prescription::before {
  content: "\f5b1"; }

.fa-prescription-bottle::before {
  content: "\f485"; }

.fa-prescription-bottle-medical::before {
  content: "\f486"; }

.fa-prescription-bottle-alt::before {
  content: "\f486"; }

.fa-print::before {
  content: "\f02f"; }

.fa-pump-medical::before {
  content: "\e06a"; }

.fa-pump-soap::before {
  content: "\e06b"; }

.fa-puzzle-piece::before {
  content: "\f12e"; }

.fa-q::before {
  content: "\51"; }

.fa-qrcode::before {
  content: "\f029"; }

.fa-question::before {
  content: "\3f"; }

.fa-quote-left::before {
  content: "\f10d"; }

.fa-quote-left-alt::before {
  content: "\f10d"; }

.fa-quote-right::before {
  content: "\f10e"; }

.fa-quote-right-alt::before {
  content: "\f10e"; }

.fa-r::before {
  content: "\52"; }

.fa-radiation::before {
  content: "\f7b9"; }

.fa-radio::before {
  content: "\f8d7"; }

.fa-rainbow::before {
  content: "\f75b"; }

.fa-ranking-star::before {
  content: "\e561"; }

.fa-receipt::before {
  content: "\f543"; }

.fa-record-vinyl::before {
  content: "\f8d9"; }

.fa-rectangle-ad::before {
  content: "\f641"; }

.fa-ad::before {
  content: "\f641"; }

.fa-rectangle-list::before {
  content: "\f022"; }

.fa-list-alt::before {
  content: "\f022"; }

.fa-rectangle-xmark::before {
  content: "\f410"; }

.fa-rectangle-times::before {
  content: "\f410"; }

.fa-times-rectangle::before {
  content: "\f410"; }

.fa-window-close::before {
  content: "\f410"; }

.fa-recycle::before {
  content: "\f1b8"; }

.fa-registered::before {
  content: "\f25d"; }

.fa-repeat::before {
  content: "\f363"; }

.fa-reply::before {
  content: "\f3e5"; }

.fa-mail-reply::before {
  content: "\f3e5"; }

.fa-reply-all::before {
  content: "\f122"; }

.fa-mail-reply-all::before {
  content: "\f122"; }

.fa-republican::before {
  content: "\f75e"; }

.fa-restroom::before {
  content: "\f7bd"; }

.fa-retweet::before {
  content: "\f079"; }

.fa-ribbon::before {
  content: "\f4d6"; }

.fa-right-from-bracket::before {
  content: "\f2f5"; }

.fa-sign-out-alt::before {
  content: "\f2f5"; }

.fa-right-left::before {
  content: "\f362"; }

.fa-exchange-alt::before {
  content: "\f362"; }

.fa-right-long::before {
  content: "\f30b"; }

.fa-long-arrow-alt-right::before {
  content: "\f30b"; }

.fa-right-to-bracket::before {
  content: "\f2f6"; }

.fa-sign-in-alt::before {
  content: "\f2f6"; }

.fa-ring::before {
  content: "\f70b"; }

.fa-road::before {
  content: "\f018"; }

.fa-road-barrier::before {
  content: "\e562"; }

.fa-road-bridge::before {
  content: "\e563"; }

.fa-road-circle-check::before {
  content: "\e564"; }

.fa-road-circle-exclamation::before {
  content: "\e565"; }

.fa-road-circle-xmark::before {
  content: "\e566"; }

.fa-road-lock::before {
  content: "\e567"; }

.fa-road-spikes::before {
  content: "\e568"; }

.fa-robot::before {
  content: "\f544"; }

.fa-rocket::before {
  content: "\f135"; }

.fa-rotate::before {
  content: "\f2f1"; }

.fa-sync-alt::before {
  content: "\f2f1"; }

.fa-rotate-left::before {
  content: "\f2ea"; }

.fa-rotate-back::before {
  content: "\f2ea"; }

.fa-rotate-backward::before {
  content: "\f2ea"; }

.fa-undo-alt::before {
  content: "\f2ea"; }

.fa-rotate-right::before {
  content: "\f2f9"; }

.fa-redo-alt::before {
  content: "\f2f9"; }

.fa-rotate-forward::before {
  content: "\f2f9"; }

.fa-route::before {
  content: "\f4d7"; }

.fa-rss::before {
  content: "\f09e"; }

.fa-feed::before {
  content: "\f09e"; }

.fa-ruble-sign::before {
  content: "\f158"; }

.fa-rouble::before {
  content: "\f158"; }

.fa-rub::before {
  content: "\f158"; }

.fa-ruble::before {
  content: "\f158"; }

.fa-rug::before {
  content: "\e569"; }

.fa-ruler::before {
  content: "\f545"; }

.fa-ruler-combined::before {
  content: "\f546"; }

.fa-ruler-horizontal::before {
  content: "\f547"; }

.fa-ruler-vertical::before {
  content: "\f548"; }

.fa-rupee-sign::before {
  content: "\f156"; }

.fa-rupee::before {
  content: "\f156"; }

.fa-rupiah-sign::before {
  content: "\e23d"; }

.fa-s::before {
  content: "\53"; }

.fa-sack-dollar::before {
  content: "\f81d"; }

.fa-sack-xmark::before {
  content: "\e56a"; }

.fa-sailboat::before {
  content: "\e445"; }

.fa-satellite::before {
  content: "\f7bf"; }

.fa-satellite-dish::before {
  content: "\f7c0"; }

.fa-scale-balanced::before {
  content: "\f24e"; }

.fa-balance-scale::before {
  content: "\f24e"; }

.fa-scale-unbalanced::before {
  content: "\f515"; }

.fa-balance-scale-left::before {
  content: "\f515"; }

.fa-scale-unbalanced-flip::before {
  content: "\f516"; }

.fa-balance-scale-right::before {
  content: "\f516"; }

.fa-school::before {
  content: "\f549"; }

.fa-school-circle-check::before {
  content: "\e56b"; }

.fa-school-circle-exclamation::before {
  content: "\e56c"; }

.fa-school-circle-xmark::before {
  content: "\e56d"; }

.fa-school-flag::before {
  content: "\e56e"; }

.fa-school-lock::before {
  content: "\e56f"; }

.fa-scissors::before {
  content: "\f0c4"; }

.fa-cut::before {
  content: "\f0c4"; }

.fa-screwdriver::before {
  content: "\f54a"; }

.fa-screwdriver-wrench::before {
  content: "\f7d9"; }

.fa-tools::before {
  content: "\f7d9"; }

.fa-scroll::before {
  content: "\f70e"; }

.fa-scroll-torah::before {
  content: "\f6a0"; }

.fa-torah::before {
  content: "\f6a0"; }

.fa-sd-card::before {
  content: "\f7c2"; }

.fa-section::before {
  content: "\e447"; }

.fa-seedling::before {
  content: "\f4d8"; }

.fa-sprout::before {
  content: "\f4d8"; }

.fa-server::before {
  content: "\f233"; }

.fa-shapes::before {
  content: "\f61f"; }

.fa-triangle-circle-square::before {
  content: "\f61f"; }

.fa-share::before {
  content: "\f064"; }

.fa-arrow-turn-right::before {
  content: "\f064"; }

.fa-mail-forward::before {
  content: "\f064"; }

.fa-share-from-square::before {
  content: "\f14d"; }

.fa-share-square::before {
  content: "\f14d"; }

.fa-share-nodes::before {
  content: "\f1e0"; }

.fa-share-alt::before {
  content: "\f1e0"; }

.fa-sheet-plastic::before {
  content: "\e571"; }

.fa-shekel-sign::before {
  content: "\f20b"; }

.fa-ils::before {
  content: "\f20b"; }

.fa-shekel::before {
  content: "\f20b"; }

.fa-sheqel::before {
  content: "\f20b"; }

.fa-sheqel-sign::before {
  content: "\f20b"; }

.fa-shield::before {
  content: "\f132"; }

.fa-shield-blank::before {
  content: "\f132"; }

.fa-shield-cat::before {
  content: "\e572"; }

.fa-shield-dog::before {
  content: "\e573"; }

.fa-shield-halved::before {
  content: "\f3ed"; }

.fa-shield-alt::before {
  content: "\f3ed"; }

.fa-shield-heart::before {
  content: "\e574"; }

.fa-shield-virus::before {
  content: "\e06c"; }

.fa-ship::before {
  content: "\f21a"; }

.fa-shirt::before {
  content: "\f553"; }

.fa-t-shirt::before {
  content: "\f553"; }

.fa-tshirt::before {
  content: "\f553"; }

.fa-shoe-prints::before {
  content: "\f54b"; }

.fa-shop::before {
  content: "\f54f"; }

.fa-store-alt::before {
  content: "\f54f"; }

.fa-shop-lock::before {
  content: "\e4a5"; }

.fa-shop-slash::before {
  content: "\e070"; }

.fa-store-alt-slash::before {
  content: "\e070"; }

.fa-shower::before {
  content: "\f2cc"; }

.fa-shrimp::before {
  content: "\e448"; }

.fa-shuffle::before {
  content: "\f074"; }

.fa-random::before {
  content: "\f074"; }

.fa-shuttle-space::before {
  content: "\f197"; }

.fa-space-shuttle::before {
  content: "\f197"; }

.fa-sign-hanging::before {
  content: "\f4d9"; }

.fa-sign::before {
  content: "\f4d9"; }

.fa-signal::before {
  content: "\f012"; }

.fa-signal-5::before {
  content: "\f012"; }

.fa-signal-perfect::before {
  content: "\f012"; }

.fa-signature::before {
  content: "\f5b7"; }

.fa-signs-post::before {
  content: "\f277"; }

.fa-map-signs::before {
  content: "\f277"; }

.fa-sim-card::before {
  content: "\f7c4"; }

.fa-sink::before {
  content: "\e06d"; }

.fa-sitemap::before {
  content: "\f0e8"; }

.fa-skull::before {
  content: "\f54c"; }

.fa-skull-crossbones::before {
  content: "\f714"; }

.fa-slash::before {
  content: "\f715"; }

.fa-sleigh::before {
  content: "\f7cc"; }

.fa-sliders::before {
  content: "\f1de"; }

.fa-sliders-h::before {
  content: "\f1de"; }

.fa-smog::before {
  content: "\f75f"; }

.fa-smoking::before {
  content: "\f48d"; }

.fa-snowflake::before {
  content: "\f2dc"; }

.fa-snowman::before {
  content: "\f7d0"; }

.fa-snowplow::before {
  content: "\f7d2"; }

.fa-soap::before {
  content: "\e06e"; }

.fa-socks::before {
  content: "\f696"; }

.fa-solar-panel::before {
  content: "\f5ba"; }

.fa-sort::before {
  content: "\f0dc"; }

.fa-unsorted::before {
  content: "\f0dc"; }

.fa-sort-down::before {
  content: "\f0dd"; }

.fa-sort-desc::before {
  content: "\f0dd"; }

.fa-sort-up::before {
  content: "\f0de"; }

.fa-sort-asc::before {
  content: "\f0de"; }

.fa-spa::before {
  content: "\f5bb"; }

.fa-spaghetti-monster-flying::before {
  content: "\f67b"; }

.fa-pastafarianism::before {
  content: "\f67b"; }

.fa-spell-check::before {
  content: "\f891"; }

.fa-spider::before {
  content: "\f717"; }

.fa-spinner::before {
  content: "\f110"; }

.fa-splotch::before {
  content: "\f5bc"; }

.fa-spoon::before {
  content: "\f2e5"; }

.fa-utensil-spoon::before {
  content: "\f2e5"; }

.fa-spray-can::before {
  content: "\f5bd"; }

.fa-spray-can-sparkles::before {
  content: "\f5d0"; }

.fa-air-freshener::before {
  content: "\f5d0"; }

.fa-square::before {
  content: "\f0c8"; }

.fa-square-arrow-up-right::before {
  content: "\f14c"; }

.fa-external-link-square::before {
  content: "\f14c"; }

.fa-square-caret-down::before {
  content: "\f150"; }

.fa-caret-square-down::before {
  content: "\f150"; }

.fa-square-caret-left::before {
  content: "\f191"; }

.fa-caret-square-left::before {
  content: "\f191"; }

.fa-square-caret-right::before {
  content: "\f152"; }

.fa-caret-square-right::before {
  content: "\f152"; }

.fa-square-caret-up::before {
  content: "\f151"; }

.fa-caret-square-up::before {
  content: "\f151"; }

.fa-square-check::before {
  content: "\f14a"; }

.fa-check-square::before {
  content: "\f14a"; }

.fa-square-envelope::before {
  content: "\f199"; }

.fa-envelope-square::before {
  content: "\f199"; }

.fa-square-full::before {
  content: "\f45c"; }

.fa-square-h::before {
  content: "\f0fd"; }

.fa-h-square::before {
  content: "\f0fd"; }

.fa-square-minus::before {
  content: "\f146"; }

.fa-minus-square::before {
  content: "\f146"; }

.fa-square-nfi::before {
  content: "\e576"; }

.fa-square-parking::before {
  content: "\f540"; }

.fa-parking::before {
  content: "\f540"; }

.fa-square-pen::before {
  content: "\f14b"; }

.fa-pen-square::before {
  content: "\f14b"; }

.fa-pencil-square::before {
  content: "\f14b"; }

.fa-square-person-confined::before {
  content: "\e577"; }

.fa-square-phone::before {
  content: "\f098"; }

.fa-phone-square::before {
  content: "\f098"; }

.fa-square-phone-flip::before {
  content: "\f87b"; }

.fa-phone-square-alt::before {
  content: "\f87b"; }

.fa-square-plus::before {
  content: "\f0fe"; }

.fa-plus-square::before {
  content: "\f0fe"; }

.fa-square-poll-horizontal::before {
  content: "\f682"; }

.fa-poll-h::before {
  content: "\f682"; }

.fa-square-poll-vertical::before {
  content: "\f681"; }

.fa-poll::before {
  content: "\f681"; }

.fa-square-root-variable::before {
  content: "\f698"; }

.fa-square-root-alt::before {
  content: "\f698"; }

.fa-square-rss::before {
  content: "\f143"; }

.fa-rss-square::before {
  content: "\f143"; }

.fa-square-share-nodes::before {
  content: "\f1e1"; }

.fa-share-alt-square::before {
  content: "\f1e1"; }

.fa-square-up-right::before {
  content: "\f360"; }

.fa-external-link-square-alt::before {
  content: "\f360"; }

.fa-square-virus::before {
  content: "\e578"; }

.fa-square-xmark::before {
  content: "\f2d3"; }

.fa-times-square::before {
  content: "\f2d3"; }

.fa-xmark-square::before {
  content: "\f2d3"; }

.fa-staff-aesculapius::before {
  content: "\e579"; }

.fa-rod-asclepius::before {
  content: "\e579"; }

.fa-rod-snake::before {
  content: "\e579"; }

.fa-staff-snake::before {
  content: "\e579"; }

.fa-stairs::before {
  content: "\e289"; }

.fa-stamp::before {
  content: "\f5bf"; }

.fa-star::before {
  content: "\f005"; }

.fa-star-and-crescent::before {
  content: "\f699"; }

.fa-star-half::before {
  content: "\f089"; }

.fa-star-half-stroke::before {
  content: "\f5c0"; }

.fa-star-half-alt::before {
  content: "\f5c0"; }

.fa-star-of-david::before {
  content: "\f69a"; }

.fa-star-of-life::before {
  content: "\f621"; }

.fa-sterling-sign::before {
  content: "\f154"; }

.fa-gbp::before {
  content: "\f154"; }

.fa-pound-sign::before {
  content: "\f154"; }

.fa-stethoscope::before {
  content: "\f0f1"; }

.fa-stop::before {
  content: "\f04d"; }

.fa-stopwatch::before {
  content: "\f2f2"; }

.fa-stopwatch-20::before {
  content: "\e06f"; }

.fa-store::before {
  content: "\f54e"; }

.fa-store-slash::before {
  content: "\e071"; }

.fa-street-view::before {
  content: "\f21d"; }

.fa-strikethrough::before {
  content: "\f0cc"; }

.fa-stroopwafel::before {
  content: "\f551"; }

.fa-subscript::before {
  content: "\f12c"; }

.fa-suitcase::before {
  content: "\f0f2"; }

.fa-suitcase-medical::before {
  content: "\f0fa"; }

.fa-medkit::before {
  content: "\f0fa"; }

.fa-suitcase-rolling::before {
  content: "\f5c1"; }

.fa-sun::before {
  content: "\f185"; }

.fa-sun-plant-wilt::before {
  content: "\e57a"; }

.fa-superscript::before {
  content: "\f12b"; }

.fa-swatchbook::before {
  content: "\f5c3"; }

.fa-synagogue::before {
  content: "\f69b"; }

.fa-syringe::before {
  content: "\f48e"; }

.fa-t::before {
  content: "\54"; }

.fa-table::before {
  content: "\f0ce"; }

.fa-table-cells::before {
  content: "\f00a"; }

.fa-th::before {
  content: "\f00a"; }

.fa-table-cells-large::before {
  content: "\f009"; }

.fa-th-large::before {
  content: "\f009"; }

.fa-table-columns::before {
  content: "\f0db"; }

.fa-columns::before {
  content: "\f0db"; }

.fa-table-list::before {
  content: "\f00b"; }

.fa-th-list::before {
  content: "\f00b"; }

.fa-table-tennis-paddle-ball::before {
  content: "\f45d"; }

.fa-ping-pong-paddle-ball::before {
  content: "\f45d"; }

.fa-table-tennis::before {
  content: "\f45d"; }

.fa-tablet::before {
  content: "\f3fb"; }

.fa-tablet-android::before {
  content: "\f3fb"; }

.fa-tablet-button::before {
  content: "\f10a"; }

.fa-tablet-screen-button::before {
  content: "\f3fa"; }

.fa-tablet-alt::before {
  content: "\f3fa"; }

.fa-tablets::before {
  content: "\f490"; }

.fa-tachograph-digital::before {
  content: "\f566"; }

.fa-digital-tachograph::before {
  content: "\f566"; }

.fa-tag::before {
  content: "\f02b"; }

.fa-tags::before {
  content: "\f02c"; }

.fa-tape::before {
  content: "\f4db"; }

.fa-tarp::before {
  content: "\e57b"; }

.fa-tarp-droplet::before {
  content: "\e57c"; }

.fa-taxi::before {
  content: "\f1ba"; }

.fa-cab::before {
  content: "\f1ba"; }

.fa-teeth::before {
  content: "\f62e"; }

.fa-teeth-open::before {
  content: "\f62f"; }

.fa-temperature-arrow-down::before {
  content: "\e03f"; }

.fa-temperature-down::before {
  content: "\e03f"; }

.fa-temperature-arrow-up::before {
  content: "\e040"; }

.fa-temperature-up::before {
  content: "\e040"; }

.fa-temperature-empty::before {
  content: "\f2cb"; }

.fa-temperature-0::before {
  content: "\f2cb"; }

.fa-thermometer-0::before {
  content: "\f2cb"; }

.fa-thermometer-empty::before {
  content: "\f2cb"; }

.fa-temperature-full::before {
  content: "\f2c7"; }

.fa-temperature-4::before {
  content: "\f2c7"; }

.fa-thermometer-4::before {
  content: "\f2c7"; }

.fa-thermometer-full::before {
  content: "\f2c7"; }

.fa-temperature-half::before {
  content: "\f2c9"; }

.fa-temperature-2::before {
  content: "\f2c9"; }

.fa-thermometer-2::before {
  content: "\f2c9"; }

.fa-thermometer-half::before {
  content: "\f2c9"; }

.fa-temperature-high::before {
  content: "\f769"; }

.fa-temperature-low::before {
  content: "\f76b"; }

.fa-temperature-quarter::before {
  content: "\f2ca"; }

.fa-temperature-1::before {
  content: "\f2ca"; }

.fa-thermometer-1::before {
  content: "\f2ca"; }

.fa-thermometer-quarter::before {
  content: "\f2ca"; }

.fa-temperature-three-quarters::before {
  content: "\f2c8"; }

.fa-temperature-3::before {
  content: "\f2c8"; }

.fa-thermometer-3::before {
  content: "\f2c8"; }

.fa-thermometer-three-quarters::before {
  content: "\f2c8"; }

.fa-tenge-sign::before {
  content: "\f7d7"; }

.fa-tenge::before {
  content: "\f7d7"; }

.fa-tent::before {
  content: "\e57d"; }

.fa-tent-arrow-down-to-line::before {
  content: "\e57e"; }

.fa-tent-arrow-left-right::before {
  content: "\e57f"; }

.fa-tent-arrow-turn-left::before {
  content: "\e580"; }

.fa-tent-arrows-down::before {
  content: "\e581"; }

.fa-tents::before {
  content: "\e582"; }

.fa-terminal::before {
  content: "\f120"; }

.fa-text-height::before {
  content: "\f034"; }

.fa-text-slash::before {
  content: "\f87d"; }

.fa-remove-format::before {
  content: "\f87d"; }

.fa-text-width::before {
  content: "\f035"; }

.fa-thermometer::before {
  content: "\f491"; }

.fa-thumbs-down::before {
  content: "\f165"; }

.fa-thumbs-up::before {
  content: "\f164"; }

.fa-thumbtack::before {
  content: "\f08d"; }

.fa-thumb-tack::before {
  content: "\f08d"; }

.fa-ticket::before {
  content: "\f145"; }

.fa-ticket-simple::before {
  content: "\f3ff"; }

.fa-ticket-alt::before {
  content: "\f3ff"; }

.fa-timeline::before {
  content: "\e29c"; }

.fa-toggle-off::before {
  content: "\f204"; }

.fa-toggle-on::before {
  content: "\f205"; }

.fa-toilet::before {
  content: "\f7d8"; }

.fa-toilet-paper::before {
  content: "\f71e"; }

.fa-toilet-paper-slash::before {
  content: "\e072"; }

.fa-toilet-portable::before {
  content: "\e583"; }

.fa-toilets-portable::before {
  content: "\e584"; }

.fa-toolbox::before {
  content: "\f552"; }

.fa-tooth::before {
  content: "\f5c9"; }

.fa-torii-gate::before {
  content: "\f6a1"; }

.fa-tornado::before {
  content: "\f76f"; }

.fa-tower-broadcast::before {
  content: "\f519"; }

.fa-broadcast-tower::before {
  content: "\f519"; }

.fa-tower-cell::before {
  content: "\e585"; }

.fa-tower-observation::before {
  content: "\e586"; }

.fa-tractor::before {
  content: "\f722"; }

.fa-trademark::before {
  content: "\f25c"; }

.fa-traffic-light::before {
  content: "\f637"; }

.fa-trailer::before {
  content: "\e041"; }

.fa-train::before {
  content: "\f238"; }

.fa-train-subway::before {
  content: "\f239"; }

.fa-subway::before {
  content: "\f239"; }

.fa-train-tram::before {
  content: "\f7da"; }

.fa-tram::before {
  content: "\f7da"; }

.fa-transgender::before {
  content: "\f225"; }

.fa-transgender-alt::before {
  content: "\f225"; }

.fa-trash::before {
  content: "\f1f8"; }

.fa-trash-arrow-up::before {
  content: "\f829"; }

.fa-trash-restore::before {
  content: "\f829"; }

.fa-trash-can::before {
  content: "\f2ed"; }

.fa-trash-alt::before {
  content: "\f2ed"; }

.fa-trash-can-arrow-up::before {
  content: "\f82a"; }

.fa-trash-restore-alt::before {
  content: "\f82a"; }

.fa-tree::before {
  content: "\f1bb"; }

.fa-tree-city::before {
  content: "\e587"; }

.fa-triangle-exclamation::before {
  content: "\f071"; }

.fa-exclamation-triangle::before {
  content: "\f071"; }

.fa-warning::before {
  content: "\f071"; }

.fa-trophy::before {
  content: "\f091"; }

.fa-trowel::before {
  content: "\e589"; }

.fa-trowel-bricks::before {
  content: "\e58a"; }

.fa-truck::before {
  content: "\f0d1"; }

.fa-truck-arrow-right::before {
  content: "\e58b"; }

.fa-truck-droplet::before {
  content: "\e58c"; }

.fa-truck-fast::before {
  content: "\f48b"; }

.fa-shipping-fast::before {
  content: "\f48b"; }

.fa-truck-field::before {
  content: "\e58d"; }

.fa-truck-field-un::before {
  content: "\e58e"; }

.fa-truck-front::before {
  content: "\e2b7"; }

.fa-truck-medical::before {
  content: "\f0f9"; }

.fa-ambulance::before {
  content: "\f0f9"; }

.fa-truck-monster::before {
  content: "\f63b"; }

.fa-truck-moving::before {
  content: "\f4df"; }

.fa-truck-pickup::before {
  content: "\f63c"; }

.fa-truck-plane::before {
  content: "\e58f"; }

.fa-truck-ramp-box::before {
  content: "\f4de"; }

.fa-truck-loading::before {
  content: "\f4de"; }

.fa-tty::before {
  content: "\f1e4"; }

.fa-teletype::before {
  content: "\f1e4"; }

.fa-turkish-lira-sign::before {
  content: "\e2bb"; }

.fa-try::before {
  content: "\e2bb"; }

.fa-turkish-lira::before {
  content: "\e2bb"; }

.fa-turn-down::before {
  content: "\f3be"; }

.fa-level-down-alt::before {
  content: "\f3be"; }

.fa-turn-up::before {
  content: "\f3bf"; }

.fa-level-up-alt::before {
  content: "\f3bf"; }

.fa-tv::before {
  content: "\f26c"; }

.fa-television::before {
  content: "\f26c"; }

.fa-tv-alt::before {
  content: "\f26c"; }

.fa-u::before {
  content: "\55"; }

.fa-umbrella::before {
  content: "\f0e9"; }

.fa-umbrella-beach::before {
  content: "\f5ca"; }

.fa-underline::before {
  content: "\f0cd"; }

.fa-universal-access::before {
  content: "\f29a"; }

.fa-unlock::before {
  content: "\f09c"; }

.fa-unlock-keyhole::before {
  content: "\f13e"; }

.fa-unlock-alt::before {
  content: "\f13e"; }

.fa-up-down::before {
  content: "\f338"; }

.fa-arrows-alt-v::before {
  content: "\f338"; }

.fa-up-down-left-right::before {
  content: "\f0b2"; }

.fa-arrows-alt::before {
  content: "\f0b2"; }

.fa-up-long::before {
  content: "\f30c"; }

.fa-long-arrow-alt-up::before {
  content: "\f30c"; }

.fa-up-right-and-down-left-from-center::before {
  content: "\f424"; }

.fa-expand-alt::before {
  content: "\f424"; }

.fa-up-right-from-square::before {
  content: "\f35d"; }

.fa-external-link-alt::before {
  content: "\f35d"; }

.fa-upload::before {
  content: "\f093"; }

.fa-user::before {
  content: "\f007"; }

.fa-user-astronaut::before {
  content: "\f4fb"; }

.fa-user-check::before {
  content: "\f4fc"; }

.fa-user-clock::before {
  content: "\f4fd"; }

.fa-user-doctor::before {
  content: "\f0f0"; }

.fa-user-md::before {
  content: "\f0f0"; }

.fa-user-gear::before {
  content: "\f4fe"; }

.fa-user-cog::before {
  content: "\f4fe"; }

.fa-user-graduate::before {
  content: "\f501"; }

.fa-user-group::before {
  content: "\f500"; }

.fa-user-friends::before {
  content: "\f500"; }

.fa-user-injured::before {
  content: "\f728"; }

.fa-user-large::before {
  content: "\f406"; }

.fa-user-alt::before {
  content: "\f406"; }

.fa-user-large-slash::before {
  content: "\f4fa"; }

.fa-user-alt-slash::before {
  content: "\f4fa"; }

.fa-user-lock::before {
  content: "\f502"; }

.fa-user-minus::before {
  content: "\f503"; }

.fa-user-ninja::before {
  content: "\f504"; }

.fa-user-nurse::before {
  content: "\f82f"; }

.fa-user-pen::before {
  content: "\f4ff"; }

.fa-user-edit::before {
  content: "\f4ff"; }

.fa-user-plus::before {
  content: "\f234"; }

.fa-user-secret::before {
  content: "\f21b"; }

.fa-user-shield::before {
  content: "\f505"; }

.fa-user-slash::before {
  content: "\f506"; }

.fa-user-tag::before {
  content: "\f507"; }

.fa-user-tie::before {
  content: "\f508"; }

.fa-user-xmark::before {
  content: "\f235"; }

.fa-user-times::before {
  content: "\f235"; }

.fa-users::before {
  content: "\f0c0"; }

.fa-users-between-lines::before {
  content: "\e591"; }

.fa-users-gear::before {
  content: "\f509"; }

.fa-users-cog::before {
  content: "\f509"; }

.fa-users-line::before {
  content: "\e592"; }

.fa-users-rays::before {
  content: "\e593"; }

.fa-users-rectangle::before {
  content: "\e594"; }

.fa-users-slash::before {
  content: "\e073"; }

.fa-users-viewfinder::before {
  content: "\e595"; }

.fa-utensils::before {
  content: "\f2e7"; }

.fa-cutlery::before {
  content: "\f2e7"; }

.fa-v::before {
  content: "\56"; }

.fa-van-shuttle::before {
  content: "\f5b6"; }

.fa-shuttle-van::before {
  content: "\f5b6"; }

.fa-vault::before {
  content: "\e2c5"; }

.fa-vector-square::before {
  content: "\f5cb"; }

.fa-venus::before {
  content: "\f221"; }

.fa-venus-double::before {
  content: "\f226"; }

.fa-venus-mars::before {
  content: "\f228"; }

.fa-vest::before {
  content: "\e085"; }

.fa-vest-patches::before {
  content: "\e086"; }

.fa-vial::before {
  content: "\f492"; }

.fa-vial-circle-check::before {
  content: "\e596"; }

.fa-vial-virus::before {
  content: "\e597"; }

.fa-vials::before {
  content: "\f493"; }

.fa-video::before {
  content: "\f03d"; }

.fa-video-camera::before {
  content: "\f03d"; }

.fa-video-slash::before {
  content: "\f4e2"; }

.fa-vihara::before {
  content: "\f6a7"; }

.fa-virus::before {
  content: "\e074"; }

.fa-virus-covid::before {
  content: "\e4a8"; }

.fa-virus-covid-slash::before {
  content: "\e4a9"; }

.fa-virus-slash::before {
  content: "\e075"; }

.fa-viruses::before {
  content: "\e076"; }

.fa-voicemail::before {
  content: "\f897"; }

.fa-volcano::before {
  content: "\f770"; }

.fa-volleyball::before {
  content: "\f45f"; }

.fa-volleyball-ball::before {
  content: "\f45f"; }

.fa-volume-high::before {
  content: "\f028"; }

.fa-volume-up::before {
  content: "\f028"; }

.fa-volume-low::before {
  content: "\f027"; }

.fa-volume-down::before {
  content: "\f027"; }

.fa-volume-off::before {
  content: "\f026"; }

.fa-volume-xmark::before {
  content: "\f6a9"; }

.fa-volume-mute::before {
  content: "\f6a9"; }

.fa-volume-times::before {
  content: "\f6a9"; }

.fa-vr-cardboard::before {
  content: "\f729"; }

.fa-w::before {
  content: "\57"; }

.fa-walkie-talkie::before {
  content: "\f8ef"; }

.fa-wallet::before {
  content: "\f555"; }

.fa-wand-magic::before {
  content: "\f0d0"; }

.fa-magic::before {
  content: "\f0d0"; }

.fa-wand-magic-sparkles::before {
  content: "\e2ca"; }

.fa-magic-wand-sparkles::before {
  content: "\e2ca"; }

.fa-wand-sparkles::before {
  content: "\f72b"; }

.fa-warehouse::before {
  content: "\f494"; }

.fa-water::before {
  content: "\f773"; }

.fa-water-ladder::before {
  content: "\f5c5"; }

.fa-ladder-water::before {
  content: "\f5c5"; }

.fa-swimming-pool::before {
  content: "\f5c5"; }

.fa-wave-square::before {
  content: "\f83e"; }

.fa-weight-hanging::before {
  content: "\f5cd"; }

.fa-weight-scale::before {
  content: "\f496"; }

.fa-weight::before {
  content: "\f496"; }

.fa-wheat-awn::before {
  content: "\e2cd"; }

.fa-wheat-alt::before {
  content: "\e2cd"; }

.fa-wheat-awn-circle-exclamation::before {
  content: "\e598"; }

.fa-wheelchair::before {
  content: "\f193"; }

.fa-wheelchair-move::before {
  content: "\e2ce"; }

.fa-wheelchair-alt::before {
  content: "\e2ce"; }

.fa-whiskey-glass::before {
  content: "\f7a0"; }

.fa-glass-whiskey::before {
  content: "\f7a0"; }

.fa-wifi::before {
  content: "\f1eb"; }

.fa-wifi-3::before {
  content: "\f1eb"; }

.fa-wifi-strong::before {
  content: "\f1eb"; }

.fa-wind::before {
  content: "\f72e"; }

.fa-window-maximize::before {
  content: "\f2d0"; }

.fa-window-minimize::before {
  content: "\f2d1"; }

.fa-window-restore::before {
  content: "\f2d2"; }

.fa-wine-bottle::before {
  content: "\f72f"; }

.fa-wine-glass::before {
  content: "\f4e3"; }

.fa-wine-glass-empty::before {
  content: "\f5ce"; }

.fa-wine-glass-alt::before {
  content: "\f5ce"; }

.fa-won-sign::before {
  content: "\f159"; }

.fa-krw::before {
  content: "\f159"; }

.fa-won::before {
  content: "\f159"; }

.fa-worm::before {
  content: "\e599"; }

.fa-wrench::before {
  content: "\f0ad"; }

.fa-x::before {
  content: "\58"; }

.fa-x-ray::before {
  content: "\f497"; }

.fa-xmark::before {
  content: "\f00d"; }

.fa-close::before {
  content: "\f00d"; }

.fa-multiply::before {
  content: "\f00d"; }

.fa-remove::before {
  content: "\f00d"; }

.fa-times::before {
  content: "\f00d"; }

.fa-xmarks-lines::before {
  content: "\e59a"; }

.fa-y::before {
  content: "\59"; }

.fa-yen-sign::before {
  content: "\f157"; }

.fa-cny::before {
  content: "\f157"; }

.fa-jpy::before {
  content: "\f157"; }

.fa-rmb::before {
  content: "\f157"; }

.fa-yen::before {
  content: "\f157"; }

.fa-yin-yang::before {
  content: "\f6ad"; }

.fa-z::before {
  content: "\5a"; }

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0; }

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0; }
:root, :host {
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"; }

@font-face {
  font-family: 'Font Awesome 6 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../webfonts/fa-brands-400.woff2") format("woff2"), url("../webfonts/fa-brands-400.ttf") format("truetype"); }

.fab,
.fa-brands {
  font-family: 'Font Awesome 6 Brands';
  font-weight: 400; }

.fa-42-group:before {
  content: "\e080"; }

.fa-innosoft:before {
  content: "\e080"; }

.fa-500px:before {
  content: "\f26e"; }

.fa-accessible-icon:before {
  content: "\f368"; }

.fa-accusoft:before {
  content: "\f369"; }

.fa-adn:before {
  content: "\f170"; }

.fa-adversal:before {
  content: "\f36a"; }

.fa-affiliatetheme:before {
  content: "\f36b"; }

.fa-airbnb:before {
  content: "\f834"; }

.fa-algolia:before {
  content: "\f36c"; }

.fa-alipay:before {
  content: "\f642"; }

.fa-amazon:before {
  content: "\f270"; }

.fa-amazon-pay:before {
  content: "\f42c"; }

.fa-amilia:before {
  content: "\f36d"; }

.fa-android:before {
  content: "\f17b"; }

.fa-angellist:before {
  content: "\f209"; }

.fa-angrycreative:before {
  content: "\f36e"; }

.fa-angular:before {
  content: "\f420"; }

.fa-app-store:before {
  content: "\f36f"; }

.fa-app-store-ios:before {
  content: "\f370"; }

.fa-apper:before {
  content: "\f371"; }

.fa-apple:before {
  content: "\f179"; }

.fa-apple-pay:before {
  content: "\f415"; }

.fa-artstation:before {
  content: "\f77a"; }

.fa-asymmetrik:before {
  content: "\f372"; }

.fa-atlassian:before {
  content: "\f77b"; }

.fa-audible:before {
  content: "\f373"; }

.fa-autoprefixer:before {
  content: "\f41c"; }

.fa-avianex:before {
  content: "\f374"; }

.fa-aviato:before {
  content: "\f421"; }

.fa-aws:before {
  content: "\f375"; }

.fa-bandcamp:before {
  content: "\f2d5"; }

.fa-battle-net:before {
  content: "\f835"; }

.fa-behance:before {
  content: "\f1b4"; }

.fa-behance-square:before {
  content: "\f1b5"; }

.fa-bilibili:before {
  content: "\e3d9"; }

.fa-bimobject:before {
  content: "\f378"; }

.fa-bitbucket:before {
  content: "\f171"; }

.fa-bitcoin:before {
  content: "\f379"; }

.fa-bity:before {
  content: "\f37a"; }

.fa-black-tie:before {
  content: "\f27e"; }

.fa-blackberry:before {
  content: "\f37b"; }

.fa-blogger:before {
  content: "\f37c"; }

.fa-blogger-b:before {
  content: "\f37d"; }

.fa-bluetooth:before {
  content: "\f293"; }

.fa-bluetooth-b:before {
  content: "\f294"; }

.fa-bootstrap:before {
  content: "\f836"; }

.fa-bots:before {
  content: "\e340"; }

.fa-btc:before {
  content: "\f15a"; }

.fa-buffer:before {
  content: "\f837"; }

.fa-buromobelexperte:before {
  content: "\f37f"; }

.fa-buy-n-large:before {
  content: "\f8a6"; }

.fa-buysellads:before {
  content: "\f20d"; }

.fa-canadian-maple-leaf:before {
  content: "\f785"; }

.fa-cc-amazon-pay:before {
  content: "\f42d"; }

.fa-cc-amex:before {
  content: "\f1f3"; }

.fa-cc-apple-pay:before {
  content: "\f416"; }

.fa-cc-diners-club:before {
  content: "\f24c"; }

.fa-cc-discover:before {
  content: "\f1f2"; }

.fa-cc-jcb:before {
  content: "\f24b"; }

.fa-cc-mastercard:before {
  content: "\f1f1"; }

.fa-cc-paypal:before {
  content: "\f1f4"; }

.fa-cc-stripe:before {
  content: "\f1f5"; }

.fa-cc-visa:before {
  content: "\f1f0"; }

.fa-centercode:before {
  content: "\f380"; }

.fa-centos:before {
  content: "\f789"; }

.fa-chrome:before {
  content: "\f268"; }

.fa-chromecast:before {
  content: "\f838"; }

.fa-cloudflare:before {
  content: "\e07d"; }

.fa-cloudscale:before {
  content: "\f383"; }

.fa-cloudsmith:before {
  content: "\f384"; }

.fa-cloudversify:before {
  content: "\f385"; }

.fa-cmplid:before {
  content: "\e360"; }

.fa-codepen:before {
  content: "\f1cb"; }

.fa-codiepie:before {
  content: "\f284"; }

.fa-confluence:before {
  content: "\f78d"; }

.fa-connectdevelop:before {
  content: "\f20e"; }

.fa-contao:before {
  content: "\f26d"; }

.fa-cotton-bureau:before {
  content: "\f89e"; }

.fa-cpanel:before {
  content: "\f388"; }

.fa-creative-commons:before {
  content: "\f25e"; }

.fa-creative-commons-by:before {
  content: "\f4e7"; }

.fa-creative-commons-nc:before {
  content: "\f4e8"; }

.fa-creative-commons-nc-eu:before {
  content: "\f4e9"; }

.fa-creative-commons-nc-jp:before {
  content: "\f4ea"; }

.fa-creative-commons-nd:before {
  content: "\f4eb"; }

.fa-creative-commons-pd:before {
  content: "\f4ec"; }

.fa-creative-commons-pd-alt:before {
  content: "\f4ed"; }

.fa-creative-commons-remix:before {
  content: "\f4ee"; }

.fa-creative-commons-sa:before {
  content: "\f4ef"; }

.fa-creative-commons-sampling:before {
  content: "\f4f0"; }

.fa-creative-commons-sampling-plus:before {
  content: "\f4f1"; }

.fa-creative-commons-share:before {
  content: "\f4f2"; }

.fa-creative-commons-zero:before {
  content: "\f4f3"; }

.fa-critical-role:before {
  content: "\f6c9"; }

.fa-css3:before {
  content: "\f13c"; }

.fa-css3-alt:before {
  content: "\f38b"; }

.fa-cuttlefish:before {
  content: "\f38c"; }

.fa-d-and-d:before {
  content: "\f38d"; }

.fa-d-and-d-beyond:before {
  content: "\f6ca"; }

.fa-dailymotion:before {
  content: "\e052"; }

.fa-dashcube:before {
  content: "\f210"; }

.fa-deezer:before {
  content: "\e077"; }

.fa-delicious:before {
  content: "\f1a5"; }

.fa-deploydog:before {
  content: "\f38e"; }

.fa-deskpro:before {
  content: "\f38f"; }

.fa-dev:before {
  content: "\f6cc"; }

.fa-deviantart:before {
  content: "\f1bd"; }

.fa-dhl:before {
  content: "\f790"; }

.fa-diaspora:before {
  content: "\f791"; }

.fa-digg:before {
  content: "\f1a6"; }

.fa-digital-ocean:before {
  content: "\f391"; }

.fa-discord:before {
  content: "\f392"; }

.fa-discourse:before {
  content: "\f393"; }

.fa-dochub:before {
  content: "\f394"; }

.fa-docker:before {
  content: "\f395"; }

.fa-draft2digital:before {
  content: "\f396"; }

.fa-dribbble:before {
  content: "\f17d"; }

.fa-dribbble-square:before {
  content: "\f397"; }

.fa-dropbox:before {
  content: "\f16b"; }

.fa-drupal:before {
  content: "\f1a9"; }

.fa-dyalog:before {
  content: "\f399"; }

.fa-earlybirds:before {
  content: "\f39a"; }

.fa-ebay:before {
  content: "\f4f4"; }

.fa-edge:before {
  content: "\f282"; }

.fa-edge-legacy:before {
  content: "\e078"; }

.fa-elementor:before {
  content: "\f430"; }

.fa-ello:before {
  content: "\f5f1"; }

.fa-ember:before {
  content: "\f423"; }

.fa-empire:before {
  content: "\f1d1"; }

.fa-envira:before {
  content: "\f299"; }

.fa-erlang:before {
  content: "\f39d"; }

.fa-ethereum:before {
  content: "\f42e"; }

.fa-etsy:before {
  content: "\f2d7"; }

.fa-evernote:before {
  content: "\f839"; }

.fa-expeditedssl:before {
  content: "\f23e"; }

.fa-facebook:before {
  content: "\f09a"; }

.fa-facebook-f:before {
  content: "\f39e"; }

.fa-facebook-messenger:before {
  content: "\f39f"; }

.fa-facebook-square:before {
  content: "\f082"; }

.fa-fantasy-flight-games:before {
  content: "\f6dc"; }

.fa-fedex:before {
  content: "\f797"; }

.fa-fedora:before {
  content: "\f798"; }

.fa-figma:before {
  content: "\f799"; }

.fa-firefox:before {
  content: "\f269"; }

.fa-firefox-browser:before {
  content: "\e007"; }

.fa-first-order:before {
  content: "\f2b0"; }

.fa-first-order-alt:before {
  content: "\f50a"; }

.fa-firstdraft:before {
  content: "\f3a1"; }

.fa-flickr:before {
  content: "\f16e"; }

.fa-flipboard:before {
  content: "\f44d"; }

.fa-fly:before {
  content: "\f417"; }

.fa-font-awesome:before {
  content: "\f2b4"; }

.fa-font-awesome-flag:before {
  content: "\f2b4"; }

.fa-font-awesome-logo-full:before {
  content: "\f2b4"; }

.fa-fonticons:before {
  content: "\f280"; }

.fa-fonticons-fi:before {
  content: "\f3a2"; }

.fa-fort-awesome:before {
  content: "\f286"; }

.fa-fort-awesome-alt:before {
  content: "\f3a3"; }

.fa-forumbee:before {
  content: "\f211"; }

.fa-foursquare:before {
  content: "\f180"; }

.fa-free-code-camp:before {
  content: "\f2c5"; }

.fa-freebsd:before {
  content: "\f3a4"; }

.fa-fulcrum:before {
  content: "\f50b"; }

.fa-galactic-republic:before {
  content: "\f50c"; }

.fa-galactic-senate:before {
  content: "\f50d"; }

.fa-get-pocket:before {
  content: "\f265"; }

.fa-gg:before {
  content: "\f260"; }

.fa-gg-circle:before {
  content: "\f261"; }

.fa-git:before {
  content: "\f1d3"; }

.fa-git-alt:before {
  content: "\f841"; }

.fa-git-square:before {
  content: "\f1d2"; }

.fa-github:before {
  content: "\f09b"; }

.fa-github-alt:before {
  content: "\f113"; }

.fa-github-square:before {
  content: "\f092"; }

.fa-gitkraken:before {
  content: "\f3a6"; }

.fa-gitlab:before {
  content: "\f296"; }

.fa-gitter:before {
  content: "\f426"; }

.fa-glide:before {
  content: "\f2a5"; }

.fa-glide-g:before {
  content: "\f2a6"; }

.fa-gofore:before {
  content: "\f3a7"; }

.fa-golang:before {
  content: "\e40f"; }

.fa-goodreads:before {
  content: "\f3a8"; }

.fa-goodreads-g:before {
  content: "\f3a9"; }

.fa-google:before {
  content: "\f1a0"; }

.fa-google-drive:before {
  content: "\f3aa"; }

.fa-google-pay:before {
  content: "\e079"; }

.fa-google-play:before {
  content: "\f3ab"; }

.fa-google-plus:before {
  content: "\f2b3"; }

.fa-google-plus-g:before {
  content: "\f0d5"; }

.fa-google-plus-square:before {
  content: "\f0d4"; }

.fa-google-wallet:before {
  content: "\f1ee"; }

.fa-gratipay:before {
  content: "\f184"; }

.fa-grav:before {
  content: "\f2d6"; }

.fa-gripfire:before {
  content: "\f3ac"; }

.fa-grunt:before {
  content: "\f3ad"; }

.fa-guilded:before {
  content: "\e07e"; }

.fa-gulp:before {
  content: "\f3ae"; }

.fa-hacker-news:before {
  content: "\f1d4"; }

.fa-hacker-news-square:before {
  content: "\f3af"; }

.fa-hackerrank:before {
  content: "\f5f7"; }

.fa-hashnode:before {
  content: "\e499"; }

.fa-hips:before {
  content: "\f452"; }

.fa-hire-a-helper:before {
  content: "\f3b0"; }

.fa-hive:before {
  content: "\e07f"; }

.fa-hooli:before {
  content: "\f427"; }

.fa-hornbill:before {
  content: "\f592"; }

.fa-hotjar:before {
  content: "\f3b1"; }

.fa-houzz:before {
  content: "\f27c"; }

.fa-html5:before {
  content: "\f13b"; }

.fa-hubspot:before {
  content: "\f3b2"; }

.fa-ideal:before {
  content: "\e013"; }

.fa-imdb:before {
  content: "\f2d8"; }

.fa-instagram:before {
  content: "\f16d"; }

.fa-instagram-square:before {
  content: "\e055"; }

.fa-instalod:before {
  content: "\e081"; }

.fa-intercom:before {
  content: "\f7af"; }

.fa-internet-explorer:before {
  content: "\f26b"; }

.fa-invision:before {
  content: "\f7b0"; }

.fa-ioxhost:before {
  content: "\f208"; }

.fa-itch-io:before {
  content: "\f83a"; }

.fa-itunes:before {
  content: "\f3b4"; }

.fa-itunes-note:before {
  content: "\f3b5"; }

.fa-java:before {
  content: "\f4e4"; }

.fa-jedi-order:before {
  content: "\f50e"; }

.fa-jenkins:before {
  content: "\f3b6"; }

.fa-jira:before {
  content: "\f7b1"; }

.fa-joget:before {
  content: "\f3b7"; }

.fa-joomla:before {
  content: "\f1aa"; }

.fa-js:before {
  content: "\f3b8"; }

.fa-js-square:before {
  content: "\f3b9"; }

.fa-jsfiddle:before {
  content: "\f1cc"; }

.fa-kaggle:before {
  content: "\f5fa"; }

.fa-keybase:before {
  content: "\f4f5"; }

.fa-keycdn:before {
  content: "\f3ba"; }

.fa-kickstarter:before {
  content: "\f3bb"; }

.fa-kickstarter-k:before {
  content: "\f3bc"; }

.fa-korvue:before {
  content: "\f42f"; }

.fa-laravel:before {
  content: "\f3bd"; }

.fa-lastfm:before {
  content: "\f202"; }

.fa-lastfm-square:before {
  content: "\f203"; }

.fa-leanpub:before {
  content: "\f212"; }

.fa-less:before {
  content: "\f41d"; }

.fa-line:before {
  content: "\f3c0"; }

.fa-linkedin:before {
  content: "\f08c"; }

.fa-linkedin-in:before {
  content: "\f0e1"; }

.fa-linode:before {
  content: "\f2b8"; }

.fa-linux:before {
  content: "\f17c"; }

.fa-lyft:before {
  content: "\f3c3"; }

.fa-magento:before {
  content: "\f3c4"; }

.fa-mailchimp:before {
  content: "\f59e"; }

.fa-mandalorian:before {
  content: "\f50f"; }

.fa-markdown:before {
  content: "\f60f"; }

.fa-mastodon:before {
  content: "\f4f6"; }

.fa-maxcdn:before {
  content: "\f136"; }

.fa-mdb:before {
  content: "\f8ca"; }

.fa-medapps:before {
  content: "\f3c6"; }

.fa-medium:before {
  content: "\f23a"; }

.fa-medium-m:before {
  content: "\f23a"; }

.fa-medrt:before {
  content: "\f3c8"; }

.fa-meetup:before {
  content: "\f2e0"; }

.fa-megaport:before {
  content: "\f5a3"; }

.fa-mendeley:before {
  content: "\f7b3"; }

.fa-microblog:before {
  content: "\e01a"; }

.fa-microsoft:before {
  content: "\f3ca"; }

.fa-mix:before {
  content: "\f3cb"; }

.fa-mixcloud:before {
  content: "\f289"; }

.fa-mixer:before {
  content: "\e056"; }

.fa-mizuni:before {
  content: "\f3cc"; }

.fa-modx:before {
  content: "\f285"; }

.fa-monero:before {
  content: "\f3d0"; }

.fa-napster:before {
  content: "\f3d2"; }

.fa-neos:before {
  content: "\f612"; }

.fa-nfc-directional:before {
  content: "\e530"; }

.fa-nfc-symbol:before {
  content: "\e531"; }

.fa-nimblr:before {
  content: "\f5a8"; }

.fa-node:before {
  content: "\f419"; }

.fa-node-js:before {
  content: "\f3d3"; }

.fa-npm:before {
  content: "\f3d4"; }

.fa-ns8:before {
  content: "\f3d5"; }

.fa-nutritionix:before {
  content: "\f3d6"; }

.fa-octopus-deploy:before {
  content: "\e082"; }

.fa-odnoklassniki:before {
  content: "\f263"; }

.fa-odnoklassniki-square:before {
  content: "\f264"; }

.fa-old-republic:before {
  content: "\f510"; }

.fa-opencart:before {
  content: "\f23d"; }

.fa-openid:before {
  content: "\f19b"; }

.fa-opera:before {
  content: "\f26a"; }

.fa-optin-monster:before {
  content: "\f23c"; }

.fa-orcid:before {
  content: "\f8d2"; }

.fa-osi:before {
  content: "\f41a"; }

.fa-padlet:before {
  content: "\e4a0"; }

.fa-page4:before {
  content: "\f3d7"; }

.fa-pagelines:before {
  content: "\f18c"; }

.fa-palfed:before {
  content: "\f3d8"; }

.fa-patreon:before {
  content: "\f3d9"; }

.fa-paypal:before {
  content: "\f1ed"; }

.fa-perbyte:before {
  content: "\e083"; }

.fa-periscope:before {
  content: "\f3da"; }

.fa-phabricator:before {
  content: "\f3db"; }

.fa-phoenix-framework:before {
  content: "\f3dc"; }

.fa-phoenix-squadron:before {
  content: "\f511"; }

.fa-php:before {
  content: "\f457"; }

.fa-pied-piper:before {
  content: "\f2ae"; }

.fa-pied-piper-alt:before {
  content: "\f1a8"; }

.fa-pied-piper-hat:before {
  content: "\f4e5"; }

.fa-pied-piper-pp:before {
  content: "\f1a7"; }

.fa-pied-piper-square:before {
  content: "\e01e"; }

.fa-pinterest:before {
  content: "\f0d2"; }

.fa-pinterest-p:before {
  content: "\f231"; }

.fa-pinterest-square:before {
  content: "\f0d3"; }

.fa-pix:before {
  content: "\e43a"; }

.fa-playstation:before {
  content: "\f3df"; }

.fa-product-hunt:before {
  content: "\f288"; }

.fa-pushed:before {
  content: "\f3e1"; }

.fa-python:before {
  content: "\f3e2"; }

.fa-qq:before {
  content: "\f1d6"; }

.fa-quinscape:before {
  content: "\f459"; }

.fa-quora:before {
  content: "\f2c4"; }

.fa-r-project:before {
  content: "\f4f7"; }

.fa-raspberry-pi:before {
  content: "\f7bb"; }

.fa-ravelry:before {
  content: "\f2d9"; }

.fa-react:before {
  content: "\f41b"; }

.fa-reacteurope:before {
  content: "\f75d"; }

.fa-readme:before {
  content: "\f4d5"; }

.fa-rebel:before {
  content: "\f1d0"; }

.fa-red-river:before {
  content: "\f3e3"; }

.fa-reddit:before {
  content: "\f1a1"; }

.fa-reddit-alien:before {
  content: "\f281"; }

.fa-reddit-square:before {
  content: "\f1a2"; }

.fa-redhat:before {
  content: "\f7bc"; }

.fa-renren:before {
  content: "\f18b"; }

.fa-replyd:before {
  content: "\f3e6"; }

.fa-researchgate:before {
  content: "\f4f8"; }

.fa-resolving:before {
  content: "\f3e7"; }

.fa-rev:before {
  content: "\f5b2"; }

.fa-rocketchat:before {
  content: "\f3e8"; }

.fa-rockrms:before {
  content: "\f3e9"; }

.fa-rust:before {
  content: "\e07a"; }

.fa-safari:before {
  content: "\f267"; }

.fa-salesforce:before {
  content: "\f83b"; }

.fa-sass:before {
  content: "\f41e"; }

.fa-schlix:before {
  content: "\f3ea"; }

.fa-screenpal:before {
  content: "\e570"; }

.fa-scribd:before {
  content: "\f28a"; }

.fa-searchengin:before {
  content: "\f3eb"; }

.fa-sellcast:before {
  content: "\f2da"; }

.fa-sellsy:before {
  content: "\f213"; }

.fa-servicestack:before {
  content: "\f3ec"; }

.fa-shirtsinbulk:before {
  content: "\f214"; }

.fa-shopify:before {
  content: "\e057"; }

.fa-shopware:before {
  content: "\f5b5"; }

.fa-simplybuilt:before {
  content: "\f215"; }

.fa-sistrix:before {
  content: "\f3ee"; }

.fa-sith:before {
  content: "\f512"; }

.fa-sitrox:before {
  content: "\e44a"; }

.fa-sketch:before {
  content: "\f7c6"; }

.fa-skyatlas:before {
  content: "\f216"; }

.fa-skype:before {
  content: "\f17e"; }

.fa-slack:before {
  content: "\f198"; }

.fa-slack-hash:before {
  content: "\f198"; }

.fa-slideshare:before {
  content: "\f1e7"; }

.fa-snapchat:before {
  content: "\f2ab"; }

.fa-snapchat-ghost:before {
  content: "\f2ab"; }

.fa-snapchat-square:before {
  content: "\f2ad"; }

.fa-soundcloud:before {
  content: "\f1be"; }

.fa-sourcetree:before {
  content: "\f7d3"; }

.fa-speakap:before {
  content: "\f3f3"; }

.fa-speaker-deck:before {
  content: "\f83c"; }

.fa-spotify:before {
  content: "\f1bc"; }

.fa-square-font-awesome:before {
  content: "\f425"; }

.fa-square-font-awesome-stroke:before {
  content: "\f35c"; }

.fa-font-awesome-alt:before {
  content: "\f35c"; }

.fa-squarespace:before {
  content: "\f5be"; }

.fa-stack-exchange:before {
  content: "\f18d"; }

.fa-stack-overflow:before {
  content: "\f16c"; }

.fa-stackpath:before {
  content: "\f842"; }

.fa-staylinked:before {
  content: "\f3f5"; }

.fa-steam:before {
  content: "\f1b6"; }

.fa-steam-square:before {
  content: "\f1b7"; }

.fa-steam-symbol:before {
  content: "\f3f6"; }

.fa-sticker-mule:before {
  content: "\f3f7"; }

.fa-strava:before {
  content: "\f428"; }

.fa-stripe:before {
  content: "\f429"; }

.fa-stripe-s:before {
  content: "\f42a"; }

.fa-studiovinari:before {
  content: "\f3f8"; }

.fa-stumbleupon:before {
  content: "\f1a4"; }

.fa-stumbleupon-circle:before {
  content: "\f1a3"; }

.fa-superpowers:before {
  content: "\f2dd"; }

.fa-supple:before {
  content: "\f3f9"; }

.fa-suse:before {
  content: "\f7d6"; }

.fa-swift:before {
  content: "\f8e1"; }

.fa-symfony:before {
  content: "\f83d"; }

.fa-teamspeak:before {
  content: "\f4f9"; }

.fa-telegram:before {
  content: "\f2c6"; }

.fa-telegram-plane:before {
  content: "\f2c6"; }

.fa-tencent-weibo:before {
  content: "\f1d5"; }

.fa-the-red-yeti:before {
  content: "\f69d"; }

.fa-themeco:before {
  content: "\f5c6"; }

.fa-themeisle:before {
  content: "\f2b2"; }

.fa-think-peaks:before {
  content: "\f731"; }

.fa-tiktok:before {
  content: "\e07b"; }

.fa-trade-federation:before {
  content: "\f513"; }

.fa-trello:before {
  content: "\f181"; }

.fa-tumblr:before {
  content: "\f173"; }

.fa-tumblr-square:before {
  content: "\f174"; }

.fa-twitch:before {
  content: "\f1e8"; }

.fa-twitter:before {
  content: "\f099"; }

.fa-twitter-square:before {
  content: "\f081"; }

.fa-typo3:before {
  content: "\f42b"; }

.fa-uber:before {
  content: "\f402"; }

.fa-ubuntu:before {
  content: "\f7df"; }

.fa-uikit:before {
  content: "\f403"; }

.fa-umbraco:before {
  content: "\f8e8"; }

.fa-uncharted:before {
  content: "\e084"; }

.fa-uniregistry:before {
  content: "\f404"; }

.fa-unity:before {
  content: "\e049"; }

.fa-unsplash:before {
  content: "\e07c"; }

.fa-untappd:before {
  content: "\f405"; }

.fa-ups:before {
  content: "\f7e0"; }

.fa-usb:before {
  content: "\f287"; }

.fa-usps:before {
  content: "\f7e1"; }

.fa-ussunnah:before {
  content: "\f407"; }

.fa-vaadin:before {
  content: "\f408"; }

.fa-viacoin:before {
  content: "\f237"; }

.fa-viadeo:before {
  content: "\f2a9"; }

.fa-viadeo-square:before {
  content: "\f2aa"; }

.fa-viber:before {
  content: "\f409"; }

.fa-vimeo:before {
  content: "\f40a"; }

.fa-vimeo-square:before {
  content: "\f194"; }

.fa-vimeo-v:before {
  content: "\f27d"; }

.fa-vine:before {
  content: "\f1ca"; }

.fa-vk:before {
  content: "\f189"; }

.fa-vnv:before {
  content: "\f40b"; }

.fa-vuejs:before {
  content: "\f41f"; }

.fa-watchman-monitoring:before {
  content: "\e087"; }

.fa-waze:before {
  content: "\f83f"; }

.fa-weebly:before {
  content: "\f5cc"; }

.fa-weibo:before {
  content: "\f18a"; }

.fa-weixin:before {
  content: "\f1d7"; }

.fa-whatsapp:before {
  content: "\f232"; }

.fa-whatsapp-square:before {
  content: "\f40c"; }

.fa-whmcs:before {
  content: "\f40d"; }

.fa-wikipedia-w:before {
  content: "\f266"; }

.fa-windows:before {
  content: "\f17a"; }

.fa-wirsindhandwerk:before {
  content: "\e2d0"; }

.fa-wsh:before {
  content: "\e2d0"; }

.fa-wix:before {
  content: "\f5cf"; }

.fa-wizards-of-the-coast:before {
  content: "\f730"; }

.fa-wodu:before {
  content: "\e088"; }

.fa-wolf-pack-battalion:before {
  content: "\f514"; }

.fa-wordpress:before {
  content: "\f19a"; }

.fa-wordpress-simple:before {
  content: "\f411"; }

.fa-wpbeginner:before {
  content: "\f297"; }

.fa-wpexplorer:before {
  content: "\f2de"; }

.fa-wpforms:before {
  content: "\f298"; }

.fa-wpressr:before {
  content: "\f3e4"; }

.fa-xbox:before {
  content: "\f412"; }

.fa-xing:before {
  content: "\f168"; }

.fa-xing-square:before {
  content: "\f169"; }

.fa-y-combinator:before {
  content: "\f23b"; }

.fa-yahoo:before {
  content: "\f19e"; }

.fa-yammer:before {
  content: "\f840"; }

.fa-yandex:before {
  content: "\f413"; }

.fa-yandex-international:before {
  content: "\f414"; }

.fa-yarn:before {
  content: "\f7e3"; }

.fa-yelp:before {
  content: "\f1e9"; }

.fa-yoast:before {
  content: "\f2b1"; }

.fa-youtube:before {
  content: "\f167"; }

.fa-youtube-square:before {
  content: "\f431"; }

.fa-zhihu:before {
  content: "\f63f"; }
:root, :host {
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free"; }

@font-face {
  font-family: 'Font Awesome 6 Free';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../webfonts/fa-regular-400.woff2") format("woff2"), url("../webfonts/fa-regular-400.ttf") format("truetype"); }

.far,
.fa-regular {
  font-family: 'Font Awesome 6 Free';
  font-weight: 400; }
:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free"; }

@font-face {
  font-family: 'Font Awesome 6 Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("../webfonts/fa-solid-900.woff2") format("woff2"), url("../webfonts/fa-solid-900.ttf") format("truetype"); }

.fas,
.fa-solid {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900; }
@font-face {
  font-family: "Font Awesome 5 Brands";
  font-display: block;
  font-weight: 400;
  src: url("../webfonts/fa-brands-400.woff2") format("woff2"), url("../webfonts/fa-brands-400.ttf") format("truetype"); }

@font-face {
  font-family: "Font Awesome 5 Free";
  font-display: block;
  font-weight: 900;
  src: url("../webfonts/fa-solid-900.woff2") format("woff2"), url("../webfonts/fa-solid-900.ttf") format("truetype"); }

@font-face {
  font-family: "Font Awesome 5 Free";
  font-display: block;
  font-weight: 400;
  src: url("../webfonts/fa-regular-400.woff2") format("woff2"), url("../webfonts/fa-regular-400.ttf") format("truetype"); }
@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url("../webfonts/fa-solid-900.woff2") format("woff2"), url("../webfonts/fa-solid-900.ttf") format("truetype"); }

@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url("../webfonts/fa-brands-400.woff2") format("woff2"), url("../webfonts/fa-brands-400.ttf") format("truetype"); }

@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url("../webfonts/fa-regular-400.woff2") format("woff2"), url("../webfonts/fa-regular-400.ttf") format("truetype");
  unicode-range: U+F003,U+F006,U+F014,U+F016-F017,U+F01A-F01B,U+F01D,U+F022,U+F03E,U+F044,U+F046,U+F05C-F05D,U+F06E,U+F070,U+F087-F088,U+F08A,U+F094,U+F096-F097,U+F09D,U+F0A0,U+F0A2,U+F0A4-F0A7,U+F0C5,U+F0C7,U+F0E5-F0E6,U+F0EB,U+F0F6-F0F8,U+F10C,U+F114-F115,U+F118-F11A,U+F11C-F11D,U+F133,U+F147,U+F14E,U+F150-F152,U+F185-F186,U+F18E,U+F190-F192,U+F196,U+F1C1-F1C9,U+F1D9,U+F1DB,U+F1E3,U+F1EA,U+F1F7,U+F1F9,U+F20A,U+F247-F248,U+F24A,U+F24D,U+F255-F25B,U+F25D,U+F271-F274,U+F278,U+F27B,U+F28C,U+F28E,U+F29C,U+F2B5,U+F2B7,U+F2BA,U+F2BC,U+F2BE,U+F2C0-F2C1,U+F2C3,U+F2D0,U+F2D2,U+F2D4,U+F2DC; }

@font-face {
  font-family: "FontAwesome";
  font-display: block;
  src: url("../webfonts/fa-v4compatibility.woff2") format("woff2"), url("../webfonts/fa-v4compatibility.ttf") format("truetype");
  unicode-range: U+F041,U+F047,U+F065-F066,U+F07D-F07E,U+F080,U+F08B,U+F08E,U+F090,U+F09A,U+F0AC,U+F0AE,U+F0B2,U+F0D0,U+F0D6,U+F0E4,U+F0EC,U+F10A-F10B,U+F123,U+F13E,U+F148-F149,U+F14C,U+F156,U+F15E,U+F160-F161,U+F163,U+F175-F178,U+F195,U+F1F8,U+F219,U+F250,U+F252,U+F27A; }

