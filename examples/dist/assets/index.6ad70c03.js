import{d as o}from"./demo-block.a7a4fbdb.js";import{_ as h,r as c,c as k,d as g,h as t,i as r,f as e,al as a,g as l,t as v,U as I,q as w,s as S}from"./index.a7dd04f1.js";const B=n=>(w("data-v-70b2cbbb"),n=n(),S(),n),C={style:{display:"flex","justify-content":"space-between"}},U={style:{display:"flex","justify-content":"space-between"}},j={class:"rate-num"},q={class:"diy-content"},z=B(()=>l("div",null,"\u5F55\u97F3\u4E2D",-1)),D={__name:"index",setup(n){const x={"0%":"#3fecff","100%":"#6149f6"},d=c(0),_=c(0);let f=null;const s=c(0),i=c(0);function b(){f=setInterval(()=>{s.value++,s.value%60===0&&(i.value++,s.value=0),_.value=((i.value*60+s.value)/3).toFixed(1)},1e3)}const u=c(!1);function m(){u.value=!u.value,u.value?b():clearInterval(f)}return(F,p)=>(k(),g("div",null,[t(o,{title:"\u57FA\u672C\u4F7F\u7528"},{default:r(()=>[t(e(a),{text:"30%","current-rate":30})]),_:1}),t(o,{title:"\u4FEE\u6539\u989C\u8272"},{default:r(()=>[t(e(a),{color:"#07c160","current-rate":30})]),_:1}),t(o,{title:"\u4FEE\u6539\u8F68\u9053\u989C\u8272"},{default:r(()=>[t(e(a),{color:"#07c160","layer-color":"#3fecff","current-rate":30})]),_:1}),t(o,{title:"\u6E10\u53D8\u8272"},{default:r(()=>[t(e(a),{"current-rate":30,color:x})]),_:1}),t(o,{title:"\u9006\u65F6\u9488"},{default:r(()=>[t(e(a),{clockwise:!1,"current-rate":30})]),_:1}),t(o,{title:"\u4FEE\u6539\u5BBD\u5EA6"},{default:r(()=>[t(e(a),{"stroke-width":60,"current-rate":30})]),_:1}),t(o,{title:"\u4FEE\u6539\u5927\u5C0F"},{default:r(()=>[t(e(a),{text:"120px",size:"120","current-rate":30})]),_:1}),t(o,{title:"\u8D77\u59CB\u4F4D\u7F6E"},{default:r(()=>[l("div",C,[t(e(a),{text:"\u5DE6\u8FB9","start-position":"left","current-rate":70}),t(e(a),{text:"\u53F3\u8FB9","start-position":"right","current-rate":70}),t(e(a),{text:"\u5E95\u90E8","start-position":"bottom","current-rate":70})])]),_:1}),t(o,{title:"\u8FDB\u5EA6\u6761\u7AEF\u70B9\u5F62\u72B6"},{default:r(()=>[l("div",U,[t(e(a),{text:"\u9ED8\u8BA4","stroke-linecap":"butt","current-rate":70}),t(e(a),{text:"\u6B63\u65B9\u5F62","stroke-linecap":"square","current-rate":70}),t(e(a),{text:"\u5706\u578B","stroke-linecap":"round","current-rate":70})])]),_:1}),t(o,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{default:r(()=>[l("div",j,v(i.value)+":"+v(s.value),1),l("div",{class:"diy-bg",onClick:m},[t(e(a),{"current-rate":d.value,"onUpdate:currentRate":p[0]||(p[0]=y=>d.value=y),rate:_.value,speed:80,"layer-color":"none",color:"#1ba082"},{default:r(()=>[l("div",q,[t(e(I),{name:"notice",size:"32",color:"#fff"}),z])]),_:1},8,["current-rate","rate"])])]),_:1})]))}},V=h(D,[["__scopeId","data-v-70b2cbbb"]]);export{V as default};
