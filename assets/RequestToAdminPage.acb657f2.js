import{Q as o}from"./QTable.65ed54db.js";import{P as s}from"./PageHeader.6739beb9.js";import{u as l}from"./requests.1ee11cec.js";import{e as n,f as m,k as t,m as i,Z as p}from"./index.a64bdad3.js";import"./QBtn.e20426fb.js";import"./QList.c34f1749.js";import"./focus-manager.dff8ebc8.js";import"./QSelect.1d35498e.js";import"./use-key-composition.406beeb8.js";import"./position-engine.725c13ed.js";import"./pageHeader.f1ba1c5c.js";const h={__name:"RequestToAdminPage",setup(u){const r=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}],a=l();return(e,c)=>(n(),m(p,null,[t(s,{currentPage:"Request To Admin"}),t(o,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:i(a).rows,columns:r,"rows-per-page-options":[10,20],"row-key":"name"},null,8,["rows"])],64))}};export{h as default};