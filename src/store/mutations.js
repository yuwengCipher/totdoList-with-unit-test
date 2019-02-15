export default {
  addTodo(state, newTodo) {
    state.todoList.push(newTodo)
  },
  deleteTodo(state, index) {
    state.todoList.splice(index, 1);
  },
  completeTodo(state, index) {
    if (state.todoList[index].isComplete === true) {
      alert('该事项已经完成');
      return false
    }
    state.todoList[index].isComplete = true;
  },
}
