"use strict";(self.webpackChunkcodex_arcadia=self.webpackChunkcodex_arcadia||[]).push([[2630],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>f});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),i=function(e){var a=t.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):n(n({},a),e)),r},m=function(e){var a=i(e.components);return t.createElement(d.Provider,{value:a},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(r),p=o,f=u["".concat(d,".").concat(p)]||u[p]||l[p]||s;return r?t.createElement(f,n(n({ref:a},m),{},{components:r})):t.createElement(f,n({ref:a},m))}));function f(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=p;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c[u]="string"==typeof e?e:o,n[1]=c;for(var i=2;i<s;i++)n[i]=r[i];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2969:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(7294);function o(e){let{children:a,color:r}=e;return t.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem",margin:"2px"}},a)}},4564:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(7294),o=r(2969);function s(e){return"raro"==e.toLowerCase()?"#DAA520":"incomum"==e.toLowerCase()?"#49a8ab":"#5c5c5c"}function n(e){return"gem-tech"==e.toLowerCase()||"gemtech"==e.toLowerCase()?t.createElement(o.Z,{color:"#4d9e96"},e.toUpperCase()):"arma"==e.toLowerCase()||"rubi"==e.toLowerCase()?t.createElement(o.Z,{color:"#ff2b2b"},e.toUpperCase()):"defesa"==e.toLowerCase()||"onyx"==e.toLowerCase()?t.createElement(o.Z,{color:"#333333"},e.toUpperCase()):"armadilhas"==e.toLowerCase()||"pedra de sangue"==e.toLowerCase()?t.createElement(o.Z,{color:"#700808"},e.toUpperCase()):"condutores"==e.toLowerCase()||"mapas estelares"==e.toLowerCase()||"safira"==e.toLowerCase()?t.createElement(o.Z,{color:"#4181ba"},e.toUpperCase()):"data-core"==e.toLowerCase()||"esmeralda"==e.toLowerCase()?t.createElement(o.Z,{color:"#50c878"},e.toUpperCase()):"camuflagem"==e.toLowerCase()||"ametista"==e.toLowerCase()?t.createElement(o.Z,{color:"#9966cc"},e.toUpperCase()):"mobilidade"==e.toLowerCase()||"pedra lunar"==e.toLowerCase()?t.createElement(o.Z,{color:"#491c75"},e.toUpperCase()):"ferramentas"==e.toLowerCase()||"bismuto"==e.toLowerCase()?t.createElement(o.Z,{color:"#99b7b1"},e.toUpperCase()):"luz"==e.toLowerCase()||"ambar"==e.toLowerCase()?t.createElement(o.Z,{color:"#ffbf00"},e.toUpperCase()):"mechbeasts"==e.toLowerCase()||"topazio"==e.toLowerCase()?t.createElement(o.Z,{color:"#ffc87c"},e.toUpperCase()):t.createElement(o.Z,{color:"#5c5c5c"},e.toUpperCase())}function c(e){let{children:a,nome:r,raridade:c,tags:d,recursos:i,recursos_especiais:m}=e;var u=d.split(",");return t.createElement("div",{style:{borderStyle:"solid",borderColor:s(c),borderRadius:"7px",padding:"15px",marginBottom:"20px"}},t.createElement("h2",null,r," ",t.createElement(o.Z,{color:s(c)},c.toUpperCase()),u.map(n)),t.createElement("div",{style:{fontSize:"14pt"}},a),t.createElement("hr",null),t.createElement("div",null,t.createElement("b",null,"Recursos Necess\xe1rios:")," ",i,"   |   ",t.createElement("b",null,"Custo em Quartzos:")," ",function(e){return 11*e}(i)),function(e){if(null!=e&&""!=e)return t.createElement("div",null,t.createElement("br",null),t.createElement("b",null,"Recursos Especiais:")," ",e)}(m))}},8900:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>m});var t=r(7462),o=(r(7294),r(3905)),s=r(4564);const n={slug:"/defesa"},c="Defesas",d={unversionedId:"itens/Defesas",id:"itens/Defesas",title:"Defesas",description:"",source:"@site/docs/itens/Defesas.mdx",sourceDirName:"itens",slug:"/defesa",permalink:"/Codex_Arcadia/docs/defesa",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/itens/Defesas.mdx",tags:[],version:"current",frontMatter:{slug:"/defesa"},sidebar:"tutorialSidebar",previous:{title:"Armas",permalink:"/Codex_Arcadia/docs/armas"},next:{title:"Metais",permalink:"/Codex_Arcadia/docs/metais"}},i={},m=[{value:"Defesas Comuns",id:"defesas-comuns",level:2},{value:"Defesas Incomuns",id:"defesas-incomuns",level:2},{value:"Defesas Raras",id:"defesas-raras",level:2}],u={toc:m};function l(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defesas"},"Defesas"),(0,o.kt)("p",null,"Armaduras e escudos que servem para proteger o usu\xe1rio dessas ferramentas de batalhas."),(0,o.kt)("h2",{id:"defesas-comuns"},"Defesas Comuns"),(0,o.kt)(s.Z,{nome:"Armadura de Tecido",raridade:"comum",tags:"Defesa",recursos:"15",recursos_especiais:"",mdxType:"ItemCard"},"Uma simples armadura feita com tecidos para especiais para prote\xe7\xe3o, mas ainda assim s\xe3o tecidos.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Quando equipado voc\xea recebe +3 de Armadura M\xe1xima."),(0,o.kt)(s.Z,{nome:"Armadura Meteorita",raridade:"comum",tags:"Defesa",recursos:"20",recursos_especiais:"",mdxType:"ItemCard"},"Uma armadura feita com placas met\xe1licas, colocadas de forma a permitir uma maior prote\xe7\xe3o em troca de mobilidade;",(0,o.kt)("br",null),(0,o.kt)("br",null),"Quando equipado, voc\xea recebe +7 de Armadura M\xe1xima, e -1 de velocidade."),(0,o.kt)(s.Z,{nome:"Escudo de Energia",raridade:"comum",tags:"Defesa,Onyx,Gem-tech",recursos:"20",recursos_especiais:"",mdxType:"ItemCard"},"Uma manopla que projeta energia em forma circular para proteger a voc\xea e um aliado.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Voc\xea pode usar 1 de energia para ativar, voc\xea recebe +2 de armadura e um aliado adjacente a voc\xea recebe +1 de armadura."),(0,o.kt)(s.Z,{nome:"Escudo de Meteorita",raridade:"comum",tags:"Defesa",recursos:"20",recursos_especiais:"",mdxType:"ItemCard"},"Um pequeno escudo de metal, feito para absorver impactos. Voc\xea pode gastar 1 de energia para levantar o escudo e receber +2 de Armadura M\xe1xima."),(0,o.kt)("h2",{id:"defesas-incomuns"},"Defesas Incomuns"),(0,o.kt)(s.Z,{nome:"Armadura com Turbinas",raridade:"incomum",tags:"Defesa,Onyx,Pedra Lunar,Gem-tech",recursos:"45",recursos_especiais:"",mdxType:"ItemCard"},"Uma armadura feita com pe\xe7as de gem-tech acoplada com pequenas turbinas para acelerar a movimenta\xe7\xe3o no campo de batalha.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Ao equipar esse item voc\xea recebe +1 de Velocidade e +5 de Armadura M\xe1xima."),(0,o.kt)(s.Z,{nome:"Armadura de Ferro Negro",raridade:"incomum",tags:"Defesa,Onyx,Ametista,Gem-tech",recursos:"45",recursos_especiais:"Ferro Negro",mdxType:"ItemCard"},"Uma armadura met\xe1lica, por\xe9m com menos metal para permitir mobilidade, feita de um mineral \xfanico para garantir a furtividade.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Quando equipado recebe +3 de Armadura m\xe1xima e testes de furtividade possuem vantagem."),(0,o.kt)(s.Z,{nome:"Botas de Magnetita",raridade:"incomum",tags:"Defesa,Onyx,Pedra Lunar,Gem-tech",recursos:"45",recursos_especiais:"Magnetita",mdxType:"ItemCard"},"Botas met\xe1licas feitas para grudarem em superf\xedcies met\xe1licas com facilidade.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Quando equipadas voc\xea recebe +2 de armadura m\xe1xima. Voc\xea pode gastar 1 de energia para ativar o magnetismo e andar sobre superf\xedcies met\xe1licas sem penalidades."),(0,o.kt)(s.Z,{nome:"Escudo de Magnetita",raridade:"incomum",tags:"Defesa,Onyx,Ambar,Gem-tech",recursos:"45",recursos_especiais:"Magnetita",mdxType:"ItemCard"},"Uma manopla que produz uma barreira de energia magn\xe9tica para te proteger de ataques. Quando equipado voc\xea pode gastar 1 de energia, de 1 a 6 pontos de Recursos para ativar a habilidade desse item. Para cada ponto de recurso gasto voc\xea recebe 1 de Armadura."),(0,o.kt)("h2",{id:"defesas-raras"},"Defesas Raras"),(0,o.kt)(s.Z,{nome:"Armadura Ir\xeddio",raridade:"raro",tags:"Defesa,Onyx,Gem-tech",recursos:"75",recursos_especiais:"Ir\xeddio",mdxType:"ItemCard"},"Uma armadura surpreendentemente resistente e leve. Ao equipar voc\xea recebe +15 de Armadura M\xe1xima."),(0,o.kt)(s.Z,{nome:"Escudo de Energun",raridade:"raro",tags:"Defesa,Onyx,Gem-tech",recursos:"75",recursos_especiais:"Energun",mdxType:"ItemCard"},"Um poderoso escudo de energia que se projeta de forma a parecer uma parede de energia. Voc\xea pode gastar 1 de energia, ao fazer isso voc\xea recebe 4 de Armadura e voc\xea e todos os personagens na mesma zona que voc\xea recebem vantagem em testes de defesa."),(0,o.kt)(s.Z,{nome:"Escudo Reflexivo",raridade:"raro",tags:"Defesa,Onyx,Safira,Gem-tech",recursos:"75",recursos_especiais:"Prata, Vidrica",mdxType:"ItemCard"},"Um escudo feito de Prata e Vidrica, com uma estranha propriedade reflexiva. Voc\xea pode gastar 1 de energia para levantar o escudo e receber 3 de armadura. Ao ser atacado com o escudo levantado, caso passe no teste de defesa, voc\xea reflete o ataque contra o alvo que o atacou."))}l.isMDXComponent=!0}}]);