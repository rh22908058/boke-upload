<template>
    <div class="lateart">
        <h3 class="title">近期文章</h3>
        <ul class="item-wrapper">
            <li class="item"><router-link class="todetail" to='/detail'>JavaScript 最新特性实现的三大黑科技</router-link></li>
            <li class="item">使用 Node.js 对文本内容分词和关键词抽取</li>
            <li class="item">轻松管理你的 Node 版本</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .lateart
        /*这里要指定宽度，否则父组件外层容器指定了宽度，子组件宽度大于容器宽度时会撑开*/
        width 300px
        .title
            font-size 20px
        .item-wrapper
            padding-left 0
            .item
                list-style none
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
                padding 10px 0
                a
                    text-decoration none
                    
</style>