(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(t,e,o){t.exports=o(18)},,,,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),c=o(3),d=o.n(c),l=(o(14),o(1)),s=o(4),i=o(5),r=o(7),u=o(6),p=o(8),m=(o(15),o(16),function(t){return n.a.createElement("div",{className:"head"},n.a.createElement("span",null,t.title),n.a.createElement("button",{className:"add",onClick:function(){t.added()}},"+"))}),f=(o(17),function(t){var e=["text"],o="unchecked";t.completed&&(o="checked");return t.completed&&e.push("done"),n.a.createElement("div",null,n.a.createElement("div",{className:"todo"},n.a.createElement("div",{checked:o,className:o,onClick:function(e){t.done()}}),n.a.createElement("input",{type:"text",className:e.join(" "),onChange:function(e){!1===t.todo.completed&&t.updateValue(e.target.value,t.index)},value:t.todo.title,placeholder:"Enter todo"}),n.a.createElement("button",{onClick:t.delete},"X")))}),h=function(t){function e(){var t,o;Object(s.a)(this,e);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(o=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={todos:[]},o.todoToggled=function(t){var e=Object(l.a)(o.state.todos);if(""!==e[t].title){e[t].completed=!e[t].completed;var a=e[t];a.completed?(e.splice(t,1),e.push(a),o.setState({todos:e})):(e.splice(t,1),e.unshift(a),o.setState({todos:e}))}},o.delete=function(t){var e=Object(l.a)(o.state.todos);e[t].completed?(e.splice(t,1),o.setState({todos:e})):window.confirm("Are you sure?")&&(e.splice(t,1),o.setState({todos:e}))},o.addTodo=function(){var t=Object(l.a)(o.state.todos);0===t.length||""!==t[0].title?(t.unshift({title:"",completed:!1}),o.setState({todos:t})):alert("Enter todo first")},o.updateValue=function(t,e){var a={title:t,completed:!1},n=Object(l.a)(o.state.todos);n.splice(e,1,a),o.setState({todos:n})},o}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=[];localStorage.getItem("todos")&&(t=JSON.parse(localStorage.getItem("todos")),this.setState({todos:t}))}},{key:"componentDidUpdate",value:function(){var t=Object(l.a)(this.state.todos);localStorage.setItem("todos",JSON.stringify(t))}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e,o){return n.a.createElement(f,{todo:e,done:function(){return t.todoToggled(o)},key:o+1,completed:e.completed,delete:function(){return t.delete(o)},updateValue:t.updateValue,index:o})}));return n.a.createElement("div",{className:"App"},n.a.createElement(m,{added:this.addTodo,title:this.props.title}),e)}}]),e}(a.Component);d.a.render(n.a.createElement(h,{title:"Todo List"}),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8be093ce.chunk.js.map