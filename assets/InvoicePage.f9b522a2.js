import{k as g,j as _,p as v,I as b,t as I,aq as h,r as w,o as D,c as y,d as a,w as r,e as N,a3 as Q,a as e,Q as f,a6 as n,V as C}from"./index.9a4de0ed.js";import{Q as k,a as R,C as x}from"./ClosePopup.dbd1d53d.js";import{Q as V}from"./position-engine.0007aa99.js";import{Q as B}from"./QTable.f456829f.js";import{P}from"./PageHeader.ff9df4da.js";import"./focus-manager.3666c02a.js";import"./QList.b0e6a7bf.js";import"./QSelect.b8fbebc2.js";import"./use-key-composition.6c5d5ce3.js";import"./pageHeader.14accd99.js";var S=g({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(o,{slots:c}){const t=I(),s=_(()=>"q-td"+(o.autoWidth===!0?" q-table--col-auto-width":"")+(o.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(o.props===void 0)return v("td",{class:s.value},b(c.default));const u=t.vnode.key,l=(o.props.colsMap!==void 0?o.props.colsMap[u]:null)||o.props.col;if(l===void 0)return;const{row:i}=o.props;return v("td",{class:s.value+l.__tdClass(i),style:l.__tdStyle(i)},b(c.default))}}});const q=h("invoice",{state:()=>({rows:[{invoiceNumber:1,date:"2022-01-01",description:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",recipient:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",issuer:"Issuer 1",amount:1e3},{invoiceNumber:2,date:"2022-02-01",description:"Description 2",recipient:"Recipient 2",issuer:"Issuer 2",amount:2e3},{invoiceNumber:3,date:"2022-03-01",description:"Description 3",recipient:"Recipient 3",issuer:"Issuer 3",amount:3e3},{invoiceNumber:4,date:"2022-04-01",description:"Description 4",recipient:"Recipient 4",issuer:"Issuer 4",amount:4e3},{invoiceNumber:5,date:"2022-05-01",description:"Description 5",recipient:"Recipient 5",issuer:"Issuer 5",amount:5e3}]}),getters:{},actions:{}}),A=e("div",{class:"tw-pl-1"},"VIEW",-1),H={class:"tw-grid tw-grid-cols-2 tw-gap-3 tw-p-5"},T={class:"tw-col-span-2"},G={__name:"InvoicePage",setup(o){const c=q(),t=w(null),s=w(!1);function u(i){t.value=i,s.value=!0}const l=[{name:"invoiceNumber",required:!0,label:"Invoice #",align:"center",field:i=>i.invoiceNumber,format:i=>`${i}`,sortable:!0},{name:"Date",align:"center",label:"Date",field:"date",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:"recipient",sortable:!0},{name:"Issuer",align:"center",label:"Issuer",field:"issuer",sortable:!0},{name:"Amount",align:"center",label:"Amount",field:"amount",sortable:!0},{name:"actions",align:"center",label:""}];return(i,d)=>(D(),y(Q,null,[a(P,{currentPage:"Invoice"}),a(B,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mb-3 tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",title:"","wrap-cells":"",rows:N(c).rows,columns:l,"row-key":"name"},{"body-cell-actions":r(p=>[a(S,{props:p},{default:r(()=>[e("div",null,[a(f,{icon:"visibility",onClick:m=>u(p.row)},{default:r(()=>[A]),_:2},1032,["onClick"]),e("div",null,[a(V,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=m=>s.value=m),persistent:""},{default:r(()=>[a(k,{style:{"min-width":"500px"}},{default:r(()=>[e("div",H,[e("div",null,"Invoice Number: "+n(t.value.invoiceNumber),1),e("div",null,"Date: "+n(t.value.date),1),e("div",T," Description: "+n(t.value.description),1),e("div",null,"Recipient: "+n(t.value.recipient),1),e("div",null,"Issuer: "+n(t.value.issuer),1),e("div",null,"Amount: "+n(t.value.amount),1)]),a(R,{align:"right",class:"text-primary"},{default:r(()=>[C(a(f,{flat:"",label:"OK"},null,512),[[x]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:2},1032,["props"])]),_:1},8,["rows"])],64))}};export{G as default};