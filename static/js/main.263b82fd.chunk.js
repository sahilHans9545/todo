(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(6),a=c.n(s),i=(c(12),c(7)),o=c(3),j=c(0),r=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],d=r[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),O=b[0],p=b[1],f=Object(n.useState)(),x=Object(o.a)(f,2),h=x[0],m=x[1];function g(t){s(c.filter((function(e,c){return c!=t.target.id})))}function v(t){p(!0),d(t.target.parentNode.parentNode.textContent),m(t.target.id)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"todoapp",children:[Object(j.jsx)("img",{src:"".concat("/todo","/images/logo192.png"),alt:""}),Object(j.jsxs)("div",{className:"add-todo",children:[Object(j.jsx)("input",{type:"text",onChange:function(){var t=document.querySelector("input").value;d(t),O&&(c[h]=t)},value:l}),Object(j.jsx)("span",{onClick:function(){""!==l&&(s([l].concat(Object(i.a)(c))),d(""),p(!1))},children:"+"})]}),Object(j.jsxs)("ul",{className:"todo-list",children:[c.map((function(t,e){if(!O)return Object(j.jsxs)("li",{children:[t,Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("i",{id:e,class:"far fa-edit",onClick:v,style:{marginRight:"20px"}}),Object(j.jsx)("i",{id:e,onClick:g,className:"fas fa-trash-alt"})]})]},e)})),O?Object(j.jsx)("li",{children:c[h]}):null]})]}),O?Object(j.jsx)("button",{onClick:function(){p(!1),c[h]=l,d("")},children:"Confirm"}):null]})},l=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{style:{color:"#fff"},children:"Best Todo App"}),Object(j.jsx)(r,{})]})};a.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.263b82fd.chunk.js.map