<template>
  <div class="col-md-6">
    <label>评论回复</label>
    <div class="row">
      <ul class="col-md-12 content-ul">
        <li>
          <label>xxx说：</label><br>
          <p>vue so easy</p>
        </li>
        <li>
          <label>yyy说：</label><br>
          <p>vue so easy</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
