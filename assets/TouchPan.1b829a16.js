import{ac as X,J as m,L as z,av as D,a0 as h,aw as y,F as _,v as C,ax as E,$ as g,C as F}from"./index.2cf10682.js";import{o as L}from"./position-engine.b68752fb.js";const q={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},O=Object.keys(q);q.all=!0;function A(u){const r={};for(const n of O)u[n]===!0&&(r[n]=!0);return Object.keys(r).length===0?q:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const P=["INPUT","TEXTAREA"];function M(u,r){return r.event===void 0&&u.target!==void 0&&u.target.draggable!==!0&&typeof r.handler=="function"&&P.includes(u.target.nodeName.toUpperCase())===!1&&(u.qClonedBy===void 0||u.qClonedBy.indexOf(r.uid)===-1)}function b(u,r,n){const l=E(u);let e,t=l.left-r.event.x,i=l.top-r.event.y,a=Math.abs(t),s=Math.abs(i);const o=r.direction;o.horizontal===!0&&o.vertical!==!0?e=t<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?e=i<0?"up":"down":o.up===!0&&i<0?(e="up",a>s&&(o.left===!0&&t<0?e="left":o.right===!0&&t>0&&(e="right"))):o.down===!0&&i>0?(e="down",a>s&&(o.left===!0&&t<0?e="left":o.right===!0&&t>0&&(e="right"))):o.left===!0&&t<0?(e="left",a<s&&(o.up===!0&&i<0?e="up":o.down===!0&&i>0&&(e="down"))):o.right===!0&&t>0&&(e="right",a<s&&(o.up===!0&&i<0?e="up":o.down===!0&&i>0&&(e="down")));let v=!1;if(e===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,v=!0,e==="left"||e==="right"?(l.left-=t,a=0,t=0):(l.top-=i,s=0,i=0)}return{synthetic:v,payload:{evt:u,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:e,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:a,y:s},offset:{x:t,y:i},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let T=0;var S=X({name:"touch-pan",beforeMount(u,{value:r,modifiers:n}){if(n.mouse!==!0&&m.has.touch!==!0)return;function l(t,i){n.mouse===!0&&i===!0?F(t):(n.stop===!0&&C(t),n.prevent===!0&&_(t))}const e={uid:"qvtp_"+T++,handler:r,modifiers:n,direction:A(n),noop:z,mouseStart(t){M(t,e)&&D(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(M(t,e)){const i=t.target;h(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,i){if(m.is.firefox===!0&&y(u,!0),e.lastEvt=t,i===!0||n.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const o=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&_(o),t.cancelBubble===!0&&C(o),Object.assign(o,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:o}}C(t)}const{left:a,top:s}=E(t);e.event={x:a,y:s,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:s}},move(t){if(e.event===void 0)return;const i=E(t),a=i.left-e.event.x,s=i.top-e.event.y;if(a===0&&s===0)return;e.lastEvt=t;const o=e.event.mouse===!0,v=()=>{l(t,o);let d;n.preserveCursor!==!0&&n.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),L(),e.styleCleanup=p=>{if(e.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),o===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{w(),p()},50):w()}else p!==void 0&&p()}};if(e.event.detected===!0){e.event.isFirst!==!0&&l(t,e.event.mouse);const{payload:d,synthetic:p}=b(t,e,!1);d!==void 0&&(e.handler(d)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&v(),e.event.lastX=d.position.left,e.event.lastY=d.position.top,e.event.lastDir=p===!0?void 0:d.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||o===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){v(),e.event.detected=!0,e.move(t);return}const c=Math.abs(a),f=Math.abs(s);c!==f&&(e.direction.horizontal===!0&&c>f||e.direction.vertical===!0&&c<f||e.direction.up===!0&&c<f&&s<0||e.direction.down===!0&&c<f&&s>0||e.direction.left===!0&&c>f&&a<0||e.direction.right===!0&&c>f&&a>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,i){if(e.event!==void 0){if(g(e,"temp"),m.is.firefox===!0&&y(u,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(b(t===void 0?e.lastEvt:t,e).payload);const{payload:a}=b(t===void 0?e.lastEvt:t,e,!0),s=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(s):s()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(u.__qtouchpan=e,n.mouse===!0){const t=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";h(e,"main",[[u,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[u,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[u,"touchmove","noop","notPassiveCapture"]])},updated(u,r){const n=u.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=A(r.modifiers))},beforeUnmount(u){const r=u.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),g(r,"main"),g(r,"temp"),m.is.firefox===!0&&y(u,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete u.__qtouchpan)}});export{S as T};
