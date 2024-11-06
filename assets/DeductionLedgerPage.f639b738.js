import{b as D}from"./QSelect.9e704e12.js";import{ar as f,r as I,o as l,c as v,d as r,w as a,a as L,a7 as p,G as s,e as c,g as C}from"./index.fa342762.js";import{Q as u}from"./QInput.d41ba563.js";import{Q as m}from"./QTable.0d774183.js";import{Q as A}from"./QPage.aa4a849b.js";import"./focus-manager.09b3f23b.js";import"./use-key-composition.ddbcd19f.js";import"./position-engine.573b6235.js";import"./QList.21e76d84.js";const x=f("loan",{state:()=>({rows:[{referenceId:1,employeeId:1,employeeName:"Employee 1",deductionType:"Company Loan",type:"Cash Loan",description:"Description 1",amount:1e3,payPeriod:"October 1-15 2023",isArchive:!1},{referenceId:2,employeeId:2,employeeName:"Employee 2",deductionType:"Company Loan",type:"Product Loan",description:"Description 2",amount:2e3,payPeriod:"September 1-15 2023",isArchive:!1},{referenceId:3,employeeId:3,employeeName:"Employee 3",deductionType:"Company Loan",type:"Cash Loan",description:"Description 3",amount:3e3,payPeriod:"October 1-15 2023",isArchive:!1},{referenceId:4,employeeId:4,employeeName:"Employee 4",deductionType:"Company Loan",type:"Product Loan",description:"Description 4",amount:4e3,payPeriod:"August 15-30 2023",isArchive:!1},{referenceId:5,employeeId:5,employeeName:"Employee 5",deductionType:"Company Loan",type:"Product Loan",description:"Description 5",amount:5e3,payPeriod:"August 1-15 2023",isArchive:!1},{referenceId:6,employeeId:6,employeeName:"Employee 6",deductionType:"Company Loan",type:"Cash Loan",description:"Description 6",amount:6e3,payPeriod:"July 1-15 2023",isArchive:!0},{referenceId:7,employeeId:7,employeeName:"Employee 7",deductionType:"Company Loan",type:"Product Loan",description:"Description 7",amount:7e3,payPeriod:"July 15-30 2023",isArchive:!1},{referenceId:8,employeeId:8,employeeName:"Employee 8",deductionType:"Company Loan",type:"Cash Loan",description:"Description 8",amount:8e3,payPeriod:"June 1-15 2023",isArchive:!0},{referenceId:9,employeeId:9,employeeName:"Employee 9",deductionType:"Company Loan",type:"Product Loan",description:"Description 9",amount:9e3,payPeriod:"June 15-30 2023",isArchive:!1},{referenceId:10,employeeId:10,employeeName:"Employee 10",deductionType:"Company Loan",type:"Product Loan",description:"Description 10",amount:1e4,payPeriod:"May 1-15 2023",isArchive:!0},{referenceId:11,employeeId:11,employeeName:"Employee 11",deductionType:"Company Loan",type:"Cash Loan",description:"Description 11",amount:11e3,payPeriod:"April 15-30 2023",isArchive:!0},{referenceId:12,employeeId:12,employeeName:"Employee 12",deductionType:"Company Loan",type:"Product Loan",description:"Description 12",amount:12e3,payPeriod:"April 1-15 2023",isArchive:!0},{referenceId:13,employeeId:13,employeeName:"Employee 13",deductionType:"Company Loan",type:"Cash Loan",description:"Description 13",amount:13e3,payPeriod:"March 15-30 2023",isArchive:!0},{referenceId:14,employeeId:14,employeeName:"Employee 14",deductionType:"Company Loan",type:"Product Loan",description:"Description 14",amount:14e3,payPeriod:"March 1-15 2023",isArchive:!1},{referenceId:15,employeeId:15,employeeName:"Employee 15",deductionType:"Company Loan",type:"Product Loan",description:"Description 15",amount:15e3,payPeriod:"February 15-28 2023",isArchive:!1}]}),getters:{getNotArchive(y){return y.rows.filter(d=>d.isArchive===!1)},getArchive(y){return y.rows.filter(d=>d.isArchive===!0)}},actions:{}}),V=f("sss",{state:()=>({rows:[{referenceId:1,deductionType:"SSS",type:"SSS Contribution",description:"Description 1",amount:1e3,payPeriod:"October 1-15 2023"},{referenceId:2,deductionType:"SSS",type:"SSS Calamity Loan",description:"Description 2",amount:2e3,payPeriod:"September 1-15 2023"},{referenceId:3,deductionType:"SSS",type:"SSS Loan",description:"Description 3",amount:3e3,payPeriod:"October 1-15 2023"},{referenceId:4,deductionType:"SSS",type:"SSS Loan",description:"Description 4",amount:4e3,payPeriod:"August 15-30 2023"},{referenceId:5,deductionType:"SSS",type:"SSS Contribution",description:"Description 5",amount:5e3,payPeriod:"August 1-15 2023"}]}),getters:{},actions:{}}),N=f("philHealth",{state:()=>({rows:[{referenceId:1,deductionType:"PhilHealth",type:"PhilHealth Contribution",description:"Description 1",amount:1e3,payPeriod:"October 1-15 2023"},{referenceId:2,deductionType:"PhilHealth",type:"PhilHealth Contribution",description:"Description 2",amount:2e3,payPeriod:"September 1-15 2023"},{referenceId:3,deductionType:"PhilHealth",type:"PhilHealth Contribution",description:"Description 3",amount:3e3,payPeriod:"October 1-15 2023"},{referenceId:4,deductionType:"PhilHealth",type:"PhilHealth Contribution",description:"Description 4",amount:4e3,payPeriod:"August 15-30 2023"},{referenceId:5,deductionType:"PhilHealth",type:"PhilHealth Contribution",description:"Description 5",amount:5e3,payPeriod:"August 1-15 2023"}]}),getters:{},actions:{}}),k=f("tax",{state:()=>({rows:[{referenceId:1,deductionType:"Tax",type:"Income Tax",description:"Description 1",amount:1e3,payPeriod:"Dec 15-30 2023"},{referenceId:2,deductionType:"Tax",type:"Income Tax",description:"Description 2",amount:2e3,payPeriod:"Dec 15-30 2023"},{referenceId:3,deductionType:"Tax",type:"Income Tax",description:"Description 3",amount:3e3,payPeriod:"Dec 15-30 2023"},{referenceId:4,deductionType:"Tax",type:"Income Tax",description:"Description 4",amount:4e3,payPeriod:"Dec 15-30 2023"},{referenceId:5,deductionType:"Tax",type:"Income Tax",description:"Description 5",amount:5e3,payPeriod:"Dec 15-30 2023"}]}),getters:{},actions:{}}),E={class:"tw-w-6/12 tw-mx-auto tw-mb-3"},R={__name:"DeductionLedgerPage",setup(y){const d=x(),h=V(),b=N(),P=k(),i=I("All"),S=["Company Loan","SSS","PhilHealth","Tax","All"],e=I(""),T=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:n=>n.referenceId,format:n=>`${n}`,sortable:!0},{name:"Deduction Type",align:"center",label:"Deduction Type",field:"deductionType",sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Pay Period",align:"center",label:"Pay Period",field:"payPeriod",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Amount",align:"center",label:"Amount",field:"amount",sortable:!0}],w=[{name:"referenceId",required:!0,label:"Reference ID",align:"left",field:n=>n.referenceId,format:n=>`${n}`,sortable:!0},{name:"Type",align:"center",label:"Type",field:"type",sortable:!0},{name:"Pay Period",align:"center",label:"Pay Period",field:"payPeriod",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Amount",align:"center",label:"Amount",field:"amount",sortable:!0}],g=d.rows.concat(h.rows).concat(b.rows).concat(P.rows);return(n,o)=>(l(),v("div",null,[r(A,null,{default:a(()=>[L("div",E,[r(D,{borderless:"",modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t),options:S,onOnChange:o[1]||(o[1]=t=>n.onChange(t)),class:"tw-pl-3 tw-w-min tw-text-nowrap tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-3xl"},null,8,["modelValue"])]),i.value=="All"?(l(),p(m,{key:0,class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:e.value,rows:c(g),columns:T,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":a(()=>[r(u,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value=t),placeholder:"Search"},{append:a(()=>[r(s,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])):i.value=="Company Loan"?(l(),p(m,{key:1,class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:e.value,rows:c(d).rows,columns:w,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":a(()=>[r(u,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=t=>e.value=t),placeholder:"Search"},{append:a(()=>[r(s,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])):i.value=="SSS"?(l(),p(m,{key:2,class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:e.value,rows:c(h).rows,columns:w,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":a(()=>[r(u,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=t=>e.value=t),placeholder:"Search"},{append:a(()=>[r(s,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])):i.value=="PhilHealth"?(l(),p(m,{key:3,class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:e.value,rows:c(b).rows,columns:w,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":a(()=>[r(u,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[5]||(o[5]=t=>e.value=t),placeholder:"Search"},{append:a(()=>[r(s,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])):i.value=="Tax"?(l(),p(m,{key:4,class:"my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",flat:"",bordered:"",title:"",filter:e.value,rows:c(P).rows,columns:w,"rows-per-page-options":[10,20,0],"row-key":"name"},{"top-right":a(()=>[r(u,{borderless:"",dense:"",debounce:"300",modelValue:e.value,"onUpdate:modelValue":o[6]||(o[6]=t=>e.value=t),placeholder:"Search"},{append:a(()=>[r(s,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["filter","rows"])):C("",!0)]),_:1})]))}};export{R as default};