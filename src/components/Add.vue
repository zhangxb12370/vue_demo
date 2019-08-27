<template>
  <div class="col-md-4">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label><br>
        <input class="form-control" placeholder="用户名" id="username"><br>
        <label for="content">评论内容</label><br>
        <textarea class="form-control" placeholder="评论内容" id="content"></textarea><br>
        <input type="submit" class="btn btn-default btn-sm" value="提交">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
      return {
          comments:[

          ]
      }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
