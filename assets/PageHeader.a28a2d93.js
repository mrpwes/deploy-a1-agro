import{c as Q,p as k,Q as C}from"./QBtn.e7072616.js";import{Q as I,u as N,a as O,b as j}from"./pageHeader.324bfd82.js";import{H as R,R as m,S as $,r as b,c as l,w as d,o as F,h,g as L,_ as D,Y as U,e as A,a0 as E,l as p,j as u,k as g,m as H,a1 as V,ae as G,af as K}from"./index.7fc8f2b6.js";var Y=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:v,emit:c}){const{proxy:{$q:f}}=L(),a=R($,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const n=b(parseInt(t.heightHint,10)),r=b(!0),_=l(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||f.platform.is.ios&&a.isContainer.value===!0),w=l(()=>{if(t.modelValue!==!0)return 0;if(_.value===!0)return r.value===!0?n.value:0;const e=n.value-a.scroll.value.position;return e>0?e:0}),y=l(()=>t.modelValue!==!0||_.value===!0&&r.value!==!0),S=l(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),q=l(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=l(()=>{const e=a.rows.value.top,s={};return e[0]==="l"&&a.left.space===!0&&(s[f.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(s[f.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),s});function o(e,s){a.update("header",e,s)}function i(e,s){e.value!==s&&(e.value=s)}function B({height:e}){i(n,e),o("size",e)}function P(e){S.value===!0&&i(r,!0),c("focusin",e)}d(()=>t.modelValue,e=>{o("space",e),i(r,!0),a.animate()}),d(w,e=>{o("offset",e)}),d(()=>t.reveal,e=>{e===!1&&i(r,t.modelValue)}),d(r,e=>{a.animate(),c("reveal",e)}),d(a.scroll,e=>{t.reveal===!0&&i(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const x={};return a.instances.header=x,t.modelValue===!0&&o("size",n.value),o("space",t.modelValue),o("offset",w.value),F(()=>{a.instances.header===x&&(a.instances.header=void 0,o("size",0),o("offset",0),o("space",!1))}),()=>{const e=k(v.default,[]);return t.elevated===!0&&e.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(h(I,{debounce:0,onResize:B})),h("header",{class:q.value,style:z.value,onFocusin:P},e)}}}),J="/assets/boy-avatar.8512a60a.png";const M=t=>(G("data-v-a6dd833a"),t=t(),K(),t),T={class:"tw-flex tw-justify-between tw-items-center tw-p-2 tw-bg-primary tw-text-white tw-bg-gray-100"},W={class:"tw-col-span-2 tw-inline-flex"},X={class:"tw-text-3xl tw-font-extrabold tw-pl-3"},Z={class:"tw-mr-5 designed raisedbox",style:{display:"flex","justify-content":"center","align-items":"center",height:"100%","padding-top":"3px","padding-bottom":"3px","padding-right":"3px","padding-left":"15px"}},ee={class:"col q-ma-none text-weight-regular"},te=M(()=>u("img",{src:J},null,-1)),ae={__name:"PageHeader",props:{currentPage:String},setup(t){const v=N(),c=O();return(f,a)=>{const n=U("router-link");return A(),E(Y,{elevated:""},{default:p(()=>[u("div",T,[u("div",W,[g(C,{flat:"",onClick:H(c).toggeDrawer,round:"",dense:"",icon:"menu"},null,8,["onClick"]),u("h2",X,V(t.currentPage),1)]),g(n,{class:"no-decoration",to:"/profile"},{default:p(()=>[u("div",Z,[u("h6",ee,V(H(v).getEmployeeName)+"\xA0 ",1),g(j,{size:"2.5rem"},{default:p(()=>[te]),_:1})])]),_:1})])]),_:1})}}};var ne=D(ae,[["__scopeId","data-v-a6dd833a"]]);export{ne as P,J as _};
