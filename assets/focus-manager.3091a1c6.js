import{c as l}from"./index.7fc8f2b6.js";const s={dark:{type:Boolean,default:null}};function r(e,t){return l(()=>e.dark===null?t.dark.isActive:e.dark)}let a=[],n=[];function u(e){n=n.filter(t=>t!==e)}function c(e){u(e),n.push(e)}function i(e){u(e),n.length===0&&a.length!==0&&(a[a.length-1](),a=[])}function d(e){n.length===0?e():a.push(e)}function f(e){a=a.filter(t=>t!==e)}export{d as a,r as b,i as c,c as d,f as r,s as u};
