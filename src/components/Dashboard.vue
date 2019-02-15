<template>
    <div class="dashboard">
        <div class="todoBox">
          <InputArea @on-change="getNewTodo"/>
          <Btn :classObj="{btnName: '新增', className: 'add'}" @on-click="onClick" />
        </div>
        <TodoList/>
    </div>
</template>

<script>
    import Btn from '@/components/Btn'
    import InputArea from '@/components/InputArea'
    import TodoList from '@/components/TodoList'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "dashboard",
        data() {
          return {
            newTodo: null
          }
        },
        computed: {
          ...mapState([
            'todoList'
          ])
        },
        methods: {
          ...mapMutations([
            'addTodo',
          ]),
          getNewTodo(val) {
            let idsArr = [];
            this.todoList.map(item => {
              idsArr.push(item.id)
            })
            this.newTodo = {
              id: Math.max.apply(Math,idsArr) + 1,
              name: val,
              isComplete: false
            };
          },

          onClick() {
            this.addTodo(this.newTodo);
          },
        },
        components: {
          InputArea,
          Btn,
          TodoList
        },
    }
</script>

<style scoped>
  .todoBox{
    padding: 20px 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
