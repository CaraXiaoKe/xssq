webpackJsonp([1],{"0qJL":function(t,s,a){"use strict";var i=a("dluX"),e=a("iRs5"),r=a("32TZ");s.a={transition:"test",components:{BreadCrumb:e.a,CommentList:r.a,ModuleBlock:i.a},data:function(){return{topicInfo:{to:"/topic/1",src:"https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x"},breads:[{name:"首页",to:"/"},{name:"帖子1"}]}}}},"32TZ":function(t,s,a){"use strict";var i=a("r0w9"),e=a("vJ7s"),r=!1;var n=function(t){r||a("zEvH")},o=a("VU/8")(i.a,e.a,!1,n,null,null);o.options.__file="components/CommentList.vue",s.a=o.exports},"56Xp":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"side-r mr-2 w-258"},[a("module-block",{staticClass:"box-border",attrs:{title:"用户信息"}},[a("div",{staticClass:"module-item"},[a("h6",[t._v("培东 园龄 2年")])])])],1),a("div",{staticClass:"media-body"},[a("div",{staticClass:"topic-detail box-border"},[a("bread-crumb",{attrs:{data:t.breads}}),a("div",{staticClass:"avatar-box clearfix"},[t._m(0),a("a",{staticClass:"head-pic"},[a("img",{attrs:{alt:"头像",src:t.topicInfo.src}})]),a("div",{staticClass:"art-con"},[a("div",{staticClass:"f-14"},[a("nuxt-link",{staticClass:"hover",attrs:{target:"_blank",to:t.topicInfo.to}},[t._v("杜培东")])],1),a("div",{staticClass:"meta clearfix"},[a("div",{staticClass:"float-left txt-gray"},[t._v("\n                      编辑于 2018-03-12\n                  ")]),a("div",{staticClass:"float-right txt-gray"},[a("nuxt-link",{staticClass:"hover",attrs:{to:"/"}},[t._v("回复 23")]),a("span",{staticClass:"v-line"},[t._v("|")]),a("nuxt-link",{staticClass:"hover",attrs:{to:"/"}},[t._v("赞 12")]),a("span",{staticClass:"v-line"},[t._v("|")]),a("nuxt-link",{staticClass:"hover",attrs:{to:"/"}},[t._v("浏览 12")])],1)])])]),a("div",{staticClass:"con"},t._l(20,function(s){return a("p",{key:s},[t._v("最近看好多牛油贡献了很多考试的真题，我把他们汇总在一起给到大家，\n          也感谢这些牛油的贡献，只要进这个汇总贴的，你们都将每人获得一份牛客送出的礼物一份~~~")])})),t._m(1)],1),a("comment-list")],1)])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{staticClass:"mb-3"},[s("span",{staticClass:"v-m"},[this._v("2018校招笔试真题汇总")]),s("span",{staticClass:"bg-c-1 m-badge"},[this._v("置顶")]),s("span",{staticClass:"bg-c-2 m-badge"},[this._v("热")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"clearfix con-extra"},[s("div",{staticClass:"float-right"},[this._v("\n            收藏（1457）| 分享 | 回帖\n          ")])])}]};s.a=e},"5Rf4":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"bread-box f-14"},[a("ol",{staticClass:"breadcrumb"},t._l(t.data,function(s,i){return a("li",{key:i,staticClass:"breadcrumb-item"},[s.to?a("nuxt-link",{staticClass:"hover",attrs:{to:s.to}},[t._v(t._s(s.name))]):a("span",[t._v(t._s(s.name))])],1)}))])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},"6DHD":function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.module-block{padding-bottom:15px}.module-item{padding:10px 15px;border-bottom:1px solid #e5e5e5}.module-item:last-child{padding-bottom:0;border-bottom:none}.module-head{padding:8px 15px;padding:.5rem 15px}.module-head .module-head-oprt{float:right}.module-head h1{font-size:16px;line-height:29px;margin:0}.module-head h1:before{background:#ff6547;content:"";display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:5px;margin-bottom:2px;vertical-align:middle}',""])},"906i":function(t,s,a){var i=a("gG+B");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("d55334a6",i,!1,{sourceMap:!1})},AanO:function(t,s,a){"use strict";s.a={props:{data:{type:Array,default:function(){return[]}}}}},K4Bw:function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"module-block"},[s("div",{staticClass:"module-head clearfix"},[s("div",{staticClass:"module-head-oprt"},[this._t("extra")],2),s("h1",[this._v(this._s(this.title))])]),s("div",{staticClass:"module-body"},[this._t("default")],2)])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},LjLD:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".bread-box .breadcrumb{background:#f5f5f5}",""])},dluX:function(t,s,a){"use strict";var i=a("xKfh"),e=a("K4Bw"),r=!1;var n=function(t){r||a("fu5S")},o=a("VU/8")(i.a,e.a,!1,n,null,null);o.options.__file="components/ModuleBlock.vue",s.a=o.exports},fu5S:function(t,s,a){var i=a("6DHD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7f2018d7",i,!1,{sourceMap:!1})},"gG+B":function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".topic-detail .avatar-box{padding:0 20px 20px;border-bottom:1px solid #ddd}.topic-detail .con,.topic-detail .con-extra{padding:10px 20px;font-size:14px}.topic-detail .con-extra{border-bottom:1px dashed #d4d4d4}",""])},iRs5:function(t,s,a){"use strict";var i=a("AanO"),e=a("5Rf4"),r=!1;var n=function(t){r||a("oVcy")},o=a("VU/8")(i.a,e.a,!1,n,null,null);o.options.__file="components/BreadCrumb.vue",s.a=o.exports},mFMs:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("0qJL"),e=a("56Xp"),r=!1;var n=function(t){r||a("906i")},o=a("VU/8")(i.a,e.a,!1,n,null,null);o.options.__file="pages/index/topic/_id.vue",s.default=o.exports},oVcy:function(t,s,a){var i=a("LjLD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("6629d40e",i,!1,{sourceMap:!1})},qpRm:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".comment-lists{font-size:14px;padding:20px}.comment-lists>.media{margin-bottom:10px;border-bottom:1px dashed #e5e5e5;padding-bottom:20px}.comment-lists .media-reply{background:#eff0f2;padding:30px 15px 5px;margin-top:10px}",""])},r0w9:function(t,s,a){"use strict";s.a={props:{data:{type:Array,default:function(){return[]}}},mounted:function(){}}},vJ7s:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"comment-lists mt-2 box-border"},t._l(10,function(s){return a("div",{key:s,staticClass:"media"},[a("img",{staticClass:"mr-3 rounded-circle",attrs:{width:"50",src:"https://images.nowcoder.com/images/20180228/8192548_1519799575628_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",alt:"Generic placeholder image"}}),a("div",{staticClass:"media-body"},[a("h6",{staticClass:"mt-0"},[t._v("杜培东")]),t._v("\n            收到收到，太感谢你了~\n            "),t._m(0,!0),a("div",{staticClass:"media-reply"},t._l(5,function(s){return a("div",{key:s,staticClass:"media mb-3"},[t._m(1,!0),t._m(2,!0)])}))])])}))};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"clearfix mt-1"},[s("span",{staticClass:"float-left txt-gray f-12"},[this._v("发表于 2018-04-04 14:37:44")]),s("span",{staticClass:"float-right"},[this._v("\n                    赞(0) | 回复\n                ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"pr-3",attrs:{href:"#"}},[s("img",{staticClass:"rounded-circle",attrs:{width:"50",src:"https://images.nowcoder.com/images/20180228/8192548_1519799575628_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x",alt:"Generic placeholder image"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"media-body"},[s("h6",{staticClass:"mt-0"},[this._v("杜培东")]),this._v("\n                        不用谢\n                        "),s("div",{staticClass:"clearfix mt-1"},[s("span",{staticClass:"float-left txt-gray f-12"},[this._v("发表于 2018-04-04 14:37:44")]),s("span",{staticClass:"float-right"},[this._v("\n                                赞(0) | 回复\n                            ")])])])}]};s.a=e},xKfh:function(t,s,a){"use strict";s.a={props:{title:String},data:function(){return{}}}},zEvH:function(t,s,a){var i=a("qpRm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("273c1623",i,!1,{sourceMap:!1})}});