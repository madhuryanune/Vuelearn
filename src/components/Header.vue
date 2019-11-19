<template>
 <b-nav align="right" class='header-style'>
    <b-nav-item active><router-link to="/">Users</router-link></b-nav-item>
    <b-nav-item><router-link to="/sample">sample</router-link></b-nav-item>
    <b-nav-item><router-link to="/">posts</router-link></b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
    <b-nav-item >Logout</b-nav-item>
  </b-nav>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style scoped>
.header-style{
    background-color: #cccccc;
}
</style>
