(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=(a(23),a(5)),s=a(6),o=a(8),m=a(7),u=a(9),d=(a(25),a(27)),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleInputChange=function(t){var a=e.state.data.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t.target.value.toLowerCase())?e:null});e.setState({result:a})},e.state={data:[],result:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:3000/user").then(function(e){return e.json()}).then(function(t){e.setState({data:t,result:t})})}},{key:"render",value:function(){var e=this,t=this.state.result,a=t.length?t.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{style:{width:"10%"}},l.a.createElement(d.a,{className:"btn",to:"/"+e.id},"Szczeg\xf3\u0142y")),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.model),l.a.createElement("td",null,e.serialNumber))}):l.a.createElement("tr",{className:"center"},l.a.createElement("td",null,"Brak danych"));return l.a.createElement("div",{className:"container flex"},l.a.createElement("input",{placeholder:"Szukaj...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),l.a.createElement("p",null,this.state.searchValue),l.a.createElement("div",null,l.a.createElement("table",{className:"highlight centered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Imi\u0119 i nazwisko"),l.a.createElement("th",null,"Model"),l.a.createElement("th",null,"Nr. Seryjny"))),l.a.createElement("tbody",null,a))))}}]),t}(n.Component),p=a(34),E=a(35),v=a(32),g=a(10),f=a(11),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],service:[],formStyle:{display:"none"}},a.handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.post_id,n=Array.prototype.slice.call(e.target).filter(function(e){return e.name}).reduce(function(e,t){return Object(f.a)({},e,Object(g.a)({},t.name,t.value))},{}),l=Math.random().toString(36).substr(2,9);n.id=l,a.state.data.service.push(n);var r=JSON.stringify(a.state.data);fetch("http://localhost:3000/user/"+t+"/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:r}),a.setState({formStyle:{display:"none"}})},a.handleChange=function(e){e.preventDefault(),"name"===e.target.name&&a.setState({name:e.target.value}),"model"===e.target.name&&a.setState({model:e.target.value}),"serialNumber"===e.target.name&&a.setState({serialNumber:e.target.value}),"description"===e.target.name&&a.setState({description:e.target.value}),"parts"===e.target.name&&a.setState({parts:e.target.value}),"cost"===e.target.name&&a.setState({cost:e.target.value}),"inputDate"===e.target.name&&a.setState({inputDate:e.target.value}),"outputDate"===e.target.name&&a.setState({outputDate:e.target.value})},a.handleClick=function(){console.log("PROPS ",a.props),"none"===a.state.formStyle.display?a.setState({formStyle:{display:"block",position:"fixed",top:"2rem",left:"0",zIndex:"99999",padding:"30px",maxHeight:"100%"}}):a.setState({formStyle:{display:"none"}})},a.handleClickEdit=function(e){console.log(e.refs)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.post_id;fetch("http://localhost:3000/user/"+t).then(function(e){return e.json()}).then(function(t){e.setState({data:t,service:t.service})})}},{key:"render",value:function(){var e=this,t=this.state.data?l.a.createElement("div",null,l.a.createElement("h4",{className:"center"},this.state.data.name," ",this.state.data.model," ",this.state.data.serialNumber)):l.a.createElement("h1",{className:"center"},"Wczytywanie..."),a=this.state.service.length?this.state.service.map(function(t,a){return l.a.createElement("tr",{key:t.id,onClick:e.handleClickEdit},l.a.createElement("td",null,l.a.createElement("button",{onClick:e.handleClickEdit,className:"waves-effect waves-light btn"},"Edytuj")),l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.parts),l.a.createElement("td",null,t.cost),l.a.createElement("td",null,t.inputDate),l.a.createElement("td",null,t.outputDate))}):l.a.createElement("tr",{className:"center"},l.a.createElement("td",null,"Brak danych"));return l.a.createElement("div",{className:"container center"},t,l.a.createElement("button",{className:"waves-effect waves-light btn",onClick:this.handleClick},"Dodaj now\u0105 napraw\u0119"),l.a.createElement("div",{className:"modal",style:this.state.formStyle},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("button",{className:"btn",style:{float:"right",top:"0",zIndex:"9999999"},onClick:this.handleClick},"X")),l.a.createElement("h6",null,"Dodaj nowy wpis"),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"description",value:this.state.service.description,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"description"},"Opis:")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"parts",value:this.state.service.parts,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"parts"},"Cz\u0119\u015bci:")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"number",name:"cost",value:this.state.service.cost,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"cost"},"Koszt:")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",name:"inputDate",value:this.state.service.inputDate,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"inputDate"},"Data przyj\u0119cia:")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",name:"outputDate",value:this.state.service.outputDate,onChange:this.handleChange,required:!0}),l.a.createElement("label",{htmlFor:"outputDate"},"Data wydania:")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("input",{className:"btn",type:"submit",value:"Dodaj"})))),l.a.createElement("table",{className:"striped highlight"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Opis"),l.a.createElement("th",null,"Cze\u015bci"),l.a.createElement("th",null,"Koszt"),l.a.createElement("th",null,"Data przyj\u0119cia"),l.a.createElement("th",null,"Data wydania"))),l.a.createElement("tbody",null,a)))}}]),t}(n.Component),y=a(33),N=function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"nav-wrapper blue darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"/",className:"brand-logo"},"Logo-place"),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(y.a,{to:"/"},"Baza g\u0142\xf3wna")),l.a.createElement("li",null,l.a.createElement(y.a,{to:"/editor"},"Dodaj sprz\u0119t")),l.a.createElement("li",null,l.a.createElement(y.a,{to:"/help"},"Pomoc"))))))},S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){t.preventDefault(),"name"===t.target.name&&e.setState({name:t.target.value}),"model"===t.target.name&&e.setState({model:t.target.value}),"serialNumber"===t.target.name&&e.setState({serialNumber:t.target.value}),"description"===t.target.name&&e.setState({description:t.target.value}),"parts"===t.target.name&&e.setState({parts:t.target.value}),"cost"===t.target.name&&e.setState({cost:t.target.value}),"inputDate"===t.target.name&&e.setState({inputDate:t.target.value}),"outputDate"===t.target.name&&e.setState({outputDate:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=Array.prototype.slice.call(t.target).filter(function(e){return e.name}).reduce(function(e,t){return Object(f.a)({},e,Object(g.a)({},t.name,t.value))},{});console.log(a),a.service=[],console.log(a);var n=Math.random().toString(36).substr(2,9);console.log(n),a.id=n;var l=e.state.data;l.push(a),e.setState({data:l,name:"",model:"",serialNumber:"",description:"",parts:"",cost:"",inputDate:"",outputDate:"",service:[{}]});var r=JSON.stringify(a);fetch("http://localhost:3000/user",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:r})},e.state={data:[],name:"",model:"",serialNumber:"",description:"",parts:"",cost:"",inputDate:"",outputDate:"",service:[{}]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container center"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Dodaj nowy sprz\u0119t"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:"name",required:!0}),l.a.createElement("label",{htmlFor:"name"},"Imi\u0119 i nazwisko w\u0142a\u015bciciela")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"model",value:this.state.model,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"model"},"Model:")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"serialNumber",value:this.state.serialNumber,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"serialNumber"},"Nr. Seryjny:")),l.a.createElement("input",{type:"submit",value:"Dodaj"}))))}}]),t}(n.Component),j=function(){return l.a.createElement("div",{className:"center"},l.a.createElement("h1",null,"Pomoc - placeholder"))},C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(E.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:h}),l.a.createElement(v.a,{exact:!0,path:"/editor",component:S}),l.a.createElement(v.a,{exact:!0,path:"/help",component:j}),l.a.createElement(v.a,{exact:!0,path:"/:post_id",component:b}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.dea1931b.chunk.js.map