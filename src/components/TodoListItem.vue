<template>
    <div><input type="checkbox" v-on:change="markComplete"/>{{todo.task}}<button @click="$emit('del-todo',todo.id)">delete</button></div>
</template>
<script>
export default {
    name:"TodoListItem",
    props:["todo"],
    data:function(){
        return{
           
        }
    },
    methods:{
        markComplete(){
            console.log(123);
            this.todo.isCompleted = !this.todo.isCompleted;
        }
    }
}
</script>
<style scoped>

</style>