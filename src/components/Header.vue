<template>
  <div class="fixed" ref="Header">
    <div class="top">
      <div class="top_info">
        <van-icon name="bars" class="top_icon" @click="showPopup" />
        <router-link to="/" class="flex align-center">
          <img class="top_avatar" src="@/assets/images/home.jpg" alt="">
          <span class="top_name font">lnb_dev</span>
        </router-link>
      </div>
      <div class="search">
        <van-icon name="search" class="top_icon"/>
      </div>
    </div>
    <van-popup v-model="show" position="left" class="popup"  :style="{ width: '70%' }" @click="close">
      <div class="popup_box">
        <div class="popup_header">
          <router-link to="/" class="avatar flex align-center">
            <img class="top_avatar" src="@/assets/images/home.jpg" alt="">
            <span class="top_name font">lnb_dev</span>
          </router-link>
          <!-- <van-icon name="clear" class="popup_close" @click="show = false" /> -->
        </div>
        <div class="popup_content">
          <router-link :to="item.link" class="popup_item" v-for="(item, index) in navList" :key="index">
            <div class="flex align-center">
              <van-icon :name="item.icon" class="icon" :class="['icon-' + index]" />
              <span class="popup_item_text">{{ item.name }}</span>
            </div>
            <van-icon name="arrow" class="popup_item_icon" />
          </router-link>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      show: false,
      navList: [
        {
          link: '/home',
          icon: 'hot-o',
          name: '主页'
        },
        {
          link: '/category',
          icon: 'label',
          name: '分类'
        },
        {
          link: '/life',
          icon: 'fire',
          name: '随笔'
        },
        {
          link: '/about',
          icon: 'underway',
          name: '关于'
        }
      ]
    }
  },
  mounted() {
    this.$store.commit('setHeaderHeight', this.$refs.Header.offsetHeight)
  },
  methods: {
    showPopup () {
      this.show = true
    },
    close () {
      this.show = false
    }
  }
})
</script>

<style lang="scss">
.fixed {
  position: fixed;
  z-index: 999999999;
  width: 100%;
  background: #fff;
  display: none;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem .15rem;
    box-sizing: border-box;
    color: #000;
    border-bottom: .01rem solid #999;
    .top_info {
      display: flex;
      align-items: center;
      .top_icon {
        font-size: .26rem;
      }
      .top_avatar {
        width: .35rem;
        height: .35rem;
        border-radius: 50%;
        margin: 0 .12rem;
      }
      .top_name {
        font-size: .18rem;
      }
    }
    .search {
      .top_icon {
        font-size: .26rem;
      }
    }
  }
  .popup {
    width: .65vw;
    height: 100%;
    background: #fff;
    .popup_box {
      .popup_header {
        padding: .1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: .01rem solid #999;
        .avatar {
          .top_avatar {
            width: .35rem;
            height: .35rem;
            border-radius: 50%;
            margin: 0 .12rem 0 .07rem;
          }
          .top_name {
            font-size: .18rem;
          }
        }
        .popup_close {
          font-size: .26rem;
        }
      }
      .popup_content {
        padding: 0 .1rem .1rem;
        .popup_item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: .3rem;
          color: #999;
          .popup_item_text {
            font-weight: 600;
          }
          .popup_item_icon {
            font-weight: 600;
          }
          .icon {
            margin-right: .1rem;
            font-size: .2rem;
          }
          .icon-0 {
            color: var(--themeColor);
          }
          .icon-1 {
            color: gold;
          }
          .icon-2 {
            color: darkgoldenrod;
          }
          .icon-3 {
            color: var(--themeColor);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .fixed {
    display: inline-block;
  }
}
</style>
