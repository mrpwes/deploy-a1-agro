import{Q as n}from"./QTable.3ff943d1.js";import{P as i}from"./PageHeader.73baacb7.js";import{_ as m}from"./RequestForm.e8f9ea21.js";import{u as l}from"./requestsEmployee.5ce1108b.js";import{u as c,e as r,o as u,c as p,d as t,a as d,g as f}from"./index.75911f42.js";import"./QList.b641efd0.js";import"./focus-manager.9c9cc260.js";import"./QSelect.655bf8ab.js";import"./use-key-composition.d8cd1972.js";import"./position-engine.06733d87.js";import"./pageHeader.81f774ac.js";import"./QCardSection.3b51a3c0.js";import"./QInput.b92b1b0e.js";import"./ClosePopup.f217e15e.js";import"./loan.32109016.js";const w={key:0},b={class:"tw-w-11/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5"},E={__name:"RequestToAdminPage",setup(_){const o=l(),a=c(),s=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}];return(e,g)=>r(a).userType=="employee"?(u(),p("div",w,[t(i,{currentPage:"Request To Admin"}),d("div",b,[t(m,{modelOptions:["Vale","Product Loan","Partial to A/R","Document","Leave"],buttonName:"Request To Admin"})]),t(n,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:r(o).rows,columns:s,"rows-per-page-options":[10,20,0],"row-key":"name"},null,8,["rows"])])):f("",!0)}};export{E as default};