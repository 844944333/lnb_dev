<template>
  <div class="article font">
    <div class="item wow animate__animated animate__fadeInLeft" @click="toDetail"
         v-for="(item, index) in 10" :key="index"
         :class="{'animate__fadeInLeft': index % 2 === 0, 'animate__fadeInRight': index % 2 !== 0}"
    >
      <img class="img wow animate__animated animate__bounce" src="http://rocky10.cn/img/home.ef8f0e1a.jpg" alt="">
      <div class="info">
        <div class="title">标33题</div>
        <div class="desc">描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述描述描述描述描述描描述描述描述描述描述描述</div>
        <div class="msg">
          <div class="category flex align-center icon">
            <van-icon name="label" class="icon"/>
            <span>
              JavaScript
            </span>
          </div>
          <div class="category">2021-06-28 14:00:00</div>
          <div class="category">
            <van-icon name="browsing-history" class="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'

export default {
  data () {
    return {

    }
  },
  mounted() {
    new WOW({live: false}).init()
  },
  methods: {
    toDetail () {
      this.$router.push({path:'/detail',query: {id:'1'}})
    }
  }
}
</script>

<style lang="scss">
.article {
  padding-bottom: .9rem;
  .item {
    cursor: pointer;
    box-shadow: 0 0 .4rem #dcdbff;
    background: #fff;
    margin: .9rem auto 0;
    padding: .3rem;
    box-sizing: border-box;
    width: 65vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      width: 28vw;
      height: 16vw;
      margin-right: .4rem;
      border-radius: 0.08rem;
      flex-shrink: 0;
    }
    .info {
      width: 100%;
      min-height: 16vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: .6rem;
      .title {
        flex: 2;
      }
      .desc {
        flex: 6;
        width: 100%;
        margin: .2rem 0;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 11;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .msg {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .16rem;
        .icon {
          color: var(--themeColor);
        }
      }
    }
  }

}
@media screen and (max-width: 800px) {
  .article {
    .item {
      margin-top: .3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .img {
        margin: 0;
        width: 80vw;
        height: 40vw;
        border-radius: .08rem;
      }
      .info {
        margin-right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: .2rem;
        .title {
          width: 100%;
          text-align: center;
          font-size: .22rem;
        }
        .desc {
          font-size: .18rem;
          -webkit-line-clamp: 3;
        }
        .msg {
          flex: 2;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          font-size: .14rem;
        }
      }
    }
  }
}
</style>
