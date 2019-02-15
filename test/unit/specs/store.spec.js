import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store/index'

describe('store.js', () => {
  let store
  let state
  let mutations

  beforeEach(() => {
    mutations = {
      completeTodo: jest.fn(),
      deleteTodo: jest.fn(),
      addTodo: jest.fn(),
    }
    state = {
      todoList: [{
        "id": 1,
        "name": "read",
        "isComplete": false
      }]
    }
    store  = new Vuex.Store({
      state,
      mutations
    })
  })
  it('changes the state when completeTodo is commited', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    expect(store.state.todoList).toEqual([
      {
        "id": 1,
        "name": "read",
        "isComplete": false
      }
    ])
  })

})
