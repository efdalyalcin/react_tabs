(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),s=n(1),d=(n(10),n(4)),b=n.n(d),o=(n(11),n(0)),r=function(t){var e=t.tabs,n=t.selectedTabId,c=t.selectTabId;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"tabs__list",children:e.map((function(t){return Object(o.jsx)("button",{type:"button",className:b()("tabs__item",{"tabs__item--selected":t.id===n}),onClick:function(){n!==t.id&&c(t.id)},children:t.title},t.id)}))}),Object(o.jsx)("div",{className:"tabs__content","data-cy":"tab-content",children:function(t){var n;return null===(n=e.find((function(e){return t===e.id})))||void 0===n?void 0:n.content}(n)})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(l[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Selected tab is ".concat(function(t){var e;return null===(e=l.find((function(e){return e.id===t})))||void 0===e?void 0:e.title}(n))}),Object(o.jsx)(r,{tabs:l,selectedTabId:n,selectTabId:function(t){c(t)}})]})};i.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9c1efc22.chunk.js.map