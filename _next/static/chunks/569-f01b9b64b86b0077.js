"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{1569:function(d,b,a){a.r(b),a.d(b,{default:function(){return l}});var e=a(5893),f=a(7294),c=a(9008),g=a.n(c),h=a(797),i={nodes:[{id:"Liam",group:4,image:"liam.jpg"},{id:"Millie",group:8,image:"millie.jpg"},{id:"Chloe",group:1,image:"chloe.jpg"},{id:"Toby",group:1,image:"toby.jpg"},{id:"Faye",group:1,image:"faye.jpg"},{id:"Teddy",group:12,image:"teddy.jpg"},{id:"Kaz",group:1,image:"kaz.jpg"},{id:"Tyler",group:23,image:"tyler.jpg"},{id:"Jake",group:1,image:"jake.jpg"},{id:"Liberty",group:1,image:"liberty.jpg"},{id:"Aaron S",group:42,image:"aaron-s.jpg"},{id:"Mary",group:29,image:"mary.jpg"},{id:"Brett",group:44,image:"brett.jpg"},{id:"Priya",group:42,image:"priya.jpg"},{id:"Matthew",group:29,image:"matthew.jpg"},{id:"Abigail",group:23,image:"abi.jpg"},{id:"Dale",group:29,image:"dale.jpg"},{id:"Amy",group:29,image:"amy.jpg"},{id:"Clarisse",group:29,image:"clarisse.jpg"},{id:"Hugo",group:1,image:"hugo.jpg"},{id:"Sam",group:29,image:"sam.jpg"},{id:"Harry",group:29,image:"harry.jpg"},{id:"Jack",group:29,image:"jack.jpg"},{id:"Kaila",group:29,image:"kaila.jpg"},{id:"Lillie",group:29,image:"lillie.jpg"},{id:"Medhy",group:29,image:"medhy.jpg"},{id:"Salma",group:29,image:"salma.jpg"},{id:"Aaron F",group:1,image:"aaron-f.jpg"},{id:"Lucinda",group:8,image:"lucinda.jpg"},{id:"Georgia",group:23,image:"georgia.jpg"},{id:"AJ",group:17,image:"aj.jpg"},{id:"Danny",group:18,image:"danny.jpg"},{id:"Sharon",group:1,image:"sharon.jpg"},{id:"Brad",group:1,image:"brad.jpg"},{id:"Rachel",group:5,image:"rachel.jpg"},{id:"Chuggs",group:4,image:"chuggs.jpg"},{id:"Shannon",group:1,image:"shannon.jpg"},],links:[{source:"Toby",target:"Kaz",day:"1"},{source:"Faye",target:"Brad",day:"1"},{source:"Kaz",target:"Toby",day:"1"},{source:"Jake",target:"Liberty",day:"1"},{source:"Liberty",target:"Jake",day:"1"},{source:"Hugo",target:"Sharon",day:"1"},{source:"Aaron F",target:"Shannon",day:"1"},{source:"Sharon",target:"Hugo",day:"1"},{source:"Brad",target:"Faye",day:"1"},{source:"Shannon",target:"Aaron F",day:"1"},{source:"Liam",target:"Faye",day:"5"},{source:"Chloe",target:"Hugo",day:"5"},{source:"Faye",target:"Liam",day:"5"},{source:"Hugo",target:"Chloe",day:"5"},{source:"Aaron F",target:"Sharon",day:"5"},{source:"Sharon",target:"Aaron F",day:"5"},{source:"Liam",target:"Millie",day:"14"},{source:"Millie",target:"Liam",day:"14"},{source:"Chloe",target:"Toby",day:"14"},{source:"Toby",target:"Chloe",day:"14"},{source:"Faye",target:"Teddy",day:"14"},{source:"Teddy",target:"Faye",day:"14"},{source:"Kaz",target:"Aaron F",day:"14"},{source:"Aaron F",target:"Kaz",day:"14"},{source:"Lucinda",target:"Brad",day:"14"},{source:"Hugo",target:"AJ",day:"19"},{source:"Lucinda",target:"Danny",day:"19"},{source:"AJ",target:"Hugo",day:"19"},{source:"Danny",target:"Lucinda",day:"19"},{source:"Toby",target:"Abigail",day:"25"},{source:"Kaz",target:"Tyler",day:"25"},{source:"Tyler",target:"Kaz",day:"25"},{source:"Abigail",target:"Toby",day:"25"},{source:"Aaron F",target:"Lucinda",day:"25"},{source:"Lucinda",target:"Aaron F",day:"25"},{source:"Chloe",target:"Dale",day:"32"},{source:"Toby",target:"Mary",day:"32"},{source:"Faye",target:"Sam",day:"32"},{source:"Kaz",target:"Matthew",day:"32"},{source:"Tyler",target:"Clarisse",day:"32"},{source:"Mary",target:"Toby",day:"32"},{source:"Matthew",target:"Kaz",day:"32"},{source:"Dale",target:"Chloe",day:"32"},{source:"Amy",target:"Hugo",day:"32"},{source:"Clarisse",target:"Tyler",day:"32"},{source:"Hugo",target:"Amy",day:"32"},{source:"Sam",target:"Faye",day:"32"},{source:"Mary",target:"Sam",day:"37"},{source:"Abigail",target:"Dale",day:"37"},{source:"Dale",target:"Abigail",day:"37"},{source:"Sam",target:"Mary",day:"37"},{source:"Aaron S",target:"Mary",day:"45"},{source:"Mary",target:"Aaron S",day:"45"},{source:"Brett",target:"Priya",day:"45"},{source:"Priya",target:"Brett",day:"45"},]},j=a(7170),k=function(){var c,d,k,l=(0,f.useRef)(null),m=(0,f.useRef)(null),n=(0,f.useRef)(null),o=(0,f.useRef)(null),g=(d=(c=(0,f.useState)({width:void 0,height:void 0}))[0],k=c[1],(0,f.useEffect)(function(){var a=function(){k({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),d),a=g.width,b=g.height,p=a/2,q=b/2,r=j.PKp(j.UCG).domain((0,h.Z)(new Set(i.nodes.map(function(a){return a.group})))),s=j.PKp(j.Cn1).domain((0,h.Z)(new Set(i.links.map(function(a){return a.day}))));return(0,f.useEffect)(function(){if(a&&b){var g=j.Ys(l.current).attr("preserveAspectRatio","none").attr("viewbox",[0,0,1.2*a,1.2*b]),k=j.Ys(m.current);g.append("defs").selectAll("marker").data(["node"]).enter().append("marker").attr("id",function(a){return a}).attr("viewBox","0 -2.5 5 5").attr("refX",5).attr("refY",0).attr("markerWidth",5).attr("markerHeight",5).attr("orient","auto").append("path").attr("d","M0,-2.5L5,0L0,2.5").attr("fill","#999");var t=i.links,u=i.nodes,v=j.A4v(u).force("link",j.Fsl(t).id(function(a){return a.id}).distance(90)).force("charge",j.q5i().strength(-350).distanceMax(150)).force("collision",j.Hh().radius(24)).force("center",j.wqt(p,q)),z=function(d){var a=function(a){a.active||d.alphaTarget(.3).restart(),a.subject.fx=a.subject.x,a.subject.fy=a.subject.y},b=function(a){a.subject.fx=a.x,a.subject.fy=a.y},c=function(a){a.active||d.alphaTarget(0),a.subject.fx=null,a.subject.fy=null,console.log(a)};return j.ohM().on("start",a).on("drag",b).on("end",c)},D=k.append("g").selectAll("line").data(t).join("line").attr("stroke",function(a){return s(a.day)}).attr("width","4px"),c=k.append("g").attr("class","node").selectAll("g").data(u).join("g");c.call(z(v));var d=c.append("g");d.append("clipPath").attr("id",function(a){return"clipCircle"}).append("circle").attr("r",16).attr("transform","translate(18,16)"),d.append("circle").attr("r",16).attr("transform","translate(2,0)").attr("stroke",function(a){return r(a.group)}).attr("stroke-width",4),d.append("svg:image").attr("width",36).attr("height",36).attr("xlink:href",function(a){return"./headshots/".concat(a.image)}).attr("clip-path","url(#clipCircle)").attr("transform","translate(-16,-16)"),c.append("text").text(function(a){return"".concat(a.id," - ").concat(a.group)}).attr("text-anchor","middle").attr("transform","translate(0,32)").attr("font-size",5),v.on("tick",function(){D.attr("x1",function(a){return a.source.x}).attr("y1",function(a){return a.source.y}).attr("x2",function(a){return a.target.x}).attr("y2",function(a){return a.target.y}),c.attr("transform",function(a){return"translate(".concat(a.x,",").concat(a.y,")")})});var A=function(a){j.Ys(m.current).attr("transform",a.transform)},B=j.sPX().scaleExtent([.5,2]).on("zoom",A);g.call(B);var w=j.Ys(n.current).append("g").attr("transform","translate(10,10)"),C=(0,h.Z)(new Set(i.nodes.map(function(a){return a.group}))).sort(function(a,b){return a-b});w.append("rect").attr("x",0).attr("y",0).attr("transform","translate(-10, -15)").attr("fill","#f4c7e2").attr("width",140).attr("height",280);var e=w.selectAll("circle").data(C).join("g");e.append("text").text("Enter Legend").attr("x",5).attr("y",15),e.append("circle").attr("r",6).attr("fill","none").attr("stroke",function(a){return r(a)}).attr("stroke-width",2).attr("cx",5).attr("cy",function(b,a){return 20*a+35}),e.append("text").text(function(a){return"Entered day ".concat(a)}).attr("font-size",12).attr("x",16).attr("y",function(b,a){return 20*a+40});var x=j.Ys(o.current).append("g").attr("transform","translate(10,10)"),y=(0,h.Z)(new Set(i.links.map(function(a){return a.day}))).sort(function(a,b){return a-b});console.log(y,"r"),x.append("rect").attr("x",a).attr("y",0).attr("fill","#f4c7e2").attr("width",140).attr("height",210);var f=x.selectAll("circle").data(y).join("g");f.append("text").text("Couple Legend").attr("x",a+10).attr("y",25),f.append("g").attr("transform",function(c,b){return"translate(".concat(a+15,", ").concat(20*b+40,")")}).append("line").attr("fill","none").attr("stroke",function(a){return s(a)}).attr("stroke-width",2).attr("x1",function(a,b){return 8}).attr("x2",function(a,b){return 0}).attr("y1",function(a,b){return 0}).attr("y2",function(a,b){return 8}),f.append("text").text(function(a){return"Coupled day ".concat(a)}).attr("font-size",12).attr("x",a+32).attr("y",function(b,a){return 20*a+50})}},[a,b]),(0,e.jsxs)("svg",{ref:l,width:"100%",height:b,children:[(0,e.jsx)("g",{ref:m,transform:"translate(100,0)"}),(0,e.jsxs)("g",{transform:"translate(".concat(20,", 0)"),children:[(0,e.jsx)("rect",{width:160,height:320,x:0,fill:"#f4c7e2"}),(0,e.jsxs)("g",{transform:"translate(10, 0)",children:[(0,e.jsx)("text",{x:0,y:25,className:"font-bold",children:"Enter Legend"}),(0,h.Z)(new Set(i.nodes.map(function(a){return a.group}))).map(function(a,b){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("g",{transform:"translate(10, ".concat(25*b+50,")"),children:[(0,e.jsx)("circle",{r:4,cx:0,cy:0,stroke:r(a),strokeWidth:"2",fill:"none"}),(0,e.jsxs)("text",{x:16,y:4,className:"text-xs",children:["Entered on day ",a.group]},b)]})})})]})]}),(0,e.jsxs)("g",{transform:"translate(".concat(a-200,", 0)"),children:[(0,e.jsx)("rect",{width:160,height:320,x:0,fill:"#f4c7e2"}),(0,e.jsxs)("g",{transform:"translate(10, 0)",children:[(0,e.jsx)("text",{x:0,y:25,className:"font-bold",children:"Couple Legend"}),j.w6H(11).map(function(a,b){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("g",{transform:"translate(0, ".concat(25*a+40,")"),children:(0,e.jsx)("line",{x1:12,x2:0,y1:0,y2:12,stroke:s(a),strokeWidth:"2"})}),(0,e.jsxs)("text",{x:16,y:25*a+52,className:"text-xs",children:["Coupled on day ",a]},b)]})})]})]})]})},l=function(){return(0,f.useCallback)(function(a){return"<div>".concat(a.id,"</div>")},[]),(0,e.jsxs)("div",{className:"bg-[#f7d6e9] h-full",children:[(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:"Love Island Visualizations"}),(0,e.jsx)("meta",{name:"description",content:"Love Island Data Visualizations"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,e.jsxs)("main",{children:[(0,e.jsx)("h1",{className:"text-center text-5xl font-bold pt-8 text-red-500",children:"Love Island"}),(0,e.jsx)("h2",{className:"text-center text-2xl font-bold text-red-500",children:"Season 7"}),(0,e.jsx)(k,{})]})]})}}}])