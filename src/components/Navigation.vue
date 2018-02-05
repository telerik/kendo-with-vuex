<template>
  <nav>
    <kendo-menu>
      <router-link to="/customers-view" tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Customers</router-link>
      <router-link to="/add-customer" tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Add</router-link>
      <router-link to="/remove-customer" tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Remove</router-link>
      <router-link to="/save-and-load" tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Save/Load JSON</router-link>
    </kendo-menu>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>