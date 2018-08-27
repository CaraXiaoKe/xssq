<template>
    <div class="module-block">
        <div class="module-head clearfix">
            <div class="module-head-oprt">
                <slot name="extra"/>
            </div>
            <h1>{{title}}</h1>
        </div>
        <div class="module-body">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
           
    },
    data(){
        return {

        }
    }
}
</script>

<style lang="scss">
    .module-block {
        padding-bottom: 15px;
    }
    .module-item {
        padding: 10px 15px;
        border-bottom: 1px solid #e5e5e5;
    }
    .module-item:last-child {
        padding-bottom: 0;
        border-bottom:none;
    }
    .module-head {
        padding: 8px 15px;
        padding: 0.5rem 15px;
        .module-head-oprt {
            float: right;
        }
        h1 {
            font-size: 16px;
            line-height: 29px;
            margin:0;
        }
        h1::before {
            background: #FF6547;
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius:50%;
            margin-right: 5px;
            margin-bottom: 2px;
            vertical-align: middle;
        }
    }
</style>

