<template>
  <div class="todo-container">
    <TodoHeader :addTodos="addTodos"/>
    <TodoList :todos="todos" :delTodos="delTodos"/>
    <TodoFooter :todos="todos" :selectAll="selectAll"/>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoList from './TodoList'
export default {
  data () {
    return {
      todos: [
        {'title': '吃饭', 'complete': true},
        {'title': '睡觉', 'complete': false},
        {'title': 'Coding', 'complete': false},
        {'title': '游戏', 'complete': false}
      ]
    }
  },
  methods: {
    addTodos: function (todo) {
      this.todos.unshift(todo)
    },
    delTodos: function (index) {
      this.todos.splice(index, 1)
    },
    selectAll: function (isSelAll) {
      this.todos.forEach(function (todo, index) {
        todo.complete = isSelAll
      })
    }
  },
  components: {TodoHeader, TodoFooter, TodoList}
}
</script>

<style scoped>
  .todo-container{
    width: 500px;
    height: 230px;
    border: 1px solid #c6c8ca;
    border-radius: 5px;
    margin: auto;
    position: relative;
    padding: 10px;
  }
</style>
