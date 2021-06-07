<template>
  <div :style="{paddingTop: headerHeight + 'px'}">
    分类
  </div>
</template>

<script>
export default ({
  name: 'list',
  data () {
    return {

    }
  },
  computed: {
    headerHeight () {
      return this.$store.state.headerHeight
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
