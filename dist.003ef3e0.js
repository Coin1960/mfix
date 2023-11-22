function e(e,t,s,o){Object.defineProperty(e,t,{get:s,set:o,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire19b0,s=t.register;s("lUOEJ",function(s,o){e(s.exports,"WalletConnectModal",()=>i);var a=t("hohVq");class i{constructor(e){this.openModal=a.ModalCtrl.open,this.closeModal=a.ModalCtrl.close,this.subscribeModal=a.ModalCtrl.subscribe,this.setTheme=a.ThemeCtrl.setThemeConfig,(0,a.ThemeCtrl).setThemeConfig(e),(0,a.ConfigCtrl).setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await t("3nCqa");let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),(0,a.OptionsCtrl).setIsUiLoaded(!0)}}}}),s("hohVq",function(s,o){e(s.exports,"RouterCtrl",()=>l),e(s.exports,"CoreUtil",()=>r),e(s.exports,"EventsCtrl",()=>c),e(s.exports,"OptionsCtrl",()=>u),e(s.exports,"ConfigCtrl",()=>h),e(s.exports,"ExplorerCtrl",()=>k),e(s.exports,"ModalCtrl",()=>N),e(s.exports,"ThemeCtrl",()=>K),e(s.exports,"ToastCtrl",()=>B);var a=t("lDt57");let i=(0,a.proxy)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),l={state:i,subscribe:e=>(0,a.subscribe)(i,()=>e(i)),push(e,t){e!==i.view&&(i.view=e,t&&(i.data=t),i.history.push(e))},reset(e){i.view=e,i.history=[e]},replace(e){i.history.length>1&&(i.history[i.history.length-1]=e,i.view=e)},goBack(){if(i.history.length>1){i.history.pop();let[e]=i.history.slice(-1);i.view=e}},setData(e){i.data=e}},r={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>r.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return r.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(r.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);let a=encodeURIComponent(t);return`${o}wc?uri=${a}`},formatUniversalUrl(e,t,s){if(!r.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);let a=encodeURIComponent(t);return`${o}wc?uri=${a}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(r.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(r.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=l.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},n="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),d=(0,a.proxy)({enabled:n,userSessionId:"",events:[],connectedWalletId:void 0}),c={state:d,subscribe:e=>(0,a.subscribe)(d.events,()=>e((0,a.snapshot)(d.events[d.events.length-1]))),initialize(){d.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(d.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){d.connectedWalletId=e},click(e){if(d.enabled){let t={type:"CLICK",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}},track(e){if(d.enabled){let t={type:"TRACK",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}},view(e){if(d.enabled){let t={type:"VIEW",name:e.name,userSessionId:d.userSessionId,timestamp:Date.now(),data:e};d.events.push(t)}}},p=(0,a.proxy)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),u={state:p,subscribe:e=>(0,a.subscribe)(p,()=>e(p)),setChains(e){p.chains=e},setWalletConnectUri(e){p.walletConnectUri=e},setIsCustomDesktop(e){p.isCustomDesktop=e},setIsCustomMobile(e){p.isCustomMobile=e},setIsDataLoaded(e){p.isDataLoaded=e},setIsUiLoaded(e){p.isUiLoaded=e},setIsAuth(e){p.isAuth=e}},m=(0,a.proxy)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),h={state:m,subscribe:e=>(0,a.subscribe)(m,()=>e(m)),setConfig(e){var t,s;c.initialize(),u.setChains(e.chains),u.setIsAuth(!!e.enableAuthMode),u.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),u.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),r.setModalVersionInStorage(),Object.assign(m,e)}};var g=Object.defineProperty,b=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,I=(e,t)=>{for(var s in t||(t={}))C.call(t,s)&&y(e,s,t[s]);if(b)for(var s of b(t))v.call(t,s)&&y(e,s,t[s]);return e};let f="https://explorer-api.walletconnect.com",w="js-2.6.2";async function W(e,t){let s=I({sdkType:"wcm",sdkVersion:w},t),o=new URL(e,f);return o.searchParams.append("projectId",h.state.projectId),Object.entries(s).forEach(([e,t])=>{t&&o.searchParams.append(e,String(t))}),(await fetch(o)).json()}let L={getDesktopListings:async e=>W("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>W("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>W("/w3m/v1/getInjectedListings",e),getAllListings:async e=>W("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${f}/w3m/v1/getWalletImage/${e}?projectId=${h.state.projectId}&sdkType=wcm&sdkVersion=${w}`,getAssetImageUrl:e=>`${f}/w3m/v1/getAssetImage/${e}?projectId=${h.state.projectId}&sdkType=wcm&sdkVersion=${w}`};var O=Object.defineProperty,E=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,M=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x=(e,t)=>{for(var s in t||(t={}))A.call(t,s)&&M(e,s,t[s]);if(E)for(var s of E(t))U.call(t,s)&&M(e,s,t[s]);return e};let D=r.isMobile(),j=(0,a.proxy)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),k={state:j,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=h.state;if("NONE"===e||"ALL"===t&&!e)return j.recomendedWallets;if(r.isArray(e)){let t={recommendedIds:e.join(",")},{listings:s}=await L.getAllListings(t),o=Object.values(s);o.sort((t,s)=>{let o=e.indexOf(t.id),a=e.indexOf(s.id);return o-a}),j.recomendedWallets=o}else{let{chains:e,isAuth:s}=u.state,o=e?.join(","),a=r.isArray(t),i={page:1,sdks:s?"auth_v1":void 0,entries:r.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:a?t.join(","):void 0},{listings:l}=D?await L.getMobileListings(i):await L.getDesktopListings(i);j.recomendedWallets=Object.values(l)}return j.recomendedWallets},async getWallets(e){let t=x({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=h.state,{recomendedWallets:a}=j;if("ALL"===o)return j.wallets;a.length?t.excludedIds=a.map(e=>e.id).join(","):r.isArray(s)&&(t.excludedIds=s.join(",")),r.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),u.state.isAuth&&(t.sdks="auth_v1");let{page:i,search:l}=e,{listings:n,total:d}=D?await L.getMobileListings(t):await L.getDesktopListings(t),c=Object.values(n),p=l?"search":"wallets";return j[p]={listings:[...j[p].listings,...c],total:d,page:i??1},{listings:c,total:d}},getWalletImageUrl:e=>L.getWalletImageUrl(e),getAssetImageUrl:e=>L.getAssetImageUrl(e),resetSearch(){j.search={listings:[],total:0,page:1}}},T=(0,a.proxy)({open:!1}),N={state:T,subscribe:e=>(0,a.subscribe)(T,()=>e(T)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:o}=u.state;if(r.removeWalletConnectDeepLink(),u.setWalletConnectUri(e?.uri),u.setChains(e?.chains),l.reset("ConnectWallet"),s&&o)T.open=!0,t();else{let e=setInterval(()=>{let s=u.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),T.open=!0,t())},200)}}),close(){T.open=!1}};var S=Object.defineProperty,P=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,$=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,V=(e,t)=>{for(var s in t||(t={}))_.call(t,s)&&$(e,s,t[s]);if(P)for(var s of P(t))R.call(t,s)&&$(e,s,t[s]);return e};let H=(0,a.proxy)({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),K={state:H,subscribe:e=>(0,a.subscribe)(H,()=>e(H)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(H.themeMode=t),s&&(H.themeVariables=V({},s))}},q=(0,a.proxy)({open:!1,message:"",variant:"success"}),B={state:q,subscribe:e=>(0,a.subscribe)(q,()=>e(q)),openToast(e,t){q.open=!0,q.message=e,q.variant=t},closeToast(){q.open=!1}}}),s("3nCqa",function(e,s){var o=t("5Oyhd");e.exports=o("cGIh0").then(()=>t("k9DFq"))});//# sourceMappingURL=dist.003ef3e0.js.map

//# sourceMappingURL=dist.003ef3e0.js.map
