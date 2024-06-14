"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7077],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(i),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return i?a.createElement(g,n(n({ref:t},u),{},{components:i})):a.createElement(g,n({ref:t},u))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,n[1]=l;for(var p=2;p<o;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7342:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(7462),r=(i(7294),i(4137));const o={title:"How to report websites and apps",sidebar_position:3},n=void 0,l={unversionedId:"guides/report-website",id:"guides/report-website",title:"How to report websites and apps",description:"Utilizzando i blocchi di annunci, potresti riscontrare un errato funzionamento di certi siti web o elementi corrotti della pagina. Questi problemi potrebbero sorgere a causa di vari fattori:",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/guides/report-website.md",sourceDirName:"guides",slug:"/guides/report-website",permalink:"/KnowledgeBase/it/guides/report-website",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-website.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to report websites and apps",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Come installare un certificato proxy",permalink:"/KnowledgeBase/it/guides/proxy-certificate"},next:{title:"Come segnalare i bug",permalink:"/KnowledgeBase/it/guides/report-bugs"}},s={},p=[{value:"Segnalare un sito web",id:"report",level:2},{value:"Estensione del browser",id:"extension",level:3},{value:"Windows",id:"windows",level:3},{value:"Android",id:"android",level:3},{value:"Mac",id:"mac",level:3},{value:"iOS",id:"ios",level:3},{value:"Compilazione del modulo",id:"form",level:2},{value:"Diagnosi di un problema",id:"issue",level:2},{value:"<strong>Filtri</strong>",id:"filtri",level:3},{value:"<strong>Modalit\xe0 Invisibilit\xe0</strong>",id:"modalit\xe0-invisibilit\xe0",level:3},{value:"<strong>Estensioni</strong>",id:"estensioni",level:3},{value:"<strong>Blocchi di terze parti</strong>",id:"blocchi-di-terze-parti",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Utilizzando i blocchi di annunci, potresti riscontrare un errato funzionamento di certi siti web o elementi corrotti della pagina. Questi problemi potrebbero sorgere a causa di vari fattori:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Regole dell'utente errate;"),(0,r.kt)("li",{parentName:"ul"},"Algoritmi di aggiunta degli annunci modificati;"),(0,r.kt)("li",{parentName:"ul"},"Filtri/estensioni aggiunti da sviluppatori di terze parti;"),(0,r.kt)("li",{parentName:"ul"},"Gli autori di uno dei filtri hanno commesso un errore creando la regola;"),(0,r.kt)("li",{parentName:"ul"},"Reinserimento di annunci. Scopri di pi\xf9 su questo metodo nel nostro ",(0,r.kt)("a",{parentName:"li",href:"https://adguard.com/en/blog/ad-reinsertion.html"},"blog"),".")),(0,r.kt)("p",null,"Puoi aiutarci compilando un modulo con esempi di annunci che hai incontrato. Per farlo, sei pregato di utilizzare le istruzioni per il tuo OS."),(0,r.kt)("h2",{id:"report"},"Segnalare un sito web"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Quando invii un reclamo tramite l'app o tramite AdGuard Browser Assistant, tutte le informazioni sono automaticamente precompilate. Tranne per gli screenshot, che dovrai scattare e allegare da solo. Se stai utilizzando un ",(0,r.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"collegamento diretto"),", dovrai inserire i dati manualmente.")),(0,r.kt)("p",null,"Per segnalare il reinserimento di un annuncio o l'errata visualizzazione di un sito web, devi:"),(0,r.kt)("h3",{id:"extension"},"Estensione del browser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aprire le impostazioni dell'estensione del browser, cliccando sull'icona corrispondente;"),(0,r.kt)("li",{parentName:"ul"},"Cliccare su ",(0,r.kt)("strong",{parentName:"li"},"Segnala un problema"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/5si74extension.png",alt:"extension_issue *mobile_border"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dopo aver compilato il modulo, sar\xe0 creato automaticamente un ticket su ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),". Inoltre, sar\xe0 presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apri ",(0,r.kt)("a",{parentName:"li",href:"/adguard-for-windows/browser-assistant"},"AdGuard Browser Assistant")," e clicca su ",(0,r.kt)("strong",{parentName:"li"},"Segnala un problema"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/browser-assistant.png",alt:"windows *border"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compila il modulo per segnalare un reclamo;"),(0,r.kt)("li",{parentName:"ul"},"Una volta fatto, sar\xe0 creato automaticamente un ticket su ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),". Inoltre, sar\xe0 presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.")),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apri le impostazioni di AdGuard;"),(0,r.kt)("li",{parentName:"ul"},"Scegli ",(0,r.kt)("strong",{parentName:"li"},"Supporto"),", quindi ",(0,r.kt)("strong",{parentName:"li"},"Segnala blocco errato"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/apicfkandroid-new.jpg",alt:"android *mobile_border"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dopo aver compilato il modulo, sar\xe0 creato automaticamente un ticket su ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),". Inoltre, sar\xe0 presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.")),(0,r.kt)("h3",{id:"mac"},"Mac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("a",{parentName:"li",href:"/adguard-for-mac/features/browser-assistant"},"AdGuard Browser Assistant")," and hit ",(0,r.kt)("strong",{parentName:"li"},"Report an issue"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/browser-assistant-mac.png",alt:"mac *mobile"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compila il modulo per segnalare un reclamo;"),(0,r.kt)("li",{parentName:"ul"},"Una volta fatto, sar\xe0 creato automaticamente un ticket su ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),". Inoltre, sar\xe0 presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.")),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apri le impostazioni di AdGuard;"),(0,r.kt)("li",{parentName:"ul"},"Scegli ",(0,r.kt)("strong",{parentName:"li"},"Supporto"),", quindi ",(0,r.kt)("strong",{parentName:"li"},"Segnala blocco errato"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/blog/new/fnl9aios.jpeg",alt:"ios *mobile_border"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compila il modulo per segnalare un reclamo;"),(0,r.kt)("li",{parentName:"ul"},"Una volta fatto, sar\xe0 creato automaticamente un ticket su ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardFilters/issues"},"GitHub"),". Inoltre, sar\xe0 presente un collegamento per monitorare i progressi sulla soluzione al tuo problema.")),(0,r.kt)("h2",{id:"form"},"Compilazione del modulo"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Quando invii un reclamo tramite l'app o tramite AdGuard Assistant, tutte le informazioni sono automaticamente precompilate. Tranne per gli screenshot, che dovrai scattare e allegare da solo. Se stai utilizzando un ",(0,r.kt)("a",{parentName:"p",href:"https://reports.adguard.com/new_issue.html"},"collegamento diretto"),", dovrai inserire i dati manualmente.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"La compilazione del modulo inizia descrivendo il tipo e la versione di un prodotto;"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma1en.png",alt:"forma1 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specifica il tipo di problema e le informazioni aggiuntive sull'utilizzo di software di terze parti (antivirus, VPN);"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma2en.png",alt:"forma2 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inserisci l'indirizzo della pagina e il browser (o il link di download, nel caso di un'app), su cui hai riscontrato un problema;"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma3en.png",alt:"forma3 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"La configurazione dell'applicazione dev'essere specificata:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"I filtri che utilizzi;"),(0,r.kt)("li",{parentName:"ul"},"Le impostazioni della modalit\xe0 Stealth, se questa funzione \xe8 abilitata.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/guides/forma4en.png",alt:"forma4 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../take-screenshot"},"Fornisci uno screenshot")," che catturi l'essenza del problema;"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Importante"),": Nascondi le tue informazioni personali (email, numero di telefono, etc.), poich\xe9 gli screenshot saranno disponibili pubblicamente.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma5en.png",alt:"forma5 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fornisci le informazioni aggiuntive che aiuteranno gli sviluppatori dei filtri a comprendere la situazione;"),(0,r.kt)("p",{parentName:"li"},"Inoltre, inserisci il tuo profilo di ",(0,r.kt)("strong",{parentName:"p"},"GitHub"),", se disponibile (\xe8 necessario perch\xe9 gli sviluppatori possano contattarti, nel caso in cui necessitino di ulteriori dettagli);"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma6en.png",alt:"forma6 *border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Controlla ogni passaggio prima di inviare il modulo;"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma7en.png",alt:"forma7 *mobile_border"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ti sar\xe0 fornito un link per tracciare i progressi della tua segnalazione."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/guides/forma8en.png",alt:"forma8 *border"})))),(0,r.kt)("h2",{id:"issue"},"Diagnosi di un problema"),(0,r.kt)("p",null,"Quest'opzione \xe8 adatta a coloro che non temono le difficolt\xe0 e non si preoccupano di provare a trovare il problema per conto proprio. Ci\xf2 non richiede alcuna abilit\xe0 speciale o conoscenze approfondite di HTML e CSS."),(0,r.kt)("p",null,"Ad esempio, riscontri una situazione in cui il tuo sito web preferito non si apre, l'autorizzazione \xe8 corrotta, o alcuni elementi della pagina sono mostrati in modo errato. La causa potrebbe essere l'utilizzo dell'impostazione di specifici filtri/estensione/Modalit\xe0 Stealth. Per diagnosticare tali problemi, devi fare quanto segue:"),(0,r.kt)("h3",{id:"filtri"},(0,r.kt)("strong",{parentName:"h3"},"Filtri")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Disabilita ",(0,r.kt)("strong",{parentName:"li"},"Blocco annunci"),";"),(0,r.kt)("li",{parentName:"ol"},'Se il problema \xe8 stato risolto, riabilita il modulo e disabilita i filtri, uno per uno. Questo, per identificare i filtri che "corrompono" la pagina;'),(0,r.kt)("li",{parentName:"ol"},'Se sei riuscito a scoprire quale filtro "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, \xe8 desiderabile tornare alle impostazioni iniziali;'),(0,r.kt)("li",{parentName:"ol"},"Se la disattivazione di tutti i filtri non ha prodotto alcun risultato, applica la regola ",(0,r.kt)("strong",{parentName:"li"},"@@||example.com^$document,extension"),"; in cui ",(0,r.kt)("strong",{parentName:"li"},"example.com")," \xe8 un esempio di nome di un sito, che dev'essere sostituito dalla tua opzione;"),(0,r.kt)("li",{parentName:"ol"},"In caso di fallimento (problema non risolto), passa alla sezione ",(0,r.kt)("strong",{parentName:"li"},"Modalit\xe0 Stealth"),".")),(0,r.kt)("h3",{id:"modalit\xe0-invisibilit\xe0"},(0,r.kt)("strong",{parentName:"h3"},"Modalit\xe0 Invisibilit\xe0")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Disabilita la ",(0,r.kt)("strong",{parentName:"li"},"Modalit\xe0 Stealth"),";"),(0,r.kt)("li",{parentName:"ol"},"Se ci\xf2 ha risolto il problema, attiva il modulo e disattiva, una per una, le opzioni della ",(0,r.kt)("strong",{parentName:"li"},"Modalit\xe0 Stealth"),'. Questo, per rilevare quali filtri stanno "corrompendo" la pagina;'),(0,r.kt)("li",{parentName:"ol"},'Se sei riuscito a rilevare quale impostazione "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, \xe8 desiderabile tornare alle impostazioni iniziali;'),(0,r.kt)("li",{parentName:"ol"},"In caso di fallimento (problema non risolto), passa alla sezione ",(0,r.kt)("strong",{parentName:"li"},"Estensioni"),".")),(0,r.kt)("h3",{id:"estensioni"},(0,r.kt)("strong",{parentName:"h3"},"Estensioni")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Disabilita le ",(0,r.kt)("strong",{parentName:"li"},"Estensioni"),";"),(0,r.kt)("li",{parentName:"ol"},"Se ci\xf2 ha risolto il problema, attiva il modulo e disattiva, una per una, le opzioni delle ",(0,r.kt)("strong",{parentName:"li"},"Estensioni"),'. Questo, per scoprire quale impostazione "corrompe" la pagina;'),(0,r.kt)("li",{parentName:"ol"},'Se sei riuscito a rilevare quale impostazione "corrompe" una pagina, dovresti informare gli sviluppatori, compilando il modulo (vedi sopra). In questo caso, \xe8 desiderabile tornare alle impostazioni iniziali.')),(0,r.kt)("h3",{id:"blocchi-di-terze-parti"},(0,r.kt)("strong",{parentName:"h3"},"Blocchi di terze parti")),(0,r.kt)("p",null,"Alcuni browser e programmi antivirus (come Yandex Browser, Kaspersky, etc.), integrano dei blocchi di annunci. Potrebbero influire su e causare problemi all'operazione dei siti. Se utilizzi tali programmi, assicurati che il problema sia dovuto ad ",(0,r.kt)("strong",{parentName:"p"},"AdGuard"),": disabilita il filtraggio di ",(0,r.kt)("strong",{parentName:"p"},"AdGuard")," e prova a riprodurre il problema. Se persiste, significa che \xe8 causato da un'altra applicazione, o dal browser. Se il problema \xe8 causato da ",(0,r.kt)("strong",{parentName:"p"},"AdGuard"),", segui i passaggi descritti nei paragrafi precedenti."))}d.isMDXComponent=!0}}]);