import{c as me,Q as ae}from"./QBtn.28f0525d.js";import{u as ge,a as we,b as ve,c as he,d as ke,e as xe,f as ie,g as ye}from"./use-key-composition.d795638e.js";import{r as se,w as P,n as K,s as Me,c as A,o as be,a as Ce,h as Q,i as Se,g as _e,d as oe,u as Ve,e as W,f as X,j as b,k as $,l as ne,m as M,p as re,q as Z,t as le}from"./index.f0077d57.js";import{a as Fe}from"./focus-manager.2d3bd18a.js";import{_ as Ee}from"./logo.0a83e219.js";const ue={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},fe=Object.keys(G);fe.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const pe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+fe.join("")+"])|(.)","g"),de=/[.*+?^${}()|[\]\\]/g,k=String.fromCharCode(1),Ae={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Re(e,u,N,g){let r,w,R,p,j,y;const C=se(null),f=se(V());function J(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,U),P(()=>e.mask,l=>{if(l!==void 0)D(f.value,!0);else{const a=F(f.value);U(),e.modelValue!==a&&u("update:modelValue",a)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&D(f.value,!0)}),P(()=>e.unmaskedValue,()=>{C.value===!0&&D(f.value)});function V(){if(U(),C.value===!0){const l=q(F(e.modelValue));return e.fillMask!==!1?Y(l):l}return e.modelValue}function B(l){if(l<r.length)return r.slice(-l);let a="",s=r;const n=s.indexOf(k);if(n>-1){for(let o=l-s.length;o>0;o--)a+=k;s=s.slice(0,n)+a+s.slice(n)}return s}function U(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&J(),C.value===!1){p=void 0,r="",w="";return}const l=ue[e.mask]===void 0?e.mask:ue[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(de,"\\$&"),n=[],o=[],i=[];let h=e.reverseFillMask===!0,d="",c="";l.replace(pe,(x,t,v,T,E)=>{if(T!==void 0){const S=G[T];i.push(S),c=S.negate,h===!0&&(o.push("(?:"+c+"+)?("+S.pattern+"+)?(?:"+c+"+)?("+S.pattern+"+)?"),h=!1),o.push("(?:"+c+"+)?("+S.pattern+")?")}else if(v!==void 0)d="\\"+(v==="\\"?"":v),i.push(v),n.push("([^"+d+"]+)?"+d+"?");else{const S=t!==void 0?t:E;d=S==="\\"?"\\\\\\\\":S.replace(de,"\\\\$&"),i.push(S),n.push("([^"+d+"]+)?"+d+"?")}});const L=new RegExp("^"+n.join("")+"("+(d===""?".":"[^"+d+"]")+"+)?"+(d===""?"":"["+d+"]*")+"$"),O=o.length-1,m=o.map((x,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+x):t===O?new RegExp("^"+x+"("+(c===""?".":c)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+x));R=i,p=x=>{const t=L.exec(e.reverseFillMask===!0?x:x.slice(0,i.length+1));t!==null&&(x=t.slice(1).join(""));const v=[],T=m.length;for(let E=0,S=x;E<T;E++){const z=m[E].exec(S);if(z===null)break;S=S.slice(z.shift().length),v.push(...z)}return v.length!==0?v.join(""):x},r=i.map(x=>typeof x=="string"?x:k).join(""),w=r.split(k).join(a)}function D(l,a,s){const n=g.value,o=n.selectionEnd,i=n.value.length-o,h=F(l);a===!0&&U();const d=q(h),c=e.fillMask!==!1?Y(d):d,L=f.value!==c;n.value!==c&&(n.value=c),L===!0&&(f.value=c),document.activeElement===n&&K(()=>{if(c===w){const m=e.reverseFillMask===!0?w.length:0;n.setSelectionRange(m,m,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const m=n.selectionEnd;let x=o-1;for(let t=j;t<=x&&t<m;t++)r[t]!==k&&x++;_.right(n,x);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const m=e.reverseFillMask===!0?o===0?c.length>d.length?1:0:Math.max(0,c.length-(c===w?0:Math.min(d.length,i)+1))+1:o;n.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(L===!0){const m=Math.max(0,c.length-(c===w?0:Math.min(d.length,i+1)));m===1&&o===1?n.setSelectionRange(m,m,"forward"):_.rightReverse(n,m)}else{const m=c.length-i;n.setSelectionRange(m,m,"backward")}else if(L===!0){const m=Math.max(0,r.indexOf(k),Math.min(d.length,o)-1);_.right(n,m)}else{const m=o-1;_.right(n,m)}});const O=e.unmaskedValue===!0?F(c):c;String(e.modelValue)!==O&&(e.modelValue!==null||O!=="")&&N(O,!0)}function ee(l,a,s){const n=q(F(l.value));a=Math.max(0,r.indexOf(k),Math.min(n.length,a)),j=a,l.setSelectionRange(a,s,"forward")}const _={left(l,a){const s=r.slice(a-1).indexOf(k)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(r[n]===k){a=n,s===!0&&a++;break}if(n<0&&r[a]!==void 0&&r[a]!==k)return _.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const s=l.value.length;let n=Math.min(s,a+1);for(;n<=s;n++)if(r[n]===k){a=n;break}else r[n-1]===k&&(a=n);if(n>s&&r[a-1]!==void 0&&r[a-1]!==k)return _.left(l,s);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const s=B(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(s[n-1]===k){a=n;break}else if(s[n]===k&&(a=n,n===0))break;if(n<0&&s[a]!==void 0&&s[a]!==k)return _.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const s=l.value.length,n=B(s),o=n.slice(0,a+1).indexOf(k)===-1;let i=Math.min(s,a+1);for(;i<=s;i++)if(n[i-1]===k){a=i,a>0&&o===!0&&a--;break}if(i>s&&n[a-1]!==void 0&&n[a-1]!==k)return _.leftReverse(l,s);l.setSelectionRange(a,a,"forward")}};function te(l){u("click",l),y=void 0}function H(l){if(u("keydown",l),Me(l)===!0||l.altKey===!0)return;const a=g.value,s=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(y=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&y===void 0&&(y=a.selectionDirection==="forward"?s:n);const o=_[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),o(a,y===s?n:s),l.shiftKey){const i=a.selectionStart;a.setSelectionRange(Math.min(y,i),Math.max(y,i),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&s===n?(_.left(a,s),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&s===n&&(_.rightReverse(a,n),a.setSelectionRange(s,a.selectionEnd,"forward"))}function q(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return I(l);const a=R;let s=0,n="";for(let o=0;o<a.length;o++){const i=l[s],h=a[o];if(typeof h=="string")n+=h,i===h&&s++;else if(i!==void 0&&h.regex.test(i))n+=h.transform!==void 0?h.transform(i):i,s++;else return n}return n}function I(l){const a=R,s=r.indexOf(k);let n=l.length-1,o="";for(let i=a.length-1;i>=0&&n>-1;i--){const h=a[i];let d=l[n];if(typeof h=="string")o=h+o,d===h&&n--;else if(d!==void 0&&h.regex.test(d))do o=(h.transform!==void 0?h.transform(d):d)+o,n--,d=l[n];while(s===i&&d!==void 0&&h.regex.test(d));else return o}return o}function F(l){return typeof l!="string"||p===void 0?typeof l=="number"?p(""+l):l:p(l)}function Y(l){return w.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?w.slice(0,-l.length)+l:l+w.slice(l.length)}return{innerValue:f,hasMask:C,moveCursorForPaste:ee,updateMaskValue:D,onMaskedKeydown:H,onMaskedClick:te}}function Te(e,u){function N(){const g=e.modelValue;try{const r="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(g)===g&&("length"in g?Array.from(g):[g]).forEach(w=>{r.items.add(w)}),{files:r.files}}catch{return{files:void 0}}}return u===!0?A(()=>{if(e.type==="file")return N()}):A(N)}var ce=me({name:"QInput",inheritAttrs:!1,props:{...ge,...Ae,...we,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ve,"paste","change","keydown","click","animationend"],setup(e,{emit:u,attrs:N}){const{proxy:g}=_e(),{$q:r}=g,w={};let R=NaN,p,j,y=null,C;const f=se(null),J=he(e),{innerValue:V,hasMask:B,moveCursorForPaste:U,updateMaskValue:D,onMaskedKeydown:ee,onMaskedClick:_}=Re(e,u,d,f),te=Te(e,!0),H=A(()=>ie(V.value)),q=ye(i),I=ke(),F=A(()=>e.type==="textarea"||e.autogrow===!0),Y=A(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),l=A(()=>{const t={...I.splitAttrs.listeners.value,onInput:i,onPaste:o,onChange:L,onBlur:O,onFocus:oe};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=q,B.value===!0&&(t.onKeydown=ee,t.onClick=_),e.autogrow===!0&&(t.onAnimationend=h),t}),a=A(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:J.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});P(()=>e.type,()=>{f.value&&(f.value.value=e.modelValue)}),P(()=>e.modelValue,t=>{if(B.value===!0){if(j===!0&&(j=!1,String(t)===R))return;D(t)}else V.value!==t&&(V.value=t,e.type==="number"&&w.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete w.value));e.autogrow===!0&&K(c)}),P(()=>e.autogrow,t=>{t===!0?K(c):f.value!==null&&N.rows>0&&(f.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&K(c)});function s(){Fe(()=>{const t=document.activeElement;f.value!==null&&f.value!==t&&(t===null||t.id!==I.targetUid.value)&&f.value.focus({preventScroll:!0})})}function n(){f.value!==null&&f.value.select()}function o(t){if(B.value===!0&&e.reverseFillMask!==!0){const v=t.target;U(v,v.selectionStart,v.selectionEnd)}u("paste",t)}function i(t){if(!t||!t.target)return;if(e.type==="file"){u("update:modelValue",t.target.files);return}const v=t.target.value;if(t.target.qComposing===!0){w.value=v;return}if(B.value===!0)D(v,!1,t.inputType);else if(d(v),Y.value===!0&&t.target===document.activeElement){const{selectionStart:T,selectionEnd:E}=t.target;T!==void 0&&E!==void 0&&K(()=>{t.target===document.activeElement&&v.indexOf(t.target.value)===0&&t.target.setSelectionRange(T,E)})}e.autogrow===!0&&c()}function h(t){u("animationend",t),c()}function d(t,v){C=()=>{y=null,e.type!=="number"&&w.hasOwnProperty("value")===!0&&delete w.value,e.modelValue!==t&&R!==t&&(R=t,v===!0&&(j=!0),u("update:modelValue",t),K(()=>{R===t&&(R=NaN)})),C=void 0},e.type==="number"&&(p=!0,w.value=t),e.debounce!==void 0?(y!==null&&clearTimeout(y),w.value=t,y=setTimeout(C,e.debounce)):C()}function c(){requestAnimationFrame(()=>{const t=f.value;if(t!==null){const v=t.parentNode.style,{scrollTop:T}=t,{overflowY:E,maxHeight:S}=r.platform.is.firefox===!0?{}:window.getComputedStyle(t),z=E!==void 0&&E!=="scroll";z===!0&&(t.style.overflowY="hidden"),v.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",z===!0&&(t.style.overflowY=parseInt(S,10)<t.scrollHeight?"auto":"hidden"),v.marginBottom="",t.scrollTop=T}})}function L(t){q(t),y!==null&&(clearTimeout(y),y=null),C!==void 0&&C(),u("change",t.target.value)}function O(t){t!==void 0&&oe(t),y!==null&&(clearTimeout(y),y=null),C!==void 0&&C(),p=!1,j=!1,delete w.value,e.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=V.value!==void 0?V.value:"")})}function m(){return w.hasOwnProperty("value")===!0?w.value:V.value!==void 0?V.value:""}be(()=>{O()}),Ce(()=>{e.autogrow===!0&&c()}),Object.assign(I,{innerValue:V,fieldClass:A(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:A(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:f,emitValue:d,hasValue:H,floatingLabel:A(()=>H.value===!0&&(e.type!=="number"||isNaN(V.value)===!1)||ie(e.displayValue)),getControl:()=>Q(F.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:m()}:te.value}),getShadowControl:()=>Q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[Q("span",{class:"invisible"},m()),Q("span",e.shadowText)])});const x=xe(I);return Object.assign(g,{focus:s,select:n,getNativeElement:()=>f.value}),Se(g,"nativeEl",()=>f.value),x}});const Ie={class:"tw-flex tw-mx-auto tw-h-screen tw-my-auto tw-w-max"},Oe=b("div",{class:"tw-min-w-min tw-flex tw-my-auto tw-p-2 tw-bg-primary tw-text-white"},[b("div",{class:"tw-flex tw-mb-24 tw-mr-32"},[b("img",{src:Ee,class:"tw-size-32"}),b("div",{class:"tw-my-auto tw-pl-3 tw-text-2xl"},[Z(" A1 Agro Fertilizer "),b("br"),Z("and Chemical Supply ")])])],-1),Pe={class:"tw-w-auto tw-my-auto"},Ne={class:"tw-flex tw-p-3"},je=b("div",{class:"tw-w-24"},null,-1),Be={class:"tw-text-white tw-m-3 tw-bg-gray-100 tw-shadow-lg tw-mx-auto tw-rounded-3xl"},De=b("div",{class:"tw-text-center tw-text-3xl tw-p-4"},"Sign In",-1),Le={class:"tw-p-3 tw-rounded-3xl tw-bg-neutral-300 tw-center tw-mx-5 tw-mt-6 tw-mb-3"},Ue={class:"tw-rounded-3xl tw-bg-neutral-300 tw-center tw-p-3 tw-mx-5"},qe=b("div",null,"PASSWORD",-1),ze={class:"tw-mx-auto tw-w-max"},Ke={key:0,class:"tw-text-red-500"},Ze={key:1},$e={key:2,class:"tw-text-red-500"},He={class:"tw-text-lg tw-text-center tw-p-3"},Ye=b("div",{class:"tw-h-24"},null,-1),et={__name:"LoginPage",setup(e){const u=Ve();return(N,g)=>(W(),X("div",Ie,[Oe,b("div",Pe,[b("div",Ne,[$(ae,{onClick:g[0]||(g[0]=r=>M(u).setUserType("employee")),class:re([{"bg-secondary":M(u).getUserType==="employee","tw-bg-grey":M(u).getUserType==="admin"},"tw-normal-case tw-rounded-full"])},{default:ne(()=>[Z("Employee Login")]),_:1},8,["class"]),$(ae,{onClick:g[1]||(g[1]=r=>M(u).setUserType("admin")),class:re([{"bg-secondary":M(u).getUserType==="admin","tw-bg-grey":M(u).getUserType==="employee"},"tw-mx-4 tw-normal-case tw-rounded-full"])},{default:ne(()=>[Z("Admin Login")]),_:1},8,["class"]),je]),b("div",Be,[De,b("div",Le,[Z(" EMPLOYEE ID "),$(ce,{borderless:"",modelValue:M(u).employeeId,"onUpdate:modelValue":g[2]||(g[2]=r=>M(u).employeeId=r),class:"tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white",dense:"dense"},null,8,["modelValue"])]),b("div",Ue,[qe,$(ce,{borderless:"",modelValue:M(u).password,"onUpdate:modelValue":g[3]||(g[3]=r=>M(u).password=r),class:"tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white",dense:"dense",type:"password"},null,8,["modelValue"])]),b("div",ze,[M(u).firstSubmit&&!M(u).employeeId?(W(),X("span",Ke,"Employee ID is required")):le("",!0),M(u).firstSubmit&&!M(u).employeeId?(W(),X("br",Ze)):le("",!0),M(u).firstSubmit&&!M(u).password?(W(),X("span",$e,"Password is required")):le("",!0)]),b("div",He,[$(ae,{class:"tw-bottom-1 tw-rounded-3xl tw-px-7 bg-secondary tw-normal-case",onClick:g[4]||(g[4]=r=>M(u).firstSubmit=!0),to:"/dashboard"},{default:ne(()=>[Z("Login")]),_:1})])]),Ye])]))}};export{et as default};
