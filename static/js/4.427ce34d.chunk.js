(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{234:function(e,t,s){e.exports={formControls:"FormControls_formControls__3Zr3_",error:"FormControls_error__1Z42I",formSummaryError:"FormControls_formSummaryError__WuDVV"}},235:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var o=s(3),a=s(239),i=(s(0),s(234)),c=s.n(i),r=s(1),n=function(e){return function(t){var s=t.input,i=t.meta,n=(t.child,Object(a.a)(t,["input","meta","child"])),l=i.touched&&i.error;return Object(r.jsxs)("div",{className:c.a.formControls+" "+(l?c.a.error:""),children:[Object(r.jsx)(e,Object(o.a)(Object(o.a)({},s),n)),l&&Object(r.jsx)("span",{children:i.error})]})}}},300:function(e,t,s){e.exports={posts:"MyPosts_posts__1Bi33",posts_block:"MyPosts_posts_block__162SU"}},301:function(e,t,s){e.exports={post:"Post_post__2u2ir",post_img:"Post_post_img__1y6nv",post_title:"Post_post_title__nA4z5",post_message:"Post_post_message__HGqzq",post_likes:"Post_post_likes__3viIZ",post_delete:"Post_post_delete__3hyuZ",background_red:"Post_background_red__3Wrw_",hide:"Post_hide__1eu0I"}},302:function(e,t,s){e.exports={posts_create:"CreatePosts_posts_create__2Jcwv",posts_item:"CreatePosts_posts_item__zxqNX",posts_title:"CreatePosts_posts_title__3so9l",posts_image:"CreatePosts_posts_image__uBg6b",posts_form:"CreatePosts_posts_form__1Lhp_",posts_validate:"CreatePosts_posts_validate__3vd0w",hide:"CreatePosts_hide__3owRZ"}},303:function(e,t,s){e.exports={description_block:"ProfileInfo_description_block__ye2ih",contact:"ProfileInfo_contact__KBWJl",description_photo:"ProfileInfo_description_photo__1Yrqa"}},304:function(e,t,s){e.exports={profile_status:"ProfileStatus_profile_status__2I7kn",status_input:"ProfileStatus_status_input__2jaB3"}},305:function(e,t,s){e.exports={profile_save:"ProfileDataForm_profile_save__NgeVY",profile_form:"ProfileDataForm_profile_form__1W1Im",profile_contacts:"ProfileDataForm_profile_contacts__38cjY",contacts_caption:"ProfileDataForm_contacts_caption__2zsux"}},306:function(e,t,s){e.exports={profile_data:"ProfileData_profile_data__3X47u",profile_item:"ProfileData_profile_item__98QcC",contact:"ProfileData_contact__2N6Ii",profile_edit:"ProfileData_profile_edit__2liDB"}},309:function(e,t,s){"use strict";s.r(t);var o=s(3),a=s(20),i=s(21),c=s(22),r=s(23),n=s(0),l=s.n(n),p=s(66),d=s(300),j=s.n(d),u=s(301),_=s.n(u),f=s(1),m=function(e){return Object(f.jsxs)("div",{className:_.a.post,children:[Object(f.jsx)("div",{className:_.a.post_img,children:null===e.post.image.match(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-z\u0410-\u042f\u0430-\u044f0-9]{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9\-]*\.?)*\.{1}[A-Za-z\u0410-\u042f\u0430-\u044f0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)?Object(f.jsx)("img",{src:e.post.image,alt:"img post",className:"hide"}):Object(f.jsx)("img",{src:e.post.image,alt:"img post"})}),Object(f.jsx)("div",{className:_.a.post_title,children:Object(f.jsx)("h4",{children:e.post.title})}),Object(f.jsx)("div",{className:_.a.post_message,children:Object(f.jsx)("p",{children:e.post.message})}),Object(f.jsxs)("div",{className:_.a.post_likes,children:[e.post.liked?Object(f.jsx)("button",{className:_.a.background_red,onClick:function(){e.descreaseLike(e.post.id)},children:"Like"}):Object(f.jsx)("button",{onClick:function(){e.increaseLike(e.post.id)},children:"Like"}),Object(f.jsxs)("p",{children:["Like: ",Object(f.jsx)("span",{children:e.post.likesCount})]})]}),Object(f.jsx)("button",{className:_.a.post_delete,onClick:function(){e.deletePost(e.post.id)},children:"Delete post"})]})},b=s(64),h=s(302),O=s.n(h),x=function(e){var t=Object(n.useState)(!0),s=Object(b.a)(t,2),o=s[0],a=s[1];return Object(f.jsxs)("div",{className:O.a.posts_create,children:[Object(f.jsx)("h2",{children:"Create Post"}),Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==e.newPostText.length&&0!==e.newPostTitle.length?(e.addPost(e.newPostTitle,e.newPostText,e.newPostImage),a(!0)):a(!1)},className:O.a.posts_form,children:[Object(f.jsxs)("div",{className:O.a.posts_item,children:[Object(f.jsxs)("div",{className:O.a.posts_left,children:[Object(f.jsxs)("div",{className:O.a.posts_title,children:[Object(f.jsx)("p",{children:"Title:"}),Object(f.jsx)("input",{type:"text",name:"title",onChange:function(t){e.updatePostTitle(t.target.value)},value:e.newPostTitle})]}),Object(f.jsxs)("div",{className:O.a.posts_image,children:[Object(f.jsx)("p",{children:"Url image:"}),Object(f.jsx)("input",{type:"text",name:"image",onChange:function(t){e.updatePostImage(t.target.value)},value:e.newPostImage})]})]}),Object(f.jsxs)("div",{className:O.a.posts_right,children:[Object(f.jsx)("textarea",{name:"message",onChange:function(t){e.updatePostMessage(t.target.value)},value:e.newPostText,className:"posts__form-right"}),o?Object(f.jsx)("div",{className:O.a.posts_validate+O.a.hide}):Object(f.jsx)("div",{className:O.a.posts_validate,children:"Please fill in the title and text fields"})]})]}),Object(f.jsx)("button",{className:"posts__btn",children:"Add post"})]})]})},P=function(e){var t=e.posts.slice().reverse().map((function(t){return Object(f.jsx)(m,{post:t,increaseLike:e.increaseLike,descreaseLike:e.descreaseLike,deletePost:e.deletePost},t.id)}));return Object(f.jsxs)("div",{className:j.a.posts_block,children:[Object(f.jsx)(x,{addPost:e.addPost,newPostText:e.newPostText,newPostTitle:e.newPostTitle,newPostImage:e.newPostImage,updatePostMessage:e.updatePostMessage,updatePostTitle:e.updatePostTitle,updatePostImage:e.updatePostImage}),Object(f.jsxs)("div",{className:j.a.posts,children:[Object(f.jsx)("h2",{children:"My posts"}),t]})]})},v=s(19),g=Object(v.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostMessage,newPostTitle:e.profilePage.newPostTitle,newPostImage:e.profilePage.newPostImage}}),{addPost:p.a,updatePostMessage:p.k,updatePostTitle:p.l,updatePostImage:p.j,increaseLike:p.g,descreaseLike:p.d,deletePost:p.c})(P),k=s(303),N=s.n(k),w=s(28),C=s(304),y=s.n(C),I=function(e){var t=Object(n.useState)(!1),s=Object(b.a)(t,2),o=s[0],a=s[1],i=Object(n.useState)(e.status),c=Object(b.a)(i,2),r=c[0],l=c[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return Object(f.jsx)("div",{className:y.a.profile_status,children:o?Object(f.jsx)("div",{children:Object(f.jsx)("input",{className:y.a.status_input,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(r)},defaultValue:r})}):Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){a(!0)},children:e.status?e.status:"---"})})})},S=s(79),T=s(305),D=s.n(T),F=s(115),M=s(116),A=s(235),L=s(234),z=s.n(L),J=Object(A.a)("input"),Z=Object(A.a)("textarea"),E=Object(M.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,s=e.profile,o=e.error;return Object(f.jsxs)("form",{onSubmit:t,children:[o&&Object(f.jsx)("div",{className:z.a.formSummaryError,children:o}),Object(f.jsxs)("div",{className:D.a.profile_form,children:[Object(f.jsx)("p",{children:"Full name:"})," ",Object(f.jsx)(F.a,{type:"text",component:J,name:"fullName",placeholder:"Full name"})]}),Object(f.jsxs)("div",{className:D.a.profile_form,children:[Object(f.jsx)("p",{children:"Looking for a job:"})," ",Object(f.jsx)(F.a,{type:"checkbox",component:J,name:"lookingForAJob",placeholder:"looking for a job"})]}),Object(f.jsxs)("div",{className:D.a.profile_form,children:[Object(f.jsx)("p",{children:"My professional skills:"})," ",Object(f.jsx)(F.a,{component:Z,name:"lookingForAJobDescription",placeholder:"My professional skills"})]}),Object(f.jsxs)("div",{className:D.a.profile_form,children:[Object(f.jsx)("p",{children:"About me:"})," ",Object(f.jsx)(F.a,{component:Z,name:"aboutMe",placeholder:"About me"})]}),Object(f.jsxs)("div",{className:D.a.profile_form,children:[Object(f.jsx)("p",{className:D.a.contacts_caption,children:"Contacts:"})," ",Object.keys(s.contacts).map((function(e){return Object(f.jsx)("div",{className:D.a.contact,children:Object(f.jsxs)("div",{className:D.a.profile_contacts,children:[Object(f.jsxs)("span",{children:[e,":"]}),"  ",Object(f.jsx)(F.a,{type:"text",component:J,name:"contacts."+e,placeholder:e})]})},e)}))]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:D.a.profile_save,children:"Save"})})]})})),U=s(306),V=s.n(U),B=function(e){var t=e.contactTitle,s=e.contactValue;return Object(f.jsxs)("div",{className:V.a.contact,children:[t,": ",s]})},q=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode;return Object(f.jsxs)("div",{className:V.a.profile_data,children:[Object(f.jsxs)("div",{className:V.a.profile_item,children:[Object(f.jsx)("span",{children:"Fullname:"})," ",t.fullName]}),Object(f.jsxs)("div",{className:V.a.profile_item,children:[Object(f.jsx)("span",{children:"Looking for a job:"})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(f.jsxs)("div",{className:V.a.profile_item,children:[Object(f.jsx)("span",{children:"My professional skills:"})," ",t.lookingForAJobDescription]}),Object(f.jsxs)("div",{className:V.a.profile_item,children:[Object(f.jsx)("span",{children:"About me:"})," ",t.aboutMe]}),Object(f.jsxs)("div",{className:V.a.profile_item,children:[Object(f.jsx)("span",{children:"Contacts:"})," ",Object.keys(t.contacts).map((function(e){if(null!==t.contacts[e])return Object(f.jsx)(B,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),s&&Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:V.a.profile_edit,onClick:o,children:"Edit"})})]})},W=function(e){var t=e.profile,s=e.updateStatus,o=e.status,a=e.isOwner,i=e.savePhoto,c=e.saveProfile,r=Object(n.useState)(!1),l=Object(b.a)(r,2),p=l[0],d=l[1];if(!t)return Object(f.jsx)(w.a,{});return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:N.a.description_block,children:[Object(f.jsx)("div",{className:N.a.description_photo,children:Object(f.jsx)("img",{src:t.photos.large||S.a,alt:"large"})}),Object(f.jsx)("div",{className:N.a.description_file,children:a&&Object(f.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})}),Object(f.jsx)(I,{status:o,updateStatus:s})]}),p?Object(f.jsx)(E,{initialValues:t,onSubmit:function(e){c(e).then((function(){d(!1)}))},profile:t}):Object(f.jsx)(q,{profile:t,isOwner:a,goToEditMode:function(){d(!0)}})]})},Y=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(W,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(f.jsx)(g,{})]})},X=s(7),G=s(18),H=s(65),K=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)(Y,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);t.default=Object(G.d)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:p.f,getStatus:p.e,updateStatus:p.m,savePhoto:p.h,saveProfile:p.i}),X.g,H.a)(K)}}]);
//# sourceMappingURL=4.427ce34d.chunk.js.map