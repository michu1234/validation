import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'




new Vue({
  el: '#app',
  Store,
  render: h => h(App)
})
