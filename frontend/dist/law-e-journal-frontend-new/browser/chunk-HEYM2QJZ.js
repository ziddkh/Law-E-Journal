import{a as W,m as me}from"./chunk-CCH4AIPR.js";import"./chunk-UQNVI34N.js";import{a as B,b as H,c as D,d as ce}from"./chunk-7GIQFTSR.js";import{a as N,b as se}from"./chunk-D6JZL7CI.js";import{$ as p,Aa as ae,Ca as V,D as te,Da as re,E as w,Fa as le,G as l,Ga as R,H as P,Ha as U,O as g,P as s,Q as ne,T as i,U as a,V as m,W as _,X as d,Z as v,_ as h,a as K,aa as S,ba as E,ca as f,d as A,da as C,fa as z,ga as $,ha as j,ja as y,ka as b,n as Q,o as X,r as T,ra as k,s as ee,sa as M,ta as ie,v as u,w as x,x as L,xa as oe,y as O}from"./chunk-7RNLU7GG.js";var F=(()=>{let o=class o{constructor(){}getPosts(){return A(this,arguments,function*(r={}){return yield R.get(`${U.api_url}/posts`,{params:r})})}getArticles(){return A(this,arguments,function*(r={}){return yield R.get(`${U.api_url}/posts/get-articles`,{params:r})})}getNews(){return A(this,arguments,function*(r={}){return yield R.get(`${U.api_url}/posts/get-news`,{params:r})})}getMedia(){return A(this,arguments,function*(r={}){return yield R.get(`${U.api_url}/posts/get-media`,{params:r})})}getPost(r){return A(this,null,function*(){return yield R.get(`${U.api_url}/posts/show`,{params:{slug:r}})})}};o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=Q({token:o,factory:o.\u0275fac,providedIn:"root"});let e=o;return e})();var he=()=>[1,2,3,4,5,6],ve=()=>[1,2,3,4,5,6,7,8];function Ce(e,o){e&1&&(_(0),i(1,"div",20)(2,"div",11),m(3,"span",12),i(4,"div",13),m(5,"span",14)(6,"span",15),a()()(),d())}function we(e,o){e&1&&(_(0),i(1,"div",21),m(2,"span",22),i(3,"div",8),m(4,"span",14)(5,"span",15),a()(),d())}function Se(e,o){e&1&&(_(0),i(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9)(5,"div",10)(6,"div",11),m(7,"span",12),i(8,"div",13),m(9,"span",14)(10,"span",15),a()()(),g(11,Ce,7,0,"ng-container",16),a()(),i(12,"div",17)(13,"aside",18)(14,"div",19),g(15,we,6,0,"ng-container",16),a()()()()(),d()),e&2&&(l(11),s("ngForOf",y(2,he)),l(4),s("ngForOf",y(3,ve)))}function Pe(e,o){if(e&1){let t=v();_(0),i(1,"div",10)(2,"article",25),h("click",function(){u(t);let n=p(4);return x(n.viewPost(n.recommendedPost.type,n.recommendedPost.slug))}),i(3,"div",26),m(4,"img",27)(5,"span",28),a(),i(6,"div",29)(7,"h2",30),f(8),a()(),i(9,"span",31),f(10,"Featured"),a()()(),d()}if(e&2){let t=p(4);l(4),S("src",t.recommendedPost.signed_image_url,w),s("alt",t.recommendedPost.title+" Image"),l(4),C(t.recommendedPost.title)}}function ye(e,o){if(e&1){let t=v();_(0),i(1,"div",20)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(5);return x(c.viewPost(n.type,n.slug))}),i(3,"div",32),m(4,"img",27),a(),i(5,"div",33)(6,"h2",34),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Ee(e,o){if(e&1&&(_(0),g(1,ye,8,3,"ng-container",16),d()),e&2){let t=p(4);l(),s("ngForOf",t.recomendedPosts)}}function be(e,o){if(e&1&&(_(0),i(1,"div",9),g(2,Pe,11,3,"ng-container",24)(3,Ee,2,1,"ng-container",24),a(),d()),e&2){let t=p(3);l(2),s("ngIf",!!t.recommendedPost),l(),s("ngIf",t.recomendedPosts.length>0)}}function Ie(e,o){if(e&1){let t=v();_(0),i(1,"div",20)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.type,n.slug))}),i(3,"div",32),m(4,"img",42),a(),i(5,"div",33)(6,"h2",34),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Te(e,o){if(e&1&&(_(0),i(1,"div",35)(2,"div",36)(3,"h2",37),f(4,"Artikel Terbaru"),a(),i(5,"a",38)(6,"span"),f(7,"Lihat Selengkapnya"),a(),L(),i(8,"svg",39),m(9,"path",40),a()()(),O(),i(10,"div",41),g(11,Ie,8,3,"ng-container",16),a()(),d()),e&2){let t=p(3);l(11),s("ngForOf",t.articlePosts)}}function ke(e,o){if(e&1){let t=v();_(0),i(1,"div",20)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.type,n.slug))}),i(3,"div",32),m(4,"img",42),a(),i(5,"div",33)(6,"h2",34),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Me(e,o){if(e&1&&(_(0),i(1,"div",43)(2,"div",36)(3,"h2",37),f(4,"Berita Terbaru"),a(),i(5,"a",44)(6,"span"),f(7,"Lihat Selengkapnya"),a(),L(),i(8,"svg",39),m(9,"path",40),a()()(),O(),i(10,"div",41),g(11,ke,8,3,"ng-container",16),a()(),d()),e&2){let t=p(3);l(11),s("ngForOf",t.newsPosts)}}function Ve(e,o){if(e&1){let t=v();_(0),i(1,"div",20)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.type,n.slug))}),i(3,"div",32),m(4,"img",42),a(),i(5,"div",33)(6,"h2",34),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Fe(e,o){if(e&1&&(_(0),i(1,"div",45)(2,"div",36)(3,"h2",37),f(4,"Media Terbaru"),a(),i(5,"a",46)(6,"span"),f(7,"Lihat Selengkapnya"),a(),L(),i(8,"svg",39),m(9,"path",40),a()()(),O(),i(10,"div",41),g(11,Ve,8,3,"ng-container",16),a()(),d()),e&2){let t=p(3);l(11),s("ngForOf",t.mediaPosts)}}function Le(e,o){if(e&1){let t=v();_(0),i(1,"article",48),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.type,n.slug))}),i(2,"div",49),m(3,"img",42),a(),i(4,"div",8)(5,"h2",34),f(6),a()()(),d()}if(e&2){let t=o.$implicit;l(3),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Oe(e,o){if(e&1&&(_(0),i(1,"div",17)(2,"aside",18)(3,"h3",47),f(4,"Recommendation Post"),a(),i(5,"div",19),g(6,Le,7,3,"ng-container",16),a()()(),d()),e&2){let t=p(3);l(6),s("ngForOf",t.recomendedPosts)}}function Ne(e,o){if(e&1&&(_(0),i(1,"section",23)(2,"div",7)(3,"div",8),g(4,be,4,2,"ng-container",24)(5,Te,12,1,"ng-container",24)(6,Me,12,1,"ng-container",24)(7,Fe,12,1,"ng-container",24),a(),g(8,Oe,7,1,"ng-container",24),a()(),d()),e&2){let t=p(2);l(4),s("ngIf",!!t.recommendedPost||t.recomendedPosts.length>0),l(),s("ngIf",t.articlePosts.length>0),l(),s("ngIf",t.newsPosts.length>0),l(),s("ngIf",t.mediaPosts.length>0),l(),s("ngIf",t.recomendedPosts.length>0)}}function Ae(e,o){e&1&&m(0,"app-empty-page",50)}function ze(e,o){if(e&1&&g(0,Ne,9,5,"ng-container",5)(1,Ae,1,0,"ng-template",null,1,b),e&2){let t=E(2),r=p();s("ngIf",r.recomendedPosts.length>0||r.articlePosts.length>0||r.mediaPosts.length>0||r.newsPosts.length>0)("ngIfElse",t)}}var pe=(()=>{let o=class o{constructor(r,n){this.router=r,this.postService=n,this.isLoading=!1,this.articlePosts=[],this.mediaPosts=[],this.newsPosts=[],this.recomendedPosts=[],this.search=""}ngOnInit(){this.getPosts()}getPosts(r={}){this.isLoading=!0,this.postService.getPosts(K({},r)).then(n=>{this.articlePosts=n.data.article_posts,this.mediaPosts=n.data.media_posts,this.newsPosts=n.data.news_posts,this.recomendedPosts=n.data.recommended_posts,this.recommendedPost=n.data.recommended_posts[0],this.recomendedPosts.shift()}).catch(n=>{console.log(n.response.data.message)}).finally(()=>{this.isLoading=!1})}searchPosts(){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.getPosts({title:this.search})},500)}viewPost(r,n){let c=r.toLowerCase();this.router.navigateByUrl(`/postingan/${c}/${n}`)}};o.\u0275fac=function(n){return new(n||o)(P(V),P(F))},o.\u0275cmp=T({type:o,selectors:[["app-posts"]],decls:7,vars:2,consts:[["notLoading",""],["emptyPosts",""],["id","article-banner",1,"h-[200px]","w-full","mb-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","text-slate-50"],[4,"ngIf","ngIfElse"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"flex","gap-6","flex-col","sm:flex-row"],[1,"flex-1"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6","mb-6"],[1,"sm:col-span-full"],[1,"relative","cursor-pointer"],[1,"block","animate-pulse","rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-neutral-300"],[1,"pt-2"],[1,"animate-pulse","h-5","w-full","bg-neutral-300","block","mb-2"],[1,"animate-pulse","h-5","w-[140px]","bg-neutral-300","block"],[4,"ngFor","ngForOf"],[1,"w-full","sm:w-[256px]","relative"],[1,"sticky","top-10","w-full"],[1,"flex","flex-col","gap-4","w-full"],[1,"col"],[1,"w-full","flex","gap-2"],[1,"animate-pulse","w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-neutral-300"],["id","article-content",1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[4,"ngIf"],[1,"relative","cursor-pointer",3,"click"],[1,"relative","rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],["loading","lazy",1,"w-full","h-full","object-cover",3,"src","alt"],[1,"absolute","block","inset-0","bg-gradient-to-t","from-black/90","to-black/30"],[1,"absolute","bottom-0","left-0","py-6","px-5"],[1,"text-lg","sm:text-3xl","mr-2","font-bold","text-white","capitalize"],[1,"absolute","top-0","left-0","ml-5","mt-5","px-2","py-1","text-sm","bg-white","rounded-sm"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"p-1","pt-2"],[1,"text-sm","font-bold","text-slate-900","capitalize","line-clamp-2"],["id","article-post",1,"mb-6"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-base","sm:text-2xl","font-bold"],["routerLink","/postingan/artikel",1,"text-sm","text-slate-600","inline-flex","items-center","gap-2"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"size-5"],["fill-rule","evenodd","d","M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule","evenodd"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[1,"w-full","h-full","object-cover",3,"src","alt"],["id","news-post",1,"mb-6"],["routerLink","/postingan/berita",1,"text-sm","text-slate-600","inline-flex","items-center","gap-2"],["id","media-post"],["routerLink","/postingan/media",1,"text-sm","text-slate-600","inline-flex","items-center","gap-2"],[1,"text-lg","font-bold","mb-4","sm:mb-6","h-10","w-full"],[1,"cursor-pointer","w-full","flex","gap-2",3,"click"],[1,"w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],["module","postingan"]],template:function(n,c){if(n&1&&(i(0,"section",2)(1,"div",3)(2,"h1",4),f(3,"Postingan"),a()()(),g(4,Se,16,4,"ng-container",5)(5,ze,3,2,"ng-template",null,0,b)),n&2){let I=E(6);l(4),s("ngIf",c.isLoading)("ngIfElse",I)}},dependencies:[k,M,N,re],styles:["#article-banner[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#000000e6,#0000004d),url(/placeholders/hero.jpg);background-position:right;background-size:cover}"]});let e=o;return e})();var $e=()=>[1,2,3,4,5,6],je=()=>[1,2,3,4,5],Re=()=>({standalone:!0});function Ue(e,o){e&1&&(_(0),i(1,"div",13)(2,"div",14),m(3,"span",15),i(4,"div",16),m(5,"span",17)(6,"span",18),a()()(),d())}function Be(e,o){e&1&&(_(0),i(1,"div",19),m(2,"span",20),i(3,"div",8),m(4,"span",17)(5,"span",18),a()(),d())}function He(e,o){e&1&&(_(0),i(1,"section",6)(2,"div",7)(3,"div",8)(4,"div",9),g(5,Ue,7,0,"ng-container",10),a()(),i(6,"div",11)(7,"aside",12),g(8,Be,6,0,"ng-container",10),a()()()(),d()),e&2&&(l(5),s("ngForOf",y(2,$e)),l(3),s("ngForOf",y(3,je)))}function De(e,o){if(e&1){let t=v();_(0),i(1,"div",13)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(3);return x(c.viewPost(n.slug))}),i(3,"div",26),m(4,"img",27),a(),i(5,"div",28)(6,"h2",29),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function We(e,o){if(e&1){let t=v();_(0),i(1,"article",32),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.slug))}),i(2,"div",33),m(3,"img",27),a(),i(4,"div",8)(5,"h2",29),f(6),a()()(),d()}if(e&2){let t=o.$implicit;l(3),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Ge(e,o){if(e&1&&(_(0),i(1,"div",11)(2,"aside",12)(3,"h3",30),f(4,"Recommendation Post"),a(),i(5,"div",31),g(6,We,7,3,"ng-container",10),a()()(),d()),e&2){let t=p(3);l(6),s("ngForOf",t.recomendedPosts)}}function Ye(e,o){if(e&1){let t=v();_(0),i(1,"div",7)(2,"div",8)(3,"div",21)(4,"input",22),h("input",function(){u(t);let n=p(2);return x(n.searchPosts())}),j("ngModelChange",function(n){u(t);let c=p(2);return $(c.search,n)||(c.search=n),x(n)}),a()(),i(5,"div",9),g(6,De,8,3,"ng-container",10),a(),i(7,"app-pagination",23),h("pageChange",function(n){u(t);let c=p(2);return x(c.onPageChange(n))}),a()(),g(8,Ge,7,1,"ng-container",24),a(),d()}if(e&2){let t=p(2);l(4),z("ngModel",t.search),s("ngModelOptions",y(6,Re)),l(2),s("ngForOf",t.posts),l(),s("currentPage",t.currentPage)("totalPages",t.totalPage),l(),s("ngIf",t.recomendedPosts.length>0)}}function qe(e,o){e&1&&m(0,"app-empty-page",34)}function Je(e,o){if(e&1&&(i(0,"section",6),g(1,Ye,9,7,"ng-container",5)(2,qe,1,0,"ng-template",null,1,b),a()),e&2){let t=E(3),r=p();l(),s("ngIf",r.posts.length>0)("ngIfElse",t)}}var ge=(()=>{let o=class o{constructor(r,n){this.router=r,this.postService=n,this.isLoading=!1,this.currentPage=1,this.totalPage=1,this.posts=[],this.recomendedPosts=[],this.search=""}ngOnInit(){this.getPosts()}getPosts(r={}){this.isLoading=!0,this.postService.getArticles(r).then(n=>{this.posts=n.data.posts.data,this.currentPage=n.data.posts.current_page,this.totalPage=n.data.posts.last_page,this.recomendedPosts=n.data.recommended_posts}).catch(n=>{console.log(n.response.data.message)}).finally(()=>{this.isLoading=!1})}onPageChange(r){this.getPosts({page:r})}searchPosts(){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.getPosts({title:this.search})},500)}viewPost(r){this.router.navigateByUrl(`/postingan/artikel/${r}`)}};o.\u0275fac=function(n){return new(n||o)(P(V),P(F))},o.\u0275cmp=T({type:o,selectors:[["app-article"]],decls:7,vars:2,consts:[["displayPost",""],["emptyPost",""],["id","article-banner",1,"h-[200px]","w-full","mb-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","mb-4","text-slate-50"],[4,"ngIf","ngIfElse"],["id","article-content",1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"flex","gap-6","flex-col","sm:flex-row"],[1,"flex-1"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"w-full","sm:w-[256px]","relative"],[1,"sticky","top-10","w-full"],[1,"col"],[1,"relative","cursor-pointer"],[1,"block","animate-pulse","rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"pt-2"],[1,"animate-pulse","h-5","w-full","bg-slate-200","block","mb-2"],[1,"animate-pulse","h-5","w-[140px]","bg-slate-200","block"],[1,"w-full","flex","gap-2"],[1,"animate-pulse","w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],[1,"relative","mb-6"],["type","text","placeholder","Cari Artikel",1,"w-full","px-3","h-[40px]","placeholder:text-sm","text-sm","focus-within:outline-none","border-slate-200","border","text-slate-900","rounded",3,"input","ngModelChange","ngModel","ngModelOptions"],[3,"pageChange","currentPage","totalPages"],[4,"ngIf"],[1,"relative","cursor-pointer",3,"click"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"p-1","pt-2"],[1,"text-sm","font-bold","text-slate-900","capitalize","line-clamp-2"],[1,"text-lg","sm:text-end","font-bold","mb-4","sm:mb-6","h-10","w-full"],[1,"flex","flex-col","gap-4","w-full"],[1,"cursor-pointer","w-full","flex","gap-2",3,"click"],[1,"w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],["module","Artikel"]],template:function(n,c){if(n&1&&(i(0,"section",2)(1,"div",3)(2,"h1",4),f(3,"Artikel"),a()()(),g(4,He,9,4,"ng-container",5)(5,Je,4,2,"ng-template",null,0,b)),n&2){let I=E(6);l(4),s("ngIf",c.isLoading)("ngIfElse",I)}},dependencies:[k,M,B,H,D,W,N],styles:["#article-banner[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#000000e6,#0000004d),url(https://source.unsplash.com/2000x1000)}"]});let e=o;return e})();var Ze=()=>[1,2,3,4,5,6],Ke=()=>[1,2,3,4,5],Qe=()=>({standalone:!0});function Xe(e,o){e&1&&(_(0),i(1,"div",13)(2,"div",14),m(3,"span",15),i(4,"div",16),m(5,"span",17)(6,"span",18),a()()(),d())}function et(e,o){e&1&&(_(0),i(1,"div",19),m(2,"span",20),i(3,"div",8),m(4,"span",17)(5,"span",18),a()(),d())}function tt(e,o){e&1&&(_(0),i(1,"section",6)(2,"div",7)(3,"div",8)(4,"div",9),g(5,Xe,7,0,"ng-container",10),a()(),i(6,"div",11)(7,"aside",12),g(8,et,6,0,"ng-container",10),a()()()(),d()),e&2&&(l(5),s("ngForOf",y(2,Ze)),l(3),s("ngForOf",y(3,Ke)))}function nt(e,o){if(e&1){let t=v();_(0),i(1,"div",13)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(3);return x(c.viewPost(n.slug))}),i(3,"div",26),m(4,"img",27),a(),i(5,"div",28)(6,"h2",29),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function it(e,o){if(e&1){let t=v();_(0),i(1,"article",32),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.slug))}),i(2,"div",33),m(3,"img",27),a(),i(4,"div",8)(5,"h2",29),f(6),a()()(),d()}if(e&2){let t=o.$implicit;l(3),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function ot(e,o){if(e&1&&(_(0),i(1,"div",11)(2,"aside",12)(3,"h3",30),f(4,"Recommendation Post"),a(),i(5,"div",31),g(6,it,7,3,"ng-container",10),a()()(),d()),e&2){let t=p(3);l(6),s("ngForOf",t.recomendedPosts)}}function at(e,o){if(e&1){let t=v();_(0),i(1,"div",7)(2,"div",8)(3,"div",21)(4,"input",22),h("input",function(){u(t);let n=p(2);return x(n.searchPosts())}),j("ngModelChange",function(n){u(t);let c=p(2);return $(c.search,n)||(c.search=n),x(n)}),a()(),i(5,"div",9),g(6,nt,8,3,"ng-container",10),a(),i(7,"app-pagination",23),h("pageChange",function(n){u(t);let c=p(2);return x(c.onPageChange(n))}),a()(),g(8,ot,7,1,"ng-container",24),a(),d()}if(e&2){let t=p(2);l(4),z("ngModel",t.search),s("ngModelOptions",y(6,Qe)),l(2),s("ngForOf",t.posts),l(),s("currentPage",t.currentPage)("totalPages",t.totalPage),l(),s("ngIf",t.recomendedPosts.length>0)}}function rt(e,o){e&1&&m(0,"app-empty-page",34)}function lt(e,o){if(e&1&&(i(0,"section",6),g(1,at,9,7,"ng-container",5)(2,rt,1,0,"ng-template",null,1,b),a()),e&2){let t=E(3),r=p();l(),s("ngIf",r.posts.length>0)("ngIfElse",t)}}var fe=(()=>{let o=class o{constructor(r,n){this.router=r,this.postService=n,this.isLoading=!1,this.currentPage=1,this.totalPage=1,this.posts=[],this.recomendedPosts=[],this.search=""}ngOnInit(){this.getPosts()}getPosts(r={}){this.isLoading=!0,this.postService.getMedia(r).then(n=>{this.posts=n.data.posts.data,this.currentPage=n.data.posts.current_page,this.totalPage=n.data.posts.last_page,this.recomendedPosts=n.data.recommended_posts}).catch(n=>{console.log(n.response.data.message)}).finally(()=>{this.isLoading=!1})}onPageChange(r){this.getPosts({page:r})}searchPosts(){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.getPosts({title:this.search})},500)}viewPost(r){this.router.navigateByUrl(`/postingan/artikel/${r}`)}};o.\u0275fac=function(n){return new(n||o)(P(V),P(F))},o.\u0275cmp=T({type:o,selectors:[["app-media"]],decls:7,vars:2,consts:[["displayPost",""],["emptyPost",""],["id","article-banner",1,"h-[200px]","w-full","mb-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","mb-4","text-slate-50"],[4,"ngIf","ngIfElse"],["id","article-content",1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"flex","gap-6","flex-col","sm:flex-row"],[1,"flex-1"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"w-full","sm:w-[256px]","relative"],[1,"sticky","top-10","w-full"],[1,"col"],[1,"relative","cursor-pointer"],[1,"block","animate-pulse","rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"pt-2"],[1,"animate-pulse","h-5","w-full","bg-slate-200","block","mb-2"],[1,"animate-pulse","h-5","w-[140px]","bg-slate-200","block"],[1,"w-full","flex","gap-2"],[1,"animate-pulse","w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],[1,"relative","mb-6"],["type","text","placeholder","Cari Artikel",1,"w-full","px-3","h-[40px]","placeholder:text-sm","text-sm","focus-within:outline-none","border-slate-200","border","text-slate-900","rounded",3,"input","ngModelChange","ngModel","ngModelOptions"],[3,"pageChange","currentPage","totalPages"],[4,"ngIf"],[1,"relative","cursor-pointer",3,"click"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"p-1","pt-2"],[1,"text-sm","font-bold","text-slate-900","capitalize","line-clamp-2"],[1,"text-lg","sm:text-end","font-bold","mb-4","sm:mb-6","h-10","w-full"],[1,"flex","flex-col","gap-4","w-full"],[1,"cursor-pointer","w-full","flex","gap-2",3,"click"],[1,"w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],["module","Artikel"]],template:function(n,c){if(n&1&&(i(0,"section",2)(1,"div",3)(2,"h1",4),f(3,"Media"),a()()(),g(4,tt,9,4,"ng-container",5)(5,lt,4,2,"ng-template",null,0,b)),n&2){let I=E(6);l(4),s("ngIf",c.isLoading)("ngIfElse",I)}},dependencies:[k,M,B,H,D,W,N],styles:["#article-banner[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#000000e6,#0000004d),url(https://source.unsplash.com/2000x1000)}"]});let e=o;return e})();var st=()=>[1,2,3,4,5];function ct(e,o){if(e&1&&(_(0),i(1,"section",10)(2,"div",11)(3,"h1",12),f(4),a()()(),d()),e&2){let t=p();l(),ne("background-image","linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .3)), url("+t.post.signed_image_url+")"),l(3),C(t.post.title)}}function mt(e,o){if(e&1&&(_(0),m(1,"div",13),i(2,"div",14)(3,"h3",15),f(4,"Bagikan Postingan"),a(),i(5,"div",16)(6,"a",17),L(),i(7,"svg",18),m(8,"path",19),a()(),O(),i(9,"a",20),L(),i(10,"svg",21)(11,"defs")(12,"linearGradient",22),m(13,"stop",23)(14,"stop",24),a()(),m(15,"path",25)(16,"path",26),a()(),O(),i(17,"a",27),L(),i(18,"svg",28)(19,"g",29)(20,"g",30),m(21,"path",31),a(),i(22,"defs")(23,"clipPath",32),m(24,"path",33),a()()()()(),O(),i(25,"a",34),L(),i(26,"svg",35)(27,"defs")(28,"linearGradient",36),m(29,"stop",37)(30,"stop",38),a(),i(31,"linearGradient",39),m(32,"stop",40)(33,"stop",41),a()(),m(34,"path",42)(35,"path",43)(36,"path",44),a()()()(),d()),e&2){let t=p();l(),s("innerHTML",t.getSafeContent(),te)}}function pt(e,o){e&1&&(_(0),i(1,"div",46),m(2,"span",47),i(3,"div",4),m(4,"span",48)(5,"span",49),a()(),d())}function _t(e,o){e&1&&(_(0),g(1,pt,6,0,"ng-container",45),d()),e&2&&(l(),s("ngForOf",y(1,st)))}function dt(e,o){if(e&1){let t=v();_(0),i(1,"article",50),h("click",function(){let n=u(t).$implicit,c=p(2);return x(c.viewPost(n.slug))}),i(2,"div",51),m(3,"img",52),a(),i(4,"div",4)(5,"h2",53),f(6),a()()(),d()}if(e&2){let t=o.$implicit;l(3),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function gt(e,o){if(e&1&&g(0,dt,7,3,"ng-container",45),e&2){let t=p();s("ngForOf",t.recomendedPosts)}}var ue=(()=>{let o=class o{constructor(r,n,c,I){this.activatedRoute=r,this.postService=n,this.saniziter=c,this.router=I,this.isLoading=!1,this.recomendedPosts=[],this.activeSlug=this.activatedRoute.snapshot.params.slug}ngOnInit(){this.getPost()}getPost(){this.isLoading=!0,this.postService.getPost(this.activeSlug).then(r=>{this.post=r.data.post,this.recomendedPosts=r.data.recommended_post}).catch(r=>{console.log(r)}).finally(()=>{this.isLoading=!1})}viewPost(r){this.router.navigateByUrl(`/postingan/artikel/${r}`)}getSafeContent(){return this.saniziter.bypassSecurityTrustHtml(this.post.content)}};o.\u0275fac=function(n){return new(n||o)(P(ae),P(F),P(oe),P(V))},o.\u0275cmp=T({type:o,selectors:[["app-view"]],decls:13,vars:4,consts:[["showRecommendationPosts",""],[4,"ngIf"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"flex","gap-6","flex-col","sm:flex-row"],[1,"flex-1"],[1,"w-full","sm:w-[256px]","relative"],[1,"sticky","top-10","w-full"],[1,"text-lg","sm:text-end","font-bold","mb-4","sm:mb-6","h-10","w-full"],[1,"flex","flex-col","gap-4","w-full"],[4,"ngIf","ngIfElse"],["id","article-banner",1,"min-h-[200px]","w-full","mb-10","h-[200px]"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","flex","items-center","h-full"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","text-slate-50"],[1,"post-content",3,"innerHTML"],[1,"mt-5"],[1,"font-semibold","uppercase","mb-2"],[1,"flex","gap-2","items-center"],["target","_blank","href","https://www.facebook.com/sharer/sharer.php?u="],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["fill","#4267B2","d","M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"],["target","_blank","href","https://t.me/share/url?url="],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 256 256"],["id","logosTelegram0","x1","50%","x2","50%","y1","0%","y2","100%"],["offset","0%","stop-color","#2aabee"],["offset","100%","stop-color","#229ed9"],["fill","url(#logosTelegram0)","d","M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"],["fill","#fff","d","M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"],["target","_blank","href","https://twitter.com/intent/tweet"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 14 14"],["fill","none"],["clip-path","url(#primeTwitter0)"],["fill","#000","d","M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"],["id","primeTwitter0"],["fill","#fff","d","M0 0h14v14H0z"],["target","_blank","href","https://api.whatsapp.com/send/?text=ANJAYY"],["xmlns","http://www.w3.org/2000/svg","width","21.73","height","22","viewBox","0 0 256 258"],["id","logosWhatsappIcon0","x1","50%","x2","50%","y1","100%","y2","0%"],["offset","0%","stop-color","#1faf38"],["offset","100%","stop-color","#60d669"],["id","logosWhatsappIcon1","x1","50%","x2","50%","y1","100%","y2","0%"],["offset","0%","stop-color","#f9f9f9"],["offset","100%","stop-color","#fff"],["fill","url(#logosWhatsappIcon0)","d","M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"],["fill","url(#logosWhatsappIcon1)","d","M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"],["fill","#fff","d","M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"],[4,"ngFor","ngForOf"],[1,"w-full","flex","gap-2"],[1,"animate-pulse","w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],[1,"animate-pulse","h-5","w-full","bg-slate-200","block","mb-2"],[1,"animate-pulse","h-5","w-[140px]","bg-slate-200","block"],[1,"cursor-pointer","w-full","flex","gap-2",3,"click"],[1,"w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"text-sm","font-bold","text-slate-900","capitalize","line-clamp-2"]],template:function(n,c){if(n&1&&(g(0,ct,5,3,"ng-container",1),i(1,"section",2)(2,"div",3)(3,"div",4),g(4,mt,37,1,"ng-container",1),a(),i(5,"div",5)(6,"aside",6)(7,"h3",7),f(8,"Rekomendasi"),a(),i(9,"div",8),g(10,_t,2,2,"ng-container",9)(11,gt,1,1,"ng-template",null,0,b),a()()()()()),n&2){let I=E(12);s("ngIf",!c.isLoading),l(4),s("ngIf",!c.isLoading),l(6),s("ngIf",c.isLoading)("ngIfElse",I)}},dependencies:[k,M],styles:['.post-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"!important}']});let e=o;return e})();var ft=()=>[1,2,3,4,5,6],ut=()=>[1,2,3,4,5],xt=()=>({standalone:!0});function ht(e,o){e&1&&(_(0),i(1,"div",13)(2,"div",14),m(3,"span",15),i(4,"div",16),m(5,"span",17)(6,"span",18),a()()(),d())}function vt(e,o){e&1&&(_(0),i(1,"div",19),m(2,"span",20),i(3,"div",8),m(4,"span",17)(5,"span",18),a()(),d())}function Ct(e,o){e&1&&(_(0),i(1,"section",6)(2,"div",7)(3,"div",8)(4,"div",9),g(5,ht,7,0,"ng-container",10),a()(),i(6,"div",11)(7,"aside",12),g(8,vt,6,0,"ng-container",10),a()()()(),d()),e&2&&(l(5),s("ngForOf",y(2,ft)),l(3),s("ngForOf",y(3,ut)))}function wt(e,o){if(e&1){let t=v();_(0),i(1,"div",13)(2,"article",25),h("click",function(){let n=u(t).$implicit,c=p(3);return x(c.viewPost(n.slug))}),i(3,"div",26),m(4,"img",27),a(),i(5,"div",28)(6,"h2",29),f(7),a()()()(),d()}if(e&2){let t=o.$implicit;l(4),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function St(e,o){if(e&1){let t=v();_(0),i(1,"article",32),h("click",function(){let n=u(t).$implicit,c=p(4);return x(c.viewPost(n.slug))}),i(2,"div",33),m(3,"img",27),a(),i(4,"div",8)(5,"h2",29),f(6),a()()(),d()}if(e&2){let t=o.$implicit;l(3),S("src",t.signed_image_url,w),s("alt",t.title+" Image"),l(3),C(t.title)}}function Pt(e,o){if(e&1&&(_(0),i(1,"div",11)(2,"aside",12)(3,"h3",30),f(4,"Recommendation Post"),a(),i(5,"div",31),g(6,St,7,3,"ng-container",10),a()()(),d()),e&2){let t=p(3);l(6),s("ngForOf",t.recomendedPosts)}}function yt(e,o){if(e&1){let t=v();_(0),i(1,"div",7)(2,"div",8)(3,"div",21)(4,"input",22),h("input",function(){u(t);let n=p(2);return x(n.searchPosts())}),j("ngModelChange",function(n){u(t);let c=p(2);return $(c.search,n)||(c.search=n),x(n)}),a()(),i(5,"div",9),g(6,wt,8,3,"ng-container",10),a(),i(7,"app-pagination",23),h("pageChange",function(n){u(t);let c=p(2);return x(c.onPageChange(n))}),a()(),g(8,Pt,7,1,"ng-container",24),a(),d()}if(e&2){let t=p(2);l(4),z("ngModel",t.search),s("ngModelOptions",y(6,xt)),l(2),s("ngForOf",t.posts),l(),s("currentPage",t.currentPage)("totalPages",t.totalPage),l(),s("ngIf",t.recomendedPosts.length>0)}}function Et(e,o){e&1&&m(0,"app-empty-page",34)}function bt(e,o){if(e&1&&(i(0,"section",6),g(1,yt,9,7,"ng-container",5)(2,Et,1,0,"ng-template",null,1,b),a()),e&2){let t=E(3),r=p();l(),s("ngIf",r.posts.length>0)("ngIfElse",t)}}var xe=(()=>{let o=class o{constructor(r,n){this.router=r,this.postService=n,this.isLoading=!1,this.currentPage=1,this.totalPage=1,this.posts=[],this.recomendedPosts=[],this.search=""}ngOnInit(){this.getPosts()}getPosts(r={}){this.isLoading=!0,this.postService.getNews(r).then(n=>{this.posts=n.data.posts.data,this.currentPage=n.data.posts.current_page,this.totalPage=n.data.posts.last_page,this.recomendedPosts=n.data.recommended_posts}).catch(n=>{console.log(n.response.data.message)}).finally(()=>{this.isLoading=!1})}onPageChange(r){this.getPosts({page:r})}searchPosts(){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.getPosts({title:this.search})},500)}viewPost(r){this.router.navigateByUrl(`/postingan/artikel/${r}`)}};o.\u0275fac=function(n){return new(n||o)(P(V),P(F))},o.\u0275cmp=T({type:o,selectors:[["app-news"]],decls:7,vars:2,consts:[["displayPost",""],["emptyPost",""],["id","article-banner",1,"h-[200px]","w-full","mb-10"],[1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto","h-full","flex","items-center"],[1,"uppercase","text-3xl","md:text-5xl","leading-8","font-bold","tracking-tight","mb-4","text-slate-50"],[4,"ngIf","ngIfElse"],["id","article-content",1,"relative","max-w-5xl","px-4","lg:px-0","mx-auto"],[1,"flex","gap-6","flex-col","sm:flex-row"],[1,"flex-1"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-6"],[4,"ngFor","ngForOf"],[1,"w-full","sm:w-[256px]","relative"],[1,"sticky","top-10","w-full"],[1,"col"],[1,"relative","cursor-pointer"],[1,"block","animate-pulse","rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"pt-2"],[1,"animate-pulse","h-5","w-full","bg-slate-200","block","mb-2"],[1,"animate-pulse","h-5","w-[140px]","bg-slate-200","block"],[1,"w-full","flex","gap-2"],[1,"animate-pulse","w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],[1,"relative","mb-6"],["type","text","placeholder","Cari Artikel",1,"w-full","px-3","h-[40px]","placeholder:text-sm","text-sm","focus-within:outline-none","border-slate-200","border","text-slate-900","rounded",3,"input","ngModelChange","ngModel","ngModelOptions"],[3,"pageChange","currentPage","totalPages"],[4,"ngIf"],[1,"relative","cursor-pointer",3,"click"],[1,"rounded-t","overflow-hidden","pointer-events-none","aspect-video","bg-slate-200"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"p-1","pt-2"],[1,"text-sm","font-bold","text-slate-900","capitalize","line-clamp-2"],[1,"text-lg","sm:text-end","font-bold","mb-4","sm:mb-6","h-10","w-full"],[1,"flex","flex-col","gap-4","w-full"],[1,"cursor-pointer","w-full","flex","gap-2",3,"click"],[1,"w-[64px]","h-[64px]","rounded-t","overflow-hidden","pointer-events-none","bg-slate-200"],["module","Artikel"]],template:function(n,c){if(n&1&&(i(0,"section",2)(1,"div",3)(2,"h1",4),f(3,"Berita"),a()()(),g(4,Ct,9,4,"ng-container",5)(5,bt,4,2,"ng-template",null,0,b)),n&2){let I=E(6);l(4),s("ngIf",c.isLoading)("ngIfElse",I)}},dependencies:[k,M,B,H,D,W,N],styles:["#article-banner[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#000000e6,#0000004d),url(https://source.unsplash.com/2000x1000)}"]});let e=o;return e})();var It=[{path:"",component:pe},{path:"artikel",component:ge},{path:"media",component:fe},{path:"berita",component:xe},{path:":type/:slug",component:ue}],qt=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=ee({type:o}),o.\u0275inj=X({imports:[ie,ce,me,se,le.forChild(It)]});let e=o;return e})();export{qt as PostsModule};