(this.webpackJsonpcrash=this.webpackJsonpcrash||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(4),c=n.n(a),l=(n(13),n(3)),r=n(5),d=n(6),o=n(8),u=n(7),h=n.p+"static/media/todoLogo.2e12d8f9.png",j=(n(14),n(0)),b=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={newItem:"",list:[]},i}return Object(d.a)(n,[{key:"addItem",value:function(t){if(""!==t){var e={id:Date.now(),value:t,isDone:!1},n=Object(l.a)(this.state.list);n.push(e),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(t){var e=Object(l.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"updateInput",value:function(t){this.setState({newItem:t})}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:h,width:"80",height:"80",className:"logo"}),Object(j.jsx)("h1",{className:"app-title",children:"TODO APP"})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h4",{className:"main-text",children:"ADD AN EVENT"}),Object(j.jsxs)("div",{className:"todoContainer",children:[Object(j.jsx)("input",{type:"text",className:"input-text",placeholder:"Write a todo",required:!0,value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.value)}}),Object(j.jsx)("button",{className:"add-btn",onClick:function(){return t.addItem(t.state.newItem)},disabled:!this.state.newItem.length,children:"Add Todo"})]}),Object(j.jsx)("div",{className:"list",children:Object(j.jsx)("ul",{children:this.state.list.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("input",{type:"checkbox",name:"idDone",checked:e.isdone,onChange:function(){}}),e.value,Object(j.jsx)("button",{className:"btn",onClick:function(){return t.deleteItem(e.id)},children:"Delete"})]},e.id)}))})})]})]})}}]),n}(s.a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),a(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a3295a4c.chunk.js.map