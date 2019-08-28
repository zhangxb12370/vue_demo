import Vue from 'vue'
// import App from './App'
import TodoApp from './components/todo/TodoApp'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoApp },
  template: '<TodoApp/>'
})
