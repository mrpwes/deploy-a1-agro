import{Q as n}from"./QTable.3ff943d1.js";import{P as i}from"./PageHeader.73baacb7.js";import{_ as l}from"./RequestForm.e8f9ea21.js";import{u as m}from"./loan.32109016.js";import{u as c,e as r,o as p,c as u,d as t,a as d,g as w}from"./index.75911f42.js";import"./QList.b641efd0.js";import"./focus-manager.9c9cc260.js";import"./QSelect.655bf8ab.js";import"./use-key-composition.d8cd1972.js";import"./position-engine.06733d87.js";import"./pageHeader.81f774ac.js";import"./QCardSection.3b51a3c0.js";import"./QInput.b92b1b0e.js";import"./ClosePopup.f217e15e.js";import"./requestsEmployee.5ce1108b.js";const f={key:0},b={class:"tw-w-6/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5"},v={__name:"LoanPage",setup(_){const o=c(),a=m(),s=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Price",align:"center",label:"Price",field:"price",sortable:!0}];return(e,g)=>r(o).userType=="employee"?(p(),u("div",f,[t(i,{currentPage:"Loan"}),d("div",b,[t(l,{modelOptions:["Vale","Product Loan","Partial to A/R"],buttonName:"Request Loan"})]),t(n,{class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:r(a).rows,columns:s,"rows-per-page-options":[10,20,0],"row-key":"name"},null,8,["rows"])])):w("",!0)}};export{v as default};
