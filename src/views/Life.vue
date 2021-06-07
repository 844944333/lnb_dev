<template>
  <div :style="{paddingTop: headerHeight + 'px'}">
    life
  </div>
</template>

<script >

export default ({
  name: 'Life',
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

<style scoped>

</style>
