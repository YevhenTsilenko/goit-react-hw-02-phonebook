(this.webpackJsonpwebpack=this.webpackJsonpwebpack||[]).push([[0],{118:function(t,e,n){t.exports={button:"Button_button__BmdKb"}},124:function(t,e,n){},134:function(t,e){},136:function(t,e){},147:function(t,e){},149:function(t,e){},16:function(t,e,n){t.exports={form:"ContactForm_form__3LA6b",label:"ContactForm_label__284DI",form_input:"ContactForm_form_input__2o6CK"}},176:function(t,e){},178:function(t,e){},179:function(t,e){},184:function(t,e){},186:function(t,e){},192:function(t,e){},194:function(t,e){},213:function(t,e){},225:function(t,e){},228:function(t,e){},232:function(t,e,n){},234:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),r=n(116),o=n.n(r),i=(n(124),n(119)),u=n(33),s=n(34),l=n(36),b=n(35),m=n(117),f=n.n(m),d=(n(232),n(118)),j=n.n(d),h=n(2);function p(t){var e=t.type,n=t.onClick,a=t.btnName,c=t.disabled;return Object(h.jsx)("button",{type:e,className:j.a.button,onClick:n,disabled:c,children:a})}var v=n(16),O=n.n(v),x=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number;return Object(h.jsxs)("form",{onSubmit:this.onFormSubmit,className:O.a.form,children:[Object(h.jsxs)("label",{className:O.a.label,children:["Name",Object(h.jsx)("input",{className:O.a.form_input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:function(e){t.setState({name:e.currentTarget.value})}})]}),Object(h.jsxs)("label",{className:O.a.label,children:["Number",Object(h.jsx)("input",{className:O.a.form_input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:a,onChange:function(e){t.setState({number:e.currentTarget.value})}})]}),Object(h.jsx)(p,{type:"submit",btnName:"Add contact",disabled:!(n&&a),className:O.a.form_btn})]})}}]),n}(a.Component),_=n(61),C=n.n(_);function g(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:C.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:C.a.input})]})}var S=n(62),y=n.n(S);function N(t){var e=t.contacts,n=t.onDelete;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:y.a.contact,children:[Object(h.jsxs)("span",{children:[a,": ",c]}),Object(h.jsx)("button",{className:y.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var F=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmit=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," already exists")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[{id:f.a.generate(),name:n,number:a}])}}))},t.hendleRemove=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t.onFilter=function(e){t.setState({filter:e.currentTarget.value})},t.hendleSearch=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:this.handleSubmit}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(g,{value:t,onChange:this.onFilter}),Object(h.jsx)(N,{contacts:this.hendleSearch(),onDelete:this.hendleRemove})]})}}]),n}(a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),A()},61:function(t,e,n){t.exports={label:"Filter_label__2ziPp",input:"Filter_input__1TyLv"}},62:function(t,e,n){t.exports={contact:"ContactList_contact__IJLxa",button:"ContactList_button__BT7X-"}}},[[234,1,2]]]);
//# sourceMappingURL=main.c530cb96.chunk.js.map