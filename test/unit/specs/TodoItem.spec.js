import { mount, createLocalVue } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem'
import Btn from '@/components/Btn'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoItem.vue', () => {
  let store
  let state
  let mutations
  let wrapper
  let name

  beforeEach(() => {
    state = {
      todoList: []
    }
    mutations = {
      completeTodo: jest.fn(),
      deleteTodo: jest.fn(),
    }
    store = new Vuex.Store({
      state,
      mutations
    })

    wrapper = mount(TodoItem, {
      localVue,
      store,
      propsData: {
        singleList: {
          "id": 1,
          "name": "read",
          "isComplete": true
        },
        index: 1
      }
    })
  })

  it('calls completeTodo method when the button the name completed is triggered', () => {
    name = '完成'
    wrapper.vm.onClick(name)
    expect(mutations.completeTodo).toBeCalled()
  })

  it('calls deleteTodo method when the button with the name deleted is triggered', () => {
    name = '删除'
    wrapper.vm.onClick(name)
    expect(mutations.deleteTodo).toBeCalled()
  })
})
