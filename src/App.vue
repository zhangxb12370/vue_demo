<template>
  <div>
    <nav class="row">
      <h1>请发表对Vue的评论</h1>
    </nav>
    <div class="row">
      <div class="col-md-1"></div>
      <Add></Add>
      <List></List>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Add from './components/Add'
import List from './components/List'
export default {
  components: {HelloWorld, Add, List},
  methods: {
    handleSubmit: function () {
      console.log('提交')
    }
  }
}
</script>

<style scoped>
  nav{
    height: 150px;
    background-color: #c6c8ca;
  }
  nav>h1{
    margin-left: 80px;
    line-height: 150px;
  }

</style>
