import{u as B}from"./pageHeader.0d890997.js";import{k as Q,r as x,j as N,p as T,t as j,q,i as $,ay as G,Q as L,ar as A,as as F,o as H,c as O,d as u,w as m,a as r,a5 as p,e as g,V as Y,a7 as z,aG as J,a4 as X,f as v,aK as P}from"./index.15824037.js";import{Q as Z,E as ee,D as te}from"./position-engine.85dc6960.js";import{c as ae,a as oe,Q as le}from"./QTable.651292d7.js";import{Q as y}from"./QTd.51e0046c.js";import{Q as I}from"./QInput.97164f39.js";import{Q as ne}from"./QTr.bd21f51a.js";import{Q as re,C as se}from"./ClosePopup.5de5c96a.js";import"./focus-manager.8e091e03.js";import"./use-key-composition.28aa7500.js";function R(e,t=new WeakMap){if(Object(e)!==e)return e;if(t.has(e))return t.get(e);const l=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const i=e.valueOf();if(Object(i)!==i){const o=new e.constructor(i);return t.set(e,o),o}}return t.set(e,l),e instanceof Set?e.forEach(i=>{l.add(R(i,t))}):e instanceof Map&&e.forEach((i,o)=>{l.set(o,R(i,t))}),Object.assign(l,...Object.keys(e).map(i=>({[i]:R(e[i],t)})))}var M=Q({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:l}){const{proxy:i}=j(),{$q:o}=i,d=x(null),_=x(""),b=x("");let w=!1;const h=N(()=>q({initialValue:_.value,validate:e.validate,set:c,cancel:a,updatePosition:n},"value",()=>b.value,D=>{b.value=D}));function c(){e.validate(b.value)!==!1&&(s()===!0&&(l("save",b.value,_.value),l("update:modelValue",b.value)),f())}function a(){s()===!0&&l("cancel",b.value,_.value),f()}function n(){$(()=>{d.value.updatePosition()})}function s(){return G(b.value,_.value)===!1}function f(){w=!0,d.value.hide()}function V(){w=!1,_.value=R(e.modelValue),b.value=R(e.modelValue),l("beforeShow")}function S(){l("show")}function k(){w===!1&&s()===!0&&(e.autoSave===!0&&e.validate(b.value)===!0?(l("save",b.value,_.value),l("update:modelValue",b.value)):l("cancel",b.value,_.value)),l("beforeHide")}function C(){l("hide")}function U(){const D=t.default!==void 0?[].concat(t.default(h.value)):[];return e.title&&D.unshift(T("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&D.push(T("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[T(L,{flat:!0,color:e.color,label:e.labelCancel||o.lang.label.cancel,onClick:a}),T(L,{flat:!0,color:e.color,label:e.labelSet||o.lang.label.set,onClick:c})])),D}return Object.assign(i,{set:c,cancel:a,show(D){d.value!==null&&d.value.show(D)},hide(D){d.value!==null&&d.value.hide(D)},updatePosition:n}),()=>{if(e.disable!==!0)return T(ae,{ref:d,class:"q-popup-edit",cover:e.cover,onBeforeShow:V,onShow:S,onBeforeHide:k,onHide:C,onEscapeKey:a},U)}}});const ie=A("payrollTable",{state:()=>({payrollColumns:{columns:[{name:"employeeId",required:!0,label:"Emp. Id",align:"left",sortable:!0},{name:"employeeName",align:"center",label:"Name",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"noDaysWorked",align:"center",label:"Days Worked",sortable:!0},{name:"ratePerDay",align:"center",label:"Rate/Day",classes:"!tw-bg-neutral-300"},{name:"total",align:"center",label:"Total",sortable:!0},{name:"sss",align:"center",label:"SSS",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"philHealth",align:"center",label:"PhilHealth",sortable:!0},{name:"pagIbig",align:"center",label:"PagIBIG",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"sssCalamityLoan",align:"center",label:"SSS Calamity Loan",sortable:!0},{name:"sssLoan",align:"center",label:"SSS  Loan",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"pagIbigLoan",align:"center",label:"Pag-IBIG Loan",sortable:!0,headerStyle:"width: 0px"},{name:"NetPay",align:"center",label:"NetPay",sortable:!0,classes:"!tw-bg-neutral-300"},{name:"actions",align:"center",label:""}]},rows:[],selectedDate:null,selectedDateOptions:null}),getters:{},actions:{formatDate(e){const t=e.getFullYear(),l=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${l}-${i}`},getAndCheckDateRangesForCurrentMonth(){const e=new Date,t=e.getFullYear(),l=e.getMonth(),i=new Date(t,l,1),o=new Date(t,l,15),d=new Date(t,l,16),_=new Date(t,l+1,0),b={firstHalf:{start:this.formatDate(i),end:this.formatDate(o)},secondHalf:{start:this.formatDate(d),end:this.formatDate(_)}},w=this.formatDate(e),h=new Date(b.firstHalf.start),c=new Date(b.firstHalf.end),a=new Date(b.secondHalf.start),n=new Date(b.secondHalf.end);let s,f;return e>=h&&e<=c?(s=this.formatDate(h),f=this.formatDate(c)):e>=a&&e<=n?(s=this.formatDate(a),f=this.formatDate(n)):(s="out of range",f="out of range"),{todayDate:w,startDate:s,endDate:f}},async getSalaryHistory(){try{const{data:e,error:t}=await F.from("salary_history").select();t&&console.error(t),this.selectedDateOptions=e.sort((l,i)=>new Date(l.date_start)-new Date(i.date_start))}catch(e){console.error(e)}},customLogic(e,t){return!(e&&t)},async fetchAttendanceInRange(e=this.selectedDate.date_start,t=this.selectedDate.date_end){try{const{data:l,error:i}=await F.from("employee").select(`*,
            attendance(*, attendance_type(*)),
            employee_audit!employee_audit_employee_id_fkey(*),
            emp_sss_contrib_audit!emp_sss_contrib_audit_employee_id_fkey(*),
            emp_philhealth_contrib_audit!emp_philhealth_contrib_audit_employee_id_fkey(*),
            emp_pagibig_contrib_audit!emp_pagibig_contrib_audit_employee_id_fkey(*),
            vale_audit!vale_audit_employee_id_fkey(*),
            partial_to_ar_audit!partial_to_ar_audit_employee_id_fkey(*)
            `).eq("is_archive",!1).gte("attendance.date",e).lte("attendance.date",t).lte("emp_sss_contrib_audit.change_date",t).lte("emp_philhealth_contrib_audit.change_date",t).lte("emp_pagibig_contrib_audit.change_date",t).lte("vale_audit.change_date",t);l.forEach(o=>{const d=o.emp_sss_contrib_audit;if(d.length>0){const _=d[d.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(t.split("-")[2]))?console.log("is true."):_.half_month_indicator==!1&&[15].includes(parseInt(t.split("-")[2]))?console.log("is true 2."):(console.log("EMPLOYEE SSS is false."),o.emp_sss_contrib_audit=[])}else console.log("emp_sss_contrib_audit array is empty.")}),l.forEach(o=>{const d=o.emp_philhealth_contrib_audit;if(d.length>0){const _=d[d.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(t.split("-")[2]))?console.log("Philhealth is true."):_.half_month_indicator==!1&&[15].includes(parseInt(t.split("-")[2]))?console.log("Philhealth is true 2."):o.emp_philhealth_contrib_audit=[]}else console.log("emp_philhealth_contrib_audit array is empty.")}),l.forEach(o=>{const d=o.emp_pagibig_contrib_audit;if(d.length>0){const _=d[d.length-1];_.half_month_indicator==!0&&[28,29,30,31].includes(parseInt(t.split("-")[2]))?console.log("Pagibig is true."):_.half_month_indicator==!1&&[15].includes(parseInt(t.split("-")[2]))?console.log("Pagibig is true 2."):o.emp_pagibig_contrib_audit=[]}else console.log("emp_pagibig_contrib_audit array is empty.")}),i&&console.error(i),this.rows=l}catch(l){console.error(l)}},getNearestDateRange(){if(this.selectedDate!=null)return;const e=new Date;function t(d){return new Date(d)}function l(d){return Math.abs(e-d)}let i=null,o=1/0;for(const d of this.selectedDateOptions){const _=t(d.date_start),b=t(d.date_end),w=l(_),h=l(b),c=Math.min(w,h);c<o&&(o=c,i=d)}this.selectedDate=i},async fetchAttendanceReports(){this.rows=[],await this.getSalaryHistory(),await this.getNearestDateRange(),await this.fetchAttendanceInRange()}}}),W=A("payrollTableFormatter",{state:()=>({payrollData:[],sssContributionTableRanges:[],philhealthContributionRate:null,pagibigContributionRate:null}),getters:{formattedPayrollData:e=>e.payrollData.map(t=>({...t,formattedDate:new Date(t.date).toLocaleDateString()}))},actions:{twoDecimalWithoutRounding(e){var t=e.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(t)},capitalizeFirstLetterOfEachWord(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")},noDaysWorkedFormatter(e){let t=0;return e.forEach(l=>{if(l.time_out===null&&l.time_in!==null)t+=0;else if(l.attendance_type_id!==1&&l.attendance_type_id!==void 0)t+=8;else if(l.time_in&&l.time_out){const i=new Date(l.time_in),o=new Date(l.time_out),d=new Date(i);d.setHours(8,0,0,0),i<d&&i.setHours(8,0,0,0);const _=new Date(o);_.setHours(17,0,0,0),o>_&&o.setHours(17,0,0,0);let b=(o-i)/(1e3*60*60);const w=new Date(o);w.setHours(13,0,0,0),o>w&&(b-=1),t+=b}}),this.twoDecimalWithoutRounding(t/8)},grossIncomeFormatter(e,t){const l=this.noDaysWorkedFormatter(t);return e*l},monthlyIncomeFormatter(e,t=30){return this.twoDecimalWithoutRounding(e*t)},async fetchSssContributionTable(){try{const{data:e,error:t}=await F.from("sss_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(t)throw console.error(t),t;this.sssContributionTableRanges=e[0].data.map(l=>{const i=l.combinedValue;let o,d,_;if(_=parseFloat(l.values[4].replace(",","")),i.startsWith("Below"))o=0,d=parseFloat(i.split(" ")[1].replace(",",""));else if(i.includes("Over"))o=parseFloat(i.split(" ")[0].replace(",","")),d=null;else{const[b,w]=i.split(" - ");o=parseFloat(b.replace(",","")),d=parseFloat(w.replace(",",""))}return{min:o,max:d,sss_bracket:_}})}catch(e){console.error(e)}},findSSSRange(e){for(const t of this.sssContributionTableRanges)if(e>=t.min&&e<t.max)return t.sss_bracket;return"Value is out of range"},async fetchPhilhealthContributionTable(){try{const{data:e,error:t}=await F.from("philhealth_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(t)throw console.error(t),t;this.philhealthContributionRate=e[0].data.value}catch(e){console.error(e)}},async fetchPagibigContributionTable(){try{const{data:e,error:t}=await F.from("pagibig_contribution_table_audit").select("*").order("audit_id",{ascending:!1}).limit(1);if(t)throw console.error(t),t;console.log(e),this.pagibigContributionRate=e}catch(e){console.error(e)}},calculatePagibigContribution(e){const t=this.monthlyIncomeFormatter(e);let l,i;return t<=1500?(l=.01,i=Math.min(t,1e4)*l):(l=.02,i=Math.min(t,1e4)*l),this.twoDecimalWithoutRounding(i)}}});const ue={class:"!tw-h-min !tw-w-8/12 !tw-max-w-full tw-bg-white tw-p-6"},de={id:"section-to-print"},ce={class:"tw-text-3xl tw-font-extrabold tw-pb-3"},me={class:"tw-w-full tw-table-auto tw-border-collapse"},_e=r("thead",null,[r("tr",null,[r("th",{class:"tw-text-center tw-font-bold tw-border",colspan:"3"}," Gross "),r("th",{class:"tw-text-center tw-font-bold tw-border",colspan:"2"}," Deductions ")])],-1),be=r("td",{class:"tw-border"},"Rate Per Day:",-1),pe={class:"tw-border"},he=r("td",{class:"tw-border"},null,-1),fe=r("td",{class:"tw-border"},"SSS Contribution:",-1),we={class:"tw-border tw-flex tw-justify-between"},ge={class:"tw-text-gray-500"},ye=r("td",{class:"tw-border"},"Day Worked:",-1),ve={class:"tw-border"},De={class:"tw-border"},Ve=r("td",{class:"tw-border"},"PhilHealth Contribution:",-1),Se={class:"tw-border tw-flex tw-justify-between"},Ce={class:"tw-text-gray-500"},ke=r("td",{colspan:"3",class:"tw-border"},null,-1),Pe=r("td",{class:"tw-border"},"Pag-IBIG Contribution:",-1),Ie={class:"tw-border tw-flex tw-justify-between"},Me={class:"tw-text-gray-500"},xe=r("tr",null,[r("td",{colspan:"3",class:"tw-border"},"\xA0"),r("td",{class:"tw-border"}),r("td",{class:"tw-border"})],-1),Ue=r("td",{colspan:"3",class:"tw-border"},null,-1),Le=r("td",{class:"tw-border"},"SSS Calamity Loan:",-1),Te={class:"tw-border"},Fe=r("td",{colspan:"3",class:"tw-border"},null,-1),Re=r("td",{class:"tw-border"},"SSS Loan:",-1),He={class:"tw-border"},Ee=r("td",{colspan:"3",class:"tw-border"},null,-1),Ae=r("td",{class:"tw-border"},"Pag-IBIG Loan:",-1),Oe={class:"tw-border"},We=r("tr",null,[r("td",{colspan:"3",class:"tw-border"},"\xA0"),r("td",{class:"tw-border"}),r("td",{class:"tw-border"})],-1),Ke=r("td",{colspan:"2",class:"tw-border"},"Total Gross Income:",-1),Be={class:"tw-border"},Qe=r("td",{class:"tw-border"},"Total Deductions:",-1),Ne={class:"tw-border tw-justify-end tw-text-end"},je=r("td",{class:"tw-border",colspan:"3"},null,-1),qe=r("td",{class:"tw-border"},"Total Net Pay:",-1),$e={class:"tw-border tw-text-end"},E={__name:"ViewPayrollRowButton",props:["rows"],setup(e){const t=W(),l=x(0),i=x(!1),o=x(null);function d(c){o.value=c,i.value=!0}function _(){l.value+=1,J.create({icon:"done",color:"positive",message:"SMS Sent!"})}function b(){var c,a,n,s,f,V,S,k,C;return((a=(c=o.value.emp_sss_contrib_audit[o.value.emp_sss_contrib_audit.length-1])==null?void 0:c.amount)!=null?a:0)+((s=(n=o.value.emp_philhealth_contrib_audit[o.value.emp_philhealth_contrib_audit.length-1])==null?void 0:n.amount)!=null?s:0)+((V=(f=o.value.emp_pagibig_contrib_audit[o.value.emp_pagibig_contrib_audit.length-1])==null?void 0:f.amount)!=null?V:0)+((S=o.value.sssCalamityLoan)!=null?S:0)+((k=o.value.sssLoan)!=null?k:0)+((C=o.value.pagIbigLoan)!=null?C:0)}function w(c){var a=c.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(a)}function h(){try{return w(t.grossIncomeFormatter(o.value.rate_per_day,o.value.attendance)-b())}catch(c){return console.error("Error calculating payroll:",c),0}}return(c,a)=>(H(),O(z,null,[u(L,{unelevated:"",padding:"none",icon:"visibility",onClick:a[0]||(a[0]=n=>d(e.rows))}),u(Z,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=n=>i.value=n),persistent:""},{default:m(()=>{var n,s,f,V,S;return[r("div",ue,[r("div",de,[r("div",ce,p(o.value.company_employee_id+" - "+o.value.first_name+" "+o.value.last_name),1),r("table",me,[_e,r("tbody",null,[r("tr",null,[be,r("td",pe,p(o.value.rate_per_day),1),he,fe,r("td",we,[r("div",ge,p(g(t).findSSSRange(o.value.rate_per_day*30)),1),r("div",null,p((n=o.value.emp_sss_contrib_audit[o.value.emp_sss_contrib_audit.length-1].amount)!=null?n:0),1)])]),r("tr",null,[ye,r("td",ve,p(g(t).noDaysWorkedFormatter(o.value.attendance)===0?"N/A":g(t).noDaysWorkedFormatter(o.value.attendance)===1?"1 Day":g(t).noDaysWorkedFormatter(o.value.attendance)+" Days"),1),r("td",De,p(g(t).grossIncomeFormatter(o.value.rate_per_day,o.value.attendance)),1),Ve,r("td",Se,[r("div",Ce,p(g(t).philhealthContributionRate/2/100*(o.value.rate_per_day*30)),1),r("div",null,p((f=(s=o.value.emp_philhealth_contrib_audit[o.value.emp_philhealth_contrib_audit.length-1])==null?void 0:s.amount)!=null?f:0),1)])]),r("tr",null,[ke,Pe,r("td",Ie,[r("div",Me,p(g(t).calculatePagibigContribution(o.value.rate_per_day)),1),r("div",null,p((S=(V=o.value.emp_pagibig_contrib_audit[o.value.emp_pagibig_contrib_audit.length-1])==null?void 0:V.amount)!=null?S:0),1)])]),xe,r("tr",null,[Ue,Le,r("td",Te,p(o.value.sssCalamityLoan),1)]),r("tr",null,[Fe,Re,r("td",He,p(o.value.sssLoan),1)]),r("tr",null,[Ee,Ae,r("td",Oe,p(o.value.pagIbigLoan),1)]),We,r("tr",null,[Ke,r("td",Be,p(g(t).grossIncomeFormatter(o.value.rate_per_day,o.value.attendance)),1),Qe,r("td",Ne,p(b()),1)]),r("tr",null,[je,qe,r("td",$e,p(h()),1)])])])]),u(re,{align:"right",class:"text-primary noPrint"},{default:m(()=>[Y(u(L,{flat:"",label:"Cancel"},null,512),[[se]]),u(L,{flat:"",class:"tw-bg-green-400",icon:"mdi-message",label:l.value===0?"SEND SMS":"SEND SMS "+l.value,onclick:_},null,8,["label"]),u(L,{flat:"",class:"tw-bg-green-400",icon:"print",label:"print payslip",onclick:"window.print()"})]),_:1})])]}),_:1},8,["modelValue"])],64))}},Ge={__name:"PayrollSheetTable",setup(e){const t=ie(),l=W(),i=x(""),o=x(!1);t.fetchAttendanceReports(),l.fetchSssContributionTable(),l.fetchPhilhealthContributionTable(),l.fetchPagibigContributionTable();function d(h){var c,a,n,s,f,V,S,k,C;return((a=(c=h.emp_sss_contrib_audit[0])==null?void 0:c.amount)!=null?a:0)+((s=(n=h.emp_philhealth_contrib_audit[0])==null?void 0:n.amount)!=null?s:0)+((V=(f=h.emp_pagibig_contrib_audit[0])==null?void 0:f.amount)!=null?V:0)+((S=h.sssCalamityLoan)!=null?S:0)+((k=h.sssLoan)!=null?k:0)+((C=h.pagIbigLoan)!=null?C:0)}function _(h){var c=h.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(c)}function b(h){try{return _(l.grossIncomeFormatter(h.rate_per_day,h.attendance)-d(h))}catch(c){return console.error("Error calculating payroll:",c),h}}function w(h){const c=document.getElementById(h);let a="";a+=Array.from(c.querySelectorAll("th")).map(D=>D.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(c.querySelectorAll("tr")).slice(1).forEach(D=>{a+=Array.from(D.querySelectorAll("td")).slice(0,-1).map(K=>K.innerText).join(",")+`
`});const f=new Date,V={month:"short",day:"2-digit",year:"numeric"},S=f.toLocaleDateString("en-US",V).replace(",","").replace(/\s+/g,"-"),k=new Blob([a],{type:"text/csv;charset=utf-8;"}),C=URL.createObjectURL(k),U=document.createElement("a");U.setAttribute("href",C),U.setAttribute("download",`Payroll-Sheet-Report-${S}.csv`),document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(C)}return(h,c)=>(H(),X(le,{id:"exportTable",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report","title-class":["tw-text-xl","tw-font-bold"],filter:i.value,columns:g(t).payrollColumns.columns,rows:g(t).rows,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-right":m(()=>[u(L,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:c[0]||(c[0]=a=>w("exportTable")),class:"tw-mr-16"})]),"top-left":m(()=>[u(oe,{rounded:"",standout:"","use-input":"",modelValue:g(t).selectedDate,"onUpdate:modelValue":[c[1]||(c[1]=a=>g(t).selectedDate=a),c[2]||(c[2]=a=>g(t).fetchAttendanceReports())],options:g(t).selectedDateOptions,"option-label":a=>a.date_start+" "+a.date_end,"hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",class:"!tw-pb-0"},{"no-option":m(()=>[u(ee,null,{default:m(()=>[u(te,{class:"text-grey"},{default:m(()=>[v(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),"body-cell-actions":m(a=>[u(y,{key:"actions",class:"tw-w-2/12",props:a},{default:m(()=>[u(E,{rows:a.row},null,8,["rows"])]),_:2},1032,["props"])]),body:m(a=>[u(ne,{props:a},{default:m(()=>[u(y,{key:"employeeId",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.company_employee_id),1)]),_:2},1032,["props"]),u(y,{key:"employeeName",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.first_name+" "+a.row.last_name),1)]),_:2},1032,["props"]),u(y,{key:"noDaysWorked",props:a,"auto-width":""},{default:m(()=>[v(p(g(l).noDaysWorkedFormatter(a.row.attendance))+" ",1),u(M,{disable:!o.value,modelValue:a.row.noDaysWorked,"onUpdate:modelValue":n=>a.row.noDaysWorked=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"ratePerDay",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.rate_per_day.toFixed(2))+" ",1),u(M,{disable:!o.value,modelValue:a.row.ratePerDay,"onUpdate:modelValue":n=>a.row.ratePerDay=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"total",props:a,"auto-width":""},{default:m(()=>[v(p(g(l).grossIncomeFormatter(a.row.rate_per_day,a.row.attendance)),1)]),_:2},1032,["props"]),u(y,{key:"sss",props:a,"auto-width":""},{default:m(()=>{var n;return[v(p(a.row.emp_sss_contrib_audit.length>0&&(n=a.row.emp_sss_contrib_audit[a.row.emp_sss_contrib_audit.length-1].amount)!=null?n:0)+" ",1),u(M,{disable:!o.value,modelValue:a.row.sss,"onUpdate:modelValue":s=>a.row.sss=s,modelModifiers:{number:!0},button:""},{default:m(s=>[u(I,{type:"number",modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(s.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),u(y,{key:"philHealth",props:a,"auto-width":""},{default:m(()=>{var n;return[v(p(a.row.emp_philhealth_contrib_audit.length>0&&(n=a.row.emp_philhealth_contrib_audit[a.row.emp_philhealth_contrib_audit.length-1].amount)!=null?n:0)+" ",1),u(M,{disable:!o.value,modelValue:a.row.philHealth,"onUpdate:modelValue":s=>a.row.philHealth=s,modelModifiers:{number:!0},buttons:""},{default:m(s=>[u(I,{type:"number",modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(s.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),u(y,{key:"pagIbig",props:a,"auto-width":""},{default:m(()=>{var n;return[v(p(a.row.emp_pagibig_contrib_audit.length>0&&(n=a.row.emp_pagibig_contrib_audit[a.row.emp_pagibig_contrib_audit.length-1].amount)!=null?n:0)+" ",1),u(M,{disable:!o.value,modelValue:a.row.pagIbig,"onUpdate:modelValue":s=>a.row.pagIbig=s,modelModifiers:{number:!0},buttons:""},{default:m(s=>[u(I,{type:"number",modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(s.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]}),_:2},1032,["props"]),u(y,{key:"sssCalamityLoan",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.sssCalamityLoan)+" ",1),u(M,{disable:!o.value,modelValue:a.row.sssCalamityLoan,"onUpdate:modelValue":n=>a.row.sssCalamityLoan=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"sssLoan",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.sssLoan)+" ",1),u(M,{disable:!o.value,modelValue:a.row.sssLoan,"onUpdate:modelValue":n=>a.row.sssLoan=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"pagIbigLoan",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.pagIbigLoan)+" ",1),u(M,{disable:!o.value,modelValue:a.row.pagIbigLoan,"onUpdate:modelValue":n=>a.row.pagIbigLoan=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"NetPay",props:a,"auto-width":""},{default:m(()=>[v(p(b(a.row)),1)]),_:2},1032,["props"]),u(y,{key:"overVale",props:a,"auto-width":""},{default:m(()=>[v(p(a.row.overVale)+" ",1),u(M,{disable:!o.value,modelValue:a.row.overVale,"onUpdate:modelValue":n=>a.row.overVale=n,modelModifiers:{number:!0},buttons:""},{default:m(n=>[u(I,{type:"number",modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,modelModifiers:{number:!0},dense:"",autofocus:"",onKeyup:P(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["disable","modelValue","onUpdate:modelValue"])]),_:2},1032,["props"]),u(y,{key:"actions","auto-width":"",props:a},{default:m(()=>[u(E,{rows:a.row},null,8,["rows"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["filter","columns","rows"]))}},Ye={class:"tw-w-12/12 tw-max-w-full tw-mx-auto tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse tw-p-4 tw-mt-0"},st={__name:"AdminPayrollPage",setup(e){const t=B();return t.currentPage="Payroll Sheet",(l,i)=>(H(),O("div",Ye,[r("div",null,[u(Ge),v(" \xA0 ")])]))}};export{st as default};