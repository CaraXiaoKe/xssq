<template>
    <div class="comment-lists mt-2 box-border">
        <div class="media" v-for="i in 10" :key="i">
            <img width="50" class="mr-3 rounded-circle" src="https://images.nowcoder.com/images/20180228/8192548_1519799575628_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x" alt="Generic placeholder image">
            <div class="media-body">
                <h6 class="mt-0">杜培东</h6>
                收到收到，太感谢你了~
                <div class="clearfix mt-1">
                    <span class="float-left txt-gray f-12">发表于 2018-04-04 14:37:44</span>
                    <span class="float-right">
                        赞(0) | 回复
                    </span>
                </div>
                <div class="media-reply">
                    <div class="media mb-3" v-for="i in 5" :key="i">
                        <a class="pr-3" href="#">
                            <img class="rounded-circle" width="50" src="https://images.nowcoder.com/images/20180228/8192548_1519799575628_7C2C60506876716CCF0E706DB13D4511@0e_100w_100h_0c_1i_1o_90Q_1x" alt="Generic placeholder image">
                        </a>
                        <div class="media-body">
                            <h6 class="mt-0">杜培东</h6>
                            不用谢
                            <div class="clearfix mt-1">
                                <span class="float-left txt-gray f-12">发表于 2018-04-04 14:37:44</span>
                                <span class="float-right">
                                    赞(0) | 回复
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    .comment-lists {
        font-size:14px;
        padding: 20px;
        > .media {
            margin-bottom: 10px;
            border-bottom: 1px dashed #e5e5e5;
            padding-bottom: 20px;
        }
        .media-reply {
            background: #eff0f2;
            padding: 30px 15px 5px;
            margin-top: 10px;
        }
    }
</style>

