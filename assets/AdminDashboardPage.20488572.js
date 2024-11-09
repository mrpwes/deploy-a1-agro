import{Q as f}from"./QTd.a9c11184.js";import{ar as b,as as h,r as x,o as n,c as i,a as t,a8 as d,e as r,a5 as u,a6 as v,g as E,d as a,w as c,G as B}from"./index.2cf10682.js";import{Q as C}from"./QInput.593f463a.js";import{Q as D}from"./QTable.fc22db06.js";import{u as S}from"./pageHeader.8f3bb32f.js";import{_ as V}from"./ViewApprovalButton.548dff62.js";import{u as k}from"./viewApproval.db01a3d5.js";import"./use-key-composition.6156933d.js";import"./focus-manager.c6d20410.js";import"./QList.f8ee73cb.js";import"./QSelect.862e4161.js";import"./position-engine.b68752fb.js";import"./QDate.f531f1dd.js";import"./QPopupProxy.60b7cd65.js";import"./date.13f4c48f.js";import"./ClosePopup.b3a9f460.js";import"./globalNotification.4b844c52.js";const Q=b("dashboard",{state:()=>({totalEmployees:null,employeesCurrentBirthdays:null}),getters:{getTotalEmployees(){return this.totalEmployees}},actions:{async fetchTotalEmployees(){try{const{count:s,error:e}=await h.from("employee").select("*",{count:"exact",head:!0});if(e)throw e;this.totalEmployees=s}catch(s){console.log("Error getting total employees:",s.message)}},async fetchEmployeesBornInCurrentMonth(){try{const{data:s,error:e}=await h.from("employees_born_in_current_month").select("*");if(e)throw e;console.log(s),this.employeesCurrentBirthdays=s}catch(s){console.log("Error getting employees with birthdays in January:",s.message)}}}}),T={class:"tw-flex tw-justify-evenly tw-w-8/12 tw-mx-auto tw-mb-6"},P={class:"tw-grid tw-grid-cols-2 tw-gap-3 tw-text-center"},A={class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},I=t("div",{class:"tw-text-xl tw-font-bold"},"Employees",-1),L={class:"tw-text-lg"},N=t("div",{class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},[t("div",{class:"tw-text-xl tw-font-bold"},"Present"),t("div",{class:"tw-text-lg"},"3")],-1),U={key:0},j={class:"tw-bg-white tw-rounded-3xl tw-shadow-md tw-p-10"},H=t("div",{class:"tw-text-center"},[t("div",{class:"tw-text-xl tw-font-bold"},"Birthday")],-1),M={class:"tw-text-nowrap tw-text-left"},q={class:"tw-w-8/12 tw-mx-auto"},at={__name:"AdminDashboardPage",setup(s){const e=Q();e.fetchTotalEmployees();const y=S();y.currentPage="Dashboard";const m=x(""),w=k();w.getRequestList();function _(p){const l=new Date(p),o={year:"numeric",month:"short",day:"numeric"};return l.toLocaleDateString("en-US",o)}return e.fetchEmployeesBornInCurrentMonth(),(p,l)=>(n(),i(u,null,[t("div",T,[t("div",P,[t("div",A,[I,t("div",L,d(r(e).getTotalEmployees),1)]),N]),r(e).employeesCurrentBirthdays&&r(e).employeesCurrentBirthdays.length>0?(n(),i("div",U,[t("div",j,[H,(n(!0),i(u,null,v(r(e).employeesCurrentBirthdays,(o,g)=>(n(),i("div",{key:g,class:"tw-grid tw-grid-cols-2 tw-gap-7 tw-justify-between tw-text-end"},[t("div",M,d(o.first_name)+" "+d(o.last_name),1),t("div",null,d(_(o.date_of_birth)),1)]))),128))])])):E("",!0)]),t("div",q,[a(D,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",filter:m.value,columns:r(w).columns,rows:r(w).getUnarchivedApprovalList,"rows-per-page-options":[10,20,0],"row-key":"name"},{"body-cell-actions":c(o=>[a(f,{key:"actions",class:"tw-w-2/12",props:o},{default:c(()=>[a(V,{rows:o.row},null,8,["rows"])]),_:2},1032,["props"])]),"top-right":c(()=>[a(C,{borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=o=>m.value=o),placeholder:"Search"},{append:c(()=>[a(B,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","columns","rows"])])],64))}};export{at as default};
