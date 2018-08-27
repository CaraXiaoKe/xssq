<template>
  <div class="box-border login-box media-body">
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <span class="nav-link active">登陆</span>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" to="/register">注册</nuxt-link>
      </li>
    </ul>
    <form class="col-sm-8 offset-sm-2 mt-3 mt-sm-5">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-md">账号</label>
        <div class="col-sm-10">
          <input class="form-control form-control-md" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-md">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control form-control-md" id="inputPassword3" placeholder="Password">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10 offset-2">
          <button type="submit" class="btn btn-primary">登陆</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="scss">
 .login-box {
   font-size:14px;
   .nav-link {
     font-size:24px;
     line-height: 40px;
     border-left:none;
     border-right:none;
   }
   .nav-link:not(.active) {
     background: #eee;
   }
   .nav-tabs .nav-link.active {
     border-top: 2px solid #00bc9b;
     color: #00bc9b;
   }
   a:hover {
     color: inherit;
   }
   .form-group {
     margin-bottom:25px;
   }
 }
</style>

