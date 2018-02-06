import Vue from 'vue'
import Vuex from 'vuex'

import customers from '../assets/customers'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        customers: JSON.parse(JSON.stringify(customers))
    },
    getters: {
        titles: state => {
            var allTitles = state.customers.map((item) => {
                return item.ContactTitle
            })

            return allTitles.filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
        },
        customerIds: state => {
            return state.customers.map((item) => {
                return item.CustomerID
            })
        }
    },
    mutations: {
        edit (state, customer) {
            var foundCustomer = state.customers.find((cust) => {
                return cust.CustomerID === customer.CustomerID
            })

            var index = state.customers.indexOf(foundCustomer)

            state.customers[index] = customer
        },
        add (state, customer) {
            state.customers.push(customer)
        },
        remove (state, index) {
            state.customers.splice(index, 1)
        },
        load (state, customersJson) {
            state.customers = JSON.parse(customersJson)
        },
        reset (state) {
            state.customers = JSON.parse(JSON.stringify(customers))
        }
    },
    actions: {
        add (context, customer) {
            return new Promise((resolve, reject) => {
                if (context.getters.customerIds.indexOf(customer.CustomerID) > -1) {
                    reject('This Customer ID exists!')
                } else if (customer.CustomerID === '') {
                    reject('Customer ID cannot be empty!')
                } else {
                    context.commit('add', customer)
                    resolve(context.getters.customerIds.indexOf(customer.CustomerID))
                }
            })
        },
        remove (context, customer) {
            return new Promise((resolve, reject) => {
                var foundCustomer = context.state.customers.find((cust) => {
                    return cust.CustomerID === customer.CustomerID
                })

                var index = context.state.customers.indexOf(foundCustomer)

                if (!customer || index < 0) {
                    reject('Customer not found!')
                } else {
                    context.commit('remove', index)
                    resolve(Object.assign({}, foundCustomer))
                }
            })
        }
    }
})