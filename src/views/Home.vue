<template>
  <div class="home">
    <div class="bg"></div>
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
  height: 100%;
  position: relative;
  .bg {
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
    position: absolute;
    bottom: .25rem;
    left: 50%;
    transform: translateX(-50%);
    color: gold;
    text-align: center;
  }
}
a {
  text-decoration: none;
}
</style>
