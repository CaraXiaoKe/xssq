<template>
    <div class="side-r ml-0 w-258 ml-sm-1">
        <module-block v-for="(item, index) in modules" :key="index" class="box-border" :title="item.name">
            <div class="module-item">
            <h6 class="f-14">滴滴这种垃圾公司怎么还不关停？</h6>
            <div class="clearfix txt-gray">
                <span class="float-left">发表于 2018-08-25 14:20:41</span>
                <span class="float-right">回复(29)</span>
            </div>
            </div>
            <div class="module-item">
            <h6 class="f-14">滴滴这种垃圾公司怎么还不关停？</h6>
            <div class="clearfix txt-gray">
                <span class="float-left">发表于 2018-08-25 14:20:41</span>
                <span class="float-right">回复(29)</span>
            </div>
            </div>
            <div class="module-item">
            <h6 class="f-14">滴滴这种垃圾公司怎么还不关停？</h6>
            <div class="clearfix txt-gray">
                <span class="float-left">发表于 2018-08-25 14:20:41</span>
                <span class="float-right">回复(29)</span>
            </div>
            </div>
        </module-block>
    </div>
</template>

<script>
import ModuleBlock from '~/components/ModuleBlock.vue';
export default {
  components: {
    ModuleBlock
  },
  data(){
    return {
      modules: [
        {name: '排行榜'},
        {name: '推荐'},
      ]
    }
  }
}
</script>

