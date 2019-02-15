<template>
    <li class="singleItem" :class="[singleList.isComplete === true ? 'completed' : '']" :id="singleList.id" :data="index">
      <div class="content">{{singleList.name}}</div>
      <div class="btnWrapper">
        <Btn :classObj="{btnName: '完成', className: 'done'}" @on-click="onClick" />
        <Btn :classObj="{btnName: '删除', className: 'delete'}" @on-click="onClick" />
      </div>
    </li>
</template>

<script>
    import Btn from '@/components/Btn'
    import { mapMutations } from 'vuex'
    export default {
        name: "TodoItem",
        props: ['singleList', 'index'],
        data() {
          return {}
        },
        methods: {
          ...mapMutations([
            'completeTodo',
            'deleteTodo',
          ]),
          onClick(name) {
            if (name === '完成') {
              this.completeTodo(this.index)
            } else {
              this.deleteTodo(this.index);
            }
          },
        },
        components: {
          Btn
        }
    }
</script>

<style scoped>
  .singleItem{
    display: flex;
    justify-content: space-between;
    background: #757c7d;
    list-style: none;
    color: #fff;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 25px;
    line-height: 36px;
  }
  .singleItem.completed .content{
    text-decoration: line-through;
    color: #b4b4b4;
  }
  .done{
    background: #424241;
  }
  .delete{
    background: #f16a3a;
  }
</style>
