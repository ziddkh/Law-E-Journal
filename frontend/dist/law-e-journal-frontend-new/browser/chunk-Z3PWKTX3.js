import{a as ee}from"./chunk-BHMO5LPU.js";import{a as G,b as q,c as Z,d as J,e as W,f as X,g as ie}from"./chunk-YUI6A5HT.js";import{a as te,b as ne}from"./chunk-MERPYSGN.js";import{$ as C,C as F,Ca as u,D as I,Da as p,Ea as v,Fa as S,H as k,I as H,M as T,N as M,Na as h,O as E,P as $,Xa as N,Y as x,Ya as U,Za as R,_ as r,d as D,hb as B,ib as K,ja as f,kb as A,la as l,lb as Y,mb as Q,na as V,pa as i,qa as a,ra as c,sa as s,ta as _,va as L,wa as O,xa as g,ya as b}from"./chunk-HIS3RWLR.js";var ae=(()=>{let n=class n{constructor(){}getHomeData(){return D(this,arguments,function*(o={}){return yield Y.get(`${Q.api_url}/home-data`,{params:o})})}};n.\u0275fac=function(m){return new(m||n)},n.\u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var oe=(()=>{let n=class n{constructor(){this.module="[Nama Module]"}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=k({type:n,selectors:[["app-empty-component"]],inputs:{module:"module"},decls:8,vars:1,consts:[[1,"relative"],[1,"max-w-5xl","px-4","lg:px-4","mx-auto","py-10"],[1,"flex","flex-col","sm:flex-row","items-center","justify-center","gap-4","sm:gap-14"],[1,"w-[240px]","h-[240px]","sm:w-[320px]","sm:h-[320px]"],["src","/placeholders/empty-component.svg","alt","Empty Component Illustration",1,"w-full","h-full","object-contain","grayscale"],[1,"text-gray-900","text-xl","sm:text-2xl","md:text-4xl","font-bold","text-center","sm:text-left"]],template:function(m,d){m&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,"img",4),a(),i(5,"div")(6,"h2",5),p(7),a()()()()()),m&2&&(r(7),S(" Atur ",d.module," terlebih dahulu untuk memulai! "))}});let e=n;return e})();function pe(e,n){if(e&1&&(s(0),i(1,"div",21)(2,"div")(3,"a",22)(4,"span"),p(5),a()()()(),_()),e&2){let t=g().$implicit;r(3),l("href",t.cta_button_url,x),r(2),v(t.cta_button_text)}}function se(e,n){if(e&1&&(s(0),i(1,"swiper-slide")(2,"div",15)(3,"div",16),c(4,"img",17),a(),c(5,"div"),i(6,"div",18)(7,"h1",19),p(8),a(),i(9,"p",20),p(10),a(),f(11,pe,6,2,"ng-container",10),a()()(),_()),e&2){let t=n.$implicit;r(3),V("my-swiper-img-wrapper",t.title),r(),l("src",t.signed_image_url,x)("alt",t.title+" Image"),r(4),v(t.title),r(2),v(t.description),r(),l("ngIf",t.cta_button_text&&t.cta_button_url)}}function _e(e,n){if(e&1&&(s(0),i(1,"swiper-container",13),f(2,se,12,7,"ng-container",14),a(),_()),e&2){let t=g(3);r(2),l("ngForOf",t.banners)}}function ge(e,n){e&1&&c(0,"app-empty-component",23)}function de(e,n){if(e&1){let t=L();s(0),i(1,"div",33),O("click",function(){let m=T(t).$implicit,d=g(5);return M(d.openDialog(m))}),c(2,"img",17),a(),_()}if(e&2){let t=n.$implicit;r(2),l("src",t.signed_image_url,x)("alt",t.name+" Image")}}function fe(e,n){if(e&1){let t=L();s(0),i(1,"div",33),O("click",function(){let m=T(t).$implicit,d=g(5);return M(d.openDialog(m))}),c(2,"img",17),a(),_()}if(e&2){let t=n.$implicit;r(2),l("src",t.signed_image_url,x)("alt",t.name+" Image")}}function xe(e,n){if(e&1&&(i(0,"div",31)(1,"div",32),f(2,de,3,2,"ng-container",14),a(),i(3,"div",32),f(4,fe,3,2,"ng-container",14),a()()),e&2){let t=g(4);r(2),l("ngForOf",t.galleries),r(2),l("ngForOf",t.galleries)}}function ue(e,n){if(e&1&&(s(0),i(1,"section",24)(2,"div",25)(3,"div",26)(4,"h2",27),p(5),a(),i(6,"p",28),p(7),a(),i(8,"a",29),p(9,"Selengkapnya"),a()(),f(10,xe,5,2,"div",30),a()(),_()),e&2){let t=g(3);r(5),v(t.companyInformation.title),r(2),v(t.companyInformation.short_description),r(3),l("ngIf",t.galleries.length>0)}}function ve(e,n){e&1&&c(0,"app-empty-component",34)}function he(e,n){if(e&1){let t=L();s(0),i(1,"swiper-slide")(2,"div",46),O("click",function(){let m=T(t).$implicit,d=g(4);return M(d.detailLayanan(m.name))}),i(3,"div",47),c(4,"img",17),a(),i(5,"div",48)(6,"h2",49),p(7),a(),i(8,"button",50)(9,"span"),p(10,"Lihat Selengkapnya"),a(),E(),i(11,"svg",51),c(12,"path",52),a()()()()(),_()}if(e&2){let t=n.$implicit;r(4),b("src",t.signed_image_url,x),l("alt",t.name+" Image"),r(3),v(t.name)}}function ye(e,n){if(e&1&&(s(0),i(1,"section",35)(2,"div",36)(3,"div",37)(4,"div",38)(5,"h2",39),p(6,"Kenapa Memilih Jasa Kami"),a(),i(7,"p",40),p(8),a()(),i(9,"div")(10,"a",41)(11,"span"),p(12,"Lihat Selengkapnya"),a(),E(),i(13,"svg",42),c(14,"path",43),a()()()(),$(),i(15,"div",44)(16,"swiper-container",45),f(17,he,13,3,"ng-container",14),a()()()(),_()),e&2){let t,o=g(3);r(8),S("",(t=o.settingService.getCompanyName())!==null&&t!==void 0?t:"Company Name"," menjunjung tinggi nilai-nilai dan prinsip yang dapat mendorong kami untuk selalu memberikan serta menjalin hubungan baik dengan Klien kami. Nilai-nilai inilah yang membedakan kami dengan yang lain:"),r(9),l("ngForOf",o.services)}}function Ce(e,n){e&1&&c(0,"app-empty-component",53)}function be(e,n){if(e&1&&(s(0),c(1,"img",17),_()),e&2){let t=g().$implicit;r(),l("src",t.signed_image_url,x)("alt",t.name+" Image")}}function we(e,n){if(e&1&&c(0,"img",61),e&2){let t=g().$implicit;l("alt",t.name+" Image")}}function Ee(e,n){if(e&1&&(s(0),i(1,"swiper-slide")(2,"div",56)(3,"div",57),f(4,be,2,2,"ng-container",11)(5,we,1,1,"ng-template",null,8,h),a(),i(7,"div",58)(8,"h2",59),p(9),a(),i(10,"p",60),p(11),a(),i(12,"p",60),p(13),a()()()(),_()),e&2){let t=n.$implicit,o=u(6);r(4),l("ngIf",t.image_url)("ngIfElse",o),r(5),v(t.name),r(2),v(t.position),r(2),S('"',t.description,'"')}}function Se(e,n){if(e&1&&(i(0,"section",24)(1,"div",25)(2,"h2",54),p(3,"Klien Kami"),a(),i(4,"div",44)(5,"swiper-container",55),f(6,Ee,14,5,"ng-container",14),a()()()()),e&2){let t=g(3);r(6),l("ngForOf",t.clientReviews)}}function Ie(e,n){e&1&&c(0,"app-empty-component",62)}function ke(e,n){if(e&1&&(s(0),i(1,"swiper-slide")(2,"div",56)(3,"div",47),c(4,"img",17),a(),i(5,"div",48)(6,"h2",49),p(7),a(),i(8,"a",66)(9,"span"),p(10,"Lihat Selengkapnya"),a(),E(),i(11,"svg",51),c(12,"path",52),a()()()()(),_()),e&2){let t=n.$implicit;r(4),b("src",t.signed_image_url,x),l("alt",t.title+" Image"),r(3),v(t.title),r(),l("routerLink","postingan/"+t.type+"/"+t.slug)}}function He(e,n){if(e&1&&(s(0),i(1,"section",24)(2,"div",36)(3,"div",63)(4,"swiper-container",45),f(5,ke,13,4,"ng-container",14),a()(),i(6,"div",64)(7,"div")(8,"a",65)(9,"span"),p(10,"Lihat Selengkapnya"),a(),E(),i(11,"svg",42),c(12,"path",43),a()()()()()(),_()),e&2){let t=g(3);r(5),l("ngForOf",t.recommendedPosts)}}function Te(e,n){e&1&&c(0,"app-empty-component",67)}function Me(e,n){if(e&1&&(s(0),i(1,"div",75),c(2,"img",76),a(),_()),e&2){let t=g(4);r(2),b("src",t.settingService.getCompanyLogo(),x)}}function Le(e,n){e&1&&c(0,"div",77)}function Oe(e,n){if(e&1&&(s(0),i(1,"section",68),c(2,"div",69),i(3,"div",25)(4,"div",70),f(5,Me,3,1,"ng-container",11)(6,Le,1,0,"ng-template",null,9,h),a(),i(8,"h2",71),p(9),a(),i(10,"h3",72),p(11,"Komitmen, Keunggulan, dan Integritas dalam Hukum."),a(),i(12,"p",73),p(13," Firma hukum kami berdedikasi memberikan layanan hukum terbaik dengan integritas tinggi. Dengan tim ahli yang berpengalaman, kami siap membantu Anda menyelesaikan berbagai masalah hukum dengan solusi efektif dan strategis. Prioritas kami adalah kepuasan dan keberhasilan klien, melalui pendekatan profesional dan personal yang terpercaya. "),a(),i(14,"a",74)(15,"span"),p(16,"Contact Us"),a()()()(),_()),e&2){let t,o=u(7),m=g(3);r(5),l("ngIf",m.settingService.getCompanyLogo())("ngIfElse",o),r(4),v((t=m.settingService.getCompanyName())!==null&&t!==void 0?t:"Company Name")}}function Re(e,n){e&1&&c(0,"app-empty-component",78)}function je(e,n){if(e&1&&(s(0),i(1,"swiper-slide")(2,"a",82)(3,"div",83),c(4,"img",84),a()()(),_()),e&2){let t=n.$implicit;r(2),b("href",t.url_formatted,x),r(2),b("src",t.signed_image_url,x),l("alt",t.name+" Image")}}function Pe(e,n){if(e&1&&(s(0),i(1,"section",24)(2,"div",36)(3,"div",79)(4,"h2",80),p(5,"Klien Kami"),a()(),i(6,"div",44)(7,"swiper-container",81),f(8,je,5,3,"ng-container",14),a()()()(),_()),e&2){let t=g(3);r(8),l("ngForOf",t.clients)}}function ze(e,n){e&1&&c(0,"app-empty-component",85)}function De(e,n){if(e&1&&(s(0),f(1,_e,3,1,"ng-container",11)(2,ge,1,0,"ng-template",null,1,h)(4,ue,11,3,"ng-container",11)(5,ve,1,0,"ng-template",null,2,h)(7,ye,18,2,"ng-container",11)(8,Ce,1,0,"ng-template",null,3,h)(10,Se,7,1,"section",12)(11,Ie,1,0,"ng-template",null,4,h)(13,He,13,1,"ng-container",11)(14,Te,1,0,"ng-template",null,5,h)(16,Oe,17,3,"ng-container",11)(17,Re,1,0,"ng-template",null,6,h)(19,Pe,9,1,"ng-container",11)(20,ze,1,0,"ng-template",null,7,h),_()),e&2){let t=u(3),o=u(6),m=u(9),d=u(12),w=u(15),P=u(18),z=u(21),y=g(2);r(),l("ngIf",y.banners.length>0)("ngIfElse",t),r(3),l("ngIf",!!y.companyInformation.short_description)("ngIfElse",o),r(3),l("ngIf",y.services.length>0)("ngIfElse",m),r(3),l("ngIf",y.clientReviews.length>0)("ngIfElse",d),r(3),l("ngIf",y.recommendedPosts.length>0)("ngIfElse",w),r(3),l("ngIf",y.settingService.getCompanyLogo())("ngIfElse",P),r(3),l("ngIf",y.clients.length>0)("ngIfElse",z)}}function Fe(e,n){e&1&&c(0,"app-empty-page",86)}function $e(e,n){if(e&1&&(s(0),f(1,De,22,14,"ng-container",11)(2,Fe,1,0,"ng-template",null,0,h),_()),e&2){let t=u(3),o=g();r(),l("ngIf",o.banners.length>0||o.recommendedPosts.length>0||!!o.companyInformation.short_description||o.services.length>0||o.clientReviews.length>0||o.settingService.getCompanyLogo()||o.clients.length>0)("ngIfElse",t)}}var re=(()=>{let n=class n{constructor(o,m,d,w,P,z){this.homeService=o,this.settingService=m,this.dialog=d,this.breakpointObserver=w,this.overlay=P,this.router=z,this.isExtraSmall=this.breakpointObserver.observe(q.XSmall),this.isLoading=!0,this.banners=[],this.clientReviews=[],this.clients=[],this.posts=[],this.profiles=[],this.services=[],this.recommendedPosts=[],this.galleries=[]}ngOnInit(){this.getHomeData()}openDialog(o){let m=this.overlay.position().global().centerHorizontally().top("48px"),d=this.dialog.open(X,{width:"50%",positionStrategy:m,data:o});this.isExtraSmall.subscribe(w=>{w.matches?d.updateSize("85%","85%"):d.updateSize("50%","50%")})}getHomeData(){this.isLoading=!0,this.homeService.getHomeData().then(o=>{this.banners=o.data.banners,this.clientReviews=o.data.client_reviews,this.clients=o.data.clients,this.posts=o.data.posts,this.profiles=o.data.profiles,this.services=o.data.services,this.recommendedPosts=o.data.recommended_posts,this.companyInformation=o.data.company_information,this.galleries=o.data.recommended_galleries}).catch(o=>{console.log(o)}).finally(()=>{this.isLoading=!1})}detailLayanan(o){this.router.navigateByUrl(`/layanan/detail/${o}`)}};n.\u0275fac=function(m){return new(m||n)(C(ae),C(ee),C(J),C(G),C(Z),C(B))},n.\u0275cmp=k({type:n,selectors:[["app-home"]],decls:1,vars:1,consts:[["emptyAll",""],["emptyBanner",""],["emptyCompanyInformation",""],["emptyService",""],["emptyClientReview",""],["emptyRecommendedPost",""],["emptyCompanyLogo",""],["emptyPartner",""],["noImage",""],["defaultCompanyLogo",""],[4,"ngIf"],[4,"ngIf","ngIfElse"],["class","relative py-10",4,"ngIf","ngIfElse"],["id","hero","lazy","true","navigation","false","effect","fade","pagination","true","pagination-clickable","true","loop","true","autoplay-delay","2500","autoplay-disable-on-interaction","false"],[4,"ngFor","ngForOf"],[1,"relative","h-full","w-full"],[1,"w-full","h-full"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"absolute","top-1/2","lg:left-1/2","-translate-y-1/2","lg:-translate-x-1/2","left-4","right-4","lg:w-[64rem]","max-w-5xl","lg:px-0"],[1,"text-4xl","md:text-6xl","leading-10","font-bold","tracking-tight","mb-4","text-white"],[1,"text-base","md:text-lg","leading-6","tracking-normal","mb-8","text-white"],[1,"flex","gap-3"],[1,"w-full","px-5","py-2.5","text-sm","inline-flex","leading-4","gap-2","bg-red-600","text-white",3,"href"],["module","banner"],[1,"relative","py-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"mx-auto","mb-6"],[1,"text-center","text-xl","md:text-4xl","leading-8","font-bold","tracking-tight","mb-3"],[1,"text-center","text-sm","mb-5"],["href","/tentang-kami",1,"mx-auto","block","w-fit","px-5","py-2.5","text-sm","leading-4","bg-red-600","text-white"],["class","w-full h-full overflow-hidden inline-block hover-parent whitespace-nowrap",4,"ngIf"],[1,"w-full","h-full","overflow-hidden","inline-block","hover-parent","whitespace-nowrap"],[1,"animate-marquee","h-full","inline-block","hover-stop"],[1,"img-wrapper","inline-block","mx-2","h-[160px]","aspect-video","overflow-hidden",3,"click"],["module","informasi perusahaan"],[1,"relative","pb-6"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","pt-10"],[1,"border-b","border-violet-700/10","pb-6","mb-6","inline-flex","justify-between"],[1,"flex-1"],[1,"text-xl","md:text-3xl","text-gray-900","leading-8","font-bold","tracking-tight","mb-3"],[1,"text-sm","md:text-base","leading-6","tracking-normal","text-white0"],["routerLink","/layanan",1,"text-sm","text-gray-700","inline-flex","items-center","gap-2"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"size-5"],["fill-rule","evenodd","d","M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule","evenodd"],[1,"overflow-hidden"],["loop","true","slides-per-view","3","space-between","30"],[1,"relative","cursor-pointer",3,"click"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-gray-400/50"],[1,"p-1","pt-2"],[1,"text-sm","font-bold","text-gray-900","capitalize","line-clamp-2"],[1,"inline-flex","items-center","gap-2","text-white0","text-sm"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"size-4"],["fill-rule","evenodd","d","M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z","clip-rule","evenodd"],["module","servis"],[1,"text-center","text-xl","md:text-3xl","leading-8","font-bold","tracking-tight","mb-10","text-gray-900"],["loop","true","slides-per-view","3","space-between","24"],[1,"relative","cursor-pointer"],[1,"mx-auto","overflow-hidden","pointer-events-none","size-20","rounded-full","bg-slate-200"],[1,"p-1","pt-2","text-center"],[1,"text-base","font-bold","text-slate-900","capitalize"],[1,"text-sm"],["src","/placeholders/person.svg",1,"w-full","h-full","object-cover",3,"alt"],["module","testimoni"],[1,"overflow-hidden","mb-6"],[1,"flex","justify-end"],["routerLink","/postingan",1,"text-sm","text-slate-600","inline-flex","items-center","gap-2"],[1,"inline-flex","items-center","gap-2","text-gray-700","text-sm",3,"routerLink"],["module","rekomendasi artikel"],[1,"relative","overflow-hidden","py-10"],["aria-hidden","true",1,"bg-law","bg-gradient-to-tr","-z-10","pointer-events-none","absolute","inset-0","from-violet-500","to-violet-800"],[1,"block","w-fit","mb-3","mx-auto"],[1,"text-gray-900","text-center","text-xl","md:text-3xl","leading-8","font-bold","tracking-tight","mb-1"],[1,"text-center","text-lg","md:text-2xl","leading-8","font-semibold","tracking-tight","text-gray-900","mb-3"],[1,"text-center","text-sm","md:text-base","leading-6","tracking-normal","text-gray-900","mb-6"],["href","#",1,"w-fit","mx-auto","px-5","py-2.5","text-sm","block","leading-4","gap-2","bg-red-600","text-slate-50"],[1,"h-14","w-14","mx-auto","mb-3"],["alt","",1,"w-full","h-full","object-contain",3,"src"],[1,"w-14","h-14","bg-red-600","rounded-full"],["module","logo perusahaan"],[1,"flex","justify-between","mb-6"],[1,"text-xl","md:text-3xl","leading-8","font-bold","tracking-tight","mb-3","text-gray-900"],["slides-per-view","3","space-between","30","centered-slides","true","loop","true","autoplay-delay","2500","autoplay-disable-on-interaction","false"],["target","_blank",1,"relative","cursor-pointer",3,"href"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-transparent"],[1,"w-full","h-full","object-contain",3,"src","alt"],["module","klien"],["module","banner, artikel, servis, partner, logo perusahaan, dan testimoni"]],template:function(m,d){m&1&&f(0,$e,4,2,"ng-container",10),m&2&&l("ngIf",!d.isLoading)},dependencies:[N,U,oe,te,K],styles:['.hero-clip-path[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 0,5760px 0,5760px calc(100% - 352px),0 100%);clip-path:polygon(0 0,5760px 0,5760px calc(100% - 352px),0 100%)}.bg-law[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);background-position:center;background-repeat:no-repeat;background-size:cover;background-attachment:fixed;opacity:.2}swiper-container#hero[_ngcontent-%COMP%]{height:320px;width:100vw}@media (min-width: 1024px){swiper-container#hero[_ngcontent-%COMP%]{height:80vh}}.my-swiper-img-wrapper[_ngcontent-%COMP%]:after{content:"";background-image:linear-gradient(to top,#000000e6,#0000004d);width:100%;height:100%;top:0;left:0;position:absolute}.hover-parent[_ngcontent-%COMP%]:hover   .hover-stop[_ngcontent-%COMP%]{animation-play-state:paused}.hover-parent[_ngcontent-%COMP%]:hover   .img-wrapper[_ngcontent-%COMP%]{cursor:pointer;opacity:.5}.hover-parent[_ngcontent-%COMP%]:hover   .img-wrapper[_ngcontent-%COMP%]:hover{opacity:1}']});let e=n;return e})();var le=(()=>{let n=class n{};n.\u0275fac=function(m){return new(m||n)},n.\u0275mod=H({type:n}),n.\u0275inj=I({imports:[R]});let e=n;return e})();var Ve=[{path:"",component:re}],st=(()=>{let n=class n{};n.\u0275fac=function(m){return new(m||n)},n.\u0275mod=H({type:n}),n.\u0275inj=I({imports:[R,le,ne,W,ie,A.forChild(Ve)]});let e=n;return e})();export{st as HomeModule};
