<template>
    <ul class="listWrapper">
      <TodoItem :singleList="list" v-for="(list, index) in todoList" :key="index" :index="index"/>
    </ul>
</template>

<script>
    import TodoItem from '@/components/TodoItem'
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        name: "TodoList",
        computed: {
          ...mapState([
            'todoList'
          ]),
        },
        data() {
          return {
            lists: []
          }
        },
        components: {
          TodoItem
        },
    }
</script>

<style scoped>
  .listWrapper{
    width: 25%;
    margin: 0 auto;
  }

  .btnWrapper{
    height: 36px;
  }
  .done{
    background: orange;
  }
  .delete{
    background: #ff8a60;
  }
</style>
