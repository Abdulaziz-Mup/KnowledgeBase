"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7921],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=s(a),c=n,N=k["".concat(l,".").concat(c)]||k[c]||d[c]||o;return a?r.createElement(N,p(p({ref:t},m),{},{components:a})):r.createElement(N,p({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const o={title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",sidebar_position:2},p=void 0,i={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",description:"Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices\u2019 traffic through AdGuard (all traffic or traffic of specific apps and browsers).",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/ko/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HAR \ud30c\uc77c\uc744 \uc218\uc9d1\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/guides/collect-har-file"},next:{title:"How to report websites and apps",permalink:"/KnowledgeBase/ko/guides/report-website"}},l={},s=[{value:"\uc778\uc99d\uc11c\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud558\ub294 \ubc29\ubc95",id:"\uc778\uc99d\uc11c\ub97c-\ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0-\uc124\uce58\ud558\ub294-\ubc29\ubc95",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices\u2019 traffic through AdGuard (all traffic or traffic of specific apps and browsers)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"These devices must be in the same network as the PC or Mac with AdGuard.")),(0,n.kt)("p",null,"HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device."),(0,n.kt)("h2",{id:"\uc778\uc99d\uc11c\ub97c-\ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0-\uc124\uce58\ud558\ub294-\ubc29\ubc95"},"\uc778\uc99d\uc11c\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("p",null,"Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Note the IP address of your desktop computer with AdGuard installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that AdGuard protection is enabled. On a Windows computer, check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings. For Mac, go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and enable ",(0,n.kt)("strong",{parentName:"p"},"HTTP proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the same computer with AdGuard, follow this link: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. If the download doesn\u2019t start, try another browser, for example Firefox.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On that device, press ",(0,n.kt)("strong",{parentName:"p"},"Win"),", type ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage computer certificates")," and press ",(0,n.kt)("strong",{parentName:"p"},"Enter"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("em",{parentName:"p"},"Certificates \u2014 Local Computer")," page, find the ",(0,n.kt)("em",{parentName:"p"},"Trusted Root Certification Authorities")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Certificates")," folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c")," \ud3f4\ub354\ub97c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc73c\ub85c \ud074\ub9ad\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \uc791\uc5c5")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uac00\uc838\uc624\uae30"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c \uac00\uc838\uc624\uae30 \ub9c8\ubc95\uc0ac")," \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc74c"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ucc3e\uc544\ubcf4\uae30"),"\ub97c \ud074\ub9ad\ud558\uc5ec \uc778\uc99d\uc11c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," certificate file, select it, click ",(0,n.kt)("strong",{parentName:"p"},"Open"),", then ",(0,n.kt)("strong",{parentName:"p"},"Next"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \uc778\uc99d\uc11c\ub97c \ub2e4\uc74c \uc2a4\ud1a0\uc5b4\uc5d0 \ubc30\uce58")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that the ",(0,n.kt)("em",{parentName:"p"},"Certificate store")," field displays ",(0,n.kt)("em",{parentName:"p"},"Trusted Root Certification Authorities")," and click ",(0,n.kt)("strong",{parentName:"p"},"Next"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub9c8\uce68"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press ",(0,n.kt)("strong",{parentName:"p"},"Win"),", then open ",(0,n.kt)("strong",{parentName:"p"},"Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c & \uc778\ud130\ub137")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc790\ub3d9 \uac10\uc9c0 \uc124\uc815")," \ub044\uae30.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\ud504\ub85d\uc2dc \uc11c\ubc84 \uc0ac\uc6a9")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud1a0\uae00\uc744 \ucf2d\ub2c8\ub2e4. For ",(0,n.kt)("strong",{parentName:"p"},"Proxy IP address"),", type the IP address of your desktop computer that you noted in step 1. ",(0,n.kt)("strong",{parentName:"p"},"\ud3ec\ud2b8"),", \ub370\uc2a4\ud06c\ud1b1 AdGuard \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc800\uc7a5"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"mac"},"Mac"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that AdGuard protection is enabled. On a Windows computer, check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings. For Mac, go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and enable ",(0,n.kt)("strong",{parentName:"p"},"HTTP proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow this link using a web browser: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. If the download doesn\u2019t start, try another browser, for example Firefox.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c \uc778\uc99d\uc11c \ud30c\uc77c\uc744 \ub450 \ubc88 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uad00\ub9ac\uc790 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud55c \ub2e4\uc74c ",(0,n.kt)("strong",{parentName:"p"},"\ud0a4\uccb4\uc778 \uc218\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Spotlight")," (the search icon in the top right corner), type in ",(0,n.kt)("inlineCode",{parentName:"p"},"Keychain Access"),", and then select ",(0,n.kt)("strong",{parentName:"p"},"Keychain Access")," from the search results.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc2dc\uc2a4\ud15c"),"\uc5d0\uc11c \ucd94\uac00\ud55c \uc778\uc99d\uc11c\ub97c \uac15\uc870 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click it and select ",(0,n.kt)("strong",{parentName:"p"},"Get Info")," from the context menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc2e0\ub8b0"),"\ub97c \ud655\uc7a5\ud558\uc5ec \uc778\uc99d\uc11c\uc5d0 \ub300\ud55c \uc2e0\ub8b0 \uc815\ucc45\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\ubcf4\uc548 \uc18c\ucf13 \uacc4\uce35(SSL)"),"\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ud56d\uc0c1 \uc2e0\ub8b0"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"System Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and select the active connection at the top.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc138\ubd80 \uc815\ubcf4...")," \ub97c \ud074\ub9ad\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc")," \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tick two checkboxes: ",(0,n.kt)("em",{parentName:"p"},"Web proxy (HTTP)")," and ",(0,n.kt)("em",{parentName:"p"},"Secure web proxy (HTTPS)"),". In the ",(0,n.kt)("strong",{parentName:"p"},"Server")," field, type the IP address of your computer that you noted in step 1. ",(0,n.kt)("strong",{parentName:"p"},"\ud3ec\ud2b8")," \ud544\ub4dc\uc5d0 AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that AdGuard protection is enabled. On a Windows computer, check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings. For Mac, go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and enable ",(0,n.kt)("strong",{parentName:"p"},"HTTP proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ub9c1\ud06c\ub97c \ub530\ub974\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. If the download doesn\u2019t start, try another browser, for example Firefox.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate and tap the previously downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," certificate to open the file and follow the instructions to install the certificate.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Android devices do not trust certificates by default, so there will be a warning \u2014 you can ignore it. On some phones you may be asked to enter your device password. Do so, then press ",(0,n.kt)("strong",{parentName:"p"},"OK"),". The certificate will be installed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud65c\uc131 Wi-Fi \ub124\ud2b8\uc6cc\ud06c\uc758 \uace0\uae09 \uc124\uc815\uc744 \uc5fd\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the ",(0,n.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,n.kt)("strong",{parentName:"p"},"Proxy hostname"),", enter the noted IP address of your desktop computer you noted in step 1. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),", AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that AdGuard protection is enabled. On a Windows computer, check the box ",(0,n.kt)("strong",{parentName:"p"},"Use AdGuard as an HTTP proxy")," in the ",(0,n.kt)("strong",{parentName:"p"},"Network")," tab of its settings. For Mac, go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Preferences")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," and enable ",(0,n.kt)("strong",{parentName:"p"},"HTTP proxy"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ub9c1\ud06c\ub97c \ub530\ub974\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. If the download doesn\u2019t start, try another browser, for example Firefox.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Transfer the downloaded ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your iOS device, open ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Profile Downloaded")," and tap ",(0,n.kt)("strong",{parentName:"p"},"Install")," in the top right corner. \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uace0 \uc124\uce58\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\uc644\ub8cc"),"\ub97c \ud0ed\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc77c\ubc18")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc815\ubcf4")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc778\uc99d\uc11c \uc2e0\ub8b0 \uc124\uc815"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc606\uc758 \uc2a4\uc704\uce58\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4 ",(0,n.kt)("em",{parentName:"p"},"Adguard Personal CA"),". \uc774\uc81c \uc778\uc99d\uc11c\uac00 \uc124\uce58\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud574\ub2f9 \uc7a5\uce58\uc5d0\uc11c \ud65c\uc131 Wi-Fi \ub124\ud2b8\uc6cc\ud06c\uc758 \uace0\uae09 \uc124\uc815\uc744 \uc5fd\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change the ",(0,n.kt)("strong",{parentName:"p"},"Proxy type")," to ",(0,n.kt)("strong",{parentName:"p"},"Manual"),". For ",(0,n.kt)("strong",{parentName:"p"},"Proxy hostname"),", type the IP address of your computer you noted in step 1. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),", AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))))}d.isMDXComponent=!0}}]);