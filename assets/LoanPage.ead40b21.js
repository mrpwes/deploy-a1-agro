import{Q as o}from"./QTable.f8528ceb.js";import{P as n}from"./PageHeader.0455049d.js";import{e as c,f as p,k as r,Z as a}from"./index.644ee00c.js";import"./QBtn.c55a58f9.js";import"./QList.922bff68.js";import"./focus-manager.05a1c856.js";import"./QSelect.72b082b8.js";import"./use-key-composition.5cf312a6.js";import"./position-engine.27fbacda.js";import"./pageHeader.094b9deb.js";const T={__name:"LoanPage",setup(s){const t=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Price",align:"center",label:"Price",field:"price",sortable:!0}],i=[{referenceId:1,type:"Type 1",description:"Description 1",price:1e3},{referenceId:2,type:"Type 2",description:"Description 2",price:2e3},{referenceId:3,type:"Type 3",description:"Description 3",price:3e3},{referenceId:4,type:"Type 4",description:"Description 4",price:4e3},{referenceId:5,type:"Type 5",description:"Description 5",price:5e3}];return(e,l)=>(c(),p(a,null,[r(n,{currentPage:"Loan"}),r(o,{class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:i,columns:t,"row-key":"name"})],64))}};export{T as default};
