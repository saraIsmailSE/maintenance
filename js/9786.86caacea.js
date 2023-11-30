"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[9786],{89809:function(e,t,a){var s=a(24150),r=a(49579),o=a(66252);class i{async login({username:e,password:t}){try{const a=s.hi.post("/auth/signin",{username:e,password:t});return a.data.accessToken&&r.Z.setUser(a.date),a.data}catch(a){console.log(a)}}logout(){r.Z.removeUser()}async register(e,t,a,r,o,i){return await s.hi.post("/register",{name:e,gender:t,email:a,phone:r,password:o,user_type:i})}async sendEmail(){let e=null;const t=await s.hi.post("email/verification-notification").catch((e=>{e=e.response.data.message}));return{data:t.data,error:e}}async resetEmail(e){try{const t=await s.hi.post("email/reset",{email:e});return t.data.data}catch(t){return t.response}}async resetPassword(e,t,a){let r=new FormData;r.append("password",e),r.append("email",t),r.append("token",a);try{const e=await s.hi.post("password/reset",r);return e.data}catch(o){return o.response}}async forgetPassword(e){try{const t=await s.hi.post("password/forgot-password",{email:e});return t.data}catch(t){return t.response}}async sessionData(){try{const e=await s.hi.get("session-data");return e.data.data}catch(e){(0,o.S3)(e)}}async refreshToken(){try{const e=await s.hi.post("/refresh");return e.data.data}catch(e){(0,o.S3)(e)}}async returnToTeam(){try{const e=await s.hi.get("/return-to-team");return e.data.data}catch(e){(0,o.S3)(e)}}}t.Z=new i},89786:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});a(76265);var s=a(66252),r=a(49963),o=a(3577),i=a(15584),n=a(79885);const l={class:"col-sm-12 mt-3 text-center"},c=(0,s._)("div",{class:"iq-card-header-toolbar d-flex align-items-center mx-auto"},[(0,s._)("h4",{class:"text-center mt-3 mb-3"}," اعادة تعيين البريد الالكتروني ")],-1),m={class:"iq-card-body p-0"},d=(0,s._)("div",{class:"image-block text-center"},[(0,s._)("img",{src:i,class:"img-fluid rounded w-25",alt:"blog-img"})],-1),u={class:"form-group"},p=(0,s._)("label",{class:"form-label",for:"email"},"ادخل بريدك الالكتروني الجديد",-1),h={key:0,class:"p-2 text-center",style:{color:"red"}},g={key:0,class:"col-sm-12 text-center"},f=(0,s._)("img",{src:n,alt:"loader",style:{height:"100px"}},null,-1),w=[f],y={key:1,class:"text-center mt-3 mb-3"},b=(0,s._)("div",{class:"d-inline-block w-100 text-center"},[(0,s._)("button",{type:"submit",class:"btn d-block btn-primary mt-3 mb-3 w-75 mx-auto"}," تعيين ")],-1),v=(0,s._)("i",{class:"material-symbols-outlined"},"logout",-1),k=(0,s._)("span",{class:"mobile-text d-lg-none ms-3"},"تسجيل خروج",-1),_=[v,k];function x(e,t,a,i,n,f){const v=(0,s.up)("iq-card");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(v,{class:"iq-card"},{default:(0,s.w5)((()=>[c,(0,s._)("div",m,[d,(0,s._)("form",{class:"mt-4",onSubmit:t[1]||(t[1]=(0,r.iM)(((...e)=>f.resetEmail&&f.resetEmail(...e)),["prevent"]))},[(0,s._)("div",u,[p,(0,s.wy)((0,s._)("input",{type:"email",class:"form-control mb-0 w-75 mx-auto",id:"email",placeholder:"  ادخل بريدك الالكتروني ","onUpdate:modelValue":t[0]||(t[0]=e=>i.v$.form.email.$model=e)},null,512),[[r.nr,i.v$.form.email.$model]]),i.v$.form.email.$error?((0,s.wg)(),(0,s.iD)("p",h,"قم بادخال بريدك الالكتروني")):(0,s.kq)("",!0)]),n.loader?((0,s.wg)(),(0,s.iD)("div",g,w)):(0,s.kq)("",!0),n.message?((0,s.wg)(),(0,s.iD)("h4",y,(0,o.zw)(n.message),1)):(0,s.kq)("",!0),b],32)]),(0,s._)("a",{href:"javascript:void(0);",class:"d-flex align-items-center m-3",onClick:t[2]||(t[2]=(...e)=>f.logout&&f.logout(...e))},_)])),_:1})])}a(70560);var $=a(5705),q=a(10760),D=a(89809),E={name:"resetEmail",setup(){return{v$:(0,$.ZP)()}},components:{},data(){return{loader:!1,message:"",form:{email:""},error:"",submitStatus:null}},methods:{async resetEmail(){if(this.v$.$touch(),!this.v$.form.$invalid){this.message="",this.loader=!0;const e=await D.Z.resetEmail(this.form.email);console.log(e),"Reset Successfully!"==e?(this.message=" تم التعيين - تفقد بريدك الالكتروني وقم بتسجيل الدخول مرة أخرى",setTimeout(this.logout,1e4)):this.message=" حدث خطأ",this.loader=!1}},logout(){this.$store.dispatch("logout"),this.$router.push({name:"osboha"})}},validations(){return{form:{email:{required:q.C1,email:q.Do}}}}},S=a(83744);const Z=(0,S.Z)(E,[["render",x]]);var T=Z},15584:function(e,t,a){e.exports=a.p+"img/no-friend-req.36ea3495.png"}}]);
//# sourceMappingURL=9786.86caacea.js.map