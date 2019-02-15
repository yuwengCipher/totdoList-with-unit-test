import mutations from '@/store/mutations'

describe('mutations', () => {
  it('complete a todo when completeTodo happens', () => {
    const state = {
      todoList: [{
        "id": 1,
        "name": "read",
        "isComplete": false
      }]
    }
    mutations.completeTodo(state, 0)
    expect(state.todoList).toEqual([{
      "id": 1,
      "name": "read",
      "isComplete": true
    }])
  })

  it('add a todo when addTodo happens', () => {
    const state = {
      todoList: []
    }
    const newTodo = {
      "id": 1,
      "name": "read",
      "isComplete": false
    }
    mutations.addTodo(state, newTodo)
    expect(state.todoList).toEqual([{
      "id": 1,
      "name": "read",
      "isComplete": false
    }])
  })

  it('delete a todo when deleteTodo happens', () => {
    const state = {
      todoList: [{
        "id": 1,
        "name": "read",
        "isComplete": false
      },{
        "id": 2,
        "name": "sing",
        "isComplete": true
      }]
    }
    mutations.deleteTodo(state, 0)
    expect(state.todoList).toEqual([{
      "id": 2,
      "name": "sing",
      "isComplete": true
    }])
  })
  it('returns "该事项已经完成" when the todo`s prop isComplete is true already', () => {
    const state = {
      todoList: [{
        "id": 1,
        "name": "read",
        "isComplete": true
      }]
    }
    window.alert = jest.fn()
    mutations.completeTodo(state, 0)
    expect(window.alert).toBeCalledWith('该事项已经完成')
  })
})
