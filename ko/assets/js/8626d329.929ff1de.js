"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7023],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),g=n,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||a;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(4137));const a={title:"How to collect debug logs",sidebar_position:2},l=void 0,i={unversionedId:"adguard-for-android/solving-problems/log",id:"adguard-for-android/solving-problems/log",title:"How to collect debug logs",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/log.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/log",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/log",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/log.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to collect debug logs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ubc30\ud130\ub9ac \ubc0f \ud2b8\ub798\ud53d \uc18c\ube44 \ubb38\uc81c",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/battery"},next:{title:"How to automate AdGuard for Android",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/tasker"}},d={},s=[{value:"Collecting debug log",id:"collecting-debug-log",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,":::\uc815\ubcf4"),(0,n.kt)("p",null,"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app")),(0,n.kt)("p",null,":::"),(0,n.kt)("p",null,"\uc774 \uae00\uc5d0\uc11c\ub294 \ub514\ubc84\uadf8 \ub85c\uadf8\ub97c \uc218\uc9d1\ud558\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \ub514\ubc84\uadf8 \ub85c\uadf8\ub294 \uc7a0\uc7ac\uc801\uc73c\ub85c \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ub370 \ud544\uc694\ud569\ub2c8\ub2e4. Debug logs provide detailed insight into the inner workings of AdGuard for Android. If the AdGuard support team asks you to provide debug logs, simply follow these instructions."),(0,n.kt)("h3",{id:"collecting-debug-log"},"Collecting debug log"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ub514\ubc84\uadf8 \ub85c\uadf8"),"\ub97c \uc218\uc9d1\ud558\uc5ec \uc800\ud76c\uc5d0\uac8c \ubcf4\ub0b4\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uc218\ud589\ud558\uc2ed\uc2dc\uc624."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"General")," \u2192 ",(0,n.kt)("em",{parentName:"li"},"Advanced"),"."),(0,n.kt)("li",{parentName:"ol"},"Tap ",(0,n.kt)("em",{parentName:"li"},"Logging level")," and set it to ",(0,n.kt)("em",{parentName:"li"},"Debug"),"."),(0,n.kt)("li",{parentName:"ol"},"Reproduce the problem and try to remember the exact time it occurred."),(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to ",(0,n.kt)("em",{parentName:"li"},"Settings")," and choose the ",(0,n.kt)("em",{parentName:"li"},"Support")," tab. Tap ",(0,n.kt)("em",{parentName:"li"},"Report a bug")," and complete the required fields. Don't forget to check the ",(0,n.kt)("em",{parentName:"li"},"Send app logs and system info")," checkbox. Finally tap ",(0,n.kt)("em",{parentName:"li"},"Send"),".")),(0,n.kt)("p",null,"If you're interested in following the resolution of your issue and engaging in a dialogue with the developers, we recommend that you take the following steps after completing the first three:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Wait a while, then return to the ",(0,n.kt)("em",{parentName:"li"},"Advanced")," screen and export logs via ",(0,n.kt)("em",{parentName:"li"},"Export logs and system info"),". Then report a bug on GitHub by following these ",(0,n.kt)("a",{parentName:"li",href:"/KnowledgeBase/ko/guides/report-bugs"},"instructions"),"."),(0,n.kt)("li",{parentName:"ol"},"After creating an issue on GitHub, send the log file to ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Include the time of the bug and attach a link to your issue or its number (it appears as #number next to the title). Alternatively, you can upload the log file to Google Drive and send it to ",(0,n.kt)("a",{parentName:"li",href:"mailto:devteam@adguard.com."},"devteam@adguard.com.")," Add the file link to your GitHub issue")))}p.isMDXComponent=!0}}]);