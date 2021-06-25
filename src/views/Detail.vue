<template>
  <div :style="{paddingTop: headerHeight + 'px'}">
    详情
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    headerHeight () {
      return this.$store.state.headerHeight
    }
  },
}
</script>

<style lang="scss">

</style>
