<template>
  <div>
    <ul>
      <li>
        <label>Customer ID</label> <span class="hint">(Customer ID must be unique! Use the autocomplete to only see the existing IDs and create a unique one.)</span>
        <br />
        <kendo-autocomplete :data-source="customers" :data-text-field="'CustomerID'" v-model="newCustomer.CustomerID"></kendo-autocomplete>
      </li>

      <li>
          <label>Company Name</label>
          <br />
          <input type="text" class="k-textbox"  v-model="newCustomer.CompanyName" />
        </li>

      <li>
        <label>Contact Name</label>
        <br />
        <input type="text" class="k-textbox"  v-model="newCustomer.ContactName" />
      </li>

      <li>
        <label>Contact Title</label>
        <kendo-autocomplete :data-source="titles"  v-model="newCustomer.ContactTitle"></kendo-autocomplete>
      </li>

      <li>
          <label>Address</label>
          <br />
          <input type="text" class="k-textbox" v-model="newCustomer.Address"/>
        </li>

      <li>
        <label>City</label>
        <br />
        <input type="text" class="k-textbox" v-model="newCustomer.City"/>
      </li>

      <li>
        <label>Country</label>
        <br />
        <input type="text" class="k-textbox" v-model="newCustomer.Country" />
      </li>

      <li>
          <button class="k-button" @click="onAdd">Add</button>
          <button class="k-button"  @click="onCancel">Cancel</button>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: 'customers-view',
      data () {
        return {
          newCustomer: {
            CustomerID: '',
            CompanyName: '',
            ContactName: '',
            ContactTitle: '',
            Address: '',
            City: '',
            Country: ''
          }
        }
      },
      computed: {
        customers () {
          return this.$store.state.customers
        },
        titles () {
          return this.$store.getters.titles
        }
      },
      methods: {
        onAdd () {
          this.$store.dispatch('add', Object.assign({}, this.newCustomer)).then((index) => {
            this.$router.push({name: 'view', params: { index: index }})
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

  <style scoped>
    li {
      list-style-type: none;
      margin-top: 20px;
    }

    label {
      font-weight: bold;
    }

    span.hint {
      font-size: 12px;
      font-style: italic;
    }
  </style>