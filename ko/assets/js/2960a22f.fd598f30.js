"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7921],{4137:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),i=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=i(t.components);return r.createElement(m.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,m=t.parentName,k=l(t,["components","mdxType","originalType","parentName"]),d=i(a),s=n,g=d["".concat(m,".").concat(s)]||d[s]||N[s]||p;return a?r.createElement(g,o(o({ref:e},k),{},{components:a})):r.createElement(g,o({ref:e},k))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,o=new Array(p);o[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var i=2;i<p;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1746:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=a(7462),n=(a(7294),a(4137));const p={title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",sidebar_position:2},o=void 0,l={unversionedId:"guides/proxy-certificate",id:"guides/proxy-certificate",title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",description:"\ub370\uc2a4\ud06c\ud1b1 \uc571\uc778 Windows\uc6a9 AdGuard \ubc0f Mac\uc6a9 AdGuard\ub294 \ub2e4\ub978 \uae30\uae30\uc758 \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub2e4\ub978 \uae30\uae30\uc758 \ud2b8\ub798\ud53d(\uc804\uccb4 \ub610\ub294 \ud2b9\uc815 \uc571 \ubc0f \ube0c\ub77c\uc6b0\uc800\uc758 \ud2b8\ub798\ud53d)\uc744 AdGuard\ub97c \ud1b5\ud574 \ub77c\uc6b0\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/proxy-certificate.md",sourceDirName:"guides",slug:"/guides/proxy-certificate",permalink:"/KnowledgeBase/ko/guides/proxy-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/proxy-certificate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud504\ub85d\uc2dc \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"HAR \ud30c\uc77c\uc744 \uc218\uc9d1\ud558\ub294 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/guides/collect-har-file"},next:{title:"\uc6f9\uc0ac\uc774\ud2b8 \ubc0f \uc571 \uc2e0\uace0 \ubc29\ubc95",permalink:"/KnowledgeBase/ko/guides/report-website"}},m={},i=[{value:"\uc778\uc99d\uc11c\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud558\ub294 \ubc29\ubc95",id:"\uc778\uc99d\uc11c\ub97c-\ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0-\uc124\uce58\ud558\ub294-\ubc29\ubc95",level:2},{value:"Windows",id:"windows",level:3},{value:"Mac",id:"mac",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],k={toc:i};function N(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ub370\uc2a4\ud06c\ud1b1 \uc571\uc778 Windows\uc6a9 AdGuard \ubc0f Mac\uc6a9 AdGuard\ub294 \ub2e4\ub978 \uae30\uae30\uc758 \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub2e4\ub978 \uae30\uae30\uc758 \ud2b8\ub798\ud53d(\uc804\uccb4 \ub610\ub294 \ud2b9\uc815 \uc571 \ubc0f \ube0c\ub77c\uc6b0\uc800\uc758 \ud2b8\ub798\ud53d)\uc744 AdGuard\ub97c \ud1b5\ud574 \ub77c\uc6b0\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\uc774\ub7ec\ud55c \uae30\uae30\ub294 AdGuard\uac00 \uc124\uce58\ub41c PC \ub610\ub294 Mac\uacfc \ub3d9\uc77c\ud55c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"HTTP \ud2b8\ub798\ud53d\uc740 \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0\ub3c4 \ud544\ud130\ub9c1\ub418\uc9c0\ub9cc, AdGard\uac00 HTTPS \ud2b8\ub798\ud53d\uc744 \ud544\ud130\ub9c1\ud560 \uc218 \uc788\uc73c\ub824\uba74 \uc5f0\uacb0\ub41c \uae30\uae30\uc5d0 AdGuard \uc778\uc99d\uc11c\ub97c \uc218\ub3d9\uc73c\ub85c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uc778\uc99d\uc11c\ub97c-\ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0-\uc124\uce58\ud558\ub294-\ubc29\ubc95"},"\uc778\uc99d\uc11c\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc124\uce58\ud558\ub294 \ubc29\ubc95"),(0,n.kt)("p",null,"\ud2b8\ub798\ud53d\uc744 \ud544\ud130\ub9c1\ud558\ub824\ub294 \uae30\uae30\uc758 \uc6b4\uc601 \uccb4\uc81c\uc5d0 \ub530\ub77c \ub2e4\uc74c \uc9c0\uce68 \uc911 \ud558\ub098\ub97c \ub530\ub974\uc138\uc694."),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard \ubcf4\ud638 \uae30\ub2a5\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. Windows \ucef4\ud4e8\ud130\uc758 \uacbd\uc6b0, \uc124\uc815\uc758 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"AdGuard\ub97c HTTP \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. Mac\uc758 \uacbd\uc6b0, ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud658\uacbd\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c"),"\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,n.kt)("strong",{parentName:"p"},"HTTP \ud504\ub85d\uc2dc"),"\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub3d9\uc77c\ud55c \ucef4\ud4e8\ud130\uc5d0\uc11c \ub2e4\uc74c \ub9c1\ud06c\ub97c \ub530\ub974\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc73c\uba74 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800(\uc608: Firefox)\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \ud30c\uc77c\uc744 AdGuard\ub97c \ud1b5\ud574 \ud2b8\ub798\ud53d\uc744 \ub77c\uc6b0\ud305\ud558\ub824\ub294 Windows \uae30\uae30\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. USB \ucf00\uc774\ube14, \ube14\ub8e8\ud22c\uc2a4 \ub610\ub294 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud574\ub2f9 \uae30\uae30\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"Win"),"\uc744 \ub204\ub974\uace0 ",(0,n.kt)("inlineCode",{parentName:"p"},"\ucef4\ud4e8\ud130 \uc778\uc99d\uc11c \uad00\ub9ac"),"\ub97c \uc785\ub825\ud55c \ub2e4\uc74c ",(0,n.kt)("strong",{parentName:"p"},"Enter")," \ud0a4\ub97c \ub204\ub985\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c \u2014 \ub85c\uceec \ucef4\ud4e8\ud130")," \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,n.kt)("em",{parentName:"p"},"\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub8e8\ud2b8 \uc778\uc99d \uae30\uad00")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c")," \ud3f4\ub354\ub97c \ucc3e\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c")," \ud3f4\ub354\ub97c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc73c\ub85c \ud074\ub9ad\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \uc791\uc5c5")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uac00\uc838\uc624\uae30"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c \uac00\uc838\uc624\uae30 \ub9c8\ubc95\uc0ac")," \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc74c"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ucc3e\uc544\ubcf4\uae30"),"\ub97c \ud074\ub9ad\ud558\uc5ec \uc778\uc99d\uc11c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \uc778\uc99d\uc11c \ud30c\uc77c\ub85c \uc774\ub3d9\ud558\uc5ec \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\uc5f4\uae30"),"\ub97c \ud074\ub9ad\ud55c \ud6c4 ",(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc74c"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 \uc778\uc99d\uc11c\ub97c \ub2e4\uc74c \uc2a4\ud1a0\uc5b4\uc5d0 \ubc30\uce58")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc778\uc99d\uc11c \uc800\uc7a5\uc18c")," \ud544\ub4dc\uc5d0 ",(0,n.kt)("em",{parentName:"p"},"\uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 \ub8e8\ud2b8 \uc778\uc99d \uae30\uad00"),"\uc774 \ud45c\uc2dc\ub418\ub294\uc9c0 \ud655\uc778\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc74c"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub9c8\uce68"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Win"),"\uc744 \ub204\ub978 \ub2e4\uc74c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815"),"\uc744 \uc5fd\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c & \uc778\ud130\ub137")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc790\ub3d9 \uac10\uc9c0 \uc124\uc815")," \ub044\uae30.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\ud504\ub85d\uc2dc \uc11c\ubc84 \uc0ac\uc6a9")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud1a0\uae00\uc744 \ucf2d\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc IP \uc8fc\uc18c\uc5d0")," 1\ub2e8\uacc4\uc5d0\uc11c \uae30\ub85d\ud55c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud3ec\ud2b8"),", \ub370\uc2a4\ud06c\ud1b1 AdGuard \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc800\uc7a5"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"mac"},"Mac"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard \ubcf4\ud638 \uae30\ub2a5\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. Windows \ucef4\ud4e8\ud130\uc758 \uacbd\uc6b0, \uc124\uc815\uc758 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"AdGuard\ub97c HTTP \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. Mac\uc758 \uacbd\uc6b0, ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud658\uacbd\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c"),"\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,n.kt)("strong",{parentName:"p"},"HTTP \ud504\ub85d\uc2dc"),"\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc73c\uba74 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800(\uc608: Firefox)\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \ud30c\uc77c\uc744 AdGuard\ub97c \ud1b5\ud574 \ud2b8\ub798\ud53d\uc744 \ub77c\uc6b0\ud305\ud558\ub824\ub294 Mac \uae30\uae30\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. USB \ucf00\uc774\ube14, \ube14\ub8e8\ud22c\uc2a4 \ub610\ub294 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c \uc778\uc99d\uc11c \ud30c\uc77c\uc744 \ub450 \ubc88 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uad00\ub9ac\uc790 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud55c \ub2e4\uc74c ",(0,n.kt)("strong",{parentName:"p"},"\ud0a4\uccb4\uc778 \uc218\uc815"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Spotlight"),"(\uc624\ub978\ucabd \uc0c1\ub2e8\uc758 \uac80\uc0c9 \uc544\uc774\ucf58)\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,n.kt)("inlineCode",{parentName:"p"},"\ud0a4\uccb4\uc778 \uc561\uc138\uc2a4"),"\ub97c \uc785\ub825\ud55c \ub2e4\uc74c \uac80\uc0c9 \uacb0\uacfc\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ud0a4\uccb4\uc778 \uc561\uc138\uc2a4"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc2dc\uc2a4\ud15c"),"\uc5d0\uc11c \ucd94\uac00\ud55c \uc778\uc99d\uc11c\ub97c \uac15\uc870 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc778\uc99d\uc11c\ub97c \uc6b0\ud074\ub9ad\ud558\uace0 \ucee8\ud14d\uc2a4\ud2b8 \uba54\ub274\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc815\ubcf4 \uac00\uc838\uc624\uae30"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\uc2e0\ub8b0"),"\ub97c \ud655\uc7a5\ud558\uc5ec \uc778\uc99d\uc11c\uc5d0 \ub300\ud55c \uc2e0\ub8b0 \uc815\ucc45\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"\ubcf4\uc548 \uc18c\ucf13 \uacc4\uce35(SSL)"),"\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\ud56d\uc0c1 \uc2e0\ub8b0"),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc2dc\uc2a4\ud15c \ud658\uacbd\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c"),"\ub97c \uc5f4\uace0 \uc0c1\ub2e8\uc5d0\uc11c \ud65c\uc131 \uc5f0\uacb0\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc138\ubd80 \uc815\ubcf4...")," \ub97c \ud074\ub9ad\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc")," \ud0ed\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub450 \uac1c\uc758 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4: ",(0,n.kt)("em",{parentName:"p"},"\uc6f9 \ud504\ub85d\uc2dc(HTTP)")," \ubc0f ",(0,n.kt)("em",{parentName:"p"},"\ubcf4\uc548 \uc6f9 \ud504\ub85d\uc2dc(HTTPS)"),". ",(0,n.kt)("strong",{parentName:"p"},"\uc11c\ubc84")," \ud544\ub4dc\uc5d0 1\ub2e8\uacc4\uc5d0\uc11c \uae30\ub85d\ud55c \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud3ec\ud2b8")," \ud544\ub4dc\uc5d0 AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"android"},"Android"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard \ubcf4\ud638 \uae30\ub2a5\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. Windows \ucef4\ud4e8\ud130\uc758 \uacbd\uc6b0, \uc124\uc815\uc758 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"AdGuard\ub97c HTTP \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. Mac\uc758 \uacbd\uc6b0, ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud658\uacbd\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c"),"\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,n.kt)("strong",{parentName:"p"},"HTTP \ud504\ub85d\uc2dc"),"\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ub9c1\ud06c\ub97c \ub530\ub974\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc73c\uba74 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800(\uc608: Firefox)\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \ud30c\uc77c\uc744 AdGuard\ub97c \ud1b5\ud574 \ud2b8\ub798\ud53d\uc744 \ub77c\uc6b0\ud305\ud558\ub824\ub294 Android \uae30\uae30\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. USB \ucf00\uc774\ube14, \ube14\ub8e8\ud22c\uc2a4 \ub610\ub294 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc774\uc804\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \uc778\uc99d\uc11c\ub97c \ucc3e\uc544\uc11c \ud0ed\ud558\uc5ec \ud30c\uc77c\uc744 \uc5f4\uace0 \uc9c0\uce68\uc5d0 \ub530\ub77c \uc778\uc99d\uc11c\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Android \uae30\uae30\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc778\uc99d\uc11c\ub97c \uc2e0\ub8b0\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \uacbd\uace0\uac00 \ud45c\uc2dc\ub418\uc9c0\ub9cc \ubb34\uc2dc\ud574\ub3c4 \ub429\ub2c8\ub2e4. \uc77c\ubd80 \ud734\ub300\ud3f0\uc5d0\uc11c\ub294 \uae30\uae30 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\ub77c\ub294 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\uae30 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uace0 ",(0,n.kt)("strong",{parentName:"p"},"OK"),"\ub97c \ub204\ub985\ub2c8\ub2e4. \uc778\uc99d\uc11c\uac00 \uc124\uce58\ub429\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud65c\uc131 Wi-Fi \ub124\ud2b8\uc6cc\ud06c\uc758 \uace0\uae09 \uc124\uc815\uc744 \uc5fd\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \uc720\ud615"),"\uc744 ",(0,n.kt)("strong",{parentName:"p"},"\uc218\ub3d9"),"\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8 \uc774\ub984"),"\uc5d0 1\ub2e8\uacc4\uc5d0\uc11c \uae30\ub85d\ud55c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),", AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))),(0,n.kt)("h3",{id:"ios"},"iOS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ub370\uc2a4\ud06c\ud1b1 \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uae30\ub85d\ud574 \ub450\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard \ubcf4\ud638 \uae30\ub2a5\uc774 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. Windows \ucef4\ud4e8\ud130\uc758 \uacbd\uc6b0, \uc124\uc815\uc758 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c")," \ud0ed\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"AdGuard\ub97c HTTP \ud504\ub85d\uc2dc\ub85c \uc0ac\uc6a9")," \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. Mac\uc758 \uacbd\uc6b0, ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud658\uacbd\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ub124\ud2b8\uc6cc\ud06c"),"\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,n.kt)("strong",{parentName:"p"},"HTTP \ud504\ub85d\uc2dc"),"\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"AdGuard\uac00 \uc124\uce58\ub41c \ucef4\ud4e8\ud130\uc5d0\uc11c \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc74c \ub9c1\ud06c\ub97c \ub530\ub974\uc138\uc694: ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ub2e4\uc6b4\ub85c\ub4dc")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2dc\uc791\ub418\uc9c0 \uc54a\uc73c\uba74 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800(\uc608: Firefox)\ub97c \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc\ud55c ",(0,n.kt)("strong",{parentName:"p"},"cert.cer")," \ud30c\uc77c\uc744 AdGuard\ub97c \ud1b5\ud574 \ud2b8\ub798\ud53d\uc744 \ub77c\uc6b0\ud305\ud558\ub824\ub294 iOS \uae30\uae30\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4. USB \ucf00\uc774\ube14, \ube14\ub8e8\ud22c\uc2a4 \ub610\ub294 \ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"iOS \uae30\uae30\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85c\ud544\uc774 \ub2e4\uc6b4\ub85c\ub4dc\ub428"),"\uc744 \uc5f4\uace0 \uc624\ub978\ucabd \uc0c1\ub2e8\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"\uc124\uce58"),"\ub97c \ud0ed\ud569\ub2c8\ub2e4. \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uace0 \uc124\uce58\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\uc644\ub8cc"),"\ub97c \ud0ed\ud569\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\uc124\uc815")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc77c\ubc18")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc815\ubcf4")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"\uc778\uc99d\uc11c \uc2e0\ub8b0 \uc124\uc815"),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc606\uc758 \uc2a4\uc704\uce58\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4 ",(0,n.kt)("em",{parentName:"p"},"Adguard Personal CA"),". \uc774\uc81c \uc778\uc99d\uc11c\uac00 \uc124\uce58\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ud574\ub2f9 \uc7a5\uce58\uc5d0\uc11c \ud65c\uc131 Wi-Fi \ub124\ud2b8\uc6cc\ud06c\uc758 \uace0\uae09 \uc124\uc815\uc744 \uc5fd\ub2c8\ub2e4.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \uc720\ud615"),"\uc744 ",(0,n.kt)("strong",{parentName:"p"},"\uc218\ub3d9"),"\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud638\uc2a4\ud2b8 \uc774\ub984"),"\uc5d0 1\ub2e8\uacc4\uc5d0\uc11c \uae30\ub85d\ud55c \ucef4\ud4e8\ud130\uc758 IP \uc8fc\uc18c\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. ",(0,n.kt)("strong",{parentName:"p"},"\ud504\ub85d\uc2dc \ud3ec\ud2b8"),", AdGuard \ub370\uc2a4\ud06c\ud1b1 \uc571\uc758 \ub124\ud2b8\uc6cc\ud06c \uc124\uc815\uc5d0\uc11c \uc120\ud0dd\ud55c \ud3ec\ud2b8\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."))))}N.isMDXComponent=!0}}]);