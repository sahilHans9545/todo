(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(6),a=n.n(s),i=(n(12),n(7)),o=n(3),r=n(0),j=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(""),j=Object(o.a)(a,2),l=j[0],d=j[1],u=Object(c.useState)(!1),b=Object(o.a)(u,2),O=b[0],p=b[1],f=Object(c.useState)(),x=Object(o.a)(f,2),h=x[0],m=x[1];function g(t){s(n.filter((function(e,n){return n!=t.target.id})))}function v(t){p(!0),d(t.target.parentNode.parentNode.textContent),m(t.target.id)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"todoapp",children:[Object(r.jsxs)("div",{className:"add-todo",children:[Object(r.jsx)("input",{type:"text",onChange:function(){var t=document.querySelector("input").value;d(t),O&&(n[h]=t)},value:l}),Object(r.jsx)("span",{onClick:function(){""!==l&&(s([l].concat(Object(i.a)(n))),d(""),p(!1))},children:"+"})]}),Object(r.jsxs)("ul",{className:"todo-list",children:[n.map((function(t,e){if(!O)return Object(r.jsxs)("li",{children:[t,Object(r.jsxs)("span",{children:[" ",Object(r.jsx)("i",{id:e,class:"far fa-edit",onClick:v,style:{marginRight:"20px"}}),Object(r.jsx)("i",{id:e,onClick:g,className:"fas fa-trash-alt"})]})]},e)})),O?Object(r.jsx)("li",{children:n[h]}):null]})]}),O?Object(r.jsx)("button",{onClick:function(){p(!1),n[h]=l,d("")},children:"Confirm"}):null]})},l=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{style:{color:"#fff"},children:"Best Todo App"}),Object(r.jsx)(j,{})]})};a.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5927c305.chunk.js.map