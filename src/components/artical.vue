
<template>
    <div class="artical">
        <h3 class="title">前端自动化测试探索</h3> 
        <div class="info">
            <span class="info-item">前端◈</span>
            <span class="info-item">6.17.2017◈</span>
            <span class="info-item">浏览◈</span>
            <span class="info-item">37</span>
        </div>
        <p class="content">
            首先本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。
        </p>
        <!--子组件里的路由跳转也都使用router-link-->
        <div><router-link class="todetail" to='/detail'> | 查看文章 | </router-link></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        created(){
            console.log('artical created')
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
    .artical
        text-align center
        .title
            font-size 20px
        .content
            font-size 16px
            line-height 30px
        .todetail
            text-decoration none
            font-size 18px
            color rgb(7,17,27)
</style>