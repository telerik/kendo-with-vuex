<template>
  <div>
    <label>Customer ID</label>
    <kendo-autocomplete :data-source="customers" :data-text-field="'ContactName'"
      @change="(ev) => {this.customer = ev.sender.dataItem()}"
      :template="'#: ContactName # | #: CustomerID #'"></kendo-autocomplete>
    <button class="k-button" @click="onRemove">Remove</button>
    <button class="k-button"  @click="onCancel">Cancel</button>
  </div>
</template>

<script>
  export default {
    name: 'remove-customer',
    data () {
      return {
        customer: null
      }
    },
    computed: {
      customers () {
        return this.$store.state.customers
      }
    },
    methods: {
      onRemove () {
        this.$store.dispatch('remove', Object.assign({}, this.customer)).then((removedCustomer) => {
          alert('Customer was removed! \n' + JSON.stringify(removedCustomer))
          this.$router.push({name: 'view'})
        }).catch((reason) => {
          alert(reason)
        })
      },
      onCancel () {
        this.$router.push({name: 'view'})
      }
    }
  }
</script>