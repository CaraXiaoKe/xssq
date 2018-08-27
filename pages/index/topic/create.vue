<template>
  <div class="row create-box">
    <div class="side-r mr-2 w-258">
        <module-block class="box-border" title="个人信息">
            <div class="module-item">
                <div class="avatar-box clearfix">
                    <a class="head-pic">
                        <img alt="头像" :src="topicInfo.src">
                    </a>
                    <div class="art-con">
                        <div class="f-14">
                            <nuxt-link target="_blank" class="hover" :to="topicInfo.to">杜培东</nuxt-link>
                        </div>
                        <div class="meta clearfix">
                           上次登录 2019-02-13
                        </div>
                    </div>
                </div>
            </div>
        </module-block>
    </div>
    <div class="media-body">
      <div class="topic-detail box-border">
        <bread-crumb :data="breads"/>
        <div class="con">
            <form>
                <div class="form-group row">
                    <div class="col-6">
                        <select class="form-control">
                            <option>Large select</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <div class="w-100" id="editor"></div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">创建</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleBlock from '~/components/ModuleBlock.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
export default {
  transition: 'test',
  components: {
    BreadCrumb,
    ModuleBlock
  },
  data(){
     return {
       topicInfo: {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
       breads: [
         {name: '首页',to: '/'},
         {name: '创建'},
       ]
     }
  },
  mounted(){
        const E = require('wangeditor');
        var editor = new E('#editor');
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.create()
  }
}
</script>

<style lang="scss">
  .create-box {
    .con {
        padding: 15px;
    }
    .w-e-toolbar {
        flex-wrap: wrap;
    }
    #editor > *:first-child {
        background-color: #25bb9b !important;
    }
    .w-e-toolbar .w-e-menu i {
        color:#fff;
    }
  }
</style>

