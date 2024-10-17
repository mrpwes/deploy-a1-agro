import{u as p,o as d,c as w,a as t,d as a,w as i,e as s,n as m,Q as r,f as l,g as c}from"./index.15824037.js";import{Q as u}from"./QInput.97164f39.js";import{_}from"./logo.0a83e219.js";import"./use-key-composition.28aa7500.js";import"./focus-manager.8e091e03.js";const g={class:"tw-flex tw-mx-auto tw-h-screen tw-my-auto tw-w-max"},x=t("div",{class:"tw-min-w-min tw-flex tw-my-auto tw-p-2 tw-bg-primary"},[t("div",{class:"tw-flex tw-mb-24 tw-mr-32"},[t("img",{src:_,class:"tw-size-32"}),t("div",{class:"tw-my-auto tw-pl-3 tw-text-2xl"},[l(" A1 Agro Fertilizer "),t("br"),l("and Chemical Supply ")])])],-1),b={class:"tw-w-auto tw-my-auto"},y={class:"tw-flex tw-p-3"},f=t("div",{class:"tw-w-24"},null,-1),h={class:"tw-m-3 tw-bg-gray-100 tw-shadow-lg tw-mx-auto tw-rounded-3xl"},v=t("div",{class:"tw-text-center tw-text-3xl tw-p-4"},"Sign In",-1),V={class:"tw-p-3 tw-rounded-3xl tw-bg-neutral-300 tw-center tw-mx-5 tw-mb-3"},C={class:"tw-rounded-3xl tw-bg-neutral-300 tw-center tw-p-3 tw-mx-5"},k=t("div",null,"PASSWORD",-1),A={key:0,class:"tw-mx-auto tw-w-max tw-text-center"},O={key:0,class:"tw-bg-red-200 tw-border tw-border-red-500 tw-px-2 tw-py-1 tw-mt-2"},L=t("text",{class:"tw-font-bold"},"Wrong Credentials",-1),S=t("br",null,null,-1),B={class:"tw-text-lg tw-text-center tw-p-3"},E=t("div",{class:"tw-h-24"},null,-1),W={__name:"LoginPage",setup(I){const e=p();return(N,o)=>(d(),w("div",g,[x,t("div",b,[t("div",y,[a(r,{onClick:o[0]||(o[0]=n=>s(e).loginOption="employee"),class:m([{"bg-secondary":s(e).loginOption==="employee","tw-bg-grey":s(e).loginOption==="admin"},"tw-normal-case tw-rounded-full"])},{default:i(()=>[l("Employee Login")]),_:1},8,["class"]),a(r,{onClick:o[1]||(o[1]=n=>s(e).loginOption="admin"),class:m([{"tw-bg-grey":s(e).loginOption==="employee","bg-secondary":s(e).loginOption==="admin"},"tw-mx-4 tw-normal-case tw-rounded-full"])},{default:i(()=>[l("Admin Login")]),_:1},8,["class"]),f]),t("div",h,[v,t("div",V,[l(" EMAIL "),a(u,{borderless:"",class:"tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white tw-mt-1",dense:"dense",modelValue:s(e).email,"onUpdate:modelValue":o[2]||(o[2]=n=>s(e).email=n)},null,8,["modelValue"])]),t("div",C,[k,a(u,{borderless:"",class:"tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white tw-mt-1",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=n=>s(e).password=n),dense:"dense",type:"password"},null,8,["modelValue"])]),s(e).error?(d(),w("div",A,[(s(e).errorMessage="Invalid login credentials")?(d(),w("p",O,[L,S,l(" Email or password ")])):c("",!0)])):c("",!0),t("div",B,[a(r,{class:"tw-bottom-1 tw-rounded-3xl tw-px-7 bg-secondary tw-normal-case",onClick:s(e).handleLogin,disable:s(e).loading},{default:i(()=>[l("Login")]),_:1},8,["onClick","disable"])])]),E])]))}};export{W as default};