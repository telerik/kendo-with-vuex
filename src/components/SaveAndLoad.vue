<template>
  <div>
    <p>Copy the JSON from here to save it.</p>
    <p>Edit the JSON or paste a new one to load it.</p>
    <textarea style="height: 500px; width: 400px" ref="customersJson">{{ customers }}</textarea>
    <br />
    <button class="k-button" @click="onLoad">Load</button>
    <br />
    <button class="k-button" @click="onReset">Reset from customers.json</button>
  </div>
</template>

<script>
  export default {
    name: 'save-and-load',
    computed: {
      customers () {
        return this.$store.state.customers
      }
    },
    methods: {
      onLoad () {
        this.$store.commit('load', this.$refs.customersJson.value)
      },
      onReset () {
        this.$store.commit('reset')
      }
    }
  }
</script>