import{Q as n}from"./QTable.ac0470bb.js";import{P as i}from"./PageHeader.4865b511.js";import{_ as l}from"./RequestForm.0d9e42e5.js";import{u as m}from"./loan.ae43c580.js";import{u as c,e as r,o as p,c as u,d as t,a as d,g as w}from"./index.b4c56732.js";import"./QList.80f83927.js";import"./focus-manager.301bb9c7.js";import"./QSelect.e04d319b.js";import"./use-key-composition.96deb5a8.js";import"./position-engine.e642a064.js";import"./pageHeader.01700e9f.js";import"./QCardSection.c8a7011e.js";import"./QInput.0b5d46ad.js";import"./ClosePopup.b93beee2.js";import"./requestsEmployee.be35a12c.js";const f={key:0},b={class:"tw-w-6/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5"},v={__name:"LoanPage",setup(_){const o=c(),a=m(),s=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Price",align:"center",label:"Price",field:"price",sortable:!0}];return(e,g)=>r(o).userType=="employee"?(p(),u("div",f,[t(i,{currentPage:"Loan"}),d("div",b,[t(l,{modelOptions:["Vale","Product Loan","Partial to A/R"],buttonName:"Request Loan"})]),t(n,{class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:r(a).rows,columns:s,"rows-per-page-options":[10,20,0],"row-key":"name"},null,8,["rows"])])):w("",!0)}};export{v as default};