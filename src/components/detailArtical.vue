
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
            随着屏幕的大小变换，内容区域的元素会匹配屏幕重新布局，就是我们说的自适应效果。我们在.col列中追加class类就可以实现自适应效果。如超小屏幕(xs)、超大屏幕(xl)。栅格系统首先会匹配移动手机版小屏幕，所以每个.col都需要一个class如：.xs-*，这样的话如果大屏幕的类没有设置，它就会使用这个.xs-*。
本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 首先本文不会探讨
单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。
        </p>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        created(){
            console.log('detail')
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
    .artical
        margin-top 50px
        text-align center
        .title
            font-size 20px
        .content
            font-size 16px
            line-height 30px
</style>