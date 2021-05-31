<template>
  <div class="home">
    <div class="wow animate__animated animate__fadeInLeft" data-wow-offset="10" v-for="(item, index) in 999" :key="index">{{item}}</div>
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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
