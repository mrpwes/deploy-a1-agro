import{Q as o}from"./QTable.df81fd5d.js";import{Q as w}from"./QPage.2fcfc462.js";import{P as n}from"./PageHeader.b8174b54.js";import{u as i}from"./requests.478d3a13.js";import{e as d,f as c,k as r,l as m,Z as u,j as e,m as f,q as t}from"./index.f0077d57.js";import"./QBtn.28f0525d.js";import"./QList.d4695f41.js";import"./focus-manager.2d3bd18a.js";import"./QSelect.feeabde2.js";import"./use-key-composition.d795638e.js";import"./position-engine.75739a28.js";import"./pageHeader.dc1f8c18.js";const p=e("div",{class:"tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-mb-3 tw-text-center tw-gap-y-2 tw-w-8/12 tw-mx-auto"},[e("div",{class:"tw-flex tw-p-3 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:""},"01 / 30 / 2024")]),e("div",{class:"tw-flex tw-p-2 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:"tw-flex tw-flex-row"},[e("div",{class:"tw-flex-auto tw-px-3"},[t(" PRESENT"),e("br"),e("span",{class:"tw-underline"},"1")]),e("div",{class:"tw-flex-auto tw-px-3"},[t(" LATE"),e("br"),e("span",{class:"tw-underline"},"2")]),e("div",{class:"tw-flex-auto tw-px-3"},[t(" ABSENT"),e("br"),e("span",{class:"tw-underline"},"3")])])]),e("div",{class:"tw-flex tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:"tw-flex tw-flex-row tw-p-2"},[e("div",{class:"tw-flex tw-px-3"},[t("TIME-IN"),e("br"),t("8:00AM")]),e("div",{class:"tw-flex tw-px-3"},[t("TIME-OUT"),e("br"),t("________")])])])],-1),x={class:"tw-w-8/12 tw-mx-auto"},S={__name:"DashboardPage",setup(b){const s=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:a=>a.referenceId,format:a=>`${a}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}],l=i();return(a,_)=>(d(),c(u,null,[r(n,{currentPage:"Dashboard"}),r(w,null,{default:m(()=>[p,e("div",x,[r(o,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",rows:f(l).rows,columns:s,"row-key":"name"},null,8,["rows"])])]),_:1})],64))}};export{S as default};
