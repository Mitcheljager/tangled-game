(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],f=0,h=[];f<o.length;f++)r=o[f],s[r]&&h.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13fd":function(e,t,n){},1529:function(e,t,n){},"2fa1":function(e,t,n){},"3d5d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[e.menuActive?n("main-menu"):e._e(),n("div",{staticClass:"main-interface"},[n("div",{on:{click:function(t){return e.toggleMenu()}}},[e._v("menu.")])]),n(e.activeInstance,{ref:"instance",tag:"div",class:e.activeInstance})],1)},a=[],r=new i["a"],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface interface--main-menu interface--fullscreen"},[n("a",{on:{click:function(t){return e.changeInstance("Level")}}},[e._v("resume.")]),"Level"==e.getCurrentInstance()?n("a",{on:{click:function(t){return e.resetLevel()}}},[e._v("reset.")]):e._e(),n("br"),n("a",{on:{click:function(t){return e.changeInstance("LevelSelect")}}},[e._v("levels.")]),n("a",{on:{click:function(t){return e.changeInstance("Settings")}}},[e._v("settings.")])])},c=[],l={props:[],data:function(){return{}},mounted:function(){},methods:{resetLevel:function(){r.$emit("resetLevel")},getCurrentInstance:function(){return this.$root.$children[0].activeInstance},toggleMainMenu:function(){r.$emit("toggleMainMenu")},changeInstance:function(e){r.$emit("changeInstance",e)}}},u=l,f=(n("973e"),n("2877")),h=Object(f["a"])(u,o,c,!1,null,null,null),p=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Instance",{ref:"instance",staticClass:"instance--level"},[n("svg",{ref:"svg",attrs:{height:e.svgHeight,width:e.svgWidth}},[e._l(e.shapes,function(t,i){return n("g",{key:"level-"+e.$root.currentLevel+"-shape-"+i,ref:"shapes",refInFor:!0},[n("polygon",{attrs:{points:e.setPoints(t)}}),e._l(t,function(s,a){return n("point",{key:"level-"+e.$root.currentLevel+"-point-"+a+"-"+i,attrs:{shape:t,point:s,levelData:e.levelData,selected:[e.pointSelected[0],e.pointSelected[1]].join()==[i,a].join(),id:"level-"+e.$root.currentLevel+"-point-"+i+"-"+a},nativeOn:{click:function(t){return e.setPoint(i,a,t)}}})})],2)}),n("g",{ref:"lines"}),e._l(e.shapes,function(t,i){return n("g",{key:"level-"+e.$root.currentLevel+"-shape-point-"+i},e._l(t,function(t,s){return n("use",{key:"level-"+e.$root.currentLevel+"-shape-point-"+s+"-"+i,attrs:{"xlink:href":"#level-"+e.$root.currentLevel+"-point-"+i+"-"+s}})}),0)})],2),e.completed?n("level-complete",{attrs:{slot:"interface"},slot:"interface"}):e._e()],1)},d=[],m=n("768b"),g=(n("ac4d"),n("8a81"),n("ac6a"),n("c5f6"),n("28a5"),n("6762"),n("2fdb"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"level-complete",staticClass:"interface interface--fullscreen interface--level-complete",attrs:{slot:"interface"},slot:"interface"},[e._v("\n  done.\n\n  "),n("div",{staticClass:"interface--fullscreen__tray"},[n("a",{on:{click:function(t){return e.goToNextLevel()}}},[e._v("view.")]),n("a",{on:{click:function(t){return e.goToNextLevel()}}},[e._v("next.")])])])}),L=[],b={props:[],data:function(){return{}},mounted:function(){},methods:{goToNextLevel:function(){r.$emit("goToLevel"),r.$emit("initiateLevel")}}},_=b,$=(n("a011"),Object(f["a"])(_,g,L,!1,null,null,null)),x=$.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"instance"},[e._t("interface"),n("div",{ref:"content",staticClass:"instance__content",style:e.transform.position},[e._t("default")],2)],2)},y=[],k=n("1c26"),P=n.n(k),S={props:{enableDrag:{default:!0,type:Boolean}},data:function(){return{elementPositionY:0,elementPositionX:0}},computed:{transform:function(){return{position:"transform: translateY(".concat(this.elementPositionY,"px) translateX(").concat(this.elementPositionX,"px)")}}},mounted:function(){var e=this;r.$on("resetBoardPosition",function(){e.elementPositionY=0,e.elementPositionX=0}),this.enableDrag&&this.setImpetus()},methods:{setImpetus:function(){var e=this,t=this.$refs.content,n=t.offsetWidth,i=t.offsetHeight;new P.a({update:function(t,n){e.elementPositionX=e.$root.invertCamera?-1*t:t,e.elementPositionY=e.$root.invertCamera?-1*n:n},boundX:[-.5*n,.5*n],boundY:[-.5*i,.5*i]})},moveParallax:function(e,t,n){var i=e.querySelectorAll("[instance-parallax-background]");i.forEach(function(e){var i=e.getAttribute("instance-parallax-background")/100,s=e.getAttribute("instance-parallax-background-image")/100;e.style.transform="translateY(".concat(n*i,"px) translateX(").concat(t*i,"px)"),s&&(e.style.backgroundPosition="calc(50% + ".concat(t*s,"px) calc(50% + ").concat(n*s,"px)"))})}},watch:{draggable:function(){this.draggable&&this.setImpetus}}},M=S,w=(n("c9ae"),Object(f["a"])(M,I,y,!1,null,null,null)),O=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("g",[e.state?n("circle",{staticClass:"shadow",class:e.pointTypes,attrs:{cx:e.setPointPosition(e.point,0),cy:e.setPointPosition(e.point,1),r:"14",fill:"currentColor"}}):e._e(),n("circle",{class:e.pointTypes,attrs:{cx:e.setPointPosition(e.point,0),cy:e.setPointPosition(e.point,1),r:"10",fill:"currentColor"}})])},C=[],D={props:["shape","point","selected","levelData"],data:function(){return{isSelected:!1,marker:!1,static:!1}},mounted:function(){this.checkMarkers()},computed:{state:function(){return!!this.selected||(!!this.marker||!!this.static)},pointTypes:function(){var e=[];return this.selected&&e.push("selected"),this.marker&&e.push("marker"),this.static&&e.push("static"),e}},methods:{setPointPosition:function(e,t){return e.split(",")[t]},checkMarkers:function(){var e=this.levelData.markers,t=this.levelData.statics;e&&e.includes(this.point)&&(this.marker=!0),t&&t.includes(this.point)&&(this.static=!0)}},watch:{selected:function(){this.selected&&(this.marker=!1)}}},T=D,A=(n("871f"),Object(f["a"])(T,j,C,!1,null,null,null)),E=A.exports,N=(n("5e27f"),{components:{Instance:O,Point:E,LevelComplete:x},data:function(){return{shapes:[],levelData:[],pointSelected:!1,firstPoint:{},secondPoint:[],completed:!1,unclearedShapes:[],svgHeight:300,svgWidth:300}},mounted:function(){var e=this;r.$on("initiateLevel",function(){e.initiateLevel()}),r.$on("resetLevel",function(){e.resetLevel()}),this.initiateLevel()},methods:{setPoints:function(e){return e.join(" ")},setPoint:function(e,t){this.levelData.statics&&this.levelData.statics.includes(this.shapes[e][t])||(this.pointSelected=!this.pointSelected,this.pointSelected?(this.firstPoint={shape:e,point:t},this.pointSelected=[e,t]):(this.secondPoint={shape:e,point:t},this.pointSelected=!1,this.moveSelectedPoints(this.firstPoint,this.secondPoint),this.moveSelectedPoints(this.secondPoint,this.firstPoint)))},moveSelectedPoints:function(e,t){var n=this,s=this.shapes[e.shape][e.point].split(",").map(Number),a=this.shapes[t.shape][t.point].split(",").map(Number),r=a[0]-s[0],o=a[1]-s[1],c=this.getDistance(a,s)+1,l=1250,u=60,f=1e3/u,h=c/l*1e3;h<100&&(h=100);var p=Math.ceil(h/f),v=r/p,d=o/p,m=0,g=setInterval(function(){m++,s[0]=s[0]+v,s[1]=s[1]+d,m==p&&clearInterval(g),i["a"].set(n.shapes[e.shape],e.point,s.join(","))},f);setTimeout(function(){i["a"].set(n.shapes[e.shape],e.point,a.join(","))},h)},checkIntersectionOfAllLines:function(){this.$refs.lines.innerHTML="";var e=[];this.shapes.forEach(function(t,n){t.forEach(function(i,s){var a=[];a[0]=i.split(",").map(Number),a[1]=t[s+1]?t[s+1].split(",").map(Number):t[0].split(",").map(Number),a[2]=n,e.push(a)})});var t=!0;this.unclearedShapes=[];var n=!0,i=!1,s=void 0;try{for(var a,r=e.entries()[Symbol.iterator]();!(n=(a=r.next()).done);n=!0){var o=Object(m["a"])(a.value,2),c=(o[0],o[1]),l=!0,u=!1,f=void 0;try{for(var h,p=e.entries()[Symbol.iterator]();!(l=(h=p.next()).done);l=!0){var v=Object(m["a"])(h.value,2),d=(v[0],v[1]);if(this.checkLineIntersect(c,d)){var g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("stroke-width","5px"),g.setAttribute("stroke","currentColor"),g.setAttribute("x1",c[0][0]),g.setAttribute("x2",c[1][0]),g.setAttribute("y1",c[0][1]),g.setAttribute("y2",c[1][1]),g.setAttribute("stroke","var(--red)"),this.$refs.lines.append(g),this.unclearedShapes.push(c[2]),t=!1}}}catch(L){u=!0,f=L}finally{try{l||null==p.return||p.return()}finally{if(u)throw f}}}}catch(L){i=!0,s=L}finally{try{n||null==r.return||r.return()}finally{if(i)throw s}}this.checkUnclearedShapes(),this.completed=t},getDistance:function(e,t){var n=0,i=0;return n=t[0]-e[0],n*=n,i=t[1]-e[1],i*=i,Math.sqrt(n+i)},checkLineIntersect:function(e,t){var n=e[0][0],i=e[0][1],s=e[1][0],a=e[1][1],r=t[0][0],o=t[0][1],c=t[1][0],l=t[1][1],u=.05,f=s-1-n,h=a-1-i,p=c-1-r,v=l-1-o,d=(-h*(n-r)+f*(i-o))/(-p*h+f*v),m=(p*(i-o)-v*(n-r))/(-p*h+f*v);return d>=0+u&&d<=1-u&&m>=0+u&&m<=1-u},checkUnclearedShapes:function(){var e=this;this.$nextTick(function(){e.shapes.forEach(function(t,n){var i=e.$refs["shapes"][n];e.unclearedShapes.includes(n)?i.classList.remove("shape--finished"):i.classList.add("shape--finished")})})},initiateLevel:function(){this.complete=!1,this.setLevelData(),this.resizeSVG()},setLevelData:function(){this.shapes=JSON.parse(JSON.stringify(this.$root.levelData[this.$root.currentLevel].shapes)),this.levelData=this.$root.levelData[this.$root.currentLevel]},resetLevel:function(){this.setLevelData(),r.$emit("closeMainMenu")},resizeSVG:function(){var e=this.shapes.flat().map(function(e){return e.split(",")}),t=e.reduce(function(e,t){return parseInt(e[1])>parseInt(t[1])?e:t})[1],n=e.reduce(function(e,t){return parseInt(e[0])>parseInt(t[0])?e:t})[0],i=e.reduce(function(e,t){return parseInt(e[1])<parseInt(t[1])?e:t})[1],s=e.reduce(function(e,t){return parseInt(e[0])<parseInt(t[0])?e:t})[0];this.svgHeight=parseInt(t)+parseInt(i),this.svgWidth=parseInt(n)+parseInt(s)}},watch:{shapes:function(){this.checkIntersectionOfAllLines()}}}),X=N,Y=(n("6aaa"),Object(f["a"])(X,v,d,!1,null,null,null)),J=Y.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"instance--level-select"},[n("h1",{staticClass:"instance__title"},[e._v("levels.")]),n("nav",{staticClass:"level-select"},e._l(this.$root.levelData,function(t,i){return n("a",{staticClass:"level-select__item",class:e.classList(i),on:{click:function(t){return e.goToLevel(i)}}},[n("div",[n("span",[e._v(e._s(i>9?i:"0"+i)+".")]),e._v(" "+e._s(t.name))]),n("span",[e._v("par. "+e._s(t.par)+".")])])}),0)])},W=[],B={props:[],data:function(){return{}},mounted:function(){},methods:{goToLevel:function(e){e>this.$root.maxLevel||(r.$emit("toggleMainMenu"),r.$emit("goToLevel",e),this.$nextTick(function(){r.$emit("changeInstance","Level")}))},classList:function(e){var t=[];return this.$root.currentLevel==e&&t.push("level-select__item--is-active"),e>this.$root.maxLevel&&t.push("level-select__item--is-disabled"),t}}},q=B,z=(n("e0fb"),Object(f["a"])(q,H,W,!1,null,null,null)),G=z.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  settings.\n")])},V=[],F={props:[],data:function(){return{}},mounted:function(){},methods:{}},K=F,Q=Object(f["a"])(K,U,V,!1,null,null,null),R=Q.exports,Z={name:"app",components:{Level:J,LevelSelect:G,Settings:R,MainMenu:p},data:function(){return{activeInstance:"Level",menuActive:!1}},mounted:function(){var e=this;r.$on("toggleMainMenu",function(){e.toggleMenu()}),r.$on("closeMainMenu",function(){e.closeMenu()}),r.$on("goToLevel",function(t){e.goToLevel(t)}),r.$on("changeInstance",function(t){e.changeInstance(t)})},methods:{changeInstance:function(e){this.activeInstance=e,this.toggleMenu()},toggleMenu:function(){this.menuActive=!this.menuActive},closeMenu:function(){this.menuActive=!1},goToLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$root.currentLevel+1;this.$root.currentLevel=e,r.$emit("resetBoardPosition")}}},ee=Z,te=(n("5c0b"),Object(f["a"])(ee,s,a,!1,null,null,null)),ne=te.exports,ie=n("c743");i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ne)},data:function(){return{levelData:JSON.parse(JSON.stringify(ie)),currentLevel:parseInt(localStorage.getItem("currentLevel"))||0,maxLevel:parseInt(localStorage.getItem("maxLevel"))||0}},watch:{currentLevel:function(){this.currentLevel>this.maxLevel&&(this.maxLevel=this.currentLevel),localStorage.setItem("currentLevel",this.currentLevel)},maxLevel:function(){localStorage.setItem("maxLevel",this.maxLevel)}}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(e,t,n){},"6aaa":function(e,t,n){"use strict";var i=n("3d5d"),s=n.n(i);s.a},7189:function(e,t,n){},"871f":function(e,t,n){"use strict";var i=n("13fd"),s=n.n(i);s.a},"92de":function(e,t,n){},"973e":function(e,t,n){"use strict";var i=n("7189"),s=n.n(i);s.a},a011:function(e,t,n){"use strict";var i=n("1529"),s=n.n(i);s.a},c743:function(e){e.exports=[{name:"start.",par:1,shapes:[["140,350","260,170","20,170"],["140,50","260,230","20,230"]],markers:["140,350","140,50"]},{name:"more.",par:2,shapes:[["150,512","262,126","150,300","48,126"],["150,232","262,406","150,20","48,406"]]},{name:"another.",par:2,shapes:[["280,280","140,20","140,140","20,140"],["160,20","20,280","280,140","160,140"],["20,160","140,160","140,280","280,20"],["160,160","280,160","20,20","160,280"]]},{name:"circular.",par:3,shapes:[["160,20","90,280","280,90","20,160","280,230","90,40","160,300","230,40","40,230","300,160","40,90","230,280"]]},{name:"lines.",par:5,shapes:[["300,260","90,60","90,260","300,60"],["125,300","195,20","195,300","125,20"],["230,60","20,260","20,60","230,260"]]},{name:"restricted.",par:4,shapes:[["20,300","300,20","160,100","160,220"],["60,60","260,60","260,260","60,260"],["100,160","220,160","300,300","20,20"]],statics:["60,60","260,60","260,260","60,260"]},{name:"summate.",par:8,shapes:[["190,30","130,30","90,230","290,190","290,130","90,90","130,290","190,290","230,90","30,130","30,190","230,230"],["290,230","130,130","230,290"],["30,230","90,290","190,130"],["190,190","90,30","30,90"],["230,30","130,190","290,90"]]},{name:"signal.",par:6,shapes:[["160,165","300,162","118,352","160,105","203,352","20,162"],["160,30","279,284","84,326","160,310","235,326","41,284"],["160,395","62,205","160,250","258,205"]]},{name:"allotrope.",par:9,shapes:[["160,320","233,109","160,140","89,109"],["25,245","254,198","190,155","180,80"],["25,95","180,260","190,185","254,142"],["160,20","89,232","160,200","233,232"],["295,95","69,142","130,185","140,260"],["295,245","140,80","130,155","69,198"]],statics:["160,140","190,155","190,185","160,200","130,185","130,155"]},{name:"dodecahedron.",par:5,shapes:[["137,20","52,201","53,70"],["161,20","64,223","231,122"],["190,25","287,81","87,211"],["36,94","126,71","277,150"],["119,90","230,145","83,188"],["296,116","296,200","64,176"],["25,129","106,64","25,226"],["262,127","237,169","162,305"],["262,175","288,244","188,305"],["95,87","129,305","38,247"]],statics:["119,90","230,145","83,188"]},{name:"target.",par:5,shapes:[["421,252","482,252","542,269","594,306","631,358","651,418","651,482","631,544","594,593","545,632","482,650","421,650","361,633","308,595","271,544","251,484","252,419","273,362","306,312","360,271"]]}]},c9ae:function(e,t,n){"use strict";var i=n("2fa1"),s=n.n(i);s.a},e0fb:function(e,t,n){"use strict";var i=n("92de"),s=n.n(i);s.a}});
//# sourceMappingURL=app.6b619a67.js.map