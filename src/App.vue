<template>
  <div id="app">
    <div class="nav">
      <img class='pic' src="./assets/logo.png" width='60' height='60'>
      <div class="title">
        码蜂社博客
      </div>
      <div class="nav-item"><router-link to='/about'>关于</router-link></div>
      <div class="nav-item"><router-link to='/'>主页</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    box-sizing border-box
    padding 0 50px
    font-size 16px
    .nav
      width 100%
      height 90px
      border-bottom 1px solid rgb(7,17,27)   
      .title
        float left
        flex 0 0 545px
        font-size 36px
        line-height 90px
      .pic
        float left
        margin 15px 10px 0 20px
      .nav-item
        float right
        line-height 90px
        font-size 24px
        font-weight 700
        padding-right 30px
        a
          text-decoration none
</style>
