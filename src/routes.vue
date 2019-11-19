<script>
import HelloWorld from './components/HelloWorld.vue'
import Sample from './components/sample.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/bar', component: HelloWorld },
  { path: '/sample', component: Sample }
]
export default new Router({  
      routes })
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

// export default router;
</script>