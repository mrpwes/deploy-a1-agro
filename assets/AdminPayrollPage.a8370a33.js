import{u as B}from"./pageHeader.b29c2f83.js";import{k as j,r as k,j as q,p as T,t as $,q as W,i as z,aI as G,Q as M,ar as Y,as as F,o as Q,c as N,d as s,w as m,a as n,a8 as p,e as v,S as J,a5 as X,aK as Z,a7 as ee,G as te,f as y,aQ as U}from"./index.504ec86a.js";import{Q as P}from"./QInput.83dad3fc.js";import{Q as ae,w as oe,t as le}from"./position-engine.224580a6.js";import{d as ne,Q as re,b as se}from"./QSelect.b29667b8.js";import{Q as w}from"./QTd.6a465a6b.js";import{Q as ie}from"./QTr.e0dfd343.js";import{Q as ue}from"./QTable.b7213eba.js";import{u as R}from"./payrollTableFormatter.2cf9a682.js";import{Q as de,C as ce}from"./ClosePopup.337d1baa.js";import"./use-key-composition.c8c0c6cd.js";import"./focus-manager.bec94b0c.js";import"./QList.6e762c59.js";import"./globalNotification.5d4f7813.js";import"./axios.0ed95acd.js";function A(t,l=new WeakMap){if(Object(t)!==t)return t;if(l.has(t))return l.get(t);const r=t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t instanceof Set?new Set:t instanceof Map?new Map:typeof t.constructor!="function"?Object.create(null):t.prototype!==void 0&&typeof t.prototype.constructor=="function"?t:new t.constructor;if(typeof t.constructor=="function"&&typeof t.valueOf=="function"){const d=t.valueOf();if(Object(d)!==d){const a=new t.constructor(d);return l.set(t,a),a}}return l.set(t,r),t instanceof Set?t.forEach(d=>{r.add(A(d,l))}):t instanceof Map&&t.forEach((d,a)=>{r.set(a,A(d,l))}),Object.assign(r,...Object.keys(t).map(d=>({[d]:A(t[d],l)})))}var C=j({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(t,{slots:l,emit:r}){const{proxy:d}=$(),{$q:a}=d,c=k(null),_=k(""),b=k("");let g=!1;const x=q(()=>W({initialValue:_.value,validate:t.validate,set:D,cancel:f,updatePosition:u},"value",()=>b.value,S=>{b.value=S}));function D(){t.validate(b.value)!==!1&&(e()===!0&&(r("save",b.value,_.value),r("update:modelValue",b.value)),o())}function f(){e()===!0&&r("cancel",b.value,_.value),o()}function u(){z(()=>{c.value.updatePosition()})}function e(){return G(b.value,_.value)===!1}function o(){g=!0,c.value.hide()}function i(){g=!1,_.value=A(t.modelValue),b.value=A(t.modelValue),r("beforeShow")}function h(){r("show")}function V(){g===!1&&e()===!0&&(t.autoSave===!0&&t.validate(b.value)===!0?(r("save",b.value,_.value),r("update:modelValue",b.value)):r("cancel",b.value,_.value)),r("beforeHide")}function I(){r("hide")}function H(){const S=l.default!==void 0?[].concat(l.default(x.value)):[];return t.title&&S.unshift(T("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},t.title)),t.buttons===!0&&S.push(T("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[T(M,{flat:!0,color:t.color,label:t.labelCancel||a.lang.label.cancel,onClick:f}),T(M,{flat:!0,color:t.color,label:t.labelSet||a.lang.label.set,onClick:D})])),S}return Object.assign(d,{set:D,cancel:f,show(S){c.value!==null&&c.value.show(S)},hide(S){c.value!==null&&c.value.hide(S)},updatePosition:u}),()=>{if(t.disable!==!0)return T(ne,{ref:c,class:"q-popup-edit",cover:t.cover,onBeforeShow:i,onShow:h,onBeforeHide:V,onHide:I,onEscapeKey:f},H)}}});const me=Y("payrollTable",{state:()=>({payrollColumns:{columns:[{name:"employeeId",required:!0,label:"Emp. Id",align:"left",sortable:!0},{name:"employeeName",align:"center",label:"Name",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"noDaysWorked",align:"center",label:"Days Worked",sortable:!0},{name:"ratePerDay",align:"center",label:"Rate/Day",classes:"!tw-bg-neutral-300"},{name:"total",align:"center",label:"Total",sortable:!0},{name:"sss",align:"center",label:"SSS",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"philHealth",align:"center",label:"PhilHealth",sortable:!0},{name:"pagIbig",align:"center",label:"PagIBIG",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"sssCalamityLoan",align:"center",label:"SSS Calamity Loan",sortable:!0},{name:"sssLoan",align:"center",label:"SSS Salary Loan",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"pagIbigLoan",align:"center",label:"Pag-IBIG Loan",sortable:!0,headerStyle:"width: 0px"},{name:"NetPay",align:"center",label:"NetPay",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"actions",align:"center",label:""}]},rows:[],selectedDate:null,selectedDateOptions:null}),getters:{getArchived(t){return t.rows.filter(l=>l.is_archive===!0)},getUnarchived(t){return t.rows.filter(l=>l.is_archive===!1).sort((l,r)=>l.company_employee_id-r.company_employee_id)}},actions:{customFilter(t,l){return console.log("customFilter",t,l),t.filter(r=>{const d=l.toLowerCase();return r.last_name.toLowerCase().includes(d)||r.first_name.toLowerCase().includes(d)||r.middle_name.toLowerCase().includes(d)})},formatDate(t){const l=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),d=String(t.getDate()).padStart(2,"0");return`${l}-${r}-${d}`},getAndCheckDateRangesForCurrentMonth(){const t=new Date,l=t.getFullYear(),r=t.getMonth(),d=new Date(l,r,1),a=new Date(l,r,15),c=new Date(l,r,16),_=new Date(l,r+1,0),b={firstHalf:{start:this.formatDate(d),end:this.formatDate(a)},secondHalf:{start:this.formatDate(c),end:this.formatDate(_)}},g=this.formatDate(t),x=new Date(b.firstHalf.start),D=new Date(b.firstHalf.end),f=new Date(b.secondHalf.start),u=new Date(b.secondHalf.end);let e,o;return t>=x&&t<=D?(e=this.formatDate(x),o=this.formatDate(D)):t>=f&&t<=u?(e=this.formatDate(f),o=this.formatDate(u)):(e="out of range",o="out of range"),{todayDate:g,startDate:e,endDate:o}},async getSalaryHistory(){try{const{data:t,error:l}=await F.from("salary_history").select();l&&console.error(l),this.selectedDateOptions=t.sort((r,d)=>new Date(r.date_start)-new Date(d.date_start))}catch(t){console.error(t)}},customLogic(t,l){return!(t&&l)},async fetchAttendanceInRange(t=this.selectedDate.date_start,l=this.selectedDate.date_end){try{const{data:r,error:d}=await F.from("employee").select(`*,
            phone_number(*, phone_type(*)),
            attendance(*, attendance_type(*)),
            employee_audit!employee_audit_employee_id_fkey(*),
            emp_sss_contrib_audit!emp_sss_contrib_audit_employee_id_fkey(*),
            emp_philhealth_contrib_audit!emp_philhealth_contrib_audit_employee_id_fkey(*),
            emp_pagibig_contrib_audit!emp_pagibig_contrib_audit_employee_id_fkey(*),
            government_loan_audit!government_loan_audit_employee_id_fkey(*)
            `).gte("attendance.date",t).lte("attendance.date",l).lte("emp_sss_contrib_audit.change_date",l).lte("emp_philhealth_contrib_audit.change_date",l).lte("emp_pagibig_contrib_audit.change_date",l);console.log(l),console.log(r),r.forEach(a=>{const c=a.emp_sss_contrib_audit;if(c.length>0){const _=c[c.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(l.split("-")[2]))?console.log("is true."):_.half_month_indicator==!1&&[15].includes(parseInt(l.split("-")[2]))?console.log("is true 2."):(console.log("EMPLOYEE SSS is false."),a.emp_sss_contrib_audit=[])}else console.log("emp_sss_contrib_audit array is empty.")}),r.forEach(a=>{const c=a.emp_philhealth_contrib_audit;if(c.length>0){const _=c[c.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(l.split("-")[2]))?console.log("Philhealth is true."):_.half_month_indicator==!1&&[15].includes(parseInt(l.split("-")[2]))?console.log("Philhealth is true 2."):a.emp_philhealth_contrib_audit=[]}else console.log("emp_philhealth_contrib_audit array is empty.")}),r.forEach(a=>{const c=a.emp_pagibig_contrib_audit;if(c.length>0){const _=c[c.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(l.split("-")[2]))?console.log("Pagibig is true."):_.half_month_indicator==!1&&[15].includes(parseInt(l.split("-")[2]))?console.log("Pagibig is true 2."):a.emp_pagibig_contrib_audit=[]}else console.log("emp_pagibig_contrib_audit array is empty.")}),r.forEach(a=>{const c=a.government_loan_audit;if(c.length>0){const _={};c.forEach(b=>{const g=b.government_loan_id;(!_[g]||b.audit_id>_[g].audit_id)&&(_[g]=b)}),a.government_loan_audit=Object.values(_)}else console.log("government_loan_audit array is empty.")}),d&&console.error(d),this.rows=r}catch(r){console.error(r)}},getNearestDateRange(){if(this.selectedDate!=null)return;const t=new Date;function l(c){return new Date(c)}function r(c){return Math.abs(t-c)}let d=null,a=1/0;for(const c of this.selectedDateOptions){const _=l(c.date_start),b=l(c.date_end),g=r(_),x=r(b),D=Math.min(g,x);D<a&&(a=D,d=c)}this.selectedDate=d},async fetchAttendanceReports(){this.rows=[],await this.getSalaryHistory(),await this.getNearestDateRange(),await this.fetchAttendanceInRange()}}});const _e={class:"!tw-h-min !tw-w-8/12 !tw-max-w-full tw-bg-white tw-p-6"},be={id:"section-to-print"},fe={class:"tw-text-3xl tw-font-extrabold tw-pb-3"},pe=n("thead",null,[n("tr",null,[n("th",{class:"tw-text-center tw-font-bold tw-border",colspan:"3"}," Gross "),n("th",{class:"tw-text-center tw-font-bold tw-border",colspan:"2"}," Deductions ")])],-1),he=n("td",{class:"tw-border"},"Rate Per Day:",-1),ge={class:"tw-border"},we=n("td",{class:"tw-border"},null,-1),ye=n("td",{class:"tw-border"},"SSS Contribution:",-1),ve={class:"tw-border tw-flex tw-justify-between"},Ve={class:"tw-text-gray-500"},De=n("td",{class:"tw-border"},"Day Worked:",-1),Se={class:"tw-border"},xe={class:"tw-border"},Pe=n("td",{class:"tw-border"},"PhilHealth Contribution:",-1),Ue={class:"tw-border tw-flex tw-justify-between"},Ce={class:"tw-text-gray-500"},ke=n("td",{colspan:"3",class:"tw-border"},null,-1),Me=n("td",{class:"tw-border"},"Pag-IBIG Contribution:",-1),Ie={class:"tw-border tw-flex tw-justify-between"},Le={class:"tw-text-gray-500"},Te=n("tr",null,[n("td",{colspan:"3",class:"tw-border"},"\xA0"),n("td",{class:"tw-border"}),n("td",{class:"tw-border"})],-1),Ae=n("td",{colspan:"3",class:"tw-border"},null,-1),He=n("td",{class:"tw-border"},"SSS Calamity Loan:",-1),Ee={class:"tw-border tw-text-end"},Qe=n("td",{colspan:"3",class:"tw-border"},null,-1),Fe=n("td",{class:"tw-border"},"SSS Salary Loan:",-1),Ke={class:"tw-border tw-text-end"},Ne=n("td",{colspan:"3",class:"tw-border"},null,-1),Re=n("td",{class:"tw-border"},"Pag-IBIG Loan:",-1),Oe={class:"tw-border tw-text-end"},Be=n("tr",null,[n("td",{colspan:"3",class:"tw-border"},"\xA0"),n("td",{class:"tw-border"}),n("td",{class:"tw-border"})],-1),je=n("td",{colspan:"2",class:"tw-border"},"Total Gross Income:",-1),qe={class:"tw-border"},$e=n("td",{class:"tw-border"},"Total Deductions:",-1),We={class:"tw-border tw-justify-end tw-text-end"},ze=n("td",{class:"tw-border",colspan:"3"},null,-1),Ge=n("td",{class:"tw-border"},"Total Net Pay:",-1),Ye={class:"tw-border tw-text-end"},K={__name:"ViewPayrollRowButton",props:["rows"],setup(t){const l=R(),r=k(0),d=k(!1),a=k(null);function c(u){a.value=u,d.value=!0}function _(){a.value.phone_number[0].phone_type_id===1&&a.value.phone_number[0].phone_number?l.sendMessage(a.value.phone_number[0].phone_number,a.value.last_name):Z.create({icon:"error",color:"negative",message:"No Mobile Number Found!"})}function b(u,e){return u.filter(h=>h.government_loan_type_id===e).reduce((h,V)=>h+V.amortization,0)}function g(){var u,e,o,i,h,V;return((e=(u=a.value.emp_sss_contrib_audit[a.value.emp_sss_contrib_audit.length-1])==null?void 0:u.amount)!=null?e:0)+((i=(o=a.value.emp_philhealth_contrib_audit[a.value.emp_philhealth_contrib_audit.length-1])==null?void 0:o.amount)!=null?i:0)+((V=(h=a.value.emp_pagibig_contrib_audit[a.value.emp_pagibig_contrib_audit.length-1])==null?void 0:h.amount)!=null?V:0)+b(a.value.government_loan_audit,1)+b(a.value.government_loan_audit,2)+b(a.value.government_loan_audit,3)}function x(u){var e=u.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(e)}function D(){try{return x(l.grossIncomeFormatter(a.value.rate_per_day,a.value.attendance)-g())}catch(u){return console.error("Error calculating payroll:",u),0}}function f(u,e=2){var o=new RegExp("^-?\\d+(?:.\\d{0,"+(e||-1)+"})?");return u.toString().match(o)[0]}return(u,e)=>(Q(),N(X,null,[s(M,{unelevated:"",padding:"none",icon:"visibility",onClick:e[0]||(e[0]=o=>c(t.rows))}),s(ae,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),persistent:""},{default:m(()=>[n("div",_e,[n("div",be,[n("div",fe,p(a.value.company_employee_id+" - "+a.value.first_name+" "+a.value.last_name),1),s(re,{separator:"cell",flat:"",bordered:"",dense:""},{default:m(()=>{var o,i,h,V,I;return[pe,n("tbody",null,[n("tr",null,[he,n("td",ge,p(a.value.rate_per_day),1),we,ye,n("td",ve,[n("div",Ve,p(v(l).findSSSRange(a.value.rate_per_day*30)),1),n("div",null,p(a.value.emp_sss_contrib_audit&&a.value.emp_sss_contrib_audit.length>0&&(o=a.value.emp_sss_contrib_audit[a.value.emp_sss_contrib_audit.length-1].amount)!=null?o:0),1)])]),n("tr",null,[De,n("td",Se,p(f(v(l).calculateTotalAttendanceHours(a.value.attendance)/8)),1),n("td",xe,p(v(l).grossIncomeFormatter(a.value.rate_per_day,a.value.attendance)),1),Pe,n("td",Ue,[n("div",Ce,p(v(l).philhealthContributionRate/2/100*(a.value.rate_per_day*30)),1),n("div",null,p((h=(i=a.value.emp_philhealth_contrib_audit[a.value.emp_philhealth_contrib_audit.length-1])==null?void 0:i.amount)!=null?h:0),1)])]),n("tr",null,[ke,Me,n("td",Ie,[n("div",Le,p(v(l).calculatePagibigContribution(a.value.rate_per_day)),1),n("div",null,p((I=(V=a.value.emp_pagibig_contrib_audit[a.value.emp_pagibig_contrib_audit.length-1])==null?void 0:V.amount)!=null?I:0),1)])]),Te,n("tr",null,[Ae,He,n("td",Ee,p(b(a.value.government_loan_audit,2)),1)]),n("tr",null,[Qe,Fe,n("td",Ke,p(b(a.value.government_loan_audit,1)),1)]),n("tr",null,[Ne,Re,n("td",Oe,p(b(a.value.government_loan_audit,3)),1)]),Be,n("tr",null,[je,n("td",qe,p(v(l).grossIncomeFormatter(a.value.rate_per_day,a.value.attendance)),1),$e,n("td",We,p(g()),1)]),n("tr",null,[ze,Ge,n("td",Ye,p(D()),1)])])]}),_:1})]),s(de,{align:"right",class:"text-primary noPrint"},{default:m(()=>[J(s(M,{flat:"",label:"Cancel"},null,512),[[ce]]),s(M,{flat:"",class:"tw-bg-green-400",icon:"mdi-message",label:r.value===0?"SEND SMS":"SEND SMS "+r.value,onclick:_},null,8,["label"]),s(M,{flat:"",class:"tw-bg-green-400",icon:"print",label:"print payslip",onclick:"window.print()"})]),_:1})])]),_:1},8,["modelValue"])],64))}},Je={__name:"PayrollSheetTable",setup(t){const l=me(),r=R(),d=k(""),a=k(!1);l.fetchAttendanceReports(),r.fetchSssContributionTable(),r.fetchPhilhealthContributionTable(),r.fetchPagibigContributionTable();function c(f){const u=new Date(f),e={year:"numeric",month:"short",day:"numeric"};return u.toLocaleDateString("en-US",e)}function _(f,u){return f.filter(i=>i.government_loan_type_id===u).reduce((i,h)=>i+h.amortization,0)}function b(f){var u,e,o,i,h,V;return((e=(u=f.emp_sss_contrib_audit[0])==null?void 0:u.amount)!=null?e:0)+((i=(o=f.emp_philhealth_contrib_audit[0])==null?void 0:o.amount)!=null?i:0)+((V=(h=f.emp_pagibig_contrib_audit[0])==null?void 0:h.amount)!=null?V:0)+_(f.government_loan_audit,1)+_(f.government_loan_audit,2)+_(f.government_loan_audit,3)}function g(f){var u=f.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(u)}function x(f){try{return g(r.grossIncomeFormatter(f.rate_per_day,f.attendance)-b(f))}catch(u){return console.error("Error calculating payroll:",u),f}}function D(f){const u=document.getElementById(f);let e="";e+=Array.from(u.querySelectorAll("th")).map(E=>E.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(u.querySelectorAll("tr")).slice(1).forEach(E=>{e+=Array.from(E.querySelectorAll("td")).slice(0,-1).map(O=>O.innerText).join(",")+`
`});const h=new Date,V={month:"short",day:"2-digit",year:"numeric"},I=h.toLocaleDateString("en-US",V).replace(",","").replace(/\s+/g,"-"),H=new Blob([e],{type:"text/csv;charset=utf-8;"}),S=URL.createObjectURL(H),L=document.createElement("a");L.setAttribute("href",S),L.setAttribute("download",`Payroll-Sheet-Report-${I}.csv`),document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(S)}return(f,u)=>(Q(),ee(ue,{id:"exportTable",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report","title-class":["tw-text-xl","tw-font-bold"],columns:v(l).payrollColumns.columns,rows:v(l).getUnarchived,"rows-per-page-options":[0],filter:d.value,"filter-method":v(l).customFilter,separator:"cell","row-key":"name"},{"top-right":m(()=>[s(M,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:u[0]||(u[0]=e=>D("exportTable")),class:"tw-mr-16"}),s(P,{borderless:"",dense:"",debounce:"300",modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=e=>d.value=e),placeholder:"Search Name"},{append:m(()=>[s(te,{name:"search"})]),_:1},8,["modelValue"])]),"top-left":m(()=>[s(se,{rounded:"",standout:"","use-input":"",modelValue:v(l).selectedDate,"onUpdate:modelValue":[u[2]||(u[2]=e=>v(l).selectedDate=e),u[3]||(u[3]=e=>v(l).fetchAttendanceReports())],options:v(l).selectedDateOptions,"option-label":e=>c(e.date_start)+" - "+c(e.date_end),"hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",class:"!tw-pb-0"},{"no-option":m(()=>[s(oe,null,{default:m(()=>[s(le,{class:"text-grey"},{default:m(()=>[y(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),"body-cell-actions":m(e=>[s(w,{key:"actions",class:"tw-w-2/12",props:e},{default:m(()=>[s(K,{rows:e.row},null,8,["rows"])]),_:2},1032,["props"])]),body:m(e=>[s(ie,{props:e},{default:m(()=>[s(w,{key:"employeeId",props:e,"auto-width":""},{default:m(()=>[y(p(e.row.company_employee_id),1)]),_:2},1032,["props"]),s(w,{key:"employeeName",props:e,"auto-width":""},{default:m(()=>[y(p(e.row.first_name+" "+e.row.last_name),1)]),_:2},1032,["props"]),s(w,{key:"noDaysWorked",props:e,"auto-width":""},{default:m(()=>[y(p((v(r).calculateTotalAttendanceHours(e.row.attendance)/8).toFixed(4))+" ",1),s(C,{disable:!a.value,modelValue:e.row.noDaysWorked,"onUpdate:modelValue":o=>e.row.noDaysWorked=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"ratePerDay",props:e,"auto-width":""},{default:m(()=>[y(p(e.row.rate_per_day.toFixed(2))+" ",1),s(C,{disable:!a.value,modelValue:e.row.ratePerDay,"onUpdate:modelValue":o=>e.row.ratePerDay=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"total",props:e,"auto-width":""},{default:m(()=>[y(p(v(r).grossIncomeFormatter(e.row.rate_per_day,e.row.attendance)),1)]),_:2},1032,["props"]),s(w,{key:"sss",props:e,"auto-width":""},{default:m(()=>{var o;return[y(p(e.row.emp_sss_contrib_audit.length>0&&(o=e.row.emp_sss_contrib_audit[e.row.emp_sss_contrib_audit.length-1].amount)!=null?o:0)+" ",1),s(C,{disable:!a.value,modelValue:e.row.sss,"onUpdate:modelValue":i=>e.row.sss=i,modelModifiers:{number:!0},button:""},{default:m(i=>[s(P,{type:"number",modelValue:i.value,"onUpdate:modelValue":h=>i.value=h,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(i.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),s(w,{key:"philHealth",props:e,"auto-width":""},{default:m(()=>{var o;return[y(p(e.row.emp_philhealth_contrib_audit.length>0&&(o=e.row.emp_philhealth_contrib_audit[e.row.emp_philhealth_contrib_audit.length-1].amount)!=null?o:0)+" ",1),s(C,{disable:!a.value,modelValue:e.row.philHealth,"onUpdate:modelValue":i=>e.row.philHealth=i,modelModifiers:{number:!0},buttons:""},{default:m(i=>[s(P,{type:"number",modelValue:i.value,"onUpdate:modelValue":h=>i.value=h,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(i.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),s(w,{key:"pagIbig",props:e,"auto-width":""},{default:m(()=>{var o;return[y(p(e.row.emp_pagibig_contrib_audit.length>0&&(o=e.row.emp_pagibig_contrib_audit[e.row.emp_pagibig_contrib_audit.length-1].amount)!=null?o:0)+" ",1),s(C,{disable:!a.value,modelValue:e.row.pagIbig,"onUpdate:modelValue":i=>e.row.pagIbig=i,modelModifiers:{number:!0},buttons:""},{default:m(i=>[s(P,{type:"number",modelValue:i.value,"onUpdate:modelValue":h=>i.value=h,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(i.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),s(w,{key:"sssCalamityLoan",props:e,"auto-width":""},{default:m(()=>[y(p(_(e.row.government_loan_audit,2))+" ",1),s(C,{disable:!a.value,modelValue:e.row.sssCalamityLoan,"onUpdate:modelValue":o=>e.row.sssCalamityLoan=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"sssLoan",props:e,"auto-width":""},{default:m(()=>[y(p(_(e.row.government_loan_audit,1))+" ",1),s(C,{disable:!a.value,modelValue:e.row.sssLoan,"onUpdate:modelValue":o=>e.row.sssLoan=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"pagIbigLoan",props:e,"auto-width":""},{default:m(()=>[y(p(_(e.row.government_loan_audit,3))+" ",1),s(C,{disable:!a.value,modelValue:e.row.pagIbigLoan,"onUpdate:modelValue":o=>e.row.pagIbigLoan=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"NetPay",props:e,"auto-width":""},{default:m(()=>[y(p(x(e.row)),1)]),_:2},1032,["props"]),s(w,{key:"overVale",props:e,"auto-width":""},{default:m(()=>[y(p(e.row.overVale)+" ",1),s(C,{disable:!a.value,modelValue:e.row.overVale,"onUpdate:modelValue":o=>e.row.overVale=o,modelModifiers:{number:!0},buttons:""},{default:m(o=>[s(P,{type:"number",modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:U(o.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),s(w,{key:"actions","auto-width":"",props:e},{default:m(()=>[s(K,{rows:e.row},null,8,["rows"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","filter-method"]))}},Xe={class:"tw-w-12/12 tw-max-w-full tw-mx-auto tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse tw-p-4 tw-mt-0"},ft={__name:"AdminPayrollPage",setup(t){const l=B();return l.currentPage="Payroll Sheet",(r,d)=>(Q(),N("div",Xe,[n("div",null,[s(Je),y(" \xA0 ")])]))}};export{ft as default};