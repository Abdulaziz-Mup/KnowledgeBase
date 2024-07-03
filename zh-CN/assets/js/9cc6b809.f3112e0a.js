"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[160],{4137:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=m(a),u=n,d=s["".concat(o,".").concat(u)]||s[u]||N[u]||p;return a?r.createElement(d,l(l({ref:t},k),{},{components:a})):r.createElement(d,l({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(4137));const p={title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",sidebar_position:1},l=void 0,i={unversionedId:"guides/collect-har-file",id:"guides/collect-har-file",title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",description:"HAR \u6587\u4ef6\u53ef\u5e2e\u52a9\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u56e2\u961f\u89e3\u51b3\u590d\u6742\u7684\u95ee\u9898\u3002 \u4e3a\u4e86\u521b\u5efa\u8fd9\u79cd\u6587\u4ef6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Chrome \u6216\u706b\u72d0\u6d4f\u89c8\u5668\u3002 \u4e0d\u8fc7\uff0c IE 11\u3001Edge \u548c Safari \u4e5f\u652f\u6301 .har \u6587\u4ef6\u7684\u751f\u6210\u548c\u5bfc\u51fa\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/collect-har-file.md",sourceDirName:"guides",slug:"/guides/collect-har-file",permalink:"/KnowledgeBase/zh-CN/guides/collect-har-file",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/collect-har-file.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6536\u96c6 HAR \u6587\u4ef6\u7684\u65b9\u5f0f",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u81f4\u8c22",permalink:"/KnowledgeBase/zh-CN/miscellaneous/acknowledgements"},next:{title:"\u4ee3\u7406\u8bc1\u4e66\u5b89\u88c5",permalink:"/KnowledgeBase/zh-CN/guides/proxy-certificate"}},o={},m=[{value:"Chrome \u6d4f\u89c8\u5668",id:"chrome",level:2},{value:"Edge \u6d4f\u89c8\u5668",id:"edge",level:2},{value:"Firefox \u6d4f\u89c8\u5668",id:"firefox",level:2},{value:"Internet Explorer11 \u6d4f\u89c8\u5668",id:"ie11",level:2},{value:"Safari \u6d4f\u89c8\u5668",id:"safari",level:2},{value:"Android \u7cfb\u7edf",id:"android",level:2},{value:"Windows \u7cfb\u7edf",id:"windows",level:2}],k={toc:m};function N(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HAR \u6587\u4ef6\u53ef\u5e2e\u52a9\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u56e2\u961f\u89e3\u51b3\u590d\u6742\u7684\u95ee\u9898\u3002 \u4e3a\u4e86\u521b\u5efa\u8fd9\u79cd\u6587\u4ef6\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Chrome \u6216\u706b\u72d0\u6d4f\u89c8\u5668\u3002 \u4e0d\u8fc7\uff0c IE 11\u3001Edge \u548c Safari \u4e5f\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},".har")," \u6587\u4ef6\u7684\u751f\u6210\u548c\u5bfc\u51fa\u529f\u80fd\u3002"),(0,n.kt)("h2",{id:"chrome"},"Chrome \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u8981\u5728 Chrome \u4e2d\u521b\u5efa HAR \u6587\u4ef6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8005\u5de5\u5177"),"\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u83dc\u5355\u4e2d\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u300c\u83dc\u5355\u300d\u2192\u300c\u66f4\u591a\u5de5\u5177\u300d\u2192\u300c\u5f00\u53d1\u8005\u5de5\u5177\u300d"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),"\uff0c\u6216 ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),"\uff0c\u6216 ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I (Mac)"),"\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"Network"),"\u300d\u6807\u7b7e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230 Network \u6807\u7b7e\u4e2d\u7684\u5de6\u4e0a\u89d2\u7684\u5706\u5f62\u6309\u94ae\uff0c\u5e76\u786e\u8ba4\u5b83\u5904\u4e8e\u7ea2\u8272\u5f55\u97f3\u6a21\u5f0f\u3002 \u5982\u679c\u662f\u7070\u8272\u7684\uff0c\u8bf7\u60a8\u5355\u51fb\u4f7f\u5176\u53d8\u4e3a\u7ea2\u8272\u7684\uff0c\u5e76\u5f00\u59cb\u5f55\u97f3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u300c",(0,n.kt)("strong",{parentName:"p"},"Clear"),"\u300d\u6309\u94ae\uff08\u8bb0\u5f55\u6309\u94ae\u65c1\u8fb9\u5e26\u6709\u4e00\u6761\u7ebf\u7684\u5706\u5708\u6309\u94ae\uff09\u4ee5\u6e05\u9664\u6240\u6709\u4e4b\u524d\u7684\u6d3b\u52a8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 Network \u6807\u7b7e\u4e2d\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Preserve log"),"\u300d\uff08\u4fdd\u7559\u65e5\u5fd7\uff09\u590d\u9009\u6846\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"Disable cache"),"\u300d \u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png",alt:"Chrome \u6d4f\u89c8\u5668"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u7f51\u683c\u5e76\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06\u6240\u6709\u5185\u5bb9\u53e6\u5b58\u4e3a HAR"),"\u300d\u5c06\u4f1a\u8bdd\u53e6\u5b58\u4e3a .har \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"edge"},"Edge \u6d4f\u89c8\u5668"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8005\u5de5\u5177"),"\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u83dc\u5355\u4e2d\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u300c\u83dc\u5355\u300d\u2192\u300c\u66f4\u591a\u5de5\u5177\u300d\u2192\u300c\u5f00\u53d1\u8005\u5de5\u5177\u300d"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),"\uff0c\u6216 ",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Alt+I"),"\uff0c\u6216 ",(0,n.kt)("strong",{parentName:"li"},"\u2325+\u2318+I (Mac)"),"\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"Network"),"\u300d\u6807\u7b7e\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230 Network \u6807\u7b7e\u4e2d\u7684\u5de6\u4e0a\u89d2\u7684\u5706\u5f62\u6309\u94ae\uff0c\u5e76\u786e\u8ba4\u5b83\u5904\u4e8e\u7ea2\u8272\u5f55\u97f3\u6a21\u5f0f\u3002 \u5982\u679c\u662f\u7070\u8272\u7684\uff0c\u8bf7\u60a8\u5355\u51fb\u4f7f\u5176\u53d8\u4e3a\u7ea2\u8272\u7684\uff0c\u5e76\u5f00\u59cb\u5f55\u97f3\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u300c",(0,n.kt)("strong",{parentName:"p"},"Clear"),"\u300d\u6309\u94ae\uff08\u8bb0\u5f55\u6309\u94ae\u65c1\u8fb9\u5e26\u6709\u4e00\u6761\u7ebf\u7684\u5706\u5708\u6309\u94ae\uff09\u4ee5\u6e05\u9664\u6240\u6709\u4e4b\u524d\u7684\u6d3b\u52a8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 Network \u6807\u7b7e\u4e2d\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Preserve log"),"\u300d\uff08\u4fdd\u7559\u65e5\u5fd7\uff09\u590d\u9009\u6846\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"Disable cache"),"\u300d \u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png",alt:"edge \u6d4f\u89c8\u5668"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u7f51\u683c\u5e76\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5c06\u6240\u6709\u5185\u5bb9\u53e6\u5b58\u4e3a HAR"),"\u300d\u5c06\u4f1a\u8bdd\u53e6\u5b58\u4e3a .har \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"firefox"},"Firefox \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u8981\u5728 Firefox \u4e2d\u521b\u5efa HAR \u6587\u4ef6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"Network"),"\u6a21\u5f0f\u4e0b\u6253\u5f00\u300c\u5f00\u53d1\u5de5\u5177\u300d\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4ece\u83dc\u5355\u4e2d\u627e\u5230\uff1a",(0,n.kt)("strong",{parentName:"li"},"\u300c\u83dc\u5355\u300d\u2192\u300cWeb \u5f00\u53d1\u8005\u300d\u2192\u300c\u7f51\u7edc\u300d"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a",(0,n.kt)("strong",{parentName:"li"},"Ctrl+Shift+C"),"\uff0c\u6216 \u2325+\u2318+E",(0,n.kt)("strong",{parentName:"li"},"(Mac)"),"\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1aNetwork \u6807\u7b7e\u5de6\u4e0a\u65b9\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7ee7\u7eed/\u6682\u505c"),"\u6309\u94ae\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6309\u94ae\u5e94\u5904\u4e8e\u7ee7\u7eed\u8bb0\u5f55\u6a21\u5f0f\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u5728\u7f51\u683c\u4e2d\u663e\u793a\u4efb\u4f55\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb\u7ee7\u7eed/\u6682\u505c\u6309\u94ae\u65c1\u8fb9\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Empty trash can"),"\u300d\u6309\u94ae\u8fdb\u884c\u6e05\u9664\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u7f51\u7edc\u6807\u7b7e\u4e0a\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Persist Logs"),"\u300d\uff08\u7ee7\u7eed\u8bb0\u5f55\uff09\u590d\u9009\u6846\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"Disable cache"),"\u300d\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png",alt:"firefox \u6d4f\u89c8\u5668"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u7f51\u683c\u5e76\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"Save all as HAR"),"\u300d\u5c06\u4f1a\u8bdd\u53e6\u5b58\u4e3a .har \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"ie11"},"Internet Explorer11 \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u8981\u5728 Internet Explorer 11 \u6d4f\u89c8\u5668\u4e2d\u521b\u5efa HAR \u6587\u4ef6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"Network"),"\u6a21\u5f0f\u4e0b\u6253\u5f00\u300c\u5f00\u53d1\u5de5\u5177\u300d\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5de5\u5177\u9f7f\u8f6e\u83dc\u5355\uff1a\u300c",(0,n.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u5de5\u5177"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"li"},"Network"),"\u300d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a",(0,n.kt)("strong",{parentName:"li"},"F12 \u2192\u300cNetwork\u300d"),"\u9009\u9879\u5361\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\u7f51\u7edc\u6807\u7b7e\u5de6\u4e0a\u65b9\u7684\u5f00\u59cb\u5206\u6790\u4f1a\u8bdd\u300c",(0,n.kt)("strong",{parentName:"p"},"Play"),"\u300d\uff08\u7ee7\u7eed\uff09\u6309\u94ae\u548c\u505c\u6b62\u5206\u6790\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Stop"),"\u300d\uff08\u505c\u6b62\uff09\u6309\u94ae\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f55\u97f3\u65f6\u7ee7\u7eed\u6309\u94ae\u5c06\u53d8\u4e3a\u7070\u8272\uff0c\u505c\u6b62\u6309\u94ae\u4e3a\u7ea2\u8272\u3002 \u8fdb\u5165\u300c",(0,n.kt)("strong",{parentName:"li"},"Play"),"\u300d\u6a21\u5f0f\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u7f51\u7edc\u6807\u7b7e\u4e0a\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Clear session"),"\u300d\uff08\u6e05\u9664\u4f1a\u8bdd\uff09\u6309\u94ae\u4ee5\u6e05\u9664\u663e\u793a\u5728\u4e0b\u90e8\u7f51\u683c\u4e2d\u7684\u6240\u6709\u4f1a\u8bdd\u4fe1\u606f\u3002 \u5c06\u9f20\u6807\u60ac\u505c\u5728\u56fe\u6807\u4e0a\u53ef\u4ee5\u67e5\u770b\u540d\u79f0\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u300c",(0,n.kt)("strong",{parentName:"li"},"Clear session")," \u300d\uff08\u6e05\u9664\u4f1a\u8bdd\uff09\u6309\u94ae\u662f\u4e00\u4e2a\u4e09\u884c\u56fe\u6807\uff0c\u4e0a\u9762\u5e26\u6709\u4e00\u4e2a\u300cX\u300d\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"Disable cache"),"\u300d \u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u7f51\u7edc\u6807\u7b7e\u4e0a\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Save disk"),"\u300d\uff08\u4fdd\u5b58\u78c1\u76d8\uff09 \u6309\u94ae\uff08\u5bfc\u51fa\u4e3a HAR\uff09\u5c06\u4f1a\u8bdd\u5185\u5bb9\u53e6\u5b58\u4e3a .har \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"safari"},"Safari \u6d4f\u89c8\u5668"),(0,n.kt)("p",null,"\u8981\u5728 Safari \u4e2d\u521b\u5efa HAR \u6587\u4ef6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u67e5\u770b\u5c4f\u5e55\u9876\u90e8\u7684 Safari \u83dc\u5355\u680f\u662f\u5426\u6709\u300c",(0,n.kt)("strong",{parentName:"p"},"Develop"),"\u300d\uff08\u5f00\u53d1\uff09\u83dc\u5355\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6c92\u6709\u5f00\u53d1\u8005\u83dc\u5355\uff0c\u8bf7\u8f6c\u5230",(0,n.kt)("strong",{parentName:"li"},"\u300cSafari\u300d\u2192\u300cPreferences \u300d\uff08\u9996\u9009\u9879\uff09\u2192\u300cAdvanced\u300d\uff08\u9ad8\u7ea7\uff09"),"\u5c06\u5176\u542f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u83dc\u5355\u680f\u4e2d\u7684\u300c",(0,n.kt)("strong",{parentName:"li"},"Show Develop menu in menu bar"),"\u300d\uff08\u663e\u793a\u5f00\u53d1\u83dc\u5355\uff09\u548c\u5e95\u90e8\u7684\u590d\u9009\u6846\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80\u51fa\u73b0\u95ee\u9898\u7684 URL\u3002 \u6682\u65f6\u4e0d\u8981\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u7f51\u7edc\u68c0\u67e5\u5668\u4e2d\u6253\u5f00\u300c",(0,n.kt)("strong",{parentName:"p"},"Network"),"\u300d\u9009\u9879\u5361\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83dc\u5355\uff1a",(0,n.kt)("strong",{parentName:"li"},"\u300c\u5f00\u53d1\u300d\u2192\u300c\u663e\u793a Web \u68c0\u67e5\u5668\u300d\u2192\u300cNetwork\u300d"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a",(0,n.kt)("strong",{parentName:"li"},"F12 \u2192\u300cNetwork\u300d"),"\u9009\u9879\u5361\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u7f51\u7edc\u9009\u9879\u5361\u5de6\u4fa7\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Other filter options..."),"\u300d\uff08\u5176\u4ed6\u8fc7\u6ee4\u9009\u9879...\uff09\u83dc\u5355\u4e2d\u52fe\u9009\u300c",(0,n.kt)("strong",{parentName:"p"},"Preserve Log"),"\u300d\uff08\u4fdd\u7559\u65e5\u5fd7\uff09\u590d\u9009\u6846\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png",alt:"safari \u6d4f\u89c8\u5668"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u300cNetwork\u300d\u6700\u53f3\u4fa7\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Delete Trash"),"\u300d\uff08\u5220\u9664\u5783\u573e\u7bb1\uff09\u56fe\u6807\uff0c\u6e05\u9664\u5f53\u524d\u7684\u7f51\u7edc\u9879\u76ee\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u952e\u76d8\uff1a",(0,n.kt)("strong",{parentName:"li"},"\u2318+K")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"Disable cache"),"\u300d\uff08\u7981\u7528\u7f13\u5b58\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u590d\u5bfc\u81f4\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"Preserve Log"),"\u300d\u65c1\u8fb9\u7684\u300c",(0,n.kt)("strong",{parentName:"p"},"Export"),"\u300d\uff08\u5bfc\u51fa\uff09\u56fe\u6807\uff0c\u5c06\u4f1a\u8bdd\u5185\u5bb9\u53e6\u5b58\u4e3a .har \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u81f3 AdGuard \u652f\u6301\u56e2\u961f\uff08",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"\uff09\uff0c\u5e76\u8be6\u7ec6\u63cf\u8ff0\u95ee\u9898\u3002 \u5c4f\u5e55\u622a\u56fe\u4e5f\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"))),(0,n.kt)("h2",{id:"android"},"Android \u7cfb\u7edf"),(0,n.kt)("p",null,"\u8981\u521b\u5efa HAR \u6587\u4ef6\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00 AdGuard \uff0c\u524d\u5f80\u300c",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u83dc\u5355\u4e2d\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4f4e\u7ea7\u8bbe\u7f6e"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6fc0\u6d3b ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture"),"\uff08\u5fc5\u987b\u91cd\u65b0\u542f\u52a8\u4fdd\u62a4\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u5bfc\u81f4\u95ee\u9898\u7684\u64cd\u4f5c\uff1a\u6253\u5f00\u5e94\u7528\u7a0b\u5e8f\uff0c\u6267\u884c\u5fc5\u8981\u7684\u64cd\u4f5c\u4ee5\u4f7f\u5e7f\u544a\u51fa\u73b0\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u73b0\u5728\u518d\u6b21\u5173\u95ed ",(0,n.kt)("inlineCode",{parentName:"p"},"pref.har.capture"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fd4\u56de\u5e76\u70b9\u51fb\u300c",(0,n.kt)("strong",{parentName:"p"},"\u5bfc\u51fa\u65e5\u5fd7\u548c\u7cfb\u7edf\u4fe1\u606f"),"\u300d\u2192\u300c",(0,n.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u300d\u3002"))),(0,n.kt)("h2",{id:"windows"},"Windows \u7cfb\u7edf"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6253\u5f00",(0,n.kt)("strong",{parentName:"p"},"\u300c\u8bbe\u7f6e\u300d\u2192\u300c\u5e38\u89c4\u8bbe\u7f6e\u300d"),"\u2192",(0,n.kt)("strong",{parentName:"p"},"\u300c\u9ad8\u7ea7\u8bbe\u7f6e\u300d"),"\u5e76\u5411\u4e0b\u6eda\u52a8\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u4e2d\u300c",(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8 HAR \u5199\u5165"),"\u300d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u590d\u73b0\u95ee\u9898\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230",(0,n.kt)("strong",{parentName:"p"},"\u300c\u5e38\u89c4\u8bbe\u7f6e\u300d"),"\u2192 \u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u300c\u5bfc\u51fa\u65e5\u5fd7\u300d"),"\u2192",(0,n.kt)("strong",{parentName:"p"},"\u300c\u4fdd\u5b58\u300d"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u53d6\u6d88\u52fe\u9009\u76f8\u5e94\u7684\u65b9\u6846\u7981\u6b62 HAR \u5199\u5165\u3002"))))}N.isMDXComponent=!0}}]);