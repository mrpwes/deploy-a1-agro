import{u as _}from"./pageHeader.6353e771.js";import{u,at as f,au as m,a5 as h,m as w,e as s,o as n,c as r,a as e,f as a,a8 as o,g as c,aR as b,aS as g}from"./index.699df2e5.js";const D=u(),y=f("profile",{state:()=>({currentUser:D.getEmployeeId,profileDetails:null,profilePicture:null}),getters:{},actions:{async getProfileDetails(){this.getCurrentProfilePicture();const{data:i,error:d}=await m.from("employee").select("*, address(*)").eq("id",this.currentUser).single();d?console.error(d):this.profileDetails=i},async getCurrentProfilePicture(){this.profilePicture="https://tkdqxpxpavnjhiitssss.supabase.co/storage/v1/object/public/employee_avatar/"+this.currentUser+".jpg"}}});const l=i=>(b("data-v-c1101170"),i=i(),g(),i),P={key:0},x={key:1},v={class:"tw-w-7/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-table-auto tw-rounded-3xl"},I={colspan:"4",class:"tw-text-center tw-border-none"},k=["src"],S={key:1,src:"https://tkdqxpxpavnjhiitssss.supabase.co/storage/v1/object/sign/utils_image/no_image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1dGlsc19pbWFnZS9ub19pbWFnZS5wbmciLCJpYXQiOjE3MzAwNzk4NjEsImV4cCI6MTc2MTYxNTg2MX0.2LR8y91sky7CUlfsX7jOxzs8pbqnrqsHW_tBkuJW0qE&t=2024-10-28T01%3A44%3A21.871Z",alt:"Default profile picture",class:"tw-mx-auto tw-my-3 tw-rounded-full tw-size-48"},N=l(()=>e("span",{class:"tw-font-semibold"},"Employee ID:",-1)),C=l(()=>e("span",{class:"tw-font-semibold"},"Hired Date:",-1)),E=l(()=>e("span",{class:"tw-font-semibold"},"Position:",-1)),j=l(()=>e("span",{class:"tw-font-semibold"},"Birthday:",-1)),O=l(()=>e("span",{class:"tw-font-semibold"},"Gender:",-1)),T=l(()=>e("span",{class:"tw-font-semibold"},"Martial Status:",-1)),B=l(()=>e("td",{colspan:"2"},[e("span",{class:"tw-font-semibold"},"Contact Number:"),a(" 09275227444 TODO: ")],-1)),J={class:""},M={colspan:"4",class:"tw-border-none"},q=l(()=>e("span",{class:"tw-font-semibold"},"Address:",-1)),z={key:0},A={key:1},L={class:"tw-text-gray-700"},R={class:"tw-w-7/12 tw-mx-auto tw-bg-white tw-shadow-lg tw-table-auto tw-rounded-3xl"},H=l(()=>e("tr",null,[e("td",{colspan:"4",class:"tw-font-extrabold tw-text-center tw-border-none"}," Payroll Information ")],-1)),U=l(()=>e("span",{class:"tw-font-semibold"},"PhilHealth Number:",-1)),V=l(()=>e("span",{class:"tw-font-semibold"},"Pag-IBIG Number:",-1)),G=l(()=>e("span",{class:"tw-font-semibold"},"SSS Number:",-1)),W={class:"tw-border-none"},X=l(()=>e("span",{class:"tw-font-semibold"},"BIR Tin:",-1)),F={colspan:"2",class:"tw-border-none"},Z=l(()=>e("span",{class:"tw-font-semibold"},"Rate per day:",-1)),Y={__name:"EmployeeProfilePage",setup(i){const d=_();d.currentPage="Profile";const t=y();return w(()=>{t.getProfileDetails()}),(p,Q)=>s(t).profileDetails==null?(n(),r("div",P," Loading TODO: Loading Literally ")):(n(),r("div",x,[e("table",v,[e("tr",null,[e("td",I,[p.checkLinkStatus?(n(),r("img",{key:0,src:s(t).profilePicture,class:"tw-mx-auto tw-my-3 tw-rounded-full tw-size-48"},null,8,k)):(n(),r("img",S)),a(" "+o(s(t).profileDetails.first_name)+", "+o(s(t).profileDetails.last_name)+" "+o(s(t).profileDetails.middle_name),1)])]),e("tr",null,[e("td",null,[e("div",null,[N,a(" "+o(s(t).profileDetails.company_employee_id),1)])]),e("td",null,[e("div",null,[C,a(" "+o(s(t).profileDetails.hired_date),1)])]),e("td",null,[e("div",null,[E,a(" "+o(s(t).profileDetails.position),1)])]),e("td",null,[e("div",null,[j,a(" "+o(s(t).profileDetails.date_of_birth),1)])])]),e("tr",null,[e("td",null,[e("div",null,[O,a(" "+o(s(t).profileDetails.gender?"Male":"Female"),1)])]),e("td",null,[T,a(" "+o(s(t).profileDetails.martial_status),1)]),B]),e("tr",J,[e("td",M,[q,s(t).profileDetails.address[0].region?(n(),r("span",z," Region "+o(s(t).profileDetails.address[0].region),1)):c("",!0),a(" "+o(s(t).profileDetails.address[0].province)+" "+o(s(t).profileDetails.address[0].city)+" "+o(s(t).profileDetails.address[0].barangay)+" "+o(s(t).profileDetails.address[0].postal_code)+" "+o(s(t).profileDetails.address[0].street)+" "+o(s(t).profileDetails.address[0].house_number)+" ",1),s(t).profileDetails.address[0].additional_information?(n(),r("span",A,[a(" - "),e("span",L,o(s(t).profileDetails.address[0].additional_information),1)])):c("",!0)])])]),e("table",R,[H,e("tr",null,[e("td",null,[U,a(" "+o(s(t).profileDetails.phil_health_number),1)]),e("td",null,[V,a(" "+o(s(t).profileDetails.pag_ibig_number),1)]),e("td",null,[G,a(" "+o(s(t).profileDetails.sss_number),1)])]),e("tr",null,[e("td",W,[X,a(" "+o(s(t).profileDetails.bir_tin),1)]),e("td",F,[Z,a("\u20B1"+o(s(t).profileDetails.rate_per_day),1)])])])]))}};var ee=h(Y,[["__scopeId","data-v-c1101170"]]);export{ee as default};
