webpackJsonp([1],{119:function(t,e,n){"use strict";function i(t,e){if(!s(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function s(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function r(t,e,n){return e="data-"+e,n?t.setArrtibute(e,n):t.getAttribute(e)}e.b=i,e.a=r},120:function(t,e,n){"use strict";function i(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+s(e),new o.a(function(e,i){c()(t,n,function(t,n){t?i(t):e(n)})})}function s(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(i)}return e?e.substring(1):""}e.a=i;var r=n(121),o=n.n(r),a=n(451),c=n.n(a)},166:function(t,e,n){n(442);var i=n(19)(n(205),n(468),"data-v-4b250116",null);t.exports=i.exports},167:function(t,e,n){n(439);var i=n(19)(n(206),n(465),"data-v-1ae47cfe",null);t.exports=i.exports},168:function(t,e,n){"use strict";var i=n(75),s=n(476),r=n(460),o=n.n(r),a=n(459),c=n.n(a),l=n(462),u=n.n(l),d=n(458),A=n.n(d),h=n(461),f=n.n(h);i.a.use(s.a),e.a=new s.a({routes:[{path:"/",redirect:"/recommend"},{path:"/search",component:o.a},{path:"/recommend",component:c.a},{path:"/singer",component:u.a,children:[{path:":id",component:f.a}]},{path:"/rank",component:A.a}]})},169:function(t,e,n){"use strict";var i=n(75),s=n(112),r=n(198),o=(n.n(r),n(199)),a=n(202),c=n(201),l=n(478);n.n(l);i.a.use(s.a);e.a=new s.a.Store({actions:r,getters:o,state:a.a,mutations:c.a,strict:!1,plugins:[]})},171:function(t,e){},173:function(t,e){t.exports="data:image/png;base64,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"},175:function(t,e,n){n(446);var i=n(19)(n(203),n(472),null,null);t.exports=i.exports},194:function(t,e,n){"use strict";function i(){var t=c()({},u.b,{platform:"h5",uin:0,needNewCode:1});return n.i(l.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,u.c)}function s(){var t=c()({},u.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return A.a.get("/api/getDiscList",{params:t}).then(function(t){return o.a.resolve(t.data)})}e.a=i,e.b=s;var r=n(121),o=n.n(r),a=n(77),c=n.n(a),l=n(120),u=n(58),d=n(176),A=n.n(d)},195:function(t,e,n){"use strict";function i(){var t=r()({},a.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:886327291,hostUin:0,platform:"yqq",needNewCode:0});return n.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg?",t,a.c)}e.a=i;var s=n(77),r=n.n(s),o=n(120),a=n(58)},196:function(t,e,n){"use strict";var i=n(216),s=n.n(i),r=function t(e){var n=e.id,i=e.name;s()(this,t),this.id=n,this.name=i,this.avatar="https://y.gtimg.cn/music/photo_new/T001R150x150M000"+n+".jpg?max_age=2592000"};e.a=r},197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(170),s=(n.n(i),n(75)),r=n(175),o=n.n(r),a=n(168),c=n(169),l=n(172),u=n.n(l),d=n(174),A=n.n(d),h=n(171);n.n(h);u.a.attach(document.body),s.a.config.productionTip=!1,s.a.use(A.a,{loading:n(173)}),new s.a({el:"#app",router:a.a,store:c.a,render:function(t){return t(o.a)}})},198:function(t,e){},199:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return i});var i=function(t){return t.singer}},200:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="SET_SINGER"},201:function(t,e,n){"use strict";var i=n(217),s=n.n(i),r=n(200),o=s()({},r.a,function(t,e){t.singer=e});e.a=o},202:function(t,e,n){"use strict";var i={singer:{}};e.a=i},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(457),s=n.n(i),r=n(463),o=n.n(r);e.default={components:{MHeader:s.a,Tab:o.a}}},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(167),s=n.n(i),r=n(166),o=n.n(r),a=n(119);e.default={created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{onShortcutTouchStart:function(t){var e=n.i(a.a)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var n=(this.touch.y2-this.touch.y1)/18|0,i=parseInt(this.touch.anchorIndex)+n;this._scrollTo(i)},selectItem:function(t){this.$emit("select",t)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){e+=t[n].clientHeight,this.listHeight.push(e)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var n=0;n<e.length-1;n++){var i=e[n],s=e[n+1];if(-t>=i&&-t<s)return this.currentIndex=n,void(this.diff=s+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fiexdTop.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scorll:s.a,Loading:o.a}}},205:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,default:"正在载入..."}}}},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(123),s=n.n(i);e.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){if(this.$refs.wrapper&&(this.scroll=new s.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll)){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}}},207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(119),s=n(123),r=n.n(s);e.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPaly:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSliderWidth(),t.autoPaly&&t._play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var e=0,s=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var o=this.children[r];n.i(i.b)(o,"slider-item"),o.style.width=s+"px",e+=s}this.loop&&!t&&(e+=2*s),this.$refs.sliderGroup.style.width=e+"px"},_initSliderWidth:function(){var t=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPaly&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},209:function(t,e){},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(166),s=n.n(i),r=n(456),o=n.n(r),a=n(167),c=n.n(a),l=n(194),u=n(58);e.default={data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:{_getRecommend:function(){var t=this;n.i(l.a)().then(function(e){e.code===u.a&&(t.recommends=e.data.slider)})},_getDiscList:function(){var t=this;n.i(l.b)().then(function(e){e.code===u.a&&(t.discList=e.data.list,console.log(t.discList))})},loadImage:function(){this.checkLoaded||(this.$refs.scorll.refresh(),this.checkLoaded=!0)}},components:{Slider:o.a,Scorll:c.a,Loading:s.a}}},211:function(t,e){},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(122),s=n.n(i),r=n(112);e.default={computed:s()({},n.i(r.b)(["singer"])),created:function(){console.log(this.singer)}}},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(122),s=n.n(i),r=n(195),o=n(58),a=n(196),c=n(455),l=n.n(c),u=n(112);e.default={data:function(){return{singer:[]}},created:function(){this._getSingerList()},methods:s()({selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;n.i(r.a)().then(function(e){e.code===o.a&&(t.singer=t._normaLizeSinger(e.data.list))})},_normaLizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new a.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var i=t.Findex;e[i]||(e[i]={title:i,items:[]}),e[i].items.push(new a.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var n=[],i=[];for(var s in e){var r=e[s];r.title.match(/[a-zA-Z]/)?i.push(r):"热门"===r.title&&n.push(r)}return i.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(i)}},n.i(u.c)({setSinger:"SET_SINGER"})),components:{ListView:l.a}}},214:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},438:function(t,e){},439:function(t,e){},440:function(t,e){},441:function(t,e){},442:function(t,e){},443:function(t,e){},444:function(t,e){},445:function(t,e){},446:function(t,e){},447:function(t,e){},448:function(t,e){},449:function(t,e){},454:function(t,e){t.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},455:function(t,e,n){n(440);var i=n(19)(n(204),n(466),"data-v-3a7f489b",null);t.exports=i.exports},456:function(t,e,n){n(449);var i=n(19)(n(207),n(475),"data-v-fa1dd04a",null);t.exports=i.exports},457:function(t,e,n){n(441);var i=n(19)(n(208),n(467),"data-v-481d0a40",null);t.exports=i.exports},458:function(t,e,n){n(447);var i=n(19)(n(209),n(473),null,null);t.exports=i.exports},459:function(t,e,n){n(445);var i=n(19)(n(210),n(471),null,null);t.exports=i.exports},460:function(t,e,n){n(448);var i=n(19)(n(211),n(474),null,null);t.exports=i.exports},461:function(t,e,n){n(438);var i=n(19)(n(212),n(464),"data-v-05466306",null);t.exports=i.exports},462:function(t,e,n){n(443);var i=n(19)(n(213),n(469),null,null);t.exports=i.exports},463:function(t,e,n){n(444);var i=n(19)(n(214),n(470),null,null);t.exports=i.exports},464:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("div",{staticClass:"singer-detail"},[t._v("\n    歌手香型\n  ")])])},staticRenderFns:[]}},465:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},466:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Scorll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[n("ul",t._l(t.data,function(e){return n("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.items,function(e){return n("li",{staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),n("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[n("ul",t._l(t.shortcutList,function(e,i){return n("li",{staticClass:"item",class:{current:t.currentIndex===i},attrs:{"data-index":i}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fiexdTop",staticClass:"list-fixed"},[n("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[n("loading")],1)])},staticRenderFns:[]}},467:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Chicken Music")])])}]}},468:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[i("img",{attrs:{width:"24",height:"24",src:n(454)}}),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(t.title))])])},staticRenderFns:[]}},469:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"singer"},[n("list-view",{attrs:{data:t.singer},on:{select:t.selectSinger}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},470:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("router-link",{staticClass:"tab-item",attrs:{to:"/recommend",tag:"div"}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/singer",tag:"div"}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/rank",tag:"div"}},[n("span",{staticClass:"tab-link"},[t._v("排行")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{to:"/search",tag:"div"}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},471:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"recommend",staticClass:"recommend"},[n("Scorll",{ref:"scorll",staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[t.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("Slider",t._l(t.recommends,function(e){return n("div",[n("a",{attrs:{href:e.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:e.picUrl,alt:""},on:{load:t.loadImage}})])])}))],1):t._e(),t._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),n("ul",t._l(t.discList,function(e,i){return n("li",{staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"list.imgurl"}],attrs:{width:"60px",height:"60px"}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("Loading")],1)])],1)},staticRenderFns:[]}},472:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-header"),t._v(" "),n("tab"),t._v(" "),n("keep-alive",[n("router-view")],1)],1)},staticRenderFns:[]}},473:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  正在努力开发中.......\n")])},staticRenderFns:[]}},474:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  正在努力开发中.......\n")])},staticRenderFns:[]}},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===i}})}))])},staticRenderFns:[]}},58:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return r});var i={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},s={param:"jsonpCallback"},r=0}},[197]);
//# sourceMappingURL=app.a7c4bdadd3d8f1573e08.js.map