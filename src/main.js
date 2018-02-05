import Vue from 'vue'

import App from './App.vue'
import Navigation from './components/Navigation.vue'

import store from './store'
import router from './router'

import 'babel-polyfill'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { AutoComplete, DropdownsInstaller  } from '@progress/kendo-dropdowns-vue-wrapper'
import { Menu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'

Vue.use(GridInstaller)
Vue.use(LayoutInstaller)
Vue.use(DropdownsInstaller)

Vue.component('navigation', Navigation)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
