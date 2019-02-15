<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>are you ready?</h2>
    <h1 class="beginNow" @click="goDashboard">let`s go~</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the vue-jest-example'
    }
  },
  methods: {
    goDashboard() {
      this.$router.push({path: '/Dashboard'})
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.beginNow{
  color: #5177b8;
  cursor: pointer;
}
</style>
