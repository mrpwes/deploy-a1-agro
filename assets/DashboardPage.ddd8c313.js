import{Q as n}from"./QTable.3ff943d1.js";import{Q as m}from"./QPage.4aeaa1ac.js";import{P as c}from"./PageHeader.73baacb7.js";import{o as w,c as l,d as a,a as e,a3 as p,ar as v,u as f,e as i,w as b,g as x,f as s}from"./index.75911f42.js";import{u as g}from"./requestsEmployee.5ce1108b.js";import"./QList.b641efd0.js";import"./focus-manager.9c9cc260.js";import"./QSelect.655bf8ab.js";import"./use-key-composition.d8cd1972.js";import"./position-engine.06733d87.js";import"./pageHeader.81f774ac.js";const h=v('<div class="tw-flex tw-justify-evenly tw-w-8/12 tw-mx-auto tw-mb-6"><div class="tw-grid tw-grid-cols-2 tw-gap-3 tw-text-center"><div class="tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"><div>Employees</div><div>80</div></div><div class="tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"><div>Present</div><div>71</div></div><div class="tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"><div>Absent</div><div>2</div></div><div class="tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"><div>Late</div><div>7</div></div></div><div><div class="tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"><div class="tw-text-center"><div class="tw-text-2xl">Birthday</div><div class="tw-text-lg">January</div></div><div class="tw-grid tw-grid-cols-2 tw-gap-7 tw-justify-between tw-text-end"><div class="tw-text-nowrap">Edwin Carl Beley</div><div>01/29</div></div><div class="tw-grid tw-grid-cols-2 tw-gap-7 tw-justify-between tw-text-end"><div class="tw-text-nowrap">Arnieno Maraan</div><div>01/30</div></div></div></div></div>',1),_={class:"tw-w-8/12 tw-mx-auto"},y={__name:"AdminDashboardPage",setup(u){const d=[{name:"ID",required:!0,label:"ID",align:"left",field:t=>t.id,format:t=>`${t}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"View",align:"center",label:"View",field:"view",sortable:!0}];return(t,o)=>(w(),l(p,null,[a(c,{currentPage:"Dashboard"}),h,e("div",_,[a(n,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"Requests",columns:d,"rows-per-page-options":[10,20,0],"row-key":"name"})])],64))}},T={key:0},k=e("div",{class:"tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-mb-3 tw-text-center tw-gap-y-2 tw-w-8/12 tw-mx-auto"},[e("div",{class:"tw-flex tw-p-3 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:""},"01 / 30 / 2024")]),e("div",{class:"tw-flex tw-p-2 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:"tw-flex tw-flex-row"},[e("div",{class:"tw-flex-auto tw-px-3"},[s(" PRESENT"),e("br"),e("span",{class:"tw-underline"},"1")]),e("div",{class:"tw-flex-auto tw-px-3"},[s(" LATE"),e("br"),e("span",{class:"tw-underline"},"2")]),e("div",{class:"tw-flex-auto tw-px-3"},[s(" ABSENT"),e("br"),e("span",{class:"tw-underline"},"3")])])]),e("div",{class:"tw-flex tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap"},[e("div",{class:"tw-flex tw-flex-row tw-p-2"},[e("div",{class:"tw-flex tw-px-3"},[s("TIME-IN"),e("br"),s("8:00AM")]),e("div",{class:"tw-flex tw-px-3"},[s("TIME-OUT"),e("br"),s("________")])])])],-1),D={class:"tw-w-8/12 tw-mx-auto"},E={key:1},Q={__name:"DashboardPage",setup(u){const d=g(),t=f(),o=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:r=>r.referenceId,format:r=>`${r}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Status",align:"center",label:"Status",field:"status",sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:"remarks",sortable:!0}];return(r,P)=>i(t).userType=="employee"?(w(),l("div",T,[a(c,{currentPage:"Dashboard"}),a(m,null,{default:b(()=>[k,e("div",D,[a(n,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"Requests",rows:i(d).rows,columns:o,"rows-per-page-options":[10,20,0],"row-key":"name"},null,8,["rows"])])]),_:1})])):i(t).userType=="admin"?(w(),l("div",E,[a(y)])):x("",!0)}};export{Q as default};