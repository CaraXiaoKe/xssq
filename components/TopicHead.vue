<template>
    <div class="avatar-box">
        <a class="head-pic">
            <img alt="头像" :src="data.src">
        </a>
        <div class="art-con">
            <div class="f-14">
                <nuxt-link target="_blank" class="hover" :to="data.to">2018校招笔试真题汇总</nuxt-link>
                <span class="bg-c-1 m-badge">置顶</span>
                <span class="bg-c-2 m-badge">热</span>
            </div>
            <div class="meta clearfix">
                <div class="float-left txt-gray">
                    <a class="hover" href="#">杜培东</a>
                    2018-03-12
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
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            dafault(){
                return {}
            }
        }
    }
}
</script>

