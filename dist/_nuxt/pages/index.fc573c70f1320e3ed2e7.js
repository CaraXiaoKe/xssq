webpackJsonp([5],{"+ptz":function(t,a,n){"use strict";var e=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"g"},[a("header-component"),a("div",{staticClass:"container mt-1 mt-sm-3"},[a("nuxt-child")],1)],1)};e._withStripped=!0;var s={render:e,staticRenderFns:[]};a.a=s},"/TYz":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("AzX0"),s=n("+ptz"),i=!1;var r=function(t){i||n("EwTq")},o=n("VU/8")(e.a,s.a,!1,r,null,null);o.options.__file="pages/index.vue",a.default=o.exports},"7IIO":function(t,a,n){var e=n("NDhR");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("c2f15dea",e,!1,{sourceMap:!1})},AzX0:function(t,a,n){"use strict";var e=n("HeVo");a.a={components:{HeaderComponent:e.a},transition:"test"}},EwTq:function(t,a,n){var e=n("ybO1");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("159f015c",e,!1,{sourceMap:!1})},HeVo:function(t,a,n){"use strict";var e=n("fOKH"),s=n("g3vo"),i=!1;var r=function(t){i||n("7IIO")},o=n("VU/8")(e.a,s.a,!1,r,null,null);o.options.__file="components/header.vue",a.a=o.exports},NDhR:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,".dw-header{background:#3d444c}.dw-header .navbar-dark .navbar-toggler{border:none}.dw-header .navbar-brand{color:#ccc}.dw-header .nav-item .nav-link{color:#ccc;font-size:16px;line-height:38px;padding-left:15px;padding-right:15px}.dw-header .nav-item .nuxt-link-active{background:#31363d;color:#fff}.dw-header .navbar{padding:0}.dw-header .show{padding-top:10px}.dw-header .show .form-control{width:auto;-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:10px}.dw-header button:focus{-webkit-box-shadow:none;box-shadow:none;outline:none}.dw-header .close-m{font-size:16px;line-height:30px;text-align:center;padding:10px}.dw-header .close-m .btn-primary{margin:0 auto}",""])},fOKH:function(t,a,n){"use strict";var e=n("mtWM"),s=n.n(e);a.a={data:function(){return{collapse:!1,titles:[{name:"首页",link:"/"},{name:"小说",link:"/novel"},{name:"动漫",link:"/animation"},{name:"生活",link:"/live"}]}},mounted:function(){console.log(s.a)},methods:{collapsehandle:function(){this.collapse=!this.collapse}},watch:{$route:function(){this.collapse=!1}}}},g3vo:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"dw-header"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("logo")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:t.collapsehandle}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",class:{show:t.collapse},attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.titles,function(a,e){return n("li",{key:e,staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{exact:"",to:a.link}},[t._v(t._s(a.name))])],1)})),t._m(0),n("nuxt-link",{staticClass:"login-link",attrs:{to:"/login"}},[n("button",{staticClass:"btn btn-primary btn-sm mr-1",attrs:{type:"button"}},[t._v("登陆")])]),n("nuxt-link",{staticClass:"login-link",attrs:{to:"/register"}},[n("button",{staticClass:"btn  btn-primary btn-sm",attrs:{type:"button"}},[t._v("注册")])]),n("div",{staticClass:"close-m txt-gray d-sm-none"},[n("button",{staticClass:"btn btn-primary",on:{click:function(a){t.collapse=!1}}},[t._v("X")])])],1)])])])};e._withStripped=!0;var s={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("input",{staticClass:"form-control mr-sm-2 form-control-sm",attrs:{type:"search",placeholder:"站内搜索","aria-label":"Search"}}),a("button",{staticClass:"btn btn-primary btn-sm mr-2"},[this._v("搜索")])])}]};a.a=s},ybO1:function(t,a,n){(t.exports=n("FZ+f")(!1)).push([t.i,".sidebar{text-align:center;font-size:14px}.sidebar a{display:block;line-height:34px}",""])}});