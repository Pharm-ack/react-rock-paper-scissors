(this["webpackJsonprock-papper-scissors-app"]=this["webpackJsonprock-papper-scissors-app"]||[]).push([[0],{11:function(s,c,e){"use strict";e.r(c);var r=e(1),a=e.n(r),t=e(5),i=e.n(t),n=(e(4),e(2)),o=e.p+"static/media/icon-paper.8b57a6b1.svg",j=e.p+"static/media/icon-scissors.3b1a5d7e.svg",l=e.p+"static/media/icon-rock.476e90a9.svg",p=e(0),b=function(s){var c=s.score;return Object(p.jsx)("div",{className:"header",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)("h2",{className:"rock",children:"ROCK"}),Object(p.jsx)("h2",{className:"paper",children:"PAPER"}),Object(p.jsx)("h2",{className:"scissors",children:"SCISSORS"})]}),Object(p.jsxs)("div",{className:"scores",children:[Object(p.jsx)("div",{className:"score",children:"score"}),Object(p.jsx)("div",{className:"num",children:c})]})]})})},d=function(){return Object(p.jsx)("div",{className:"rules",children:Object(p.jsx)("span",{children:"Rules"})})};var O=function(){var s=Object(r.useState)(null),c=Object(n.a)(s,2),e=c[0],a=c[1],t=Object(r.useState)(null),i=Object(n.a)(t,2),O=i[0],u=i[1],h=Object(r.useState)(null),m=Object(n.a)(h,2),x=(m[0],m[1]),k=Object(r.useState)(0),v=Object(n.a)(k,2),N=v[0],f=v[1],S=["rock","paper","scissors"],g=function(s){a(s),w()},w=function(){var s=S[Math.floor(Math.random()*S.length)];u(s)};return Object(r.useEffect)((function(){switch(e+O){case"scissorspaper":case"rockscissors":case"paperrock":x("YOU WIN!"),f(N+1);break;case"paperscissors":case"scissorsrock":case"rockpaper":x("YOU LOSE!"),f(N-1);break;case"rockrock":case"paperpaper":case"scissorsscissors":x("ITS A DRAW!"),f(N)}}),[e,O]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{score:N}),Object(p.jsxs)("div",{className:"middle",children:[Object(p.jsx)("div",{className:"wrapper btn-circle btn-paper",children:Object(p.jsx)("img",{src:o,onClick:function(){return g(S[1])},alt:"paper"})}),Object(p.jsx)("div",{className:"wrapper btn-circle btn-scissors",children:Object(p.jsx)("img",{src:j,onClick:function(){return g(S[2])},alt:"scissors"})}),Object(p.jsx)("div",{className:"wrapper btn-circle btn-rock",children:Object(p.jsx)("img",{src:l,onClick:function(){return g(S[0])},alt:"rock"})})]}),Object(p.jsx)(d,{})]})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))},4:function(s,c,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.eecd2085.chunk.js.map