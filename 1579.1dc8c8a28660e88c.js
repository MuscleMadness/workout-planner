"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1579],{1579:(j,p,a)=>{a.r(p),a.d(p,{SettingsPageModule:()=>U});var v=a(177),d=a(9417),s=a(5374),m=a(8498),h=a(467);const S=(0,a(5083).F3)("SocialLogin",{web:()=>a.e(7246).then(a.bind(a,7246)).then(o=>new o.SocialLoginWeb)});var I=a(5312),e=a(3953),P=a(4909),y=a(5468),C=a(2872),M=a(5679);function F(o,l){if(1&o&&(e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()()()),2&o){const g=e.XpG();e.R7$(3),e.JRh(g.userInfo.name),e.R7$(2),e.JRh(g.userInfo.email)}}const L=[{path:"",component:(()=>{var o;class l{constructor(t,n,i,r,c,u){this.translateService=t,this.appComponent=n,this.platform=i,this.route=r,this.router=c,this.gymManagementService=u,this.isLoggedIn=!1,this.userInfo=null,this.selectedLanguage=this.translateService.currentLang,this.initializeApp()}initializeApp(){this.platform.ready().then((0,h.A)(function*(){yield S.initialize({google:{webClientId:I.c.googleSignInClientId}})}))}ionViewWillEnter(){this.loadSessionDetails()}loadSessionDetails(){this.isLoggedIn=!!localStorage.getItem("authToken");const n=localStorage.getItem("authResult");if(n){const i=JSON.parse(n);this.userInfo={name:i.profile.name,phoneNumber:"",email:i.profile.email,dateOfBirth:"",gender:"Male",address:"",emergencyContact:"",expiryDate:"",createdDate:"",userId:0}}else this.userInfo=null}removeQueryParams(){localStorage.setItem("queryParams",JSON.stringify(this.route.snapshot.queryParams)),this.router.navigate([],{replaceUrl:!0})}restoreQueryParams(){const t=localStorage.getItem("queryParams");if(t){const n=JSON.parse(t);this.router.navigate([],{queryParams:n,replaceUrl:!0})}}login(){var t=this;return(0,h.A)(function*(){t.removeQueryParams();const n=yield S.login({provider:"google",options:{scopes:["email","profile"]}});if(t.restoreQueryParams(),"google"===n.provider){var i,r,c;const u=n.result;localStorage.setItem("authToken",null!==(i=null==u?void 0:u.idToken)&&void 0!==i?i:""),localStorage.setItem("authResult",JSON.stringify(u)),t.getUserPermissions(null!==(r=null==u||null===(c=u.profile)||void 0===c?void 0:c.email)&&void 0!==r?r:"")}t.loadSessionDetails()})()}getUserPermissions(t){this.gymManagementService.getUserPermissions("Gym20251",t).subscribe({next:n=>{console.log("User permissions:",n),localStorage.setItem("role",n.role)},error:n=>{console.error("Error fetching user permissions:",n),localStorage.setItem("role","")}})}logout(){var t=this;return(0,h.A)(function*(){yield S.logout({provider:"apple"}),localStorage.removeItem("authToken"),localStorage.removeItem("authResult"),t.loadSessionDetails()})()}changeLanguage(t){this.appComponent.switchLanguage(t.detail.value)}}return(o=l).\u0275fac=function(t){return new(t||o)(e.rXU(P.c$),e.rXU(y.Z),e.rXU(C.OD),e.rXU(m.nX),e.rXU(m.Ix),e.rXU(M.q))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-settings"]],decls:20,vars:3,consts:[[1,"ion-no-border"],["slot","start"],["slot","end","fill","clear",3,"click"],[4,"ngIf"],[3,"ngModelChange","ionChange","ngModel"],["value","en"],["value","ta"]],template:function(t,n){1&t&&(e.j41(0,"ion-content")(1,"ion-header",0)(2,"ion-toolbar")(3,"ion-buttons",1),e.nrm(4,"ion-menu-button"),e.k0s(),e.j41(5,"ion-title")(6,"h3"),e.EFF(7,"Settings"),e.k0s()(),e.j41(8,"ion-button",2),e.bIt("click",function(){return n.isLoggedIn?n.logout():n.login()}),e.EFF(9),e.k0s()()(),e.j41(10,"ion-content"),e.DNE(11,F,6,2,"ion-card",3),e.j41(12,"ion-item")(13,"ion-label"),e.EFF(14,"Language"),e.k0s(),e.j41(15,"ion-select",4),e.mxI("ngModelChange",function(r){return e.DH7(n.selectedLanguage,r)||(n.selectedLanguage=r),r}),e.bIt("ionChange",function(r){return n.changeLanguage(r)}),e.j41(16,"ion-select-option",5),e.EFF(17,"English"),e.k0s(),e.j41(18,"ion-select-option",6),e.EFF(19,"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"),e.k0s()()()()()),2&t&&(e.R7$(9),e.SpI(" ",n.isLoggedIn?"Logout":"Login"," "),e.R7$(2),e.Y8G("ngIf",n.userInfo),e.R7$(4),e.R50("ngModel",n.selectedLanguage))},dependencies:[v.bT,d.BC,d.vS,s.Jm,s.QW,s.b_,s.ME,s.HW,s.tN,s.W9,s.eU,s.uz,s.he,s.MC,s.Nm,s.Ip,s.BC,s.ai,s.Je]}),l})()}];let R=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(L),m.iI]}),l})(),U=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[v.MD,d.YN,s.bv,R]}),l})()}}]);