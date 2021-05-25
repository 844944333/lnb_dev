<template>
  <div id="app">
    <pageLoadScrollBar></pageLoadScrollBar>
    <transition class="change" name="fade" mode="out-in" >
      <keep-alive >
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import pageLoadScrollBar from "@/components/pageLoadScrollBar";
export default ({
  data () {
    return {

    }
  },
  components: {
    pageLoadScrollBar
  },
  mounted() {
    this.hidePageLoadScrollBar()
  },
  methods: {
    hidePageLoadScrollBar () {
      setTimeout(() => {
        this.$store.commit('setShowPageLoadScrollBar',false)
      }, 1000)
    }
  }
})
</script>

<style lang="scss">
html {
  /* 设置字体大小为 16px ---> font-size: .16rem */
  font-size: 100px !important;
  --themeColor: #006dfe;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
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

</style>
