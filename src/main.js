import Vue from 'vue'
import App from './App.vue'
import router from './routes.vue'
import BootstrapVue from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
