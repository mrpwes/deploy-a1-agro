import{Q as S,a as R,b as A}from"./QTable.4896ec80.js";import{at as $,au as p,r as f,o as b,c as g,d as o,Q as _,w as u,a as s,f as V,a5 as v,V as w,n as k,e as c,a9 as L,D as Q,u as E,aI as O}from"./index.dd89c0e3.js";import{Q as y}from"./QInput.aa789513.js";import{u as B}from"./pageHeader.cd0dd81b.js";import{C as D,G as h,Q as x,E as C,F as I}from"./ClosePopup.d371907d.js";import{Q as T}from"./QCardSection.26804d2a.js";import{Q as P}from"./QForm.d7ef1a04.js";import{Q as N}from"./QCard.dc62b75e.js";import"./focus-manager.58afa17f.js";const q=$("viewLoan",{state:()=>({rows:[]}),getters:{getArchivedLoanList(l){return l.rows.filter(e=>e.request_type.request_type_name==="VALE"?e.vale[0].is_archive==!0:e.partial_to_ar[0].is_archive==!0)},getUnarchivedLoanList(l){return l.rows.filter(e=>e.request_type.request_type_name==="VALE"?e.vale[0].is_archive==!1:e.partial_to_ar[0].is_archive==!1)}},actions:{async getLoanList(){const{data:l,error:e}=await p.from("request").select(`
        id,
    employee_id,
    employee (
      id,
      first_name,
      last_name
    ),
    request_type_id,
    request_confirmation_id,
    request_date,
    description,
    remarks,
    is_archive,
    request_type (
        id,
        request_type_name
    ),
    request_confirmation (
        id,
        employee_id,
        application_date,
        request_confirmation_date,
        status,
        remarks,
        is_archive,
        employee (
            id,
            first_name,
            last_name
        )
    ),
    vale (
        id,
        request_id,
        amount,
        date,
        is_archive
    ),
    partial_to_ar(
        id,
        company_loan_payment,
        request_id,
        amount,
        date,
        is_archive
    )
  `);if(e)throw e;return this.rows=l,l},async archivedLoan(l,e,i,t,d,a,n){try{await this.archivedRequest(t,d),await this.archivedRequestConfirmation(a,n);const{error:r}=await p.from(e).update({is_archive:!i}).eq("id",l);if(r)throw r;this.getLoanList()}catch(r){console.log(r)}},async archivedRequest(l,e){try{const{error:i}=await p.from("request").update({is_archive:!e}).eq("id",l);if(i)throw i}catch(i){console.log(i)}},async archivedRequestConfirmation(l,e){try{const{error:i}=await p.from("request_confirmation").update({is_archive:!e}).eq("id",l);if(i)throw i}catch(i){console.log(i)}}}});const F={class:"!tw-h-min !tw-w-5/12 !tw-max-w-full tw-bg-white tw-p-6"},z={id:"section-to-print"},W={class:"tw-text-3xl tw-font-extrabold tw-pb-3"},H=s("br",null,null,-1),M={class:"tw-text-base tw-font-normal tw-text-gray-500"},j={class:"tw-w-full tw-table-auto tw-border-collapse"},G=s("td",null,null,-1),U={__name:"ViewLoanButton",props:["rows"],setup(l){const e=q(),i=f(!1),t=f(null);function d(n){t.value=n,i.value=!0,console.table(t.value)}function a(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return(n,r)=>(b(),g(L,null,[o(_,{style:{"flex-wrap":"nowrap !important"},icon:"visibility",label:"VIEW",onClick:r[0]||(r[0]=m=>d(l.rows))}),o(x,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=m=>i.value=m),persistent:""},{default:u(()=>[s("div",F,[s("div",z,[s("div",W,[V(" Loan ID - "+v(t.value.id)+" ",1),H,s("span",M," VALE "+v(t.value.vale&&t.value.vale.length>0?t.value.vale[0].id:t.value.partial_to_ar[0].id),1)]),s("table",j,[s("tr",null,[s("td",null," Recipient: "+v(t.value.employee.last_name)+", "+v(t.value.employee.first_name)+" - CONTACTNUMBERTODO! ",1),s("td",null," Issuer: "+v(t.value.request_confirmation.employee.last_name)+", "+v(t.value.request_confirmation.employee.first_name),1)]),s("tr",null,[G,s("td",null," Amount: "+v(t.value.request_type.request_type_name==="VALE"?a(t.value.vale[0].amount):a(t.value.partial_to_ar[0].amount)),1)])])]),o(D,{align:"right",class:"text-primary noPrint"},{default:u(()=>[w(o(_,{flat:"",label:"Cancel"},null,512),[[h]]),w(o(_,{flat:"",class:k(t.value.vale&&t.value.vale.length>0?t.value.vale[0].is_archive?"tw-bg-green-400":"tw-bg-red-400":t.value.partial_to_ar[0].is_archive?"tw-bg-green-400":"tw-bg-red-400"),icon:"mdi-archive",label:t.value.vale&&t.value.vale.length>0?t.value.vale[0].is_archive?"Unarchive":"Archive":t.value.partial_to_ar[0].is_archive?"Unarchive":"Archive",onClick:r[1]||(r[1]=m=>c(e).archivedLoan(t.value.vale&&t.value.vale.length>0?t.value.vale[0].id:t.value.partial_to_ar[0].id,t.value.vale&&t.value.vale.length>0?"vale":"partial_to_ar",t.value.vale&&t.value.vale.length>0?t.value.vale[0].is_archive:t.value.partial_to_ar[0].is_archive,t.value.id,t.value.is_archive,t.value.request_confirmation.id,t.value.request_confirmation.is_archive))},null,8,["class","label"]),[[h]])]),_:1})])]),_:1},8,["modelValue"])],64))}},J={class:"!tw-h-min !tw-w-8/12 !tw-max-w-full tw-bg-white tw-p-6"},K=s("div",{class:"tw-col-span-4 tw-text-3xl tw-font-extrabold tw-pb-3"}," Archived Loan ",-1),X={__name:"ArchivedLoanButton",setup(l){const e=q(),i=f(!1),t=f("");function d(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const a=[{name:"Loan ID",required:!0,label:"Loan ID",align:"left",field:n=>n.id,format:n=>`${n}`,sortable:!0},{name:"Loan Type",align:"center",label:"Loan Type",field:n=>(n.request_type.request_type_name==="VALE"?n.vale[0].id:n.partial_to_ar[0].id)+" - "+n.request_type.request_type_name,format:n=>`${n}`,sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:n=>n.employee.first_name+" "+n.employee.last_name,sortable:!0},{name:"Issuer",align:"center",label:"Issuer",field:n=>n.request_confirmation.employee.first_name+" "+n.request_confirmation.employee.last_name,sortable:!0},{name:"Amount",align:"center",label:"Amount",field:n=>"\u20B1"+(n.request_type.request_type_name==="VALE"?d(n.vale[0].amount):d(n.partial_to_ar[0].amount)),sortable:!0},{name:"actions",align:"center",label:"",field:""}];return(n,r)=>(b(),g(L,null,[o(_,{icon:"mdi-archive",label:"Archived Loan",onClick:r[0]||(r[0]=m=>i.value=!0),class:"tw-bg-white"}),o(x,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=m=>i.value=m),persistent:""},{default:u(()=>[s("div",J,[K,o(S,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",filter:t.value,columns:a,rows:c(e).getArchivedLoanList,"rows-per-page-options":[10,20,0],"row-key":"name"},{"body-cell-actions":u(m=>[o(R,{props:m},{default:u(()=>[s("div",null,[o(U,{rows:m.row},null,8,["rows"])])]),_:2},1032,["props"])]),"top-right":u(()=>[o(y,{borderless:"",dense:"",debounce:"300",modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=m=>t.value=m),placeholder:"Search"},{append:u(()=>[o(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"]),o(D,{align:"right",class:"text-primary"},{default:u(()=>[w(o(_,{flat:"",label:"Cancel"},null,512),[[h]])]),_:1})])]),_:1},8,["modelValue"])],64))}},Y=E(),Z=q(),ee=$("addLoan",{state:()=>({employee_id:Y.getEmployeeId,employeeOption:null,employeeOptions:null,type:null,typeOptions:["Vale","Partial to A/R"],description:null,amount:null,insertRequestConfirmationID:null,insertRequestID:null}),getters:{},actions:{async getDetails(){try{const{data:l,error:e}=await p.from("employee").select();if(e)throw e;this.employeeOptions=l}catch(l){console.log(l)}},addLoan(){this.insertRequestConfirmation().then(()=>this.insertRequest()).then(()=>this.insertCompanyLoan()).then(()=>{this.resetForm()}).then(()=>{Z.getLoanList()}).catch(l=>{console.error("An error occurred:",l)})},async insertRequestConfirmation(){try{const{data:l,error:e}=await p.from("request_confirmation").insert([{employee_id:this.employee_id,application_date:new Date().toLocaleDateString("en-US"),request_confirmation_date:new Date().toLocaleDateString("en-US"),status:"Approved",remarks:"Approved",is_archive:!1}]).select("id");if(e)throw e;console.log(l[0].id),this.insertRequestConfirmationID=l[0].id}catch(l){alert(l+"line 66"),console.log(l)}},async insertRequest(){try{const{data:l,error:e}=await p.from("request").insert([{employee_id:this.employeeOption.id,request_type_id:this.type=="Vale"?1:2,request_confirmation_id:this.insertRequestConfirmationID,request_date:new Date().toLocaleDateString("en-US"),description:this.description,remarks:"Pending",is_archive:!1}]).select("id");if(e)throw e;console.log("Insert Request ID",l[0].id),this.insertRequestID=l[0].id}catch(l){alert(l+"line 94"),console.log(l)}},async insertCompanyLoan(){try{if(this.type=="Vale"){const{data:l,error:e}=await p.from("vale").insert([{request_id:this.insertRequestID,amount:this.amount,date:new Date().toLocaleDateString("en-US"),is_archive:!1}]);if(e)throw e;console.log("data",l)}else{const{data:l,error:e}=await p.from("partial_to_ar").insert([{request_id:this.insertRequestID,amount:this.amount,date:new Date().toLocaleDateString("en-US"),is_archive:!1}]);if(e)throw e;console.log("data",l)}}catch(l){alert(l+"line 131"),console.log(l)}},resetForm(){this.employeeOption=null,this.type=null,this.description=null,this.amount=null}}}),te={class:"tw-m-4"},ae=s("div",{class:"tw-text-3xl tw-font-extrabold tw-pb-3"}," Add Loan Form ",-1),le={class:"tw-flex tw-mb-3"},oe=s("div",{class:"tw-content-center tw-mr-3"},"Employee Name:",-1),ne={class:"tw-flex tw-mb-3"},se=s("div",{class:"tw-content-center tw-mr-3"},"Type:",-1),ie=s("div",null,"Description:",-1),re={class:"tw-pb-3 tw-px-2"},ue={class:"tw-flex tw-mb-3"},de=s("div",{class:"tw-content-center tw-mr-3"},"Amount:",-1),ce={class:"tw-px-2"},me={__name:"AddLoanButton",setup(l){const e=ee(),i=f(!1);return e.getDetails(),(t,d)=>(b(),g(L,null,[o(_,{icon:"mdi-plus",label:"Add Loan",onClick:d[0]||(d[0]=a=>i.value=!0),class:"tw-bg-white"}),o(x,{modelValue:i.value,"onUpdate:modelValue":d[5]||(d[5]=a=>i.value=a),persistent:""},{default:u(()=>[o(N,{class:"min-width: 500px"},{default:u(()=>[o(P,{onSubmit:O(c(e).addLoan,["prevent"]),autofocus:""},{default:u(()=>[s("div",te,[o(T,{class:"tw-pt-0 tw-pl-0"},{default:u(()=>[ae]),_:1}),s("div",le,[oe,o(A,{filled:"",modelValue:c(e).employeeOption,"onUpdate:modelValue":d[1]||(d[1]=a=>c(e).employeeOption=a),"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:c(e).employeeOptions,"option-label":a=>"first_name"in a?a.first_name+" "+a.last_name:"","option-value":t.id,class:"!tw-pb-0; tw-capitalize","popup-content-class":"tw-capitalize"},{"no-option":u(()=>[o(C,null,{default:u(()=>[o(I,{class:"text-grey"},{default:u(()=>[V(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label","option-value"])]),s("div",ne,[se,o(A,{filled:"",modelValue:c(e).type,"onUpdate:modelValue":d[2]||(d[2]=a=>c(e).type=a),"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:c(e).typeOptions,class:"!tw-pb-0; tw-capitalize;","popup-content-class":"tw-capitalize"},{"no-option":u(()=>[o(C,null,{default:u(()=>[o(I,{class:"text-grey"},{default:u(()=>[V(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options"])]),s("div",null,[ie,s("div",re,[o(y,{modelValue:c(e).description,"onUpdate:modelValue":d[3]||(d[3]=a=>c(e).description=a),type:"textarea",filled:"","hide-bottom-space":""},null,8,["modelValue"])])]),s("div",ue,[de,s("div",ce,[o(y,{modelValue:c(e).amount,"onUpdate:modelValue":d[4]||(d[4]=a=>c(e).amount=a),filled:"",autogrow:"","hide-bottom-space":"",class:"tw-max-w-full"},null,8,["modelValue"])])]),o(D,{align:"right",class:"text-primary"},{default:u(()=>[w(o(_,{flat:"",label:"Cancel",onClick:t.resetForm},null,8,["onClick"]),[[h]]),w(o(_,{flat:"",class:"tw-bg-green-400",label:"Add Loan",type:"submit"},null,512),[[h]])]),_:1})])]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])],64))}},pe={class:"tw-w-11/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5 tw-gap-4"},qe={__name:"AdminLoanListPage",setup(l){const e=B();e.currentPage="Loan List";const i=q();i.getLoanList();function t(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const d=[{name:"Loan ID",required:!0,label:"Loan ID",align:"left",field:a=>a.id,format:a=>`${a}`,sortable:!0},{name:"Loan Type",align:"center",label:"Loan Type",field:a=>(a.request_type.request_type_name==="VALE"?a.vale[0].id:a.partial_to_ar[0].id)+" - "+a.request_type.request_type_name,format:a=>`${a}`,sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:a=>a.employee.first_name+" "+a.employee.last_name,sortable:!0},{name:"Issuer",align:"center",label:"Issuer",field:a=>a.request_confirmation.employee.first_name+" "+a.request_confirmation.employee.last_name,sortable:!0},{name:"Amount",align:"center",label:"Amount",field:a=>"\u20B1"+(a.request_type.request_type_name==="VALE"?t(a.vale[0].amount):t(a.partial_to_ar[0].amount)),sortable:!0},{name:"actions",align:"center",label:"",field:""}];return(a,n)=>(b(),g(L,null,[s("div",pe,[o(X),o(me)]),o(S,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",filter:a.tableSearch,columns:d,rows:c(i).getUnarchivedLoanList,"rows-per-page-options":[10,20,0],"row-key":"Loan ID"},{"body-cell-actions":u(r=>[o(R,{key:"actions",class:"tw-w-2/12",props:r},{default:u(()=>[o(U,{rows:r.row},null,8,["rows"])]),_:2},1032,["props"])]),"top-right":u(()=>[o(y,{borderless:"",dense:"",debounce:"300",modelValue:a.tableSearch,"onUpdate:modelValue":n[0]||(n[0]=r=>a.tableSearch=r),placeholder:"Search"},{append:u(()=>[o(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])],64))}};export{qe as default};