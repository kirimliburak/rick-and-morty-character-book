(this["webpackJsonprick-and-morty-character-book"]=this["webpackJsonprick-and-morty-character-book"]||[]).push([[0],{15:function(t,e,c){},17:function(t,e,c){},18:function(t,e,c){},19:function(t,e,c){},20:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),a=c.n(r),s=c(4),i=c.n(s),o=(c(15),c(3)),h=c.n(o),u=c(5),j=c(6),l=c(7),f=c(9),b=c(8),d=(c(17),c(18),function(t){return Object(n.jsxs)("div",{className:"character-container",children:[Object(n.jsx)("img",{src:t.character.image,alt:"character",className:"character-image"}),Object(n.jsx)("h2",{children:t.character.name}),Object(n.jsx)("p",{children:t.character.species})]})}),p=(c(19),function(t){return Object(n.jsx)("div",{className:"character-list",children:t.characters.map((function(t){return Object(n.jsx)(d,{character:t},t.id)}))})}),m=function(t){Object(f.a)(c,t);var e=Object(b.a)(c);function c(){var t;return Object(j.a)(this,c),(t=e.call(this)).state={characters:[]},t}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var t=Object(u.a)(h.a.mark((function t(){var e,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=1,c=[];case 2:if(!(e<35)){t.next=8;break}return t.next=5,fetch("https://rickandmortyapi.com/api/character/?page=".concat(e)).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){return c.push(t)}))}));case 5:e++,t.next=2;break;case 8:this.setState({characters:c},(function(){})),console.log("Characters: "),console.log(this.state.characters);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Rick and Morty Character Book"}),Object(n.jsx)(p,{characters:this.state.characters})]})}}]),c}(r.Component),O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;c(t),n(t),r(t),a(t),s(t)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.e3886893.chunk.js.map