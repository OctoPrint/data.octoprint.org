(this["webpackJsonpdata.octoprint.org"]=this["webpackJsonpdata.octoprint.org"]||[]).push([[0],{279:function(t,e,n){},463:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(29),c=n.n(s),o=(n(279),n(10)),i=n(67),l=n(490),d=n(500),j=n(257),u=n(498),b=n(503),h=n(501),O=n(502),p=n(504),x=n(505),m=n(484),y=n(507),f=n(235),v=n.n(f),g=n(234),k=n.n(g),w=n(2);function S(t){var e=Object(a.useState)(t.darkMode),n=Object(o.a)(e,2),r=n[0],s=n[1];return Object(w.jsx)(y.a,{title:"Toggle dark mode",children:Object(w.jsx)(m.a,{onClick:function(){t.onChange(!r),s(!r)},color:"inherit",children:r?Object(w.jsx)(k.a,{}):Object(w.jsx)(v.a,{})})})}var F=n(485);function A(t){var e=Object(a.useState)(t.days),n=Object(o.a)(e,2),r=n[0],s=n[1];return Object(w.jsx)(y.a,{title:"Switch between 30 and 7 days view",children:Object(w.jsx)(F.a,{color:"inherit",onClick:function(){var e=7===r?30:7;t.onChange(e),s(e)},children:30===r?"Switch to 7 days":"Switch to 30 days"})})}var C=n(25),D=n(491),K=n(495),E=n(496),B=n(139),M=n(140),_=n(111),P=n(109),T=n(255),L=n(112),W=n(497),N=n(135),G=n(49),R=n.n(G),I=n(486),H=n(487),V=n(488),J=n(489),Y=n(34),q=n.n(Y),z=n(92),U=n(236),Q=n.n(U),X="https://data.octoprint.org/export/";function Z(t){return $.apply(this,arguments)}function $(){return($=Object(z.a)(q.a.mark((function t(e){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=X+e,t.next=3,Q.a.get(n);case 3:return t.next=5,t.sent.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function tt(t){var e=Object(a.useState)(!0),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)(),i=Object(o.a)(c,2),l=i[0],d=i[1],j=Object(a.useState)(),u=Object(o.a)(j,2),b=u[0],h=u[1];Object(a.useEffect)((function(){Z(t.stats).then((function(e){d(e._since),h(e._generated),t.onData(e),s(!1)}))}),[t.stats]);var O=function(){return r?Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(w.jsx)(I.a,{})}):Object(w.jsxs)(w.Fragment,{children:[t.children,Object(w.jsxs)(L.a,{variant:"caption",children:["Based on usage data from ",l," until ",b]})]})};return Object(w.jsxs)(H.a,{style:{},children:[Object(w.jsx)(V.a,{title:t.title}),Object(w.jsx)(J.a,{children:Object(w.jsx)(O,{})})]})}var et=n(508),nt=n(249),at=n(252),rt=n(237),st=n.n(rt),ct=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],ot=function(t){return R()(t).format("YYYY-MM-DD HH:00")},it=function(t){return st()(t)},lt=function(t){return R.a.duration(1e3*t).humanize()},dt=function(t,e,n){var a=e.payload,r=a.value,s=a.name,c=a.percent,o=ut(c);return"".concat(s,": ").concat(o,"% (").concat(it(r),")")},jt=function(t){var e=t.x,n=t.y,a=t.fill,r=t.textAnchor,s=t.name,c=t.percent,o=ut(c);return Object(w.jsxs)("text",{x:e,y:n,fill:a,alignmentBaseline:"middle",textAnchor:r,children:[s," (",o,"%)"]})},ut=function(t){return Math.round(100*t,2)};function bt(t){var e=Object(N.a)(),n=Object(l.a)(e.breakpoints.down("md")),a=n||t.legendBelow;return Object(w.jsx)(D.a,{width:"100%",aspect:n?1:1.78,children:Object(w.jsxs)(et.a,{children:[a?Object(w.jsx)(P.a,{formatter:dt}):Object(w.jsx)(P.a,{layout:"vertical",align:"right",verticalAlign:"top",formatter:dt}),Object(w.jsx)(_.a,{contentStyle:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},itemStyle:{color:e.palette.text.primary}}),Object(w.jsx)(nt.a,{data:t.data,label:!n&&jt,startAngle:90,endAngle:-270,outerRadius:"70%",innerRadius:"35%",stroke:e.palette.background.paper,nameKey:t.nameKey,dataKey:t.dataKey,children:t.data.map((function(e,n){return Object(w.jsx)(at.a,{fill:ct[n%ct.length]},"cell-".concat(t.id,"-").concat(n))}))})]})})}function ht(t){var e=Object(a.useState)(),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),d=i[0],j=i[1],u=Object(a.useState)([]),b=Object(o.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)([]),x=Object(o.a)(p,2),m=x[0],y=x[1],f=Object(a.useState)([]),v=Object(o.a)(f,2),g=v[0],k=v[1],S=Object(N.a)(),F=Object(l.a)(S.breakpoints.down("md"));return Object(w.jsxs)(tt,{title:"Instance stats (past ".concat(t.days," days)"),stats:"instance_stats_".concat(t.days,"d.json"),onData:function(t){var e=[],n=[],a=[],r={version:"Others",count:0},c={version:"Others",count:0},o={version:"Others",count:0};for(var i in t.versions){var l={version:i,count:t.versions[i]};e.length<9?e.push(l):r.count+=t.versions[i],i.includes("rc")?a.length<9?a.push(l):o.count+=t.versions[i]:n.length<9?n.push(l):c.count+=t.versions[i]}r.count>0&&e.push(r),o.count>0&&a.push(o),c.count>0&&n.push(c);var d,u=[],b=Object(C.a)(t.histogram.slice(1,-1));try{for(b.s();!(d=b.n()).done;){var h=d.value,p=R()(h.start).valueOf();u.push({start:p,count:h.count})}}catch(x){b.e(x)}finally{b.f()}s(t.count),j(u),O(e),y(n),k(a)},children:[Object(w.jsxs)("p",{children:["Total unique instances: ",r]}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Unique instances per hour"}),Object(w.jsx)(D.a,{width:"100%",aspect:F?1:1.78,children:Object(w.jsxs)(K.a,{data:d,children:[Object(w.jsx)("defs",{children:Object(w.jsxs)("linearGradient",{id:"instanceGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(w.jsx)("stop",{offset:"5%",stopColor:ct[0],stopOpacity:.8}),Object(w.jsx)("stop",{offset:"95%",stopColor:ct[0],stopOpacity:0})]})}),Object(w.jsx)(E.a,{strokeDashArray:"3 3"}),Object(w.jsx)(B.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ot,height:150,axisLine:{stroke:S.palette.text.secondary},tickLine:{stroke:S.palette.text.secondary},tick:{fill:S.palette.text.secondary}}),Object(w.jsx)(M.a,{tickFormatter:it,axisLine:{stroke:S.palette.text.secondary},tickLine:{stroke:S.palette.text.secondary},tick:{fill:S.palette.text.secondary}}),Object(w.jsx)(_.a,{labelFormatter:function(t){return ot(t)},formatter:function(t,e,n){return[it(t),e]},contentStyle:{backgroundColor:S.palette.background.paper,color:S.palette.text.primary}}),Object(w.jsx)(P.a,{}),Object(w.jsx)(T.a,{type:"monotone",dataKey:"count",stroke:ct[0],fillOpacity:1,fill:"url(#instanceGradient)",name:"Instances"})]})}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"OctoPrint version distribution"}),Object(w.jsx)(bt,{data:h,nameKey:"version",dataKey:"count",id:"octoprintVersions"}),Object(w.jsx)(L.a,{variant:"subtitle2",children:"... stable vs release candidates"}),Object(w.jsxs)(W.a,{container:!0,children:[Object(w.jsx)(W.a,{item:!0,xs:12,md:6,children:Object(w.jsx)(bt,{data:m,nameKey:"version",dataKey:"count",id:"octoprintStableVersions"})}),Object(w.jsx)(W.a,{item:!0,xs:12,md:6,children:Object(w.jsx)(bt,{data:g,nameKey:"version",dataKey:"count",id:"octoprintRcVersions"})})]})]})}function Ot(t){var e=Object(a.useState)(),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),d=i[0],j=i[1],u=Object(N.a)(),b=Object(l.a)(u.breakpoints.down("md"));return Object(w.jsxs)(tt,{title:"Printing stats (past ".concat(t.days," days)"),stats:"printing_stats_".concat(t.days,"d.json"),onData:function(t){var e,n=[],a=Object(C.a)(t.histogram.slice(1,-1));try{for(a.s();!(e=a.n()).done;){var r=e.value,c=R()(r.start).valueOf();n.push({start:c,count:r.count})}}catch(o){a.e(o)}finally{a.f()}s(t.total),j(n)},children:[Object(w.jsxs)("p",{children:["Total duration of all prints: ",R.a.duration(1e3*r).humanize()]}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Printing duration per hour"}),Object(w.jsx)(D.a,{width:"100%",aspect:b?1:1.78,children:Object(w.jsxs)(K.a,{data:d,children:[Object(w.jsx)("defs",{children:Object(w.jsxs)("linearGradient",{id:"printingGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(w.jsx)("stop",{offset:"5%",stopColor:ct[0],stopOpacity:.8}),Object(w.jsx)("stop",{offset:"95%",stopColor:ct[0],stopOpacity:0})]})}),Object(w.jsx)(E.a,{strokeDashArray:"3 3"}),Object(w.jsx)(B.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ot,height:150,axisLine:{stroke:u.palette.text.secondary},tickLine:{stroke:u.palette.text.secondary},tick:{fill:u.palette.text.secondary}}),Object(w.jsx)(M.a,{tickFormatter:lt,axisLine:{stroke:u.palette.text.secondary},tickLine:{stroke:u.palette.text.secondary},tick:{fill:u.palette.text.secondary}}),Object(w.jsx)(_.a,{labelFormatter:function(t){return ot(t)},formatter:function(t,e,n){return[lt(t),e]},contentStyle:{backgroundColor:u.palette.background.paper,color:u.palette.text.primary}}),Object(w.jsx)(P.a,{}),Object(w.jsx)(T.a,{type:"monotone",dataKey:"count",stroke:ct[0],fillOpacity:1,fill:"url(#printingGradient)",name:"Printing Duration"})]})})]})}var pt=n(256),xt=n.n(pt),mt=n(499),yt=n(259);function ft(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),d=i[0],j=i[1],u=Object(a.useState)([]),b=Object(o.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)([]),x=Object(o.a)(p,2),m=x[0],y=x[1],f=Object(a.useState)([]),v=Object(o.a)(f,2),g=v[0],k=v[1],S=xt()(),F=Object(l.a)(S.breakpoints.down("md"));return Object(w.jsxs)(tt,{title:"Python stats (past ".concat(t.days," days)"),stats:"python_stats_".concat(t.days,"d.json"),onData:function(t){var e=[],n={version:"Others",count:0},a=0,r=0,c=[],o=[],i={version:"Others",count:0},l={version:"Others",count:0};for(var d in t.versions)e.length<9?e.push({version:d,count:t.versions[d].instances}):n.count+=t.versions[d].instances,d.startsWith("2.")?(a+=t.versions[d].instances,c.length<9?c.push({version:d,count:t.versions[d].instances}):i.count+=t.versions[d].instances):d.startsWith("3.")&&(r+=t.versions[d].instances,o.length<9?o.push({version:d,count:t.versions[d].instances}):l.count+=t.versions[d].instances);n.count>0&&e.push(n),c.length>0&&c.push(i),o.length>0&&o.push(l);var u,b=[],h=Object(C.a)(t.histogram.slice(1,-1));try{for(h.s();!(u=h.n()).done;){var p=u.value,x=R()(p.start).valueOf();b.push({start:x,python2:p.python2,python3:p.python3})}}catch(m){h.e(m)}finally{h.f()}j(e),O(c),y(o),k([{version:"Python 2",count:a},{version:"Python 3",count:r}]),s(b)},children:[Object(w.jsx)(L.a,{variant:"subtitle1",children:"Python 2 vs 3"}),Object(w.jsxs)(W.a,{container:!0,children:[Object(w.jsx)(W.a,{item:!0,xs:12,md:5,children:Object(w.jsx)(bt,{data:g,nameKey:"version",dataKey:"count",id:"py2vs3",legendBelow:!0})}),Object(w.jsx)(W.a,{item:!0,xs:12,md:7,children:Object(w.jsx)(D.a,{width:"100%",aspect:F?1:1.78,children:Object(w.jsxs)(mt.a,{width:400,height:400,data:r,children:[Object(w.jsx)(E.a,{strokeDashArray:"3 3"}),Object(w.jsx)(B.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ot,height:150,axisLine:{stroke:S.palette.text.secondary},tickLine:{stroke:S.palette.text.secondary},tick:{fill:S.palette.text.secondary}}),Object(w.jsx)(M.a,{axisLine:{stroke:S.palette.text.secondary},tickLine:{stroke:S.palette.text.secondary},tick:{fill:S.palette.text.secondary}}),Object(w.jsx)(_.a,{labelFormatter:function(t){return ot(t)},formatter:function(t,e,n){return[it(t),e]},contentStyle:{backgroundColor:S.palette.background.paper,color:S.palette.text.primary}}),Object(w.jsx)(P.a,{}),Object(w.jsx)(yt.a,{dataKey:"python2",dot:!1,strokeWidth:2,stroke:ct[0],name:"Python 2"}),Object(w.jsx)(yt.a,{dataKey:"python3",dot:!1,strokeWidth:2,stroke:ct[1],name:"Python 3"})]})})})]}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Python version distribution"}),Object(w.jsx)(bt,{data:d,nameKey:"version",dataKey:"count",id:"pythonVersions"}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Individual Python version distribution for 2.x and 3.x"}),Object(w.jsxs)(W.a,{container:!0,children:[Object(w.jsx)(W.a,{item:!0,xs:12,md:6,children:Object(w.jsx)(bt,{data:h,nameKey:"version",dataKey:"count",id:"python2Versions"})}),Object(w.jsx)(W.a,{item:!0,xs:12,md:6,children:Object(w.jsx)(bt,{data:m,nameKey:"version",dataKey:"count",id:"python3Versions"})})]})]})}var vt={linux:"Linux",windows:"Windows",macos:"Mac",freebsd:"FreeBSD"};function gt(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),l=i[0],d=i[1],j=Object(a.useState)([]),u=Object(o.a)(j,2),b=u[0],h=u[1];return Object(w.jsxs)(tt,{title:"Server Environment stats (past ".concat(t.days," days)"),stats:"server_environment_stats_".concat(t.days,"d.json"),onData:function(t){var e=[],n=[],a=[],r={name:"Other",count:0},c=Object.keys(t.cores);for(var o in c.sort((function(e,n){return t.cores[n].instances-t.cores[e].instances})),c.forEach((function(n){e.length<=10&&n>0?e.push({name:n,count:t.cores[n].instances}):r.count+=t.cores[n].instances})),r.count>0&&e.push(r),t.os)n.push({name:vt[o],count:t.os[o].instances});for(var i in t.bits)a.push({name:i,count:t.bits[i].instances});s(e),d(n),h(a)},children:[Object(w.jsx)(L.a,{variant:"subtitle1",children:"Operating System"}),Object(w.jsx)(bt,{data:l,nameKey:"name",dataKey:"count",id:"os"}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Bits"}),Object(w.jsx)(bt,{data:b,nameKey:"name",dataKey:"count",id:"bits"}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Core count"}),Object(w.jsx)(bt,{data:r,nameKey:"name",dataKey:"count",id:"cores"})]})}function kt(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),l=i[0],d=i[1];return Object(w.jsxs)(tt,{title:"Client Environment stats (past ".concat(t.days," days)"),stats:"client_environment_stats_".concat(t.days,"d.json"),onData:function(t){var e=[],n=[],a={name:"Other",count:0},r={name:"Other",count:0};for(var c in t.browser)e.length<10?e.push({name:c,count:t.browser[c].instances}):a.count+=t.browser[c].instances;for(var o in a.count>0&&e.push(a),t.os)n.length<10?n.push({name:o,count:t.os[o].instances}):r.count+=t.os[o].instances;r.count>0&&n.push(r),s(e),d(n)},children:[Object(w.jsx)("p",{children:"Note: This data only gets tracked starting with OctoPrint 1.7.0, the instance counts will thus be low until general availability."}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Browser"}),Object(w.jsx)(bt,{data:r,nameKey:"name",dataKey:"count",id:"browserTop10"}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Operating System"}),Object(w.jsx)(bt,{data:l,nameKey:"name",dataKey:"count",id:"osTop10"})]})}function wt(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),l=i[0],d=i[1];return Object(w.jsxs)(tt,{title:"Firmware stats (past ".concat(t.days," days)"),stats:"firmware_stats_".concat(t.days,"d.json"),onData:function(t){var e=[],n={name:"Other",count:0},a=[{name:"Prusa Marlin",matcher:function(t){return t.startsWith("Prusa-Firmware")},count:0},{name:"Creality Marlin",matcher:function(t){return-1!==t.indexOf("Creality")},count:0},{name:"TH3D Marlin",matcher:function(t){return-1!==t.indexOf("TH3D")},count:0},{name:"Marlin",matcher:function(t){return t.startsWith("Marlin")},count:0},{name:"Klipper",matcher:function(t){return t.startsWith("Klipper")},count:0},{name:"Repetier",matcher:function(t){return t.startsWith("Repetier")},count:0},{name:"Smoothieware",matcher:function(t){return t.startsWith("Smoothieware")},count:0},{name:"RepRapFirmware",matcher:function(t){return t.startsWith("RepRapFirmware")},count:0},{name:"Sailfish",matcher:function(t){return t.startsWith("Sailfish")},count:0},{name:"Malyan",matcher:function(t){return t.startsWith("Malyan")},count:0},{name:"ANET A8",matcher:function(t){return t.startsWith("ANET_A8")},count:0}];for(var r in t.names){e.length<9&&e.push({name:r,count:t.names[r].instances});var c,o=Object(C.a)(a);try{for(o.s();!(c=o.n()).done;){var i=c.value;if(i.matcher(r)){i.count+=t.names[r].instances;break}}}catch(l){o.e(l)}finally{o.f()}}n.count>0&&e.push(n),a.sort((function(t,e){return e.count-t.count})),s(e),d(a)},children:[Object(w.jsx)(L.a,{variant:"subtitle1",children:"Firmware top 10"}),Object(w.jsx)(bt,{data:r,nameKey:"name",dataKey:"count",id:"firmwareTop10",legendBelow:!0}),Object(w.jsx)(L.a,{variant:"subtitle1",children:"Notable firmware groups"}),Object(w.jsx)(bt,{data:l,nameKey:"name",dataKey:"count",id:"notableFirmware"})]})}function St(t,e){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(a){return console.log(a),e}})),r=Object(o.a)(n,2),s=r[0],c=r[1];return[s,function(e){try{var n=e instanceof Function?e(s):e;c(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(a){console.log(a)}}]}var Ft=Object(d.a)((function(t){var e;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(i.a)({},t.breakpoints.down("md"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(i.a)({flexGrow:1},t.breakpoints.down("md"),{"flex-basis":"100%",order:99,paddingBottom:t.spacing(2)}),title:{"justify-item":"left"},offset:t.mixins.toolbar,content:Object(i.a)({"padding-top":t.mixins.toolbar.minHeight},t.breakpoints.down("md"),{"padding-top":2*t.mixins.toolbar.minHeight}),container:(e={paddingTop:t.spacing(4)},Object(i.a)(e,t.breakpoints.down("md"),{paddingTop:0}),Object(i.a)(e,"paddingBottom",t.spacing(4)),Object(i.a)(e,"flexGrow",1),Object(i.a)(e,"& > *",{marginTop:t.spacing(2),marginBottom:t.spacing(2)}),e),footer:{textAlign:"center",padding:"1em"}}}));function At(t){var e=St("enableDarkMode",Object(l.a)("(prefers-color-scheme: dark)")),n=Object(o.a)(e,2),a=n[0],r=n[1],s=St("days",30),c=Object(o.a)(s,2),i=c[0],d=c[1],m=a?"dark":"light",y=Object(j.a)({palette:{type:m}}),f=function(){r(!a)},v=function(){d(7===i?30:7)},g=Ft(),k=function(){return Object(w.jsx)(h.a,{className:g.appBar,children:Object(w.jsxs)(O.a,{className:g.toolbar,children:[Object(w.jsx)("div",{className:g.grow,children:"data.octoprint.org"}),Object(w.jsx)(A,{days:i,onChange:v}),Object(w.jsx)(S,{darkMode:a,onChange:f})]})})};return Object(w.jsx)(u.a,{theme:y,children:Object(w.jsxs)("div",{className:g.root,style:{display:"flex",minHeight:"100vh",flexDirection:"column"},children:[Object(w.jsx)(b.a,{}),Object(w.jsx)(k,{}),Object(w.jsx)("main",{className:g.content,children:Object(w.jsxs)(p.a,{maxWidth:"lg",className:g.container,children:[Object(w.jsx)(ht,{days:i}),Object(w.jsx)(Ot,{days:i}),Object(w.jsx)(ft,{days:i}),Object(w.jsx)(gt,{days:i}),Object(w.jsx)(kt,{days:i}),Object(w.jsx)(wt,{days:i})]})}),Object(w.jsxs)("footer",{className:g.footer,children:["\xa9 2021 ",Object(w.jsx)(x.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," \xb7 ",Object(w.jsx)(x.a,{href:"https://octoprint.org/imprint/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Imprint"})," \xb7 ",Object(w.jsx)(x.a,{href:"https://octoprint.org/privacy/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Privacy Policy"}),Object(w.jsx)("br",{}),"Based on tracking data from the Anonymous Usage Tracking plugin, refer to ",Object(w.jsx)(x.a,{href:"https://tracking.octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"tracking.octoprint.org"})," for details."]})]})})}var Ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,509)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(At,{})}),document.getElementById("root")),Ct()}},[[463,1,2]]]);
//# sourceMappingURL=main.3847b058.chunk.js.map