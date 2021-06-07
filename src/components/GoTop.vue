<template>
  <div @click="goTop" v-show="btnFlag" ref="top" class="iconfont icon-fanhuidingbu go-top animate__animated animate__fadeInUpBig" ></div>
</template>

<script >
export default ({
  name: 'GoTop',
  data () {
    return {
      btnFlag: false,
      throttleScrollHandle: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollBar)
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
      this.$refs.top.style.color = '#1AAB29'
    }
  },
  methods: {
    // 回到顶部
    goTop () {
      const div = document.querySelector('#app')
      div.scrollIntoView({ behavior: 'smooth' })
    },
    scrollBar () {
      const _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.btnFlag = _scrollTop > 100
    }
  }
})
</script>

<style lang="scss" scoped>
.go-top {
  position: fixed;
  bottom: .5rem;
  right: .2rem;
  z-index: 99999;
  font-size: .4rem;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #1AAB29;
  }
}
</style>
