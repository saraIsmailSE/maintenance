"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[8483],{79113:function(e,r,s){var a=s(24150);class t{constructor(){this.prefix="roles"}async assignRole(e){try{const r=await a.hi.post(`${this.prefix}/assign-role`,e);return r.data.data}catch(r){return r.response}}async ChangeAdvisingTeam(e){try{const r=await a.hi.post(`${this.prefix}/change-advising-team`,e);return r.data.data}catch(r){return r.response}}async supervisorsSwap(e){try{const r=await a.hi.post(`${this.prefix}/supervisors-swap`,e);return r.data.data}catch(r){return r.response}}async newSupervisor_currentToAmbassador(e){try{const r=await a.hi.post(`${this.prefix}/new-supervisor-current-to-ambassador`,e);return r.data.data}catch(r){return r.response}}async newSupervisor_currentToLeader(e){try{const r=await a.hi.post(`${this.prefix}/new-supervisor-current-to-leader`,e);return r.data.data}catch(r){return r.response}}async newLeader_currentToAmbassador(e){try{const r=await a.hi.post(`${this.prefix}/new-leader-current-to-ambassador`,e);return r.data.data}catch(r){return r.response}}async transferLeader(e){try{const r=await a.hi.post(`${this.prefix}/transfer-leader`,e);return r.data.data}catch(r){return r.response}}async transferAmbassador(e){try{const r=await a.hi.post(`${this.prefix}/transfer-ambassador`,e);return r.data.data}catch(r){return r.response}}}r.Z=new t},18483:function(e,r,s){s.r(r),s.d(r,{default:function(){return U}});var a=s(66252),t=s(49963),o=s(3577),i=s(87041),n=s(79885);const l={class:"col-sm-12 mt-3"},d=(0,a._)("div",{class:"iq-card-header-toolbar text-center align-items-center mx-auto"},[(0,a._)("h1",{class:"text-center mt-3"},"نقل قائد"),(0,a._)("h4",{class:"text-center mt-1 mb-3"},"إلى مراقب جديد")],-1),c=(0,a._)("div",{class:"iq-card-body p-4"},[(0,a._)("div",{class:"image-block text-center"},[(0,a._)("img",{src:i,class:"img-fluid rounded w-75",alt:"blog-img"})])],-1),m={class:"col-12 bg-white pt-2"},u={class:"sign-in-from"},p={class:"form-group"},v=(0,a._)("label",{for:"leader"},"البريد الالكتروني للقائد",-1),h={key:0,style:{color:"red"}},f={key:1,style:{color:"red"}},w={class:"form-group"},y=(0,a._)("label",{for:"newSupervisor"},"المراقب الجديد",-1),g={key:0,style:{color:"red"}},$={key:1,style:{color:"red"}},b={key:0,class:"form-group text-center"},_={style:{color:"red"}},k={key:1,class:"col-sm-12 text-center"},x=(0,a._)("p",{class:"text-center"},"جاري النقل",-1),S=(0,a._)("img",{src:n,alt:"loader",style:{height:"100px"}},null,-1),q=[x,S],D={key:2,class:"d-inline-block w-100"},T=["disabled"];function C(e,r,s,i,n,x){const S=(0,a.up)("iq-card");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(S,{class:"iq-card"},{default:(0,a.w5)((()=>[d,c,(0,a._)("div",m,[(0,a._)("div",u,[(0,a._)("form",{class:"mt-2",onSubmit:r[2]||(r[2]=(0,t.iM)((e=>x.onSubmit()),["prevent"]))},[(0,a._)("div",p,[v,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>i.v$.form.leader.$model=e),type:"email",class:"form-control mb-0",id:"leader",placeholder:"ادخل البريد الالكتروني للقائد"},null,512),[[t.nr,i.v$.form.leader.$model]]),i.v$.form.leader.$error?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[i.v$.form.leader.required.$invalid?((0,a.wg)(),(0,a.iD)("small",h,"البريد الالكتروني للقائد مطلوب")):(0,a.kq)("",!0),i.v$.form.leader.email.$invalid?((0,a.wg)(),(0,a.iD)("small",f,"البريد الالكتروني للقائد غير صحيح")):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0)]),(0,a._)("div",w,[y,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>i.v$.form.newSupervisor.$model=e),type:"email",class:"form-control mb-0",id:"newSupervisor",placeholder:"ادخل بريد المراقب الجديد"},null,512),[[t.nr,i.v$.form.newSupervisor.$model]]),i.v$.form.newSupervisor.$error?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[i.v$.form.newSupervisor.required.$invalid?((0,a.wg)(),(0,a.iD)("small",g,"البريد الالكتروني للمراقب الجديد مطلوب")):(0,a.kq)("",!0),i.v$.form.newSupervisor.email.$invalid?((0,a.wg)(),(0,a.iD)("small",$,"البريد الالكتروني للمراقب الجديد غير صحيح")):(0,a.kq)("",!0)],64)):(0,a.kq)("",!0)]),n.message?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("small",_,(0,o.zw)(n.message),1)])):(0,a.kq)("",!0),n.loader?((0,a.wg)(),(0,a.iD)("div",k,q)):((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("button",{type:"submit",class:"btn btn-primary float-end",disabled:n.loader}," نقل ",8,T)]))],32)])])])),_:1})])}var L=s(5705),A=s(10760),Z=s(79113),O={name:"Transfer Leader",setup(){return{v$:(0,L.ZP)()}},data(){return{loader:!1,form:{leader:"",newSupervisor:""},message:"",formOption:""}},validations(){return{form:{leader:{required:A.C1,email:A.Do},newSupervisor:{required:A.C1,email:A.Do}}}},methods:{async onSubmit(){if(this.v$.$validate(),!this.v$.$error){this.loader=!0;try{this.message="";const e=await Z.Z.transferLeader(this.form);this.message=e,this.resetForm(),setTimeout((()=>{this.message=""}),1800)}catch(e){this.message="حدث خطأ, يرجى المحاولة لاحقاً"}finally{this.loader=!1}}},resetForm(){this.v$.form.$reset(),this.form={leader:"",newSupervisor:""}}}},F=s(83744);const H=(0,F.Z)(O,[["render",C]]);var U=H},87041:function(e,r,s){e.exports=s.p+"img/supervisors-swap.676723a2.png"}}]);
//# sourceMappingURL=8483.2e77a23e.js.map