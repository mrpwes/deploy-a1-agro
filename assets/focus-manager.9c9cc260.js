import{j as l}from"./index.75911f42.js";const s={dark:{type:Boolean,default:null}};function r(e,t){return l(()=>e.dark===null?t.dark.isActive:e.dark)}let a=[],n=[];function u(e){n=n.filter(t=>t!==e)}function i(e){u(e),n.push(e)}function c(e){u(e),n.length===0&&a.length!==0&&(a[a.length-1](),a=[])}function d(e){n.length===0?e():a.push(e)}function f(e){a=a.filter(t=>t!==e)}export{d as a,r as b,c,i as d,f as r,s as u};