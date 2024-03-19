import{c as z,h as ue,p as yt,a as ke,f as Pe,q as Ne,r as Qe,i as _t,Q as oe}from"./QBtn.e604ea69.js";import{h as r,g as H,c as u,r as j,w as M,a8 as ze,a as He,M as qt,L as wt,o as Ue,F as Le,a9 as Q,D as De,a2 as Me,aa as Ce,ab as Ee,ac as Ct,n as Ke,ad as kt,i as W}from"./index.60eb191b.js";import{Q as Pt,a as xt}from"./QList.6a578503.js";import{u as se,b as ce}from"./focus-manager.4acb800b.js";import{u as Rt,a as Tt,c as We,Q as Bt}from"./QSelect.d57fc384.js";import{g as Vt}from"./position-engine.59be90d8.js";import{a as Ot,h as $t}from"./use-key-composition.ac35a6fa.js";var Ft=z({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const d=H(),{proxy:{$q:o}}=d,f=i=>{l("click",i)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:f},ue(a.default));let i,c;const v=d.vnode.key;if(v){if(i=e.props.colsMap[v],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";c=yt(a.default,[]),c[n](r(ke,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else c=ue(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),f(n)}};return r("th",m,c)}}});const pt=["horizontal","vertical","cell","none"];var Lt=z({name:"QMarkupTable",props:{...se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>pt.includes(e)}},setup(e,{slots:a}){const l=H(),d=ce(e,l.proxy.$q),o=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},ue(a.default))])}});function Ge(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Dt={list:Pt,table:Lt},Mt=["list","table","__qtable"];var Et=z({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>Mt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let d;const o=j(null),f=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:c,padVirtualScroll:v,onVirtualScrollEvt:m}=Tt({virtualScrollLength:f,getVirtualScrollTarget:q,getVirtualScrollEl:C}),n=u(()=>{if(f.value===0)return[];const V=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(f,()=>{c()}),M(()=>e.scrollTarget,()=>{h(),y()});function C(){return o.value.$el||o.value}function q(){return d}function y(){d=Vt(C(),e.scrollTarget),d.addEventListener("scroll",m,Le.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",m,Le.passive),d=void 0)}function B(){let V=v(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),Pe(a.after,V)}return ze(()=>{c()}),He(()=>{y()}),qt(()=>{y()}),wt(()=>{h()}),Ue(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:o,class:"q-table__middle "+b.value},B()):r(Dt[e.type],{...l,ref:o,class:[l.class,b.value],...w.value},B)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function je(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=z({name:"QLinearProgress",props:{...se,...Ne,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=H(),d=ce(e,l.$q),o=Qe(e,jt),f=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),c=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>je(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>je(f.value===!0?1:e.value,i.value,l.$q)),C=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${f.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),y=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[r("div",{class:b.value,style:m.value}),r("div",{class:C.value,style:w.value})];return e.stripe===!0&&f.value===!1&&h.push(r("div",{class:y.value,style:q.value})),r("div",{class:v.value,style:c.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Pe(a.default,h))}}});function It(e,a){const l=j(null),d=u(()=>e.disable===!0?null:r("span",{ref:l,class:"no-outline",tabindex:-1}));function o(f){const i=a.value;f!==void 0&&f.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(f===void 0||i!==null&&i.contains(f.target)===!0)&&l.value.focus()}return{refocusTargetEl:d,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const Qt={...se,...Ne,...Ot,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},zt=["update:modelValue"];function Ht(e,a){const{props:l,slots:d,emit:o,proxy:f}=H(),{$q:i}=f,c=ce(l,i),v=j(null),{refocusTargetEl:m,refocusTarget:n}=It(l,v),b=Qe(l,Nt),w=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=u(()=>{const k=Q(l.val);return w.value===!0?l.modelValue.findIndex(p=>Q(p)===k):-1}),q=u(()=>w.value===!0?C.value>-1:Q(l.modelValue)===Q(l.trueValue)),y=u(()=>w.value===!0?C.value===-1:Q(l.modelValue)===Q(l.falseValue)),h=u(()=>q.value===!1&&y.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(c.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const k=q.value===!0?"truthy":y.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?q.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${p}`}),x=u(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":q.value,"^checked":q.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),k}),T=$t(x),A=u(()=>{const k={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":q.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function U(k){k!==void 0&&(De(k),n(k)),l.disable!==!0&&o("update:modelValue",K(),k)}function K(){if(w.value===!0){if(q.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(q.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function X(k){(k.keyCode===13||k.keyCode===32)&&De(k)}function F(k){(k.keyCode===13||k.keyCode===32)&&U(k)}const E=a(q,h);return Object.assign(f,{toggle:U}),()=>{const k=E();l.disable!==!0&&T(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[r("div",{class:$.value,style:b.value,"aria-hidden":"true"},k)];m.value!==null&&p.push(m.value);const J=l.label!==void 0?Pe(d.default,[l.label]):ue(d.default);return J!==void 0&&p.push(r("div",{class:`q-${e}__label q-anchor--skip`},J)),r("div",{ref:v,class:V.value,...A.value,onClick:U,onKeydown:X,onKeyup:F},p)}}const Ut=r("div",{key:"svg",class:"q-checkbox__bg absolute"},[r("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[r("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),r("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var we=z({name:"QCheckbox",props:Qt,emits:zt,setup(e){function a(l,d){const o=u(()=>(l.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[r("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[r(ke,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return Ht("checkbox",a)}});let G=0;const Kt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Wt=["update:fullscreen","fullscreen"];function Gt(){const e=H(),{props:a,emit:l,proxy:d}=e;let o,f,i;const c=j(!1);_t(e)===!0&&M(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),M(()=>a.fullscreen,b=>{c.value!==b&&v()}),M(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function v(){c.value===!0?n():m()}function m(){c.value!==!0&&(c.value=!0,i=d.$el.parentNode,i.replaceChild(f,d.$el),document.body.appendChild(d.$el),G++,G===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:n},Me.add(o))}function n(){c.value===!0&&(o!==void 0&&(Me.remove(o),o=void 0),i.replaceChild(d.$el,f),c.value=!1,G=Math.max(0,G-1),G===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return ze(()=>{f=document.createElement("span")}),He(()=>{a.fullscreen===!0&&m()}),Ue(n),Object.assign(d,{toggleFullscreen:v,setFullscreen:m,exitFullscreen:n}),{inFullscreen:c,toggleFullscreen:v}}function Xt(e,a){return new Date(e)-new Date(a)}const Jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Yt(e,a,l,d){const o=u(()=>{const{sortBy:c}=a.value;return c&&l.value.find(v=>v.name===c)||null}),f=u(()=>e.sortMethod!==void 0?e.sortMethod:(c,v,m)=>{const n=l.value.find(C=>C.name===v);if(n===void 0||n.field===void 0)return c;const b=m===!0?-1:1,w=typeof n.field=="function"?C=>n.field(C):C=>C[n.field];return c.sort((C,q)=>{let y=w(C),h=w(q);return n.rawSort!==void 0?n.rawSort(y,h,C,q)*b:y==null?-1*b:h==null?1*b:n.sort!==void 0?n.sort(y,h,C,q)*b:Ce(y)===!0&&Ce(h)===!0?(y-h)*b:Ee(y)===!0&&Ee(h)===!0?Xt(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(B=>(B+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(c){let v=e.columnSortOrder;if(Ct(c)===!0)c.sortOrder&&(v=c.sortOrder),c=c.name;else{const b=l.value.find(w=>w.name===c);b!==void 0&&b.sortOrder&&(v=b.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==c?(m=c,n=v==="da"):e.binaryStateSort===!0?n=!n:n===!0?v==="ad"?m=null:n=!1:v==="ad"?n=!0:m=null,d({sortBy:m,descending:n,page:1})}return{columnToSort:o,computedSortMethod:f,sort:i}}const Zt={filter:[String,Object],filterMethod:Function};function el(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(d,o,f,i)=>{const c=o?o.toLowerCase():"";return d.filter(v=>f.some(m=>{const n=i(m,v)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(c)!==-1}))});return M(()=>e.filter,()=>{Ke(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function tl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ll={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function al(e,a){const{props:l,emit:d}=e,o=j(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),f=u(()=>{const n=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(n)}),i=u(()=>f.value.rowsNumber!==void 0);function c(n){v({pagination:n,filter:l.filter})}function v(n={}){Ke(()=>{d("request",{pagination:n.pagination||f.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,b){const w=Ae({...f.value,...n});if(tl(f.value,w)===!0){i.value===!0&&b===!0&&c(w);return}if(i.value===!0){c(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?d("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:f,isServerSide:i,requestServerInteraction:v,setPagination:m}}function nl(e,a,l,d,o,f){const{props:i,emit:c,proxy:{$q:v}}=e,m=u(()=>d.value===!0?l.value.rowsNumber||0:f.value),n=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),w=u(()=>l.value.page===1),C=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),q=u(()=>b.value===0?!0:l.value.page>=C.value),y=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?v.lang.table.allRows:""+T,value:T})));M(C,(x,T)=>{if(x===T)return;const A=l.value.page;x&&!A?o({page:1}):x<A&&o({page:x})});function h(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:C.value})}return i["onUpdate:pagination"]!==void 0&&c("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:w,isLastPage:q,pagesNumber:C,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:B,nextPage:V,lastPage:$}}const rl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ol=["update:selected","selection"];function il(e,a,l,d){const o=u(()=>{const q={};return e.selected.map(d.value).forEach(y=>{q[y]=!0}),q}),f=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),c=u(()=>e.selection==="multiple"),v=u(()=>l.value.length!==0&&l.value.every(q=>o.value[d.value(q)]===!0)),m=u(()=>v.value!==!0&&l.value.some(q=>o.value[d.value(q)]===!0)),n=u(()=>e.selected.length);function b(q){return o.value[q]===!0}function w(){a("update:selected",[])}function C(q,y,h,B){a("selection",{rows:y,added:h,keys:q,evt:B});const V=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter($=>q.includes(d.value($))===!1);a("update:selected",V)}return{hasSelectionMode:f,singleSelection:i,multipleSelection:c,allRowsSelected:v,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:b,clearSelection:w,updateSelection:C}}function Ie(e){return Array.isArray(e)?e.slice():[]}const ul={expanded:Array},sl=["update:expanded"];function cl(e,a){const l=j(Ie(e.expanded));M(()=>e.expanded,i=>{l.value=Ie(i)});function d(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function f(i,c){const v=l.value.slice(),m=v.indexOf(i);c===!0?m===-1&&(v.push(i),o(v)):m!==-1&&(v.splice(m,1),o(v))}return{isRowExpanded:d,setExpanded:o,updateExpanded:f}}const dl={visibleColumns:Array};function vl(e,a,l){const d=u(()=>{if(e.columns!==void 0)return e.columns;const c=e.rows[0];return c!==void 0?Object.keys(c).map(v=>({name:v,label:v.toUpperCase(),field:v,align:Ce(c[v])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:c,descending:v}=a.value;return(e.visibleColumns!==void 0?d.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):d.value).map(n=>{const b=n.align||"right",w=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===c?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:C=>w+" "+n.classes(C):()=>w}})}),f=u(()=>{const c={};return o.value.forEach(v=>{c[v.name]=v}),c}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:d,computedCols:o,computedColsMap:f,computedColspan:i}}const ie="q-table__bottom row items-center",Xe={};We.forEach(e=>{Xe[e]={}});var _l=z({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Xe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...se,...Kt,...dl,...Zt,...ll,...ul,...rl,...Jt},emits:["request","virtualScroll",...Wt,...sl,...ol],setup(e,{slots:a,emit:l}){const d=H(),{proxy:{$q:o}}=d,f=ce(e,o),{inFullscreen:i,toggleFullscreen:c}=Gt(),v=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=j(null),n=j(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(f.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(f.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),q=u(()=>C.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:B,requestServerInteraction:V,setPagination:$}=al(d,I),{computedFilterMethod:x}=el(e,$),{isRowExpanded:T,setExpanded:A,updateExpanded:U}=cl(e,l),K=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,L.value,I)),Ze.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),X=u(()=>K.value.length),F=u(()=>{let t=K.value;if(B.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(Z.value===0&&e.rows!==t?t.length>ee.value&&(t=t.slice(0,ee.value)):t=t.slice(Z.value,ee.value)),t}),{hasSelectionMode:E,singleSelection:k,multipleSelection:p,allRowsSelected:J,someRowsSelected:xe,rowsSelectedNumber:de,isRowSelected:ve,clearSelection:Je,updateSelection:Y}=il(e,l,F,v),{colList:Ye,computedCols:L,computedColsMap:Re,computedColspan:Te}=vl(e,h,E),{columnToSort:Ze,computedSortMethod:et,sort:fe}=Yt(e,h,Ye,$),{firstRowIndex:Z,lastRowIndex:ee,isFirstPage:ge,isLastPage:be,pagesNumber:te,computedRowsPerPageOptions:tt,computedRowsNumber:le,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye}=nl(d,y,h,B,$,X),lt=u(()=>F.value.length===0),at=u(()=>{const t={};return We.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&n.value.reset()}function rt(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=r("tbody",g({cols:L.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>r("tbody",S({cols:L.value}))),r(Et,{ref:n,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},_)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function ot(t,s){if(n.value!==null){n.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function it(t){l("virtualScroll",t)}function Be(){return[r(At,{class:"q-table__linear-progress",color:e.color,dark:f.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,s,g){const S=v.value(t),_=ve(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=L.value.map(O=>{const ne=a[`body-cell-${O.name}`],re=ne!==void 0?ne:R;return re!==void 0?re(st({key:S,row:t,pageIndex:g,col:O})):r("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},I(O,t))});if(E.value===!0){const O=a["body-selection"],ne=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[r(we,{modelValue:_,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(re,ht)=>{Y([S],[t],re,ht)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},ne))}const D={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(D.class["cursor-pointer"]=!0,D.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(D.class["cursor-pointer"]=!0,D.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(D.class["cursor-pointer"]=!0,D.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),r("tr",D,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Ve(_,t,R));return s!==void 0&&(S=s({cols:L.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:L.value}))),r("tbody",S)}function Oe(t){return _e(t),t.cols=t.cols.map(s=>W({...s},"value",()=>I(s,t.row))),t}function st(t){return _e(t),W(t,"value",()=>I(t.col,t.row)),t}function ct(t){return _e(t),t}function _e(t){Object.assign(t,{cols:L.value,colsMap:Re.value,sort:fe,rowIndex:Z.value+t.pageIndex,color:e.color,dark:f.value,dense:e.dense}),E.value===!0&&W(t,"selected",()=>ve(t.key),(s,g)=>{Y([t.key],[t.row],s,g)}),W(t,"expand",()=>T(t.key),s=>{U(t.key,s)})}function I(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const N=u(()=>({pagination:h.value,pagesNumber:te.value,isFirstPage:ge.value,isLastPage:be.value,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,inFullscreen:i.value,toggleFullscreen:c}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],_=E.value===!0&&S!==void 0&&de.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(N.value)]);let P;if(_===!0?P=S(N.value).slice():(P=[],s!==void 0?P.push(r("div",{class:"q-table__control"},[s(N.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[g(N.value)]))),P.length!==0)return r("div",{class:R},P)}const $e=u(()=>xe.value===!0?null:J.value);function Fe(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Te.value},Be())])),r("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=L.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:s,P=qe({col:S});return R!==void 0?R(P):r(Ft,{key:S.name,props:P},()=>S.label)});if(k.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const S=a["header-selection"],_=S!==void 0?S(qe({})):[r(we,{color:e.color,modelValue:$e.value,dark:f.value,dense:e.dense,"onUpdate:modelValue":pe})];g.unshift(r("th",{class:"q-table--col-auto-width"},_))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:L.value,sort:fe,colsMap:Re.value,color:e.color,dark:f.value,dense:e.dense}),p.value===!0&&W(t,"selected",()=>$e.value,pe),t}function pe(t){xe.value===!0&&(t=!1),Y(F.value.map(v.value),F.value,t)}const ae=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(ke,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:ie+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return r("div",{class:ie},[t(N.value)]);const s=e.hideSelectedBanner!==!0&&E.value===!0&&de.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(de.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ie+" justify-end"},bt(s));if(s.length!==0)return r("div",{class:ie},s)}function gt(t){$({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=h.value,S=e.paginationLabel||o.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Bt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?o.lang.table.allRows:g,dark:f.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),_!==void 0)s=_(N.value);else if(s=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(Z.value+1,Math.min(ee.value,le.value),le.value):S(1,X.value,le.value)])],g!==0&&te.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),te.value>2&&s.push(r(oe,{key:"pgFirst",...P,icon:ae.value[0],disable:ge.value,onClick:me})),s.push(r(oe,{key:"pgPrev",...P,icon:ae.value[1],disable:ge.value,onClick:Se}),r(oe,{key:"pgNext",...P,icon:ae.value[2],disable:be.value,onClick:he})),te.value>2&&s.push(r(oe,{key:"pgLast",...P,icon:ae.value[3],disable:be.value,onClick:ye}))}return t.push(r("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Fe()])]:e.loading===!0&&a.loading===void 0?Be():void 0;return r("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[_.label]),r("div",{class:"q-table__grid-item-value"},[_.value])]));if(E.value===!0){const _=a["body-selection"],R=_!==void 0?_(s):[r(we,{modelValue:s.selected,color:e.color,dark:f.value,dense:e.dense,"onUpdate:modelValue":(P,D)=>{Y([s.key],[s.row],P,D)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},R),r(xt,{dark:f.value}))}const S={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,s.row,s.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[r("div",S,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Oe({key:v.value(s),row:s,pageIndex:g}))))}return Object.assign(d.proxy,{requestServerInteraction:V,setPagination:$,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,isRowSelected:ve,clearSelection:Je,isRowExpanded:T,setExpanded:A,sort:fe,resetVirtualScroll:nt,scrollTo:ot,getCellValue:I}),kt(d.proxy,{filteredSortedRows:()=>K.value,computedRows:()=>F.value,computedRowsNumber:()=>le.value}),()=>{const t=[dt()],s={ref:m,class:q.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(rt(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",s,t)}}});export{_l as Q};
