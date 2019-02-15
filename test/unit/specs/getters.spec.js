import getters from '@/store/getters'

describe('getters', () => {

  const state = {
    todoList: [
      {
        "id": 1,
        "name": "read",
        "isComplete": true
      },
      {
        "id": 2,
        "name": "write",
        "isComplete": false
      },
    ]
  }

  it('todoWithStatus returns all of the todoLists when status is undefined', () => {
    expect(getters.todoWithStatus(state)()).toEqual([
      {
        "id": 1,
        "name": "read",
        "isComplete": true
      },
      {
        "id": 2,
        "name": "write",
        "isComplete": false
      },
    ])
  })
  it('todoWithStatus returns the completed todoLists when status is true', () => {
    expect(getters.todoWithStatus(state)(true)).toEqual([
      {
        "id": 1,
        "name": "read",
        "isComplete": true
      }
    ])
  })
})
