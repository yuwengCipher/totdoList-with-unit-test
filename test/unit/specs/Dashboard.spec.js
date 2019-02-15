import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard'
import InputArea from '@/components/InputArea'
import Btn from '@/components/Btn'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Dashboard.vue', () => {
  let store
  let state
  let mutations

  beforeEach(() => {
    mutations = {
      addTodo: jest.fn()
    }
    state = {
      todoList: [{id: 1},{id: 2},{id: 3}]
    }
    store  = new Vuex.Store({
      state,
      mutations
    })
  })

  it('calls getNewTodo when @on-change happends', () => {
    const wrapper = shallowMount(Dashboard, { store, localVue })
    wrapper.find(InputArea).vm.$emit('on-change', 'sleep')
    expect(wrapper.vm.newTodo).toEqual({
      id: 4,
      name: 'sleep',
      isComplete: false
    })
  })

  it('triggers onClick method when @on-click happends', () => {
    const wrapper = mount(Dashboard, {
      store,
      localVue,
      propsData: {
        classObj: {btnName: '新增', className: 'add'}
      }
    })
    wrapper.find(Btn).vm.$emit('on-click')
    expect(mutations.addTodo).toHaveBeenCalled()
  })
})
