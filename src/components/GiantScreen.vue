<template>
  <div class="max">
    <div id="scene" class="img-outer">
      <div data-depth="0.4" class="layer" >
        <img src="@/assets/images/home.jpg" class="moveImg" :width="imgWidth" :height="imgHeight" >
      </div>
    </div>
    <router-link to="/" class="header">
      <img class="header_img" src="@/assets/images/home.jpg" alt="">
      <div class="text font">
        过错是暂时的遗憾 <br>而错过则是永远的遗憾！
      </div>
    </router-link>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
export default ({
  name: 'giantScreen',
  data () {
    return {
      imgWidth: null,
      imgHeight: null,
      hiddenText: false,
      date: {},
    }
  },
  created () {
    let wWidth = document.documentElement.clientWidth
    let wHeight = document.documentElement.clientHeight
    this.imgWidth = wWidth + 150
    this.imgHeight = wHeight + 150
    if (wWidth <= 600) { this.imgWidth = 1920 / 1.3; this.imgHeight = 960}
    this.getTime()
    this.hiddenTextEmit()
  },
  mounted () {
    const scene = document.getElementById('scene');
    new Parallax(scene, {
      relativeInput: true,
      clipRelativeInput: true,
    })
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
.header {
  position: absolute;
  z-index: 999999;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .header_img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-size: cover;
    border: .01rem solid #fbb8ac;
    box-shadow: 0 0 .5rem #fbb8ac;
    cursor: pointer;
  }
  .text {
    margin-top: .2rem;
    line-height: 1.7;
    color: #cbf5fb;
    font-size: .14rem;
  }
}
@media screen and (max-width: 800px) {
  .header {
    top: 1.5rem;
    .header_img {
      width: 1rem;
      height: 1rem;
    }
  }
}
.tipsText {
  color: greenyellow;
  font-weight: bold;
  display: inline-block;
  animation: move .6s infinite alternate;
}
@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
}
.info {
  position: absolute;
  top: 54%;
  left: 10%;
  color: #fff;
  width: 30%;
  transform: translateY(-50%);
  font-size: .5rem;
  .time {
    font-size: .16rem;
  }
  //.title {
  //  font-size: .3rem;
  //  margin: .18rem 0 .3rem;
  //}
  .content {
    font-size: .14rem;
    line-height: 1.8;
  }
  @media screen and (max-width: 480px) {
    //.title {
    //  font-size: .25rem;
    //}
  }
}
@media screen and (max-width: 780px) {
  .info {
    bottom: 8%;
    left: 5%;
    top: auto;
    width: 70%;
    transform: none;
  }
}
</style>
