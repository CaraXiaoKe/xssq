<template>
  <div class="dw-header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">logo</a>
            <button @click="collapsehandle" class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div :class="{show: collapse}" class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="(item, index) in titles" :key="index">
                        <nuxt-link exact class="nav-link" :to="item.link">{{item.name}}</nuxt-link>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> -->
                </ul>
                
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 form-control-sm" type="search" placeholder="站内搜索" aria-label="Search">
                    <button class="btn btn-primary btn-sm mr-2">搜索</button>
                </form>
                <nuxt-link class="login-link" to="/login"><button type="button" class="btn btn-primary btn-sm mr-1">登陆</button></nuxt-link>
                <nuxt-link class="login-link" to="/register"><button type="button" class="btn  btn-primary btn-sm">注册</button></nuxt-link>
                <div class="close-m txt-gray d-sm-none">
                    <button class="btn btn-primary" @click="collapse=false" >X</button>
                </div>
            </div>
        </nav>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
      return {
          collapse: false,
          titles: [
              {
                  name: '首页',
                  link: '/'
              },
              {
                  name: '小说',
                  link: '/novel'
              },
              {
                  name: '动漫',
                  link: '/animation'
              },
              {
                  name: '生活',
                  link: '/live'
              }
          ]
      }
  },
  mounted(){
   console.log(axios);
  },
  methods: {
      collapsehandle(){
          this.collapse = !this.collapse;
      }
  },
  watch:{
      '$route'(){
          this.collapse = false;
      }
  }
}
</script>

<style lang="scss">
    .dw-header {
        .navbar-dark .navbar-toggler {
            border:none;
        }
         background: #3d444c;
         .navbar-brand{
            color: #ccc;
        }
         .nav-item{
            .nav-link{
                color: #ccc;
                font-size: 16px;
                line-height: 38px;
                padding-left:15px;
                padding-right:15px;
            }
            .nuxt-link-active {
                background:#31363d;
                color: #fff;
            }
        }
        .navbar {
            padding:0;
        }
        .show {
            padding-top: 10px;
        }
        .show .form-control {
            width: auto;
            flex: 1;
            margin-right: 10px;
        }
        button:focus {
            box-shadow: none;
            outline: none;
        }
        .close-m {
            font-size:16px;
            line-height:30px;
            text-align: center;
            padding: 10px;
            .btn-primary {
                margin: 0 auto;
            }
        }
    }
</style>

