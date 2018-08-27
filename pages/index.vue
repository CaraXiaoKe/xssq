<template>
  <div class="g">
    <header-component />
    <div class="container mt-1 mt-sm-3">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '~/components/header.vue';

export default {
  components:{
    HeaderComponent
  },
  transition: 'test'
}
</script>

<style lang="scss">
  .sidebar {
    text-align: center;
    font-size:14px;
    a {
      display: block;
      line-height: 34px;
    }
  }
</style>

