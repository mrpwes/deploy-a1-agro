import{Q as o}from"./QTable.f8d85815.js";import{P as s}from"./PageHeader.b5c17d7b.js";import{u as l}from"./requests.737e14de.js";import{e as n,f as m,k as t,m as i,Z as p}from"./index.2bb93599.js";import"./QBtn.295ca7b2.js";import"./QList.d6295110.js";import"./focus-manager.62b0d895.js";import"./QSelect.35d216f2.js";import"./use-key-composition.553b5bff.js";import"./position-engine.b94f4ca5.js";import"./pageHeader.98b334f5.js";const h={__name:"RequestToAdminPage",setup(u){const r=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}],a=l();return(e,c)=>(n(),m(p,null,[t(s,{currentPage:"Request To Admin"}),t(o,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:i(a).rows,columns:r,"rows-per-page-options":[10,20],"row-key":"name"},null,8,["rows"])],64))}};export{h as default};
