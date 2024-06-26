import{d as Q}from"./chunk-VJCH3EXZ.js";import{a as K,b as J}from"./chunk-7VWTULW3.js";import{$ as v,C as U,Ca as b,D as $,Da as c,Ea as _,H as z,I as O,La as B,M as I,Ma as C,N as E,O as h,P as w,Va as D,Wa as A,X as j,Xa as G,Y as u,_ as o,ab as L,d as S,db as N,fb as V,ib as q,ja as x,jb as P,kb as M,la as l,pa as n,qa as a,ra as s,sa as d,ta as f,ua as R,va as k,wa as T,xa as p}from"./chunk-653UGQNQ.js";var W=(()=>{let i=class i{constructor(){}getCompanyInformation(){return S(this,arguments,function*(r={}){return yield P.get(`${M.api_url}/about`,{params:r})})}};i.\u0275fac=function(m){return new(m||i)},i.\u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var H=(()=>{let i=class i{constructor(){}getProfiles(){return S(this,arguments,function*(r={}){return yield P.get(`${M.api_url}/profiles`)})}getProfile(r){return S(this,null,function*(){return yield P.get(`${M.api_url}/profiles/${r}`)})}};i.\u0275fac=function(m){return new(m||i)},i.\u0275prov=U({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var re=()=>[1,2];function ae(e,i){e&1&&R(0)}function le(e,i){if(e&1&&(d(0),n(1,"div",8),s(2,"p",9),a(),f()),e&2){let t=p(2);o(2),l("innerHTML",t.getSafeContent(),j)}}function me(e,i){e&1&&s(0,"app-empty-page",10)}function ce(e,i){if(e&1&&(n(0,"section")(1,"div",7),x(2,le,3,1,"ng-container",6)(3,me,1,0,"ng-template",null,2,C),a()()),e&2){let t=b(4),r=p();o(2),l("ngIf",!!r.companyInformation.description)("ngIfElse",t)}}function pe(e,i){e&1&&(d(0),n(1,"div",14)(2,"div",15),s(3,"div",16),n(4,"div",17),s(5,"span",18)(6,"span",19),a()()(),f())}function se(e,i){e&1&&(d(0),n(1,"div",11)(2,"div",7)(3,"div",12),x(4,pe,7,0,"ng-container",13),a()()(),f()),e&2&&(o(4),l("ngForOf",B(1,re)))}function de(e,i){if(e&1){let t=k();d(0),n(1,"div",26),T("click",function(){let m=I(t).$implicit,g=p(3);return E(g.viewProfile(m.slug))}),n(2,"div",27),s(3,"img",28),a(),n(4,"div",29)(5,"h3",30),c(6),a(),n(7,"h5",31),c(8),a()()(),f()}if(e&2){let t=i.$implicit;o(3),l("src",t.signed_image_url,u),o(3),_(t.name),o(2),_(t.position)}}function fe(e,i){if(e&1&&(n(0,"div",24)(1,"h2",25),c(2,"Founders"),a(),n(3,"div",12),x(4,de,9,3,"ng-container",13),a()()),e&2){let t=p(2);o(4),l("ngForOf",t.founders)}}function _e(e,i){if(e&1){let t=k();d(0),n(1,"div",35)(2,"div",36),T("click",function(){let m=I(t).$implicit,g=p(3);return E(g.viewProfile(m.slug))}),s(3,"img",37),n(4,"div",29)(5,"h3",30),c(6),a(),n(7,"h5",31),c(8),a()()()(),f()}if(e&2){let t=i.$implicit;o(3),l("src",t.signed_image_url,u),o(3),_(t.name),o(2),_(t.position)}}function ge(e,i){if(e&1&&(n(0,"div",32)(1,"h2",33),c(2,"Partners"),a(),n(3,"div",34),x(4,_e,9,3,"ng-container",13),a()()),e&2){let t=p(2);o(4),l("ngForOf",t.partners)}}function ue(e,i){if(e&1){let t=k();d(0),n(1,"div",35)(2,"div",36),T("click",function(){let m=I(t).$implicit,g=p(3);return E(g.viewProfile(m.slug))}),s(3,"img",37),n(4,"div",29)(5,"h3",30),c(6),a(),n(7,"h5",31),c(8),a()()()(),f()}if(e&2){let t=i.$implicit;o(3),l("src",t.signed_image_url,u),o(3),_(t.name),o(2),_(t.position)}}function xe(e,i){if(e&1&&(n(0,"div",38)(1,"h2",33),c(2,"Advisors"),a(),n(3,"div",34),x(4,ue,9,3,"ng-container",13),a()()),e&2){let t=p(2);o(4),l("ngForOf",t.advisors)}}function ve(e,i){if(e&1){let t=k();d(0),n(1,"div",35)(2,"div",36),T("click",function(){let m=I(t).$implicit,g=p(3);return E(g.viewProfile(m.slug))}),s(3,"img",40),n(4,"div",29)(5,"h3",30),c(6),a(),n(7,"h5",31),c(8),a()()()(),f()}if(e&2){let t=i.$implicit;o(3),l("src",t.signed_image_url,u),o(3),_(t.name),o(2),_(t.position)}}function he(e,i){if(e&1&&(n(0,"div",39)(1,"h2",33),c(2,"Lawyers"),a(),n(3,"div",34),x(4,ve,9,3,"ng-container",13),a()()),e&2){let t=p(2);o(4),l("ngForOf",t.lawyers)}}function we(e,i){if(e&1&&(n(0,"section",7),x(1,fe,5,1,"div",20)(2,ge,5,1,"div",21)(3,xe,5,1,"div",22)(4,he,5,1,"div",23),a()),e&2){let t=p();o(),l("ngIf",t.founders.length>0),o(),l("ngIf",t.partners.length>0),o(),l("ngIf",t.advisors.length>0),o(),l("ngIf",t.lawyers.length>0)}}var Y=(()=>{let i=class i{constructor(r,m,g,y){this.companyInformationService=r,this.profileService=m,this.saniziter=g,this.router=y,this.isLoadingAbout=!0,this.isLoadingProfile=!0,this.founders=[],this.advisors=[],this.lawyers=[],this.partners=[]}ngOnInit(){this.getAbout(),this.getProfiles()}getAbout(){this.isLoadingAbout=!0,this.companyInformationService.getCompanyInformation().then(r=>{this.companyInformation=r.data.company_information}).catch(r=>{console.log(r)}).finally(()=>{this.isLoadingAbout=!1})}getProfiles(){this.isLoadingProfile=!0,this.profileService.getProfiles().then(r=>{this.founders=r.data.founders,this.advisors=r.data.advisors,this.lawyers=r.data.lawyers,this.partners=r.data.partners}).catch(r=>{console.log(r)}).finally(()=>{this.isLoadingProfile=!1})}viewProfile(r){this.router.navigateByUrl(`/tentang-kami/${r}/view`)}getSafeContent(){return this.saniziter.bypassSecurityTrustHtml(this.companyInformation.description)}};i.\u0275fac=function(m){return new(m||i)(v(W),v(H),v(L),v(V))},i.\u0275cmp=z({type:i,selectors:[["app-about-us"]],decls:10,vars:4,consts:[["showAbout",""],["showProfile",""],["emptyCompanyInformation",""],["id","article-banner",1,"h-[200px]","w-full","mb-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","text-slate-50"],[4,"ngIf","ngIfElse"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"block","mb-10"],[3,"innerHTML"],["module","Informasi"],["id","showLoading"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-8"],[4,"ngFor","ngForOf"],[1,"px-4","w-full","h-fit"],[1,"relative","aspect-square"],[1,"w-full","h-full","bg-gray-400/50"],[1,"z-[5]","absolute","bg-black/10","bottom-0","left-0","w-full","px-6","sm:px-10","py-4","sm:py-6"],[1,"block","w-3/4","h-[24px]","bg-gray-400/50","mb-2"],[1,"block","w-1/2","h-[20px]","bg-gray-400"],["id","founder","class","mb-10",4,"ngIf"],["id","partner","class","mb-10",4,"ngIf"],["id","advisor","class","mb-10",4,"ngIf"],["id","lawyers","class","mb-10",4,"ngIf"],["id","founder",1,"mb-10"],[1,"text-3xl","font-bold","text-slate-900","text-center","mb-6"],[1,"cursor-pointer","person-card","flex-1","relative",3,"click"],[1,"aspect-square"],["alt","Person",1,"w-full","h-full","object-cover","object-top",3,"src"],[1,"z-[5]","absolute","bg-black/30","bottom-0","left-0","w-full","px-6","sm:px-10","py-4","sm:py-6"],[1,"text-base","sm:text-lg","font-bold","text-white"],[1,"text-sm","sm:text-base","block","text-white"],["id","partner",1,"mb-10"],[1,"text-3xl","font-bold","text-slate-900","mb-6"],[1,"row","flex","flex-wrap","justify-center","gap-y-6","-mx-4"],[1,"px-4","w-full","sm:w-1/2","md:w-1/3","h-fit"],[1,"cursor-pointer","person-card","relative","aspect-square",3,"click"],[1,"w-full","h-full","object-cover","object-top",3,"src"],["id","advisor",1,"mb-10"],["id","lawyers",1,"mb-10"],["alt","Person",1,"grayscale","w-full","h-full","object-cover","object-top",3,"src"]],template:function(m,g){if(m&1&&(n(0,"section",3)(1,"div",4)(2,"h1",5),c(3,"Tentang Kami"),a()()(),x(4,ae,1,0,"ng-container",6)(5,ce,5,2,"ng-template",null,0,C)(7,se,5,2,"ng-container",6)(8,we,5,4,"ng-template",null,1,C)),m&2){let y=b(6),ee=b(9);o(4),l("ngIf",g.isLoadingAbout)("ngIfElse",y),o(3),l("ngIf",g.isLoadingProfile)("ngIfElse",ee)}},dependencies:[D,A,K],styles:['#article-banner[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#000000e6,#0000004d),url(/placeholders/hero.jpg);background-position:right;background-size:cover}.person-card[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background-image:linear-gradient(to top,#00000080,#0000)}']});let e=i;return e})();function be(e,i){if(e&1&&(d(0),n(1,"a",13),c(2),a(),f()),e&2){let t=p(2);o(),l("href","https://wa.me/"+t.profile.phone,u),o(),_(t.profile.phone)}}function Ce(e,i){e&1&&(n(0,"p"),c(1,"-"),a())}function ye(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",17),s(4,"path",18)(5,"path",19)(6,"path",20),a(),w(),n(7,"span",21),c(8),a()()(),f()),e&2){let t=p(3);o(2),l("href","mailto:"+t.profile.email,u),o(6),_(t.profile.email)}}function Se(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",22),s(4,"path",18)(5,"path",23),a(),w(),n(6,"span",21),c(7),a()()(),f()),e&2){let t=p(3);o(2),l("href","https://www.facebook.com/"+t.profile.facebook,u),o(5),_(t.profile.facebook)}}function Ie(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",24),s(4,"path",18)(5,"path",25)(6,"path",26)(7,"path",27),a(),w(),n(8,"span",21),c(9),a()()(),f()),e&2){let t=p(3);o(2),l("href","https://www.instagram.com/"+t.profile.instagram,u),o(7),_(t.profile.instagram)}}function Ee(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",28),s(4,"path",18)(5,"path",29)(6,"path",30),a(),w(),n(7,"span",21),c(8),a()()(),f()),e&2){let t=p(3);o(2),l("href","https://twitter.com/"+t.profile.twitter,u),o(6),_(t.profile.twitter)}}function ke(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",31),s(4,"path",18)(5,"path",32)(6,"path",33),a(),w(),n(7,"span",21),c(8),a()()(),f()),e&2){let t=p(3);o(2),l("href","https://www.youtube.com/user/"+t.profile.youtube,u),o(6),_(t.profile.youtube)}}function Te(e,i){if(e&1&&(d(0),n(1,"li")(2,"a",16),h(),n(3,"svg",34),s(4,"path",35),a(),w(),n(5,"span",21),c(6),a()()(),f()),e&2){let t=p(3);o(2),l("href","https://www.tiktok.com/@"+t.profile.tik_tok,u),o(4),_(t.profile.tik_tok)}}function Pe(e,i){if(e&1&&(d(0),n(1,"p",14),c(2,"Sosial Media"),a(),n(3,"ul",15),x(4,ye,9,2,"ng-container",1)(5,Se,8,2,"ng-container",1)(6,Ie,10,2,"ng-container",1)(7,Ee,9,2,"ng-container",1)(8,ke,9,2,"ng-container",1)(9,Te,7,2,"ng-container",1),a(),f()),e&2){let t=p(2);o(4),l("ngIf",t.profile.email),o(),l("ngIf",t.profile.facebook),o(),l("ngIf",t.profile.instagram),o(),l("ngIf",t.profile.twitter),o(),l("ngIf",t.profile.youtube),o(),l("ngIf",t.profile.tik_tok)}}function Me(e,i){if(e&1&&(d(0),n(1,"section",2)(2,"div",3)(3,"div",4)(4,"div",5),s(5,"img",6),a(),n(6,"div",5)(7,"h1",7),c(8),a(),n(9,"div",8)(10,"p",9),c(11,"Nomor Telepon:"),a(),x(12,be,3,2,"ng-container",10)(13,Ce,2,0,"ng-template",null,0,C),a(),x(15,Pe,10,6,"ng-container",1),a()(),n(16,"div",11),s(17,"div",12),a()()(),f()),e&2){let t=b(14),r=p();o(5),l("src",r.profile.signed_image_url,u)("alt",r.profile.name+" Image"),o(3),_(r.profile.name),o(4),l("ngIf",r.profile.phone)("ngIfElse",t),o(3),l("ngIf",r.profile.facebook||r.profile.email||r.profile.instagram||r.profile.twitter||r.profile.youtube||r.profile.tik_tok),o(2),l("innerHTML",r.getSafeContent(),j)}}var Z=(()=>{let i=class i{constructor(r,m,g,y){this.profileService=r,this.activatedRoute=m,this.saniziter=g,this.router=y,this.isLoading=!1,this.activeSlug="",this.activeSlug=this.activatedRoute.snapshot.params.slug}ngOnInit(){this.getProfile()}getProfile(){this.isLoading=!0,this.profileService.getProfile(this.activeSlug).then(r=>{this.profile=r.data.profile}).catch(r=>{console.log(r)}).finally(()=>{this.isLoading=!1})}getSafeContent(){return this.saniziter.bypassSecurityTrustHtml(this.profile.description)}};i.\u0275fac=function(m){return new(m||i)(v(H),v(N),v(L),v(V))},i.\u0275cmp=z({type:i,selectors:[["app-profile"]],decls:1,vars:1,consts:[["emptyProfilePhone",""],[4,"ngIf"],[1,"pt-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"w-full","flex","flex-col","sm:flex-row","gap-8"],[1,"flex-1"],[1,"w-full","h-full","object-cover","object-top",3,"src","alt"],[1,"text-2xl","sm:text-4xl","font-bold"],[1,"flex","mt-3","gap-2"],[1,""],[4,"ngIf","ngIfElse"],[1,"min-h-[200px]","sm:min-h-[240px]","w-full","mt-4"],[3,"innerHTML"],["target","_blank",1,"underline",3,"href"],[1,"text-base","mt-1"],[1,"flex","flex-col","gap-1","mt-2"],["target","_blank",1,"inline-flex","items-center","gap-2",3,"href"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-mail"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"],["d","M3 7l9 6l9 -6"],[1,"underline"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-brand-facebook"],["d","M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-brand-instagram"],["d","M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"],["d","M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"],["d","M16.5 7.5l0 .01"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-brand-x"],["d","M4 4l11.733 16h4.267l-11.733 -16z"],["d","M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","1.5","stroke","#000000","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-brand-youtube"],["d","M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"],["d","M10 9l5 3l-5 3z"],["xmlns","http://www.w3.org/2000/svg","width","18","height","18","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-tiktok"],["d","M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"]],template:function(m,g){m&1&&x(0,Me,18,7,"ng-container",1),m&2&&l("ngIf",!g.isLoading)},dependencies:[A]});let e=i;return e})();var Ue=[{path:"",component:Y},{path:":slug/view",component:Z}],Ke=(()=>{let i=class i{};i.\u0275fac=function(m){return new(m||i)},i.\u0275mod=O({type:i}),i.\u0275inj=$({imports:[G,Q,J,q.forChild(Ue)]});let e=i;return e})();export{Ke as AboutUsModule};
