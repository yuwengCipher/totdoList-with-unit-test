<template>
  <div class="btn" :class='[classObj.className]' @click="clicked(classObj.btnName)">{{classObj.btnName}}</div>
</template>

<script>
    export default {
        name: "Btn",
        props: ['classObj'],
        methods: {
          clicked(name) {
            this.$emit('on-click', name)
          }
        }
    }
</script>

<style scoped>
  .btn{
    display: inline-block;
    width: 60px;
    line-height: 38px;
    text-align: center;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
  }
  .add{
    color: #fff;
    background: #61dafb;
  }
</style>
