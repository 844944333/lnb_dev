<template>
  <div class="article font">
    <div class="item wow animate__animated animate__fadeInLeft">
      <img class="img" src="http://rocky10.cn/img/home.ef8f0e1a.jpg" alt="">
      <div class="info">
        <div class="title">标33题</div>
        <div class="desc">描述</div>
        <div class="msg">
          <div class="category">分234类</div>
          <div class="category">发布时间</div>
          <div class="category">浏览df</div>
        </div>
      </div>
    </div>
    <div class="item wow animate__animated animate__fadeInRight">
      <img class="img" src="http://rocky10.cn/img/home.ef8f0e1a.jpg" alt="">
      <div class="info">
        <div class="title">标题</div>
        <div class="desc">描述描asdf述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
        <div class="msg">
          <div class="category">分类</div>
          <div class="category">发布时间</div>
          <div class="category">浏览</div>
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
      width: 25vw;
      height: 18vw;
      margin-right: .4rem;
    }
    .info {
      width: 100%;
      min-height: 18vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: .6rem;
      .title {
        flex: 2;
      }
      .desc {
        flex: 6;
      }
      .msg {
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
          width: 100%;
          margin: .2rem 0;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .msg {
          flex: 2;
          margin: 0 auto;
          width: 100%;
          background: #0CB8EA;
          text-align: center;
        }
      }
    }
  }
}
</style>
