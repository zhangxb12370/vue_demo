<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{'background-color': bgColor}">
    <input type="checkbox" v-model="todo.complete">
    <span>{{todo.title}}</span>
    <button class="todo-btn" v-show="isShow" @click="delTodo(index)">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number,
    delTodos: Function
  },
  data () {
    return {
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter: function (isEnter) {
      if (isEnter) {
        this.bgColor = '#c6c8ca'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    delTodo: function (index) {
      this.delTodos(index)
    }
  }
}
</script>

<style scoped>
  li{
    height: 30px;
    line-height: 30px;
    border: 1px solid #c6c8ca;
    border-radius: 3px;
  }
  li:nth-child(n+1){
    border-bottom: 0px;
  }
  li:last-child{
    border-bottom: 1px solid #c6c8ca;
  }
  .todo-btn{
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    float: right;
    margin: 5px;
    background-color: #856404;
    outline: none;
    border: none;
    color: white;
  }
</style>
