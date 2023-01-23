"use strict";(self.webpackChunkcodex_arcadia=self.webpackChunkcodex_arcadia||[]).push([[4895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||n;return r?a.createElement(f,s(s({ref:t},m),{},{components:r})):a.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2969:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);function o(e){let{children:t,color:r}=e;return a.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem",margin:"2px"}},t)}},4564:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7294),o=r(2969);function n(e){return"raro"==e.toLowerCase()?"#DAA520":"incomum"==e.toLowerCase()?"#49a8ab":"#5c5c5c"}function s(e){return"gem-tech"==e.toLowerCase()||"gemtech"==e.toLowerCase()?a.createElement(o.Z,{color:"#4d9e96"},e.toUpperCase()):"arma"==e.toLowerCase()||"rubi"==e.toLowerCase()?a.createElement(o.Z,{color:"#ff2b2b"},e.toUpperCase()):"defesa"==e.toLowerCase()||"onyx"==e.toLowerCase()?a.createElement(o.Z,{color:"#333333"},e.toUpperCase()):"armadilhas"==e.toLowerCase()||"pedra de sangue"==e.toLowerCase()?a.createElement(o.Z,{color:"#700808"},e.toUpperCase()):"condutores"==e.toLowerCase()||"mapas estelares"==e.toLowerCase()||"safira"==e.toLowerCase()?a.createElement(o.Z,{color:"#4181ba"},e.toUpperCase()):"data-core"==e.toLowerCase()||"esmeralda"==e.toLowerCase()?a.createElement(o.Z,{color:"#50c878"},e.toUpperCase()):"camuflagem"==e.toLowerCase()||"ametista"==e.toLowerCase()?a.createElement(o.Z,{color:"#9966cc"},e.toUpperCase()):"mobilidade"==e.toLowerCase()||"pedra lunar"==e.toLowerCase()?a.createElement(o.Z,{color:"#491c75"},e.toUpperCase()):"ferramentas"==e.toLowerCase()||"bismuto"==e.toLowerCase()?a.createElement(o.Z,{color:"#99b7b1"},e.toUpperCase()):"luz"==e.toLowerCase()||"ambar"==e.toLowerCase()?a.createElement(o.Z,{color:"#ffbf00"},e.toUpperCase()):"mechbeasts"==e.toLowerCase()||"topazio"==e.toLowerCase()?a.createElement(o.Z,{color:"#ffc87c"},e.toUpperCase()):a.createElement(o.Z,{color:"#5c5c5c"},e.toUpperCase())}function c(e){let{children:t,nome:r,raridade:c,tags:i,recursos:l,recursos_especiais:m}=e;var u=i.split(",");return a.createElement("div",{style:{borderStyle:"solid",borderColor:n(c),borderRadius:"7px",padding:"15px",marginBottom:"20px"}},a.createElement("h2",null,r," ",a.createElement(o.Z,{color:n(c)},c.toUpperCase()),u.map(s)),a.createElement("div",{style:{fontSize:"14pt"}},t),a.createElement("hr",null),a.createElement("div",null,a.createElement("b",null,"Recursos Necess\xe1rios:")," ",l,"   |   ",a.createElement("b",null,"Custo em Quartzos:")," ",function(e){return 11*e}(l)),function(e){if(null!=e&&""!=e)return a.createElement("div",null,a.createElement("br",null),a.createElement("b",null,"Recursos Especiais:")," ",e)}(m))}},2740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=r(7462),o=(r(7294),r(3905)),n=r(4564);const s={slug:"/vestimentas"},c="Vestimentas",i={unversionedId:"itens/Vestimentas",id:"itens/Vestimentas",title:"Vestimentas",description:"",source:"@site/docs/itens/Vestimentas.mdx",sourceDirName:"itens",slug:"/vestimentas",permalink:"/Codex_Arcadia/docs/vestimentas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/itens/Vestimentas.mdx",tags:[],version:"current",frontMatter:{slug:"/vestimentas"},sidebar:"tutorialSidebar",previous:{title:"Metais",permalink:"/Codex_Arcadia/docs/metais"},next:{title:"Magia",permalink:"/Codex_Arcadia/docs/category/magia"}},l={},m=[{value:"Vestimentas Comuns",id:"vestimentas-comuns",level:2},{value:"Vestimentas Incomuns",id:"vestimentas-incomuns",level:2},{value:"Vestimentas Raras",id:"vestimentas-raras",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vestimentas"},"Vestimentas"),(0,o.kt)("p",null,"Vestimentas s\xe3o roupas que um personagem pode usar para conseguir defesa, acesso f\xe1cil para certos tipos de itens e espa\xe7os de mochila."),(0,o.kt)("h2",{id:"vestimentas-comuns"},"Vestimentas Comuns"),(0,o.kt)(n.Z,{nome:"Roupas Simples",raridade:"comum",tags:"Vestimenta",recursos:"10",recursos_especiais:"",mdxType:"ItemCard"},"Quando equipado, voc\xea recebe 1 de Defesa M\xe1xima."),(0,o.kt)("h2",{id:"vestimentas-incomuns"},"Vestimentas Incomuns"),(0,o.kt)("h2",{id:"vestimentas-raras"},"Vestimentas Raras"))}p.isMDXComponent=!0}}]);