<template>
  <input placeholder="请输入任务名称，按回车确定" class="form-control" @keyup.enter="addTodo" v-model="title">
</template>

<script>
export default {
  props: {
    addTodos: Function
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addTodo: function () {
      const title = this.title.trim()
      if (!title) {
        alert('任务名称不能为空')
        return
      }
      const todo = {'title': title, 'complete': false}
      this.addTodos(todo)
      this.title = ''
    }
  }
}
</script>

<style scoped>

</style>
