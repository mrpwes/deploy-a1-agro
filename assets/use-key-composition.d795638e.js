import{G as ue,r as g,a as z,H as ae,w as x,o as H,I as ie,g as P,c as s,J as se,i as de,K as fe,D as ce,n as ve,L as pe,M as me,h as a,E as F,T as ge,N as be}from"./index.f0077d57.js";import{a as J,b as he,h as k}from"./QBtn.28f0525d.js";import{a as ye,u as Ce,b as qe,r as xe}from"./focus-manager.2d3bd18a.js";let T,E=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const _e=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let r=o;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),G=4096;function oe(){(T===void 0||E+16>G)&&(E=0,T=_e(G));const e=Array.prototype.slice.call(T,E,E+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}function te(e,o){return e===void 0?o===!0?`f_${oe()}`:void 0:e}function Se(e,o=!0){if(ue.value===!0){const t=g(e);return o===!0&&e===void 0&&z(()=>{t.value=`f_${oe()}`}),t}return g(te(e,o))}function we({validate:e,resetValidation:o,requiresQForm:t}){const r=ae(ie,!1);if(r!==!1){const{props:v,proxy:i}=P();Object.assign(i,{validate:e,resetValidation:o}),x(()=>v.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(i)):r.bindComponent(i)}),z(()=>{v.disable!==!0&&r.bindComponent(i)}),H(()=>{v.disable!==!0&&r.unbindComponent(i)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const W=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,X=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Y=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,I=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,M=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,U={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>W.test(e),hexaColor:e=>X.test(e),hexOrHexaColor:e=>Y.test(e),rgbColor:e=>I.test(e),rgbaColor:e=>M.test(e),rgbOrRgbaColor:e=>I.test(e)||M.test(e),hexOrRgbColor:e=>W.test(e)||I.test(e),hexaOrRgbaColor:e=>X.test(e)||M.test(e),anyColor:e=>Y.test(e)||I.test(e)||M.test(e)},Re=[!0,!1,"ondemand"],Be={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Re.includes(e)}};function Ae(e,o){const{props:t,proxy:r}=P(),v=g(!1),i=g(null),u=g(!1);we({validate:w,resetValidation:S});let d=0,b;const A=s(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),h=s(()=>t.disable!==!0&&A.value===!0&&o.value===!1),_=s(()=>t.error===!0||v.value===!0),O=s(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:i.value);x(()=>t.modelValue,()=>{u.value=!0,h.value===!0&&t.lazyRules===!1&&C()});function V(){t.lazyRules!=="ondemand"&&h.value===!0&&u.value===!0&&C()}x(()=>t.reactiveRules,y=>{y===!0?b===void 0&&(b=x(()=>t.rules,V,{immediate:!0,deep:!0})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),x(()=>t.lazyRules,V),x(e,y=>{y===!0?u.value=!0:h.value===!0&&t.lazyRules!=="ondemand"&&C()});function S(){d++,o.value=!1,u.value=!1,v.value=!1,i.value=null,C.cancel()}function w(y=t.modelValue){if(t.disable===!0||A.value===!1)return!0;const R=++d,D=o.value!==!0?()=>{u.value=!0}:()=>{},q=(c,p)=>{c===!0&&D(),v.value=c,i.value=p||null,o.value=!1},B=[];for(let c=0;c<t.rules.length;c++){const p=t.rules[c];let m;if(typeof p=="function"?m=p(y,U):typeof p=="string"&&U[p]!==void 0&&(m=U[p](y)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&B.push(m)}return B.length===0?(q(!1),!0):(o.value=!0,Promise.all(B).then(c=>{if(c===void 0||Array.isArray(c)===!1||c.length===0)return R===d&&q(!1),!0;const p=c.find(m=>m===!1||typeof m=="string");return R===d&&q(p!==void 0,p),p===void 0},c=>(R===d&&(console.error(c),q(!0)),!1)))}const C=se(w,0);return H(()=>{b!==void 0&&b(),C.cancel()}),Object.assign(r,{resetValidation:S,validate:w}),de(r,"hasError",()=>_.value),{isDirtyModel:u,hasRules:A,hasError:_,errorMessage:O,validate:w,resetValidation:S}}const ee=/^on[A-Z]/;function Ve(e,o){const t={listeners:g({}),attributes:g({})};function r(){const v={},i={};for(const u in e)u!=="class"&&u!=="style"&&ee.test(u)===!1&&(v[u]=e[u]);for(const u in o.props)ee.test(u)===!0&&(i[u]=o.props[u]);t.attributes.value=v,t.listeners.value=i}return fe(r),r(),t}function Fe(e){return e!=null&&(""+e).length!==0}const De={...Ce,...Be,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Te=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ue({requiredForAttr:e=!0,tagProp:o}={}){const{props:t,attrs:r,proxy:v,vnode:i}=P(),u=qe(t,v.$q),d=Se(t.for,e);return{requiredForAttr:e,tag:o===!0?s(()=>t.tag):{value:"label"},isDark:u,editable:s(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Ve(r,i),targetUid:d,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function ze(e){const{props:o,emit:t,slots:r,attrs:v,proxy:i}=P(),{$q:u}=i;let d=null;e.hasValue===void 0&&(e.hasValue=s(()=>Fe(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:L,onFocusout:j}),Object.assign(e,{clearValue:K,onControlFocusin:L,onControlFocusout:j,focus:p}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:b,hasRules:A,hasError:h,errorMessage:_,resetValidation:O}=Ae(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=s(()=>o.bottomSlots===!0||o.hint!==void 0||A.value===!0||o.counter===!0||o.error!==null),w=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=s(()=>`q-field row no-wrap items-start q-field--${w.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(h.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=s(()=>o.labelSlot===!0||o.label!==void 0),D=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&h.value!==!0?` text-${o.labelColor}`:"")),q=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),B=s(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});x(()=>o.for,l=>{e.targetUid.value=te(l,e.requiredForAttr)});function c(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function p(){ye(c)}function m(){xe(c);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function L(l){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function j(l,n){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function K(l){ce(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),ve(()=>{const n=b.value;O(),b.value=n})}function le(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:F},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},re())),h.value===!0&&o.noErrorIcon===!1&&l.push($("error",[a(J,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push($("inner-loading-append",r.loading!==void 0?r.loading():[a(he,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push($("inner-clearable-append",[a(J,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:K})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:F},r.append())),e.getInnerAppend!==void 0&&l.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function re(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),R.value===!0&&l.push(a("div",{class:D.value},k(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(k(r.default))}function ne(){let l,n;h.value===!0?_.value!==null?(l=[a("div",{role:"alert"},_.value)],n=`q--slot-error-${_.value}`):(l=k(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=k(r.hint),n="q--slot-hint"));const Z=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&Z===!1&&l===void 0)return;const Q=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:F},[o.hideBottomSpace===!0?Q:a(ge,{name:"q-transition--field-message"},()=>Q),Z===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function $(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let N=!1;return pe(()=>{N=!0}),me(()=>{N===!0&&o.autofocus===!0&&i.focus()}),o.autofocus===!0&&z(()=>{i.focus()}),H(()=>{d!==null&&clearTimeout(d)}),Object.assign(i,{focus:p,blur:m}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...B.value}:B.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,v.class],style:v.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:F},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},le()),S.value===!0?ne():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:F},r.after()):null])}}const He={name:String};function Le(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function je(e){return s(()=>e.name||e.for)}const $e=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ke=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ee=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ie=/[a-z0-9_ -]$/i;function Ke(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(be.is.firefox===!0?Ie.test(t.data)===!1:$e.test(t.data)===!0||ke.test(t.data)===!0||Ee.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{He as a,Te as b,je as c,Ue as d,ze as e,Fe as f,Ke as g,Le as h,De as u};
