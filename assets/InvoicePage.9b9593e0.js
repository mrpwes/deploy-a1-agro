import{c as d,h as l,Q as p}from"./QBtn.20d71337.js";import{c as b,h as u,g as v,e as w,f,k as o,l as s,Z as g,j as m}from"./index.6c61e348.js";import{Q as _}from"./QTable.34913732.js";import{P as h}from"./PageHeader.eeecd9ba.js";import"./QList.2968e0ab.js";import"./focus-manager.264bba92.js";import"./QSelect.eaeec09f.js";import"./use-key-composition.98ea5d57.js";import"./position-engine.96327532.js";import"./pageHeader.667371a0.js";var I=d({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:r}){const n=v(),t=b(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return u("td",{class:t.value},l(r.default));const a=n.vnode.key,i=(e.props.colsMap!==void 0?e.props.colsMap[a]:null)||e.props.col;if(i===void 0)return;const{row:c}=e.props;return u("td",{class:t.value+i.__tdClass(c),style:i.__tdStyle(c)},l(r.default))}}});const N=m("div",{class:"tw-pl-1"},"Views",-1),H={__name:"InvoicePage",setup(e){const r=[{name:"invoiceNumber",required:!0,label:"Invoice #",align:"center",field:t=>t.invoiceNumber,format:t=>`${t}`,sortable:!0},{name:"Date",align:"center",label:"Date",field:"date",sortable:!0},{name:"Description",align:"center",label:"Description",field:"description",sortable:!0},{name:"Recipient",align:"center",label:"Recipient",field:"recipient",sortable:!0},{name:"Issuer",align:"center",label:"Issuer",field:"issuer",sortable:!0},{name:"Amount",align:"center",label:"Amount",field:"amount",sortable:!0},{name:"actions",align:"center",label:""}],n=[{invoiceNumber:1,date:"2022-01-01",description:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",recipient:" lorem ipsum dolor sit amet, consectetur adipiscing elit.",issuer:"Issuer 1",amount:1e3},{invoiceNumber:2,date:"2022-02-01",description:"Description 2",recipient:"Recipient 2",issuer:"Issuer 2",amount:2e3},{invoiceNumber:3,date:"2022-03-01",description:"Description 3",recipient:"Recipient 3",issuer:"Issuer 3",amount:3e3},{invoiceNumber:4,date:"2022-04-01",description:"Description 4",recipient:"Recipient 4",issuer:"Issuer 4",amount:4e3},{invoiceNumber:5,date:"2022-05-01",description:"Description 5",recipient:"Recipient 5",issuer:"Issuer 5",amount:5e3}];return(t,a)=>(w(),f(g,null,[o(h,{currentPage:"Invoice"}),o(_,{class:"my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mb-3 tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",title:"","wrap-cells":"",rows:n,columns:r,"row-key":"name"},{"body-cell-actions":s(i=>[o(I,{props:i},{default:s(()=>[m("div",null,[o(p,{icon:"visibility"},{default:s(()=>[N]),_:1})])]),_:2},1032,["props"])]),_:1})],64))}};export{H as default};
