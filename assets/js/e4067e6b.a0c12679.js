"use strict";(self.webpackChunkcodex_arcadia=self.webpackChunkcodex_arcadia||[]).push([[3801],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>g});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),m=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},u=function(e){var a=m(e.components);return t.createElement(d.Provider,{value:a},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=m(o),p=r,g=l["".concat(d,".").concat(p)]||l[p]||c[p]||s;return o?t.createElement(g,n(n({ref:a},u),{},{components:o})):t.createElement(g,n({ref:a},u))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=o.length,n=new Array(s);n[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[l]="string"==typeof e?e:r,n[1]=i;for(var m=2;m<s;m++)n[m]=o[m];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3980:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var t=o(7462),r=(o(7294),o(3905));const s={sidebar_position:1,slug:"/testes"},n="Testes",i={unversionedId:"mecanicas-principais/Teste",id:"mecanicas-principais/Teste",title:"Testes",description:"Sempre que uma a\xe7\xe3o possuir algum tipo de risco e o jogador possuir alguma chance de falha, deve ser feito um teste. os testes seguem os passos:",source:"@site/docs/mecanicas-principais/01_Teste.md",sourceDirName:"mecanicas-principais",slug:"/testes",permalink:"/Codex_Arcadia/testes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mecanicas-principais/01_Teste.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/testes"},sidebar:"tutorialSidebar",previous:{title:"Mec\xe2nicas Principais",permalink:"/Codex_Arcadia/category/mec\xe2nicas-principais"},next:{title:"M\xe9tricas",permalink:"/Codex_Arcadia/cenas"}},d={},m=[{value:"Vantagens e Desvantagens",id:"vantagens-e-desvantagens",level:2},{value:"C\xedticos",id:"c\xedticos",level:2},{value:"Sistema de Oposi\xe7\xe3o",id:"sistema-de-oposi\xe7\xe3o",level:2}],u={toc:m};function l(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testes"},"Testes"),(0,r.kt)("p",null,"Sempre que uma a\xe7\xe3o possuir algum tipo de risco e o jogador possuir alguma chance de falha, deve ser feito um teste. os testes seguem os passos: "),(0,r.kt)("admonition",{title:"Passos do Teste",type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"O narrador define um valor alvo"),(0,r.kt)("li",{parentName:"ol"},"O Personagem negocia com o Narrador qual das habilidades vai utilizar."),(0,r.kt)("li",{parentName:"ol"},"O Personagem rola 1 dado de 20 lados + 1 dado indicado pela habilidade utilizada pelo teste."),(0,r.kt)("li",{parentName:"ol"},"O Personagem soma os valores rolados."),(0,r.kt)("li",{parentName:"ol"},"Caso o valor final seja igual ou maior que o valor alvo, o personagem passou no teste e o narrador descreve como o resultado desejado foi atingido."),(0,r.kt)("li",{parentName:"ol"},"Caso o valor final seja menor que o valor alvo, o personagem falhou no teste e o narrador descreve como o resultado desejado n\xe3o foi obtido."))),(0,r.kt)("h2",{id:"vantagens-e-desvantagens"},"Vantagens e Desvantagens"),(0,r.kt)("p",null,"Em algumas situa\xe7\xf5es o personagem pode ter vantagens no seu teste. A vantagem pode ser conseguida como uma vantagem cinematogr\xe1fica, onde algo na cena confere ao personagem realizando o teste alguma vantagem. Quando um personagem possui vantagem o teste \xe9 feito rolando 2 dados de habilidade, somando no valor final do teste apenas o dado que rolou o maior valor."),(0,r.kt)("p",null,"Opostamente ao caso anterior personagens podem ter desvantagens. Isso pode acontecer por conta do personagem realizando o teste ter alguma desvantagem que se aplique no teste ou ter alguma desvantagem cinematogr\xe1fica, onde algo na cena causa a desvantagem. Quando um personagem possui desvantagem o teste \xe9 feito rolando 2 dados de habilidade, somando no valor final do teste apenas o dado que rolou o menor valor."),(0,r.kt)("p",null,"Se o personagem recebe desvantagem numa situa\xe7\xe3o que possui vantagem, primeiro se reduz o total de vantagem at\xe9 zerar e ent\xe3o come\xe7a a somar as desvantagens. O mesmo ocorre se o personagem possuir desvantagens e come\xe7ar a acumular vantagens"),(0,r.kt)("p",null,"Caso o personagem possua n\xfameros iguais de vantagens e desvantagens, o teste \xe9 simplesmente feito com 1d20 + 1 dado de Habilidade, se n\xe3o se utiliza o que possuir o maior n\xfamero, vantagens ou desvantagens."),(0,r.kt)("p",null,"Independente de valor de total de vantagens ou desvantagens, o personagem sempre rola apenas 1d6 para todos os casos."),(0,r.kt)("admonition",{title:"Conseguindo Vantagens",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para conseguir vantagem o jogador pode usar algo da cena para pedir vantagem, como usar uma mesa virada para se defender de ataques ou usar um terreno mais alto para se mover mais facilmente."),(0,r.kt)("p",{parentName:"admonition"},"Outro jeito de conseguir o vantagem seria utilizar um tra\xe7o. Todos os tra\xe7os possuem uma descri\xe7\xe3o sobre o que o define, no que pessoas com aquele tra\xe7o s\xe3o boas e quais a suas habilidades. Em qualquer teste o jogador pode argumentar do porque um de seus tra\xe7os pode ser aplicado e, se o narrador aceitar os argumentos, o jogador pode fazer o teste com vantagem."),(0,r.kt)("p",{parentName:"admonition"},"A mesma regra de argumenta\xe7\xe3o pode ser feita usando La\xe7os e Passado do personagem, em qualquer momento o jogador pode argumentar de como seus la\xe7os e seu passado afeta o teste atual e caso narrador aceite o teste \xe9 feito com vantagem."),(0,r.kt)("p",{parentName:"admonition"},"Da mesma forma que podem gerar vantagem, o narrador pode usar Tra\xe7os, La\xe7os, Passado e Condi\xe7\xf5es Permanentes para gerar desvantagem para o personagem.")),(0,r.kt)("h2",{id:"c\xedticos"},"C\xedticos"),(0,r.kt)("p",null,"Sempre que rolar 20 no 1d20, ou superar o valor alvo em 5 pontos ou mais, se \xe9 considerado um acerto cr\xedtico \xe9 o Narrador inclui algum efeito positivo adicional para quem realizou o teste, como causar um dano adicional ou algum efeito extra. Alguns itens descrevem efeitos adicionais que ocorrem com acertos cr\xedticos."),(0,r.kt)("p",null,"Caso personagem role 1 no 1d20, \xe9 considerado uma falha cr\xedtica. Nesse caso o Narrador inclui algum efeito negativo para quem n\xe3o passou no teste, al\xe9m de n\xe3o conseguir realizar a a\xe7\xe3o. 1 no 1d20 \xe9 sempre uma falha. Em caso de falhas cr\xedticas o personagem recupera uma fa\xe7anha j\xe1 gasta."),(0,r.kt)("h2",{id:"sistema-de-oposi\xe7\xe3o"},"Sistema de Oposi\xe7\xe3o"),(0,r.kt)("p",null,"Esse \xe9 um sistema de oposi\xe7\xe3o, logo apenas os PJs realizam testes e o narrador apenas define os valores alvos. Vantagens para inimigos e desvantagens para jogadores e vice-versa. Erro cr\xedtico dos jogadores pode ser considerado acerto cr\xedtico do inimigo."))}l.isMDXComponent=!0}}]);