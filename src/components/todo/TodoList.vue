<template>
  <ul class="todo-list">
    <TodoItem v-for="(todo, index) in todos" :todo="todo" :index="index" :key="index" :delTodos="delTodos"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  props: {
    todos: Array,
    delTodos: Function
  },
  components: {TodoItem}
}
</script>

<style scoped>
  .todo-list{
    list-style-type: none;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0px;
    height: 140px;
    overflow-y: scroll;
  }
</style>
