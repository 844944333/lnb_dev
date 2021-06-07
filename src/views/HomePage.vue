<template>
  <div :style="{paddingTop: headerHeight + 'px'}">
    <GiantScreen></GiantScreen>
    <home-articles ></home-articles>
  </div>
</template>

<script>
import GiantScreen from "@/components/GiantScreen";
import HomeArticles from '@/components/HomeArticles'
export default ({
  name: 'homepage',
  data () {
    return {
      imgWidth: null,
      imgHeight: null,
      hiddenText: false,
      date: {}
    }
  },
  components: {
    GiantScreen,
    HomeArticles
  },
  created () {
    let wWidth = document.documentElement.clientWidth
    let wHeight = document.documentElement.clientHeight
    this.imgWidth = wWidth + 150
    this.imgHeight = wHeight + 150
    if (wWidth <= 600) { this.imgWidth = 1920 / 1.3; this.imgHeight = 960}
    this.getTime()
  },
  mounted() {
    window.scrollTo(0,0)
  },
  computed: {
    headerHeight () {
      return this.$store.state.headerHeight
    }
  },
  methods: {
    getTime () {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      this.date = {
        year,
        month,
        day
      }
    },
    hiddenTextEmit () {
      setTimeout( () => { this.hiddenText = true }, 3000)
    }
  }
})
</script>

<style lang="scss" scoped>
/*@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
}
#scene{
  // height: 100%;
  position: relative;
  overflow: hidden;
  #image{
    position: absolute;
    max-width: none;
    display: block;
  }
}
.max {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 9999;
  .img-outer {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .moveImg {
    margin-bottom: .2rem;
    top: -.3rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    max-width: none;
    display: block;
  }
}
.tipsText {
  color: greenyellow;
  font-weight: bold;
  display: inline-block;
  animation: move .6s infinite alternate;
}
.header {
  padding: 0 .4rem;
  position: absolute;
  left: 0;
  top: .7rem;
  width: 100%;
  height: auto;
  z-index: 99999;
  img {
    width: 1rem;
    height: .44rem;
    cursor: pointer;
  }
  .icon {
    font-size: .2rem;
    color: #ff3600;
    background: rgba(255, 255, 255, .8);
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: 32px;
    border-radius: .02rem;
  }
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #4c50cf86;
  clip-path: polygon(0 0,25% 0,60% 100%,0 100%);
  pointer-events: none;
}
.info {
  position: absolute;
  top: 54%;
  left: 10%;
  color: #fff;
  width: 30%;
  transform: translateY(-50%);
  color: #ffffff;
  font-size: .5rem;
  .time {
    font-size: .16rem;
  }
  .title {
    font-size: .2rem;
    margin: .18rem 0 .3rem;
  }
  .content {
    font-size: .14rem;
    line-height: 1.8;
  }
}*/
/*/deep/ .el-drawer {
  background-color: rgba(255,255,255,.92);
}
/deep/ .el-drawer.ttb {

  height: 100% !important;
}*/
/*.navs {
  margin-top: .5rem;
  font-size: .7rem;
  color: #666
}*/
/*@media screen and (max-width: 900px) {
  .mask {
    clip-path: polygon(0 0,220px 0,700px 100%,0 100%);
  }
}
@media screen and (max-width: 780px) {
  .header {
    top: 40px;
    padding: 0 20px;
  }
  .mask {
    clip-path: none
  }
  .info {
    bottom: 8%;
    left: 5%;
    top: auto;
    width: 70%;
    transform: none;
  }
}*/
</style>
