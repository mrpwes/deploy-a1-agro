import{k as g,j as _,p as v,I as w,t as h,aq as I,r as b,o as D,c as y,d as s,w as a,e as N,a3 as Q,a as e,Q as f,a6 as r,V as C}from"./index.955c4428.js";import{Q as R,a as k,C as x}from"./ClosePopup.f2e736dc.js";import{Q as P}from"./position-engine.d153bab9.js";import{Q as V}from"./QTable.a4c95171.js";import{P as B}from"./PageHeader.6326b9d5.js";import"./focus-manager.cdbf102b.js";import"./QList.b452c5b0.js";import"./QSelect.fab20430.js";import"./use-key-composition.949e6e39.js";import"./pageHeader.14c3c1ec.js";var S=g({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(i,{slots:c}){const o=h(),n=_(()=>"q-td"+(i.autoWidth===!0?" q-table--col-auto-width":"")+(i.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(i.props===void 0)return v("td",{class:n.value},w(c.default));const u=o.vnode.key,l=(i.props.colsMap!==void 0?i.props.colsMap[u]:null)||i.props.col;if(l===void 0)return;const{row:t}=i.props;return v("td",{class:n.value+l.__tdClass(t),style:l.__tdStyle(t)},w(c.default))}}});const q=I("invoice",{state:()=>({rows:[{invoiceNumber:1,date:"2022-01-01",description:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",recipient:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",issuer:"Issuer 1",amount:1e3},{invoiceNumber:2,date:"2022-02-01",description:"Description 2",recipient:"Recipient 2",issuer:"Issuer 2",amount:2e3},{invoiceNumber:3,date:"2022-03-01",description:"Description 3",recipient:"Recipient 3",issuer:"Issuer 3",amount:3e3},{invoiceNumber:4,date:"2022-04-01",description:"Description 4",recipient:"Recipient 4",issuer:"Issuer 4",amount:4e3},{invoiceNumber:5,date:"2022-05-01",description:"Description 5",recipient:"Recipient 5",issuer:"Issuer 5",amount:5e3}]}),getters:{},actions:{}}),A=e("div",{class:"tw-pl-1"},"VIEW",-1),H={class:"tw-grid tw-grid-cols-2 tw-gap-3 tw-p-5"},T={class:"tw-col-span-2"},G={__name:"InvoicePage",setup(i){const c=q(),o=b(null),n=b(!1);function u(t){console.log("hi"),this.selectedRow=t,this.viewPrompt=!0}const l=[{name:"invoiceNumber",required:!0,label:"Invoice #",align:"center",field:t=>t.invoiceNumber,format:t=>`${t}`,sortable:!0},{name:"Date",align:"center",label:"Date",field:"date",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:"recipient",sortable:!0},{name:"Issuer",align:"center",label:"Issuer",field:"issuer",sortable:!0},{name:"Amount",align:"center",label:"Amount",field:"amount",sortable:!0},{name:"actions",align:"center",label:""}];return(t,d)=>(D(),y(Q,null,[s(B,{currentPage:"Invoice"}),s(V,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mb-3 tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",title:"","wrap-cells":"",rows:N(c).rows,columns:l,"row-key":"name"},{"body-cell-actions":a(p=>[s(S,{props:p},{default:a(()=>[e("div",null,[s(f,{icon:"visibility",onClick:m=>u(p.row)},{default:a(()=>[A]),_:2},1032,["onClick"]),e("div",null,[s(P,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=m=>n.value=m),persistent:""},{default:a(()=>[s(R,{style:{"min-width":"500px"}},{default:a(()=>[e("div",H,[e("div",null,"Invoice Number: "+r(o.value.invoiceNumber),1),e("div",null,"Date: "+r(o.value.date),1),e("div",T," Description: "+r(o.value.description),1),e("div",null,"Recipient: "+r(o.value.recipient),1),e("div",null,"Issuer: "+r(o.value.issuer),1),e("div",null,"Amount: "+r(o.value.amount),1)]),s(k,{align:"right",class:"text-primary"},{default:a(()=>[C(s(f,{flat:"",label:"OK"},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:2},1032,["props"])]),_:1},8,["rows"])],64))}};export{G as default};
