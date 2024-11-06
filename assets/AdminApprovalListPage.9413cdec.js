import{Q as c}from"./QTd.8b5dee8d.js";import{u as m,ar as d,as as n,o as u,c as w,d as r,w as s,e as p,a5 as _,a as h,G as f}from"./index.fa342762.js";import{Q as y}from"./QInput.d41ba563.js";import{Q as g}from"./QTable.0d774183.js";import{u as b}from"./pageHeader.10d9d4fd.js";import{u as S,_ as q}from"./ViewApprovalButton.0b48ad10.js";import"./ClosePopup.bcad9a93.js";import"./position-engine.573b6235.js";import"./QCardSection.24d886f6.js";import"./QSelect.9e704e12.js";import"./QForm.50b80046.js";import"./QCard.3e67eb2c.js";import"./use-key-composition.ddbcd19f.js";import"./focus-manager.09b3f23b.js";import"./QList.21e76d84.js";import"./QDate.3f2630ec.js";import"./QPopupProxy.93ccc85a.js";import"./date.56c1f476.js";import"./globalNotification.d7c9769f.js";const v=m();d("addApproval",{state:()=>({recipient:null,recipientOptions:null,issuer:null,issuerOptions:null,type:null,typeOptions:null,subject:null,description:null,current_user_id:v.getEmployeeId,insertRequestConfirmationID:null}),getters:{},actions:{async fetchEmployeeOptions(){try{const{data:e,error:t}=await n.from("employee").select("id, company_employee_id, first_name, middle_name, last_name");if(t)throw t;this.recipientOptions=e,this.issuerOptions=e}catch(e){console.log(e)}},async fetchRequestTypeOptions(){try{const{data:e,error:t}=await n.from("request_type").select("id, request_type_name");if(t)throw t;this.typeOptions=e}catch(e){console.log(e)}},async insertRequestForm(){try{const{data:e,error:t}=await n.from("request").insert([{request_employee_id:this.recipient.id,request_type_id:this.type.id,request_date:new Date().toLocaleDateString("en-US"),request_subject:this.subject,request_description:this.description,request_application_date:new Date().toLocaleDateString("en-US"),admin_employee_id:this.issuer.id,admin_approval_status:"Pending",admin_comments:"Pending",admin_confirmation_date:new Date().toLocaleDateString("en-US"),change_date:new Date().toLocaleDateString("en-US"),is_archive:!1}]);if(t)throw t}catch(e){console.log(e)}}}});const A=h("div",{class:"tw-w-11/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5 tw-gap-4"},null,-1),G={__name:"AdminApprovalListPage",setup(e){const t=b();t.currentPage="Approval List";const a=S();return a.getRequestList(),(i,l)=>(u(),w(_,null,[A,r(g,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",filter:i.tableSearch,columns:p(a).columns,rows:p(a).getUnarchivedApprovalList,"rows-per-page-options":[10,20,0],"row-key":"name"},{"body-cell-actions":s(o=>[r(c,{key:"actions",class:"tw-w-2/12",props:o},{default:s(()=>[r(q,{rows:o.row},null,8,["rows"])]),_:2},1032,["props"])]),"top-right":s(()=>[r(y,{borderless:"",dense:"",debounce:"300",modelValue:i.tableSearch,"onUpdate:modelValue":l[0]||(l[0]=o=>i.tableSearch=o),placeholder:"Search"},{append:s(()=>[r(f,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","columns","rows"])],64))}};export{G as default};
