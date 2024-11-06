import{w as T,t as $}from"./position-engine.573b6235.js";import{b as I}from"./QSelect.9e704e12.js";import{Q as N}from"./QTable.0d774183.js";import{u as R}from"./pageHeader.10d9d4fd.js";import{u as C,ar as E,as as x,o as P,c as k,d as A,w as F,e as S,f as V,a as L}from"./index.fa342762.js";import"./focus-manager.09b3f23b.js";import"./use-key-composition.ddbcd19f.js";import"./QList.21e76d84.js";const Q=C(),U=E("attendance",{state:()=>({rows:[{attendance:[]}],selectedDate:null,selectedDateOptions:null,attendanceColumns:{columns:[]},currentUser:Q.getEmployeeId}),getters:{getSelectedDate(){return this.selectedDate},getRows(){return this.rows[0].attendance}},actions:{capitalizeFirstLetterOfEachWord(a){return a.split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")},formatDate(a){const s=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0");return`${s}-${n}-${l}`},getAndCheckDateRangesForCurrentMonth(){const a=new Date,s=a.getFullYear(),n=a.getMonth(),l=new Date(s,n,1),t=new Date(s,n,15),c=new Date(s,n,16),r=new Date(s,n+1,0),p={firstHalf:{start:this.formatDate(l),end:this.formatDate(t)},secondHalf:{start:this.formatDate(c),end:this.formatDate(r)}},d=this.formatDate(a),e=new Date(p.firstHalf.start),u=new Date(p.firstHalf.end),f=new Date(p.secondHalf.start),m=new Date(p.secondHalf.end);let D,o;return a>=e&&a<=u?(D=this.formatDate(e),o=this.formatDate(u)):a>=f&&a<=m?(D=this.formatDate(f),o=this.formatDate(m)):(D="out of range",o="out of range"),{todayDate:d,startDate:D,endDate:o}},async getSalaryHistory(){try{const{data:a,error:s}=await x.from("salary_history").select();s&&console.error(s),this.selectedDateOptions=a.sort((n,l)=>new Date(n.date_start)-new Date(l.date_start))}catch(a){console.error(a)}},fillMissingDates(a,s,n){const l=r=>{const p=r.getFullYear(),d=String(r.getMonth()+1).padStart(2,"0"),e=String(r.getDate()).padStart(2,"0");return`${p}-${d}-${e}`},t=new Date(s),c=new Date(n);return a.forEach(r=>{const p=new Set(r.attendance.map(d=>d.date));for(let d=new Date(t);d<=c;d.setDate(d.getDate()+1)){const e=l(d);p.has(e)||r.attendance.push({id:null,date:e,remarks:null,time_in:null,time_out:null,employee_id:r.id,adjustment_salary_id:null})}r.attendance.sort((d,e)=>new Date(d.date)-new Date(e.date))}),a},async fetchAttendanceInRange(a=this.selectedDate.date_start,s=this.selectedDate.date_end){try{const{data:n,error:l}=await x.from("employee").select(`*,
             is_archive,
              attendance(*, attendance_type(*))`).gte("attendance.date",a).lte("attendance.date",s).eq("is_archive",!1).eq("id",this.currentUser);l&&console.error(l),this.rows=Object.values(this.fillMissingDates(n,a,s))}catch(n){console.error(n)}},columns(a=this.selectedDate.date_start,s=this.selectedDate.date_end){const n=new Date(a),l=new Date(s),t=[],c={day:"numeric",month:"numeric"},r=["S","M","T","W","TH","F","S"];let p=0;for(let e=new Date(n);e<=l;e.setDate(e.getDate()+1)){const u=e.getDate(),f=new Intl.DateTimeFormat("en-US",c).format(e),m=e.getDay(),D=`${f} ${r[m]}`;t.push((()=>{const o=p;return{name:`${u+"TESTING"}`,align:"center",label:`${D}`,sortable:!0,field:i=>{const b=new Date;if(new Date(i.attendance[o].date)>=b)return"N/A";var h;if(i.attendance[o].time_out===null&&i.attendance[o].time_in!==null)h="No Time Out";else if(i.attendance[o].attendance_type_id!==1&&i.attendance[o].attendance_type_id!==void 0)h=this.capitalizeFirstLetterOfEachWord(i.attendance[o].attendance_type.attendance_type_name);else{const g=new Date(i.attendance[o].time_in),_=new Date(i.attendance[o].time_out),w=new Date(g);w.setHours(8,0,0,0),g<w&&g.setHours(8,0,0,0);const y=new Date(_);y.setHours(17,0,0,0),_>y&&_.setHours(17,0,0,0),h=((_-g)/(1e3*60*60)).toFixed(2);const H=new Date(_);H.setHours(13,0,0,0),_>H&&(h=(parseFloat(h)-1).toFixed(2))}return h},classes:i=>{const b=new Date;if(new Date(i.attendance[o].date)>=b)return"N/A";var h,g;if(i.attendance[o].time_out===null&&i.attendance[o].time_in!==null)h="No Time Out",g="!tw-bg-[#e11d48]";else if(i.attendance[o].attendance_type_id!==1&&i.attendance[o].attendance_type_id!==void 0)g="!tw-bg-[#3b82f6]";else{const _=new Date(i.attendance[o].time_in),w=new Date(i.attendance[o].time_out),y=new Date(_);y.setHours(8,0,0,0),_<y&&_.setHours(8,0,0,0);const H=new Date(w);H.setHours(17,0,0,0),w>H&&w.setHours(17,0,0,0),h=((w-_)/(1e3*60*60)).toFixed(2);const O=new Date(w);O.setHours(13,0,0,0),w>O&&(h=(parseFloat(h)-1).toFixed(2));const v=new Date(_);v.setHours(8,10,0,0),parseFloat(h)>=8?g="!tw-bg-[#4ade80]":parseFloat(h)==0?g="!tw-bg-[#f87171]":_>v&&(g="!tw-bg-[#fb923c]",parseFloat(h)<5&&(g="!tw-bg-[#ec4899]"))}return g+" !tw-w-[50px] !tw-h-[50px] tw-rounded-lg"}}})()),p++}const d=[{name:"employeeName",align:"center",label:"Name",sortable:!0,field:e=>e.company_employee_id+" - "+e.last_name+", "+e.first_name,format:e=>`${e}`},...t,{name:"totalHours",align:"center",label:"Total Hours",sortable:!0,field:e=>{let u=0;return e.attendance.forEach(f=>{if(f.time_out===null&&f.time_in!==null)u+=0;else if(f.attendance_type_id!==1&&f.attendance_type_id!==void 0)u+=8;else if(f.time_in&&f.time_out){const m=new Date(f.time_in),D=new Date(f.time_out),o=new Date(m);o.setHours(8,0,0,0),m<o&&m.setHours(8,0,0,0);const i=new Date(D);i.setHours(17,0,0,0),D>i&&D.setHours(17,0,0,0);let b=(D-m)/(1e3*60*60);const M=new Date(D);M.setHours(13,0,0,0),D>M&&(b-=1),u+=b}}),u.toFixed(2)}},{name:"totalAbsent",align:"center",label:"A",sortable:!0,field:e=>{let u=0;const f=new Date;for(let m=0;m<e.length;m++)new Date(e[m].date)<=f&&(!e[m].time_in||!e[m].time_out)&&u++;return u}},{name:"totalLeave",align:"center",label:"LVE",sortable:!0}];this.attendanceColumns.columns.push(...d)},getNearestDateRange(){if(this.selectedDate!=null)return;const a=new Date;function s(c){return new Date(c)}function n(c){return Math.abs(a-c)}let l=null,t=1/0;for(const c of this.selectedDateOptions){const r=s(c.date_start),p=s(c.date_end),d=n(r),e=n(p),u=Math.min(d,e);u<t&&(t=u,l=c)}this.selectedDate=l},async fetchAttendanceReports(){this.attendanceColumns.columns=[],await this.getSalaryHistory(),this.getNearestDateRange(),this.columns(),this.fetchAttendanceInRange()}}}),W=L("div",{class:"tw-w-3"},null,-1),X={__name:"AttendancePage",setup(a){const s=R();s.currentPage="Attendance";const n=U(),l=[{name:"day",required:!0,label:"Day",align:"center  ",field:t=>t.date,format:t=>`${t}`,sortable:!0},{name:"Time-In",align:"center",label:"Time-In",field:t=>t.attendance_type&&t.attendance_type.id===2?"Leave":t.time_in,format:t=>`${t}`,sortable:!0},{name:"Time-Out",align:"center",label:"Time-Out",field:t=>t.attendance_type&&t.attendance_type.id===2?"Leave":t.time_out,format:t=>`${t}`,sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:t=>t.remarks,format:t=>`${t}`,sortable:!0}];return n.fetchAttendanceReports(),(t,c)=>(P(),k("div",null,[A(N,{id:"attendance-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:t.tableSearch,columns:l,rows:S(n).rows[0].attendance,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-left":F(()=>[W,A(I,{rounded:"",standout:"",modelValue:S(n).selectedDate,"onUpdate:modelValue":[c[0]||(c[0]=r=>S(n).selectedDate=r),c[1]||(c[1]=r=>S(n).fetchAttendanceReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:S(n).selectedDateOptions,"option-label":r=>r.date_start+" "+r.date_end,class:"!tw-pb-0"},{"no-option":F(()=>[A(T,null,{default:F(()=>[A($,{class:"text-grey"},{default:F(()=>[V(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),_:1},8,["filter","rows"])]))}};export{X as default};
