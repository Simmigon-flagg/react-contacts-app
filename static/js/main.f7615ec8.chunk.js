(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{65:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(31),s=c.n(r),i=c(34),l=c(11),u=c(4),o=c.n(u),d=c(10),j=c(14),b=c(9),m=c(2),p=c(67),h=c(0),O=function(){return Object(h.jsx)("div",{className:"ui grid menu",children:Object(h.jsx)("div",{class:"sixteen wide column",children:Object(h.jsx)("h2",{class:"ui center aligned container",children:"Contacts Page"})})})},x=function(e){var t=Object(a.useRef)(),c=Object(a.useRef)();return Object(h.jsxs)("div",{className:"ui main",children:[Object(h.jsx)("h2",{children:"Add Contact"}),Object(h.jsxs)("form",{onSubmit:function(a){a.preventDefault();var n=t.current.value,r=c.current.value;n||alert("Please Fill in a name"),r||alert("Please Fill in a email"),e.addAContact({name:n,email:r}),t.current.value="",c.current.value="",e.history.push("/react-contacts-app")},className:"ui form",children:[Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"name",ref:t,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"email@email.com",ref:c,required:!0})]}),Object(h.jsx)("button",{className:"ui button blue",children:"Submit"}),Object(h.jsx)(b.b,{to:"/react-contacts-app",children:Object(h.jsx)("button",{className:"ui button blue",children:"Cancel"})})]})]})},f=c(13),v=c.n(f),N=function(e){var t=e.contact,c=e.deleteContactByIdFromContactsList,n=t.id,r=t.name,s=t.email,i=Object(a.useState)(""),l=Object(j.a)(i,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://jsonplaceholder.typicode.com/photos/".concat(n));case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(h.jsxs)("div",{class:"item",children:[Object(h.jsx)("img",{class:"ui avatar image",src:u.url,alt:"Dexter"}),Object(h.jsx)("div",{class:"content",children:Object(h.jsxs)(b.b,{to:{pathname:"/users/".concat(n),state:{contact:t}},children:[Object(h.jsx)("div",{class:"header",children:r}),Object(h.jsx)("div",{children:s})]})}),Object(h.jsxs)("span",{class:"ui right aligned container",children:[Object(h.jsx)(b.b,{to:{pathname:"/react-contacts-app/edit",state:{contact:t}},children:Object(h.jsx)("i",{className:"edit alternate outline icon large",style:{color:"grey"}})}),Object(h.jsx)("i",{className:"trash alternate outline icon large",style:{color:"red"},onClick:function(){return c(n)}})]})]},n)},y=function(e){var t=e.contacts,c=e.deleteFromContactById,a=t.map((function(e){return Object(h.jsx)(N,{contact:e,deleteContactByIdFromContactsList:c},e.id)}));return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("h2",{children:"Contact List"}),Object(h.jsx)(b.b,{to:"/react-contacts-app/add",children:Object(h.jsx)("button",{className:"ui button blue",children:"Add Contact"})}),Object(h.jsx)("div",{className:"ui celled list",children:a})]})},w=function(e){var t=e.location.state.contact,c=t.id,n=t.name,r=t.email,s=Object(a.useState)(""),i=Object(j.a)(s,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://jsonplaceholder.typicode.com/photos/".concat(c));case 2:t=e.sent,u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{className:"ui card centered",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:l.url,alt:"Dexter"})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"header",children:n}),Object(h.jsx)("div",{className:"description",children:r})]})]}),Object(h.jsx)("div",{className:"center-div",children:Object(h.jsx)(b.b,{to:"/react-contacts-app",children:Object(h.jsx)("button",{className:"ui button blue center",children:"Back"})})})]})},C=v.a.create({baseURL:"https://jsonplaceholder.typicode.com"}),g=function(e){var t=e.location.state.contact;return Object(h.jsxs)("div",{className:"ui main",children:[Object(h.jsx)("h2",{children:"Edit Contact"}),Object(h.jsxs)("form",{onSubmit:function(c){var a=c.target,n=a.name,r=a.email,s={id:t.id,name:n.value,email:r.value};s.name||alert("Please Fill in a name"),s.email||alert("Please Fill in a name"),e.updateContact(s),e.history.push("/react-contacts-app")},className:"ui form",children:[Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"name",defaultValue:t.name,required:!0})]}),Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"email@email.com",defaultValue:t.email,required:!0})]}),Object(h.jsx)("button",{className:"ui button blue",children:"Edit"})]})]})},k=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/users");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(l.a)({id:Object(p.a)()},t),e.next=3,C.post("/users",a);case 3:r=e.sent,n([].concat(Object(i.a)(c),[r.data]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put("/users/".concat(t.id),t);case 2:a=e.sent,r=a.data.id,s=c.map((function(e){return e.id===r?Object(l.a)({},a.data):e})),n(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete("/users/".concat(t));case 2:a=c.filter((function(e){return e.id!==t})),n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"ui container",children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/react-contacts-app/add",render:function(e){return Object(h.jsx)(x,Object(l.a)(Object(l.a)({},e),{},{addAContact:s}))}}),Object(h.jsx)(m.a,{exact:!0,path:"/react-contacts-app",render:function(e){return Object(h.jsx)(y,Object(l.a)(Object(l.a)({},e),{},{contacts:c,deleteFromContactById:f}))}}),Object(h.jsx)(m.a,{exact:!0,path:"/react-contacts-app/edit",render:function(e){return Object(h.jsx)(g,Object(l.a)(Object(l.a)({},e),{},{updateContact:u}))}}),Object(h.jsx)(m.a,{path:"/react-contacts-app/users/:id",component:w})]})})]})})};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f7615ec8.chunk.js.map