(this["webpackJsonppractice-demo"]=this["webpackJsonppractice-demo"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(8),s=c.n(i),a=c(7),o=c(5),l=c(6),r=(c(13),c.p+"static/media/check.f306c526.png"),d=c(0);function u(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),j=u[0],b=u[1];return Object(d.jsx)("div",{className:"cont",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"input-holder",children:[Object(d.jsx)("input",{className:"inputField",type:"text",placeholder:"Enter task....",value:c,onInput:function(e){i(e.target.value)}}),Object(d.jsx)("button",{className:"addButton",onClick:function(){var e={id:Math.floor(1e3*Math.random()),value:c,isCompleted:!1};b([].concat(Object(o.a)(j),[e]))},children:"ADD"})]}),Object(d.jsx)("ul",{children:j.map((function(e){return Object(d.jsxs)("li",{className:e.isCompleted?"cross":"none",children:[e.value,Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("button",{className:"btn1",onClick:function(t){return c=e.id,void b(j.filter((function(e){return e.id!==c})));var c},children:"delete"}),Object(d.jsx)("button",{className:"btn2",onClick:function(t){return function(e,t){var c=j.findIndex((function(e){return e.id===t})),n=Object(o.a)(j);n[c]=Object(a.a)(Object(a.a)({},n[c]),{},{isCompleted:!0}),console.log(n[c]),b(n)}(0,e.id)},children:"completed"}),Object(d.jsx)("img",{className:e.isCompleted?"show":"hide",src:r,alt:""})]})]},e.id)}))})]})})}s.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0c941c8c.chunk.js.map