(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),i=a(11),u=a(15),c=a(16),o=a(21),d=a(18),m=a(17),p=a(5),f=a(9),h=a(20),v=a(12),I=a(19),E=a(10),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={userInput:"",list:[]},n}return Object(c.a)(a,[{key:"updateInput",value:function(e){this.setState({userInput:e})}},{key:"addItem",value:function(){if(""!==this.state.userInput){var e={id:Math.random(),value:this.state.userInput},t=Object(i.a)(this.state.list);t.push(e),this.setState({list:t,userInput:""})}}},{key:"deleteItem",value:function(e){var t=Object(i.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement(p.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3rem",fontWeight:"bolder"}},"TODO LIST"),r.a.createElement("hr",null),r.a.createElement(p.a,null,r.a.createElement(f.a,{md:{span:5,offset:4}},r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(I.a,{placeholder:"add item . . . ",size:"lg",value:this.state.userInput,onChange:function(t){return e.updateInput(t.target.value)},"aria-label":"add something","aria-describedby":"basic-addon2"}),r.a.createElement(v.a.Append,null,r.a.createElement(h.a,{variant:"dark",size:"lg",onClick:function(){return e.addItem()}},"ADD"))))),r.a.createElement(p.a,null,r.a.createElement(f.a,{md:{span:5,offset:4}},r.a.createElement(E.a,null,this.state.list.map((function(t){return r.a.createElement(E.a.Item,{variant:"dark",action:!0,onClick:function(){return e.deleteItem(t.id)}},t.value)}))))))}}]),a}(n.Component);a(31);s.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e7b2fe97.chunk.js.map