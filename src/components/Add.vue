<template>
  <div class="col-md-4">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label><br>
        <input class="form-control" placeholder="用户名" id="username" v-model="username"><br>
        <label for="content">评论内容</label><br>
        <textarea class="form-control" placeholder="评论内容" id="content" v-model="content"></textarea><br>
        <input type="submit" class="btn btn-default btn-sm pull-right" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addComment: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      username: '',
      content: ''
    }
  },
  methods: {
    handleSubmit: function () {
      const username = this.username
      const comment = this.content
      this.addComment({username, comment})
    }
  }
}
</script>

<style scoped>

</style>
