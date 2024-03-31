import{u as ae,a as ne,b as le,c as ie,d as re,e as ue,f as G,g as oe}from"./use-key-composition.8405adc5.js";import{r as X,h as I,i as L,s as se,j as E,k as fe,l as de,m as ce,p as U,q as ge,t as me,v as J}from"./index.f0829a23.js";import{a as ve}from"./focus-manager.301f266b.js";const p={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},H={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},te=Object.keys(H);te.forEach(e=>{H[e].regex=new RegExp(H[e].pattern)});const he=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+te.join("")+"])|(.)","g"),ee=/[.*+?^${}()|[\]\\]/g,h=String.fromCharCode(1),ke={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Me(e,C,q,S){let c,g,A,V,j,M;const w=X(null),f=X(b());function Y(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,B),I(()=>e.mask,l=>{if(l!==void 0)K(f.value,!0);else{const a=F(f.value);B(),e.modelValue!==a&&C("update:modelValue",a)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&K(f.value,!0)}),I(()=>e.unmaskedValue,()=>{w.value===!0&&K(f.value)});function b(){if(B(),w.value===!0){const l=D(F(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function N(l){if(l<c.length)return c.slice(-l);let a="",i=c;const n=i.indexOf(h);if(n>-1){for(let u=l-i.length;u>0;u--)a+=h;i=i.slice(0,n)+a+i.slice(n)}return i}function B(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&Y(),w.value===!1){V=void 0,c="",g="";return}const l=p[e.mask]===void 0?e.mask:p[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(ee,"\\$&"),n=[],u=[],r=[];let v=e.reverseFillMask===!0,o="",s="";l.replace(he,(k,t,m,T,R)=>{if(T!==void 0){const x=H[T];r.push(x),s=x.negate,v===!0&&(u.push("(?:"+s+"+)?("+x.pattern+"+)?(?:"+s+"+)?("+x.pattern+"+)?"),v=!1),u.push("(?:"+s+"+)?("+x.pattern+")?")}else if(m!==void 0)o="\\"+(m==="\\"?"":m),r.push(m),n.push("([^"+o+"]+)?"+o+"?");else{const x=t!==void 0?t:R;o=x==="\\"?"\\\\\\\\":x.replace(ee,"\\\\$&"),r.push(x),n.push("([^"+o+"]+)?"+o+"?")}});const Z=new RegExp("^"+n.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),P=u.length-1,d=u.map((k,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+k):t===P?new RegExp("^"+k+"("+(s===""?".":s)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+k));A=r,V=k=>{const t=Z.exec(e.reverseFillMask===!0?k:k.slice(0,r.length+1));t!==null&&(k=t.slice(1).join(""));const m=[],T=d.length;for(let R=0,x=k;R<T;R++){const z=d[R].exec(x);if(z===null)break;x=x.slice(z.shift().length),m.push(...z)}return m.length!==0?m.join(""):k},c=r.map(k=>typeof k=="string"?k:h).join(""),g=c.split(h).join(a)}function K(l,a,i){const n=S.value,u=n.selectionEnd,r=n.value.length-u,v=F(l);a===!0&&B();const o=D(v),s=e.fillMask!==!1?$(o):o,Z=f.value!==s;n.value!==s&&(n.value=s),Z===!0&&(f.value=s),document.activeElement===n&&L(()=>{if(s===g){const d=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(d,d,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const d=n.selectionEnd;let k=u-1;for(let t=j;t<=k&&t<d;t++)c[t]!==h&&k++;y.right(n,k);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)>-1){const d=e.reverseFillMask===!0?u===0?s.length>o.length?1:0:Math.max(0,s.length-(s===g?0:Math.min(o.length,r)+1))+1:u;n.setSelectionRange(d,d,"forward");return}if(e.reverseFillMask===!0)if(Z===!0){const d=Math.max(0,s.length-(s===g?0:Math.min(o.length,r+1)));d===1&&u===1?n.setSelectionRange(d,d,"forward"):y.rightReverse(n,d)}else{const d=s.length-r;n.setSelectionRange(d,d,"backward")}else if(Z===!0){const d=Math.max(0,c.indexOf(h),Math.min(o.length,u)-1);y.right(n,d)}else{const d=u-1;y.right(n,d)}});const P=e.unmaskedValue===!0?F(s):s;String(e.modelValue)!==P&&(e.modelValue!==null||P!=="")&&q(P,!0)}function Q(l,a,i){const n=D(F(l.value));a=Math.max(0,c.indexOf(h),Math.min(n.length,a)),j=a,l.setSelectionRange(a,i,"forward")}const y={left(l,a){const i=c.slice(a-1).indexOf(h)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(c[n]===h){a=n,i===!0&&a++;break}if(n<0&&c[a]!==void 0&&c[a]!==h)return y.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(c[n]===h){a=n;break}else c[n-1]===h&&(a=n);if(n>i&&c[a-1]!==void 0&&c[a-1]!==h)return y.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=N(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===h){a=n;break}else if(i[n]===h&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==h)return y.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=N(i),u=n.slice(0,a+1).indexOf(h)===-1;let r=Math.min(i,a+1);for(;r<=i;r++)if(n[r-1]===h){a=r,a>0&&u===!0&&a--;break}if(r>i&&n[a-1]!==void 0&&n[a-1]!==h)return y.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function W(l){C("click",l),M=void 0}function _(l){if(C("keydown",l),se(l)===!0||l.altKey===!0)return;const a=S.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(M=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&M===void 0&&(M=a.selectionDirection==="forward"?i:n);const u=y[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),u(a,M===i?n:i),l.shiftKey){const r=a.selectionStart;a.setSelectionRange(Math.min(M,r),Math.max(M,r),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(y.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(y.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function D(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const a=A;let i=0,n="";for(let u=0;u<a.length;u++){const r=l[i],v=a[u];if(typeof v=="string")n+=v,r===v&&i++;else if(r!==void 0&&v.regex.test(r))n+=v.transform!==void 0?v.transform(r):r,i++;else return n}return n}function O(l){const a=A,i=c.indexOf(h);let n=l.length-1,u="";for(let r=a.length-1;r>=0&&n>-1;r--){const v=a[r];let o=l[n];if(typeof v=="string")u=v+u,o===v&&n--;else if(o!==void 0&&v.regex.test(o))do u=(v.transform!==void 0?v.transform(o):o)+u,n--,o=l[n];while(i===r&&o!==void 0&&v.regex.test(o));else return u}return u}function F(l){return typeof l!="string"||V===void 0?typeof l=="number"?V(""+l):l:V(l)}function $(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:f,hasMask:w,moveCursorForPaste:Q,updateMaskValue:K,onMaskedKeydown:_,onMaskedClick:W}}function we(e,C){function q(){const S=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(S)===S&&("length"in S?Array.from(S):[S]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return C===!0?E(()=>{if(e.type==="file")return q()}):E(q)}var Se=fe({name:"QInput",inheritAttrs:!1,props:{...ae,...ke,...ne,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...le,"paste","change","keydown","click","animationend"],setup(e,{emit:C,attrs:q}){const{proxy:S}=me(),{$q:c}=S,g={};let A=NaN,V,j,M=null,w;const f=X(null),Y=ie(e),{innerValue:b,hasMask:N,moveCursorForPaste:B,updateMaskValue:K,onMaskedKeydown:Q,onMaskedClick:y}=Me(e,C,o,f),W=we(e,!0),_=E(()=>G(b.value)),D=oe(r),O=re(),F=E(()=>e.type==="textarea"||e.autogrow===!0),$=E(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),l=E(()=>{const t={...O.splitAttrs.listeners.value,onInput:r,onPaste:u,onChange:Z,onBlur:P,onFocus:J};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=D,N.value===!0&&(t.onKeydown=Q,t.onClick=y),e.autogrow===!0&&(t.onAnimationend=v),t}),a=E(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Y.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(N.value===!0){if(j===!0&&(j=!1,String(t)===A))return;K(t)}else b.value!==t&&(b.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(V===!0?V=!1:delete g.value));e.autogrow===!0&&L(s)}),I(()=>e.autogrow,t=>{t===!0?L(s):f.value!==null&&q.rows>0&&(f.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&L(s)});function i(){ve(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==O.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function u(t){if(N.value===!0&&e.reverseFillMask!==!0){const m=t.target;B(m,m.selectionStart,m.selectionEnd)}C("paste",t)}function r(t){if(!t||!t.target)return;if(e.type==="file"){C("update:modelValue",t.target.files);return}const m=t.target.value;if(t.target.qComposing===!0){g.value=m;return}if(N.value===!0)K(m,!1,t.inputType);else if(o(m),$.value===!0&&t.target===document.activeElement){const{selectionStart:T,selectionEnd:R}=t.target;T!==void 0&&R!==void 0&&L(()=>{t.target===document.activeElement&&m.indexOf(t.target.value)===0&&t.target.setSelectionRange(T,R)})}e.autogrow===!0&&s()}function v(t){C("animationend",t),s()}function o(t,m){w=()=>{M=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&A!==t&&(A=t,m===!0&&(j=!0),C("update:modelValue",t),L(()=>{A===t&&(A=NaN)})),w=void 0},e.type==="number"&&(V=!0,g.value=t),e.debounce!==void 0?(M!==null&&clearTimeout(M),g.value=t,M=setTimeout(w,e.debounce)):w()}function s(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const m=t.parentNode.style,{scrollTop:T}=t,{overflowY:R,maxHeight:x}=c.platform.is.firefox===!0?{}:window.getComputedStyle(t),z=R!==void 0&&R!=="scroll";z===!0&&(t.style.overflowY="hidden"),m.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",z===!0&&(t.style.overflowY=parseInt(x,10)<t.scrollHeight?"auto":"hidden"),m.marginBottom="",t.scrollTop=T}})}function Z(t){D(t),M!==null&&(clearTimeout(M),M=null),w!==void 0&&w(),C("change",t.target.value)}function P(t){t!==void 0&&J(t),M!==null&&(clearTimeout(M),M=null),w!==void 0&&w(),V=!1,j=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=b.value!==void 0?b.value:"")})}function d(){return g.hasOwnProperty("value")===!0?g.value:b.value!==void 0?b.value:""}de(()=>{P()}),ce(()=>{e.autogrow===!0&&s()}),Object.assign(O,{innerValue:b,fieldClass:E(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:E(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:o,hasValue:_,floatingLabel:E(()=>_.value===!0&&(e.type!=="number"||isNaN(b.value)===!1)||G(e.displayValue)),getControl:()=>U(F.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:d()}:W.value}),getShadowControl:()=>U("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[U("span",{class:"invisible"},d()),U("span",e.shadowText)])});const k=ue(O);return Object.assign(S,{focus:i,select:n,getNativeElement:()=>f.value}),ge(S,"nativeEl",()=>f.value),k}});export{Se as Q};
