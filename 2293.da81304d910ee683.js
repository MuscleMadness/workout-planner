"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2293],{2293:(C,g,a)=>{a.r(g),a.d(g,{MembershipPageModule:()=>j});var p=a(177),h=a(9417),i=a(5374),m=a(8498),f=a(467),e=a(3953),b=a(9747),_=a(5679);function I(t,s){1&t&&e.nrm(0,"ion-spinner")}function y(t,s){if(1&t){const o=e.RV6();e.j41(0,"ion-button",5),e.bIt("click",function(){e.eBV(o);const r=e.XpG(2);return e.Njj(r.registerUser())}),e.EFF(1,"Register"),e.k0s()}}function M(t,s){if(1&t&&(e.j41(0,"ion-card")(1,"ion-card-content")(2,"ion-text",3),e.EFF(3),e.k0s(),e.DNE(4,y,2,0,"ion-button",4),e.k0s()()),2&t){const o=e.XpG();e.R7$(3),e.JRh(o.error),e.R7$(),e.Y8G("ngIf",o.showRegisterButton)}}function R(t,s){if(1&t){const o=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content")(7,"div",6)(8,"ion-button",7),e.bIt("click",function(){e.eBV(o);const r=e.XpG();return e.Njj(r.callGym(r.gymInfo.contactNumber))}),e.nrm(9,"ion-icon",8),e.EFF(10," Call "),e.k0s(),e.j41(11,"ion-button",9),e.bIt("click",function(){e.eBV(o);const r=e.XpG();return e.Njj(r.emailGym(r.gymInfo.email))}),e.nrm(12,"ion-icon",10),e.EFF(13," Email "),e.k0s()()()()}if(2&t){const o=e.XpG();e.R7$(3),e.JRh(o.gymInfo.name),e.R7$(2),e.JRh(o.gymInfo.address)}}function k(t,s){if(1&t){const o=e.RV6();e.j41(0,"ion-item")(1,"ion-item")(2,"ion-label",11),e.EFF(3,"Enter your Phone Number"),e.k0s(),e.j41(4,"ion-input",12),e.mxI("ngModelChange",function(r){e.eBV(o);const l=e.XpG();return e.DH7(l.phoneNumber,r)||(l.phoneNumber=r),e.Njj(r)}),e.k0s()(),e.j41(5,"ion-button",13),e.bIt("click",function(){e.eBV(o);const r=e.XpG();return e.Njj(r.checkUser())}),e.EFF(6,"Proceed"),e.k0s()()}if(2&t){const o=e.XpG();e.R7$(4),e.R50("ngModel",o.phoneNumber)}}function P(t,s){if(1&t){const o=e.RV6();e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content")(7,"p")(8,"strong"),e.EFF(9,"Phone:"),e.k0s(),e.EFF(10),e.k0s(),e.j41(11,"p")(12,"strong"),e.EFF(13,"Email:"),e.k0s(),e.EFF(14),e.k0s(),e.j41(15,"p")(16,"strong"),e.EFF(17,"Membership Expiry:"),e.k0s(),e.EFF(18),e.k0s()(),e.j41(19,"ion-button",14),e.bIt("click",function(){e.eBV(o);const r=e.XpG();return e.Njj(r.renewMembership())}),e.EFF(20,"Renew Membership"),e.k0s(),e.j41(21,"ion-button",15),e.bIt("click",function(){e.eBV(o);const r=e.XpG();return e.Njj(r.clearUserInfo())}),e.EFF(22,"Log out"),e.k0s()()}if(2&t){const o=e.XpG();e.R7$(3),e.JRh(o.userInfo.name),e.R7$(2),e.JRh(o.userInfo.address),e.R7$(5),e.SpI(" ",o.userInfo.phoneNumber,""),e.R7$(4),e.SpI(" ",o.userInfo.email,""),e.R7$(4),e.SpI(" ",o.userInfo.expiryDate,"")}}const F=[{path:"",component:(()=>{var t;class s{constructor(n,r,l,c,u){this.route=n,this.router=r,this.iab=l,this.gymManagementService=c,this.toastCtrl=u,this.gymId=null,this.gymInfo=null,this.loading=!1,this.error=null,this.phoneNumber="",this.userInfo=null,this.showRegisterButton=!1,this.currentUrl=""}ngOnInit(){var n;this.gymId=this.route.snapshot.queryParamMap.get("gymId"),this.phoneNumber=null!==(n=this.route.snapshot.queryParamMap.get("phoneNumber"))&&void 0!==n?n:"",this.gymId&&(localStorage.setItem("gymId",this.gymId),this.getGymInfo()),this.showCurrentUrl()}showCurrentUrl(){var n=this;return(0,f.A)(function*(){const l=window.location.href;n.currentUrl=l})()}getGymInfo(){this.gymId?(this.loading=!0,this.error=null,this.gymManagementService.getGymInfo(this.gymId).subscribe({next:n=>{console.log(n),n.success?(this.loading=!1,this.gymInfo=n.gymInfo,this.phoneNumber&&this.getUserInfo()):this.error="Failed to fetch gym details"},error:n=>{this.error="An error occurred while fetching gym details",console.error(n),this.loading=!1}})):this.error="Gym ID not found in URL"}getUserInfo(){this.loading=!0,this.error="",this.gymManagementService.getUserInfo(this.gymId,this.phoneNumber).subscribe(n=>{console.log(n),this.loading=!1,"success"===n.status?this.userInfo=n.user:(this.userInfo=null,this.phoneNumber="")},n=>{console.log(n),this.loading=!1,this.phoneNumber=""})}checkUser(){this.showRegisterButton=!1,this.phoneNumber?(this.loading=!0,this.error="",this.gymManagementService.getUserInfo(this.gymId,this.phoneNumber).subscribe(n=>{console.log(n),this.loading=!1,"success"===n.status?this.userInfo=n.user:(this.showRegisterButton=!0,this.userInfo=null,this.error="User not found. Would you like to register?")},n=>{console.log(n),this.loading=!1,this.error="An error occurred while checking membership."})):this.error="Please enter a phone number."}registerUser(){this.gymId&&this.phoneNumber?this.router.navigate(["/register-user"],{queryParams:{gymId:this.gymId,phoneNumber:this.phoneNumber}}):console.error("Gym ID or Phone Number is missing.")}clearUserInfo(){this.phoneNumber="",this.userInfo=null,this.showRegisterButton=!1}renewMembership(){var n;console.log("Renewing membership for:",null===(n=this.userInfo)||void 0===n?void 0:n.name),this.payWithUPI()}payWithUPI(){const c=this.generateRandomString(),u=this.generateRandomString(),G=window.location.href,d=`upi://pay?pa=6poornima6-1@okhdfcbank&pn=Poornima&mc=7399&tid=${c}&am=1.00&cu=INR&tn=Membership Payment&tr=${u}&url=${encodeURIComponent(G)}`;console.log(d),this.iab.create(d,"_system")}generateRandomString(){return Math.random().toString(36).substring(2,12)}callGym(n){n?window.open(`tel:${n}`,"_system"):console.error("Contact number is not available.")}emailGym(n){n?window.open(`mailto:${n}`,"_system"):console.error("Email address is not available.")}}return(t=s).\u0275fac=function(n){return new(n||t)(e.rXU(m.nX),e.rXU(m.Ix),e.rXU(b.N),e.rXU(_.q),e.rXU(i.K_))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-membership"]],decls:13,vars:6,consts:[["slot","start"],[4,"ngIf"],["placeholder","url",3,"ngModelChange","ngModel"],["color","danger"],["expand","block","fill","outline","color","primary",3,"click",4,"ngIf"],["expand","block","fill","outline","color","primary",3,"click"],[1,"action-buttons"],["color","primary","fill","clear",3,"click"],["name","call","slot","start"],["color","secondary","fill","clear",3,"click"],["name","mail","slot","start"],["position","floating"],["type","tel",3,"ngModelChange","ngModel"],["slot","end","expand","block","color","primary",3,"click"],["expand","block","color","success",3,"click"],["expand","block","color","danger",3,"click"]],template:function(n,r){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-menu-button"),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Membership"),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,I,1,0,"ion-spinner",1)(8,M,5,2,"ion-card",1)(9,R,14,2,"ion-card",1)(10,k,7,1,"ion-item",1)(11,P,23,5,"ion-card",1),e.j41(12,"ion-textarea",2),e.mxI("ngModelChange",function(c){return e.DH7(r.currentUrl,c)||(r.currentUrl=c),c}),e.k0s()()),2&n&&(e.R7$(7),e.Y8G("ngIf",r.loading),e.R7$(),e.Y8G("ngIf",r.error),e.R7$(),e.Y8G("ngIf",r.gymInfo),e.R7$(),e.Y8G("ngIf",!r.userInfo),e.R7$(),e.Y8G("ngIf",r.userInfo),e.R7$(),e.R50("ngModel",r.currentUrl))},dependencies:[p.bT,h.BC,h.vS,i.Jm,i.QW,i.b_,i.I9,i.ME,i.HW,i.tN,i.W9,i.eU,i.iq,i.$w,i.uz,i.he,i.MC,i.w2,i.IO,i.nc,i.BC,i.ai,i.Gw],styles:[".action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}ion-button[_ngcontent-%COMP%]{font-size:16px;height:48px;text-transform:none}"]}),s})()}];let N=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.iI.forChild(F),m.iI]}),s})(),j=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.MD,h.YN,i.bv,N]}),s})()}}]);