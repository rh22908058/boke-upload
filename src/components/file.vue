<template>
    <div class="file">
        <h3 class="title">文章归档</h3>
        <ul class="item-wrapper">
          <li class="item"><a href="">2017年6月（6）</a></li>
          <li class="item"><a href="">2017年5月（8）</a></li>
          <li class="item">2017年4月（12）</li>
          <li class="item">2017年3月（9）</li>
          <li class="item">2017年2月（2）</li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .title
        font-size 20px
    .item-wrapper
        padding-left 0
        .item
            list-style none
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            padding 6px 0
            a
                text-decoration none
</style>