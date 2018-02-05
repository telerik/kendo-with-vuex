<template>
  <div>
      <div>{{ $route.params.index }}</div>
    <kendo-grid ref="grid" :data-source="customers">
      <kendo-grid-column field="ContactName" title="Contact Name"></kendo-grid-column>
      <kendo-grid-column field="ContactTitle" title="Contact Title"></kendo-grid-column>
      <kendo-grid-column field="CompanyName" title="Company Name"></kendo-grid-column>
      <kendo-grid-column field="Country"></kendo-grid-column>
  </kendo-grid>
  </div>
</template>

<script>
  export default {
    name: 'customers-view',
    computed: {
      customers () {
        return new kendo.data.SchedulerDataSource ({
          data: this.$store.state.customers
        })
      }
    },
    beforeRouteEnter  (to, from, next) {
      next(vm => {
        var index = vm.$route.params.index

        if (index) {
          var gridWidget = vm.$refs.grid.kendoWidget()
          gridWidget.select('tr:eq(' + index + ')')

          var selectedOffset = gridWidget.select().offset()
          window.scrollTo(0, selectedOffset.top)
        }
      })
    }
  }
</script>