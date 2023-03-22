"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[150],{150:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,c,a,i,s,o,u,p,l=r(439),d=r(791),x=r(87),f=r(689),h=r(234),g=r(820),v=r(647),b=r(168),m=r(444),j=m.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  gap: 32px;\n"]))),w=m.ZP.img(c||(c=(0,b.Z)(["\n  object-fit: cover;\n  width: 280px;\n  height: 100%;\n"]))),y=m.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),Z=m.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n"]))),k=r(184),_=function(n){var e=n.title,r=n.release,t=n.poster,c=n.score,a=n.overview,i=n.genres;return(0,k.jsxs)(j,{children:[(0,k.jsx)("div",{children:(0,k.jsx)(w,{src:t?"https://image.tmdb.org/t/p/w500"+t:v})}),(0,k.jsxs)(y,{children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{children:[e," (",(0,k.jsx)("span",{children:r&&r.slice(0,4)}),")"]}),(0,k.jsxs)("p",{children:["User Score: ",(0,k.jsxs)("span",{children:[Math.round(10*c),"%"]})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:a})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("b",{children:"Genres"}),(0,k.jsx)(Z,{children:i?i.slice(0,3).map((function(n){var e=n.id,r=n.name;return(0,k.jsxs)("span",{children:[r," "]},e)})):""})]})]})]})},P=r(723),U=m.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  & a {\n    max-width: 120px;\n    padding: 4px;\n    text-decoration: none;\n  }\n"]))),S=m.ZP.button(o||(o=(0,b.Z)(["\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 12px 4px 8px;\n  font-weight: 700;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background-color: #f5f4fa;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #c4c4c4;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n  &:focus {\n    background-color: #c4c4c4;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),z=m.ZP.ul(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px;\n  margin: 0;\n  list-style: none;\n  border-top: 1px solid #ececec;\n  border-bottom: 1px solid #ececec;\n"]))),C=m.ZP.li(p||(p=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.17;\n  letter-spacing: 0.03em;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  & a:hover {\n    color: red;\n  }\n"]))),T=function(){var n,e,r=(0,d.useState)({}),t=(0,l.Z)(r,2),c=t[0],a=t[1],i=(0,f.UO)().movieId,s=(0,f.TH)(),o=(0,d.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,d.useEffect)((function(){(0,h.Pg)(i).then((function(n){a(n)})).catch((function(n){return console.log(n)}))}),[i]),(0,k.jsxs)(U,{children:[(0,k.jsx)(x.rU,{to:o.current,children:(0,k.jsxs)(S,{children:[(0,k.jsx)(g.kyg,{size:"18"}),(0,k.jsx)("span",{children:"Go back"})]})}),(0,k.jsx)(_,{title:c.title||c.name,release:c.release_date,poster:c.poster_path,score:c.vote_average,overview:c.overview,genres:c.genres}),(0,k.jsxs)(z,{children:[(0,k.jsx)(C,{children:(0,k.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)(C,{children:(0,k.jsx)(x.rU,{to:"reviews",children:"Review"})})]}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)(P.Z,{}),children:(0,k.jsx)(f.j3,{})})]})}},234:function(n,e,r){r.d(e,{Hg:function(){return u},IQ:function(){return h},Pg:function(){return x},Tn:function(){return v},XT:function(){return l}});var t=r(861),c=r(757),a=r.n(c),i=r(243),s="https://api.themoviedb.org/3",o="02950a717996af9fdef4339cc0050bf4";function u(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/trending/all/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},647:function(n,e,r){n.exports=r.p+"static/media/placeholder.1c03061f51b504e0d479.webp"}}]);
//# sourceMappingURL=150.86d375a0.chunk.js.map