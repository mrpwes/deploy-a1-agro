import{Q as o}from"./QTable.ff18392c.js";import{P as s}from"./PageHeader.d7a5bae5.js";import{u as l}from"./requests.482a4c62.js";import{e as n,f as m,k as t,m as i,Z as p}from"./index.e4a85cd1.js";import"./QBtn.a8f59d3d.js";import"./QList.80962d6e.js";import"./focus-manager.56255ce4.js";import"./QSelect.d5084b83.js";import"./use-key-composition.1b851c83.js";import"./position-engine.b38c2523.js";import"./pageHeader.18257e48.js";const h={__name:"RequestToAdminPage",setup(u){const r=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:e=>e.referenceId,format:e=>`${e}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}],a=l();return(e,c)=>(n(),m(p,null,[t(s,{currentPage:"Request To Admin"}),t(o,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:i(a).rows,columns:r,"rows-per-page-options":[10,20],"row-key":"name"},null,8,["rows"])],64))}};export{h as default};
