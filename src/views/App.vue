<template>
  <div class="home">
    <div class="bg"></div>
    <div class="center">
      <div class="wrapper">
        <div class="slash"></div>
        <div class="sides">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
        <div class="text">
          <div class="text--backing">lnb_dev</div>
          <div class="text--left">
            <div class="inner">lnb_dev</div>
          </div>
          <div class="text--right">
            <div class="inner">lnb_dev</div>
          </div>
        </div>
      </div>
      <div class="loading">
        <span class="status online"></span>
        <span class="status invisible"></span>
        <span class="status idle"></span>
        <span class="status offline"></span>
      </div>
    </div>
    <div class="wrap">
      <router-link to="/home" class="item">
        <!--<van-icon name="star" class="icon" />-->
        <van-icon name="hot-o" class="icon" />
        <div class="margin-top">主页</div>
      </router-link>
      <router-link to="/category" class="item">
        <van-icon name="label" class="icon" />
        <div class="margin-top">分类</div>
      </router-link>
      <router-link to="/life" class="item">
        <van-icon name="fire" class="icon" />
        <div class="margin-top">随笔</div>
      </router-link>
      <router-link to="/about" class="item">
        <van-icon name="underway" class="icon" />
        <div class="margin-top">关于</div>
      </router-link>
    </div>
    <div class="contact font">
      <div class="contact_item">
        <van-icon name="wechat" />
        : lnb_dev</div>
      <div class="contact_item">
        <van-icon name="invition" />
        : 844944333@qq.com</div>
    </div>
    <a class="bean" href="http://beian.miit.gov.cn/" target="_blank" >桂ICP备2021003495号</a>
  </div>
</template>

<script >

export default ({
  name: 'Home',
  data () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    animation: change 15s infinite ;
    background: linear-gradient(125deg,#2980b9,#633bd3,#8e44ad,#192f44,#27ae60);
    background-size: 800%;
    z-index: -99;
  }
  @keyframes change {
    0% { background-position-x: 0%;}
    50% { background-position-x: 100%; }
    100% { background-position-x: 0%;}
  }
  .bean {
    position: fixed;
    bottom: .2rem;
    left: 50%;
    transform: translateX(-50%);
    color: #FFDA72;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: .16rem;
    text-align: center;
  }
  @media screen and (max-width: 400px){
    .bean {
      font-size: .14rem;
    }
  }
}
a {
  text-decoration: none;
  text-align: center;
}
.icon {
  font-size: .3rem;
  color: gold;
}
.margin-top {
  margin-top: .1rem;
  color: #72ff7d;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: .2rem;
  .item {
    margin: 0 .2rem;
  }
}
.contact {
  display: flex;
  justify-content: space-around;
  margin-top: .3rem;
  min-width: 1rem;
  color: azure;
  font-size: .14rem;
  .contact_item {
    display: flex;
    align-items: center;
    &:nth-child(2) {
      margin-left: .2rem;
    }
  }
}
.center {
  text-align: center;
  .wrapper {
    position: relative;
    color: #fff;
    font-size: .16rem;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    padding: .2rem .18rem .2rem .25rem;
  }
  .slash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg) scaleY(0);
    transform-origin: center center;
    width: 0.02rem;
    height: 145%;
    background: #fff;
    z-index: 4;
    box-shadow: 0 0 10px #27ae60;
    animation: slash 6s ease-in infinite;
  }
  .slash:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.1rem;
    height: 120%;
    background: #232323;
    z-index: -1;
  }
  .slash:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .sides {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .sides .side {
    position: absolute;
    background: #fff;
  }
  .sides .side:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 0.02rem;
    transform: translateX(-101%);
    animation: side-top ease 6s infinite;
    box-shadow: 0 0 10px #ffd700;
  }
  .sides .side:nth-child(2) {
    top: 0;
    right: 0;
    width: 0.02rem;
    height: 100%;
    transform: translateY(-101%);
    animation: side-right ease 6s infinite;
    // linear-gradient(125deg,#2980b9,#633bd3,#8e44ad,#192f44,#27ae60);
  }
  .sides .side:nth-child(3) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.02rem;
    transform: translateX(101%);
    animation: side-bottom ease 6s infinite;
  }
  .sides .side:nth-child(4) {
    top: 0;
    left: 0;
    width: 0.02rem;
    height: 100%;
    transform: translateY(101%);
    animation: side-left ease 6s infinite;
  }
  .text {
    position: relative;
  }
  .text--backing {
    opacity: 0;
  }
  .text--left {
    position: absolute;
    top: 0;
    left: 0;
    width: 51%;
    height: 100%;
    overflow: hidden;
  }
  .text--left .inner {
    transform: translateX(100%);
    animation: text-left 6s ease-in-out infinite;
  }
  .text--right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .text--right .inner {
    transform: translateX(-200%);
    animation: text-right 6s ease-in-out infinite;
  }
  @keyframes slash {
    0% {
      transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    }
    6% {
      transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
    }
    13% {
      transform: translate(-50%, -50%) rotate(24deg) scaleY(1);
    }
    16.6% {
      transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    }
    100% {
      transform: translate(-50%, -50%) rotate(24deg) scaleY(0);
    }
  }
  @keyframes text-left {
    0% {
      transform: translateX(100%);
    }
    10% {
      transform: translateX(0);
    }
    58% {
      transform: translateX(0);
    }
    70% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
  @keyframes text-right {
    0% {
      transform: translateX(-200%);
    }
    10% {
      transform: translateX(-100%);
    }
    58% {
      transform: translateX(-100%);
    }
    70% {
      transform: translateX(-300%);
    }
    100% {
      transform: translateX(-300%);
    }
  }
  @keyframes side-top {
    0%,
    14% {
      transform: translateX(-101%);
    }
    24%,
    55% {
      transform: translateX(0);
    }
    65% {
      transform: translateX(101%);
    }
    100% {
      transform: translateX(101%);
    }
  }
  @keyframes side-right {
    0%,
    14%,
    23% {
      transform: translateY(-101%);
    }
    30%,
    62% {
      transform: translateY(0);
    }
    72% {
      transform: translateY(101%);
    }
    100% {
      transform: translateY(101%);
    }
  }
  @keyframes side-bottom {
    0%,
    14%,
    24%,
    28% {
      transform: translateX(101%);
    }
    37%,
    70% {
      transform: translateX(0);
    }
    79% {
      transform: translateX(-101%);
    }
    100% {
      transform: translateX(-101%);
    }
  }
  @keyframes side-left {
    0%,
    14%,
    24%,
    34%,
    35% {
      transform: translateY(101%);
    }
    44%,
    79% {
      transform: translateY(0);
    }
    86% {
      transform: translateY(-101%);
    }
    100% {
      transform: translateY(-101%);
    }
  }

  .loading {
    margin: .3rem 0 .3rem 0;

    .status {
      position: relative;
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 10px;
    }

    .status.online,
    .status.online:before {
      background: #72ff7d;
    }

    .status.offline,
    .status.offline:before {
      background: #ff4242;
    }

    .status.invisible,
    .status.invisible:before {
      background: #42e5ff;
    }

    .status.idle,
    .status.idle:before {
      background: #ffda72;
    }

    .status:before {
      content: "";
      display: block;
      position: absolute;
      left: -5px;
      top: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      animation: pulse 1.5s infinite ease-in;
    }

    @keyframes pulse {
      from {
        transform: scale(0.5);
        opacity: 1;
      }
      to {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }

}

</style>
