<template>
  <div class="todo-footer">
    <input type="checkbox" v-model="isCheck">
    <span>已完成{{isComplete}}/全部{{todos.length}}</span>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    selectAll: Function
  },
  computed: {
    isComplete: function () {
      // arr.reduce(callback,[initialValue])
      return this.todos.reduce((total, todo) => total + (todo.complete ? 1 : 0), 0)
    },
    isCheck: {
      get: function () {
        return this.isComplete === this.todos.length && this.isComplete > 0
      },
      set: function (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>

<style scoped>
  .todo-footer{
    position: absolute;
    bottom: 0px;
  }
</style>
