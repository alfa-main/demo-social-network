(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{232:function(e,s,t){e.exports={formControls:"FormControls_formControls__3Zr3_",error:"FormControls_error__1Z42I",formSummaryError:"FormControls_formSummaryError__WuDVV"}},233:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(s){if(s.length>e)return"Max length is ".concat(e," symbols")}}},234:function(e,s,t){"use strict";t.d(s,"a",(function(){return c}));var n=t(3),r=t(237),a=(t(0),t(232)),i=t.n(a),o=t(1),c=function(e){return function(s){var t=s.input,a=s.meta,c=(s.child,Object(r.a)(s,["input","meta","child"])),d=a.touched&&a.error;return Object(o.jsxs)("div",{className:i.a.formControls+" "+(d?i.a.error:""),children:[Object(o.jsx)(e,Object(n.a)(Object(n.a)({},t),c)),d&&Object(o.jsx)("span",{children:a.error})]})}}},254:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3KuMc",dialogs_items:"Dialogs_dialogs_items__SWmJn",active:"Dialogs_active__36D_H",messages:"Dialogs_messages__3MJWH"}},255:function(e,s,t){e.exports={dialogs_items:"DialogItem_dialogs_items__1xi7T"}},256:function(e,s,t){e.exports={messages:"Message_messages__2NZJa",message:"Message_message__2bC3L"}},310:function(e,s,t){"use strict";t.r(s);var n=t(78),r=(t(0),t(254)),a=t.n(r),i=t(255),o=t.n(i),c=t(8),d=t(1),l=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(d.jsx)(c.b,{to:s,children:e.name})})},u=t(256),m=t.n(u),j=function(e){return Object(d.jsx)("div",{className:m.a.message,children:e.message})},g=t(7),b=t(114),_=t(115),f=t(233),O=t(234),x=Object(O.a)("textarea"),h=Object(f.a)(50),v=Object(_.a)({form:"dialogAddMesageForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(b.a,{component:x,validate:[f.b,h],name:"newMessageBody",placeholder:"Enter your message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Send"})})]})})),p=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(d.jsx)(l,{name:e.name},e.id)})),n=s.messages.map((function(e){return Object(d.jsx)(j,{message:e.message},e.id)}));return e.isAuth?Object(d.jsxs)("div",{className:a.a.dialogs,children:[Object(d.jsx)("div",{className:a.a.dialogs_items,children:Object(d.jsx)("div",{children:t})}),Object(d.jsxs)("div",{className:a.a.messages,children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(d.jsx)(g.a,{to:"/login"})},M=t(19),C=t(64),D=t(18);s.default=Object(D.d)(Object(M.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),C.a)(p)}}]);
//# sourceMappingURL=4.54a94c92.chunk.js.map