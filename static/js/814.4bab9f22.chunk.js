"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[814],{814:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var i=a(2791),n=a(2906),t=a(8683),r={dialogsContent:"Dialogs_dialogsContent__vnbdl",dialogsColumn:"Dialogs_dialogsColumn__h5AKV",messagesColumn:"Dialogs_messagesColumn__vR3Vn",active:"Dialogs_active__cxRtB",message:"Dialogs_message__Ifi0-"},u=a(1087),l=a(184),c=function(e){return(0,l.jsx)("div",{children:(0,l.jsx)(u.OL,{className:function(e){return e.isActive?"".concat(r.item," ").concat(r.active):r.item},to:"dialogs/".concat(e.id),children:e.name})})},d={message:"MessageItem_message__Ldrqg",left:"MessageItem_left__CSBt9",right:"MessageItem_right__3AoMe",userpic:"MessageItem_userpic__hGp+U"},o=function(e){var s=e.message,a="left";return 1===s.user_id&&(a="right"),(0,l.jsxs)("div",{className:"".concat(d.message," ").concat(d[a]),children:[(0,l.jsx)("div",{className:d.userpic,children:(0,l.jsx)("img",{alt:"",src:"/it-samurai/images/userpic"+s.user_id+".jpg"})}),(0,l.jsx)("div",{className:d.text,children:s.text})]})},g=a(7689),m=a(2506),_=function(e){return(0,l.jsx)("div",{children:(0,l.jsx)(m.J9,{initialValues:{message:""},validate:function(e){var s={};return e.message||(s.message="Required"),s},onSubmit:function(s,a){var i=a.setSubmitting,n=a.resetForm;setTimeout((function(){console.log(e),e.addMessage(s.message,e.userId),alert(JSON.stringify(s,null,2)),i(!1),n({values:""})}),400)},children:function(e){var s=e.isSubmitting;return(0,l.jsxs)(m.l0,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(m.gN,{as:"textarea",name:"message",placeholder:"Type your message..."}),(0,l.jsx)(m.Bc,{name:"message",component:"div"})]}),(0,l.jsx)("button",{type:"submit",disabled:s,children:"Add Message"})]})}})})},h=a(8570),f=function(e){var s=e.dialogsPage.dialogs,a=e.dialogsPage.messages,n=s.map((function(e){return(0,l.jsx)(c,{id:e.id,name:e.name},e.id)})),u=a.map((function(e){return(0,l.jsx)(o,{message:e},e.id)})),d=(0,g.s0)();return(0,i.useEffect)((function(){if(!e.isAuth)return d("/login")}),[e.isAuth]),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(h.Z,{}),children:(0,l.jsxs)("div",{className:r.dialogsContent,children:[(0,l.jsx)("div",{className:r.dialogsColumn,children:n}),(0,l.jsxs)("div",{className:r.messagesColumn,children:[u,(0,l.jsx)(_,(0,t.Z)({},e))]})]})})},x=a(9101),v=a(7781),j=a(1548),p=(0,v.qC)((0,x.$j)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.userAuth.isAuth,userId:e.userAuth.userId}}),{addMessage:n.BZ}),j.D)(f)}}]);
//# sourceMappingURL=814.4bab9f22.chunk.js.map