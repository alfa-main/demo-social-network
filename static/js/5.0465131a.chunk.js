(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{234:function(e,s,t){e.exports={formControls:"FormControls_formControls__3Zr3_",error:"FormControls_error__1Z42I",formSummaryError:"FormControls_formSummaryError__WuDVV"}},235:function(e,s,t){"use strict";t.d(s,"a",(function(){return c}));var a=t(3),n=t(239),i=(t(0),t(234)),o=t.n(i),r=t(1),c=function(e){return function(s){var t=s.input,i=s.meta,c=(s.child,Object(n.a)(s,["input","meta","child"])),d=i.touched&&i.error;return Object(r.jsxs)("div",{className:o.a.formControls+" "+(d?o.a.error:""),children:[Object(r.jsx)(e,Object(a.a)(Object(a.a)({},t),c)),d&&Object(r.jsx)("span",{children:i.error})]})}}},238:function(e,s,t){"use strict";t.d(s,"b",(function(){return a})),t.d(s,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required"},n=function(e){return function(s){if(s.length>e)return"Max length is ".concat(e," symbols")}}},256:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3KuMc",dialogs_items:"Dialogs_dialogs_items__SWmJn",active:"Dialogs_active__36D_H",dialogs_message:"Dialogs_dialogs_message__1pwdF",dialogs_send:"Dialogs_dialogs_send__Xh8MU"}},257:function(e,s,t){e.exports={dialogs_items:"DialogItem_dialogs_items__1xi7T"}},258:function(e,s,t){e.exports={messages:"Message_messages__2NZJa",message:"Message_message__2bC3L"}},310:function(e,s,t){"use strict";t.r(s);var a=t(80),n=(t(0),t(256)),i=t.n(n),o=t(257),r=t.n(o),c=t(10),d=t(1),l=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:r.a.dialog+" "+r.a.active,children:Object(d.jsx)(c.b,{to:s,children:e.name})})},u=t(258),m=t.n(u),g=function(e){return Object(d.jsx)("div",{className:m.a.message,children:e.message})},j=t(7),_=t(115),b=t(36),f=t(116),O=t(238),x=t(235),h=Object(x.a)("textarea"),v=Object(O.a)(50),p=Object(f.a)({form:"dialogAddMesageForm",onSubmitSuccess:function(e,s){return s(Object(b.a)("dialogAddMesageForm"))}})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{className:i.a.dialogs_message,children:Object(d.jsx)(_.a,{component:h,validate:[O.b,v],name:"newMessageBody",placeholder:"Enter your message"})}),Object(d.jsx)("div",{className:i.a.dialogs_send,children:Object(d.jsx)("button",{children:"Send"})})]})})),M=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(d.jsx)(l,{name:e.name},e.id)})),a=s.messages.map((function(e){return Object(d.jsx)(g,{message:e.message},e.id)}));return e.isAuth?Object(d.jsxs)("div",{className:i.a.dialogs,children:[Object(d.jsx)("div",{className:i.a.dialogs_items,children:Object(d.jsx)("div",{children:t})}),Object(d.jsxs)("div",{className:i.a.dialogs_items,children:[Object(d.jsx)("div",{children:a}),Object(d.jsx)(p,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(d.jsx)(j.a,{to:"/login"})},N=t(19),S=t(65),D=t(18);s.default=Object(D.d)(Object(N.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(a.b)(s))}}})),S.a)(M)}}]);
//# sourceMappingURL=5.0465131a.chunk.js.map