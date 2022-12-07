"use strict";(self["webpackChunkprofile"]=self["webpackChunkprofile"]||[]).push([[177],{1094:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var i=t(3396);function o(e,a,t,o,r,n){const s=(0,i.up)("MainComponent"),d=(0,i.up)("Projects");return(0,i.wg)(),(0,i.iD)("main",null,[(0,i.Wm)(s),(0,i.Wm)(d)])}const r={class:"main-component"},n=(0,i.uE)('<div class="name" data-v-5e4fa9e1><h1 data-v-5e4fa9e1>Алексеев Роман</h1><h2 data-v-5e4fa9e1>Full-stack разработчик</h2><a href="https://hh.ru/resume/b0902d38ff0b7729da0039ed1f5866536d6a6c" target="_blank" data-v-5e4fa9e1><img src="/img/technologies/hh.svg" alt="HeadHunter" data-v-5e4fa9e1></a><a href="https://github.com/RAlekseev" target="_blank" data-v-5e4fa9e1><img src="/img/technologies/github.svg" alt="GitHub" data-v-5e4fa9e1></a><a href="https://www.linkedin.com/in/ralekseevm" target="_blank" data-v-5e4fa9e1><img src="/img/technologies/linkedin.svg" alt="LinkedIn" data-v-5e4fa9e1></a><a href="https://www.facebook.com/ralekseevm" target="_blank" data-v-5e4fa9e1><img src="/img/technologies/facebook.svg" alt="FaceBook" data-v-5e4fa9e1></a><blockquote data-v-5e4fa9e1><p data-v-5e4fa9e1>«Каждый разработчик должен знать, как работает компьютер, потому что это помогает понять, как работает программное обеспечение»</p><cite data-v-5e4fa9e1>Бьёрн Страуструп</cite></blockquote></div><div class="photo" data-v-5e4fa9e1><img src="/img/avatar.webp" alt="photo" data-v-5e4fa9e1></div>',2),s=[n];function d(e,a){return(0,i.wg)(),(0,i.iD)("div",r,s)}var c=t(89);const l={},u=(0,c.Z)(l,[["render",d],["__scopeId","data-v-5e4fa9e1"]]);var h=u;const p={class:"wrapper"};function v(e,a,t,o,r,n){const s=(0,i.up)("ProjectCard"),d=(0,i.up)("Slide"),c=(0,i.up)("Navigation"),l=(0,i.up)("Pagination"),u=(0,i.up)("Carousel");return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(u,{autoplay:2e3,"items-to-show":e.itemsToShow,"wrap-around":!0},{addons:(0,i.w5)((()=>[(0,i.Wm)(c),(0,i.Wm)(l)])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projects,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.id},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{project:e},null,8,["project"])])),_:2},1024)))),128))])),_:1},8,["items-to-show"])])}var m=t(65),w=t(9242),g=t(7139);const f=e=>((0,i.dD)("data-v-6671ac99"),e=e(),(0,i.Cn)(),e),_={class:"card__image"},k=["src"],j={class:"card__content"},b={class:"card__title"},W={class:"card__description"},C=f((()=>(0,i._)("div",{class:"card__tags"},null,-1))),P=f((()=>(0,i._)("div",{class:"card__links"},null,-1)));function Z(e,a,t,o,r,n){return(0,i.wg)(),(0,i.iD)("div",{class:"card",onClick:a[0]||(a[0]=(0,w.iM)((a=>e.toProject()),["prevent"]))},[(0,i._)("div",_,[(0,i._)("img",{src:e.project.image,alt:"project image"},null,8,k)]),(0,i._)("div",j,[(0,i._)("h3",b,(0,g.zw)(e.project.id),1),(0,i._)("p",W,(0,g.zw)(e.project.description),1),C,P])])}t(7658);var D=(0,i.aZ)({name:"ProjectCard",props:{project:{type:Object,required:!0}},methods:{toProject(){this.$router.push({name:"projects_show",params:{id:this.project.id}})}}});const H=(0,c.Z)(D,[["render",Z],["__scopeId","data-v-6671ac99"]]);var S=H,z=t(1658),M=(0,i.aZ)({name:"HomeProjects",components:{ProjectCard:S,Carousel:z.lr,Slide:z.Mi,Navigation:z.W_,Pagination:z.tl},data(){return{width:0}},mounted(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)},unmounted(){window.removeEventListener("resize",this.updateWidth)},methods:{updateWidth(){this.width=window.innerWidth}},computed:{...(0,m.Se)(["projects"]),itemsToShow(){return this.width<767?2:this.width<1023?3:this.width<1350?4:5}}});const q=(0,c.Z)(M,[["render",v]]);var y=q,E=(0,i.aZ)({name:"HomePage",components:{MainComponent:h,Projects:y}});const I=(0,c.Z)(E,[["render",o]]);var L=I}}]);
//# sourceMappingURL=home.c7f1c4c0.js.map