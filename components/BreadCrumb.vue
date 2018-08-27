<template>
    <nav class="bread-box f-14">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="(item, index) in data" :key="index">
                <nuxt-link class="hover" v-if="item.to" :to="item.to">{{item.name}}</nuxt-link>
                <span v-else>{{item.name}}</span>
            </li>
        </ol>
    </nav>
</template>

<script>

export default {
    props: {
        data: {
            type: Array,
            default: () =>{
                return [];
            }
        }
    }
}
</script>

<style lang="scss">
    .bread-box {
        .breadcrumb {
            background: #f5f5f5;
        }
    }
    
</style>

