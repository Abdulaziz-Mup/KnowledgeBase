"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9589],{4137:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8511:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={title:"Installation",sidebar_position:2},i=void 0,l={unversionedId:"adguard-for-android/installation",id:"adguard-for-android/installation",title:"Installation",description:"System  requirements",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-android/installation.md",sourceDirName:"adguard-for-android",slug:"/adguard-for-android/installation",permalink:"/KnowledgeBase/es/adguard-for-android/installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Features overview",permalink:"/KnowledgeBase/es/adguard-for-android/overview"},next:{title:"Battery and traffic consumption issues",permalink:"/KnowledgeBase/es/adguard-for-android/solving-problems/battery"}},s={},d=[{value:"System  requirements",id:"system--requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Uninstalling/Reinstalling AdGuard",id:"uninstallingreinstalling-adguard",level:2}],p={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"system--requirements"},"System  requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OS version:")," Android 5.0 or higher."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RAM:")," at least 2 GB."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Free disk space:")," 120 MB."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Most Android-based apps are distributed via Google Play; however, AdGuard is not presented there, because Google prohibits distribution of network-level ad blockers via Google Play, i.e. apps that block commercials in other apps. You will find more information about Google restrictive policy ",(0,r.kt)("a",{parentName:"p",href:"https://blog.adguard.com/en/google-removes-adguard-android-app-google-play/"},"in our blog"),"."),(0,r.kt)("p",null,"That\u2019s why you can only install AdGuard for Android manually. To use the app on your mobile device, you will need to do the following."),(0,r.kt)("p",null,"First of all, allow installing apps from unknown sources in your device\u2019s OS settings. For this you will need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Android 8+: start downloading ",(0,r.kt)("a",{parentName:"li",href:"https://adguard.com/download.html?auto=1"},"AdGuard apk")," (see the next step), you'll be prompted to allow permission. Tap ",(0,r.kt)("strong",{parentName:"li"},"Settings")," in the opened window and enable ",(0,r.kt)("strong",{parentName:"li"},"Allow from this source")," switch. Then resume the installation."),(0,r.kt)("li",{parentName:"ul"},"For Android 6 and 7: open ",(0,r.kt)("strong",{parentName:"li"},"Settings"),", then select ",(0,r.kt)("strong",{parentName:"li"},"Additional settings")," in ",(0,r.kt)("strong",{parentName:"li"},"System & Device"),". Switch on ",(0,r.kt)("strong",{parentName:"li"},"Unknown sources")," and press ",(0,r.kt)("strong",{parentName:"li"},"OK")," in the system warning window.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/unknown_sources1.png",alt:"Installing apps from unknown sources *mobile"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Android 5: open ",(0,r.kt)("strong",{parentName:"li"},"Settings"),", then select ",(0,r.kt)("strong",{parentName:"li"},"Security")," in the ",(0,r.kt)("strong",{parentName:"li"},"Personal")," section. Switch on ",(0,r.kt)("strong",{parentName:"li"},"Unknown sources")," and press ",(0,r.kt)("strong",{parentName:"li"},"OK")," in the system warning window.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/unknown_sources2.png",alt:"Installing apps from unknown sources *mobile"})),(0,r.kt)("p",null,"You can now install the app on your device. Start the browser and type in the following URL: ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/apk"},"https://adguard.com/apk"),", or scan this QR code:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/qr.png",alt:"QR code *mobile"})),(0,r.kt)("p",null,"You will see the request to save the downloaded file. Press ",(0,r.kt)("strong",{parentName:"p"},"OK"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/save_the_file.png",alt:"Save the file *mobile"})),(0,r.kt)("p",null,"When the download is complete, the system will ask you if you want to install the AdGuard app. Press ",(0,r.kt)("strong",{parentName:"p"},"Install"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/1.png",alt:"Installation *mobile_border"})),(0,r.kt)("p",null,"You will then be asked to read the ",(0,r.kt)("strong",{parentName:"p"},"License agreement")," and AdGuard's ",(0,r.kt)("strong",{parentName:"p"},"Privacy Policy"),". You can also participate in product development. To do this, you should check boxes ",(0,r.kt)("em",{parentName:"p"},"Send automatic crash reports")," and ",(0,r.kt)("em",{parentName:"p"},"Send technical and interaction data"),". Tap ",(0,r.kt)("strong",{parentName:"p"},"Accept")," after that."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/2.png",alt:"Privacy Policy *mobile_border"})),(0,r.kt)("p",null,"Then you'll need to choose between a ",(0,r.kt)("strong",{parentName:"p"},"Quick")," and ",(0,r.kt)("strong",{parentName:"p"},"Thorough")," setups."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/3.png",alt:"Setups *mobile_border"})),(0,r.kt)("p",null,"The latter starts a first launch sequence to configure the app to suit your needs. First, you'll be asked whether you want to enable search ads:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/5.png",alt:"Search ads *mobile_border"})),(0,r.kt)("p",null,'The next step is to block or keep social widgets (e.g. "Like" buttons):'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/6.png",alt:"Social widgets *mobile_border"})),(0,r.kt)("p",null,"Next is Annoyances: cookie notifications, support windows etc.:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/7.png",alt:"Annoyances *mobile_border"})),(0,r.kt)("p",null,"You don't have to choose anything on this screen: just take note of the information on how to watch YouTube videos without ads:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/youtube.jpg",alt:"YouTube *mobile_border"})),(0,r.kt)("p",null,"Up next is privacy settings. Choose a desirable protection level:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/8.png",alt:"Privacy settings *mobile_border"})),(0,r.kt)("p",null,"On the next screen, select whether you want to get notifications about dangerous websites:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/9.png",alt:"Security *mobile_border"})),(0,r.kt)("p",null,"The next step is rather important. It's about HTTPS filtering, and we recommend turning it on for the best ad-blocking quality:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/10.png",alt:"HTTPS filtering *mobile_border"})),(0,r.kt)("p",null,"The last step is to enable local VPN:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/11.png",alt:"Local VPN *mobile_border"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"AdGuard")," app installation is complete."),(0,r.kt)("h2",{id:"uninstallingreinstalling-adguard"},"Uninstalling/Reinstalling AdGuard"),(0,r.kt)("p",null,"If you need to reinstall AdGuard on your mobile device, first delete it by opening ",(0,r.kt)("strong",{parentName:"p"},"Settings")," and choosing ",(0,r.kt)("strong",{parentName:"p"},"Installed Apps")," (Android 6), ",(0,r.kt)("strong",{parentName:"p"},"Apps")," (Android 5 and 7) or ",(0,r.kt)("strong",{parentName:"p"},"Apps & notifications")," (Android 8+). Find ",(0,r.kt)("strong",{parentName:"p"},"AdGuard")," in the list of installed apps and press ",(0,r.kt)("strong",{parentName:"p"},"Uninstall"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/12.png",alt:"Reinstall AdGuard *mobile_border"})),(0,r.kt)("p",null,"To reinstall the app, repeat the actions described in the Installation section."))}c.isMDXComponent=!0}}]);