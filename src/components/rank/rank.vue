<template>
  <div>
    正在努力开发中.......
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'test'
      ])
    },
    created () {
      console.log(this.test)
    }
  }
</script>

<style lang="stylus">
  
</style>
