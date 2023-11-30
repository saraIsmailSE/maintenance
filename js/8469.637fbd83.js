"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[8469],{13238:function(A,t,e){var a=e(66252),i=e(24150);class s{constructor(){this.prefix="notifications"}async listUnreadNotification(){try{const A=await i.hi.get(`${this.prefix}/un-read`);return A.data.data}catch(A){(0,a.S3)(A)}}async listAllNotification(A){try{const t=await i.hi.get(`${this.prefix}/list-all?page=${A}`);return t.data.data}catch(t){(0,a.S3)(t)}}async markAsRead(A){try{const t=await i.hi.get(`${this.prefix}/mark-as-read/${A}`);return t.data.data}catch(t){return t}}async markAllAsRead(){try{const A=await i.hi.get(`${this.prefix}/mark-all-as-read`);return A.data.data}catch(A){return A}}}t.Z=new s},38469:function(A,t,e){e.r(t),e.d(t,{default:function(){return M}});var a=e(66252),i=e(3577),s=e(49963),o="data:image/png;base64,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";const n=A=>((0,a.dD)("data-v-266538c2"),A=A(),(0,a.Cn)(),A),r={class:"row",ref:"listContainer"},d={class:"col-sm-12"},g=n((()=>(0,a._)("h4",{class:"card-title"},"الاشعارات",-1))),c={key:0,class:"col-sm-12"},B=n((()=>(0,a._)("div",{class:"iq-card-body p-0"},[(0,a._)("div",{class:"image-block text-center"},[(0,a._)("img",{src:o,class:"img-fluid rounded w-50",alt:"blog-img"})]),(0,a._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد اشعارات")],-1))),h=n((()=>(0,a._)("i",{role:"button",class:"material-symbols-outlined align-middle"}," done ",-1))),l={class:"notification-list m-0 p-0"},C={class:"d-flex align-items-center justify-content-between"},u={class:"w-100"},Q={class:"d-flex justify-content-between"},E={class:"ms-3"},f={class:"d-flex align-items-center"},m=["onClick"],w=["onClick"];function D(A,t,e,o,n,D){const Y=(0,a.up)("iq-card"),v=(0,a.up)("base-avatar"),p=(0,a.up)("tooltip");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",d,[g,0==n.notifications.length?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(Y,{class:"iq-card"},{default:(0,a.w5)((()=>[B])),_:1})])):(0,a.kq)("",!0),D.unreadCount>0?((0,a.wg)(),(0,a.iD)("span",{key:1,role:"button",class:"btn btn-primary mb-3",style:{direction:"rtl !important"},onClick:t[0]||(t[0]=A=>D.markAllAsRead())},[h,(0,a.Uk)(" تحديد قراءة الكل ")])):(0,a.kq)("",!0)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.notifications,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-sm-12",key:e},[(0,a.Wm)(Y,{class:(0,i.C_)([D.seenClass(t.read_at),t.data.type])},{body:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",C,[(0,a.Wm)(v,{profileImg:t.data.sender.user_profile.profile_picture,profile_id:t.data.sender.user_profile.id,title:t.data.sender.name,gender:t.data.sender.gender,avatarClass:"rounded-circle avatar-40"},null,8,["profileImg","profile_id","title","gender"]),(0,a._)("div",u,[(0,a._)("div",Q,[(0,a._)("div",E,[(0,a._)("h6",{style:{direction:"rtl"},class:(0,i.C_)({"text-white":D.isWhite(t)})},(0,i.zw)(t.data.message),3),(0,a.Wm)(p,{tag:"span",class:(0,i.C_)(["text-muted small",{"text-white-50":D.isWhite(t)}]),tooltipPlacement:"bottom","data-bs-toggle":"tooltip",title:A.formatFullDate(t.created_at)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(A.formatDateToWritten(t.created_at)),1)])),_:2},1032,["class","title"])]),(0,a._)("div",f,[t.data.path?((0,a.wg)(),(0,a.iD)("span",{key:0,role:"button",class:(0,i.C_)(["me-1",{"text-white":D.isWhite(t)}]),onClick:(0,s.iM)((A=>D.sendToPage(t.data.path,t.id)),["prevent"])}," عرض ",10,m)):(0,a.kq)("",!0),t.read_at?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",{key:1,role:"button",class:(0,i.C_)(["material-symbols-outlined md-18 me-3",{"text-white":D.isWhite(t)}]),onClick:A=>D.markAsRead(t.id)}," done ",10,w))])])])])])])),_:2},1032,["class"])])))),128))],512)}var Y=e(43144),v=(e(70560),e(8209)),p=e(13238),G={name:"Notification",created(){this.loadNotifications()},async mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},data(){return{notifications:[],notifications_route:[],notification_route:{friends_requests:"user.friendsRequests"},page:1,totalPages:1,loading:!1,pendingRequest:!1,hasMore:!0,unRead:!1}},computed:{hasMoreToLoad(){return this.page<=this.totalPages&&this.hasMore},unreadCount(){return this.notifications.length}},methods:(0,Y.Z)((0,Y.Z)({},v.Z),{},{async loadNotifications(){if(!this.pendingRequest){this.pendingRequest=!0,this.loading=!0;try{var A,t;let e=await p.Z.listAllNotification(this.page);if(this.notifications=e.data,console.log(e.data[0].data.type),this.checkUnread(),this.totalPages=null!==(A=null===(t=e.data)||void 0===t?void 0:t.last_page)&&void 0!==A?A:1,this.page++,200===e.statusCode&&!e.data)return void(this.hasMore=!1)}catch(e){console.log(e)}finally{this.loading=!1,this.pendingRequest=!1}}},isAtBottomOfPage(){const A=this.$refs.listContainer.getBoundingClientRect(),t=A.bottom,e=window.innerHeight;return t<=e},handleScroll(){this.hasMoreToLoad&&this.isAtBottomOfPage()&&this.loadNotifications()},seenClass(A){return A?"seen":"un-seen"},async markAsRead(A){const t=await p.Z.markAsRead(A);this.notifications=t.data,this.checkUnread(),this.unreadCount>0&&this.$store.commit("SET_UNREAD_NOTIFICATIONS",this.unreadCount-1)},async markAllAsRead(){const A=await p.Z.markAllAsRead();this.notifications=A.data,this.checkUnread(),this.$store.commit("SET_UNREAD_NOTIFICATIONS",0)},checkUnread(){function A(A){return null===A.read_at}this.notifications.find(A)&&(this.unRead=!0)},sendToPage(A,t){A&&this.$router.push({path:A}),this.markAsRead(t)},isWhite(A){return"announcement"===A.data.type||"support"===A.data.type}})},b=e(83744);const y=(0,b.Z)(G,[["render",D],["__scopeId","data-v-266538c2"]]);var M=y}}]);
//# sourceMappingURL=8469.637fbd83.js.map