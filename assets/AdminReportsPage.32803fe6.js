import{u as W}from"./pageHeader.15e9386d.js";import{ar as O,as as _,r as $,o as M,a4 as F,w as h,d as p,Q as N,f as H,e as w,a as b,a5 as x,c as Y}from"./index.2557495e.js";import{E as k,D as L}from"./position-engine.76115753.js";import{a as P,Q as U}from"./QTable.bf8134d5.js";import{Q as v}from"./QTd.8e3ba709.js";import{Q as V}from"./QTr.06ac3cf2.js";import"./focus-manager.d822a2e9.js";import"./use-key-composition.e05cac7d.js";const z=O("attendanceTable",{state:()=>({rows:[],selectedDate:null,selectedDateOptions:null,attendanceColumns:{columns:[]}}),getters:{getSelectedDate(){return this.selectedDate}},actions:{capitalizeFirstLetterOfEachWord(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")},formatDate(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`},getAndCheckDateRangesForCurrentMonth(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),s=new Date(t,a,1),i=new Date(t,a,15),n=new Date(t,a,16),o=new Date(t,a+1,0),d={firstHalf:{start:this.formatDate(s),end:this.formatDate(i)},secondHalf:{start:this.formatDate(n),end:this.formatDate(o)}},m=this.formatDate(e),l=new Date(d.firstHalf.start),c=new Date(d.firstHalf.end),g=new Date(d.secondHalf.start),y=new Date(d.secondHalf.end);let u,r;return e>=l&&e<=c?(u=this.formatDate(l),r=this.formatDate(c)):e>=g&&e<=y?(u=this.formatDate(g),r=this.formatDate(y)):(u="out of range",r="out of range"),{todayDate:m,startDate:u,endDate:r}},async getSalaryHistory(){try{const{data:e,error:t}=await _.from("salary_history").select();t&&console.error(t),this.selectedDateOptions=e.sort((a,s)=>new Date(a.date_start)-new Date(s.date_start))}catch(e){console.error(e)}},fillMissingDates(e,t,a){const s=o=>{const d=o.getFullYear(),m=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0");return`${d}-${m}-${l}`},i=new Date(t),n=new Date(a);return e.forEach(o=>{const d=new Set(o.attendance.map(m=>m.date));for(let m=new Date(i);m<=n;m.setDate(m.getDate()+1)){const l=s(m);d.has(l)||o.attendance.push({id:null,date:l,remarks:null,time_in:null,time_out:null,employee_id:o.id,adjustment_salary_id:null})}o.attendance.sort((m,l)=>new Date(m.date)-new Date(l.date))}),e},async fetchAttendanceInRange(e=this.selectedDate.date_start,t=this.selectedDate.date_end){try{const{data:a,error:s}=await _.from("employee").select(`*,
             is_archive,
              attendance(*, attendance_type(*))`).gte("attendance.date",e).lte("attendance.date",t).eq("is_archive",!1);s&&console.error(s),this.rows=Object.values(this.fillMissingDates(a,e,t))}catch(a){console.error(a)}},columns(e=this.selectedDate.date_start,t=this.selectedDate.date_end){const a=new Date(e),s=new Date(t),i=[],n={day:"numeric",month:"numeric"},o=["S","M","T","W","TH","F","S"];let d=0;for(let l=new Date(a);l<=s;l.setDate(l.getDate()+1)){const c=l.getDate(),g=new Intl.DateTimeFormat("en-US",n).format(l),y=l.getDay(),u=`${g} ${o[y]}`;i.push((()=>{const r=d;return{name:`${c+"TESTING"}`,align:"center",label:`${u}`,sortable:!0,field:f=>{const T=new Date;if(new Date(f.attendance[r].date)>=T)return"N/A";var D;if(f.attendance[r].time_out===null&&f.attendance[r].time_in!==null)D="No Time Out";else if(f.attendance[r].attendance_type_id!==1&&f.attendance[r].attendance_type_id!==void 0)D=this.capitalizeFirstLetterOfEachWord(f.attendance[r].attendance_type.attendance_type_name);else{const E=new Date(f.attendance[r].time_in),S=new Date(f.attendance[r].time_out),C=new Date(E);C.setHours(8,0,0,0),E<C&&E.setHours(8,0,0,0);const R=new Date(S);R.setHours(17,0,0,0),S>R&&S.setHours(17,0,0,0),D=((S-E)/(1e3*60*60)).toFixed(2);const I=new Date(S);I.setHours(13,0,0,0),S>I&&(D=(parseFloat(D)-1).toFixed(2))}return D},classes:f=>{const T=new Date;if(new Date(f.attendance[r].date)>=T)return"N/A";var D,E;if(f.attendance[r].time_out===null&&f.attendance[r].time_in!==null)D="No Time Out",E="!tw-bg-[#e11d48]";else if(f.attendance[r].attendance_type_id!==1&&f.attendance[r].attendance_type_id!==void 0)E="!tw-bg-[#3b82f6]";else{const S=new Date(f.attendance[r].time_in),C=new Date(f.attendance[r].time_out),R=new Date(S);R.setHours(8,0,0,0),S<R&&S.setHours(8,0,0,0);const I=new Date(C);I.setHours(17,0,0,0),C>I&&C.setHours(17,0,0,0),D=((C-S)/(1e3*60*60)).toFixed(2);const j=new Date(C);j.setHours(13,0,0,0),C>j&&(D=(parseFloat(D)-1).toFixed(2));const q=new Date(S);q.setHours(8,10,0,0),parseFloat(D)>=8?E="!tw-bg-[#4ade80]":parseFloat(D)==0?E="!tw-bg-[#f87171]":S>q&&(E="!tw-bg-[#fb923c]",parseFloat(D)<5&&(E="!tw-bg-[#ec4899]"))}return E+" !tw-w-[50px] !tw-h-[50px] tw-rounded-lg"}}})()),d++}const m=[{name:"employeeName",align:"center",label:"Name",sortable:!0,field:l=>l.company_employee_id+" - "+l.last_name+", "+l.first_name,format:l=>`${l}`},...i,{name:"totalHours",align:"center",label:"Total Hours",sortable:!0,field:l=>{let c=0;return l.attendance.forEach(g=>{if(g.time_out===null&&g.time_in!==null)c+=0;else if(g.attendance_type_id!==1&&g.attendance_type_id!==void 0)c+=8;else if(g.time_in&&g.time_out){const y=new Date(g.time_in),u=new Date(g.time_out),r=new Date(y);r.setHours(8,0,0,0),y<r&&y.setHours(8,0,0,0);const f=new Date(u);f.setHours(17,0,0,0),u>f&&u.setHours(17,0,0,0);let T=(u-y)/(1e3*60*60);const A=new Date(u);A.setHours(13,0,0,0),u>A&&(T-=1),c+=T}}),c.toFixed(2)}},{name:"totalAbsent",align:"center",label:"A",sortable:!0,field:l=>{let c=0;const g=new Date;for(let y=0;y<l.length;y++)new Date(l[y].date)<=g&&(!l[y].time_in||!l[y].time_out)&&c++;return c}},{name:"totalLeave",align:"center",label:"LVE",sortable:!0}];this.attendanceColumns.columns.push(...m)},getNearestDateRange(){if(this.selectedDate!=null)return;const e=new Date;function t(n){return new Date(n)}function a(n){return Math.abs(e-n)}let s=null,i=1/0;for(const n of this.selectedDateOptions){const o=t(n.date_start),d=t(n.date_end),m=a(o),l=a(d),c=Math.min(m,l);c<i&&(i=c,s=n)}this.selectedDate=s},async fetchAttendanceReports(){this.attendanceColumns.columns=[],await this.getSalaryHistory(),this.getNearestDateRange(),this.columns(),this.fetchAttendanceInRange()}}}),G=b("div",{class:"tw-text-xl, tw-font-bold"},"Attendance Report",-1),J=b("div",{class:"tw-w-3"},null,-1),K=b("div",{class:"tw-flex tw-items-center tw-ml-5"},[b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#4ade80]"}),b("div",{class:"tw-ml-2"},"Present")]),b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#f87171]"}),b("div",{class:"tw-ml-2"},"Absent")]),b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#fb923c]"}),b("div",{class:"tw-ml-2"},"Late")]),b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#ec4899]"}),b("div",{class:"tw-ml-2"},"Undertime")]),b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#3b82f6]"}),b("div",{class:"tw-ml-2"},"Leave")]),b("div",{class:"tw-flex tw-items-center tw-mr-3"},[b("div",{class:"tw-rounded-lg tw-w-3 tw-h-6 !tw-bg-[#fef08a]"}),b("div",{class:"tw-ml-2"},"Holiday")])],-1),X={__name:"AttendanceTable",setup(e){const t=z(),a=$("");function s(i){const n=document.getElementById(i);let o="";o+=Array.from(n.querySelectorAll("th")).map(f=>f.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(n.querySelectorAll("tr")).slice(1).forEach(f=>{o+=Array.from(f.querySelectorAll("td")).map(A=>A.innerText).join(",")+`
`});const l=new Date,c={month:"short",day:"2-digit",year:"numeric"},g=l.toLocaleDateString("en-US",c).replace(",","").replace(/\s+/g,"-"),y=new Blob([o],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(y),r=document.createElement("a");r.setAttribute("href",u),r.setAttribute("download",`Attendance-Report-${g}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(u)}return t.fetchAttendanceReports(),(i,n)=>(M(),F(U,{id:"attendance-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report","title-class":["tw-text-xl","tw-font-bold"],filter:a.value,columns:w(t).attendanceColumns.columns,rows:w(t).rows,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-right":h(()=>[p(N,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:n[0]||(n[0]=o=>s("attendance-table")),class:"tw-mr-16"})]),"top-left":h(()=>[G,J,p(P,{rounded:"",standout:"",modelValue:w(t).selectedDate,"onUpdate:modelValue":[n[1]||(n[1]=o=>w(t).selectedDate=o),n[2]||(n[2]=o=>w(t).fetchAttendanceReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:w(t).selectedDateOptions,"option-label":o=>o.date_start+" "+o.date_end,class:"!tw-pb-0"},{"no-option":h(()=>[p(k,null,{default:h(()=>[p(L,{class:"text-grey"},{default:h(()=>[H(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),bottom:h(()=>[K]),_:1},8,["filter","columns","rows"]))}},Z=O("philhealthTable",{state:()=>({rows:[],columns:[{name:"employeeId",required:!0,label:"Emp. Id",field:e=>e.employee.company_employee_id,align:"left",sortable:!0},{name:"employeeName",align:"center",label:"Name",field:e=>e.employee.last_name+" "+e.employee.first_name+" "+e.employee.middle_name,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"philhealthNumber",align:"center",label:"PhilHealth No.",field:e=>e.employee.phil_health_number,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employeeShare",align:"center",label:"Employee Share",field:e=>e.amount,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employerShare",align:"center",label:"Employer Share",field:e=>e.amount,sortable:!0,classes:"!tw-bg-neutral-300"}],selectedDate:null,selectedDateOptions:null,employeeIds:[],philhealthAudit:[],philhealthContributionTableAudit:[]}),getters:{getSelectedDate(){return this.selectedDate},getTotalEmployeeShare(){let e=0;return this.philhealthAudit.forEach(t=>{e+=t.amount}),e}},actions:{capitalizeFirstLetterOfEachWord(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")},formatDate(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`},getEmployeeIds(e){return e.map(t=>t.employee_id)},getAndCheckDateRangesForCurrentMonth(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),s=new Date(t,a,1),i=new Date(t,a,15),n=new Date(t,a,16),o=new Date(t,a+1,0),d={firstHalf:{start:this.formatDate(s),end:this.formatDate(i)},secondHalf:{start:this.formatDate(n),end:this.formatDate(o)}},m=this.formatDate(e),l=new Date(d.firstHalf.start),c=new Date(d.firstHalf.end),g=new Date(d.secondHalf.start),y=new Date(d.secondHalf.end);let u,r;return e>=l&&e<=c?(u=this.formatDate(l),r=this.formatDate(c)):e>=g&&e<=y?(u=this.formatDate(g),r=this.formatDate(y)):(u="out of range",r="out of range"),{todayDate:m,startDate:u,endDate:r}},async getSalaryHistory(){try{const{data:e,error:t}=await _.from("salary_history").select();t&&console.error(t),this.selectedDateOptions=e.sort((a,s)=>new Date(a.date_start)-new Date(s.date_start))}catch(e){console.error(e)}},filterHighestAuditId(e){const t=e.reduce((a,s)=>{const{employee_id:i,audit_id:n}=s;return(!a[i]||a[i].audit_id<n)&&(a[i]=s),a},{});return Object.values(t)},getHighestAuditId(e){return e.length===0?null:e.reduce((a,s)=>s.audit_id>a.audit_id?s:a)},async fetchEmployeeInRange(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("employee_audit").select("*").lte("change_date",e).eq("is_archive",!1);a&&console.error(a),this.rows=this.filterHighestAuditId(t),this.employeeIds=this.getEmployeeIds(this.rows)}catch(t){console.error(t)}},async fetchPhilhealthContribAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("emp_philhealth_contrib_audit").select("*, employee!emp_philhealth_contrib_audit_employee_id_fkey(last_name, first_name, middle_name, company_employee_id, phil_health_number, is_archive)").lte("change_date",e).eq("employee.is_archive",!1).in("employee_id",this.employeeIds);a&&console.error(a),this.philhealthAudit=this.filterHighestAuditId(t.filter(s=>s.employee!==null))}catch(t){console.error(t)}},async fetchPhilhealthContributionTableAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("philhealth_contribution_table_audit").select("*").lte("change_date",e);a&&console.error(a),this.philhealthContributionTableAudit=this.getHighestAuditId(t)}catch(t){console.error(t)}},getNearestDateRange(){if(this.selectedDate!=null)return;const e=new Date;function t(n){return new Date(n)}function a(n){return Math.abs(e-n)}let s=null,i=1/0;for(const n of this.selectedDateOptions){const o=t(n.date_start),d=t(n.date_end),m=a(o),l=a(d),c=Math.min(m,l);c<i&&(i=c,s=n)}this.selectedDate=s},async fetchEmployeeReports(){await this.getSalaryHistory(),await this.getNearestDateRange(),await this.fetchEmployeeInRange(),await this.fetchPhilhealthContribAudit(),await this.fetchPhilhealthContributionTableAudit()}}}),ee=b("div",{class:"tw-text-xl, tw-font-bold"},"PhilHealth Report",-1),te=b("div",{class:"tw-w-3"},null,-1),ae={__name:"PhilhealthTable",setup(e){const t=Z(),a=$("");function s(i){const n=document.getElementById(i);let o="";o+=Array.from(n.querySelectorAll("th")).map(f=>f.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(n.querySelectorAll("tr")).slice(1).forEach(f=>{o+=Array.from(f.querySelectorAll("td")).map(A=>A.innerText).join(",")+`
`});const l=new Date,c={month:"short",day:"2-digit",year:"numeric"},g=l.toLocaleDateString("en-US",c).replace(",","").replace(/\s+/g,"-"),y=new Blob([o],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(y),r=document.createElement("a");r.setAttribute("href",u),r.setAttribute("download",`Philhealth-Report-${g}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(u)}return t.fetchEmployeeReports(),(i,n)=>(M(),F(U,{id:"philhealth-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report","title-class":["tw-text-xl","tw-font-bold"],filter:a.value,columns:w(t).columns,rows:w(t).philhealthAudit,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-right":h(()=>[p(N,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:n[0]||(n[0]=o=>s("philhealth-table")),class:"tw-mr-16"})]),"top-left":h(()=>[ee,te,p(P,{rounded:"",standout:"",modelValue:w(t).selectedDate,"onUpdate:modelValue":[n[1]||(n[1]=o=>w(t).selectedDate=o),n[2]||(n[2]=o=>w(t).fetchEmployeeReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:w(t).selectedDateOptions,"option-label":o=>o.date_start+" "+o.date_end,class:"!tw-pb-0"},{"no-option":h(()=>[p(k,null,{default:h(()=>[p(L,{class:"text-grey"},{default:h(()=>[H(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),"bottom-row":h(()=>[p(V,null,{default:h(()=>[p(v,{colspan:"3"}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total Employee Share: "+x(w(t).getTotalEmployeeShare),1)]),_:1}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total Employer Share: "+x(w(t).getTotalEmployeeShare),1)]),_:1})]),_:1})]),bottom:h(()=>[]),_:1},8,["filter","columns","rows"]))}};function Q(e){var t=e.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];return parseFloat(t)}function ne(e,t=30){return Q(e*t)}function B(e){const t=ne(e);let a,s;return t<=1500?(a=.01,s=Math.min(t,1e4)*a):(a=.02,s=Math.min(t,1e4)*a),Q(s)}const se=O("pagibigTable",{state:()=>({rows:[],columns:[{name:"employeeId",required:!0,label:"Emp. Id",field:e=>e.employee.company_employee_id,align:"left",sortable:!0},{name:"employeeName",align:"center",label:"Name",field:e=>e.employee.last_name+" "+e.employee.first_name+" "+e.employee.middle_name,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"pagibigNumber",align:"center",label:"Pagibig No.",field:e=>e.employee.pag_ibig_number,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employeeShare",align:"center",label:"Employee Share",field:e=>e.amount,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employerShare",align:"center",label:"Employer Share",field:e=>B(e.employee.rate_per_day),sortable:!0,classes:"!tw-bg-neutral-300"}],selectedDate:null,selectedDateOptions:null,employeeIds:[],pagibigAudit:[],pagibigContributionTableAudit:[]}),getters:{getSelectedDate(){return this.selectedDate},getTotalEmployerShare(){let e=0;return this.pagibigAudit.forEach(t=>{e+=B(t.amount)}),e},getTotalEmployeeShare(){let e=0;return this.pagibigAudit.forEach(t=>{e+=t.amount}),e}},actions:{capitalizeFirstLetterOfEachWord(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")},formatDate(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`},getEmployeeIds(e){return e.map(t=>t.employee_id)},getAndCheckDateRangesForCurrentMonth(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),s=new Date(t,a,1),i=new Date(t,a,15),n=new Date(t,a,16),o=new Date(t,a+1,0),d={firstHalf:{start:this.formatDate(s),end:this.formatDate(i)},secondHalf:{start:this.formatDate(n),end:this.formatDate(o)}},m=this.formatDate(e),l=new Date(d.firstHalf.start),c=new Date(d.firstHalf.end),g=new Date(d.secondHalf.start),y=new Date(d.secondHalf.end);let u,r;return e>=l&&e<=c?(u=this.formatDate(l),r=this.formatDate(c)):e>=g&&e<=y?(u=this.formatDate(g),r=this.formatDate(y)):(u="out of range",r="out of range"),{todayDate:m,startDate:u,endDate:r}},async getSalaryHistory(){try{const{data:e,error:t}=await _.from("salary_history").select();t&&console.error(t),this.selectedDateOptions=e.sort((a,s)=>new Date(a.date_start)-new Date(s.date_start))}catch(e){console.error(e)}},filterHighestAuditId(e){const t=e.reduce((a,s)=>{const{employee_id:i,audit_id:n}=s;return(!a[i]||a[i].audit_id<n)&&(a[i]=s),a},{});return Object.values(t)},getHighestAuditId(e){return e.length===0?null:e.reduce((a,s)=>s.audit_id>a.audit_id?s:a)},async fetchEmployeeInRange(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("employee_audit").select("*").lte("change_date",e).eq("is_archive",!1);a&&console.error(a),this.rows=this.filterHighestAuditId(t),this.employeeIds=this.getEmployeeIds(this.rows)}catch(t){console.error(t)}},async fetchPagibigContribAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("emp_pagibig_contrib_audit").select("*, employee!emp_pagibig_contrib_audit_employee_id_fkey(last_name, first_name, middle_name, company_employee_id, pag_ibig_number, rate_per_day, is_archive)").lte("change_date",e).eq("employee.is_archive",!1).in("employee_id",this.employeeIds);a&&console.error(a),this.pagibigAudit=this.filterHighestAuditId(t.filter(s=>s.employee!==null)),console.log(t)}catch(t){console.error(t)}},async fetchPagibigContributionTableAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("pagibig_contribution_table_audit").select("*").lte("change_date",e);a&&console.error(a),this.pagibigContributionTableAudit=this.getHighestAuditId(t)}catch(t){console.error(t)}},getNearestDateRange(){if(this.selectedDate!=null)return;const e=new Date;function t(n){return new Date(n)}function a(n){return Math.abs(e-n)}let s=null,i=1/0;for(const n of this.selectedDateOptions){const o=t(n.date_start),d=t(n.date_end),m=a(o),l=a(d),c=Math.min(m,l);c<i&&(i=c,s=n)}this.selectedDate=s},async fetchEmployeeReports(){await this.getSalaryHistory(),await this.getNearestDateRange(),await this.fetchEmployeeInRange(),await this.fetchPagibigContribAudit(),await this.fetchPagibigContributionTableAudit()}}}),oe=b("div",{class:"tw-text-xl, tw-font-bold"},"Pag-IBIG Report",-1),re=b("div",{class:"tw-w-3"},null,-1),le={__name:"PagibigTable",setup(e){const t=se(),a=$("");function s(i){const n=document.getElementById(i);let o="";o+=Array.from(n.querySelectorAll("th")).map(f=>f.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(n.querySelectorAll("tr")).slice(1).forEach(f=>{o+=Array.from(f.querySelectorAll("td")).map(A=>A.innerText).join(",")+`
`});const l=new Date,c={month:"short",day:"2-digit",year:"numeric"},g=l.toLocaleDateString("en-US",c).replace(",","").replace(/\s+/g,"-"),y=new Blob([o],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(y),r=document.createElement("a");r.setAttribute("href",u),r.setAttribute("download",`Pag-IBIG-Report-${g}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(u)}return t.fetchEmployeeReports(),(i,n)=>(M(),F(U,{id:"pagibig-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report","title-class":["tw-text-xl","tw-font-bold"],filter:a.value,columns:w(t).columns,rows:w(t).pagibigAudit,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-right":h(()=>[p(N,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:n[0]||(n[0]=o=>s("pagibig-table")),class:"tw-mr-16"})]),"top-left":h(()=>[oe,re,p(P,{rounded:"",standout:"",modelValue:w(t).selectedDate,"onUpdate:modelValue":[n[1]||(n[1]=o=>w(t).selectedDate=o),n[2]||(n[2]=o=>w(t).fetchEmployeeReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:w(t).selectedDateOptions,"option-label":o=>o.date_start+" "+o.date_end,class:"!tw-pb-0"},{"no-option":h(()=>[p(k,null,{default:h(()=>[p(L,{class:"text-grey"},{default:h(()=>[H(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),"bottom-row":h(()=>[p(V,null,{default:h(()=>[p(v,{colspan:"3"}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total Employee Share: "+x(w(t).getTotalEmployeeShare),1)]),_:1}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total Employer Share: "+x(w(t).getTotalEmployerShare),1)]),_:1})]),_:1})]),bottom:h(()=>[]),_:1},8,["filter","columns","rows"]))}},ie=O("sssTable",{state:()=>({rows:[],columns:[],selectedDate:null,selectedDateOptions:null,employeeIds:[],sssAudit:[],sssContributionTableAudit:[]}),getters:{getSelectedDate(){return this.selectedDate},getTotalEmployeeShare(){let e=0;return this.sssAudit.forEach(t=>{e+=t.amount}),e},getTotalEmployerShare(){let e=0;return this.sssAudit.forEach(t=>{e+=this.getEmployerShare(t.amount)}),e},getTotalECEmployerShare(){let e=0;return this.sssAudit.forEach(t=>{e+=this.getECER(t.amount)}),e}},actions:{setColumns(){this.columns=[{name:"employeeId",required:!0,label:"Emp. Id",field:e=>e.employee.company_employee_id,align:"left",sortable:!0},{name:"employeeName",align:"center",label:"Name",field:e=>e.employee.last_name+" "+e.employee.first_name+" "+e.employee.middle_name,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"sssNumber",align:"center",label:"SSS No.",field:e=>e.employee.sss_number,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employeeShare",align:"center",label:"Employee Share",field:e=>e.amount,sortable:!0,classes:"!tw-bg-neutral-300"},{name:"employerShare",align:"center",label:"Employer Share",field:e=>this.getEmployerShare(e.amount),sortable:!0,classes:"!tw-bg-neutral-300"},{name:"ecEmployerShare",align:"center",label:"EC Employer Share",field:e=>this.getECER(e.amount),sortable:!0,classes:"!tw-bg-neutral-300"}]},getEmployerShare(e){console.log(e,this.sssContributionTableAudit);for(const t of this.sssContributionTableAudit)if(e==t.ee_share)return t.er_share;return"Value is out of range"},getECER(e){for(const t of this.sssContributionTableAudit)if(e==t.ee_share)return t.ec_er_share;return"Value is out of range"},capitalizeFirstLetterOfEachWord(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")},formatDate(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`},getEmployeeIds(e){return e.map(t=>t.employee_id)},getAndCheckDateRangesForCurrentMonth(){const e=new Date,t=e.getFullYear(),a=e.getMonth(),s=new Date(t,a,1),i=new Date(t,a,15),n=new Date(t,a,16),o=new Date(t,a+1,0),d={firstHalf:{start:this.formatDate(s),end:this.formatDate(i)},secondHalf:{start:this.formatDate(n),end:this.formatDate(o)}},m=this.formatDate(e),l=new Date(d.firstHalf.start),c=new Date(d.firstHalf.end),g=new Date(d.secondHalf.start),y=new Date(d.secondHalf.end);let u,r;return e>=l&&e<=c?(u=this.formatDate(l),r=this.formatDate(c)):e>=g&&e<=y?(u=this.formatDate(g),r=this.formatDate(y)):(u="out of range",r="out of range"),{todayDate:m,startDate:u,endDate:r}},async getSalaryHistory(){try{const{data:e,error:t}=await _.from("salary_history").select();t&&console.error(t),this.selectedDateOptions=e.sort((a,s)=>new Date(a.date_start)-new Date(s.date_start))}catch(e){console.error(e)}},filterHighestAuditId(e){const t=e.reduce((a,s)=>{const{employee_id:i,audit_id:n}=s;return(!a[i]||a[i].audit_id<n)&&(a[i]=s),a},{});return Object.values(t)},getHighestAuditId(e){return e.length===0?null:e.reduce((a,s)=>s.audit_id>a.audit_id?s:a)},async fetchEmployeeInRange(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("employee_audit").select("*").lte("change_date",e).eq("is_archive",!1);a&&console.error(a),this.rows=this.filterHighestAuditId(t),this.employeeIds=this.getEmployeeIds(this.rows)}catch(t){console.error(t)}},async fetchSssContribAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("emp_sss_contrib_audit").select("*, employee!emp_sss_contrib_audit_employee_id_fkey(last_name, first_name, middle_name, company_employee_id, sss_number, is_archive)").lte("change_date",e).eq("employee.is_archive",!1).in("employee_id",this.employeeIds);a&&console.error(a),this.sssAudit=this.filterHighestAuditId(t.filter(s=>s.employee!==null))}catch(t){console.error(t)}},async fetchSssContributionTableAudit(e=this.selectedDate.date_end){try{const{data:t,error:a}=await _.from("sss_contribution_table_audit").select("*").lte("change_date",e);a&&console.error(a),this.sssContributionTableAudit=this.getHighestAuditId(t),this.sssContributionTableAudit=this.sssContributionTableAudit.data.map(s=>{const i=s.combinedValue;let n,o,d,m,l;if(d=parseFloat(s.values[4].replace(",","")),m=parseFloat(s.values[3].replace(",","")),l=parseFloat(s.values[6].replace(",","")),i.startsWith("Below"))n=0,o=parseFloat(i.split(" ")[1].replace(",",""));else if(i.includes("Over"))n=parseFloat(i.split(" ")[0].replace(",","")),o=null;else{const[c,g]=i.split(" - ");n=parseFloat(c.replace(",","")),o=parseFloat(g.replace(",",""))}return{min:n,max:o,ee_share:d,er_share:m,ec_er_share:l}}),this.setColumns()}catch(t){console.error(t)}},getNearestDateRange(){if(this.selectedDate!=null)return;const e=new Date;function t(n){return new Date(n)}function a(n){return Math.abs(e-n)}let s=null,i=1/0;for(const n of this.selectedDateOptions){const o=t(n.date_start),d=t(n.date_end),m=a(o),l=a(d),c=Math.min(m,l);c<i&&(i=c,s=n)}this.selectedDate=s},async fetchEmployeeReports(){await this.getSalaryHistory(),await this.getNearestDateRange(),await this.fetchSssContributionTableAudit(),await this.fetchEmployeeInRange(),await this.fetchSssContribAudit()}}}),ce=b("div",{class:"tw-text-xl, tw-font-bold"},"SSS Report",-1),de=b("div",{class:"tw-w-3"},null,-1),ue={__name:"SssTable",setup(e){const t=ie(),a=$("");function s(i){const n=document.getElementById(i);let o="";o+=Array.from(n.querySelectorAll("th")).map(f=>f.innerText.replace(/arrow_upward/g,"")).join(",")+`
`,Array.from(n.querySelectorAll("tr")).slice(1).forEach(f=>{o+=Array.from(f.querySelectorAll("td")).map(A=>A.innerText).join(",")+`
`});const l=new Date,c={month:"short",day:"2-digit",year:"numeric"},g=l.toLocaleDateString("en-US",c).replace(",","").replace(/\s+/g,"-"),y=new Blob([o],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(y),r=document.createElement("a");r.setAttribute("href",u),r.setAttribute("download",`SSS-Report-${g}.csv`),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(u)}return t.fetchEmployeeReports(),(i,n)=>(M(),F(U,{id:"sss-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"",title:"Attendance Report",filter:a.value,columns:w(t).columns,rows:w(t).sssAudit,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-right":h(()=>[p(N,{color:"blue","icon-right":"archive",label:"Export to CSV","no-caps":"",onClick:n[0]||(n[0]=o=>s("sss-table")),class:"tw-mr-16"})]),"top-left":h(()=>[ce,de,p(P,{rounded:"",standout:"",modelValue:w(t).selectedDate,"onUpdate:modelValue":[n[1]||(n[1]=o=>w(t).selectedDate=o),n[2]||(n[2]=o=>w(t).fetchEmployeeReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:w(t).selectedDateOptions,"option-label":o=>o.date_start+" "+o.date_end,class:"!tw-pb-0"},{"no-option":h(()=>[p(k,null,{default:h(()=>[p(L,{class:"text-grey"},{default:h(()=>[H(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),"bottom-row":h(()=>[p(V,null,{default:h(()=>[p(v),p(v),p(v),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total EE Share: "+x(w(t).getTotalEmployeeShare),1)]),_:1}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total ER Share: "+x(w(t).getTotalEmployerShare),1)]),_:1}),p(v,{class:"tw-text-center"},{default:h(()=>[H(" Total EC ER Share: "+x(w(t).getTotalECEmployerShare),1)]),_:1})]),_:1})]),bottom:h(()=>[]),_:1},8,["filter","columns","rows"]))}},he={class:"tw-w-12/12 tw-max-w-full tw-mx-auto tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse tw-p-4 tw-mt-0"},me=b("br",null,null,-1),fe=b("br",null,null,-1),pe=b("br",null,null,-1),ge=b("br",null,null,-1),ve={__name:"AdminReportsPage",setup(e){const t=W();return t.currentPage="Reports",(a,s)=>(M(),Y("div",he,[b("div",null,[p(X),me,p(ae),fe,p(le),pe,p(ue),ge])]))}};export{ve as default};
