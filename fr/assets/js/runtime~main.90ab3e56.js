(()=>{"use strict";var e,a,f,c,d,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}t.m=b,t.c=r,e=[],t.O=(a,f,c,d)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],d=e[i][2];for(var r=!0,o=0;o<f.length;o++)(!1&d||b>=d)&&Object.keys(t.O).every((e=>t.O[e](f[o])))?f.splice(o--,1):(r=!1,d<b&&(b=d));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,c,d]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var d=Object.create(null);t.r(d);var b={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(d,b),d},t.d=(e,a)=>{for(var f in a)t.o(a,f)&&!t.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,f)=>(t.f[f](e,a),a)),[])),t.u=e=>"assets/js/"+({9:"ac054f4e",53:"935f2afb",66:"527e53e2",96:"a9e911a3",189:"8cd59e7e",193:"0b21cfd5",232:"1b07557b",319:"0e20d6ba",348:"f090fe21",398:"d888f7e2",559:"ed9060b0",560:"0b635618",622:"72eb18da",642:"8760e5ec",648:"d752a90c",651:"819bc008",1003:"d6a000c7",1111:"246d09e7",1119:"aa4eb1eb",1156:"c8ce1fce",1161:"d3b254a2",1383:"d670e6dd",1405:"c1c57d8c",1428:"e84ed42a",1467:"57a1d77e",1473:"fbd8e664",1502:"cf0dd637",1599:"f8588c8c",1617:"420ba01a",1619:"08647469",1691:"a0d1d7c6",1703:"f2c74798",1797:"db17ce34",1852:"9a88c125",1913:"234816c2",2090:"859f1523",2122:"ccc9a28a",2215:"45cbfb53",2227:"735c557e",2288:"1b683c8c",2384:"bf9022b3",2408:"7e0bea30",2464:"a6d7d0e0",2492:"0526e729",2542:"bf0e075a",2544:"75994488",2591:"f4f99967",2690:"3c60388d",2737:"a18c171f",2768:"a2bc6e4c",2792:"e504d095",2941:"06a6c16e",2991:"dd3545a9",3022:"0c05ca44",3064:"c2dc4f5f",3143:"e2e2f007",3212:"c9c2282c",3219:"e86748ef",3220:"0d980e74",3280:"88ef3a22",3366:"b67395f0",3418:"e0bd5cbd",3447:"14b557a1",3454:"ea875df7",3467:"1afa89fa",3764:"24b0b62f",3781:"daed1089",3785:"ff8d4e5d",3813:"f2106e0d",3853:"59880946",4010:"66bfc473",4292:"0501d6aa",4300:"2bfb80c7",4342:"ca5112a3",4371:"97614b97",4481:"08b75592",4483:"e774600c",4522:"c8af63fd",4524:"0e612469",4549:"d004b6d2",4647:"41ff932e",4668:"59912a65",4671:"a83fc20f",4738:"805d6c1d",4807:"37806637",4947:"3d5d5d3e",4964:"0d99898f",5246:"b706a462",5360:"40258e94",5396:"f04887e1",5416:"f77a75a8",5453:"65177bf1",5484:"2377851d",5584:"03fc0fe9",5607:"25852229",5847:"1e44bfb3",5963:"8b422fad",6014:"ff47e479",6018:"41707ea9",6039:"d16440c9",6043:"1ae46d8c",6148:"f63905da",6350:"c3a3f486",6360:"b4d46122",6431:"f7161833",6555:"4b966cbb",6755:"1b181171",6788:"925d6df4",6821:"96a95869",6860:"e214b540",6995:"b8f0e313",7064:"e6ce6ac8",7123:"1919fb2e",7158:"810f034c",7267:"f9c2e761",7311:"cdce8b57",7328:"fbf7c5fc",7335:"330d9773",7372:"d06fe790",7413:"9dbbe290",7457:"f0a54bf5",7461:"1fe3a16a",7501:"481eb950",7594:"66485836",7696:"53526bba",7747:"83f3d654",7855:"457c70d2",7918:"17896441",7920:"1a4e3797",7921:"fddca56f",7945:"a471a08e",8065:"e7ac6719",8077:"a473a5e5",8110:"5cff74af",8195:"af9cd064",8276:"fef33957",8372:"54eb534a",8400:"e68b1f8a",8451:"39cf7723",8542:"082e5464",8583:"f6325308",8731:"bb4bcf9f",8813:"3313b781",9026:"26d3baf5",9048:"010e6fcc",9121:"3f943ca4",9165:"2a229c0f",9191:"f671203e",9192:"6793e90e",9262:"3013260b",9346:"b6fcba4a",9416:"057a959d",9434:"ceafaeb4",9445:"abdb0839",9514:"1be78505",9554:"2c7a94f7",9681:"1be3701d",9800:"c16b29a1",9812:"2d4650ef",9820:"be8c4767",9884:"1517bf64",9917:"c1956d74",9930:"e5797b38",9963:"3f0541e6"}[e]||e)+"."+{9:"c1418bb2",53:"8bd75ac5",66:"9d1b1bc9",96:"00e8235b",118:"f086678f",189:"2c04a797",193:"d32abef3",232:"3c1906ec",319:"487bfe00",348:"52cd214e",398:"363e7be6",511:"6b7af6f3",559:"52cb56ba",560:"447cf5bd",622:"a03211fb",642:"b817558d",648:"246074e3",651:"474c54e6",1003:"9136f1da",1111:"8a259d44",1119:"b3b6694d",1144:"365b509b",1156:"2e768a64",1161:"8b85e5b2",1383:"1a2b8c2e",1405:"6267e484",1428:"0827da1e",1467:"a6642967",1473:"2ea55a70",1502:"1bf10cf6",1599:"4f5ed2fd",1617:"6e7e62a0",1619:"b59c7efc",1691:"d4c2c613",1703:"7809aa91",1797:"a09ae5a7",1852:"f1228bac",1913:"782f0c5d",2090:"2896e5d0",2122:"0b14c4c9",2215:"8f5d817a",2227:"aca52479",2288:"27d02f01",2384:"8b585c2e",2408:"4c21e278",2464:"37a79bad",2492:"b3825a41",2542:"969869f6",2544:"148566ea",2591:"3a1083bf",2664:"0d1470f9",2690:"69b3d318",2737:"a3a4e338",2768:"8d7eb666",2792:"c4c80e1d",2941:"0fb44c62",2991:"e483218a",3022:"8dbba7b1",3064:"c8ecad6e",3143:"fe48d96b",3212:"60b6e8b8",3219:"e181a055",3220:"e8052445",3280:"dd5e0f35",3366:"29cbede0",3418:"d6f0a0da",3447:"ef6817f7",3454:"bb2fe7f6",3467:"08e3118b",3764:"07d68a64",3781:"90028391",3785:"c189f887",3813:"2297c860",3853:"77d02c55",4010:"9482182d",4248:"37e6ab5b",4292:"008bdf1d",4300:"e846380b",4342:"c0b28f69",4371:"07dfb01e",4481:"15e8f385",4483:"e0ac757b",4522:"c61be0f9",4524:"074fd2d6",4549:"12e9186b",4647:"0a3139d5",4668:"0778af63",4671:"9f647d4c",4738:"e82c4199",4807:"74549cf0",4947:"58698f4d",4964:"1a04c274",5246:"9625a07b",5360:"23935c24",5396:"704f7307",5416:"d45ec0e5",5453:"ea32e598",5484:"37f88070",5584:"2d754427",5607:"6bcde198",5847:"9ad14456",5963:"059bb637",6014:"d805368d",6018:"65a09dd5",6039:"40a4d718",6043:"bf283b63",6148:"255dd5c6",6350:"6b03068f",6360:"88f4b052",6431:"50200c7f",6555:"451e652b",6755:"c68ed720",6788:"031a8a3a",6821:"eccb1186",6860:"7d3cdd44",6995:"53d55caf",7064:"7d336a43",7123:"7f661957",7158:"f7de4e04",7267:"4dcd9a35",7311:"368a81c0",7328:"95c0302e",7335:"251d5f3a",7372:"78ed1e78",7413:"6af293a1",7457:"e2f6474a",7461:"b717a825",7501:"d81615c8",7594:"c958104e",7696:"e4975ff0",7747:"a825c7cd",7855:"2c670397",7918:"03705839",7920:"2cf088e7",7921:"067c09ef",7936:"6f933266",7945:"f7dbac09",8065:"1fc59bc4",8077:"e735a968",8110:"cc1e0258",8195:"deaa0f47",8276:"6d4516f4",8372:"3be9f3d8",8400:"b95736de",8451:"3562862f",8542:"a095b1da",8583:"857d1cb5",8731:"eda77c2b",8813:"2360f814",9026:"77285a24",9048:"c64d1a59",9121:"ac177b38",9165:"d0ea0f58",9191:"2b417382",9192:"a365772a",9262:"0ee06ff4",9346:"b874586d",9416:"10414343",9434:"4793410f",9445:"fb5c2563",9514:"efa55ca1",9554:"759da88c",9681:"54b5219a",9800:"77719ae1",9812:"70553452",9820:"87ebbbcf",9884:"5f3e5e17",9917:"db5be958",9930:"dc095f86",9963:"fea9e983",9964:"2d41dc84"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},d="adguard-knowledge-base:",t.l=(e,a,f,b)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+f),r.src=e),c[e]=[a];var l=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var d=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/KnowledgeBase/fr/",t.gca=function(e){return e={17896441:"7918",25852229:"5607",37806637:"4807",59880946:"3853",66485836:"7594",75994488:"2544",ac054f4e:"9","935f2afb":"53","527e53e2":"66",a9e911a3:"96","8cd59e7e":"189","0b21cfd5":"193","1b07557b":"232","0e20d6ba":"319",f090fe21:"348",d888f7e2:"398",ed9060b0:"559","0b635618":"560","72eb18da":"622","8760e5ec":"642",d752a90c:"648","819bc008":"651",d6a000c7:"1003","246d09e7":"1111",aa4eb1eb:"1119",c8ce1fce:"1156",d3b254a2:"1161",d670e6dd:"1383",c1c57d8c:"1405",e84ed42a:"1428","57a1d77e":"1467",fbd8e664:"1473",cf0dd637:"1502",f8588c8c:"1599","420ba01a":"1617","08647469":"1619",a0d1d7c6:"1691",f2c74798:"1703",db17ce34:"1797","9a88c125":"1852","234816c2":"1913","859f1523":"2090",ccc9a28a:"2122","45cbfb53":"2215","735c557e":"2227","1b683c8c":"2288",bf9022b3:"2384","7e0bea30":"2408",a6d7d0e0:"2464","0526e729":"2492",bf0e075a:"2542",f4f99967:"2591","3c60388d":"2690",a18c171f:"2737",a2bc6e4c:"2768",e504d095:"2792","06a6c16e":"2941",dd3545a9:"2991","0c05ca44":"3022",c2dc4f5f:"3064",e2e2f007:"3143",c9c2282c:"3212",e86748ef:"3219","0d980e74":"3220","88ef3a22":"3280",b67395f0:"3366",e0bd5cbd:"3418","14b557a1":"3447",ea875df7:"3454","1afa89fa":"3467","24b0b62f":"3764",daed1089:"3781",ff8d4e5d:"3785",f2106e0d:"3813","66bfc473":"4010","0501d6aa":"4292","2bfb80c7":"4300",ca5112a3:"4342","97614b97":"4371","08b75592":"4481",e774600c:"4483",c8af63fd:"4522","0e612469":"4524",d004b6d2:"4549","41ff932e":"4647","59912a65":"4668",a83fc20f:"4671","805d6c1d":"4738","3d5d5d3e":"4947","0d99898f":"4964",b706a462:"5246","40258e94":"5360",f04887e1:"5396",f77a75a8:"5416","65177bf1":"5453","2377851d":"5484","03fc0fe9":"5584","1e44bfb3":"5847","8b422fad":"5963",ff47e479:"6014","41707ea9":"6018",d16440c9:"6039","1ae46d8c":"6043",f63905da:"6148",c3a3f486:"6350",b4d46122:"6360",f7161833:"6431","4b966cbb":"6555","1b181171":"6755","925d6df4":"6788","96a95869":"6821",e214b540:"6860",b8f0e313:"6995",e6ce6ac8:"7064","1919fb2e":"7123","810f034c":"7158",f9c2e761:"7267",cdce8b57:"7311",fbf7c5fc:"7328","330d9773":"7335",d06fe790:"7372","9dbbe290":"7413",f0a54bf5:"7457","1fe3a16a":"7461","481eb950":"7501","53526bba":"7696","83f3d654":"7747","457c70d2":"7855","1a4e3797":"7920",fddca56f:"7921",a471a08e:"7945",e7ac6719:"8065",a473a5e5:"8077","5cff74af":"8110",af9cd064:"8195",fef33957:"8276","54eb534a":"8372",e68b1f8a:"8400","39cf7723":"8451","082e5464":"8542",f6325308:"8583",bb4bcf9f:"8731","3313b781":"8813","26d3baf5":"9026","010e6fcc":"9048","3f943ca4":"9121","2a229c0f":"9165",f671203e:"9191","6793e90e":"9192","3013260b":"9262",b6fcba4a:"9346","057a959d":"9416",ceafaeb4:"9434",abdb0839:"9445","1be78505":"9514","2c7a94f7":"9554","1be3701d":"9681",c16b29a1:"9800","2d4650ef":"9812",be8c4767:"9820","1517bf64":"9884",c1956d74:"9917",e5797b38:"9930","3f0541e6":"9963"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(a,f)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>c=e[a]=[f,d]));f.push(c[2]=d);var b=t.p+t.u(a),r=new Error;t.l(b,(f=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var d=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+d+": "+b+")",r.name="ChunkLoadError",r.type=d,r.request=b,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,f)=>{var c,d,b=f[0],r=f[1],o=f[2],n=0;if(b.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var i=o(t)}for(a&&a(f);n<b.length;n++)d=b[n],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(i)},f=self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();