import{u as c,r as p,e as a,o as d,c as u,d as e,a as f,w as s,g as w,G as b}from"./index.4c79402b.js";import{Q as _}from"./QInput.c0615e0c.js";import{Q as g}from"./QTable.a454650d.js";import{P as h}from"./PageHeader.3f72b38b.js";import{_ as y}from"./RequestForm.1d3787dc.js";import{u as P}from"./loan.a784a664.js";import"./use-key-composition.cba66db5.js";import"./focus-manager.ca7961d3.js";import"./QList.eacd9c55.js";import"./QSelect.462c235a.js";import"./position-engine.cf0ffe31.js";import"./pageHeader.c77d3651.js";import"./QCardSection.8c4974c8.js";import"./QDate.9ccef98e.js";import"./ClosePopup.b9192a6f.js";import"./QForm.f5592ff2.js";import"./requestsEmployee.fa3782a1.js";const x={key:0},V={class:"tw-w-6/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5"},H={__name:"LoanPage",setup(L){const n=P(),l=c(),r=p(""),i=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:t=>t.referenceId,format:t=>`${t}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Price",align:"center",label:"Price",field:"price",sortable:!0}];return(t,o)=>a(l).userType=="employee"?(d(),u("div",x,[e(h,{currentPage:"Loan"}),f("div",V,[e(y,{modelOptions:["Vale","Product Loan","Partial to A/R"],buttonName:"Request Loan"})]),e(g,{class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:r.value,rows:a(n).rows,columns:i,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":s(()=>[e(_,{borderless:"",dense:"",debounce:"300",modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=m=>r.value=m),placeholder:"Search"},{append:s(()=>[e(b,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])])):w("",!0)}};export{H as default};
