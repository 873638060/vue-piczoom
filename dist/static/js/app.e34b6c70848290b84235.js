webpackJsonp([1],{"035X":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("VCXJ"),o={props:{scale:{type:Number,default:2.5},url:{type:String,required:!0},bigUrl:{type:String,default:null},scroll:{type:Boolean,default:!1}},data:function(){return{id:null,cover:null,imgbox:null,imgwrap:null,img:null,canvas:null,ctx:null,rectTimesX:0,rectTimesY:0,imgTimesX:0,imgTimesY:0,init:!1}},created:function(){for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=t.length,i="",s=0;s<10;s++)i+=t.charAt(Math.floor(Math.random()*e));this.id=i},mounted:function(){var t=this;this.$nextTick(function(){t.initBox()})},methods:{initBox:function(){var t=this,e=this.$refs[this.id];this.imgbox=e,this.cover=e.querySelector(".mouse-cover"),this.cover.style.width=this.imgbox.offsetWidth/this.scale+"px",this.cover.style.height=this.imgbox.offsetHeight/this.scale+"px",this.cover.style.left="-100%",this.cover.style.top="-100%",this.imgwrap=e.querySelector("img");var i=void 0;i=this.bigUrl?this.bigUrl:this.imgwrap.src,this.img=new Image,this.img.src=i,this.img.onload=function(){t.rectTimesX=t.cover.offsetWidth/t.imgwrap.offsetWidth,t.rectTimesY=t.cover.offsetHeight/t.imgwrap.offsetHeight,t.imgTimesX=t.img.width/t.imgwrap.offsetWidth,t.imgTimesY=t.img.height/t.imgwrap.offsetHeight,t.init=!0},this.canvas||(this.canvas=document.createElement("canvas"),this.canvas.className="mouse-cover-canvas",this.canvas.style.position="absolute",this.canvas.style.left=this.imgbox.offsetLeft+this.imgbox.offsetWidth+10+"px",this.canvas.style.top=this.imgbox.offsetTop+"px",this.canvas.style.border="1px solid #eee",this.canvas.style.zIndex="99999",this.canvas.height=this.imgbox.offsetHeight,this.canvas.width=this.imgbox.offsetWidth,this.canvas.style.display="none",document.body.append(this.canvas)),this.ctx=this.canvas.getContext("2d")},mousemove:function(t){if(!this.init)return!1;var e=this;var i,s=t||event,o={x:(i=s).clientX-e.cover.offsetWidth/2,y:i.clientY-e.cover.offsetHeight/2},n=function(t){var e=null,i=null,s=t.offsetParent;for(e+=t.offsetLeft,i+=t.offsetTop;s;)-1===navigator.userAgent.indexOf("MSIE 8.0")&&(e+=s.clientLeft,i+=s.clientTop),e+=s.offsetLeft,i+=s.offsetTop,s=s.offsetParent;return{left:e,top:i}}(this.imgwrap),a={minX:n.left,maxX:n.left+this.imgwrap.offsetWidth-this.cover.offsetWidth,minY:n.top-document.documentElement.scrollTop,maxY:n.top-document.documentElement.scrollTop+this.imgwrap.offsetHeight-this.cover.offsetHeight};o.x>a.maxX&&(o.x=a.maxX),o.x<a.minX&&(o.x=a.minX),o.y>a.maxY&&(o.y=a.maxY),o.y<a.minY&&(o.y=a.minY),this.cover.style.left=o.x+"px",this.cover.style.top=o.y+"px",this.ctx.clearRect(0,0,this.imgwrap.offsetWidth,this.imgwrap.offsetHeight);var c=o.x-(n.left-document.documentElement.scrollLeft),r=o.y-(n.top-document.documentElement.scrollTop);this.ctx.drawImage(this.img,c*this.imgTimesX,r*this.imgTimesY,this.img.width*this.rectTimesX,this.img.height*this.rectTimesY,0,0,this.imgbox.offsetWidth,this.imgbox.offsetHeight)},mouseover:function(t){if(!this.init)return!1;t=t||event,this.scroll||(t.currentTarget.addEventListener("mousewheel",function(t){t.preventDefault()},!1),t.currentTarget.addEventListener("DOMMouseScroll",function(t){t.preventDefault()},!1)),this.cover.style.display="block",this.canvas.style.display="block"},mouseleave:function(){if(!this.init)return!1;this.cover.style.display="none",this.canvas.style.display="none"}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:t.id,staticClass:"magnifier-box",on:{mousemove:t.mousemove,mouseover:t.mouseover,mouseleave:t.mouseleave}},[i("img",{attrs:{src:t.url,alt:""}}),t._v(" "),i("div",{staticClass:"mouse-cover"})])},staticRenderFns:[]};var a={name:"App",components:{PicZoom:i("X4nt")(o,n,!1,function(t){i("035X")},"data-v-bcf779a6",null).exports}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("div",{staticClass:"pic-box"},[i("pic-zoom",{attrs:{url:"static/imac2.jpg",scale:3}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"pic-box"},[i("pic-zoom",{attrs:{url:"static/imac2.jpg",scale:3,scroll:!0}})],1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"pic-box"},[i("pic-zoom",{attrs:{url:"static/imac2_thumb.jpg","big-url":"static/imac2.jpg",scale:3}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("配置3倍放大："),e("span",{staticStyle:{color:"#ff6600"}},[this._v(':scale="3"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("配置放大时可滚动页面(滚轮)："),e("span",{staticStyle:{color:"#ff6600"}},[this._v(':scroll="true"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("分开配置大小图片地址："),e("span",{staticStyle:{color:"#ff6600"}},[this._v('url="static/imac2_thumb.jpg" big-url="static/imac2.jpg"')])])}]};var r=i("X4nt")(a,c,!1,function(t){i("n35y")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:r},template:"<App/>"})},n35y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e34b6c70848290b84235.js.map