import{w as N,t as T}from"./position-engine.224580a6.js";import{b as x}from"./QSelect.b29667b8.js";import{Q as I}from"./QTable.b7213eba.js";import{u as R}from"./pageHeader.b29c2f83.js";import{u as C,ar as P,as as O,o as E,c as k,d as S,w as F,e as M,f as V,a as L}from"./index.504ec86a.js";import"./focus-manager.bec94b0c.js";import"./use-key-composition.c8c0c6cd.js";import"./QList.6e762c59.js";const Q=C(),U=P("attendance",{state:()=>({rows:[{attendance:[]}],selectedDate:null,selectedDateOptions:null,attendanceColumns:{columns:[]},currentUser:Q.getEmployeeId}),getters:{getSelectedDate(){return this.selectedDate},getRows(){return this.rows[0].attendance}},actions:{capitalizeFirstLetterOfEachWord(n){return n.split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" ")},formatDate(n){const r=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0");return`${r}-${s}-${c}`},getAndCheckDateRangesForCurrentMonth(){const n=new Date,r=n.getFullYear(),s=n.getMonth(),c=new Date(r,s,1),g=new Date(r,s,15),m=new Date(r,s,16),t=new Date(r,s+1,0),o={firstHalf:{start:this.formatDate(c),end:this.formatDate(g)},secondHalf:{start:this.formatDate(m),end:this.formatDate(t)}},a=this.formatDate(n),e=new Date(o.firstHalf.start),l=new Date(o.firstHalf.end),d=new Date(o.secondHalf.start),f=new Date(o.secondHalf.end);let D,i;return n>=e&&n<=l?(D=this.formatDate(e),i=this.formatDate(l)):n>=d&&n<=f?(D=this.formatDate(d),i=this.formatDate(f)):(D="out of range",i="out of range"),{todayDate:a,startDate:D,endDate:i}},async getSalaryHistory(){try{const{data:n,error:r}=await O.from("salary_history").select();r&&console.error(r),this.selectedDateOptions=n.sort((s,c)=>new Date(s.date_start)-new Date(c.date_start))}catch(n){console.error(n)}},fillMissingDates(n,r,s){const c=t=>{const o=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");return`${o}-${a}-${e}`},g=new Date(r),m=new Date(s);return n.forEach(t=>{const o=new Set(t.attendance.map(a=>a.date));for(let a=new Date(g);a<=m;a.setDate(a.getDate()+1)){const e=c(a);o.has(e)||t.attendance.push({id:null,date:e,remarks:null,time_in:null,time_out:null,employee_id:t.id,adjustment_salary_id:null})}t.attendance.sort((a,e)=>new Date(a.date)-new Date(e.date))}),n},async fetchAttendanceInRange(n=this.selectedDate.date_start,r=this.selectedDate.date_end){try{const{data:s,error:c}=await O.from("employee").select(`*,
             is_archive,
              attendance(*, attendance_type(*))`).gte("attendance.date",n).lte("attendance.date",r).eq("is_archive",!1).eq("id",this.currentUser);c&&console.error(c),this.rows=Object.values(this.fillMissingDates(s,n,r))}catch(s){console.error(s)}},columns(n=this.selectedDate.date_start,r=this.selectedDate.date_end){const s=new Date(n),c=new Date(r),g=[],m={day:"numeric",month:"numeric"},t=["S","M","T","W","TH","F","S"];let o=0;for(let e=new Date(s);e<=c;e.setDate(e.getDate()+1)){const l=e.getDate(),d=new Intl.DateTimeFormat("en-US",m).format(e),f=e.getDay(),D=`${d} ${t[f]}`;g.push((()=>{const i=o;return{name:`${l+"TESTING"}`,align:"center",label:`${D}`,sortable:!0,field:u=>{const b=new Date;if(new Date(u.attendance[i].date)>=b)return"N/A";var h;if(u.attendance[i].time_out===null&&u.attendance[i].time_in!==null)h="No Time Out";else if(u.attendance[i].attendance_type_id!==1&&u.attendance[i].attendance_type_id!==void 0)h=this.capitalizeFirstLetterOfEachWord(u.attendance[i].attendance_type.attendance_type_name);else{const _=new Date(u.attendance[i].time_in),p=new Date(u.attendance[i].time_out),w=new Date(_);w.setHours(8,0,0,0),_<w&&_.setHours(8,0,0,0);const y=new Date(p);y.setHours(17,0,0,0),p>y&&p.setHours(17,0,0,0),h=((p-_)/(1e3*60*60)).toFixed(2);const H=new Date(p);H.setHours(13,0,0,0),p>H&&(h=(parseFloat(h)-1).toFixed(2))}return h},classes:u=>{const b=new Date;if(new Date(u.attendance[i].date)>=b)return"N/A";var h,_;if(u.attendance[i].time_out===null&&u.attendance[i].time_in!==null)h="No Time Out",_="!tw-bg-[#e11d48]";else if(u.attendance[i].attendance_type_id!==1&&u.attendance[i].attendance_type_id!==void 0)_="!tw-bg-[#3b82f6]";else{const p=new Date(u.attendance[i].time_in),w=new Date(u.attendance[i].time_out),y=new Date(p);y.setHours(8,0,0,0),p<y&&p.setHours(8,0,0,0);const H=new Date(w);H.setHours(17,0,0,0),w>H&&w.setHours(17,0,0,0),h=((w-p)/(1e3*60*60)).toFixed(2);const $=new Date(w);$.setHours(13,0,0,0),w>$&&(h=(parseFloat(h)-1).toFixed(2));const v=new Date(p);v.setHours(8,10,0,0),parseFloat(h)>=8?_="!tw-bg-[#4ade80]":parseFloat(h)==0?_="!tw-bg-[#f87171]":p>v&&(_="!tw-bg-[#fb923c]",parseFloat(h)<5&&(_="!tw-bg-[#ec4899]"))}return _+" !tw-w-[50px] !tw-h-[50px] tw-rounded-lg"}}})()),o++}const a=[{name:"employeeName",align:"center",label:"Name",sortable:!0,field:e=>e.company_employee_id+" - "+e.last_name+", "+e.first_name,format:e=>`${e}`},...g,{name:"totalHours",align:"center",label:"Total Hours",sortable:!0,field:e=>{let l=0;return e.attendance.forEach(d=>{if(d.time_out===null&&d.time_in!==null)l+=0;else if(d.attendance_type_id!==1&&d.attendance_type_id!==void 0)l+=8;else if(d.time_in&&d.time_out){const f=new Date(d.time_in),D=new Date(d.time_out),i=new Date(f);i.setHours(8,0,0,0),f<i&&f.setHours(8,0,0,0);const u=new Date(D);u.setHours(17,0,0,0),D>u&&D.setHours(17,0,0,0);let b=(D-f)/(1e3*60*60);const A=new Date(D);A.setHours(13,0,0,0),D>A&&(b-=1),l+=b}}),l.toFixed(2)}},{name:"totalAbsent",align:"center",label:"A",sortable:!0,field:e=>{let l=0;const d=new Date;for(let f=0;f<e.length;f++)new Date(e[f].date)<=d&&(!e[f].time_in||!e[f].time_out)&&l++;return l}},{name:"totalLeave",align:"center",label:"LVE",sortable:!0}];this.attendanceColumns.columns.push(...a)},getNearestDateRange(){if(this.selectedDate!=null)return;const n=new Date;function r(m){return new Date(m)}function s(m){return Math.abs(n-m)}let c=null,g=1/0;for(const m of this.selectedDateOptions){const t=r(m.date_start),o=r(m.date_end),a=s(t),e=s(o),l=Math.min(a,e);l<g&&(g=l,c=m)}this.selectedDate=c},async fetchAttendanceReports(){this.attendanceColumns.columns=[],await this.getSalaryHistory(),this.getNearestDateRange(),this.columns(),this.fetchAttendanceInRange()}}}),W=L("div",{class:"tw-w-3"},null,-1),X={__name:"AttendancePage",setup(n){const r=R();r.currentPage="Attendance";const s=U();function c(t){const o=new Date(t);if(isNaN(o.getTime()))return"Invalid date";const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()],l=o.getDate(),d=o.getFullYear();return`${e} ${l}, ${d}`}function g(t){const o=new Date(t);let a=o.getHours();const e=o.getMinutes(),l=a>=12?"PM":"AM";a=a%12,a=a||12;const d=e<10?"0"+e:e;return`${a}:${d} ${l}`}const m=[{name:"day",required:!0,label:"Day",align:"center  ",field:t=>c(t.date),format:t=>`${t}`,sortable:!0},{name:"Time-In",align:"center",label:"Time-In",field:t=>t.attendance_type&&t.attendance_type.id===2?"Leave":t.time_in===null?"Absent":g(t.time_in),format:t=>`${t}`,sortable:!0},{name:"Time-Out",align:"center",label:"Time-Out",field:t=>t.attendance_type&&t.attendance_type.id===2?"Leave":t.time_out===null?"Absent":g(t.time_out),format:t=>`${t}`,sortable:!0},{name:"Remarks",align:"center",label:"Remarks",field:t=>t.remarks?t.remarks:"N/A",format:t=>`${t}`,sortable:!0}];return s.fetchAttendanceReports(),(t,o)=>(E(),k("div",null,[S(I,{id:"attendance-table",class:"tw-border tw-rounded-3xl tw-shadow-lg",flat:"",bordered:"",dense:"","title-class":["tw-text-xl","tw-font-bold"],filter:t.tableSearch,columns:m,rows:M(s).rows[0].attendance,"rows-per-page-options":[0],separator:"cell","row-key":"name"},{"top-left":F(()=>[W,S(x,{rounded:"",standout:"",modelValue:M(s).selectedDate,"onUpdate:modelValue":[o[0]||(o[0]=a=>M(s).selectedDate=a),o[1]||(o[1]=a=>M(s).fetchAttendanceReports())],"use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-debounce":"0",options:M(s).selectedDateOptions,"option-label":a=>c(a.date_start)+" - "+c(a.date_end),class:"!tw-pb-0"},{"no-option":F(()=>[S(N,null,{default:F(()=>[S(T,{class:"text-grey"},{default:F(()=>[V(" No results ")]),_:1})]),_:1})]),_:1},8,["modelValue","options","option-label"])]),_:1},8,["filter","rows"])]))}};export{X as default};
