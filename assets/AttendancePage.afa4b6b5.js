import{Q as l}from"./QSelect.6d6ef82c.js";import{Q as d}from"./QTable.a69a31bb.js";import{Q as M}from"./QPage.c1563205.js";import{P as c}from"./PageHeader.7bd2107b.js";import{r as k,o as m,a5 as p,w as O,d as n,c as u,a as e,g as w}from"./index.f0829a23.js";import"./use-key-composition.8405adc5.js";import"./focus-manager.301f266b.js";import"./position-engine.ec5f14b0.js";import"./QList.88c75d04.js";import"./pageHeader.911a550e.js";const A={key:0},I={class:"tw-flex tw-justify-between tw-items-center tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-p-4 tw-rounded-lg"},g=e("div",{class:"tw-flex"},"Present: 12",-1),f=e("div",{class:"tw-flex"},"Late: 0",-1),b=e("div",{class:"tw-flex"},"Absent: 3",-1),_=e("div",{class:"tw-flex tw-pr-4"},"Leave: 0",-1),h={class:"q-my-lg tw-w-7/12 tw-mx-auto"},v={key:1},x={class:"tw-flex tw-justify-between tw-items-center tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-p-4 tw-rounded-lg"},V=e("div",{class:"tw-flex"},"Present: 15",-1),B=e("div",{class:"tw-flex"},"Late: 0",-1),C=e("div",{class:"tw-flex"},"Absent: 0",-1),Q=e("div",{class:"tw-flex tw-pr-4"},"Leave: 0",-1),J={class:"q-my-lg tw-w-7/12 tw-mx-auto"},$={__name:"AttendancePage",setup(T){const a=k("January 1 - 15 2024"),i=["January 1 - 15 2024","January 16 - 31 2024"],o=[{name:"day",required:!0,label:"Day",align:"center  ",field:r=>r.day,format:r=>`${r}`,sortable:!0},{name:"Time-In",align:"center",label:"Time-In",field:"timeIn",sortable:!0},{name:"Time-Out",align:"center",label:"Time-Out",field:"timeOut",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}],P=[{day:1,timeIn:"08:03 AM",timeOut:"05:07 PM",remarks:"Present"},{day:2,timeIn:"08:02 AM",timeOut:"05:05 PM",remarks:"Present"},{day:3,timeIn:"08:01 AM",timeOut:"05:09 PM",remarks:"Present"},{day:4,timeIn:"08:05 AM",timeOut:"05:08 PM",remarks:"Present"},{day:5,timeIn:"08:08 AM",timeOut:"05:12 PM",remarks:"Present"},{day:6,timeIn:"07:55 AM",timeOut:"05:23 PM",remarks:"Present"},{day:7,timeIn:"07:58 AM",timeOut:"05:15 PM",remarks:"Present"},{day:8,timeIn:"08:13 AM",timeOut:"05:09 PM",remarks:"Present"},{day:9,timeIn:"08:12 AM",timeOut:"05:05 PM",remarks:"Present"},{day:10,timeIn:"08:11 AM",timeOut:"05:06 PM",remarks:"Present"},{day:11,timeIn:"08:07 AM",timeOut:"05:02 PM",remarks:"Present"},{day:12,timeIn:"08:09 AM",timeOut:"05:03 PM",remarks:"Present"},{day:13,timeIn:null,timeOut:null,remarks:"Absent"},{day:14,timeIn:null,timeOut:null,remarks:"Absent"},{day:15,timeIn:null,timeOut:null,remarks:"Absent"}],y=[{day:1,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:2,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:3,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:4,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:5,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:6,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:7,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:8,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:9,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:10,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:11,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:12,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:13,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:14,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"},{day:15,timeIn:"08:00 AM",timeOut:"05:00 PM",remarks:"Present"}];return(r,t)=>(m(),p(M,null,{default:O(()=>[n(c,{currentPage:"Attendance"}),a.value==="January 1 - 15 2024"?(m(),u("div",A,[e("div",I,[n(l,{borderless:"",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),options:i,onOnChange:t[1]||(t[1]=s=>r.onChange(s)),class:"tw-flex tw-pl-3 tw-w-min tw-text-nowrap tw-outline tw-outline-1 tw-outline-slate-400 tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-lg"},null,8,["modelValue"]),g,f,b,_]),e("div",h,[n(d,{class:"my-sticky-header-table tw-rounded-xl",flat:"",bordered:"",title:"",rows:P,columns:o,"row-key":"name","hide-pagination":!0,"rows-per-page-options":[0],sortBy:"day"})])])):w("",!0),a.value==="January 16 - 31 2024"?(m(),u("div",v,[e("div",x,[n(l,{borderless:"",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value=s),options:i,onOnChange:t[3]||(t[3]=s=>r.onChange(s)),class:"tw-flex tw-pl-3 tw-w-min tw-text-nowrap tw-outline tw-outline-1 tw-outline-slate-400 tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-lg"},null,8,["modelValue"]),V,B,C,Q]),e("div",J,[n(d,{class:"my-sticky-header-table tw-rounded-xl",flat:"",bordered:"",title:"",rows:y,columns:o,"row-key":"name","hide-pagination":!0,"rows-per-page-options":[0],sortBy:"day"})])])):w("",!0)]),_:1}))}};export{$ as default};
