<template>
  <section class="msite">
      <!-- 首页头部 -->
      <HeaderTop :title="address.name">
        <span class="header_search" slot="left" @click="$router.replace('/search')">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right" v-if="user._id" @click="$router.replace('/profile')">
          <span class="header_login_text"><i class="iconfont icon-person"></i></span>
        </span>
        <span class="header_login" slot="right" v-else @click="$router.replace('/login')">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categorysArr.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(categoryArr, index) in categorysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for="(category, index) in categoryArr" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl+category.image_url">
                </div>
                <span>{{category.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <GoodsList></GoodsList>
      </div>
    </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Swiper from 'swiper'
import GoodsList from '../../components/GoodsList/GoodsList'
import 'swiper/css/swiper.min.css'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  },
  watch: {
    categorys (value) {
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['address', 'categorys', 'user']),
    categorysArr () {
      const Arr = []
      let miniArr = []
      const {categorys} = this
      categorys.forEach(category => {
        miniArr.push(category)
        if (miniArr.length === 8) {
          Arr.push(miniArr)
          miniArr = []
        }
      })
      if (miniArr.length !== 0) {
        Arr.push(miniArr)
      }
      return Arr
    }
  },
  components: {
    HeaderTop,
    GoodsList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
