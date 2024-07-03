"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9233],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={title:"DNS \u6cc4\u6f0f",sidebar_position:9},l=void 0,i={unversionedId:"adguard-for-windows/solving-problems/dns-leaks",id:"adguard-for-windows/solving-problems/dns-leaks",title:"DNS \u6cc4\u6f0f",description:"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 \u8981\u4e86\u89e3\u5176\u5de5\u4f5c\u539f\u7406\uff0c \u8bf7\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dns-leaks.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dns-leaks",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"DNS \u6cc4\u6f0f",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa Dump \u6587\u4ef6",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/dump-file"},next:{title:"Windows \u7248 AdGuard \u5df2\u77e5\u95ee\u9898",permalink:"/KnowledgeBase/zh-CN/adguard-for-windows/solving-problems/known-issues"}},p={},s=[{value:"Bootstrap DNS \u5730\u5740",id:"bootstrap-dns-\u5730\u5740",level:2},{value:"\u540e\u5907 DNS \u670d\u52a1\u5668",id:"\u540e\u5907-dns-\u670d\u52a1\u5668",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u9002\u7528\u4e8e Windows \u7248\u7684 AdGuard\uff0c\u5b83\u662f\u4e00\u79cd\u591a\u529f\u80fd\u5e7f\u544a\u62e6\u622a\u5668\uff0c\u53ef\u5728\u7cfb\u7edf\u7ea7\u522b\u4fdd\u62a4\u7528\u6237\u7684\u8bbe\u5907\u3002 \u8981\u4e86\u89e3\u5176\u5de5\u4f5c\u539f\u7406\uff0c \u8bf7",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"\u4e0b\u8f7d AdGuard \u5e94\u7528\u7a0b\u5e8f"),"\u3002")),(0,a.kt)("p",null,"Windows \u7248 AdGuard \u8ba9\u7528\u6237\u6307\u5b9a DNS \u670d\u52a1\u5668\u5730\u5740\u6765\u89e3\u51b3\u67e5\u8be2\uff0c\u800c\u4e0d\u4f7f\u7528 ISP \u63d0\u4f9b\u7684\u7cfb\u7edf DNS \u670d\u52a1\u5668\uff08\u5982\u679c\u672a\u5728\u7cfb\u7edf\u4e2d\u66f4\u6539\u8bbe\u7f6e\uff09\u3002 \u4f7f\u7528\u975e\u9ed8\u8ba4 DNS \u670d\u52a1\u5668\u53ef\u4ee5\u4fdd\u62a4 DNS \u6d41\u91cf\u4e0d\u88ab\u4e92\u8054\u7f51\u670d\u52a1\u63d0\u4f9b\u5546\u62e6\u622a\u3002 \u6b64\u5916\uff0c\u9009\u62e9\u4e00\u4e2a\u8fdb\u884c\u52a0\u5bc6\u548c/\u6216\u8fc7\u6ee4\u7684 DNS \u670d\u52a1\u5668\u540e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u83b7\u5f97\u53e6\u4e00\u5c42\u4fdd\u62a4\uff0c\u9632\u6b62\u6076\u610f\u884c\u4e3a\u548c\u607c\u4eba\u7684\u5e7f\u544a\u3002"),(0,a.kt)("p",null,"\u8bb8\u591a Windows \u7248 AdGuard \u7684\u7528\u6237\u90fd\u8d5e\u8d4f DNS \u4fdd\u62a4\u529f\u80fd\u3002 \u4f46\u6709\u4e9b\u7528\u6237\u9047\u5230\u4ee5\u4e0b\u95ee\u9898\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://ipleak.net/"},"https://ipleak.net/")," \u7b49\u7f51\u7ad9\u7684\u68c0\u67e5\u7ed3\u679c\u663e\u793a\uff0c\u6709\u9ed8\u8ba4 DNS \u670d\u52a1\u5668\u800c\u4e0d\u662f\u6240\u9009\u7684\u670d\u52a1\u5668\u5904\u7406\u8bf7\u6c42\u3002 \u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u89e3\u91ca\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u4ee5\u53ca\u5982\u4f55\u907f\u514d\u5b83\u3002"),(0,a.kt)("h2",{id:"bootstrap-dns-\u5730\u5740"},"Bootstrap DNS \u5730\u5740"),(0,a.kt)("p",null,"DNS \u670d\u52a1\u5668\u5730\u5740\u53ef\u4ee5\u5199\u4e3a IP \u6216\u57df\u540d\u3002 \u5728 IP \u5730\u5740\u7684\u60c5\u51b5\u4e0b\u6ca1\u6709\u4ec0\u4e48\u56f0\u96be\uff1aAdGuard \u5c06 DNS \u8bf7\u6c42\u76f4\u63a5\u8f6c\u53d1\u5230 DNS \u4fdd\u62a4\u6a21\u5757\u4e2d\u6307\u5b9a\u7684\u670d\u52a1\u5668\u3002 \u4e0d\u8fc7\uff0c\u52a0\u5bc6\u7684 DNS \u670d\u52a1\u5668\u5730\u5740\uff08\u5982 DoT \u6216 DoH\uff09\u6700\u5e38\u89c1\u7684\u5199\u6cd5\u662f\u57df\u540d\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9996\u5148\u8981\u89e3\u6790\u52a0\u5bc6\u7684 DNS \u670d\u52a1\u5668\u5730\u5740\uff0c\u56e0\u6b64 AdGuard \u53d1\u9001 DNS \u67e5\u8be2\u5230 Bootstrap\uff08\u5f15\u5bfc\uff09\u5730\u5740\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u4e00\u4e2a\u7cfb\u7edf DNS \u670d\u52a1\u5668\u3002 \u8fd9\u79cd\u8fde\u63a5\u5c31\u662f\u68c0\u67e5\u670d\u52a1\u6240\u8ba4\u4e3a\u7684\u6cc4\u6f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8981\u6d88\u9664\u6b64\u6cc4\u6f0f\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u6eda\u52a8\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u81ea\u5b9a\u4e49 Bootstrap \u5730\u5740\u7684\u5217\u8868"),"\u300d\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5 IP \u5730\u5740\u683c\u5f0f\u8f93\u5165\u81ea\u5b9a\u4e49\u5f15\u5bfc\u5730\u5740\uff08\u53ef\u4ee5\u4f7f\u7528\u300c",(0,a.kt)("a",{parentName:"li",href:"https://adguard-dns.io/kb/general/dns-providers/"},"\u5df2\u77e5 DNS \u63d0\u4f9b\u5546\u5217\u8868"),"\u300d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u51fb\u300c",(0,a.kt)("em",{parentName:"li"},"\u4fdd\u5b58"),"\u300d")),(0,a.kt)("h2",{id:"\u540e\u5907-dns-\u670d\u52a1\u5668"},"\u540e\u5907 DNS \u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u7531\u4e8e\u4e92\u8054\u7f51\u8fde\u63a5\u4e0d\u7545\u3001\u9ed8\u8ba4\u670d\u52a1\u5668\u54cd\u5e94\u8d85\u65f6\u6216\u5176\u4ed6\u670d\u52a1\u5668\u76f8\u5173\u7684\u95ee\u9898\uff0cAdGuard \u65e0\u6cd5\u8fde\u63a5\u5230\u6307\u5b9a\u670d\u52a1\u5668\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8f6f\u4ef6\u5c06\u8fde\u63a5\u5230\u540e\u5907\u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u7cfb\u7edf DNS \u670d\u52a1\u5668\u3002 \u68c0\u67e5\u90e8\u95e8\u4e5f\u4f1a\u5c06\u8fd9\u79cd\u8fde\u63a5\u89c6\u4e3a\u6cc4\u6f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8981\u6d88\u9664\u6b64\u6cc4\u6f0f\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u6eda\u52a8\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u540e\u5907\u670d\u52a1\u5668"),"\u300d\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u52fe\u9009\u300c",(0,a.kt)("em",{parentName:"li"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u670d\u52a1\u5668"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u627e\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668\u7684\u5217\u8868"),"\u300d\u90e8\u5206\uff0c\u6bcf\u884c\u8f93\u5165\u4e00\u4e2a\u81ea\u5b9a\u4e49\u540e\u5907\u670d\u52a1\u5668")),(0,a.kt)("p",null,"\u6216\u8005"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u6eda\u52a8\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u540e\u5907\u670d\u52a1\u5668"),"\u300d\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u52fe\u9009\u300c",(0,a.kt)("em",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528\u540e\u5907\u670d\u52a1\u5668"),"\u300d")),(0,a.kt)("p",null,"\u6216\u8005"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u300d"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u4e0b\u6eda\u52a8\u5230\u300c",(0,a.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668\u7684\u8d85\u65f6\u671f\u9650"),"\u300d\u90e8\u5206"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u4efb\u610f\u5927\u6570")))}u.isMDXComponent=!0}}]);