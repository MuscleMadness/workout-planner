"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3840,8188],{6493:(ee,z,h)=>{h.d(z,{A:()=>e});const e=class b{constructor(p){var u;this.selected=!1,this.exercises=[],this.videos=[],this.id=p.id,this.name=null!==(u=p.name)&&void 0!==u?u:p.id,this.exercises=p.exercises||[],this.videos=p.videos||[],this.thumbnail=p.thumbnail}capitalize(p){return p.charAt(0).toUpperCase()+p.slice(1)}get displayName(){return this.capitalize(this.name)}}},3840:(ee,z,h)=>{h.r(z),h.d(z,{WorkoutsPageModule:()=>he});var b=h(177),e=h(9417),G=h(5374),p=h(3953),u=h(6780),j=h(8359);const S={schedule(a){let i=requestAnimationFrame,o=cancelAnimationFrame;const{delegate:t}=S;t&&(i=t.requestAnimationFrame,o=t.cancelAnimationFrame);const l=i(f=>{o=void 0,a(f)});return new j.yU(()=>null==o?void 0:o(l))},requestAnimationFrame(...a){const{delegate:i}=S;return((null==i?void 0:i.requestAnimationFrame)||requestAnimationFrame)(...a)},cancelAnimationFrame(...a){const{delegate:i}=S;return((null==i?void 0:i.cancelAnimationFrame)||cancelAnimationFrame)(...a)},delegate:void 0};var H=h(9687);new class C extends H.q{flush(i){this._active=!0;const o=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let l;i=i||t.shift();do{if(l=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===o&&t.shift());if(this._active=!1,l){for(;(i=t[0])&&i.id===o&&t.shift();)i.unsubscribe();throw l}}}(class L extends u.R{constructor(i,o){super(i,o),this.scheduler=i,this.work=o}requestAsyncId(i,o,t=0){return null!==t&&t>0?super.requestAsyncId(i,o,t):(i.actions.push(this),i._scheduled||(i._scheduled=S.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,o,t=0){var l;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,o,t);const{actions:f}=i;null!=o&&(null===(l=f[f.length-1])||void 0===l?void 0:l.id)!==o&&(S.cancelAnimationFrame(o),i._scheduled=void 0)}});let F,R=1;const A={};function Z(a){return a in A&&(delete A[a],!0)}const m={setImmediate(a){const i=R++;return A[i]=!0,F||(F=Promise.resolve()),F.then(()=>Z(i)&&a()),i},clearImmediate(a){Z(a)}},{setImmediate:y,clearImmediate:g}=m,I={setImmediate(...a){const{delegate:i}=I;return((null==i?void 0:i.setImmediate)||y)(...a)},clearImmediate(a){const{delegate:i}=I;return((null==i?void 0:i.clearImmediate)||g)(a)},delegate:void 0};new class D extends H.q{flush(i){this._active=!0;const o=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let l;i=i||t.shift();do{if(l=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===o&&t.shift());if(this._active=!1,l){for(;(i=t[0])&&i.id===o&&t.shift();)i.unsubscribe();throw l}}}(class $ extends u.R{constructor(i,o){super(i,o),this.scheduler=i,this.work=o}requestAsyncId(i,o,t=0){return null!==t&&t>0?super.requestAsyncId(i,o,t):(i.actions.push(this),i._scheduled||(i._scheduled=I.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,o,t=0){var l;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,o,t);const{actions:f}=i;null!=o&&(null===(l=f[f.length-1])||void 0===l?void 0:l.id)!==o&&(I.clearImmediate(o),i._scheduled===o&&(i._scheduled=void 0))}});var Y=h(8203);let U=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=p.$C({type:a}),a.\u0275inj=p.G2t({}),i})(),E=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=p.$C({type:a}),a.\u0275inj=p.G2t({imports:[Y.jI,U,Y.jI,U]}),i})();var re=h(8498);const te=[{path:"",component:h(4354).k}];let ue=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=p.$C({type:a}),a.\u0275inj=p.G2t({imports:[re.iI.forChild(te),re.iI]}),i})(),he=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=p.$C({type:a}),a.\u0275inj=p.G2t({imports:[b.MD,e.YN,G.bv,E,ue]}),i})()},4354:(ee,z,h)=>{h.d(z,{k:()=>de});var b=h(467),e=h(3953),G=h(8188),p=h(2872),u=h(5374),j=h(177),S=h(9417);function L(c,v){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function H(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,L,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=v.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}function C(c,v){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function x(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,C,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=v.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}function M(c,v){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function R(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,M,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=v.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}let F=(()=>{var c;class v{constructor(n,r,d,_){this.workoutData=n,this.config=r,this.modalCtrl=d,this.navParams=_,this.ios=!1,this.allMusclesChecked=!1,this.showOnlyWorkoutsWithVideos=!1}ngOnInit(){}ionViewWillEnter(){var n;this.ios="ios"===this.config.get("mode"),this.workoutFilter=this.navParams.get("filter"),this.showOnlyWorkoutsWithVideos=null===(n=this.workoutFilter)||void 0===n?void 0:n.showOnlyWorkoutsWithVideos}applyFilters(){this.workoutFilter&&(this.workoutFilter.showOnlyWorkoutsWithVideos=this.showOnlyWorkoutsWithVideos),this.dismiss(this.workoutFilter)}dismiss(n){this.modalCtrl.dismiss(n)}toggleAllMuscleGroups(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.muscleGroups.forEach(_=>{_.isChecked=d})}toggleAllEquipments(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.equipments.forEach(_=>{_.isChecked=d})}toggleAllLevels(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.levels.forEach(_=>{_.isChecked=d})}}return(c=v).\u0275fac=function(n){return new(n||c)(e.rXU(G.k),e.rXU(p.TS),e.rXU(u.W3),e.rXU(p.y8))},c.\u0275cmp=e.VBU({type:c,selectors:[["app-workout-filter"]],decls:33,vars:6,consts:[["translucent","true"],["slot","start"],[3,"click"],["slot","end"],["strong","",3,"click"],[3,"lines"],["color","primary","sticky",""],["aria-label","Show only workouts with videos",3,"ngModelChange","ngModel"],["slot","end",3,"ngModelChange","ionChange","ngModel"],[4,"ngFor","ngForOf"],["slot","end",3,"ionChange"],["slot","start","color","medium",3,"name",4,"ngIf"],[3,"ngModelChange","ngModel"],["slot","start","color","medium",3,"name"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(){return r.dismiss()}),e.EFF(4,"Cancel"),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6," Filter Workouts "),e.k0s(),e.j41(7,"ion-buttons",3)(8,"ion-button",4),e.bIt("click",function(){return r.applyFilters()}),e.EFF(9,"Done"),e.k0s()()()(),e.j41(10,"ion-content")(11,"ion-list",5)(12,"ion-item-divider",6)(13,"ion-label"),e.EFF(14," General "),e.k0s()(),e.j41(15,"ion-item")(16,"ion-checkbox",7),e.mxI("ngModelChange",function(_){return e.DH7(r.showOnlyWorkoutsWithVideos,_)||(r.showOnlyWorkoutsWithVideos=_),_}),e.EFF(17," Show only workouts with videos "),e.k0s()(),e.j41(18,"ion-item-divider",6)(19,"ion-label"),e.EFF(20," Target Muscle Group "),e.k0s(),e.j41(21,"ion-checkbox",8),e.mxI("ngModelChange",function(_){return e.DH7(r.allMusclesChecked,_)||(r.allMusclesChecked=_),_}),e.bIt("ionChange",function(_){return r.toggleAllMuscleGroups(_)}),e.k0s()(),e.DNE(22,H,5,7,"ion-item",9),e.j41(23,"ion-item-divider",6)(24,"ion-label"),e.EFF(25," Equipments "),e.k0s(),e.j41(26,"ion-checkbox",10),e.bIt("ionChange",function(_){return r.toggleAllEquipments(_)}),e.k0s()(),e.DNE(27,x,5,7,"ion-item",9),e.j41(28,"ion-item-divider",6)(29,"ion-label"),e.EFF(30," Levels "),e.k0s(),e.j41(31,"ion-checkbox",10),e.bIt("ionChange",function(_){return r.toggleAllLevels(_)}),e.k0s()(),e.DNE(32,R,5,7,"ion-item",9),e.k0s()()),2&n&&(e.R7$(11),e.Y8G("lines",r.ios?"inset":"full"),e.R7$(5),e.R50("ngModel",r.showOnlyWorkoutsWithVideos),e.R7$(5),e.R50("ngModel",r.allMusclesChecked),e.R7$(),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.muscleGroups),e.R7$(5),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.equipments),e.R7$(5),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.levels))},dependencies:[j.Sq,j.bT,S.BC,S.vS,u.Jm,u.QW,u.eY,u.W9,u.eU,u.iq,u.uz,u.Dg,u.he,u.nf,u.BC,u.ai,u.hB,j.GH]}),v})();const Z=class A{constructor(){this.levels=[],this.equipments=[],this.muscleGroups=[],this.showOnlyWorkoutsWithVideos=!1}};var m=h(5747),w=h(9333),y=h(808),g=h(8498);const I=["scheduleList"];function $(c,v){1&c&&(e.j41(0,"ion-buttons",13),e.nrm(1,"ion-menu-button"),e.k0s())}function D(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-segment",14),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.segment,r)||(d.segment=r),e.Njj(r)}),e.bIt("ionChange",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())}),e.j41(1,"ion-segment-button",15),e.EFF(2," All "),e.k0s(),e.j41(3,"ion-segment-button",16),e.EFF(4," Favorites "),e.k0s()()}if(2&c){const s=e.XpG();e.R50("ngModel",s.segment)}}function T(c,v){1&c&&(e.j41(0,"ion-title"),e.EFF(1,"Workouts"),e.k0s())}function N(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-searchbar",17),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.queryText,r)||(d.queryText=r),e.Njj(r)}),e.bIt("ionInput",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())})("ionCancel",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.showSearchbar=!1)}),e.k0s()}if(2&c){const s=e.XpG();e.R50("ngModel",s.queryText)}}function Y(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-button",18),e.bIt("click",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.showSearchbar=!0)}),e.nrm(1,"ion-icon",19),e.k0s()}}function Q(c,v){1&c&&(e.j41(0,"span"),e.EFF(1,"Filter"),e.k0s())}function K(c,v){1&c&&(e.j41(0,"span"),e.nrm(1,"ion-icon",22),e.k0s())}function ne(c,v){1&c&&e.nrm(0,"span",23)}function se(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-button",18),e.bIt("click",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.presentFilter())}),e.DNE(1,Q,2,0,"span",3),e.j41(2,"div",20),e.DNE(3,K,2,0,"span",3)(4,ne,1,0,"span",21),e.k0s()()}if(2&c){const s=e.XpG();e.R7$(),e.Y8G("ngIf",s.ios),e.R7$(2),e.Y8G("ngIf",!s.ios),e.R7$(),e.Y8G("ngIf",s.filtersEnabled)}}function le(c,v){if(1&c){const s=e.RV6();e.j41(0,"ion-toolbar")(1,"ion-segment",14),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.segment,r)||(d.segment=r),e.Njj(r)}),e.bIt("ionChange",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())}),e.j41(2,"ion-segment-button",15),e.EFF(3," All "),e.k0s(),e.j41(4,"ion-segment-button",16),e.EFF(5," Favorites "),e.k0s()()()}if(2&c){const s=e.XpG();e.R7$(),e.R50("ngModel",s.segment)}}function ae(c,v){if(1&c&&(e.j41(0,"ion-item",28)(1,"ion-thumbnail",13),e.nrm(2,"img",29),e.k0s(),e.j41(3,"ion-label")(4,"h2"),e.EFF(5),e.k0s(),e.j41(6,"p"),e.EFF(7),e.k0s(),e.j41(8,"p",30),e.EFF(9),e.k0s()()()),2&c){let s;const n=v.$implicit;e.Mz_("routerLink","/app/tabs/workouts/",n.id,""),e.R7$(2),e.FS9("src",n.thumbnail,e.B4B),e.FS9("alt",n.thumbnail),e.R7$(3),e.JRh(n.name),e.R7$(2),e.JRh(n.primaryMuscles&&n.primaryMuscles[0]),e.R7$(2),e.SpI(" ",null!==(s=n.equipment)&&void 0!==s?s:"Body Only"," ")}}function ce(c,v){if(1&c&&(e.j41(0,"ion-accordion",24)(1,"ion-item",25)(2,"ion-label"),e.EFF(3),e.k0s()(),e.j41(4,"div",26)(5,"ion-list"),e.DNE(6,ae,10,7,"ion-item",27),e.k0s()()()),2&c){const s=v.$implicit;e.Y8G("value",s.name),e.R7$(3),e.JRh(s.name),e.R7$(3),e.Y8G("ngForOf",s.workouts)}}let de=(()=>{var c;class v{constructor(n,r,d,_,B,J){this.workoutData=n,this.routerOutlet=r,this.modalCtrl=d,this.user=_,this.config=B,this.gaService=J,this.ios=!1,this.queryText="",this.segment="all",this.showSearchbar=!1,this.workoutGroups=[],this.allExercises=[],this.filtersEnabled=!1,this.groupNames=[]}ngOnInit(){this.workoutData.loadWorkOuts().subscribe(n=>{this.loadFilters(),this.updateWorkouts()}),this.ios="ios"===this.config.get("mode")}loadFilters(){this.workoutFilter=new Z;const n=localStorage.getItem("lastFilter");if(n)this.workoutFilter=JSON.parse(n);else{const r=this.workoutData.getLevels();this.workoutFilter.levels=r.map(B=>({name:B,isChecked:!0}));const d=this.workoutData.getEquipments();this.workoutFilter.equipments=d.map(B=>({name:B.name,isChecked:!0}));const _=this.workoutData.getMuscles();this.workoutFilter.muscleGroups=_.map(B=>({name:B,isChecked:!0}))}}updateWorkouts(){var n,r,d,_,B,J,ie,X=null===(n=this.workoutFilter)||void 0===n?void 0:n.muscleGroups.filter(E=>E.isChecked).map(E=>E.name),q=null===(r=this.workoutFilter)||void 0===r?void 0:r.levels.filter(E=>E.isChecked).map(E=>E.name),U=null===(d=this.workoutFilter)||void 0===d?void 0:d.equipments.filter(E=>E.isChecked).map(E=>E.name);this.filtersEnabled=(null==X?void 0:X.length)!=(null===(_=this.workoutFilter)||void 0===_?void 0:_.muscleGroups.length)||(null==q?void 0:q.length)!=(null===(B=this.workoutFilter)||void 0===B?void 0:B.levels.length)||(null==U?void 0:U.length)!=(null===(J=this.workoutFilter)||void 0===J?void 0:J.equipments.length),this.workoutData.getWorkouts(null!=X?X:[],null!=U?U:[],null!=q?q:[],this.queryText.toLowerCase(),null===(ie=this.workoutFilter)||void 0===ie?void 0:ie.showOnlyWorkoutsWithVideos).subscribe(E=>{if("favorites"===this.segment){var re=E.map(V=>({...V,workouts:V.workouts.filter(te=>this.user.hasFavorite(null==te?void 0:te.id))})).filter(V=>V.workouts.length>0);this.workoutGroups=re}else this.workoutGroups=E;this.allExercises=this.workoutGroups.flatMap(V=>V.workouts),this.groupNames=Array.from(new Set(this.allExercises.map(V=>V.muscleGroups).filter(V=>void 0!==V).map(V=>V.charAt(0).toUpperCase()+V.slice(1).toLowerCase()))),console.log(this.groupNames)})}toggleList(n){this.gaService.trackEvent(m.IA,m.GX,n.expanded?"Workout Group Collapsed":"Workout Group Expanded"),n.expanded=!n.expanded}presentFilter(){var n=this;return(0,b.A)(function*(){n.gaService.trackEvent(m.db,m.yw,"Filter Popup Opened");const r=yield n.modalCtrl.create({component:F,presentingElement:n.routerOutlet.nativeEl,componentProps:{filter:n.workoutFilter}});yield r.present();const{data:d}=yield r.onWillDismiss();d&&(n.workoutFilter=d,localStorage.setItem("lastFilter",JSON.stringify(n.workoutFilter)),n.updateWorkouts())})()}toggleFavorite(n,r){var d=this;return(0,b.A)(function*(){d.gaService.trackEvent(m.fN,m.GX,r.isFavourite?"Favorite Removed":"Favorite Added"),r.isFavourite?(console.log("removing favorite"),d.user.removeFavorite(r.id)):(console.log("adding favorite"),d.user.addFavorite(r.id)),n.close()})()}}return(c=v).\u0275fac=function(n){return new(n||c)(e.rXU(G.k),e.rXU(u.Rg),e.rXU(u.W3),e.rXU(w.E),e.rXU(p.TS),e.rXU(y.p))},c.\u0275cmp=e.VBU({type:c,selectors:[["app-workouts"]],viewQuery:function(n,r){if(1&n&&e.GBs(I,7),2&n){let d;e.mGM(d=e.lsd())&&(r.scheduleList=d.first)}},decls:19,vars:11,consts:[["translucent","true"],["slot","start",4,"ngIf"],[3,"ngModel","ngModelChange","ionChange",4,"ngIf"],[4,"ngIf"],["showCancelButton","always","placeholder","Search",3,"ngModel","ngModelChange","ionInput","ionCancel",4,"ngIf"],["slot","end"],[3,"click",4,"ngIf"],["fullscreen","true"],["collapse","condense"],["size","large"],["placeholder","Search",3,"ngModelChange","ionInput","ngModel"],[3,"multiple","value"],[3,"value",4,"ngFor","ngForOf"],["slot","start"],[3,"ngModelChange","ionChange","ngModel"],["value","all"],["value","favorites"],["showCancelButton","always","placeholder","Search",3,"ngModelChange","ionInput","ionCancel","ngModel"],[3,"click"],["slot","icon-only","name","search"],[1,"icon-container"],["class","badge",4,"ngIf"],["slot","icon-only","name","options"],[1,"badge"],[3,"value"],["slot","header","color","primary"],["slot","content"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["loading","lazy","width","150","height","100",3,"src","alt"],[2,"text-transform","capitalize"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.DNE(2,$,2,0,"ion-buttons",1)(3,D,5,1,"ion-segment",2)(4,T,2,0,"ion-title",3)(5,N,1,1,"ion-searchbar",4),e.j41(6,"ion-buttons",5),e.DNE(7,Y,2,0,"ion-button",6)(8,se,5,3,"ion-button",6),e.k0s()(),e.DNE(9,le,6,1,"ion-toolbar",3),e.k0s(),e.j41(10,"ion-content",7)(11,"ion-header",8)(12,"ion-toolbar")(13,"ion-title",9),e.EFF(14,"Schedule"),e.k0s()(),e.j41(15,"ion-toolbar")(16,"ion-searchbar",10),e.mxI("ngModelChange",function(_){return e.DH7(r.queryText,_)||(r.queryText=_),_}),e.bIt("ionInput",function(){return r.updateWorkouts()}),e.k0s()()(),e.j41(17,"ion-accordion-group",11),e.DNE(18,ce,7,3,"ion-accordion",12),e.k0s()()),2&n&&(e.R7$(2),e.Y8G("ngIf",!r.showSearchbar),e.R7$(),e.Y8G("ngIf",r.ios),e.R7$(),e.Y8G("ngIf",!r.ios&&!r.showSearchbar),e.R7$(),e.Y8G("ngIf",r.showSearchbar),e.R7$(2),e.Y8G("ngIf",!r.ios&&!r.showSearchbar),e.R7$(),e.Y8G("ngIf",!r.showSearchbar),e.R7$(),e.Y8G("ngIf",!r.ios),e.R7$(7),e.R50("ngModel",r.queryText),e.R7$(),e.Y8G("multiple",!0)("value",r.groupNames),e.R7$(),e.Y8G("ngForOf",r.workoutGroups))},dependencies:[j.Sq,j.bT,S.BC,S.vS,u.xk,u.YH,u.Jm,u.QW,u.W9,u.eU,u.iq,u.uz,u.he,u.nf,u.MC,u.S1,u.Gp,u.eP,u.Zx,u.BC,u.ai,u.Je,u.Gw,u.N7,g.Wk],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 150px;--border-radius: 10px}ion-item-sliding[track=beginner][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #69bb7b}ion-item-sliding[track=intermediate][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #6600cc}ion-item-sliding[track=expert][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #fe4c52}.icon-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.badge[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:8px;height:8px;background-color:red;border-radius:50%}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{width:100%;height:100%}"]}),v})()},8188:(ee,z,h)=>{h.d(z,{k:()=>R});var b=h(7673),e=h(6354);const p=class G{constructor(){this.isFavourite=!1,this.muscleGroups=""}get thumbnail(){return this.images&&this.images.length>0?"assets/thumbnails/"+this.images[0]:null}};var u=h(6493);const S=class j{constructor(A,Z){this.expanded=!0,this.name=A,this.workouts=Z}};var L=h(3953),H=h(1626),C=h(9333),x=h(4589),M=h(4909);let R=(()=>{var F;class A{constructor(m,w,y,g){this.http=m,this.user=w,this.muscleGroupService=y,this.translateService=g}getWorkoutJsonFile(){return"ta"===this.translateService.currentLang?"assets/data/workouts-ta.json":"assets/data/workouts.json"}load(){return this.exercises?(console.log("returning data from memory"),(0,b.of)(this.exercises)):(console.log("returning data from file"),this.http.get(this.getWorkoutJsonFile()).pipe((0,e.T)(this.processData,this)))}organizeByMajorMuscleGroup(m){console.log("organizing data");var w=this.muscleGroupService.getMuscleGroups();return this.exercisesByGroup=w.map(y=>{var g=m.filter($=>{var D,T;return y.values.includes(null!==(D=null===(T=$.primaryMuscles)||void 0===T?void 0:T[0])&&void 0!==D?D:"")});return new S(y.name,g)}),this.exercisesByGroup}organizeByMuscleGroup(m){return[...new Set(m.map(g=>g.primaryMuscles).flat().filter(g=>void 0!==g))].map(g=>new S(g,m.filter($=>{var D;return null===(D=$.primaryMuscles)||void 0===D?void 0:D.includes(g)})))}processData(m){return console.log("processing data"),this.exercises=m.map(w=>(w.isFavourite=this.user.hasFavorite(w.id),Object.assign(new p,w))),this.fetchEquipments(),this.exercises}loadWorkOuts(){return this.load()}getWorkout(m){return this.load().pipe((0,e.T)(w=>w.find(y=>y.id===m)))}getAllWorkouts(){return console.log("getting all workouts"),this.exercises}getWorkouts(m,w,y,g="",I=!1){return this.load().pipe((0,e.T)($=>{var D=$.filter(T=>{var N,Y,Q,K;return(0==y.length||y.includes(null!==(N=T.level)&&void 0!==N?N:"")&&0==m.length||m.includes(null!==(Y=null===(Q=T.primaryMuscles)||void 0===Q?void 0:Q[0])&&void 0!==Y?Y:""))&&(0==w.length||w.includes(null!==(K=T.equipment)&&void 0!==K?K:""))&&(""==g||T.name.toLowerCase().includes(g))});return I&&(D=D.filter(T=>{var N;return(null===(N=T.videos)||void 0===N?void 0:N.length)>0})),D})).pipe((0,e.T)(this.organizeByMajorMuscleGroup,this))}getLevels(){var m,w=null===(m=this.exercises)||void 0===m?void 0:m.map(g=>g.level);return Array.from(new Set(w))}getEquipments(){return this.equipments}getMuscles(){var m;const w=null===(m=this.exercises)||void 0===m?void 0:m.map(g=>g.primaryMuscles).reduce((g,I)=>g.concat(I),[]);return Array.from(new Set(w))}fetchEquipments(){var m;const y=[...new Set(null===(m=this.exercises)||void 0===m?void 0:m.map(g=>g.equipment).filter(g=>void 0!==g).map(g=>null===g?"Cardio":g))].map(g=>new u.A({id:g}));this.equipments=y}}return(F=A).\u0275fac=function(m){return new(m||F)(L.KVO(H.Qq),L.KVO(C.E),L.KVO(x.A),L.KVO(M.c$))},F.\u0275prov=L.jDH({token:F,factory:F.\u0275fac,providedIn:"root"}),A})()},4589:(ee,z,h)=>{h.d(z,{A:()=>G});var b=h(3953),e=h(1626);let G=(()=>{var p;class u{constructor(S){this.http=S,this.majorGroupsBasic={all:["abdominals","hamstrings","adductors","quadriceps","calves","glutes","abductors","biceps","triceps","forearms","shoulders","traps","neck","middle back","lower back","lats","chest"],core:["abdominals"],legs:["hamstrings","adductors","quadriceps","calves","glutes","abductors"],arms:["biceps","triceps","forearms"],"upper body":["shoulders","traps","neck"],back:["middle back","lower back","lats"],chest:["chest"]},this.muscleGroupsAdvanced=["abdominals","hamstrings","adductors","quadriceps","biceps","shoulders","chest","middle back","calves","glutes","lower back","lats","triceps","traps","forearms","neck","abductors"],this.jsonUrl="assets/data/muscle-group.json"}getAllMuscleGroupsFlat(){return this.majorGroupsBasic}getMuscleGroupsNew(){return this.http.get(this.jsonUrl)}getMuscleGroups(){return[{key:"core",values:this.majorGroupsBasic.core,name:"Core",orderNumber:1},{key:"legs",values:this.majorGroupsBasic.legs,name:"Legs",orderNumber:2},{key:"arms",values:this.majorGroupsBasic.arms,name:"Arms",orderNumber:3},{key:"upper body",values:this.majorGroupsBasic["upper body"],name:"Upper Body",orderNumber:4},{key:"back",values:this.majorGroupsBasic.back,name:"Back",orderNumber:5},{key:"chest",values:this.majorGroupsBasic.chest,name:"Chest",orderNumber:6}]}}return(p=u).\u0275fac=function(S){return new(S||p)(b.KVO(e.Qq))},p.\u0275prov=b.jDH({token:p,factory:p.\u0275fac,providedIn:"root"}),u})()},8203:(ee,z,h)=>{h.d(z,{dS:()=>S,jI:()=>H});var b=h(3953),e=h(177);const G=new b.nKC("cdk-dir-doc",{providedIn:"root",factory:function p(){return(0,b.WQX)(e.qQ)}}),u=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let S=(()=>{var C;class x{constructor(R){this.value="ltr",this.change=new b.bkB,R&&(this.value=function j(C){var x;const M=(null==C?void 0:C.toLowerCase())||"";return"auto"===M&&typeof navigator<"u"&&null!==(x=navigator)&&void 0!==x&&x.language?u.test(navigator.language)?"rtl":"ltr":"rtl"===M?"rtl":"ltr"}((R.body?R.body.dir:null)||(R.documentElement?R.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return(C=x).\u0275fac=function(R){return new(R||C)(b.KVO(G,8))},C.\u0275prov=b.jDH({token:C,factory:C.\u0275fac,providedIn:"root"}),x})(),H=(()=>{var C;class x{}return(C=x).\u0275fac=function(R){return new(R||C)},C.\u0275mod=b.$C({type:C}),C.\u0275inj=b.G2t({}),x})()}}]);