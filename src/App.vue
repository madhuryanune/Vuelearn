<template>
  <div id="app">
    <Header/>
  <!-- <li><router-link to="/">Users</router-link></li>
    <li><router-link to="/sample">Home</router-link></li> -->
   <div class="container"><router-view>
     </router-view>
     <HelloWorld v-bind:Todos="Todos" v-on:del-todo="deleteTodo"/>
     </div>
   <Footer/>
  </div>
</template>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
// import HelloWorld from './components/HelloWorld.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    HelloWorld
  },
  methods:{
    deleteTodo(id){
      this.Todos = this.Todos.filter((todo)=>{
        return todo.id !== id
      });
    }
  },
  data:function(){
    return{
      Todos:[
        {
          id:1,
          task:'swimming',
          isCompleted: false
        },
        {
          id:2,
          task:'driving',
          isCompleted: false
        },
        {
          id:3,
          task:'dancing',
          isCompleted: false
        }
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
