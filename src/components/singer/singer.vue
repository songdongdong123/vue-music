<template>
  <div class="singer">
    <list-view @select = "selectSinger" :data="singer"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import { getSingetList } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import Singer from 'common/js/singer'
  import ListView from 'base/listview/listview'
  import { mapMutations } from 'vuex'
  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10
  export default {
    data () {
      return {
        singer: []
      }
    },
    created () {
      this._getSingerList()
    },
    methods: {
      selectSinger (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        // 因为我们在下面...mapMutations中做了setSinger的映射，这里实际就是调用mutations.js中的types.SET_SINGER方法
        this.setSinger(singer)
      },
      _getSingerList () {
        getSingetList().then((res) => {
          if (res.code === ERR_OK) {
            this.singer = this._normaLizeSinger(res.data.list)
          }
        })
      },
      _normaLizeSinger (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 处理map,使map变成一个有序数组
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      ...mapMutations({
        // 这里的setSinger是用来映射到mutation-types.js中的SET_SINGER
        setSinger: 'SET_SINGER'
      })
    },
    components: {
      ListView
    }
  }
</script>

<style lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
