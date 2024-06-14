"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7932],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,g=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const l={title:"How to report websites and apps",sidebar_position:3},i=void 0,o={unversionedId:"guides/report-website",id:"guides/report-website",title:"How to report websites and apps",description:"\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3001\u7279\u5b9a\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u8981\u7d20\u304c\u5d29\u308c\u305f\u308a\u30fb\u304a\u304b\u3057\u304f\u306a\u3063\u305f\u308a\u30fb\u58ca\u308c\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u554f\u984c\u306f\u3001\u4ee5\u4e0b\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u8981\u56e0\u3067\u767a\u751f\u3057\u305f\u308a\u3057\u307e\u3059:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/report-website.md",sourceDirName:"guides",slug:"/guides/report-website",permalink:"/KnowledgeBase/ja/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to report websites and apps",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u30d7\u30ed\u30ad\u30b7\u8a3c\u660e\u66f8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",permalink:"/KnowledgeBase/ja/guides/proxy-certificate"},next:{title:"\u30d0\u30b0\u30fb\u4e0d\u5177\u5408\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",permalink:"/KnowledgeBase/ja/guides/report-bugs"}},p={},s=[{value:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5",id:"report",level:2},{value:"AdGuard \u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u6a5f\u80fd\u306e\u5834\u5408",id:"extension",level:3},{value:"AdGuard for Windows \u306e\u5834\u5408",id:"windows",level:3},{value:"AdGuard for Android \u306e\u5834\u5408",id:"android",level:3},{value:"AdGuard for Mac \u306e\u5834\u5408",id:"mac",level:3},{value:"AdGuard for iOS \u306e\u5834\u5408",id:"ios",level:3},{value:"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u8a18\u5165\u3059\u308b\u65b9\u6cd5",id:"form",level:2},{value:"\u554f\u984c\u306e\u8a3a\u65ad\u65b9\u6cd5",id:"issue",level:2},{value:"<strong>\u30d5\u30a3\u30eb\u30bf</strong>",id:"\u30d5\u30a3\u30eb\u30bf",level:3},{value:"<strong>\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9</strong>",id:"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9",level:3},{value:"<strong>\u62e1\u5f35\u6a5f\u80fd</strong>",id:"\u62e1\u5f35\u6a5f\u80fd",level:3},{value:"<strong>\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\uff08\u4ed6\u793e\u88fd\uff09\u30d6\u30ed\u30c3\u30ab\u30fc</strong>",id:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u4ed6\u793e\u88fd\u30d6\u30ed\u30c3\u30ab\u30fc",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3068\u3001\u7279\u5b9a\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u6b63\u3057\u304f\u52d5\u4f5c\u3057\u306a\u304b\u3063\u305f\u308a\u3001\u30da\u30fc\u30b8\u306e\u8981\u7d20\u304c\u5d29\u308c\u305f\u308a\u30fb\u304a\u304b\u3057\u304f\u306a\u3063\u305f\u308a\u30fb\u58ca\u308c\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u554f\u984c\u306f\u3001\u4ee5\u4e0b\u3088\u3046\u306a\u3055\u307e\u3056\u307e\u306a\u8981\u56e0\u3067\u767a\u751f\u3057\u305f\u308a\u3057\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u30eb\u30fc\u30eb\u304c\u6b63\u3057\u304f\u306a\u3044"),(0,n.kt)("li",{parentName:"ul"},"\u5e83\u544a\u3092\u8ffd\u52a0\u3059\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u5909\u66f4"),(0,n.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30fc\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u304b\u3089\u306e\u30d5\u30a3\u30eb\u30bf\u30fc/\u62e1\u5f35\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u30d5\u30a3\u30eb\u30bf\u306e\u4f5c\u8005\u304c\u3001\u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u30df\u30b9\u3092\u3057\u305f"),(0,n.kt)("li",{parentName:"ul"},"\u5e83\u544a\u306e\u518d\u633f\u5165 \uff08\u3053\u306e\u65b9\u6cd5\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://adguard.com/en/blog/ad-reinsertion.html"},"\u30d6\u30ed\u30b0\u8a18\u4e8b"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\uff09")),(0,n.kt)("p",null,"\u76f4\u9762\u3055\u308c\u305f\u5e83\u544a\u306e\u4e8b\u4f8b\u3092\u542b\u3081\u3066\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u3092\u8a18\u5165\u3057\u3066\u3054\u5831\u544a\u3044\u305f\u3060\u308b\u3068\u5927\u5909\u52a9\u304b\u308a\u307e\u3059\u3002 \u5831\u544a\u65b9\u6cd5\u306b\u95a2\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u304a\u4f7f\u3044\u306eOS\u306b\u5fdc\u3058\u305f\u624b\u9806\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"report"},"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u203bAdGuard\u30a2\u30d7\u30ea\u307e\u305f\u306fAdGuard\u30d6\u30e9\u30a6\u30b6\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u7d4c\u7531\u3067\u3054\u5831\u544a\u3092\u9001\u4fe1\u3057\u307e\u3059\u3068\u3068\u3001\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u3066\u4fbf\u5229\u3067\u3059\u3002 \u304a\u624b\u6570\u3067\u3059\u304c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3060\u3051\u306f\u3054\u81ea\u8eab\u3067\u4f5c\u6210\u3057\u6dfb\u4ed8\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u306a\u304a\u3001",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u5831\u544a\u30d5\u30a9\u30fc\u30e0\u306e\u76f4\u30ea\u30f3\u30af"),"\u3092\u4f7f\u3063\u3066\u3054\u5831\u544a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u60c5\u5831\u3092\u5168\u90e8\u624b\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("p",null,"\u5e83\u544a\u306e\u518d\u633f\u5165\u3084Web\u30b5\u30a4\u30c8\u306e\u8aa4\u8868\u793a\u306a\u3069\u3092\u5831\u544a\u3059\u308b\u65b9\u6cd5:"),(0,n.kt)("h3",{id:"extension"},"AdGuard \u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u6a5f\u80fd\u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30e9\u30a6\u30b6\u3067\ud83d\udee1\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001AdGuard\u30d6\u30e9\u30a6\u30b6\u62e1\u5f35\u6a5f\u80fd\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u554f\u984c\u30fb\u4e0d\u5177\u5408\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/5si74extension.png",alt:"extension_issue *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"windows"},"AdGuard for Windows \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/adguard-for-windows/browser-assistant"},"AdGuard\u30d6\u30e9\u30a6\u30b6\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8"),"\u3092\u958b\u304d\u3001 \u300c",(0,n.kt)("strong",{parentName:"li"},"\u554f\u984c\u30fb\u4e0d\u5177\u5408\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u62bc\u3059")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-website-ja-2.png",alt:"windows *border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"android"},"AdGuard for Android \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard\u30a2\u30d7\u30ea\u5185\u3067\u8a2d\u5b9a\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u9069\u5207\u306a\u30d6\u30ed\u30c3\u30af\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u9078\u629e")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg",alt:"android *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"mac"},"AdGuard for Mac \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open ",(0,n.kt)("a",{parentName:"li",href:"/adguard-for-mac/features/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,n.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-website-ja-2.png",alt:"mac *mobile"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h3",{id:"ios"},"AdGuard for iOS \u306e\u5834\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard\u30a2\u30d7\u30ea\u5185\u3067\u8a2d\u5b9a\uff08\u5de6\u4e0b\u306e\u2699\uff09\u3092\u958b\u304f"),(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"\u304a\u5ba2\u69d8\u30b5\u30dd\u30fc\u30c8"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u9069\u5207\u306a\u30d6\u30ed\u30c3\u30af\u3092\u5831\u544a\u3059\u308b"),"\u300d\u3092\u9078\u629e")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/fnl9aios.jpeg",alt:"ios *mobile_border"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u306b\u6b8b\u308a\u306e\u5fc5\u8981\u4e8b\u9805\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u306f\u81ea\u52d5\u5165\u529b\u3055\u308c\u307e\u3059\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u30d5\u30a9\u30fc\u30e0\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),"\u306b\u304a\u3044\u3066\u554f\u984c\u306b\u5bfe\u3059\u308b\u300cissue\u300d\u304c\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002 \u305d\u306eissue\u306e\u30ea\u30f3\u30af\u3082\u8868\u793a\u3055\u308c\u307e\u3059\u306e\u3067\u3001\u3054\u5831\u544a\u3044\u305f\u3060\u3044\u305f\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u30ea\u30f3\u30af\u5148issue\u306b\u3066\u76e3\u8996\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h2",{id:"form"},"\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\u8a18\u5165\u3059\u308b\u65b9\u6cd5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u203bAdGuard\u30a2\u30d7\u30ea\u307e\u305f\u306fAdGuard\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u7d4c\u7531\u3067\u554f\u984c\u5831\u544a\u3092\u9001\u4fe1\u3057\u307e\u3059\u3068\u3068\u3001\u307b\u3068\u3093\u3069\u306e\u60c5\u5831\u304c\u81ea\u52d5\u5165\u529b\u3055\u308c\u3066\u4fbf\u5229\u3067\u3059\u3002 \u304a\u624b\u6570\u3067\u3059\u304c\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3060\u3051\u306f\u3054\u81ea\u8eab\u3067\u4f5c\u6210\u3057\u6dfb\u4ed8\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u306a\u304a\u3001",(0,n.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"\u5831\u544a\u30d5\u30a9\u30fc\u30e0\u306e\u76f4\u30ea\u30f3\u30af"),"\u3092\u4f7f\u3063\u3066\u3054\u5831\u544a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u60c5\u5831\u3092\u5168\u90e8\u624b\u5165\u529b\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6700\u521d\u306b\u3001\u304a\u4f7f\u3044\u306e\u88fd\u54c1\u3068\u305d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-1.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2460 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u554f\u984c\u306e\u7a2e\u985e\u3068\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\uff08\u30a2\u30f3\u30c1\u30a6\u30a4\u30eb\u30b9\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30bd\u30d5\u30c8\u3001VPN\u306a\u3069\uff09\u306e\u4f7f\u7528\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-2.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2461 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u30da\u30fc\u30b8\u306eURL\u3068\u30d6\u30e9\u30a6\u30b6\uff08\u30a2\u30d7\u30ea\u306e\u5834\u5408\u306f\u305d\u306e\u30a2\u30d7\u30ea\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30ea\u30f3\u30af\uff09\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-3.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2462 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30a2\u30d7\u30ea\u306e\u8a2d\u5b9a\u72b6\u6cc1\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e2d\u306e\u30d5\u30a3\u30eb\u30bf"),(0,n.kt)("li",{parentName:"ul"},"DNS\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9\u306a\u3069\u3068\u3044\u3046\u6a5f\u80fd\u304c\u6709\u52b9\u306e\u5834\u5408\u306f\u3001\u305d\u306e\u8a2d\u5b9a")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-4.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2463 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u554f\u984c\u304c\u308f\u304b\u308b\u3088\u3046\u306a",(0,n.kt)("a",{parentName:"p",href:"../take-screenshot"},"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u6dfb\u4ed8"),"\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u203b\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u306f\u516c\u958b\u3055\u308c\u308b\u305f\u3081\u3001\u500b\u4eba\u60c5\u5831\uff08\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u96fb\u8a71\u756a\u53f7\u306a\u3069\uff09\u306f\u3001\u30e2\u30b6\u30a4\u30af\uff08\u307c\u304b\u3057\uff09\u306a\u3069\u3092\u304b\u3051\u3066\u898b\u3048\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044"),"\u3002")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2464 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30d5\u30a3\u30eb\u30bf\u958b\u767a\u8005\u304c\u72b6\u6cc1\u3092\u7406\u89e3\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u8ffd\u52a0\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},"\u307e\u305f\u3001",(0,n.kt)("strong",{parentName:"p"},"GitHub\u306e\u30a2\u30ab\u30a6\u30f3\u30c8"),"\u3092\u304a\u6301\u3061\u3067\u3042\u308c\u3070\u3001\u3088\u304b\u3063\u305f\u3089\u3054\u8a18\u8f09\u304f\u3060\u3055\u3044\uff08AdGuard\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u8ffd\u52a0\u60c5\u5831\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u306b\u9023\u7d61\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3067\u3059\uff09\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-6.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2465 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u3054\u5831\u544a\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u3001\u30d5\u30a9\u30fc\u30e0\u3092\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-7.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2466 *border"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5831\u544a\u9001\u4fe1\u5b8c\u4e86\u753b\u9762\u3067\u306f\u3001\u554f\u984c\u3078\u306e\u5bfe\u5fdc\u306e\u9032\u6357\u72b6\u6cc1\u3092\u78ba\u8a8d\u3067\u304d\u308bGitHub\u4e0aissue\u306e\u30ea\u30f3\u30af\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/report-form-ja-8.png",alt:"\u30d5\u30a9\u30fc\u30e0\u2467 *border"})))),(0,n.kt)("h2",{id:"issue"},"\u554f\u984c\u306e\u8a3a\u65ad\u65b9\u6cd5"),(0,n.kt)("p",null,"\u3053\u306e\u65b9\u6cd5\u306f\u3001\u56f0\u96e3\u3092\u6050\u308c\u305a\u3001\u81ea\u5206\u3067\u554f\u984c\u3092\u898b\u3064\u3051\u3088\u3046\u3068\u3059\u308b\u3053\u3068\u306b\u62b5\u6297\u304c\u306a\u3044\u4eba\u5411\u3051\u3067\u3059\u3002 HTML\u3084CSS\u306b\u95a2\u3059\u308b\u7279\u5225\u306a\u30b9\u30ad\u30eb\u3084\u6df1\u3044\u77e5\u8b58\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u304a\u6c17\u306b\u5165\u308a\u306eWeb\u30b5\u30a4\u30c8\u304c\u958b\u304b\u306a\u3044\u3001\u8a8d\u8a3c\u304c\u58ca\u308c\u3066\u3044\u308b\u3001\u4e00\u90e8\u306e\u30da\u30fc\u30b8\u8981\u7d20\u304c\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u306a\u3044\u3068\u3044\u3063\u305f\u72b6\u6cc1\u306b\u76f4\u9762\u3057\u305f\u3068\u3057\u307e\u3059\u3002 \u7279\u5b9a\u306e\u30d5\u30a3\u30eb\u30bf\u30fb\u62e1\u5f35\u6a5f\u80fd\u30fb\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9\u306e\u8a2d\u5b9a\u306a\u3069\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u539f\u56e0\u3067\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u554f\u984c\u3092\u8a3a\u65ad\u3059\u308b\u65b9\u6cd5\u306f\u3001\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,n.kt)("h3",{id:"\u30d5\u30a3\u30eb\u30bf"},(0,n.kt)("strong",{parentName:"h3"},"\u30d5\u30a3\u30eb\u30bf")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc"),"\u3092\u30aa\u30d5\u306b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u554f\u984c\u304c\u306a\u304f\u306a\u3063\u305f\u5834\u5408\u306f\u3001\u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u518d\u3073\u6709\u52b9\u306b\u3057\u3001\u30d5\u30a3\u30eb\u30bf\u30921\u3064\u305a\u3064\u7121\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u65b9\u6cd5\u3067\u3001\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u30d5\u30a3\u30eb\u30bf\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u3069\u306e\u30d5\u30a3\u30eb\u30bf\u304c\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u306e\u304b\u304c\u308f\u304b\u3063\u305f\u3089\u3001\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\uff08\u4e0a\u8a18\u53c2\u7167\uff09\u306b\u8a18\u5165\u3059\u308b\u969b\u306b\u3001\u305d\u308c\u3092\u958b\u767a\u8005\u306b\u77e5\u3089\u305b\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u5834\u5408\u3001\u521d\u671f\u8a2d\u5b9a\u306b\u623b\u3059\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u3059\u3079\u3066\u306e\u30d5\u30a3\u30eb\u30bf\u3092\u30aa\u30d5\u306b\u3057\u3066\u3082\u7d50\u679c\u304c\u51fa\u306a\u3044\u5834\u5408\u306f\u3001 ",(0,n.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),"\u3068\u3044\u3046\u30eb\u30fc\u30eb\u3092\u9069\u7528\u3057\u3066\u304f\u3060\u3055\u3044 \uff08\u300c",(0,n.kt)("strong",{parentName:"li"},"example.com"),"\u300d\u306f\u3001\u554f\u984c\u3092\u898b\u3064\u3051\u305f\u30b5\u30a4\u30c8\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u305d\u308c\u3067\u3082\u554f\u984c\u304c\u306a\u304f\u306a\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u300c",(0,n.kt)("strong",{parentName:"li"},"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9"),"\u300d\u3068\u3044\u3046\u9805\u76ee\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h3",{id:"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9"},(0,n.kt)("strong",{parentName:"h3"},"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AdGuard\u30a2\u30d7\u30ea\u3067",(0,n.kt)("strong",{parentName:"li"},"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9"),"\u3092\u30aa\u30d5\u306b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u3053\u308c\u3067\u554f\u984c\u304c\u89e3\u6c7a\u3057\u305f\u5834\u5408\u306f\u3001",(0,n.kt)("strong",{parentName:"li"},"\u30b9\u30c6\u30eb\u30b9\u30e2\u30fc\u30c9"),"\u3092\u30aa\u30f3\u306b\u3057\u3066\u3001\u305d\u306e\u8a2d\u5b9a\u9805\u76ee\u30921\u3064\u305a\u3064\u30aa\u30d5\u306b\u3057\u306a\u304c\u3089\u3001\u554f\u984c\u304c\u518d\u73fe\u3059\u308b\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u65b9\u6cd5\u3067\u3001\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u8a2d\u5b9a\u9805\u76ee\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u3069\u306e\u8a2d\u5b9a\u304c\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u306e\u304b\u304c\u308f\u304b\u3063\u305f\u3089\u3001\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\uff08\u4e0a\u8a18\u53c2\u7167\uff09\u306b\u8a18\u5165\u3059\u308b\u969b\u306b\u3001\u305d\u308c\u3092\u958b\u767a\u8005\u306b\u77e5\u3089\u305b\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u5834\u5408\u3001\u521d\u671f\u8a2d\u5b9a\u306b\u623b\u3059\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u554f\u984c\u304c\u306a\u304f\u306a\u3089\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u300c",(0,n.kt)("strong",{parentName:"li"},"\u62e1\u5f35\u6a5f\u80fd"),"\u300d\u306e\u9805\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h3",{id:"\u62e1\u5f35\u6a5f\u80fd"},(0,n.kt)("strong",{parentName:"h3"},"\u62e1\u5f35\u6a5f\u80fd")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AdGuard\u30a2\u30d7\u30ea\u5185\u3067\u300c",(0,n.kt)("strong",{parentName:"li"},"\u62e1\u5f35\u6a5f\u80fd"),"\u300d\u3092\u30aa\u30d5\u306b\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"\u3053\u308c\u3067\u554f\u984c\u304c\u518d\u73fe\u3057\u306a\u304f\u306a\u3063\u305f\u5834\u5408\u306f\u3001",(0,n.kt)("strong",{parentName:"li"},"\u62e1\u5f35\u6a5f\u80fd"),"\u3092\u30aa\u30f3\u306b\u3057\u3066\u3001\u305d\u306e\u8a2d\u5b9a\u9805\u76ee\u30921\u3064\u305a\u3064\u30aa\u30d5\u306b\u3057\u306a\u304c\u3089\u3001\u554f\u984c\u304c\u518d\u73fe\u3059\u308b\u304b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u65b9\u6cd5\u3067\u3001\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u8a2d\u5b9a\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u3069\u306e\u8a2d\u5b9a\u304c\u30da\u30fc\u30b8\u3092\u300c\u58ca\u3057\u3066\u3044\u308b\u300d\u306e\u304b\u304c\u308f\u304b\u3063\u305f\u3089\u3001\u554f\u984c\u5831\u544a\u7528\u30d5\u30a9\u30fc\u30e0\uff08\u4e0a\u8a18\u53c2\u7167\uff09\u306b\u8a18\u5165\u3059\u308b\u969b\u306b\u3001\u305d\u308c\u3092\u958b\u767a\u8005\u306b\u77e5\u3089\u305b\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u5834\u5408\u3001\u521d\u671f\u8a2d\u5b9a\u306b\u623b\u3059\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059\u3002")),(0,n.kt)("h3",{id:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u4ed6\u793e\u88fd\u30d6\u30ed\u30c3\u30ab\u30fc"},(0,n.kt)("strong",{parentName:"h3"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\uff08\u4ed6\u793e\u88fd\uff09\u30d6\u30ed\u30c3\u30ab\u30fc")),(0,n.kt)("p",null,"\u4e00\u90e8\u306e\u30d6\u30e9\u30a6\u30b6\u3084\u30a6\u30a4\u30eb\u30b9\u5bfe\u7b56\u30bd\u30d5\u30c8\uff08Brave\u3001Kaspersky\u306a\u3069\uff09\u306b\u306f\u5e83\u544a\u30d6\u30ed\u30c3\u30af\u6a5f\u80fd\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u305d\u306e\u3088\u3046\u306a\u6a5f\u80fd\u306f\u3001\u30b5\u30a4\u30c8\u306e\u52d5\u4f5c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u3001\u554f\u984c\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002 \u3053\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u554f\u984c\u304c",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),"\u5074\u306b\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),"\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u7121\u52b9\u306b\u3057\u3066\u3001\u554f\u984c\u3092\u518d\u73fe\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002 AdGuard\u30aa\u30d5\u3067\u3082\u554f\u984c\u304c\u518d\u73fe\u3059\u308b\u5834\u5408\u306f\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30d6\u30e9\u30a6\u30b6\u304c\u539f\u56e0\u3067\u3042\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 ",(0,n.kt)("strong",{parentName:"p"},"AdGuard"),"\u304c\u539f\u56e0\u306e\u5834\u5408\u306f\u3001\u4e0a\u8a18\u306e\u6bb5\u843d\u306e\u305d\u308c\u305e\u308c\u306e\u624b\u9806\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);