(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[7856],{20425:function(e){!function(t,n){e.exports=n()}(0,(function(){var e="__v-click-outside",t="undefined"!=typeof window,n="undefined"!=typeof navigator,r=t&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],a=function(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)},i=function(t,n){var i=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||r,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe),capture:Boolean(e.capture)}}(n.value),u=i.handler,s=i.middleware,c=i.detectIframe,o=i.capture;if(i.isActive){if(t[e]=i.events.map((function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,i=e.middleware,u=n.path||n.composedPath&&n.composedPath();(u?u.indexOf(t)<0:!t.contains(n.target))&&a({event:n,handler:r,middleware:i})}({el:t,event:e,handler:u,middleware:s})},capture:o}})),c){var l={event:"blur",srcTarget:window,handler:function(e){return function(e){var t=e.el,n=e.event,r=e.handler,i=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&a({event:n,handler:r,middleware:i})}),0)}({el:t,event:e,handler:u,middleware:s})},capture:o};t[e]=[].concat(t[e],[l])}t[e].forEach((function(n){var r=n.event,a=n.srcTarget,i=n.handler;return setTimeout((function(){t[e]&&a.addEventListener(r,i,o)}),0)}))}},u=function(t){(t[e]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,e.capture)})),delete t[e]},s=t?{beforeMount:i,updated:function(e,t){var n=t.value,r=t.oldValue;JSON.stringify(n)!==JSON.stringify(r)&&(u(e),i(e,{value:n}))},unmounted:u}:{};return{install:function(e){e.directive("click-outside",s)},directive:s}}))},96444:function(e,t,n){"use strict";var r=n(50124),a=n(48534),i=n(13087),u=n(62833),s=n(66252),c=n(24150),o=function(){function e(){(0,i.Z)(this,e)}return(0,u.Z)(e,[{key:"getAllFriends",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("friends/user/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFriendsRequests",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("/friends/un-accepted");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.post("/friends/create",{friend_id:t});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getFriendshipById",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.post("/friends/show",{friendship_id:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"accept",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("/friends/accept/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"acceptAll",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("/friends/accept-all");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteAllUnAccepted",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.hi.get("/friends/delete-all-unaccepted");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("user_id",t),a.append("friend_id",n),e.prev=3,e.next=6,c.hi.post("/friends/delete",a);case 6:return i=e.sent,e.abrupt("return",i.data);case 10:e.prev=10,e.t0=e["catch"](3),(0,s.S3)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}();t.Z=new o},94918:function(e,t,n){"use strict";var r=n(50124),a=n(48534),i=n(13087),u=n(62833),s=(n(34338),n(66252)),c=n(79940),o=n(24150),l=function(){function e(){(0,i.Z)(this,e),this.prefix="user-group"}return(0,u.Z)(e,[{key:"usersByGroupId",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.hi.get("".concat(this.prefix,"/users/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"AddMember",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.hi.post("".concat(this.prefix,"/add-member"),t,{headers:{"Content-type":"multipart/form-data"}});case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e["catch"](0),(0,c.F)(e.t0,"UserGroupService.AddMember");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.hi.delete("".concat(this.prefix,"/delete/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),(0,s.S3)(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t.Z=new l},60351:function(e,t,n){"use strict";n.d(t,{So:function(){return r},Wx:function(){return i},b5:function(){return s},gg:function(){return u},jx:function(){return a}});var r={ambassador:"سفير",leader:"قائد",supervisor:"مراقب",advisor:"موجه",consultant:"مستشار",admin:"ادارة",book_quality_team:"جودة الكتب"},a={arabic:"اللغة العربية",english:"اللغة الانجليزية"},i={normal:"منهج",ramadan:"رمضان",young:"يافعين",kids:"أطفال",tafseer:"تفسير",free:"كتاب حر"},u={January:"يناير",February:"فبراير",March:"مارس",April:"ابريل",May:"مايو",June:"يونيو",July:"يوليو",August:"أغسطس",September:"سبتمبر",October:"أكتوبر",November:"نوفمبر",December:"ديسمبر"},s={"01":"يناير","02":"فبراير","03":"مارس","04":"ابريل","05":"مايو","06":"يونيو","07":"يوليو","08":"أغسطس","09":"سبتمبر",10:"أكتوبر",11:"نوفمبر",12:"ديسمبر"}},7856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(66252),a=n(3577),i=n(76560),u={class:"row"},s=(0,r._)("h4",{class:"card-title"},"قائمة الأعضاء",-1),c={key:0,class:"request-list list-inline m-0 p-0"},o=(0,r._)("br",null,null,-1),l={class:"rounded-pill badge lh-1 bg-primary px-2"},d={key:0,class:"d-flex justify-content-end flex-grow-1 ms-3"},p=["onClick"],f=["onClick"],v=(0,r._)("span",{class:"material-symbols-outlined me-2 md-18"}," delete ",-1),h={key:0,class:"d-block text-center mb-0 pb-0"},m={key:1,class:"col-sm-12"},w=(0,r._)("div",{class:"iq-card-body p-0"},[(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:i,class:"img-fluid rounded w-50",alt:"blog-img"})]),(0,r._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد أعضاء")],-1);function g(e,t,n,i,g,b){var Z=(0,r.up)("BaseAvatar"),x=(0,r.up)("router-link"),y=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(y,null,{headerTitle:(0,r.w5)((function(){return[s]})),body:(0,r.w5)((function(){var n,i;return[(null===(n=b.usersLoaded)||void 0===n?void 0:n.length)>0?((0,r.wg)(),(0,r.iD)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.usersLoaded,(function(n,i){return(0,r.wg)(),(0,r.iD)("li",{class:"d-flex align-items-center justify-content-between flex-wrap",key:i},[(0,r.Wm)(Z,{profileImg:n.user_profile.profile_picture,profile_id:n.user_profile.id,title:null===n||void 0===n?void 0:n.name,gender:null===n||void 0===n?void 0:n.gender,avatarClass:"rounded-circle avatar-40",containerClass:"flex-shrink-0"},null,8,["profileImg","profile_id","title","gender"]),(0,r._)("div",{class:"flex-grow-1 ms-3",onClick:t[0]||(t[0]=function(){return b.hideList&&b.hideList.apply(b,arguments)})},[(0,r.Wm)(x,{to:{name:"user.profile",params:{user_id:n.id}}},{default:(0,r.w5)((function(){return[(0,r._)("h5",null,(0,a.zw)(n.name),1)]})),_:2},1032,["to"]),(0,r._)("small",null,(0,a.zw)(e.formatDateToWritten(n.pivot.updated_at)),1),o,(0,r._)("span",l,(0,a.zw)(g.ARABIC_ROLES[n.pivot.user_type]),1)]),b.advisorAndAbove&&"leader"!=n.pivot.user_type||b.isAdmin?((0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("span",{role:"button",onClick:function(e){return b.showList(i)},class:"material-symbols-outlined"}," more_horiz ",8,p),(0,r._)("div",{class:(0,a.C_)("dropdown-menu dropdown-menu-right ".concat(g.controlList[i]?"show":"")),"aria-labelledby":"dropdownMenuButton"},[(0,r._)("a",{role:"button",class:"dropdown-item d-flex align-items-center",onClick:function(e){return b.deleteMember(n.pivot.id)}},[v,(0,r.Uk)(" حذف ")],8,f)],2)])):(0,r.kq)("",!0)])})),128)),(null===(i=g.users)||void 0===i?void 0:i.length)>g.length?((0,r.wg)(),(0,r.iD)("li",h,[(0,r._)("a",{class:"me-3 btn",role:"button",onClick:t[1]||(t[1]=function(e){return b.loadMore()})},"عرض المزيد")])):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(y,{class:"iq-card"},{default:(0,r.w5)((function(){return[w]})),_:1})]))]})),_:1})])}var b=n(50124),Z=n(48534),x=n(95082),y=(n(97895),n(89730),n(96444)),k=n(94918),_=n(20425),A=n.n(_),C=n(22658),L=n(60351),S=n(31025),B=n(49579),I={name:"GroupMembers",directives:{clickOutside:A().directive},created:function(){this.getUsers()},data:function(){return{controlList:[],users:[],length:10,ambassador_name:"",ARABIC_ROLES:L.So,currentIndex:-1}},methods:(0,x.Z)((0,x.Z)({},S.Z),{},{getUsers:function(){var e=this;return(0,Z.Z)((0,b.Z)().mark((function t(){var n;return(0,b.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.Z.usersByGroupId(e.$route.params.group_id);case 2:n=t.sent,e.users=n.users;case 4:case"end":return t.stop()}}),t)})))()},showList:function(e){this.controlList.fill(!1),this.controlList[e]=!0},hideList:function(){this.controlList.fill(!1)},createFriendship:function(e){return(0,Z.Z)((0,b.Z)().mark((function t(){return(0,b.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,y.Z.create(e);case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},deleteMember:function(e){var t=this;return(0,Z.Z)((0,b.Z)().mark((function n(){var r;return(0,b.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1}),r.fire({title:"هل أنت متأكد؟",text:"لا يمكنك التراجع عن هذا الاجراء",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم، قم بالحذف",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then(function(){var n=(0,Z.Z)((0,b.Z)().mark((function n(r){return(0,b.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!r.isConfirmed){n.next=4;break}return n.next=3,k.Z.delete(e).then(function(){var e=(0,Z.Z)((0,b.Z)().mark((function e(n){return(0,b.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getUsers(),t.hideList(),S.Z.toggleToast("تم الحذف","success");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){S.Z.toggleToast("حصل خطأ - لم يتم الحذف!","danger"),console.log(e)}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()},loadMore:function(){var e;this.length>(null===(e=this.users)||void 0===e?void 0:e.length)||(this.length=this.length+10)},searchForAmbassador:function(){var e=this;return(0,Z.Z)((0,b.Z)().mark((function t(){var n;return(0,b.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C.Z.searchForAmbassador(e.ambassador_name,e.$route.params.group_id);case 2:n=t.sent,e.users=n.users;case 4:case"end":return t.stop()}}),t)})))()}}),computed:{usersLoaded:function(){var e;return null===(e=this.users)||void 0===e?void 0:e.slice(0,this.length)},user:function(){return this.$store.getters.getUser},isAdmin:function(){return B.Z.hasRole(this.user,"admin")},advisorAndAbove:function(){return B.Z.hasRoles(this.user,["admin","consultant","advisor"])}}},M=n(83744);const T=(0,M.Z)(I,[["render",g]]);var D=T},76560:function(e,t,n){"use strict";e.exports=n.p+"img/no-friends.2bab3c44.png"},62872:function(e,t,n){"use strict";var r=n(90690),a=n(27578),i=n(6310);e.exports=function(e){var t=r(this),n=i(t),u=arguments.length,s=a(u>1?arguments[1]:void 0,n),c=u>2?arguments[2]:void 0,o=void 0===c?n:a(c,n);while(o>s)t[s++]=e;return t}},97895:function(e,t,n){"use strict";var r=n(79989),a=n(62872),i=n(87370);r({target:"Array",proto:!0},{fill:a}),i("fill")}}]);
//# sourceMappingURL=7856-legacy.41d96b8d.js.map