"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3840,3103],{3840:(te,L,h)=>{h.r(L),h.d(L,{WorkoutsPageModule:()=>he});var y=h(177),e=h(4341),E=h(5374),C=h(3953),u=h(6780),M=h(8359);const T={schedule(a){let i=requestAnimationFrame,o=cancelAnimationFrame;const{delegate:t}=T;t&&(i=t.requestAnimationFrame,o=t.cancelAnimationFrame);const l=i(f=>{o=void 0,a(f)});return new M.yU(()=>null==o?void 0:o(l))},requestAnimationFrame(...a){const{delegate:i}=T;return((null==i?void 0:i.requestAnimationFrame)||requestAnimationFrame)(...a)},cancelAnimationFrame(...a){const{delegate:i}=T;return((null==i?void 0:i.cancelAnimationFrame)||cancelAnimationFrame)(...a)},delegate:void 0};var P=h(3604);new class k extends P.q{flush(i){this._active=!0;const o=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let l;i=i||t.shift();do{if(l=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===o&&t.shift());if(this._active=!1,l){for(;(i=t[0])&&i.id===o&&t.shift();)i.unsubscribe();throw l}}}(class Z extends u.R{constructor(i,o){super(i,o),this.scheduler=i,this.work=o}requestAsyncId(i,o,t=0){return null!==t&&t>0?super.requestAsyncId(i,o,t):(i.actions.push(this),i._scheduled||(i._scheduled=T.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,o,t=0){var l;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,o,t);const{actions:f}=i;null!=o&&(null===(l=f[f.length-1])||void 0===l?void 0:l.id)!==o&&(T.cancelAnimationFrame(o),i._scheduled=void 0)}});let S,b=1;const R={};function H(a){return a in R&&(delete R[a],!0)}const p={setImmediate(a){const i=b++;return R[i]=!0,S||(S=Promise.resolve()),S.then(()=>H(i)&&a()),i},clearImmediate(a){H(a)}},{setImmediate:F,clearImmediate:_}=p,W={setImmediate(...a){const{delegate:i}=W;return((null==i?void 0:i.setImmediate)||F)(...a)},clearImmediate(a){const{delegate:i}=W;return((null==i?void 0:i.clearImmediate)||_)(a)},delegate:void 0};new class V extends P.q{flush(i){this._active=!0;const o=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let l;i=i||t.shift();do{if(l=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===o&&t.shift());if(this._active=!1,l){for(;(i=t[0])&&i.id===o&&t.shift();)i.unsubscribe();throw l}}}(class $ extends u.R{constructor(i,o){super(i,o),this.scheduler=i,this.work=o}requestAsyncId(i,o,t=0){return null!==t&&t>0?super.requestAsyncId(i,o,t):(i.actions.push(this),i._scheduled||(i._scheduled=W.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,o,t=0){var l;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,o,t);const{actions:f}=i;null!=o&&(null===(l=f[f.length-1])||void 0===l?void 0:l.id)!==o&&(W.clearImmediate(o),i._scheduled===o&&(i._scheduled=void 0))}});var q=h(8203);let U=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=C.$C({type:a}),a.\u0275inj=C.G2t({}),i})(),D=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=C.$C({type:a}),a.\u0275inj=C.G2t({imports:[q.jI,U,q.jI,U]}),i})();var re=h(5642);const ee=[{path:"",component:h(4354).k}];let ue=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=C.$C({type:a}),a.\u0275inj=C.G2t({imports:[re.iI.forChild(ee),re.iI]}),i})(),he=(()=>{var a;class i{}return(a=i).\u0275fac=function(t){return new(t||a)},a.\u0275mod=C.$C({type:a}),a.\u0275inj=C.G2t({imports:[y.MD,e.YN,E.bv,D,ue]}),i})()},4354:(te,L,h)=>{h.d(L,{k:()=>de});var y=h(467),e=h(3953),E=h(3103),C=h(2872),u=h(5374),M=h(177),T=h(4341);function Z(c,g){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function P(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,Z,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=g.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}function k(c,g){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function x(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,k,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=g.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}function O(c,g){if(1&c&&e.nrm(0,"ion-icon",13),2&c){const s=e.XpG().$implicit;e.Y8G("name",s.name)}}function b(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-item"),e.nI1(1,"lowercase"),e.DNE(2,O,1,1,"ion-icon",11),e.j41(3,"ion-checkbox",12),e.mxI("ngModelChange",function(r){const d=e.eBV(s).$implicit;return e.DH7(d.isChecked,r)||(d.isChecked=r),e.Njj(r)}),e.EFF(4),e.k0s()()}if(2&c){const s=g.$implicit,n=e.XpG();e.BMQ("track",e.bMT(1,5,s.name)),e.R7$(2),e.Y8G("ngIf",n.ios),e.R7$(),e.R50("ngModel",s.isChecked),e.BMQ("aria-label",s.name),e.R7$(),e.SpI(" ",s.name," ")}}let S=(()=>{var c;class g{constructor(n,r,d,m){this.workoutData=n,this.config=r,this.modalCtrl=d,this.navParams=m,this.ios=!1,this.allMusclesChecked=!1,this.showOnlyWorkoutsWithVideos=!1}ngOnInit(){}ionViewWillEnter(){var n;this.ios="ios"===this.config.get("mode"),this.workoutFilter=this.navParams.get("filter"),this.showOnlyWorkoutsWithVideos=null===(n=this.workoutFilter)||void 0===n?void 0:n.showOnlyWorkoutsWithVideos}applyFilters(){this.workoutFilter&&(this.workoutFilter.showOnlyWorkoutsWithVideos=this.showOnlyWorkoutsWithVideos),this.dismiss(this.workoutFilter)}dismiss(n){this.modalCtrl.dismiss(n)}toggleAllMuscleGroups(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.muscleGroups.forEach(m=>{m.isChecked=d})}toggleAllEquipments(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.equipments.forEach(m=>{m.isChecked=d})}toggleAllLevels(n){var r;const d=n.detail.checked;null===(r=this.workoutFilter)||void 0===r||r.levels.forEach(m=>{m.isChecked=d})}}return(c=g).\u0275fac=function(n){return new(n||c)(e.rXU(E.k),e.rXU(C.TS),e.rXU(u.W3),e.rXU(C.y8))},c.\u0275cmp=e.VBU({type:c,selectors:[["app-workout-filter"]],decls:33,vars:6,consts:[["translucent","true"],["slot","start"],[3,"click"],["slot","end"],["strong","",3,"click"],[3,"lines"],["color","primary","sticky",""],["aria-label","Show only workouts with videos",3,"ngModelChange","ngModel"],["slot","end",3,"ngModelChange","ionChange","ngModel"],[4,"ngFor","ngForOf"],["slot","end",3,"ionChange"],["slot","start","color","medium",3,"name",4,"ngIf"],[3,"ngModelChange","ngModel"],["slot","start","color","medium",3,"name"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(){return r.dismiss()}),e.EFF(4,"Cancel"),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6," Filter Workouts "),e.k0s(),e.j41(7,"ion-buttons",3)(8,"ion-button",4),e.bIt("click",function(){return r.applyFilters()}),e.EFF(9,"Done"),e.k0s()()()(),e.j41(10,"ion-content")(11,"ion-list",5)(12,"ion-item-divider",6)(13,"ion-label"),e.EFF(14," General "),e.k0s()(),e.j41(15,"ion-item")(16,"ion-checkbox",7),e.mxI("ngModelChange",function(m){return e.DH7(r.showOnlyWorkoutsWithVideos,m)||(r.showOnlyWorkoutsWithVideos=m),m}),e.EFF(17," Show only workouts with videos "),e.k0s()(),e.j41(18,"ion-item-divider",6)(19,"ion-label"),e.EFF(20," Target Muscle Group "),e.k0s(),e.j41(21,"ion-checkbox",8),e.mxI("ngModelChange",function(m){return e.DH7(r.allMusclesChecked,m)||(r.allMusclesChecked=m),m}),e.bIt("ionChange",function(m){return r.toggleAllMuscleGroups(m)}),e.k0s()(),e.DNE(22,P,5,7,"ion-item",9),e.j41(23,"ion-item-divider",6)(24,"ion-label"),e.EFF(25," Equipments "),e.k0s(),e.j41(26,"ion-checkbox",10),e.bIt("ionChange",function(m){return r.toggleAllEquipments(m)}),e.k0s()(),e.DNE(27,x,5,7,"ion-item",9),e.j41(28,"ion-item-divider",6)(29,"ion-label"),e.EFF(30," Levels "),e.k0s(),e.j41(31,"ion-checkbox",10),e.bIt("ionChange",function(m){return r.toggleAllLevels(m)}),e.k0s()(),e.DNE(32,b,5,7,"ion-item",9),e.k0s()()),2&n&&(e.R7$(11),e.Y8G("lines",r.ios?"inset":"full"),e.R7$(5),e.R50("ngModel",r.showOnlyWorkoutsWithVideos),e.R7$(5),e.R50("ngModel",r.allMusclesChecked),e.R7$(),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.muscleGroups),e.R7$(5),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.equipments),e.R7$(5),e.Y8G("ngForOf",null==r.workoutFilter?null:r.workoutFilter.levels))},dependencies:[M.Sq,M.bT,T.BC,T.vS,u.Jm,u.QW,u.eY,u.W9,u.eU,u.iq,u.uz,u.Dg,u.he,u.nf,u.BC,u.ai,u.hB,M.GH]}),g})();const H=class R{constructor(){this.levels=[],this.equipments=[],this.muscleGroups=[],this.showOnlyWorkoutsWithVideos=!1}};var p=h(5747),w=h(9333),F=h(808),_=h(5642);const W=["scheduleList"];function $(c,g){1&c&&(e.j41(0,"ion-buttons",13),e.nrm(1,"ion-menu-button"),e.k0s())}function V(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-segment",14),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.segment,r)||(d.segment=r),e.Njj(r)}),e.bIt("ionChange",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())}),e.j41(1,"ion-segment-button",15),e.EFF(2," All "),e.k0s(),e.j41(3,"ion-segment-button",16),e.EFF(4," Favorites "),e.k0s()()}if(2&c){const s=e.XpG();e.R50("ngModel",s.segment)}}function j(c,g){1&c&&(e.j41(0,"ion-title"),e.EFF(1,"Workouts"),e.k0s())}function N(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-searchbar",17),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.queryText,r)||(d.queryText=r),e.Njj(r)}),e.bIt("ionInput",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())})("ionCancel",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.showSearchbar=!1)}),e.k0s()}if(2&c){const s=e.XpG();e.R50("ngModel",s.queryText)}}function q(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-button",18),e.bIt("click",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.showSearchbar=!0)}),e.nrm(1,"ion-icon",19),e.k0s()}}function Q(c,g){1&c&&(e.j41(0,"span"),e.EFF(1,"Filter"),e.k0s())}function K(c,g){1&c&&(e.j41(0,"span"),e.nrm(1,"ion-icon",22),e.k0s())}function ne(c,g){1&c&&e.nrm(0,"span",23)}function se(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-button",18),e.bIt("click",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.presentFilter())}),e.DNE(1,Q,2,0,"span",3),e.j41(2,"div",20),e.DNE(3,K,2,0,"span",3)(4,ne,1,0,"span",21),e.k0s()()}if(2&c){const s=e.XpG();e.R7$(),e.Y8G("ngIf",s.ios),e.R7$(2),e.Y8G("ngIf",!s.ios),e.R7$(),e.Y8G("ngIf",s.filtersEnabled)}}function le(c,g){if(1&c){const s=e.RV6();e.j41(0,"ion-toolbar")(1,"ion-segment",14),e.mxI("ngModelChange",function(r){e.eBV(s);const d=e.XpG();return e.DH7(d.segment,r)||(d.segment=r),e.Njj(r)}),e.bIt("ionChange",function(){e.eBV(s);const r=e.XpG();return e.Njj(r.updateWorkouts())}),e.j41(2,"ion-segment-button",15),e.EFF(3," All "),e.k0s(),e.j41(4,"ion-segment-button",16),e.EFF(5," Favorites "),e.k0s()()()}if(2&c){const s=e.XpG();e.R7$(),e.R50("ngModel",s.segment)}}function ae(c,g){if(1&c&&(e.j41(0,"ion-item",28)(1,"ion-thumbnail",13),e.nrm(2,"img",29),e.k0s(),e.j41(3,"ion-label")(4,"h2"),e.EFF(5),e.k0s()()()),2&c){const s=g.$implicit;e.Mz_("routerLink","/app/tabs/workouts/",s.id,""),e.R7$(2),e.FS9("src",s.thumbnail,e.B4B),e.FS9("alt",s.thumbnail),e.R7$(3),e.JRh(s.name)}}function ce(c,g){if(1&c&&(e.j41(0,"ion-accordion",24)(1,"ion-item",25)(2,"ion-label"),e.EFF(3),e.k0s()(),e.j41(4,"div",26)(5,"ion-list"),e.DNE(6,ae,6,5,"ion-item",27),e.k0s()()()),2&c){const s=g.$implicit;e.Y8G("value",s.name),e.R7$(3),e.JRh(s.name),e.R7$(3),e.Y8G("ngForOf",s.workouts)}}let de=(()=>{var c;class g{constructor(n,r,d,m,B,J){this.workoutData=n,this.routerOutlet=r,this.modalCtrl=d,this.user=m,this.config=B,this.gaService=J,this.ios=!1,this.queryText="",this.segment="all",this.showSearchbar=!1,this.workoutGroups=[],this.allExercises=[],this.filtersEnabled=!1,this.groupNames=[]}ngOnInit(){this.workoutData.loadWorkOuts().subscribe(n=>{this.loadFilters(),this.updateWorkouts()}),this.ios="ios"===this.config.get("mode")}loadFilters(){this.workoutFilter=new H;const n=localStorage.getItem("lastFilter");if(n)this.workoutFilter=JSON.parse(n);else{const r=this.workoutData.getLevels();this.workoutFilter.levels=r.map(B=>({name:B,isChecked:!0}));const d=this.workoutData.getEquipments();this.workoutFilter.equipments=d.map(B=>({name:B.name,isChecked:!0}));const m=this.workoutData.getMuscles();this.workoutFilter.muscleGroups=m.map(B=>({name:B,isChecked:!0}))}}updateWorkouts(){var n,r,d,m,B,J,ie,Y=null===(n=this.workoutFilter)||void 0===n?void 0:n.muscleGroups.filter(D=>D.isChecked).map(D=>D.name),X=null===(r=this.workoutFilter)||void 0===r?void 0:r.levels.filter(D=>D.isChecked).map(D=>D.name),U=null===(d=this.workoutFilter)||void 0===d?void 0:d.equipments.filter(D=>D.isChecked).map(D=>D.name);this.filtersEnabled=(null==Y?void 0:Y.length)!=(null===(m=this.workoutFilter)||void 0===m?void 0:m.muscleGroups.length)||(null==X?void 0:X.length)!=(null===(B=this.workoutFilter)||void 0===B?void 0:B.levels.length)||(null==U?void 0:U.length)!=(null===(J=this.workoutFilter)||void 0===J?void 0:J.equipments.length),this.workoutData.getWorkouts(null!=Y?Y:[],null!=U?U:[],null!=X?X:[],this.queryText.toLowerCase(),null===(ie=this.workoutFilter)||void 0===ie?void 0:ie.showOnlyWorkoutsWithVideos).subscribe(D=>{if("favorites"===this.segment){var re=D.map(I=>({...I,workouts:I.workouts.filter(ee=>this.user.hasFavorite(null==ee?void 0:ee.id))})).filter(I=>I.workouts.length>0);this.workoutGroups=re}else this.workoutGroups=D;this.allExercises=this.workoutGroups.flatMap(I=>I.workouts),this.groupNames=Array.from(new Set(this.allExercises.map(I=>I.muscleGroups).filter(I=>void 0!==I).map(I=>I.charAt(0).toUpperCase()+I.slice(1).toLowerCase()))),console.log(this.groupNames)})}toggleList(n){this.gaService.trackEvent(p.IA,p.GX,n.expanded?"Workout Group Collapsed":"Workout Group Expanded"),n.expanded=!n.expanded}presentFilter(){var n=this;return(0,y.A)(function*(){n.gaService.trackEvent(p.db,p.yw,"Filter Popup Opened");const r=yield n.modalCtrl.create({component:S,presentingElement:n.routerOutlet.nativeEl,componentProps:{filter:n.workoutFilter}});yield r.present();const{data:d}=yield r.onWillDismiss();d&&(n.workoutFilter=d,localStorage.setItem("lastFilter",JSON.stringify(n.workoutFilter)),n.updateWorkouts())})()}toggleFavorite(n,r){var d=this;return(0,y.A)(function*(){d.gaService.trackEvent(p.fN,p.GX,r.isFavourite?"Favorite Removed":"Favorite Added"),r.isFavourite?(console.log("removing favorite"),d.user.removeFavorite(r.id)):(console.log("adding favorite"),d.user.addFavorite(r.id)),n.close()})()}}return(c=g).\u0275fac=function(n){return new(n||c)(e.rXU(E.k),e.rXU(u.Rg),e.rXU(u.W3),e.rXU(w.E),e.rXU(C.TS),e.rXU(F.p))},c.\u0275cmp=e.VBU({type:c,selectors:[["app-workouts"]],viewQuery:function(n,r){if(1&n&&e.GBs(W,7),2&n){let d;e.mGM(d=e.lsd())&&(r.scheduleList=d.first)}},decls:20,vars:11,consts:[["translucent","true"],["slot","start",4,"ngIf"],[3,"ngModel","ngModelChange","ionChange",4,"ngIf"],[4,"ngIf"],["showCancelButton","always","placeholder","Search",3,"ngModel","ngModelChange","ionInput","ionCancel",4,"ngIf"],["slot","end"],[3,"click",4,"ngIf"],["fullscreen","true"],["collapse","condense"],["size","large"],["placeholder","Search",3,"ngModelChange","ionInput","ngModel"],[3,"multiple","value"],[3,"value",4,"ngFor","ngForOf"],["slot","start"],[3,"ngModelChange","ionChange","ngModel"],["value","all"],["value","favorites"],["showCancelButton","always","placeholder","Search",3,"ngModelChange","ionInput","ionCancel","ngModel"],[3,"click"],["slot","icon-only","name","search"],[1,"icon-container"],["class","badge",4,"ngIf"],["slot","icon-only","name","options"],[1,"badge"],[3,"value"],["slot","header","color","primary"],["slot","content"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["loading","lazy","width","150","height","100",3,"src","alt"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.DNE(2,$,2,0,"ion-buttons",1)(3,V,5,1,"ion-segment",2)(4,j,2,0,"ion-title",3)(5,N,1,1,"ion-searchbar",4),e.j41(6,"ion-buttons",5),e.DNE(7,q,2,0,"ion-button",6)(8,se,5,3,"ion-button",6),e.k0s()(),e.DNE(9,le,6,1,"ion-toolbar",3),e.k0s(),e.j41(10,"ion-content")(11,"ion-content",7)(12,"ion-header",8)(13,"ion-toolbar")(14,"ion-title",9),e.EFF(15,"Schedule"),e.k0s()(),e.j41(16,"ion-toolbar")(17,"ion-searchbar",10),e.mxI("ngModelChange",function(m){return e.DH7(r.queryText,m)||(r.queryText=m),m}),e.bIt("ionInput",function(){return r.updateWorkouts()}),e.k0s()()(),e.j41(18,"ion-accordion-group",11),e.DNE(19,ce,7,3,"ion-accordion",12),e.k0s()()()),2&n&&(e.R7$(2),e.Y8G("ngIf",!r.showSearchbar),e.R7$(),e.Y8G("ngIf",r.ios),e.R7$(),e.Y8G("ngIf",!r.ios&&!r.showSearchbar),e.R7$(),e.Y8G("ngIf",r.showSearchbar),e.R7$(2),e.Y8G("ngIf",!r.ios&&!r.showSearchbar),e.R7$(),e.Y8G("ngIf",!r.showSearchbar),e.R7$(),e.Y8G("ngIf",!r.ios),e.R7$(8),e.R50("ngModel",r.queryText),e.R7$(),e.Y8G("multiple",!0)("value",r.groupNames),e.R7$(),e.Y8G("ngForOf",r.workoutGroups))},dependencies:[M.Sq,M.bT,T.BC,T.vS,u.xk,u.YH,u.Jm,u.QW,u.W9,u.eU,u.iq,u.uz,u.he,u.nf,u.MC,u.S1,u.Gp,u.eP,u.Zx,u.BC,u.ai,u.Je,u.Gw,u.N7,_.Wk],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 150px;--border-radius: 10px}ion-item-sliding[track=beginner][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #69bb7b}ion-item-sliding[track=intermediate][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #6600cc}ion-item-sliding[track=expert][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-left:10px;border-left:2px solid #fe4c52}.icon-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.badge[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:8px;height:8px;background-color:red;border-radius:50%}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{width:100%;height:100%}"]}),g})()},3103:(te,L,h)=>{h.d(L,{k:()=>b});var y=h(7673),e=h(6354);const C=class E{constructor(){this.isFavourite=!1,this.muscleGroups=""}get thumbnail(){return this.images&&this.images.length>0?"assets/thumbnails/"+this.images[0]:null}},M=class u{constructor(R){this.selected=!1,this.name=R}capitalize(R){return R.charAt(0).toUpperCase()+R.slice(1)}get displayName(){return this.capitalize(this.name)}},Z=class T{constructor(R,H){this.expanded=!0,this.name=R,this.workouts=H}};var P=h(3953),k=h(1626),x=h(9333),O=h(4589);let b=(()=>{var S;class R{constructor(p,w,F){this.http=p,this.user=w,this.muscleGroupService=F}load(){return this.exercises?(console.log("returning data from memory"),(0,y.of)(this.exercises)):(console.log("returning data from file"),this.http.get("assets/data/workouts.json").pipe((0,e.T)(this.processData,this)))}organizeByMajorMuscleGroup(p){console.log("organizing data");var w=this.muscleGroupService.getMuscleGroups();return this.exercisesByGroup=w.map(F=>{var _=p.filter($=>{var V,j;return F.values.includes(null!==(V=null===(j=$.primaryMuscles)||void 0===j?void 0:j[0])&&void 0!==V?V:"")});return new Z(F.name,_)}),this.exercisesByGroup}organizeByMuscleGroup(p){return[...new Set(p.map(_=>_.primaryMuscles).flat().filter(_=>void 0!==_))].map(_=>new Z(_,p.filter($=>{var V;return null===(V=$.primaryMuscles)||void 0===V?void 0:V.includes(_)})))}processData(p){return console.log("processing data"),this.exercises=p.map(w=>(w.isFavourite=this.user.hasFavorite(w.id),Object.assign(new C,w))),this.fetchEquipments(),this.exercises}loadWorkOuts(){return this.load()}getWorkout(p){return this.load().pipe((0,e.T)(w=>w.find(F=>F.id===p)))}getAllWorkouts(){return console.log("getting all workouts"),this.exercises}getWorkouts(p,w,F,_="",W=!1){return this.load().pipe((0,e.T)($=>{var V=$.filter(j=>{var N,q,Q,K;return(0==F.length||F.includes(null!==(N=j.level)&&void 0!==N?N:"")&&0==p.length||p.includes(null!==(q=null===(Q=j.primaryMuscles)||void 0===Q?void 0:Q[0])&&void 0!==q?q:""))&&(0==w.length||w.includes(null!==(K=j.equipment)&&void 0!==K?K:""))&&(""==_||j.name.toLowerCase().includes(_))});return W&&(V=V.filter(j=>{var N;return(null===(N=j.videos)||void 0===N?void 0:N.length)>0})),V})).pipe((0,e.T)(this.organizeByMajorMuscleGroup,this))}getLevels(){var p,w=null===(p=this.exercises)||void 0===p?void 0:p.map(_=>_.level);return Array.from(new Set(w))}getEquipments(){return this.equipments}getMuscles(){var p;const w=null===(p=this.exercises)||void 0===p?void 0:p.map(_=>_.primaryMuscles).reduce((_,W)=>_.concat(W),[]);return Array.from(new Set(w))}fetchEquipments(){var p;const F=[...new Set(null===(p=this.exercises)||void 0===p?void 0:p.map(_=>_.equipment).filter(_=>void 0!==_).map(_=>null===_?"Cardio":_))].map(_=>new M(_));this.equipments=F}}return(S=R).\u0275fac=function(p){return new(p||S)(P.KVO(k.Qq),P.KVO(x.E),P.KVO(O.A))},S.\u0275prov=P.jDH({token:S,factory:S.\u0275fac,providedIn:"root"}),R})()},4589:(te,L,h)=>{h.d(L,{A:()=>e});var y=h(3953);let e=(()=>{var E;class C{constructor(){this.majorGroupsBasic={all:["abdominals","hamstrings","adductors","quadriceps","calves","glutes","abductors","biceps","triceps","forearms","shoulders","traps","neck","middle back","lower back","lats","chest"],core:["abdominals"],legs:["hamstrings","adductors","quadriceps","calves","glutes","abductors"],arms:["biceps","triceps","forearms"],"upper body":["shoulders","traps","neck"],back:["middle back","lower back","lats"],chest:["chest"]},this.muscleGroupsAdvanced=["abdominals","hamstrings","adductors","quadriceps","biceps","shoulders","chest","middle back","calves","glutes","lower back","lats","triceps","traps","forearms","neck","abductors"]}getAllMuscleGroupsFlat(){return this.majorGroupsBasic}getMuscleGroups(){return[{key:"core",values:this.majorGroupsBasic.core,name:"Core",orderNumber:1},{key:"legs",values:this.majorGroupsBasic.legs,name:"Legs",orderNumber:2},{key:"arms",values:this.majorGroupsBasic.arms,name:"Arms",orderNumber:3},{key:"upper body",values:this.majorGroupsBasic["upper body"],name:"Upper Body",orderNumber:4},{key:"back",values:this.majorGroupsBasic.back,name:"Back",orderNumber:5},{key:"chest",values:this.majorGroupsBasic.chest,name:"Chest",orderNumber:6}]}}return(E=C).\u0275fac=function(M){return new(M||E)},E.\u0275prov=y.jDH({token:E,factory:E.\u0275fac,providedIn:"root"}),C})()},8203:(te,L,h)=>{h.d(L,{dS:()=>T,jI:()=>P});var y=h(3953),e=h(177);const E=new y.nKC("cdk-dir-doc",{providedIn:"root",factory:function C(){return(0,y.WQX)(e.qQ)}}),u=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let T=(()=>{var k;class x{constructor(b){this.value="ltr",this.change=new y.bkB,b&&(this.value=function M(k){var x;const O=(null==k?void 0:k.toLowerCase())||"";return"auto"===O&&typeof navigator<"u"&&null!==(x=navigator)&&void 0!==x&&x.language?u.test(navigator.language)?"rtl":"ltr":"rtl"===O?"rtl":"ltr"}((b.body?b.body.dir:null)||(b.documentElement?b.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return(k=x).\u0275fac=function(b){return new(b||k)(y.KVO(E,8))},k.\u0275prov=y.jDH({token:k,factory:k.\u0275fac,providedIn:"root"}),x})(),P=(()=>{var k;class x{}return(k=x).\u0275fac=function(b){return new(b||k)},k.\u0275mod=y.$C({type:k}),k.\u0275inj=y.G2t({}),x})()}}]);