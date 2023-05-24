"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[178],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(4137));const o={title:"How do I create templates?"},i=void 0,p={unversionedId:"faq/create-template",id:"faq/create-template",title:"How do I create templates?",description:"The azd template has this file structure defined by azd conventions",source:"@site/docs/1-faq/5-create-template.md",sourceDirName:"1-faq",slug:"/faq/create-template",permalink:"/awesome-azd/docs/faq/create-template",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How do I create templates?"},sidebar:"docs",previous:{title:"How do I discover one?",permalink:"/awesome-azd/docs/faq/discover-azd"},next:{title:"How do I contribute templates?",permalink:"/awesome-azd/docs/faq/contribute-template"}},c={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"azd template")," has this file structure defined ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/make-azd-compatible?source=recommendations&pivots=azd-create#azd-conventions"},"by azd conventions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"\u251c\u2500\u2500 .devcontainer              [ For DevContainer ]\n\u251c\u2500\u2500 .github/.azdo              [ Configure GitHub workflow or Azure Pipelines ]\n\u251c\u2500\u2500 .vscode                    [ VS Code workspace configurations ]\n\u251c\u2500\u2500 infra                      [ Creates and configures Azure resources ]\n\u2502   \u251c\u2500\u2500 main.bicep/main.tf     [ Main infrastructure file ]\n\u2502   \u251c\u2500\u2500 main.parameters.json/  [ Parameters file ]\n        main.tfvars.json   \n\u251c\u2500\u2500 src                        [ Contains directories for the app code ]\n\u2514\u2500\u2500 azure.yaml                 [ Describes the app and type of Azure resources]\n")),(0,a.kt)("p",null,"The Azure Developer CLI (azd) tool helps you with the process of ",(0,a.kt)("em",{parentName:"p"},"creating")," the template with ",(0,a.kt)("inlineCode",{parentName:"p"},"azd init")," as the first step, followed by creation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"infra/")," folder, updating of the ",(0,a.kt)("inlineCode",{parentName:"p"},"azure.yaml")," file, and validation of template using ",(0,a.kt)("inlineCode",{parentName:"p"},"azd up")," to provision and deploy resources."),(0,a.kt)("admonition",{title:"READ THE DOCS",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/azure-dev/enabletemplateworkflow.png"},"making your codebase ",(0,a.kt)("inlineCode",{parentName:"a"},"azd"),"compatible"))))}u.isMDXComponent=!0}}]);