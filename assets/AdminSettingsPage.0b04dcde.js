import{u as X}from"./pageHeader.10d9d4fd.js";import{u as A,ar as E,as as g,at as $,o as s,c as u,d as i,e as o,Q as c,w as m,a,S as V,a5 as f,r as T,a8 as S,g as p,a7 as v,f as Y,a6 as O,aR as U,aS as N}from"./index.fa342762.js";import{Q as Z}from"./QSelect.9e704e12.js";import{Q as R,C as D}from"./ClosePopup.bcad9a93.js";import{Q as H}from"./position-engine.573b6235.js";import{Q as M}from"./QTable.0d774183.js";import{u as j}from"./globalNotification.d7c9769f.js";import{Q as C}from"./QInput.d41ba563.js";import"./focus-manager.09b3f23b.js";import"./use-key-composition.ddbcd19f.js";import"./QList.21e76d84.js";const tt=A(),et=E("sssContributionTable",{state:()=>({sssContributionHistory:[],currentUser:tt.getEmployeeId,isEditing:!1}),getters:{},actions:{async insertSssContributionTable(t){try{const{data:e,error:l}=await g.from("sss_contribution_table").insert({emp_id_modified_by:this.currentUser,data:t});if(l)throw console.error(l),l}catch(e){console.error(e)}},async fetchSssContributionTable(){try{const{data:t,error:e}=await g.from("sss_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(e)throw console.error(e),e;this.sssContributionHistory=t}catch(t){console.error(t)}}}}),ot=E("sssHistoryButtonStore",{state:()=>({viewPrompt:!1,historyDataRows:[],historyDataColumns:[{name:"audit_id",align:"center",label:"Audit ID",sortable:!0,field:t=>t.audit_id,format:t=>`${t}`},{name:"operation_type",align:"center",label:"Operation Type",sortable:!0,field:t=>t.operation_type,format:t=>`${t}`},{name:"Modified By",align:"center",label:"Operation Type",sortable:!0,field:t=>t.modified_by.company_employee_id+" - "+t.modified_by.first_name+", "+t.modified_by.last_name+" P.",format:t=>`${t}`},{name:"change_date",align:"center",label:"Change Date",sortable:!0,field:t=>t.change_date}]}),getters:{},actions:{triggerPrompt(){this.viewPrompt=!0},async fetchSssHistory(){try{const{data:t,error:e}=await g.from("sss_contribution_table_audit").select("*, modified_by:employee!sss_contribution_table_audit_emp_id_modified_by_fkey(first_name, last_name, company_employee_id)").order("audit_id",{ascending:!1});if(e)throw console.error(e),e;this.historyDataRows=t,console.log(t)}catch(t){console.error(t)}},detectChanges(){console.log("Changes detected")}}});const at={class:"!tw-h-min !tw-w-9/12 !tw-max-w-full tw-bg-white tw-p-6"},it={__name:"HistoryAuditButton",setup(t){const e=ot();return e.fetchSssHistory(),(l,r)=>(s(),u(f,null,[i(c,{icon:"mdi-history",label:"History",onClick:o(e).triggerPrompt},null,8,["onClick"]),i(H,{modelValue:o(e).viewPrompt,"onUpdate:modelValue":r[0]||(r[0]=h=>o(e).viewPrompt=h),persistent:""},{default:m(()=>[a("div",at,[i(M,{class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:l.tableSearch,"rows-per-page-options":[0],separator:"cell","row-key":"audit_id",rows:o(e).historyDataRows,columns:o(e).historyDataColumns},null,8,["filter","rows","columns"]),i(R,{align:"right",class:"text-primary"},{default:m(()=>[V(i(c,{flat:"",label:"Close",color:"primary"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var lt=$(it,[["__scopeId","data-v-85523526"]]);const k=t=>(U("data-v-25128c14"),t=t(),N(),t),nt={class:"!tw-h-min !tw-w-full !tw-max-w-none tw-bg-white tw-p-6"},st={class:"tw-text-3xl tw-font-extrabold tw-pb-3 tw-flex tw-justify-between"},rt=k(()=>a("div",null,"SSS Contribution Table",-1)),dt={key:0},ut={class:"tw-flex tw-justify-end tw-mb-5"},ct={class:"tw-flex"},_t=k(()=>a("div",{class:"tw-w-4"},null,-1)),mt={key:0,class:"tw-flex tw-justify-center tw-mb-6"},bt=k(()=>a("textarea",{id:"inputData",rows:"10",cols:"100",placeholder:"Paste your data here...",class:"tw-border-4 tw-border-gray-400 tw-p-2"},null,-1)),ht=k(()=>a("br",null,null,-1)),pt={key:1},ft=k(()=>a("thead",null,[a("tr",null,[a("th",{rowspan:"2",class:"text-left"},"RANGE OF COMPENSATION"),a("th",{colspan:"3"},"TESTING"),a("th",{colspan:"12"},"AMOUNT OF CONTRIBUTIONS")]),a("tr",null,[a("th",{class:"text-right"},"Regular SS EC"),a("th",{class:"text-right"},"WISP"),a("th",{class:"text-right"},"TOTAL"),a("th",{class:"text-right"},"ER"),a("th",{class:"text-right"},"EE"),a("th",{class:"text-right"},"TOTAL"),a("th",{class:"text-right"},"ER"),a("th",{class:"text-right"},"EE"),a("th",{class:"text-right"},"TOTAL"),a("th",{class:"text-right"},"ER"),a("th",{class:"text-right"},"EE"),a("th",{class:"text-right"},"TOTAL"),a("th",{class:"text-right"},"ER"),a("th",{class:"text-right"},"EE"),a("th",{class:"text-right"},"TOTAL")])],-1)),gt={class:"text-left"},yt={__name:"SSSContributionButton",setup(t){const e=j(),l=et(),r=T(!1),h=T(null),x=T([]),n=T(!1);function d(){r.value=!0,console.table(h.value)}function _(){const y=document.getElementById("inputData").value.trim().split(`
`),w=[];y.forEach((B,I)=>{const P=B.split(/\s+/);let Q;I===0?Q=`${P[0]} ${P[1]}`:Q=`${P[0]} ${P[1]} ${P[2]}`;const z=P.slice(I===0?2:3),K={combinedValue:Q,values:z.slice(0,15)};w.push(K)}),x.value=w,n.value=!0;try{l.insertSssContributionTable(x.value),e.showSuccessNotification("SSS Contribution Table updated successfully!")}catch{e.showErrorNotification("Failed to update SSS Contribution Table!")}}async function b(){await l.fetchSssContributionTable(),l.sssContributionHistory[0]&&l.sssContributionHistory[0].data?(x.value=l.sssContributionHistory[0].data,n.value=!0):(x.value="",n.value=!1)}return b(),(q,y)=>(s(),u(f,null,[i(c,{label:"SSS Contribution Table",onClick:y[0]||(y[0]=w=>d())}),i(H,{modelValue:r.value,"onUpdate:modelValue":y[3]||(y[3]=w=>r.value=w),persistent:""},{default:m(()=>[a("div",nt,[a("div",st,[rt,o(l).sssContributionHistory[0]&&o(l).sssContributionHistory[0].change_date!==null&&o(l).sssContributionHistory[0].change_date!==void 0?(s(),u("div",dt," Last Updated: "+S(o(l).sssContributionHistory[0].change_date),1)):p("",!0)]),a("div",ut,[a("div",ct,[o(l).isEditing==!1?(s(),v(c,{key:0,flat:"",class:"tw-bg-green-400",icon:o(l).isEditing?"save":"edit",label:"Edit",onClick:y[1]||(y[1]=w=>o(l).isEditing=!o(l).isEditing)},null,8,["icon"])):p("",!0),_t,i(lt)])]),o(l).isEditing?(s(),u("div",mt,[a("div",null,[bt,ht,i(c,{class:"tw-bg-green-400",onClick:y[2]||(y[2]=w=>{_(),o(l).isEditing=!o(l).isEditing,r.value=!1})},{default:m(()=>[Y("Change Table")]),_:1})])])):p("",!0),n.value?(s(),u("div",pt,[i(Z,{dense:""},{default:m(()=>[ft,a("tbody",null,[(s(!0),u(f,null,O(x.value,(w,B)=>(s(),u("tr",{key:B},[a("td",gt,S(w.combinedValue),1),(s(!0),u(f,null,O(w.values,(I,P)=>(s(),u("td",{class:"text-right",key:P},S(I),1))),128))]))),128))])]),_:1})])):p("",!0),i(R,{align:"right",class:"text-primary noPrint"},{default:m(()=>[V(i(c,{flat:"",label:"Cancel"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var wt=$(yt,[["__scopeId","data-v-25128c14"]]);const L=j(),vt=A(),Ct=E("philhealthContributionTable",{state:()=>({philHealthRateModel:null,philhealthContributionHistory:[],philHealthContribution:null,currentUser:vt.getEmployeeId,isEditing:!1}),getters:{},actions:{async insertPhilhealthContributionTable(){try{const{data:t,error:e}=await g.from("philhealth_contribution_table").insert({emp_id_modified_by:this.currentUser,data:{value:parseFloat(this.philHealthRateModel)}});if(e)throw console.error(e),e;this.fetchPhilhealthContributionTable(),console.log(t),L.showSuccessNotification("Philhealth Contribution Rate has been updated")}catch(t){console.error(t),L.showErrorNotification("Failed to update Philhealth Contribution Rate")}},async fetchPhilhealthContributionTable(){try{const{data:t,error:e}=await g.from("philhealth_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(e)throw console.error(e),e;this.philhealthContributionHistory=t}catch(t){console.error(t)}}}}),G=E("philhealthHistoryButtonStore",{state:()=>({viewPrompt:!1,historyDataRows:[],historyDataColumns:[{name:"audit_id",align:"center",label:"Audit ID",sortable:!0,field:t=>t.audit_id,format:t=>`${t}`},{name:"operation_type",align:"center",label:"Operation Type",sortable:!0,field:t=>t.operation_type,format:t=>`${t}`},{name:"Modified By",align:"center",label:"Operation Type",sortable:!0,field:t=>t.modified_by.company_employee_id+" - "+t.modified_by.first_name+", "+t.modified_by.last_name+" P.",format:t=>`${t}`},{name:"change_date",align:"center",label:"Change Date",sortable:!0,field:t=>t.change_date}]}),getters:{},actions:{triggerPrompt(){this.viewPrompt=!0},async fetchPhilhealthHistory(){try{const{data:t,error:e}=await g.from("philhealth_contribution_table_audit").select("*, modified_by:employee!philhealth_contribution_table_audit_emp_id_modified_by_fkey(first_name, last_name, company_employee_id)").order("audit_id",{ascending:!1});if(e)throw console.error(e),e;this.historyDataRows=t,console.log(t)}catch(t){console.error(t)}},detectChanges(){console.log("Changes detected")}}});const xt={class:"!tw-h-min !tw-w-9/12 !tw-max-w-full tw-bg-white tw-p-6"},Pt={__name:"HistoryAuditButton",setup(t){const e=G();return e.fetchPhilhealthHistory(),(l,r)=>(s(),u(f,null,[i(c,{icon:"mdi-history",label:"History",onClick:o(e).triggerPrompt},null,8,["onClick"]),i(H,{modelValue:o(e).viewPrompt,"onUpdate:modelValue":r[0]||(r[0]=h=>o(e).viewPrompt=h),persistent:""},{default:m(()=>[a("div",xt,[i(M,{class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:l.tableSearch,"rows-per-page-options":[0],separator:"cell","row-key":"audit_id",rows:o(e).historyDataRows,columns:o(e).historyDataColumns},null,8,["filter","rows","columns"]),i(R,{align:"right",class:"text-primary"},{default:m(()=>[V(i(c,{flat:"",label:"Close",color:"primary"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var Tt=$(Pt,[["__scopeId","data-v-50178e0a"]]);const St=t=>(U("data-v-280b31c8"),t=t(),N(),t),Et={class:"!tw-h-min !tw-w-5/12 !tw-max-w-none tw-bg-white tw-p-6"},$t={class:"tw-text-3xl tw-font-extrabold tw-pb-3 tw-flex tw-justify-between"},Vt=St(()=>a("div",null,"Philhealth Contribution",-1)),Rt={class:"tw-flex tw-justify-end tw-mb-5"},Dt={key:0,class:"tw-mt-4 tw-w-4/12"},Ht={__name:"PhilhealthContributionButton",setup(t){const e=G(),l=Ct(),r=T(!1);function h(){r.value=!0}return l.fetchPhilhealthContributionTable(),(x,n)=>(s(),u(f,null,[i(c,{label:"PhilHealth Contribution Table",onClick:n[0]||(n[0]=d=>h())}),i(H,{modelValue:r.value,"onUpdate:modelValue":n[5]||(n[5]=d=>r.value=d),persistent:""},{default:m(()=>[a("div",Et,[a("div",$t,[Vt,a("div",Rt,[a("div",null,[o(l).isEditing==!1?(s(),v(c,{key:0,flat:"",class:"tw-bg-green-400 tw-mr-4",icon:o(l).isEditing?"save":"edit",label:"Edit",onClick:n[1]||(n[1]=d=>o(l).isEditing=!o(l).isEditing)},null,8,["icon"])):p("",!0),i(Tt)])])]),a("div",null," Last Updated: "+S(o(l).philhealthContributionHistory[0].change_date),1),a("div",null," Premium Rate: "+S(o(l).philhealthContributionHistory[0].data.value)+"% ",1),o(l).isEditing==!0?(s(),u("div",Dt,[i(C,{outlined:"",modelValue:o(l).philHealthRateModel,"onUpdate:modelValue":n[2]||(n[2]=d=>o(l).philHealthRateModel=d),label:"Premium Rate"},null,8,["modelValue"]),i(c,{class:"tw-mt-3 tw-bg-green-400",label:"Change Rate",onClick:n[3]||(n[3]=d=>{o(l).insertPhilhealthContributionTable(),o(e).fetchPhilhealthHistory(),o(l).isEditing=!1})})])):p("",!0),i(R,{align:"right",class:"text-primary noPrint"},{default:m(()=>[V(i(c,{flat:"",label:"Cancel",onClick:n[4]||(n[4]=d=>{o(l).isEditing=!1,o(l).philHealthRateModel=null})},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var kt=$(Ht,[["__scopeId","data-v-280b31c8"]]);const F=j(),Bt=A(),It=E("pagibigContributionTable",{state:()=>({tableData:[{monthly_compensation:"P1,500 and below",employee_rate:"1.0%",employer_rate:"2.0%"},{monthly_compensation:"Over P1,500",employee_rate:"2.0%",employer_rate:"2.0%"}],currentUser:Bt.getEmployeeId,isEditing:!1}),getters:{},actions:{async insertPhilhealthContributionTable(){try{const{data:t,error:e}=await g.from("pagibig_contribution_table").insert({emp_id_modified_by:this.currentUser,data:this.tableData});if(e)throw console.error(e),e;this.fetchPagibigContributionTable(),console.log(t),F.showSuccessNotification("Pag-ibig Contribution Table has been updated.")}catch(t){console.error(t),F.showErrorNotification("Failed to update Pag-ibig Contribution Table.")}},async fetchPagibigContributionTable(){try{const{data:t,error:e}=await g.from("pagibig_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(e)throw console.error(e),e;console.log(t[0].data),this.tableData=t[0].data}catch(t){console.error(t)}}}}),Ot=E("pagibigHistoryButtonStore",{state:()=>({viewPrompt:!1,historyDataRows:[],historyDataColumns:[{name:"audit_id",align:"center",label:"Audit ID",sortable:!0,field:t=>t.audit_id,format:t=>`${t}`},{name:"operation_type",align:"center",label:"Operation Type",sortable:!0,field:t=>t.operation_type,format:t=>`${t}`},{name:"Modified By",align:"center",label:"Operation Type",sortable:!0,field:t=>t.modified_by.company_employee_id+" - "+t.modified_by.first_name+", "+t.modified_by.last_name+" P.",format:t=>`${t}`},{name:"change_date",align:"center",label:"Change Date",sortable:!0,field:t=>t.change_date}]}),getters:{},actions:{triggerPrompt(){this.viewPrompt=!0},async fetchPagibigHistory(){try{const{data:t,error:e}=await g.from("pagibig_contribution_table_audit").select("*, modified_by:employee!pagibig_contribution_table_audit_emp_id_modified_by_fkey(first_name, last_name, company_employee_id)").order("audit_id",{ascending:!1});if(e)throw console.error(e),e;this.historyDataRows=t,console.log(t)}catch(t){console.error(t)}},detectChanges(){console.log("Changes detected")}}});const At={class:"!tw-h-min !tw-w-9/12 !tw-max-w-full tw-bg-white tw-p-6"},Ut={__name:"HistoryAuditButton",setup(t){const e=Ot();return e.fetchPagibigHistory(),(l,r)=>(s(),u(f,null,[i(c,{icon:"mdi-history",label:"History",onClick:o(e).triggerPrompt},null,8,["onClick"]),i(H,{modelValue:o(e).viewPrompt,"onUpdate:modelValue":r[0]||(r[0]=h=>o(e).viewPrompt=h),persistent:""},{default:m(()=>[a("div",At,[i(M,{class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:l.tableSearch,"rows-per-page-options":[0],separator:"cell","row-key":"audit_id",rows:o(e).historyDataRows,columns:o(e).historyDataColumns},null,8,["filter","rows","columns"]),i(R,{align:"right",class:"text-primary"},{default:m(()=>[V(i(c,{flat:"",label:"Close",color:"primary"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var Nt=$(Ut,[["__scopeId","data-v-020b768f"]]);const J=t=>(U("data-v-0629ea0c"),t=t(),N(),t),Mt={class:"!tw-h-min !tw-w-5/12 !tw-max-w-none tw-bg-white tw-p-6"},Qt={class:"tw-text-3xl tw-font-extrabold tw-pb-3 tw-flex tw-justify-between"},jt=J(()=>a("div",null,"Pag-IBIG Contribution",-1)),Lt={class:"tw-flex tw-justify-end tw-mb-5"},Ft={border:"1"},Gt=J(()=>a("thead",null,[a("tr",null,[a("th",null,"Monthly Compensation"),a("th",null,"Employee"),a("th",null,"Employer Contribution")])],-1)),Jt={key:0},Wt={key:0},qt={key:0},zt={__name:"PagibigContributionButton",setup(t){const e=It(),l=T(!1);function r(){l.value=!0}function h(){console.log(JSON.stringify(e.tableData,null,2))}return h(),e.fetchPagibigContributionTable(),(x,n)=>(s(),u(f,null,[i(c,{label:"Pag-IBIG Contribution Table",onClick:n[0]||(n[0]=d=>{r(),o(e).fetchPagibigContributionTable()})}),i(H,{modelValue:l.value,"onUpdate:modelValue":n[4]||(n[4]=d=>l.value=d),persistent:""},{default:m(()=>[a("div",Mt,[a("div",Qt,[jt,a("div",Lt,[a("div",null,[i(Nt)])])]),a("div",null,[a("table",Ft,[Gt,a("tbody",null,[(s(!0),u(f,null,O(o(e).tableData,(d,_)=>(s(),u("tr",{key:_},[a("td",null,[o(e).isEditing==!1?(s(),u("div",Jt,S(d.monthly_compensation),1)):p("",!0),o(e).isEditing==!0?(s(),v(C,{key:1,modelValue:o(e).tableData[_].monthly_compensation,"onUpdate:modelValue":b=>o(e).tableData[_].monthly_compensation=b},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)]),a("td",null,[o(e).isEditing==!1?(s(),u("div",Wt,S(d.employee_rate),1)):p("",!0),o(e).isEditing==!0?(s(),v(C,{key:1,modelValue:o(e).tableData[_].employee_rate,"onUpdate:modelValue":b=>o(e).tableData[_].employee_rate=b},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)]),a("td",null,[o(e).isEditing==!1?(s(),u("div",qt,S(d.employer_rate),1)):p("",!0),o(e).isEditing==!0?(s(),v(C,{key:1,modelValue:o(e).tableData[_].employer_rate,"onUpdate:modelValue":b=>o(e).tableData[_].employer_rate=b},null,8,["modelValue","onUpdate:modelValue"])):p("",!0)])]))),128))])])]),i(R,{align:"right",class:"text-primary noPrint"},{default:m(()=>[o(e).isEditing==!1?(s(),v(c,{key:0,flat:"",class:"tw-bg-green-400 tw-mr-4",icon:o(e).isEditing?"save":"edit",label:"Edit",onClick:n[1]||(n[1]=d=>o(e).isEditing=!o(e).isEditing)},null,8,["icon"])):(s(),v(c,{key:1,flat:"",class:"tw-bg-green-400 tw-mr-4",icon:o(e).isEditing?"save":"edit",label:"Save",onClick:n[2]||(n[2]=d=>{o(e).isEditing=!o(e).isEditing,o(e).insertPhilhealthContributionTable()})},null,8,["icon"])),V(i(c,{flat:"",label:"Cancel",onClick:n[3]||(n[3]=d=>o(e).isEditing=!1)},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var Kt=$(zt,[["__scopeId","data-v-0629ea0c"]]);const Xt=A(),Yt=E("incomeTaxRates",{state:()=>({tableData:[{over:"-",notOver:"P250,000",basicAmount:"-",additionalRate:"-",excessOver:"-"},{over:"P250,000",notOver:"P400,000",basicAmount:"-",additionalRate:"20%",excessOver:"P250,000"},{over:"P400,000",notOver:"P800,000",basicAmount:"P30,000",additionalRate:"25%",excessOver:"P400,000"},{over:"P800,000",notOver:"P2,000,000",basicAmount:"P130,000",additionalRate:"30%",excessOver:"P800,000"},{over:"P2,000,000",notOver:"P8,000,000",basicAmount:"P490,000",additionalRate:"32%",excessOver:"P2,000,000"},{over:"P8,000,000",notOver:"-",basicAmount:"P2,410,000",additionalRate:"35%",excessOver:"P8,000,000"}],currentUser:Xt.getEmployeeId,isEditing:!1}),getters:{},actions:{async insertIncomeTaxRates(){try{const{data:t,error:e}=await g.from("income_tax_rates_table").insert({emp_id_modified_by:this.currentUser,data:this.tableData});if(e)throw console.error(e),e;this.fetchIncomeTaxRates(),console.log(t)}catch(t){console.error(t)}},async fetchIncomeTaxRates(){try{const{data:t,error:e}=await g.from("income_tax_rates_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(e)throw console.error(e),e;console.log(t[0].data),this.tableData=t[0].data}catch(t){console.error(t)}}}}),Zt=E("incomeTaxRatesStore",{state:()=>({viewPrompt:!1,historyDataRows:[],historyDataColumns:[{name:"audit_id",align:"center",label:"Audit ID",sortable:!0,field:t=>t.audit_id,format:t=>`${t}`},{name:"operation_type",align:"center",label:"Operation Type",sortable:!0,field:t=>t.operation_type,format:t=>`${t}`},{name:"Modified By",align:"center",label:"Operation Type",sortable:!0,field:t=>t.modified_by.company_employee_id+" - "+t.modified_by.first_name+", "+t.modified_by.last_name+" P.",format:t=>`${t}`},{name:"change_date",align:"center",label:"Change Date",sortable:!0,field:t=>t.change_date}]}),getters:{},actions:{triggerPrompt(){this.viewPrompt=!0},async fetchIncomeTaxRates(){try{const{data:t,error:e}=await g.from("income_tax_rates_table_audit").select("*, modified_by:employee!income_tax_rates_table_audit_emp_id_modified_by_fkey(first_name, last_name, company_employee_id)").order("audit_id",{ascending:!1});if(e)throw console.error(e),e;this.historyDataRows=t,console.log(t)}catch(t){console.error(t)}},detectChanges(){console.log("Changes detected")}}});const te={class:"!tw-h-min !tw-w-9/12 !tw-max-w-full tw-bg-white tw-p-6"},ee={__name:"HistoryAuditButton",setup(t){const e=Zt();return e.fetchIncomeTaxRates(),(l,r)=>(s(),u(f,null,[i(c,{icon:"mdi-history",label:"History",onClick:o(e).triggerPrompt},null,8,["onClick"]),i(H,{modelValue:o(e).viewPrompt,"onUpdate:modelValue":r[0]||(r[0]=h=>o(e).viewPrompt=h),persistent:""},{default:m(()=>[a("div",te,[i(M,{class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:l.tableSearch,"rows-per-page-options":[0],separator:"cell","row-key":"audit_id",rows:o(e).historyDataRows,columns:o(e).historyDataColumns},null,8,["filter","rows","columns"]),i(R,{align:"right",class:"text-primary"},{default:m(()=>[V(i(c,{flat:"",label:"Close",color:"primary"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var oe=$(ee,[["__scopeId","data-v-7a846624"]]);const W=t=>(U("data-v-2259fcc0"),t=t(),N(),t),ae={class:"!tw-h-min !tw-w-6/12 !tw-max-w-none tw-bg-white tw-p-6"},ie={class:"tw-text-3xl tw-font-extrabold tw-pb-3 tw-flex tw-justify-between"},le=W(()=>a("div",null,"Income Tax Rates Table",-1)),ne={border:"1"},se=W(()=>a("thead",null,[a("tr",null,[a("th",null,"Over"),a("th",null,"Not Over"),a("th",null,"Basic Amount"),a("th",null,"Additional Rate"),a("th",null,"Excess Over")])],-1)),re={__name:"IncomeTaxRatesButton",setup(t){const e=Yt(),l=T(!1),r=T(null);function h(){l.value=!0,console.table(r.value)}return e.fetchIncomeTaxRates(),(x,n)=>(s(),u(f,null,[i(c,{label:"Income Tax Rates Table",onClick:n[0]||(n[0]=d=>h())}),i(H,{modelValue:l.value,"onUpdate:modelValue":n[3]||(n[3]=d=>l.value=d),persistent:""},{default:m(()=>[a("div",ae,[a("div",ie,[le,a("div",null,[o(e).isEditing==!1?(s(),v(c,{key:0,flat:"",class:"tw-bg-green-400 tw-mr-4",icon:o(e).isEditing?"save":"edit",label:"Edit",onClick:n[1]||(n[1]=d=>o(e).isEditing=!o(e).isEditing)},null,8,["icon"])):(s(),v(c,{key:1,flat:"",class:"tw-bg-green-400 tw-mr-4",icon:o(e).isEditing?"save":"edit",label:"Save",onClick:n[2]||(n[2]=d=>{o(e).isEditing=!o(e).isEditing,o(e).insertIncomeTaxRates()})},null,8,["icon"])),i(oe)])]),a("table",ne,[se,a("tbody",null,[(s(!0),u(f,null,O(o(e).tableData,(d,_)=>(s(),u("tr",{key:_},[a("td",null,[i(C,{dense:"","hide-bottom-space":"",borderless:"","input-class":"tw-text-center",disable:!o(e).isEditing,modelValue:o(e).tableData[_].over,"onUpdate:modelValue":b=>o(e).tableData[_].over=b},null,8,["disable","modelValue","onUpdate:modelValue"])]),a("td",null,[i(C,{dense:"","hide-bottom-space":"",borderless:"","input-class":"tw-text-center",disable:!o(e).isEditing,modelValue:o(e).tableData[_].notOver,"onUpdate:modelValue":b=>o(e).tableData[_].notOver=b},null,8,["disable","modelValue","onUpdate:modelValue"])]),a("td",null,[i(C,{dense:"","hide-bottom-space":"",borderless:"","input-class":"tw-text-center",disable:!o(e).isEditing,modelValue:o(e).tableData[_].basicAmount,"onUpdate:modelValue":b=>o(e).tableData[_].basicAmount=b},null,8,["disable","modelValue","onUpdate:modelValue"])]),a("td",null,[i(C,{dense:"","hide-bottom-space":"",borderless:"","input-class":"tw-text-center",disable:!o(e).isEditing,modelValue:o(e).tableData[_].additionalRate,"onUpdate:modelValue":b=>o(e).tableData[_].additionalRate=b},null,8,["disable","modelValue","onUpdate:modelValue"])]),a("td",null,[i(C,{dense:"","hide-bottom-space":"",borderless:"","input-class":"tw-text-center",disable:!o(e).isEditing,modelValue:o(e).tableData[_].excessOver,"onUpdate:modelValue":b=>o(e).tableData[_].excessOver=b},null,8,["disable","modelValue","onUpdate:modelValue"])])]))),128))])]),i(R,{align:"right",class:"text-primary noPrint"},{default:m(()=>[V(i(c,{flat:"",label:"Cancel"},null,512),[[D]])]),_:1})])]),_:1},8,["modelValue"])],64))}};var de=$(re,[["__scopeId","data-v-2259fcc0"]]);const ue={class:"tw-w-12/12 tw-max-w-full tw-mx-auto tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse tw-p-4 tw-mt-0"},ce={class:"tw-flex tw-justify-evenly"},xe={__name:"AdminSettingsPage",setup(t){const e=X();return e.currentPage="Settings",(l,r)=>(s(),u("div",ue,[a("div",ce,[i(wt),i(kt),i(Kt),i(de)])]))}};export{xe as default};
