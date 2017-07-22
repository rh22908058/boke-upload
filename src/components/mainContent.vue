<template>
  <div class="main-content">
    <div class="content-wrapper">
      <artical></artical>
      <artical></artical>
      <artical></artical>
      <artical></artical>
      <artical></artical>
    </div>
    <div class="right-wrapper">
        <lateart></lateart>
        <file></file>
        <tag></tag>
    </div>
  </div>
</template>

<script>
import artical from './artical'
import lateart from './lateart'
import file from './file'
import tag from './tag'

export default {
  data () {
    return {
    }
  },
  components:{
    artical,
    lateart,
    file,
    tag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .main-content
    margin-top 50px
    display flex
    @media(max-width: 600px)
     flex-wrap wrap
    .content-wrapper
      flex 1
    .right-wrapper
      flex 0 0 300px
      margin-left 50px
      @media(max-width: 600px)
        margin-left 0
</style>
