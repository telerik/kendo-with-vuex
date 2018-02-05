import Vue from 'vue'
import VueRouter from 'vue-router'

import CustomersView from './components/CustomersView.vue'
import AddCustomer from './components/AddCustomer.vue'
import RemoveCustomer from './components/RemoveCustomer.vue'
import SaveAndLoad from './components/SaveAndLoad.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/customers-view'
  },{
    path: '/customers-view',
    component: CustomersView
  },{
    name: 'view',
    path: '/customers-view/:index',
    component: CustomersView
  },{
    path: '/add-customer',
    component: AddCustomer
  },{
    path: '/remove-customer',
    component: RemoveCustomer
  },{
    path: '/save-and-load',
    component: SaveAndLoad
  }]
})