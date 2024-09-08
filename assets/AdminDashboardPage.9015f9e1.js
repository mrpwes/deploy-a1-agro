import{Q as y}from"./QTd.8877f422.js";import{ar as b,as as u,r as x,o as n,c as i,a as e,a5 as d,e as r,a7 as h,a8 as v,g as D,d as l,w as c,G as E}from"./index.f1a819d2.js";import{Q as B}from"./QInput.c330ef10.js";import{Q as C}from"./QTable.23c3e079.js";import{d as S}from"./date.be6a080b.js";import{u as V}from"./pageHeader.e61d5608.js";import{u as k,_ as Q}from"./ViewApprovalButton.d99a4bda.js";import"./use-key-composition.9fa1f645.js";import"./focus-manager.d3091833.js";import"./position-engine.8d33d564.js";import"./ClosePopup.0a9f5e7a.js";const T=b("dashboard",{state:()=>({totalEmployees:null,employeesCurrentBirthdays:null}),getters:{getTotalEmployees(){return this.totalEmployees}},actions:{async fetchTotalEmployees(){try{const{count:o,error:t}=await u.from("employee").select("*",{count:"exact",head:!0});if(t)throw t;this.totalEmployees=o}catch(o){console.log("Error getting total employees:",o.message)}},async fetchEmployeesBornInCurrentMonth(){try{const{data:o,error:t}=await u.from("employees_born_in_current_month").select("*");if(t)throw t;console.log(o),this.employeesCurrentBirthdays=o}catch(o){console.log("Error getting employees with birthdays in January:",o.message)}}}}),q={class:"tw-flex tw-justify-evenly tw-w-8/12 tw-mx-auto tw-mb-6"},I={class:"tw-grid tw-grid-cols-2 tw-gap-3 tw-text-center"},R={class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},j=e("div",{class:"tw-text-xl tw-font-bold"},"Employees",-1),A={class:"tw-text-lg"},M=e("div",{class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},[e("div",{class:"tw-text-xl tw-font-bold"},"Present"),e("div",{class:"tw-text-lg"},"TODO")],-1),P={key:0},Y={class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},L=e("div",{class:"tw-text-center"},[e("div",{class:"tw-text-xl tw-font-bold"},"Birthday")],-1),N={class:"tw-text-nowrap tw-text-left"},H={class:"tw-w-8/12 tw-mx-auto"},ee={__name:"AdminDashboardPage",setup(o){const t=T();t.fetchTotalEmployees();const f=V();f.currentPage="Dashboard";const m=x(""),w=k();w.getApprovalList(),t.fetchEmployeesBornInCurrentMonth();const _=[{name:"Request ID",required:!0,label:"Request ID",align:"left",field:s=>s.id,format:s=>`${s}`,sortable:!0},{name:"Request Date",align:"center",label:"Request Date",field:s=>s.request_confirmation.application_date,format:s=>S.formatDate(s,"MMM D, YYYY"),sortable:!0},{name:"Subject",align:"center",label:"Subject",field:"subject",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:s=>s.recipient.last_name+" "+s.recipient.first_name,sortable:!0},{name:"actions",align:"center",label:"",field:""}];return(s,p)=>(n(),i(h,null,[e("div",q,[e("div",I,[e("div",R,[j,e("div",A,d(r(t).getTotalEmployees),1)]),M]),r(t).employeesCurrentBirthdays&&r(t).employeesCurrentBirthdays.length>0?(n(),i("div",P,[e("div",Y,[L,(n(!0),i(h,null,v(r(t).employeesCurrentBirthdays,(a,g)=>(n(),i("div",{key:g,class:"tw-grid tw-grid-cols-2 tw-gap-7 tw-justify-between tw-text-end"},[e("div",N,d(a.first_name)+" "+d(a.last_name),1),e("div",null,d(a.date_of_birth),1)]))),128))])])):D("",!0)]),e("div",H,[l(C,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",filter:m.value,columns:_,rows:r(w).getUnarchivedApprovalList,"rows-per-page-options":[10,20,0],"row-key":"name"},{"body-cell-actions":c(a=>[l(y,{key:"actions",class:"tw-w-2/12",props:a},{default:c(()=>[l(Q,{rows:a.row},null,8,["rows"])]),_:2},1032,["props"])]),"top-right":c(()=>[l(B,{borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":p[0]||(p[0]=a=>m.value=a),placeholder:"Search"},{append:c(()=>[l(E,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])])],64))}};export{ee as default};
