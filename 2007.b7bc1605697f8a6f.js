"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2007],{2007:(X,f,s)=>{s.r(f),s.d(f,{MembershipPageModule:()=>G});var b=s(177),h=s(9417),i=s(5374),u=s(8498),m=s(467),y=s(5312);const g=(0,s(5083).F3)("SocialLogin",{web:()=>s.e(7246).then(s.bind(s,7246)).then(o=>new o.SocialLoginWeb)});var e=s(3953),M=s(9747),P=s(2872),R=s(5679);function k(o,a){1&o&&e.nrm(0,"ion-spinner")}function F(o,a){if(1&o){const r=e.RV6();e.j41(0,"ion-button",6),e.bIt("click",function(){e.eBV(r);const n=e.XpG(2);return e.Njj(n.registerUser())}),e.EFF(1,"Register"),e.k0s()}}function v(o,a){if(1&o&&(e.j41(0,"ion-card")(1,"ion-card-content")(2,"ion-text",4),e.EFF(3),e.k0s(),e.DNE(4,F,2,0,"ion-button",5),e.k0s()()),2&o){const r=e.XpG();e.R7$(3),e.JRh(r.error),e.R7$(),e.Y8G("ngIf",r.showRegisterButton)}}function N(o,a){if(1&o){const r=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content")(7,"div",7)(8,"ion-button",8),e.bIt("click",function(){e.eBV(r);const n=e.XpG();return e.Njj(n.callGym(n.gymInfo.contactNumber))}),e.nrm(9,"ion-icon",9),e.EFF(10," Call "),e.k0s(),e.j41(11,"ion-button",10),e.bIt("click",function(){e.eBV(r);const n=e.XpG();return e.Njj(n.emailGym(n.gymInfo.email))}),e.nrm(12,"ion-icon",11),e.EFF(13," Email "),e.k0s()()()()}if(2&o){const r=e.XpG();e.R7$(3),e.JRh(r.gymInfo.name),e.R7$(2),e.JRh(r.gymInfo.address)}}function j(o,a){if(1&o){const r=e.RV6();e.j41(0,"ion-item")(1,"ion-item")(2,"ion-label",12),e.EFF(3,"Enter your Phone Number"),e.k0s(),e.j41(4,"ion-input",13),e.mxI("ngModelChange",function(n){e.eBV(r);const l=e.XpG();return e.DH7(l.phoneNumber,n)||(l.phoneNumber=n),e.Njj(n)}),e.k0s()(),e.j41(5,"ion-button",14),e.bIt("click",function(){e.eBV(r);const n=e.XpG();return e.Njj(n.checkUser())}),e.EFF(6,"Proceed"),e.k0s()()}if(2&o){const r=e.XpG();e.R7$(4),e.R50("ngModel",r.phoneNumber)}}function U(o,a){if(1&o){const r=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content")(7,"p")(8,"strong"),e.EFF(9,"Phone:"),e.k0s(),e.EFF(10),e.k0s(),e.j41(11,"p")(12,"strong"),e.EFF(13,"Email:"),e.k0s(),e.EFF(14),e.k0s(),e.j41(15,"p")(16,"strong"),e.EFF(17,"Membership Expiry:"),e.k0s(),e.EFF(18),e.k0s()(),e.j41(19,"ion-button",15),e.bIt("click",function(){e.eBV(r);const n=e.XpG();return e.Njj(n.renewMembership())}),e.EFF(20,"Renew Membership"),e.k0s(),e.j41(21,"ion-button",16),e.bIt("click",function(){e.eBV(r);const n=e.XpG();return e.Njj(n.clearUserInfo())}),e.EFF(22,"Log out"),e.k0s()()}if(2&o){const r=e.XpG();e.R7$(3),e.JRh(r.userInfo.name),e.R7$(2),e.JRh(r.userInfo.address),e.R7$(5),e.SpI(" ",r.userInfo.phoneNumber,""),e.R7$(4),e.SpI(" ",r.userInfo.email,""),e.R7$(4),e.SpI(" ",r.userInfo.expiryDate,"")}}const E=[{path:"",component:(()=>{var o;class a{constructor(t,n,l,c,p,d){this.route=t,this.router=n,this.iab=l,this.platform=c,this.gymManagementService=p,this.toastCtrl=d,this.gymId=null,this.gymInfo=null,this.loading=!1,this.error=null,this.phoneNumber="",this.userInfo=null,this.showRegisterButton=!1,this.isLoggedIn=!1,this.currentUrl="",this.initializeApp()}initializeApp(){this.platform.ready().then((0,m.A)(function*(){yield g.initialize({google:{webClientId:y.c.googleSignInClientId}})}))}ngOnInit(){var t;this.gymId=this.route.snapshot.queryParamMap.get("gymId"),this.phoneNumber=null!==(t=this.route.snapshot.queryParamMap.get("phoneNumber"))&&void 0!==t?t:"",this.gymId&&this.getGymInfo(),this.showCurrentUrl()}ionViewWillEnter(){this.loadSessionDetails()}loadSessionDetails(){this.isLoggedIn=!!localStorage.getItem("authToken")}showCurrentUrl(){var t=this;return(0,m.A)(function*(){const l=window.location.href;t.currentUrl=l})()}removeQueryParams(){localStorage.setItem("queryParams",JSON.stringify(this.route.snapshot.queryParams)),this.router.navigate([],{replaceUrl:!0})}restoreQueryParams(){const t=localStorage.getItem("queryParams");if(t){const n=JSON.parse(t);this.router.navigate([],{queryParams:n,replaceUrl:!0})}}login(){var t=this;return(0,m.A)(function*(){t.removeQueryParams();const n=yield g.login({provider:"google",options:{scopes:["email","profile"]}});if(t.restoreQueryParams(),"google"===n.provider){var l;const c=n.result;localStorage.setItem("authToken",null!==(l=null==c?void 0:c.idToken)&&void 0!==l?l:""),localStorage.setItem("authResult",JSON.stringify(c)),console.log("Authentication token and result stored in localStorage.")}t.loadSessionDetails()})()}logout(){var t=this;return(0,m.A)(function*(){yield g.logout({provider:"apple"}),localStorage.removeItem("authToken"),localStorage.removeItem("authResult"),t.loadSessionDetails()})()}getGymInfo(){this.gymId?(this.loading=!0,this.error=null,this.gymManagementService.getGymInfo(this.gymId).subscribe({next:t=>{console.log(t),t.success?(this.loading=!1,this.gymInfo=t.gymInfo,this.phoneNumber&&this.getUserInfo()):this.error="Failed to fetch gym details"},error:t=>{this.error="An error occurred while fetching gym details",console.error(t),this.loading=!1}})):this.error="Gym ID not found in URL"}getUserInfo(){this.loading=!0,this.error="",this.gymManagementService.getUserInfo(this.gymId,this.phoneNumber).subscribe(t=>{console.log(t),this.loading=!1,"success"===t.status?this.userInfo=t.user:(this.userInfo=null,this.phoneNumber="")},t=>{console.log(t),this.loading=!1,this.phoneNumber=""})}checkUser(){this.showRegisterButton=!1,this.phoneNumber?(this.loading=!0,this.error="",this.gymManagementService.getUserInfo(this.gymId,this.phoneNumber).subscribe(t=>{console.log(t),this.loading=!1,"success"===t.status?this.userInfo=t.user:(this.showRegisterButton=!0,this.userInfo=null,this.error="User not found. Would you like to register?")},t=>{console.log(t),this.loading=!1,this.error="An error occurred while checking membership."})):this.error="Please enter a phone number."}registerUser(){this.gymId&&this.phoneNumber?this.router.navigate(["/register-user"],{queryParams:{gymId:this.gymId,phoneNumber:this.phoneNumber}}):console.error("Gym ID or Phone Number is missing.")}clearUserInfo(){this.phoneNumber="",this.userInfo=null,this.showRegisterButton=!1}renewMembership(){var t;console.log("Renewing membership for:",null===(t=this.userInfo)||void 0===t?void 0:t.name),this.payWithUPI()}payWithUPI(){const c=this.generateRandomString(),p=this.generateRandomString(),x=window.location.href,I=`upi://pay?pa=6poornima6-1@okhdfcbank&pn=Poornima&mc=7399&tid=${c}&am=1.00&cu=INR&tn=Membership Payment&tr=${p}&url=${encodeURIComponent(x)}`;console.log(I),this.iab.create(I,"_system")}generateRandomString(){return Math.random().toString(36).substring(2,12)}callGym(t){t?window.open(`tel:${t}`,"_system"):console.error("Contact number is not available.")}emailGym(t){t?window.open(`mailto:${t}`,"_system"):console.error("Email address is not available.")}}return(o=a).\u0275fac=function(t){return new(t||o)(e.rXU(u.nX),e.rXU(u.Ix),e.rXU(M.N),e.rXU(P.OD),e.rXU(R.q),e.rXU(i.K_))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-membership"]],decls:15,vars:7,consts:[["slot","start"],["slot","end","fill","clear",3,"click"],[4,"ngIf"],["placeholder","url",3,"ngModelChange","ngModel"],["color","danger"],["expand","block","fill","outline","color","primary",3,"click",4,"ngIf"],["expand","block","fill","outline","color","primary",3,"click"],[1,"action-buttons"],["color","primary","fill","clear",3,"click"],["name","call","slot","start"],["color","secondary","fill","clear",3,"click"],["name","mail","slot","start"],["position","floating"],["type","tel",3,"ngModelChange","ngModel"],["slot","end","expand","block","color","primary",3,"click"],["expand","block","color","success",3,"click"],["expand","block","color","danger",3,"click"]],template:function(t,n){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Membership"),e.k0s(),e.j41(6,"ion-button",1),e.bIt("click",function(){return n.isLoggedIn?n.logout():n.login()}),e.EFF(7),e.k0s()()(),e.j41(8,"ion-content"),e.DNE(9,k,1,0,"ion-spinner",2)(10,v,5,2,"ion-card",2)(11,N,14,2,"ion-card",2)(12,j,7,1,"ion-item",2)(13,U,23,5,"ion-card",2),e.j41(14,"ion-textarea",3),e.mxI("ngModelChange",function(c){return e.DH7(n.currentUrl,c)||(n.currentUrl=c),c}),e.k0s()()),2&t&&(e.R7$(7),e.SpI(" ",n.isLoggedIn?"Logout":"Login"," "),e.R7$(2),e.Y8G("ngIf",n.loading),e.R7$(),e.Y8G("ngIf",n.error),e.R7$(),e.Y8G("ngIf",n.gymInfo),e.R7$(),e.Y8G("ngIf",!n.userInfo),e.R7$(),e.Y8G("ngIf",n.userInfo),e.R7$(),e.R50("ngModel",n.currentUrl))},dependencies:[b.bT,h.BC,h.vS,i.Jm,i.QW,i.b_,i.I9,i.ME,i.HW,i.tN,i.W9,i.eU,i.iq,i.$w,i.uz,i.he,i.MC,i.w2,i.IO,i.nc,i.BC,i.ai,i.Gw],styles:[".action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}ion-button[_ngcontent-%COMP%]{font-size:16px;height:48px;text-transform:none}"]}),a})()}];let S=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.iI.forChild(E),u.iI]}),a})(),G=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[b.MD,h.YN,i.bv,S]}),a})()}}]);