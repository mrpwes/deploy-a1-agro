import{r as S,G as x,a as f,o as m,O,n as g,h as u,g as q,F as b,c as h,a7 as z}from"./index.f0077d57.js";import{c as w,q as E,r as P,a as R,s as C}from"./QBtn.28f0525d.js";function I(){const e=S(!x.value);return e.value===!1&&f(()=>{e.value=!0}),e}const p=typeof ResizeObserver!="undefined",y=p===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var A=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,t,i={width:-1,height:-1};function a(r){r===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:o}=t;(r!==i.width||o!==i.height)&&(i={width:r,height:o},d("resize",i))}}const{proxy:c}=q();if(c.trigger=a,p===!0){let r;const o=l=>{t=c.$el.parentNode,t?(r=new ResizeObserver(a),r.observe(t),s()):l!==!0&&g(()=>{o(!0)})};return f(()=>{o()}),m(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),O}else{let l=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",a,b.passive),o=void 0)},v=function(){l(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",a,b.passive),s())};const r=I();let o;return f(()=>{g(()=>{t=c.$el,t&&v()})}),m(l),()=>{if(r.value===!0)return u("object",{style:y.style,tabindex:-1,type:"text/html",data:y.url,"aria-hidden":"true",onLoad:v})}}}}),B=w({name:"QAvatar",props:{...E,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:d}){const n=P(e),t=h(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),i=h(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[u(R,{name:e.icon})]:void 0;return u("div",{class:t.value,style:n.value},[u("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},C(d.default,a))])}}});const D=z("global",{state:()=>({employeeName:"Maraan, Arnieno P.",employeeId:"111111"}),getters:{getEmployeeName(e){return e.employeeName},getEmployeeId(e){return e.employeeId}},actions:{isMobile(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}}),L=z("pageHeader",{state:()=>({drawer:S(!1)}),getters:{getDrawer(e){return e.drawer}},actions:{toggeDrawer(){this.drawer=!this.drawer}}});export{A as Q,L as a,B as b,D as u};
