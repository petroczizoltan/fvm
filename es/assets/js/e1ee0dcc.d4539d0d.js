"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2610:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={id:"running_flutter",title:"Ejecutar Flutter",sidebar_position:1},l=void 0,o={unversionedId:"guides/running_flutter",id:"guides/running_flutter",title:"Ejecutar Flutter",description:"Hay algunas formas de interactuar con la configuraci\xf3n del SDK de Flutter. Estos depender\xe1n principalmente de la preferencia.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/guides/running_flutter.md",sourceDirName:"guides",slug:"/guides/running_flutter",permalink:"/es/docs/guides/running_flutter",editUrl:"https://github.com/fluttertools/fvm/edit/main/website/i18n/es/docusaurus-plugin-content-docs/current/guides/running_flutter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"running_flutter",title:"Ejecutar Flutter",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comandos B\xe1sicos",permalink:"/es/docs/guides/basic_commands"},next:{title:"Configura la Versi\xf3n Global",permalink:"/es/docs/guides/global_version"}},s=[{value:"Comandos Proxy",id:"comandos-proxy",children:[{value:"Flutter",id:"flutter",children:[],level:3},{value:"Dart",id:"dart",children:[],level:3},{value:"Beneficios",id:"beneficios",children:[],level:3},{value:"Enrutamiento",id:"enrutamiento",children:[],level:3}],level:2},{value:"Llame Directamente al SDK",id:"llame-directamente-al-sdk",children:[],level:2},{value:"Comando Spawn",id:"comando-spawn",children:[],level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hay algunas formas de interactuar con la configuraci\xf3n del SDK de Flutter. Estos depender\xe1n principalmente de la preferencia."),(0,r.kt)("h2",{id:"comandos-proxy"},"Comandos Proxy"),(0,r.kt)("p",null,"Puede transferir cualquier comando ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"dart")," a la versi\xf3n configurada agregando ",(0,r.kt)("inlineCode",{parentName:"p"},"fvm")," delante."),(0,r.kt)("h3",{id:"flutter"},"Flutter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Usar\n> fvm flutter {command}\n# En vez de\n> flutter {command}\n")),(0,r.kt)("h3",{id:"dart"},"Dart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Usar\n> fvm dart {command}\n# En vez de\n> dart {command}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configure el siguiente alias para una versi\xf3n abreviada del comando"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# alias\nf="fvm flutter"\nd="fvm dart"\n\n# Ahora puedes usar\nf run\n')))),(0,r.kt)("h3",{id:"beneficios"},"Beneficios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Encuentra configuraciones de proyecto relativo."),(0,r.kt)("li",{parentName:"ul"},"Compatibilidad Monorepo."),(0,r.kt)("li",{parentName:"ul"},"Fallback a la versi\xf3n configurada ",(0,r.kt)("inlineCode",{parentName:"li"},"global")," o la configuraci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),".")),(0,r.kt)("h3",{id:"enrutamiento"},"Enrutamiento"),(0,r.kt)("p",null,"Al enviar comandos por proxy, ",(0,r.kt)("inlineCode",{parentName:"p"},"FVM")," buscar\xe1 un SDK en el siguiente orden."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Proyecto"),(0,r.kt)("li",{parentName:"ol"},"Directorio padre"),(0,r.kt)("li",{parentName:"ol"},"Global (Configurado a trav\xe9s de FVM)"),(0,r.kt)("li",{parentName:"ol"},"Enviroment (Versi\xf3n de Flutter configurada en ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),")")),(0,r.kt)("h2",{id:"llame-directamente-al-sdk"},"Llame Directamente al SDK"),(0,r.kt)("p",null,"Las versiones instaladas por FVM son instalaciones est\xe1ndar de Flutter SDK. Eso significa que puede llamarlos directamente sin usar proxy a trav\xe9s de FVM."),(0,r.kt)("p",null,"El uso del enlace simb\xf3lico llamar\xe1 din\xe1micamente a la versi\xf3n configurada para el proyecto."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# flutter run\n.fvm/flutter_sdk/bin/flutter run\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configure el siguiente alias para llamar a la versi\xf3n relativa del proyecto, sin necesidad de proxy."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'fv=".fvm/flutter_sdk/bin/flutter"\n')))),(0,r.kt)("h2",{id:"comando-spawn"},"Comando Spawn"),(0,r.kt)("p",null,"Ejecuta un comando en cualquier SDK de Flutter instalado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fvm spawn {version}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplo")),(0,r.kt)("p",null,"Lo siguiente ejecutar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter analyze")," en el canal ",(0,r.kt)("inlineCode",{parentName:"p"},"master")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fvm spawn master analyze\n")))}u.isMDXComponent=!0}}]);