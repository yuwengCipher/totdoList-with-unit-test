<template>
  <div class="inputLabel">
    <input type="text" @input="changeInput" placeholder="请输入待办事项" class="inputArea"/>
  </div>
</template>

<script>
    export default {
        name: "InputArea",
        methods: {
          changeInput(e) {
            this.$emit('on-change', e.target.value)
          }
        }
    }
</script>

<style scoped>
  .inputLabel{
    display: inline-block;
  }
  .inputArea{
    border: 1px solid #61dafb;
    outline: none;
    line-height: 34px;
    font-size: 16px;
    color: #03031c;
    padding-left: 10px;
  }
</style>
