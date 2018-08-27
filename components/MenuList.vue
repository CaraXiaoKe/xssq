<template>
    <nav class="nav nav-menu">
        <nuxt-link v-for="(item, index) in data" :to="item.to" :key="index">{{item.name}}</nuxt-link>
    </nav>
</template>

<script>
export default {
  props: {
      data:{
          type: Array,
          default: ()=>{
              return []
          }
      }
  },
  mounted(){
  },
}
</script>

<style lang="scss">
    .nav-menu {
        color:#333;
        font-size: 14px;
        background:#f5f5f5;
        &.nav {
            padding: 15px;
        }
        a {
            display: block;
            height: 28px;
            line-height: 28px;
            padding: 0 5px;
            margin-right: 10px;
        }
        a.nuxt-link-active {
           background:#25bb9b; 
           color: #fff;
        }
        a:not(.nuxt-link-active):hover {
            color: #25bb9b;
        }
    }
</style>

