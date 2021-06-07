<template>
  <div id="app">
    <pageLoadScrollBar></pageLoadScrollBar>
    <Header v-show="!(path === '/')"></Header>
    <go-top></go-top>
    <transition class="change" name="fade" mode="out-in" >
      <keep-alive >
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import pageLoadScrollBar from "@/components/pageLoadScrollBar";
import Header from "@/components/Header";
import goTop from '@/components/GoTop'
export default ({
  data () {
    return {
      path: ''
    }
  },
  components: {
    pageLoadScrollBar,
    goTop,
    Header
  },
  mounted() {
    this.hidePageLoadScrollBar()
    // 判断路由
    this.path = this.$route.path
  },
  methods: {
    hidePageLoadScrollBar () {
      setTimeout(() => {
        this.$store.commit('setShowPageLoadScrollBar',false)
      }, 1000)
    }
  },
  watch:{
    $route(to){
      this.path = to.path
    }
  }
})
</script>

<style lang="scss">
html {
  /* 设置字体大小为 16px ---> font-size: .16rem */
  font-size: 100px !important;
  --themeColor: #006dfe;
  overflow-x: hidden;
}
html,
body {
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: .16rem;
}
@font-face{
  font-family: font;
  src: url("./assets/font/JetBrainsMono-Regular.ttf");
  /* swap: 如果设定的字体还未加载完成，浏览器将首先使用备用字体显示， 当设定的字体加载完成时替换备用字体 */
  font-display: swap;
}
.font {
  font-family: font;
}
.fade-leave-active {
  transition: all .6s ease-out;
  opacity: 0;
  transform: translateX(-20px);
}
.fade-enter-active {
  transition: all .5s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}
.flex {
  display: flex;
}
.flex-direction {
  flex-direction: column;
}
.align-center {
  align-items: center;
}

</style>
