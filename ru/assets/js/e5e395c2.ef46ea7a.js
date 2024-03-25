"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[8255],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=a,b=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={title:"What is a content blocker?",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-safari/features/content-blockers/content-blockers",id:"adguard-for-safari/features/content-blockers/content-blockers",title:"What is a content blocker?",description:"Content blockers tab",source:"@site/docs/adguard-for-safari/features/content-blockers/content-blockers.md",sourceDirName:"adguard-for-safari/features/content-blockers",slug:"/adguard-for-safari/features/content-blockers/",permalink:"/KnowledgeBase/ru/adguard-for-safari/features/content-blockers/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-safari/features/content-blockers/content-blockers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is a content blocker?",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Filters",permalink:"/KnowledgeBase/ru/adguard-for-safari/features/filters"},next:{title:"AdGuard General",permalink:"/KnowledgeBase/ru/adguard-for-safari/features/content-blockers/adguard-general"}},s={},c=[],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png",alt:"Content blockers tab"})),(0,a.kt)("p",null,"A content blocker is a thematic cluster of filters. Privacy-related filters are included in the content blocker with the corresponding name \u2014 ",(0,a.kt)("em",{parentName:"p"},"AdGuard Privacy"),"."),(0,a.kt)("p",null,"Content Blockers were designed for two reasons: to structure filters and to conform to Apple\u2019s restrictions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/adguard-safari-1-5.html"},"In 2019"),", Apple put limitations on ad blockers for Safari, allowing them to use only 50,000 filtering rules simultaneously. As this number was not enough for an ad blocker to provide a good filtering quality (AdGuard Base Filter alone has 30,000 filtering rules), we divided AdGuard for Safari into six content blockers each containing up to 50,000 rules."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/adguard-for-safari-1-11.html"},"In 2022"),", Apple increased the filtering rule limit for each content blocker to 150,000 rules applied simultaneously. Regarding AdGuard for Safari, up to 900,000 rules can be enabled for all six content blockers."),(0,a.kt)("p",null,"Whereas the limit has been increased, the structure of content blockers has remained the same."),(0,a.kt)("p",null,"In the Content blockers tab, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can manage enabled filters in the Filters tab. In the Content blockers section, you can only see the list of already enabled filters.")))}d.isMDXComponent=!0}}]);