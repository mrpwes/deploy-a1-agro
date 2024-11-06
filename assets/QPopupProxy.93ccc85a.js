import{a as x}from"./date.56c1f476.js";import{G as f,z as j,m as w,Q as P}from"./position-engine.573b6235.js";import{j as c,k as C,r as p,h as D,q as S,p as B,t as Q}from"./index.fa342762.js";import{d as k}from"./QSelect.9e704e12.js";const M=["gregorian","persian"],E={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>M.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},F=["update:modelValue"];function I(e){return e.year+"/"+f(e.month)+"/"+f(e.day)}function $(e,d){const l=c(()=>e.disable!==!0&&e.readonly!==!0),m=c(()=>l.value===!0?0:-1),s=c(()=>{const a=[];return e.color!==void 0&&a.push(`bg-${e.color}`),e.textColor!==void 0&&a.push(`text-${e.textColor}`),a.join(" ")});function g(){return e.locale!==void 0?{...d.lang.date,...e.locale}:d.lang.date}function r(a){const n=new Date,u=a===!0?null:0;if(e.calendar==="persian"){const o=x(n);return{year:o.jy,month:o.jm,day:o.jd}}return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate(),hour:u,minute:u,second:u,millisecond:u}}return{editable:l,tabindex:m,headerClass:s,getLocale:g,getCurrentDate:r}}var z=C({name:"QPopupProxy",props:{...j,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:d,emit:l,attrs:m}){const{proxy:s}=Q(),{$q:g}=s,r=p(!1),a=p(null),n=c(()=>parseInt(e.breakpoint,10)),{canShow:u}=w({showing:r});function o(){return g.screen.width<n.value||g.screen.height<n.value?"dialog":"menu"}const i=p(o()),v=c(()=>i.value==="menu"?{maxHeight:"99vh"}:{});D(()=>o(),t=>{r.value!==!0&&(i.value=t)});function y(t){r.value=!0,l("show",t)}function b(t){r.value=!1,i.value=o(),l("hide",t)}return Object.assign(s,{show(t){u(t)===!0&&a.value.show(t)},hide(t){a.value.hide(t)},toggle(t){a.value.toggle(t)}}),S(s,"currentComponent",()=>({type:i.value,ref:a.value})),()=>{const t={ref:a,...v.value,...m,onShow:y,onHide:b};let h;return i.value==="dialog"?h=P:(h=k,Object.assign(t,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),B(h,t,d.default)}}});export{z as Q,F as a,$ as b,I as g,E as u};
