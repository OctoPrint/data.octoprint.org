(this["webpackJsonpdata.octoprint.org"]=this["webpackJsonpdata.octoprint.org"]||[]).push([[0],{424:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(48),s=n.n(c),o=n(5),i=n(461),l=n(241),j=n(475),u=n(16),d=n(479),b=n(478),h=n(476),O=n(477),x=n(480),p=n(481),y=n(482),m=n(470),f=n(220),v=n.n(f),g=n(219),k=n.n(g),S=n(1);function w(t){var e=Object(a.useState)(t.darkMode),n=Object(o.a)(e,2),r=n[0],c=n[1];return Object(S.jsx)(m.a,{title:"Toggle dark mode",children:Object(S.jsx)(y.a,{onClick:function(){t.onChange(!r),c(!r)},color:"inherit",size:"large",children:r?Object(S.jsx)(k.a,{}):Object(S.jsx)(v.a,{})})})}var F=n(483);function D(t,e){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(a){return console.log(a),e}})),r=Object(o.a)(n,2),c=r[0],s=r[1];return[c,function(e){try{var n=e instanceof Function?e(c):e;s(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(a){console.log(a)}}]}var A=a.createContext(void 0);function C(t){var e=t.children,n=function(){var t=D("days",30),e=Object(o.a)(t,2),n=e[0],a=e[1];return{days:n,setDays:a}}();return Object(S.jsx)(A.Provider,{value:n,children:e})}function K(){return a.useContext(A)}function E(){var t=K(),e=t.days,n=t.setDays;return Object(S.jsx)(m.a,{title:"Switch between 30 and 7 days view",children:Object(S.jsx)(F.a,{color:"inherit",onClick:function(){n(7===e?30:7)},children:30===e?"Switch to 7 days":"Switch to 30 days"})})}var B=n(29),M=n(462),_=n(466),P=n(467),W=n(128),L=n(129),T=n(110),R=n(108),I=n(240),G=n(485),V=n(474),N=n(100),H=n(55),J=n.n(H),Y=n(484),z=n(486),q=n(488),U=n(489),Q=n(39),X=n.n(Q),Z=n(92),$=n(221),tt=n.n($),et="https://data.octoprint.org/export/";function nt(t){return at.apply(this,arguments)}function at(){return(at=Object(Z.a)(X.a.mark((function t(e){var n;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=et+e,t.next=3,tt.a.get(n);case 3:return t.next=5,t.sent.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function rt(t){var e=Object(a.useState)(!0),n=Object(o.a)(e,2),r=n[0],c=n[1],s=Object(a.useState)(),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(a.useState)(),d=Object(o.a)(u,2),b=d[0],h=d[1];Object(a.useEffect)((function(){nt(t.stats).then((function(e){j(e._since),h(e._generated),t.onData(e),c(!1)}))}),[t.stats]);var O=function(){return r?Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(S.jsx)(Y.a,{})}):Object(S.jsxs)(S.Fragment,{children:[t.children,Object(S.jsxs)(G.a,{variant:"caption",children:["Based on usage data from ",l," until ",b]})]})};return Object(S.jsxs)(z.a,{style:{},children:[Object(S.jsx)(q.a,{title:t.title}),Object(S.jsx)(U.a,{children:Object(S.jsx)(O,{})})]})}var ct=n(473),st=n(234),ot=n(237),it=n(222),lt=n.n(it),jt=["#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],ut=function(t){return J()(t).format("YYYY-MM-DD HH:00")},dt=function(t){return lt()(t)},bt=function(t){return J.a.duration(1e3*t).humanize()},ht=function(t,e,n){var a=e.payload,r=a.value,c=a.name,s=a.percent,o=xt(s);return"".concat(c,": ").concat(o,"% (").concat(dt(r),")")},Ot=function(t){var e=t.x,n=t.y,a=t.fill,r=t.textAnchor,c=t.name,s=t.percent,o=xt(s);return Object(S.jsxs)("text",{x:e,y:n,fill:a,alignmentBaseline:"middle",textAnchor:r,children:[c," (",o,"%)"]})},xt=function(t){return Math.round(100*t,2)};function pt(t){var e=Object(N.a)(),n=Object(i.a)(e.breakpoints.down("lg")),a=n||t.legendBelow;return Object(S.jsx)(M.a,{width:"100%",aspect:n?1:1.78,children:Object(S.jsxs)(ct.a,{children:[a?Object(S.jsx)(R.a,{formatter:ht}):Object(S.jsx)(R.a,{layout:"vertical",align:"right",verticalAlign:"top",formatter:ht}),Object(S.jsx)(T.a,{contentStyle:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},itemStyle:{color:e.palette.text.primary}}),Object(S.jsx)(st.a,{data:t.data,label:!n&&Ot,startAngle:90,endAngle:-270,outerRadius:"70%",innerRadius:"35%",stroke:e.palette.background.paper,nameKey:t.nameKey,dataKey:t.dataKey,children:t.data.map((function(e,n){return Object(S.jsx)(ot.a,{fill:jt[n%jt.length]},"cell-".concat(t.id,"-").concat(n))}))})]})})}function yt(){var t=Object(a.useState)(),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),l=s[0],j=s[1],u=Object(a.useState)([]),d=Object(o.a)(u,2),b=d[0],h=d[1],O=Object(a.useState)([]),x=Object(o.a)(O,2),p=x[0],y=x[1],m=Object(a.useState)([]),f=Object(o.a)(m,2),v=f[0],g=f[1],k=Object(N.a)(),w=K().days,F=Object(i.a)(k.breakpoints.down("lg"));return Object(S.jsxs)(rt,{title:"Instance stats (past ".concat(w," days)"),stats:"instance_stats_".concat(w,"d.json"),onData:function(t){var e=[],n=[],a=[],c={version:"Others",count:0},s={version:"Others",count:0},o={version:"Others",count:0};for(var i in t.versions){var l={version:i,count:t.versions[i]};e.length<9?e.push(l):c.count+=t.versions[i],i.includes("rc")?a.length<9?a.push(l):o.count+=t.versions[i]:n.length<9?n.push(l):s.count+=t.versions[i]}c.count>0&&e.push(c),o.count>0&&a.push(o),s.count>0&&n.push(s);var u,d=[],b=Object(B.a)(t.histogram.slice(1,-1));try{for(b.s();!(u=b.n()).done;){var O=u.value,x=J()(O.start).valueOf();d.push({start:x,count:O.count})}}catch(p){b.e(p)}finally{b.f()}r(t.count),j(d),h(e),y(n),g(a)},children:[Object(S.jsxs)("p",{children:["Total unique instances: ",n]}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Unique instances per hour"}),Object(S.jsx)(M.a,{width:"100%",aspect:F?1:1.78,children:Object(S.jsxs)(_.a,{data:l,children:[Object(S.jsx)("defs",{children:Object(S.jsxs)("linearGradient",{id:"instanceGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(S.jsx)("stop",{offset:"5%",stopColor:jt[0],stopOpacity:.8}),Object(S.jsx)("stop",{offset:"95%",stopColor:jt[0],stopOpacity:0})]})}),Object(S.jsx)(P.a,{strokeDashArray:"3 3"}),Object(S.jsx)(W.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ut,height:150,axisLine:{stroke:k.palette.text.secondary},tickLine:{stroke:k.palette.text.secondary},tick:{fill:k.palette.text.secondary}}),Object(S.jsx)(L.a,{tickFormatter:dt,axisLine:{stroke:k.palette.text.secondary},tickLine:{stroke:k.palette.text.secondary},tick:{fill:k.palette.text.secondary}}),Object(S.jsx)(T.a,{labelFormatter:function(t){return ut(t)},formatter:function(t,e,n){return[dt(t),e]},contentStyle:{backgroundColor:k.palette.background.paper,color:k.palette.text.primary}}),Object(S.jsx)(R.a,{}),Object(S.jsx)(I.a,{type:"monotone",dataKey:"count",stroke:jt[0],fillOpacity:1,fill:"url(#instanceGradient)",name:"Instances"})]})}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"OctoPrint version distribution"}),Object(S.jsx)(pt,{data:b,nameKey:"version",dataKey:"count",id:"octoprintVersions"}),Object(S.jsx)(G.a,{variant:"subtitle2",children:"... stable vs release candidates"}),Object(S.jsxs)(V.a,{container:!0,children:[Object(S.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(pt,{data:p,nameKey:"version",dataKey:"count",id:"octoprintStableVersions"})}),Object(S.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(pt,{data:v,nameKey:"version",dataKey:"count",id:"octoprintRcVersions"})})]})]})}function mt(){var t=Object(a.useState)(),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),l=s[0],j=s[1],u=Object(N.a)(),d=K().days,b=Object(i.a)(u.breakpoints.down("lg"));return Object(S.jsxs)(rt,{title:"Printing stats (past ".concat(d," days)"),stats:"printing_stats_".concat(d,"d.json"),onData:function(t){var e,n=[],a=Object(B.a)(t.histogram.slice(1,-1));try{for(a.s();!(e=a.n()).done;){var c=e.value,s=J()(c.start).valueOf();n.push({start:s,count:c.count})}}catch(o){a.e(o)}finally{a.f()}r(t.total),j(n)},children:[Object(S.jsxs)("p",{children:["Total duration of all prints: ",J.a.duration(1e3*n).humanize()]}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Printing duration per hour"}),Object(S.jsx)(M.a,{width:"100%",aspect:b?1:1.78,children:Object(S.jsxs)(_.a,{data:l,children:[Object(S.jsx)("defs",{children:Object(S.jsxs)("linearGradient",{id:"printingGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(S.jsx)("stop",{offset:"5%",stopColor:jt[0],stopOpacity:.8}),Object(S.jsx)("stop",{offset:"95%",stopColor:jt[0],stopOpacity:0})]})}),Object(S.jsx)(P.a,{strokeDashArray:"3 3"}),Object(S.jsx)(W.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ut,height:150,axisLine:{stroke:u.palette.text.secondary},tickLine:{stroke:u.palette.text.secondary},tick:{fill:u.palette.text.secondary}}),Object(S.jsx)(L.a,{tickFormatter:bt,axisLine:{stroke:u.palette.text.secondary},tickLine:{stroke:u.palette.text.secondary},tick:{fill:u.palette.text.secondary}}),Object(S.jsx)(T.a,{labelFormatter:function(t){return ut(t)},formatter:function(t,e,n){return[bt(t),e]},contentStyle:{backgroundColor:u.palette.background.paper,color:u.palette.text.primary}}),Object(S.jsx)(R.a,{}),Object(S.jsx)(I.a,{type:"monotone",dataKey:"count",stroke:jt[0],fillOpacity:1,fill:"url(#printingGradient)",name:"Printing Duration"})]})})]})}var ft=n(468),vt=n(243);function gt(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),l=s[0],j=s[1],u=Object(a.useState)([]),d=Object(o.a)(u,2),b=d[0],h=d[1],O=Object(a.useState)([]),x=Object(o.a)(O,2),p=x[0],y=x[1],m=Object(a.useState)([]),f=Object(o.a)(m,2),v=f[0],g=f[1],k=Object(N.a)(),w=K().days,F=Object(i.a)(k.breakpoints.down("lg"));return Object(S.jsxs)(rt,{title:"Python stats (past ".concat(w," days)"),stats:"python_stats_".concat(w,"d.json"),onData:function(t){var e=[],n={version:"Others",count:0},a=0,c=0,s=[],o=[],i={version:"Others",count:0},l={version:"Others",count:0};for(var u in t.versions)e.length<9?e.push({version:u,count:t.versions[u].instances}):n.count+=t.versions[u].instances,u.startsWith("2.")?(a+=t.versions[u].instances,s.length<9?s.push({version:u,count:t.versions[u].instances}):i.count+=t.versions[u].instances):u.startsWith("3.")&&(c+=t.versions[u].instances,o.length<9?o.push({version:u,count:t.versions[u].instances}):l.count+=t.versions[u].instances);n.count>0&&e.push(n),s.length>0&&s.push(i),o.length>0&&o.push(l);var d,b=[],O=Object(B.a)(t.histogram.slice(1,-1));try{for(O.s();!(d=O.n()).done;){var x=d.value,p=J()(x.start).valueOf();b.push({start:p,python2:x.python2,python3:x.python3})}}catch(m){O.e(m)}finally{O.f()}j(e),h(s),y(o),g([{version:"Python 2",count:a},{version:"Python 3",count:c}]),r(b)},children:[Object(S.jsx)(G.a,{variant:"subtitle1",children:"Python 2 vs 3"}),Object(S.jsxs)(V.a,{container:!0,children:[Object(S.jsx)(V.a,{item:!0,xs:12,md:5,children:Object(S.jsx)(pt,{data:v,nameKey:"version",dataKey:"count",id:"py2vs3",legendBelow:!0})}),Object(S.jsx)(V.a,{item:!0,xs:12,md:7,children:Object(S.jsx)(M.a,{width:"100%",aspect:F?1:1.78,children:Object(S.jsxs)(ft.a,{width:400,height:400,data:n,children:[Object(S.jsx)(P.a,{strokeDashArray:"3 3"}),Object(S.jsx)(W.a,{dataKey:"start",angle:"-60",textAnchor:"end",interval:"preserveStartAndEnd",domain:["dataMin","dataMax"],scale:"time",type:"number",tickFormatter:ut,height:150,axisLine:{stroke:k.palette.text.secondary},tickLine:{stroke:k.palette.text.secondary},tick:{fill:k.palette.text.secondary}}),Object(S.jsx)(L.a,{axisLine:{stroke:k.palette.text.secondary},tickLine:{stroke:k.palette.text.secondary},tick:{fill:k.palette.text.secondary}}),Object(S.jsx)(T.a,{labelFormatter:function(t){return ut(t)},formatter:function(t,e,n){return[dt(t),e]},contentStyle:{backgroundColor:k.palette.background.paper,color:k.palette.text.primary}}),Object(S.jsx)(R.a,{}),Object(S.jsx)(vt.a,{dataKey:"python2",dot:!1,strokeWidth:2,stroke:jt[0],name:"Python 2"}),Object(S.jsx)(vt.a,{dataKey:"python3",dot:!1,strokeWidth:2,stroke:jt[1],name:"Python 3"})]})})})]}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Python version distribution"}),Object(S.jsx)(pt,{data:l,nameKey:"version",dataKey:"count",id:"pythonVersions"}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Individual Python version distribution for 2.x and 3.x"}),Object(S.jsxs)(V.a,{container:!0,children:[Object(S.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(pt,{data:b,nameKey:"version",dataKey:"count",id:"python2Versions"})}),Object(S.jsx)(V.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(pt,{data:p,nameKey:"version",dataKey:"count",id:"python3Versions"})})]})]})}var kt={linux:"Linux",windows:"Windows",macos:"Mac",freebsd:"FreeBSD"};function St(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],l=s[1],j=Object(a.useState)([]),u=Object(o.a)(j,2),d=u[0],b=u[1],h=K().days;return Object(S.jsxs)(rt,{title:"Server Environment stats (past ".concat(h," days)"),stats:"server_environment_stats_".concat(h,"d.json"),onData:function(t){var e=[],n=[],a=[],c={name:"Other",count:0},s=Object.keys(t.cores);for(var o in s.sort((function(e,n){return t.cores[n].instances-t.cores[e].instances})),s.forEach((function(n){e.length<=10&&n>0?e.push({name:n,count:t.cores[n].instances}):c.count+=t.cores[n].instances})),c.count>0&&e.push(c),t.os)n.push({name:kt[o],count:t.os[o].instances});for(var i in t.bits)a.push({name:i,count:t.bits[i].instances});r(e),l(n),b(a)},children:[Object(S.jsx)(G.a,{variant:"subtitle1",children:"Operating System"}),Object(S.jsx)(pt,{data:i,nameKey:"name",dataKey:"count",id:"os"}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Bits"}),Object(S.jsx)(pt,{data:d,nameKey:"name",dataKey:"count",id:"bits"}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Core count"}),Object(S.jsx)(pt,{data:n,nameKey:"name",dataKey:"count",id:"cores"})]})}function wt(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1],u=K().days;return Object(S.jsxs)(rt,{title:"Client Environment stats (past ".concat(u," days)"),stats:"client_environment_stats_".concat(u,"d.json"),onData:function(t){var e=[],n=[],a={name:"Other",count:0},r={name:"Other",count:0};for(var s in t.browser)e.length<10?e.push({name:s,count:t.browser[s].instances}):a.count+=t.browser[s].instances;for(var o in a.count>0&&e.push(a),t.os)n.length<10?n.push({name:o,count:t.os[o].instances}):r.count+=t.os[o].instances;r.count>0&&n.push(r),c(e),j(n)},children:[Object(S.jsx)(G.a,{variant:"subtitle1",children:"Browser"}),Object(S.jsx)(pt,{data:r,nameKey:"name",dataKey:"count",id:"browserTop10"}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Operating System"}),Object(S.jsx)(pt,{data:l,nameKey:"name",dataKey:"count",id:"osTop10"})]})}function Ft(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],l=s[1],j=K().days;return Object(S.jsxs)(rt,{title:"Firmware stats (past ".concat(j," days)"),stats:"firmware_stats_".concat(j,"d.json"),onData:function(t){var e=[],n={name:"Other",count:0},a=[{name:"Prusa Marlin",matcher:function(t){return t.startsWith("Prusa-Firmware")},count:0},{name:"Creality Marlin",matcher:function(t){return-1!==t.indexOf("Creality")},count:0},{name:"TH3D Marlin",matcher:function(t){return-1!==t.indexOf("TH3D")},count:0},{name:"Marlin",matcher:function(t){return t.startsWith("Marlin")},count:0},{name:"Klipper",matcher:function(t){return t.startsWith("Klipper")},count:0},{name:"Repetier",matcher:function(t){return t.startsWith("Repetier")},count:0},{name:"Smoothieware",matcher:function(t){return t.startsWith("Smoothieware")},count:0},{name:"RepRapFirmware",matcher:function(t){return t.startsWith("RepRapFirmware")},count:0},{name:"Sailfish",matcher:function(t){return t.startsWith("Sailfish")},count:0},{name:"Malyan",matcher:function(t){return t.startsWith("Malyan")},count:0},{name:"ANET A8",matcher:function(t){return t.startsWith("ANET_A8")},count:0}];for(var c in t.names){e.length<9&&e.push({name:c,count:t.names[c].instances});var s,o=Object(B.a)(a);try{for(o.s();!(s=o.n()).done;){var i=s.value;if(i.matcher(c)){i.count+=t.names[c].instances;break}}}catch(j){o.e(j)}finally{o.f()}}n.count>0&&e.push(n),a.sort((function(t,e){return e.count-t.count})),r(e),l(a)},children:[Object(S.jsx)(G.a,{variant:"subtitle1",children:"Firmware top 10"}),Object(S.jsx)(pt,{data:n,nameKey:"name",dataKey:"count",id:"firmwareTop10",legendBelow:!0}),Object(S.jsx)(G.a,{variant:"subtitle1",children:"Notable firmware groups"}),Object(S.jsx)(pt,{data:i,nameKey:"name",dataKey:"count",id:"notableFirmware"})]})}var Dt=Object(u.a)("div")((function(t){return t.theme.mixins.toolbar}));function At(t){var e=D("enableDarkMode",Object(i.a)("(prefers-color-scheme: dark)",{noSsr:!0})),n=Object(o.a)(e,2),a=n[0],r=n[1],c=a?"dark":"light",s=Object(l.a)({palette:{mode:c}});return Object(S.jsx)(j.a,{theme:s,children:Object(S.jsx)(C,{children:Object(S.jsx)(Ct,{darkMode:a,handleDarkModeToggle:function(){r(!a)}})})})}function Ct(t){var e=t.darkMode,n=t.handleDarkModeToggle,a=function(){return Object(S.jsx)(h.a,{children:Object(S.jsxs)(O.a,{sx:{flexWrap:"wrap"},children:[Object(S.jsx)(b.a,{display:"flex",flexGrow:1,children:"data.octoprint.org"}),Object(S.jsx)(E,{}),Object(S.jsx)(w,{darkMode:e,onChange:n})]})})};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{}),Object(S.jsx)(a,{}),Object(S.jsx)(Dt,{}),Object(S.jsxs)(x.a,{component:"main",maxWidth:"lg",sx:{mt:{lg:4},mb:4,"& > *":{my:2}},children:[Object(S.jsx)(yt,{}),Object(S.jsx)(mt,{}),Object(S.jsx)(gt,{}),Object(S.jsx)(St,{}),Object(S.jsx)(wt,{}),Object(S.jsx)(Ft,{})]}),Object(S.jsxs)(b.a,{component:"footer",sx:{textAlign:"center",p:"1em"},children:["\xa9 2021 ",Object(S.jsx)(p.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," \xb7 ",Object(S.jsx)(p.a,{href:"https://octoprint.org/imprint/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Imprint"})," \xb7 ",Object(S.jsx)(p.a,{href:"https://octoprint.org/privacy/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Privacy Policy"}),Object(S.jsx)("br",{}),"Based on tracking data from the Anonymous Usage Tracking plugin, refer to ",Object(S.jsx)(p.a,{href:"https://tracking.octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"tracking.octoprint.org"})," for details."]})]})}var Kt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,490)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(At,{})}),document.getElementById("root")),Kt()}},[[424,1,2]]]);
//# sourceMappingURL=main.dbb3704e.chunk.js.map