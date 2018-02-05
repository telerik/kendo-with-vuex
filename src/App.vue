<template>
  <div id="app">
      <navigation class="navigation"></navigation>
      <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    gridEvents () {
      return new kendo.data.DataSource ({
        data: this.$store.state.customers
      })
    }
  }
}
</script>

<style scoped>
 .navigation {
   padding: 10px;
 }
</style>
