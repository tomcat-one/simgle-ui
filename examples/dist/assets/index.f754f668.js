import{d as i}from"./demo-block.a7a4fbdb.js";import{r as a,c as g,d as k,h as e,i as t,g as x,t as B,f as n,j as d,k as p,W as f,T as C}from"./index.a7dd04f1.js";const T={__name:"index",setup(y){const s=a(null),o=a(null),b=()=>{s.value.open()},h=()=>{o.value.open()},c=a(null),L=l=>{console.log(l),c.value=l},u=a(!1),_=l=>{if(u.value)return;console.log(l);const v=C({message:"\u52A0\u8F7D\u4E2D",type:"loading",duration:0});setTimeout(()=>{r.value[0].children=[{value:"1-1",label:"Level1-1"},{value:"1-2",label:"Level1-2"},{value:"1-3",label:"Level1-3"}],v.clear(),u.value=!0},2e3)},m=[{value:"1",label:"Level1",children:[{value:"1-1",label:"Level1-1",children:[{value:"1-1-1",label:"Level1-1-1"}]},{value:"1-2",label:"Level1-2"},{value:"1-3",label:"Level1-3"}]},{value:"2",label:"Level2",children:[{value:"2-1",label:"Level2-1",children:[{value:"2-1-1",label:"Level2-1-1"}]},{value:"2-2",label:"Level2-2",children:[{value:"2-2-1",label:"Level2-2-1"}]}]}],r=a([{value:"1",label:"Level1",children:[]}]);return(l,v)=>(g(),k("div",null,[e(i,{title:"\u57FA\u672C\u4F7F\u7528"},{default:t(()=>[x("div",null,B(c.value),1),e(n(d),{onClick:b},{default:t(()=>[p(" \u6253\u5F00 ")]),_:1}),e(n(f),{ref_key:"cascaderRef",ref:s,list:m,"popup-props":{title:"\u8BF7\u9009\u62E9\u6570\u636E"},onFinish:L},null,512)]),_:1}),e(i,{title:"\u5F02\u6B65\u52A0\u8F7D"},{default:t(()=>[e(n(d),{onClick:h},{default:t(()=>[p(" \u6253\u5F00 ")]),_:1}),e(n(f),{ref_key:"cascaderRef1",ref:o,list:r.value,"popup-props":{title:"\u8BF7\u9009\u62E9\u6570\u636E"},onChange:_},null,8,["list"])]),_:1})]))}};export{T as default};
