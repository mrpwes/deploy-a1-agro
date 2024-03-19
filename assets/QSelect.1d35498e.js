import{u as We,b as ht,e as yt,d as bt,a as Dt,c as Kt,f as st,g as Nt}from"./use-key-composition.406beeb8.js";import{c as _e,q as $t,r as jt,g as Qt,a as pe,s as Wt,R as Ut,h as wt,m as Xt,f as Yt}from"./QBtn.e20426fb.js";import{u as Ct,b as Vt,a as Jt}from"./focus-manager.dff8ebc8.js";import{O as Gt,r as p,c as d,w as ae,J as Zt,a8 as el,L as tl,M as ll,o as Ue,n as ne,h as w,g as Re,D as oe,C as ul,T as nl,K as ol,ag as al,E as je,ah as ze,z as il,d as Ve,s as rl}from"./index.a64bdad3.js";import{l as sl,u as cl,m as dl,v as ct,n as fl,f as vl,o as ml,h as Sl,p as gl,q as hl,r as yl,i as bl,t as wl,F as Cl,G as Vl,w as dt,H as ft,g as xl,x as kl,y as vt,I as ql,z as Al,J as Ol,K as mt,Q as zl,E as Fl,D as _l}from"./position-engine.725c13ed.js";let Pe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,Pe=e.scrollLeft>=0,e.remove()}const Q=1e3,Il=["start","center","end","start-force","center-force","end-force"],xt=Array.prototype.filter,Ml=window.getComputedStyle(document.body).overflowAnchor===void 0?Gt:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];xt.call(r,x=>x.dataset&&x.dataset.qVsAnchor!==void 0).forEach(x=>{delete x.dataset.qVsAnchor});const h=r[c];h&&h.dataset&&(h.dataset.qVsAnchor="")}))};function xe(e,c){return e+c}function Qe(e,c,r,h,x,i,z,y){const b=e===window?document.scrollingElement||document.documentElement:e,F=x===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-z-y,scrollMaxSize:0,offsetStart:-z,offsetEnd:-y};if(x===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=b.scrollLeft,s.scrollViewSize+=b.clientWidth),s.scrollMaxSize=b.scrollWidth,i===!0&&(s.scrollStart=(Pe===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=b.scrollTop,s.scrollViewSize+=b.clientHeight),s.scrollMaxSize=b.scrollHeight),r!==null)for(let S=r.previousElementSibling;S!==null;S=S.previousElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=S[F]);if(h!==null)for(let S=h.nextElementSibling;S!==null;S=S.nextElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=S[F]);if(c!==e){const S=b.getBoundingClientRect(),C=c.getBoundingClientRect();x===!0?(s.offsetStart+=C.left-S.left,s.offsetEnd-=C.width):(s.offsetStart+=C.top-S.top,s.offsetEnd-=C.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function St(e,c,r,h){c==="end"&&(c=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(h===!0&&(c=(Pe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):r===!0?(h===!0&&(c=(Pe===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function Fe(e,c,r,h){if(r>=h)return 0;const x=c.length,i=Math.floor(r/Q),z=Math.floor((h-1)/Q)+1;let y=e.slice(i,z).reduce(xe,0);return r%Q!==0&&(y-=c.slice(i*Q,r).reduce(xe,0)),h%Q!==0&&h!==x&&(y-=c.slice(h,z*Q).reduce(xe,0)),y}const kt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Wl=Object.keys(kt),Bl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...kt};function Tl({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:r,virtualScrollItemSizeComputed:h}){const x=Re(),{props:i,emit:z,proxy:y}=x,{$q:b}=y;let F,s,S,C=[],k;const _=p(0),D=p(0),f=p({}),H=p(null),W=p(null),P=p(null),I=p({from:0,to:0}),me=d(()=>i.tableColspan!==void 0?i.tableColspan:100);h===void 0&&(h=d(()=>i.virtualScrollItemSize));const M=d(()=>h.value+";"+i.virtualScrollHorizontal),N=d(()=>M.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ae(N,()=>{j()}),ae(M,Z);function Z(){le(s,!0)}function te(l){le(l===void 0?s:l)}function U(l,o){const g=c();if(g==null||g.nodeType===8)return;const q=Qe(g,r(),H.value,W.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);S!==q.scrollViewSize&&j(q.scrollViewSize),K(g,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Il.indexOf(o)>-1?o:s>-1&&l>s?"end":"start")}function ie(){const l=c();if(l==null||l.nodeType===8)return;const o=Qe(l,r(),H.value,W.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),g=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-D.value;if(F===o.scrollStart)return;if(o.scrollMaxSize<=0){K(l,o,0,0);return}S!==o.scrollViewSize&&j(o.scrollViewSize),ee(I.value.from);const B=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[g],o.scrollViewSize/2));if(B>0&&Math.ceil(o.scrollStart)>=B){K(l,o,g,o.scrollMaxSize-o.offsetEnd-C.reduce(xe,0));return}let V=0,m=o.scrollStart-o.offsetStart,T=m;if(m<=q&&m+o.scrollViewSize>=_.value)m-=_.value,V=I.value.from,T=m;else for(let u=0;m>=C[u]&&V<g;u++)m-=C[u],V+=Q;for(;m>0&&V<g;)m-=k[V],m>-o.scrollViewSize?(V++,T=m):T=k[V]+m;K(l,o,V,T)}function K(l,o,g,q,B){const V=typeof B=="string"&&B.indexOf("-force")>-1,m=V===!0?B.replace("-force",""):B,T=m!==void 0?m:"start";let u=Math.max(0,g-f.value[T]),R=u+f.value.total;R>e.value&&(R=e.value,u=Math.max(0,R-f.value.total)),F=o.scrollStart;const Y=u!==I.value.from||R!==I.value.to;if(Y===!1&&m===void 0){ue(g);return}const{activeElement:Se}=document,J=P.value;Y===!0&&J!==null&&J!==Se&&J.contains(Se)===!0&&(J.addEventListener("focusout",re),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",re)})),Ml(J,g-u);const Ie=m!==void 0?k.slice(u,g).reduce(xe,0):0;if(Y===!0){const ce=R>=I.value.from&&u<=I.value.to?I.value.to:R;I.value={from:u,to:ce},_.value=Fe(C,k,0,u),D.value=Fe(C,k,R,e.value),requestAnimationFrame(()=>{I.value.to!==R&&F===o.scrollStart&&(I.value={from:I.value.from,to:R},D.value=Fe(C,k,R,e.value))})}requestAnimationFrame(()=>{if(F!==o.scrollStart)return;Y===!0&&ee(u);const ce=k.slice(u,g).reduce(xe,0),de=ce+o.offsetStart+_.value,Me=de+k[g];let qe=de+q;if(m!==void 0){const Le=ce-Ie,Ae=o.scrollStart+Le;qe=V!==!0&&Ae<de&&Me<Ae+o.scrollViewSize?Ae:m==="end"?Me-o.scrollViewSize:de-(m==="start"?0:Math.round((o.scrollViewSize-k[g])/2))}F=qe,St(l,qe,i.virtualScrollHorizontal,b.lang.rtl),ue(g)})}function ee(l){const o=P.value;if(o){const g=xt.call(o.children,u=>u.classList&&u.classList.contains("q-virtual-scroll--skip")===!1),q=g.length,B=i.virtualScrollHorizontal===!0?u=>u.getBoundingClientRect().width:u=>u.offsetHeight;let V=l,m,T;for(let u=0;u<q;){for(m=B(g[u]),u++;u<q&&g[u].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=B(g[u]),u++;T=m-k[V],T!==0&&(k[V]+=T,C[Math.floor(V/Q)]+=T),V++}}}function re(){P.value!==null&&P.value!==void 0&&P.value.focus()}function le(l,o){const g=1*h.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const q=k.length;k.length=e.value;for(let V=e.value-1;V>=q;V--)k[V]=g;const B=Math.floor((e.value-1)/Q);C=[];for(let V=0;V<=B;V++){let m=0;const T=Math.min((V+1)*Q,e.value);for(let u=V*Q;u<T;u++)m+=k[u];C.push(m)}s=-1,F=void 0,_.value=Fe(C,k,0,I.value.from),D.value=Fe(C,k,I.value.to,e.value),l>=0?(ee(I.value.from),ne(()=>{U(l)})):X()}function j(l){if(l===void 0&&typeof window!="undefined"){const m=c();m!=null&&m.nodeType!==8&&(l=Qe(m,r(),H.value,W.value,i.virtualScrollHorizontal,b.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}S=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,g=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+o+g,B=l===void 0||l<=0?1:Math.ceil(l/h.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));f.value={total:Math.ceil(V*q),start:Math.ceil(V*o),center:Math.ceil(V*(.5+o)),end:Math.ceil(V*(1+o)),view:B}}function ke(l,o){const g=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+g]:h.value+"px"};return[l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"before",ref:H},[w("tr",[w("td",{style:{[g]:`${_.value}px`,...q},colspan:me.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"before",ref:H,style:{[g]:`${_.value}px`,...q}}),w(l,{class:"q-virtual-scroll__content",key:"content",ref:P,tabindex:-1},o.flat()),l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[w("tr",[w("td",{style:{[g]:`${D.value}px`,...q},colspan:me.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[g]:`${D.value}px`,...q}})]}function ue(l){s!==l&&(i.onVirtualScroll!==void 0&&z("virtualScroll",{index:l,from:I.value.from,to:I.value.to-1,direction:l<s?"decrease":"increase",ref:y}),s=l)}j();const X=Zt(ie,b.platform.is.ios===!0?120:35);el(()=>{j()});let se=!1;return tl(()=>{se=!0}),ll(()=>{if(se!==!0)return;const l=c();F!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?St(l,F,i.virtualScrollHorizontal,b.lang.rtl):U(s)}),Ue(()=>{X.cancel()}),Object.assign(y,{scrollTo:U,reset:Z,refresh:te}),{virtualScrollSliceRange:I,virtualScrollSliceSizeComputed:f,setVirtualScrollSize:j,onVirtualScrollEvt:X,localResetVirtualScroll:le,padVirtualScroll:ke,scrollTo:U,reset:Z,refresh:te}}var El=_e({name:"QField",inheritAttrs:!1,props:{...We,tag:{type:String,default:"label"}},emits:ht,setup(){return yt(bt({requiredForAttr:!1,tagProp:!0}))}});const pl={xs:8,sm:10,md:14,lg:20,xl:24};var Pl=_e({name:"QChip",props:{...Ct,...$t,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:r}){const{proxy:{$q:h}}=Re(),x=Vt(e,h),i=jt(e,pl),z=d(()=>e.selected===!0||e.icon!==void 0),y=d(()=>e.selected===!0?e.iconSelected||h.iconSet.chip.selected:e.icon),b=d(()=>e.iconRemove||h.iconSet.chip.remove),F=d(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=d(()=>{const f=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(f?` text-${f} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(F.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(x.value===!0?" q-chip--dark q-dark":"")}),S=d(()=>{const f=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},H={...f,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||h.lang.label.remove};return{chip:f,remove:H}});function C(f){f.keyCode===13&&k(f)}function k(f){e.disable||(r("update:selected",!e.selected),r("click",f))}function _(f){(f.keyCode===void 0||f.keyCode===13)&&(oe(f),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function D(){const f=[];F.value===!0&&f.push(w("div",{class:"q-focus-helper"})),z.value===!0&&f.push(w(pe,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const H=e.label!==void 0?[w("div",{class:"ellipsis"},[e.label])]:void 0;return f.push(w("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Wt(c.default,H))),e.iconRight&&f.push(w(pe,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&f.push(w(pe,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:b.value,...S.value.remove,onClick:_,onKeyup:_})),f}return()=>{if(e.modelValue===!1)return;const f={class:s.value,style:i.value};return F.value===!0&&Object.assign(f,S.value.chip,{onClick:k,onKeyup:C}),Qt("div",f,D(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ut,e.ripple]])}}}),Rl=_e({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:c}){const r=d(()=>parseInt(e.lines,10)),h=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(r.value===1?" ellipsis":"")),x=d(()=>e.lines!==void 0&&r.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":r.value}:null);return()=>w("div",{style:x.value,class:h.value},wt(c.default))}}),Ll=_e({name:"QMenu",inheritAttrs:!1,props:{...sl,...cl,...Ct,...dl,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ct},self:{type:String,validator:ct},offset:{type:Array,validator:fl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...vl,"click","escapeKey"],setup(e,{slots:c,emit:r,attrs:h}){let x=null,i,z,y;const b=Re(),{proxy:F}=b,{$q:s}=F,S=p(null),C=p(!1),k=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),_=Vt(e,s),{registerTick:D,removeTick:f}=ml(),{registerTimeout:H}=Sl(),{transitionProps:W,transitionStyle:P}=gl(e),{localScrollTarget:I,changeScrollEvent:me,unconfigureScrollTarget:M}=hl(e,g),{anchorEl:N,canShow:Z}=yl({showing:C}),{hide:te}=bl({showing:C,canShow:Z,handleShow:se,handleHide:l,hideOnRouteChange:k,processOnMount:!0}),{showPortal:U,hidePortal:ie,renderPortal:K}=wl(b,S,T,"menu"),ee={anchorEl:N,innerRef:S,onClickOutside(u){if(e.persistent!==!0&&C.value===!0)return te(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&oe(u),!0}},re=d(()=>vt(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),le=d(()=>e.cover===!0?re.value:vt(e.self||"top start",s.lang.rtl)),j=d(()=>(e.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),ke=d(()=>e.autoClose===!0?{onClick:q}:{}),ue=d(()=>C.value===!0&&e.persistent!==!0);ae(ue,u=>{u===!0?(ql(V),Al(ee)):(ft(V),dt(ee))});function X(){Jt(()=>{let u=S.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function se(u){if(x=e.noRefocus===!1?document.activeElement:null,Cl(B),U(),g(),i=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const R=ul(u);if(R.left!==void 0){const{top:Y,left:Se}=N.value.getBoundingClientRect();i={left:R.left-Se,top:R.top-Y}}}z===void 0&&(z=ae(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,m)),e.noFocus!==!0&&document.activeElement.blur(),D(()=>{m(),e.noFocus!==!0&&X()}),H(()=>{s.platform.is.ios===!0&&(y=e.autoClose,S.value.click()),m(),U(!0),r("show",u)},e.transitionDuration)}function l(u){f(),ie(),o(!0),x!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?x.closest('[tabindex]:not([tabindex^="-"])'):void 0)||x).focus(),x=null),H(()=>{ie(!0),r("hide",u)},e.transitionDuration)}function o(u){i=void 0,z!==void 0&&(z(),z=void 0),(u===!0||C.value===!0)&&(Vl(B),M(),dt(ee),ft(V)),u!==!0&&(x=null)}function g(){(N.value!==null||e.scrollTarget!==void 0)&&(I.value=xl(N.value,e.scrollTarget),me(I.value,m))}function q(u){y!==!0?(Ol(F,u),r("click",u)):y=!1}function B(u){ue.value===!0&&e.noFocus!==!0&&Xt(S.value,u.target)!==!0&&X()}function V(u){r("escapeKey"),te(u)}function m(){kl({targetEl:S.value,offset:e.offset,anchorEl:N.value,anchorOrigin:re.value,selfOrigin:le.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function T(){return w(nl,W.value,()=>C.value===!0?w("div",{role:"menu",...h,ref:S,tabindex:-1,class:["q-menu q-position-engine scroll"+j.value,h.class],style:[h.style,P.value],...ke.value},wt(c.default)):null)}return Ue(o),Object.assign(F,{focus:X,updatePosition:m}),K}});const gt=e=>["add","add-unique","toggle"].includes(e),Hl=".*+?^${}()|[]\\",Dl=Object.keys(We);var Ul=_e({name:"QSelect",inheritAttrs:!1,props:{...Bl,...Dt,...We,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:gt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ht,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:r}){const{proxy:h}=Re(),{$q:x}=h,i=p(!1),z=p(!1),y=p(-1),b=p(""),F=p(!1),s=p(!1);let S=null,C=null,k,_,D,f=null,H,W,P,I;const me=p(null),M=p(null),N=p(null),Z=p(null),te=p(null),U=Kt(e),ie=Nt(nt),K=d(()=>Array.isArray(e.options)?e.options.length:0),ee=d(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:j,padVirtualScroll:ke,onVirtualScrollEvt:ue,scrollTo:X,setVirtualScrollSize:se}=Tl({virtualScrollLength:K,getVirtualScrollTarget:zt,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:ee}),l=bt(),o=d(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],v=a.map(O=>Ot(O,n));return e.modelValue===null&&t===!0?v.filter(O=>O!==null):v}return a}),g=d(()=>{const t={};return Dl.forEach(a=>{const n=e[a];n!==void 0&&(t[a]=n)}),t}),q=d(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=d(()=>st(o.value)),V=d(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),m=d(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),T=d(()=>K.value===0),u=d(()=>o.value.map(t=>$.value(t)).join(", ")),R=d(()=>e.displayValue!==void 0?e.displayValue:u.value),Y=d(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Se=d(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),J=d(()=>l.focused.value===!0?e.tabindex:-1),Ie=d(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ce=d(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),de=d(()=>o.value.map((t,a)=>({index:a,opt:t,html:Y.value(t),selected:!0,removeAtIndex:At,toggleOption:fe,tabindex:J.value}))),Me=d(()=>{if(K.value===0)return[];const{from:t,to:a}=re.value;return e.options.slice(t,a).map((n,v)=>{const O=ge.value(n)===!0,A=Ke(n)===!0,L=t+v,E={clickable:!0,active:A,activeClass:Ae.value,manualFocus:!0,focused:!1,disable:O,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":A===!0?"true":"false",id:`${l.targetUid.value}_${L}`,onClick:()=>{fe(n)}};return O!==!0&&(y.value===L&&(E.focused=!0),x.platform.is.desktop===!0&&(E.onMousemove=()=>{i.value===!0&&he(L)})),{index:L,opt:n,html:Y.value(n),label:$.value(n),selected:E.active,focused:E.focused,toggleOption:fe,setOptionIndex:he,itemProps:E}})}),qe=d(()=>e.dropdownIcon!==void 0?e.dropdownIcon:x.iconSet.arrow.dropdown),Le=d(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ae=d(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),G=d(()=>De(e.optionValue,"value")),$=d(()=>De(e.optionLabel,"label")),ge=d(()=>De(e.optionDisable,"disable")),Be=d(()=>o.value.map(t=>G.value(t))),qt=d(()=>{const t={onInput:nt,onChange:ie,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Je,onClick(a){_===!0&&Ve(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ie,t});ae(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(z.value!==!0&&i.value!==!0||B.value!==!0)&&(D!==!0&&Ce(),(z.value===!0||i.value===!0)&&ye(""))},{immediate:!0}),ae(()=>e.fillInput,Ce),ae(i,Ne),ae(K,Ht);function Xe(t){return e.emitValue===!0?G.value(t):t}function He(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const a=e.modelValue.slice();r("remove",{index:t,value:a.splice(t,1)[0]}),r("update:modelValue",a)}else r("update:modelValue",null)}function At(t){He(t),l.focus()}function Ye(t,a){const n=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&Oe($.value(t),!0,!0),r("update:modelValue",n);return}if(o.value.length===0){r("add",{index:0,value:n}),r("update:modelValue",e.multiple===!0?[n]:n);return}if(a===!0&&Ke(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();r("add",{index:v.length,value:n}),v.push(n),r("update:modelValue",v)}function fe(t,a){if(l.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const n=G.value(t);if(e.multiple!==!0){a!==!0&&(Oe(e.fillInput===!0?$.value(t):"",!0,!0),ve()),M.value!==null&&M.value.focus(),(o.value.length===0||ze(G.value(o.value[0]),n)!==!0)&&r("update:modelValue",e.emitValue===!0?n:t);return}if((_!==!0||F.value===!0)&&l.focus(),Je(),o.value.length===0){const A=e.emitValue===!0?n:t;r("add",{index:0,value:A}),r("update:modelValue",e.multiple===!0?[A]:A);return}const v=e.modelValue.slice(),O=Be.value.findIndex(A=>ze(A,n));if(O>-1)r("remove",{index:O,value:v.splice(O,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const A=e.emitValue===!0?n:t;r("add",{index:v.length,value:A}),v.push(A)}r("update:modelValue",v)}function he(t){if(x.platform.is.desktop!==!0)return;const a=t>-1&&t<K.value?t:-1;y.value!==a&&(y.value=a)}function Te(t=1,a){if(i.value===!0){let n=y.value;do n=mt(n+t,-1,K.value-1);while(n!==-1&&n!==y.value&&ge.value(e.options[n])===!0);y.value!==n&&(he(n),X(n),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(n>=0?$.value(e.options[n]):H,!0))}}function Ot(t,a){const n=v=>ze(G.value(v),t);return e.options.find(n)||a.find(n)||t}function De(t,a){const n=t!==void 0?t:a;return typeof n=="function"?n:v=>v!==null&&typeof v=="object"&&n in v?v[n]:v}function Ke(t){const a=G.value(t);return Be.value.find(n=>ze(n,a))!==void 0}function Je(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===u.value)&&M.value.select()}function Ge(t){il(t,27)===!0&&i.value===!0&&(Ve(t),ve(),Ce()),r("keyup",t)}function Ze(t){const{value:a}=t.target;if(t.keyCode!==void 0){Ge(t);return}if(t.target.value="",S!==null&&(clearTimeout(S),S=null),C!==null&&(clearTimeout(C),C=null),Ce(),typeof a=="string"&&a.length!==0){const n=a.toLocaleLowerCase(),v=A=>{const L=e.options.find(E=>A.value(E).toLocaleLowerCase()===n);return L===void 0?!1:(o.value.indexOf(L)===-1?fe(L):ve(),!0)},O=A=>{v(G)!==!0&&(v($)===!0||A===!0||ye(a,!0,()=>O(!0)))};O()}else l.clearValue(t)}function et(t){r("keypress",t)}function tt(t){if(r("keydown",t),rl(t)===!0)return;const a=b.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||a===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&n===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){oe(t),we();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&b.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof b.value!="string"||b.value.length===0)&&(oe(t),y.value=-1,Te(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(oe(t),y.value=Math.max(-1,Math.min(K.value,y.value+(t.keyCode===33?-1:1)*le.value.view)),Te(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),Te(t.keyCode===38?-1:1,e.multiple));const v=K.value;if((P===void 0||I<Date.now())&&(P=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){i.value!==!0&&we(t);const O=t.key.toLocaleLowerCase(),A=P.length===1&&P[0]===O;I=Date.now()+1500,A===!1&&(oe(t),P+=O);const L=new RegExp("^"+P.split("").map($e=>Hl.indexOf($e)>-1?"\\"+$e:$e).join(".*"),"i");let E=y.value;if(A===!0||E<0||L.test($.value(e.options[E]))!==!0)do E=mt(E+1,-1,v-1);while(E!==y.value&&(ge.value(e.options[E])===!0||L.test($.value(e.options[E]))!==!0));y.value!==E&&ne(()=>{he(E),X(E),E>=0&&e.useInput===!0&&e.fillInput===!0&&Ee($.value(e.options[E]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&oe(t),y.value>-1&&y.value<v){fe(e.options[y.value]);return}if(a===!0){const O=(A,L)=>{if(L){if(gt(L)!==!0)return}else L=e.newValueMode;if(Oe("",e.multiple!==!0,!0),A==null)return;(L==="toggle"?fe:Ye)(A,L==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),ve())};if(e.onNewValue!==void 0?r("newValue",b.value,O):O(b.value),e.multiple!==!0)return}i.value===!0?be():l.innerLoading.value!==!0&&we()}}function lt(){return _===!0?te.value:N.value!==null&&N.value.contentEl!==null?N.value.contentEl:void 0}function zt(){return lt()}function Ft(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?de.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?de.value.map((t,a)=>w(Pl,{key:"option-"+a,removable:l.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:J.value,onRemove(){t.removeAtIndex(a)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[w("span",{[Se.value===!0?"innerHTML":"textContent"]:R.value})]}function ut(){if(T.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:b.value}):void 0;const t=c.option!==void 0?c.option:n=>w(_l,{key:n.index,...n.itemProps},()=>w(Fl,()=>w(Rl,()=>w("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let a=ke("div",Me.value.map(t));return c["before-options"]!==void 0&&(a=c["before-options"]().concat(a)),Yt(c["after-options"],a)}function _t(t,a){const n=a===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,v={ref:a===!0?M:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:b.value!==void 0?b.value:"",type:"search",...n,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...qt.value};return t!==!0&&_===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),w("input",v)}function nt(t){S!==null&&(clearTimeout(S),S=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),D=!0,H=b.value,l.focused.value!==!0&&(_!==!0||F.value===!0)&&l.focus(),e.onFilter!==void 0&&(S=setTimeout(()=>{S=null,ye(b.value)},e.inputDebounce)))}function Ee(t,a){b.value!==t&&(b.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?r("inputValue",t):C=setTimeout(()=>{C=null,r("inputValue",t)},e.inputDebounce))}function Oe(t,a,n){D=n!==!0,e.useInput===!0&&(Ee(t,!0),(a===!0||n!==!0)&&(H=t),a!==!0&&ye(t))}function ye(t,a,n){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?r("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&D!==!0&&t===$.value(o.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);f!==null&&clearTimeout(f),f=v,r("filter",t,(O,A)=>{(a===!0||l.focused.value===!0)&&f===v&&(clearTimeout(f),typeof O=="function"&&O(),s.value=!1,ne(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?i.value===!0&&ve():i.value===!0?Ne(!0):i.value=!0),typeof A=="function"&&ne(()=>{A(h)}),typeof n=="function"&&ne(()=>{n(h)})}))},()=>{l.focused.value===!0&&f===v&&(clearTimeout(f),l.innerLoading.value=!1,s.value=!1),i.value===!0&&(i.value=!1)})}function It(){return w(Ll,{ref:N,class:m.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&T.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ce.value,onScrollPassive:ue,onBeforeShow:at,onBeforeHide:Mt,onShow:Bt},ut)}function Mt(t){it(t),be()}function Bt(){se()}function Tt(t){Ve(t),M.value!==null&&M.value.focus(),F.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Et(t){Ve(t),ne(()=>{F.value=!1})}function pt(){const t=[w(El,{class:`col-auto ${l.fieldClass.value}`,...g.value,for:l.targetUid.value,dark:q.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:b.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Tt,onBlur:Et},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(w("div",{ref:te,class:m.value+" scroll",style:e.popupContentStyle,...ce.value,onClick:je,onScrollPassive:ue},ut())),w(zl,{ref:Z,modelValue:z.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:Pt,onHide:Rt,onShow:Lt},()=>w("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(F.value===!0?" q-select__dialog--focused":"")},t))}function Pt(t){it(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Rt(t){ve(),l.focused.value===!1&&r("blur",t),Ce()}function Lt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),se()}function be(){z.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(f!==null&&(clearTimeout(f),f=null),l.innerLoading.value===!0&&(r("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function we(t){l.editable.value===!0&&(_===!0?(l.onControlFocusin(t),z.value=!0,ne(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ye(b.value):(T.value!==!0||c["no-option"]!==void 0)&&(i.value=!0))}function ve(){z.value=!1,be()}function Ce(){e.useInput===!0&&Oe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&$.value(o.value[0])||"",!0,!0)}function Ne(t){let a=-1;if(t===!0){if(o.value.length!==0){const n=G.value(o.value[0]);a=e.options.findIndex(v=>ze(G.value(v),n))}j(a)}he(a)}function Ht(t,a){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),ne(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>a?j():Ne(!0))}))}function ot(){z.value===!1&&N.value!==null&&N.value.updatePosition()}function at(t){t!==void 0&&Ve(t),r("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&Ve(t),r("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function rt(){_=x.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||T.value===!1:!0),W=x.platform.is.ios===!0&&_===!0&&e.useInput===!0?"fade":e.transitionShow}return ol(rt),al(ot),rt(),Ue(()=>{S!==null&&clearTimeout(S),C!==null&&clearTimeout(C)}),Object.assign(h,{showPopup:we,hidePopup:ve,removeAtIndex:He,add:Ye,toggleOption:fe,getOptionIndex:()=>y.value,setOptionIndex:he,moveOptionSelection:Te,filter:ye,updateMenuPosition:ot,updateInputValue:Oe,isOptionSelected:Ke,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>G.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:d(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:me,targetRef:M,hasValue:B,showPopup:we,floatingLabel:d(()=>e.hideSelected!==!0&&B.value===!0||typeof b.value=="number"||b.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(z.value===!0||T.value!==!0||c["no-option"]!==void 0))return _===!0?pt():It();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(je(t),_!==!0&&i.value===!0){be(),M.value!==null&&M.value.focus();return}we(t)}},getControl:t=>{const a=Ft(),n=t===!0||z.value!==!0||_!==!0;if(e.useInput===!0)a.push(_t(t,n));else if(l.editable.value===!0){const O=n===!0?Ie.value:void 0;a.push(w("input",{ref:n===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:R.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...O,onKeydown:tt,onKeyup:Ge,onKeypress:et})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(U.value!==void 0&&e.disable!==!0&&Be.value.length!==0){const O=Be.value.map(A=>w("option",{value:A,selected:!0}));a.push(w("select",{class:"hidden",name:U.value,multiple:e.multiple},O))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[w(pe,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:qe.value})]:null}),yt(l)}});export{Ul as Q,Tl as a,Wl as c,Bl as u};
