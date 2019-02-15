import { mount } from '@vue/test-utils'
import InputArea from '@/components/InputArea'

describe('InputArea.vue', () => {
  it('calls @on-change method when changeInput happends', () => {
    const wrapper = mount(InputArea)
    const stub = jest.fn()
    wrapper.vm.$on('on-change', stub)
    wrapper.vm.changeInput({target:{value: 1}});
    expect(stub).toBeCalled()
  })

})
