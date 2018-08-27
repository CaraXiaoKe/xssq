<template>
  <div class="row">
    <div class="side-r mr-2 w-258">
        <module-block class="box-border" title="用户信息">
            <div class="module-item">
              <h6>培东 园龄 2年</h6>
            </div>
        </module-block>
    </div>
    <div class="media-body">
      <div class="topic-detail box-border">
        <bread-crumb :data="breads"/>
        <div class="avatar-box clearfix">
            <h5 class="mb-3">
              <span class="v-m">2018校招笔试真题汇总</span>
              <span class="bg-c-1 m-badge">置顶</span>
              <span class="bg-c-2 m-badge">热</span>
            </h5>
            <a class="head-pic">
                <img alt="头像" :src="topicInfo.src">
            </a>
            <div class="art-con">
                <div class="f-14">
                    <nuxt-link target="_blank" class="hover" :to="topicInfo.to">杜培东</nuxt-link>
                </div>
                <div class="meta clearfix">
                    <div class="float-left txt-gray">
                        编辑于 2018-03-12
                    </div>
                    <div class="float-right txt-gray">
                        <nuxt-link class="hover" to="/">回复 23</nuxt-link>
                        <span class="v-line">|</span>
                        <nuxt-link class="hover" to="/">赞 12</nuxt-link>
                        <span class="v-line">|</span>
                        <nuxt-link class="hover" to="/">浏览 12</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="con">
            <p v-for="i in 20" :key="i">最近看好多牛油贡献了很多考试的真题，我把他们汇总在一起给到大家，
            也感谢这些牛油的贡献，只要进这个汇总贴的，你们都将每人获得一份牛客送出的礼物一份~~~</p>
        </div>
        <div class="clearfix con-extra">
            <div class="float-right">
              收藏（1457）| 分享 | 回帖
            </div>
        </div>
      </div>
      <comment-list />
    </div>
  </div>
</template>

<script>
import ModuleBlock from '~/components/ModuleBlock.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import CommentList from '~/components/CommentList.vue';
export default {
  transition: 'test',
  components: {
    BreadCrumb,
    CommentList,
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
         {name: '帖子1'},
       ]
     }
  }
}
</script>

<style lang="scss">
  .topic-detail {
    .avatar-box {
      padding: 0 20px 20px;
      border-bottom: 1px solid #ddd;
    }
    .con,.con-extra{
      padding: 10px 20px;
      font-size: 14px;
    }
    .con-extra {
      border-bottom: 1px dashed #d4d4d4;
    }
  }
</style>

