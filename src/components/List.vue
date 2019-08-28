<template>
  <div class="col-md-6">
    <label>评论回复</label>
    <div class="row">
      <ul class="col-md-12 content-ul">
        <li v-for="(comment, index) in comments" :key="index">
          <label>{{comment.username}}说：</label><button class="del-comment" @click="handleDel(index)">删除</button><br>
          <p>{{comment.comment}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    },
    delComment: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDel: function (index) {
      this.delComment(index)
    }
  }
}
</script>

<style scoped>
  .content-ul{
    list-style-type: none;
  }
  .content-ul>li{
    border: 1px solid #c6c8ca;
  }
  .content-ul>li:nth-child(2n){
    border-top: 0px;
  }
  .content-ul>li>p{
    text-indent: 10px;
  }
  .del-comment{
    float: right;
  }
</style>
