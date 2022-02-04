(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),a=n(4),r=n(3),o=n(2),i=n.n(o),u=n(1),l=(n(12),n(13),n(14),n(0)),j=function(t){var e=t.posts,n=t.openPost,c=t.setOpenPost;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n!==t.id?Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(t.id)},children:"Open"}):Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(0)},children:"Close"})]},t.id)}))})]})},b="https://mate.academy/students-api",p=function(t){return 0!==t?fetch("".concat(b,"/posts?userId=").concat(t)).then((function(t){return t.json()})):fetch("".concat(b,"/posts")).then((function(t){return t.json()}))},d=function(t){return fetch("".concat(b,"/posts/").concat(t)).then((function(t){return t.json()}))},m=function(t){return fetch("".concat(b,"/comments?postId=").concat(t)).then((function(t){return t.json()}))},h=function(t,e,n,c){return fetch("".concat(b,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:t,name:e,email:n,body:c})})},f=(n(16),function(t){var e=t.postId,n=t.updateComments,c=Object(u.useState)(""),s=Object(r.a)(c,2),o=s[0],j=s[1],b=Object(u.useState)(""),p=Object(r.a)(b,2),d=p[0],m=p[1],f=Object(u.useState)(""),O=Object(r.a)(f,2),x=O[0],v=O[1],_=function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e,o,d,x);case 2:n(e);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("form",{className:"NewCommentForm",onSubmit:function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,_();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(t){return j(t.target.value)}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(t){return m(t.target.value)}})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:x,onChange:function(t){return v(t.target.value)}})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),O=(n(17),function(t){var e=t.postId,n=Object(u.useState)({id:0,createdAt:"",updatedAt:"",userId:0,title:"",body:""}),c=Object(r.a)(n,2),s=c[0],o=c[1],j=Object(u.useState)([]),p=Object(r.a)(j,2),h=p[0],O=p[1],x=Object(u.useState)(e),v=Object(r.a)(x,2),_=v[0],N=v[1],y=Object(u.useState)(!1),w=Object(r.a)(y,2),C=w[0],P=w[1],S=function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,d(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=O,t.next=3,m(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(u.useEffect)((function(){_!==e&&(N(e),S(),g(e))}));var k=function(){var t=Object(a.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=n.id,fetch("".concat(b,"/comments/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:g(e);case 3:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),!!e&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:s.title})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){return P(!C)},children:C?"Show ".concat(h.length," comments"):"Hide ".concat(h.length," comments")}),!C&&Object(l.jsx)("ul",{className:"PostDetails__list",children:h.map((function(t){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return k(t)},children:"X"}),Object(l.jsx)("p",{children:t.name})]},t.id)}))})]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(f,{postId:e,updateComments:g})})})]})]})}),x=function(){var t=Object(u.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(u.useState)(0),o=Object(r.a)(s,2),b=o[0],d=o[1],m=Object(u.useState)(0),h=Object(r.a)(m,2),f=h[0],x=h[1],v=Object(u.useState)(0),_=Object(r.a)(v,2),N=_[0],y=_[1],w=function(){var t=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,p(f);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){w()}),[]),Object(u.useEffect)((function(){f!==N&&(w(),y(f))})),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{htmlFor:"user-selector",children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",id:"user-selector",value:f,onChange:function(t){x(+t.target.value)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),Object(l.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(l.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(l.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(l.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(l.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(l.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(l.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(l.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(l.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(l.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(j,{posts:n,openPost:b,setOpenPost:function(t){d(t)}})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)(O,{postId:b})})]})]})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.043f4a60.chunk.js.map