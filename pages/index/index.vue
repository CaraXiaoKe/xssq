<template>
  <div class="row">
    <!-- <div style="width:180px;margin-right:10px;">
      <div class="box-border pb-5">
        <div class="list-group">
          <ul class="nav flex-column sidebar">
            <li class="nav-item">
              <nuxt-link exact class="hover-blue" to="/">帖子</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="media-body">
      <div class="box-border">
        <module-block title="小说">
          <button @click="$router.push('/topic/create?type=1')" class="btn btn-primary btn-sm" slot="extra">我要发帖</button>
          <menu-list :data="menu"/>
          <div class="col-sm">
            <ul class="art-list">
              <li class="clearfix" v-for="(item, index) in lists" :key="index">
                  <topic-head  :data="item" />
              </li>
            </ul>
            <div class="text-center pagination-box">
              <ul class="pagination">
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">
                    <span>&laquo;</span>
                  </nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">1</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">2</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">3</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#" aria-label="Next">
                    <span>&raquo;</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </module-block>
      </div>
      <div class="box-border mt-2">
        <module-block title="动漫">
          <button @click="$router.push('/topic/create?type=2')" class="btn btn-primary btn-sm" slot="extra">我要发帖</button>
          <menu-list :data="menu"/>
          <div class="col-sm">
            <ul class="art-list">
              <li class="clearfix" v-for="(item, index) in lists" :key="index">
                  <topic-head  :data="item" />
              </li>
            </ul>
            <div class="text-center pagination-box">
              <ul class="pagination">
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">
                    <span>&laquo;</span>
                  </nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">1</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">2</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">3</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#" aria-label="Next">
                    <span>&raquo;</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </module-block>
      </div>
      <div class="box-border mt-2">
        <module-block title="生活">
          <button @click="$router.push('/topic/create?type=3')" class="btn btn-primary btn-sm" slot="extra">我要发帖</button>
          <menu-list :data="menu"/>
          <div class="col-sm">
            <ul class="art-list">
              <li class="clearfix" v-for="(item, index) in lists" :key="index">
                  <topic-head  :data="item" />
              </li>
            </ul>
            <div class="text-center pagination-box">
              <ul class="pagination">
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">
                    <span>&laquo;</span>
                  </nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">1</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">2</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#">3</nuxt-link>
                </li>
                <li class="page-item">
                  <nuxt-link class="page-link" to="#" aria-label="Next">
                    <span>&raquo;</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </module-block>
      </div>
    </div>
    <side-bar-right />
  </div>
</template>

<script>
import MenuList from '~/components/MenuList.vue';
import TopicHead from '~/components/TopicHead.vue';
import ModuleBlock from '~/components/ModuleBlock.vue';
import SideBarRight from '~/components/SideBarRight.vue';
export default {
  components: {
    MenuList,
    TopicHead,
    ModuleBlock,
    SideBarRight
  },
  data(){
    return {
      menu: [
        {name: '全部', to: '/'},
        {name: '热帖', to: '/a'},
        {name: '推荐', to: '/b'},
        {name: '武侠', to: '/a'},
        {name: '玄幻', to: '/b'},
        {name: '修仙', to: '/b'},
      ],
      lists: [
        {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
        {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
        {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
        {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
        {
          to: '/topic/1',
          src: 'https://images.nowcoder.com/images/20180724/826546_1532425488429_096DB47E2A57779399EF57266590AAC3@0e_100w_100h_0c_1i_1o_90Q_1x', 
        },
      ]
    }
  },
  methods: {
    pageHandle(){

    }
  }
}
</script>

<style lang="scss">
  .art-list {
    padding:20px 0;
    .head-pic {
      border-radius: 50%;
      display: block;
      float: left;
      height: 50px;
      margin-right: 10px;
      overflow: hidden;
      width: 50px;
    }
    .art-con {
      color: #333;
      flex:1;
    }
    li {
      display: flex;
    }
    li + li {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #e5e5e5;
    }
    .meta {
      font-weight: bolder;
      margin-top: 5px;
      font-size: 12px;
    }
  }
</style>

