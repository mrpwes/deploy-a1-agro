import{k as n,a8 as i,a9 as l,j as d,p as c,I as u,t as p,M as f,aa as h}from"./index.75911f42.js";import{u as m,b as q}from"./focus-manager.9c9cc260.js";import{D as v,E as _}from"./position-engine.06733d87.js";var g=n({name:"QCardActions",props:{...i,vertical:Boolean},setup(e,{slots:a}){const r=l(e),t=d(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>c("div",{class:t.value},u(a.default))}}),b=n({name:"QCard",props:{...m,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:r}}=p(),t=q(e,r),o=d(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>c(e.tag,{class:o.value},u(a.default))}});function s(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const a=parseInt(e,10);return isNaN(a)?0:a}var x=f({name:"close-popup",beforeMount(e,{value:a}){const r={depth:s(a),handler(t){r.depth!==0&&setTimeout(()=>{const o=v(e);o!==void 0&&_(o,t,r.depth)})},handlerKey(t){h(t,13)===!0&&r.handler(t)}};e.__qclosepopup=r,e.addEventListener("click",r.handler),e.addEventListener("keyup",r.handlerKey)},updated(e,{value:a,oldValue:r}){a!==r&&(e.__qclosepopup.depth=s(a))},beforeUnmount(e){const a=e.__qclosepopup;e.removeEventListener("click",a.handler),e.removeEventListener("keyup",a.handlerKey),delete e.__qclosepopup}});export{x as C,b as Q,g as a};