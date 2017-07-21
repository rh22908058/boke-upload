<template>
    <div class="tag">
        <h3 class="title">标签</h3>
        <ul class="content">
            <li class="label">
                <a href="">前端</a>
            </li>
            <li class="label">
                <a href="">css</a>
            </li>
            <li class="label">Nodejs</li>
            <li class="label">UI</li>
            <li class="label">数据库</li>
            <li class="label">爬虫</li>
            <li class="label">Java</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .title
        font-size 20px
    .content
        padding-left 0
        .label
            display inline-block
            list-style none
            padding 3px 8px
            border 1px solid green
            border-radius 5px
            margin 10px 0
            a
                text-decoration none
</style>