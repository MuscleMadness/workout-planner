"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[642],{642:(C,h,d)=>{d.r(h),d.d(h,{RegisterUserPageModule:()=>j});var f=d(177),u=d(9417),n=d(5374),m=d(8498),c=d(467),p=d(9285),e=d(3953),y=d(5679);const b=["dobPicker"];function R(s,l){1&s&&e.nrm(0,"ion-spinner")}function I(s,l){if(1&s&&(e.j41(0,"ion-card")(1,"ion-card-content")(2,"ion-text",24),e.EFF(3),e.k0s()()()),2&s){const a=e.XpG();e.R7$(3),e.JRh(a.error)}}function M(s,l){if(1&s&&(e.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-card-subtitle"),e.EFF(5),e.k0s()()()),2&s){const a=e.XpG();e.R7$(3),e.JRh(a.gymInfo.name),e.R7$(2),e.JRh(a.gymInfo.address)}}function _(s,l){1&s&&e.nrm(0,"ion-datetime",25,1)}function P(s,l){if(1&s){const a=e.RV6();e.j41(0,"ion-button",26),e.bIt("click",function(){e.eBV(a);const t=e.XpG();return e.Njj(t.onLogPayment())}),e.EFF(1,"Log Payment"),e.k0s()}}const U=[{path:"",component:(()=>{var s;class l{constructor(r,t,i,g,o,v){this.route=r,this.router=t,this.gymManagementService=i,this.toastController=g,this.modalController=o,this.cdr=v,this.gymId=null,this.gymInfo=null,this.loading=!1,this.error=null,this.userId=null,this.accessLevel="no-access",this.showLogPaymentButton=!1,this.user={userId:0,name:"",phoneNumber:"",email:"",dateOfBirth:"",gender:"Male",address:"",emergencyContact:"",expiryDate:"",createdDate:""}}ngOnInit(){var r;this.gymId=this.route.snapshot.queryParamMap.get("gymId"),this.gymId||(this.gymId=localStorage.getItem("gymId")),this.gymId&&this.getGymInfo();const t=this.router.getCurrentNavigation();null!=t&&null!==(r=t.extras.state)&&void 0!==r&&r.user&&(this.user=t.extras.state.user,console.log("User object received:",this.user),this.userId=String(this.user.userId),this.cdr.detectChanges()),this.loadSessionDetails()}loadSessionDetails(){var r;this.accessLevel=null!==(r=localStorage.getItem("role"))&&void 0!==r?r:"no-access";var t=localStorage.getItem("role");console.log("Access Level:",t),this.showLogPaymentButton="owner"===this.accessLevel||"editor"===this.accessLevel}getGymInfo(){this.gymId?(this.loading=!0,this.error=null,this.gymManagementService.getGymInfo(this.gymId).subscribe({next:r=>{console.log(r),r.success?this.gymInfo=r.gymInfo:this.error="Failed to fetch gym details",this.loading=!1},error:r=>{this.error="An error occurred while fetching gym details",console.error(r),this.loading=!1}})):this.error="Gym ID not found in URL"}loadUserDetails(r){this.loading=!0,this.error="",this.gymManagementService.getUserInfo(this.gymId,this.userId).subscribe(t=>{console.log(t),this.loading=!1,"success"===t.status?this.user=t.user:this.error="User not found"},t=>{console.log(t),this.loading=!1,this.error="Failed to fetch user details"})}submitForm(){this.user.name&&this.user.phoneNumber?(this.dobPicker&&(this.user.dateOfBirth="string"==typeof this.dobPicker.value?this.dobPicker.value:""),console.log("User Data:",this.user),this.loading=!0,this.error=null,this.userId?this.updateUser():this.registerUser()):this.error="Name and Phone Number are mandatory."}updateUser(){this.gymManagementService.updateUser(this.gymId,this.user).subscribe({next:r=>{this.loading=!1,console.log("User data successfully:",r),this.router.navigate(["/dashboard"])},error:r=>{this.loading=!1,this.error="Failed to save user. Please try again.",console.error("Error while saving user data:",r)}})}registerUser(){this.gymManagementService.registerUser(this.gymId,this.user).subscribe({next:r=>{this.loading=!1,console.log("User registered successfully:",r),this.router.navigate(["/membership"],{queryParams:{gymId:this.gymId,phoneNumber:r.phoneNumber}}).then(()=>{window.location.reload()})},error:r=>{this.loading=!1,this.error="Failed to register user. Please try again.",console.error("Registration error:",r)}})}onLogPayment(){var r=this;return(0,c.A)(function*(){yield r.openPaymentModal(r.userId)})()}openPaymentModal(r){var t=this;return(0,c.A)(function*(){const i=yield t.modalController.create({component:p.j,componentProps:{userId:r}});yield i.present();const{data:g}=yield i.onDidDismiss();g&&(t.loading=!0,t.error=null,t.gymManagementService.logPayment(t.gymId,g).subscribe({next:()=>{t.loading=!1,t.toastController.create(),t.showToast("Payment logged successfully.","success")},error:o=>{t.loading=!1,t.error=o,t.showToast("Error logging payment: "+o,"danger")}}))})()}showToast(r,t="success"){var i=this;return(0,c.A)(function*(){yield(yield i.toastController.create({message:r,duration:2e3,color:t,position:"bottom"})).present()})()}}return(s=l).\u0275fac=function(r){return new(r||s)(e.rXU(m.nX),e.rXU(m.Ix),e.rXU(y.q),e.rXU(n.K_),e.rXU(n.W3),e.rXU(e.gRc))},s.\u0275cmp=e.VBU({type:s,selectors:[["app-register-user"]],viewQuery:function(r,t){if(1&r&&e.GBs(b,5),2&r){let i;e.mGM(i=e.lsd())&&(t.dobPicker=i.first)}},decls:59,vars:14,consts:[["registerForm","ngForm"],["dobPicker",""],["slot","start"],["defaultHref","/membership"],[4,"ngIf"],[3,"ngSubmit"],["position","floating"],["type","text","required","","name","name",3,"ngModelChange","ngModel"],["type","tel","required","","name","phoneNumber",3,"ngModelChange","ngModel"],["datetime","dob-datetime","presentation","date"],[3,"keepContentsMounted"],["value","optional"],["slot","header"],["slot","content"],["name","gender",3,"ngModelChange","ngModel"],["value","Male"],["value","Female"],["value","Other"],["type","email","name","email",3,"ngModelChange","ngModel"],["name","address",3,"ngModelChange","ngModel"],["type","tel","name","emergencyContact",3,"ngModelChange","ngModel"],[1,"button-container"],["expand","block","color","primary","type","submit",3,"disabled"],["expand","block","color","primary",3,"click",4,"ngIf"],["color","danger"],["id","dob-datetime","presentation","date","name","dob"],["expand","block","color","primary",3,"click"]],template:function(r,t){if(1&r){const i=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,R,1,0,"ion-spinner",4)(8,I,4,1,"ion-card",4)(9,M,6,2,"ion-card",4),e.j41(10,"form",5,0),e.bIt("ngSubmit",function(){return e.eBV(i),e.Njj(t.submitForm())}),e.j41(12,"ion-list")(13,"ion-item")(14,"ion-label",6),e.EFF(15,"Name *"),e.k0s(),e.j41(16,"ion-input",7),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.name,o)||(t.user.name=o),e.Njj(o)}),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label",6),e.EFF(19,"Phone Number *"),e.k0s(),e.j41(20,"ion-input",8),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.phoneNumber,o)||(t.user.phoneNumber=o),e.Njj(o)}),e.k0s()(),e.j41(21,"ion-item")(22,"ion-label"),e.EFF(23,"Date of Birth"),e.k0s(),e.nrm(24,"ion-datetime-button",9),e.j41(25,"ion-modal",10),e.DNE(26,_,2,0,"ng-template"),e.k0s()(),e.j41(27,"ion-accordion-group")(28,"ion-accordion",11)(29,"ion-item",12)(30,"ion-label"),e.EFF(31,"Optional Details"),e.k0s()(),e.j41(32,"div",13)(33,"ion-item")(34,"ion-label",6),e.EFF(35,"Gender"),e.k0s(),e.j41(36,"ion-select",14),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.gender,o)||(t.user.gender=o),e.Njj(o)}),e.j41(37,"ion-select-option",15),e.EFF(38,"Male"),e.k0s(),e.j41(39,"ion-select-option",16),e.EFF(40,"Female"),e.k0s(),e.j41(41,"ion-select-option",17),e.EFF(42,"Other"),e.k0s()()(),e.j41(43,"ion-item")(44,"ion-label",6),e.EFF(45,"Email"),e.k0s(),e.j41(46,"ion-input",18),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.email,o)||(t.user.email=o),e.Njj(o)}),e.k0s()(),e.j41(47,"ion-item")(48,"ion-label",6),e.EFF(49,"Address"),e.k0s(),e.j41(50,"ion-textarea",19),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.address,o)||(t.user.address=o),e.Njj(o)}),e.k0s()(),e.j41(51,"ion-item")(52,"ion-label",6),e.EFF(53,"Emergency Contact"),e.k0s(),e.j41(54,"ion-input",20),e.mxI("ngModelChange",function(o){return e.eBV(i),e.DH7(t.user.emergencyContact,o)||(t.user.emergencyContact=o),e.Njj(o)}),e.k0s()()()()()(),e.j41(55,"div",21)(56,"ion-button",22),e.EFF(57),e.k0s(),e.DNE(58,P,2,0,"ion-button",23),e.k0s()()()}if(2&r){const i=e.sdS(11);e.R7$(5),e.SpI(" ",t.userId?"Edit":"Register",""),e.R7$(2),e.Y8G("ngIf",t.loading),e.R7$(),e.Y8G("ngIf",t.error),e.R7$(),e.Y8G("ngIf",t.gymInfo),e.R7$(7),e.R50("ngModel",t.user.name),e.R7$(4),e.R50("ngModel",t.user.phoneNumber),e.R7$(5),e.Y8G("keepContentsMounted",!0),e.R7$(11),e.R50("ngModel",t.user.gender),e.R7$(10),e.R50("ngModel",t.user.email),e.R7$(4),e.R50("ngModel",t.user.address),e.R7$(4),e.R50("ngModel",t.user.emergencyContact),e.R7$(2),e.Y8G("disabled",!i.form.valid),e.R7$(),e.SpI(" ",t.userId?"Save":"Register",""),e.R7$(),e.Y8G("ngIf",t.showLogPaymentButton)}},dependencies:[f.bT,u.qT,u.BC,u.cb,u.YS,u.vS,u.cV,n.xk,n.YH,n.Jm,n.QW,n.b_,n.I9,n.ME,n.HW,n.tN,n.W9,n.A9,n.K4,n.eU,n.$w,n.uz,n.he,n.nf,n.Nm,n.Ip,n.w2,n.IO,n.nc,n.BC,n.ai,n.Sb,n.Je,n.Gw,n.el]}),l})()}];let F=(()=>{var s;class l{}return(s=l).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[m.iI.forChild(U),m.iI]}),l})(),j=(()=>{var s;class l{}return(s=l).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.$C({type:s}),s.\u0275inj=e.G2t({imports:[f.MD,u.YN,n.bv,F]}),l})()}}]);