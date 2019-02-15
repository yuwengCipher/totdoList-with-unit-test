export default {
  todoWithStatus: state => status => {
    return state.todoList.filter(item => {
      return typeof status === 'undefined' ? true : item.isComplete === status;
    })
  }
}
