import { mount } from '@vue/test-utils'
import Btn from '@/components/Btn'

describe('Btn.vue', () => {
  const wrapper = mount(Btn, {
    propsData: {
      classObj: {btnName: '新增', className: 'add'}
    }
  })
  it('calls clicked when click btn', () => {
    const spy = spyOn(wrapper.vm, 'clicked')
    wrapper.find('.btn').trigger('click')
    expect(spy).toBeCalled()
  })

  it('triggers a on-click event when clicked method is called', () => {
    const stub = jest.fn();
    wrapper.setMethods({ handleMessageClick: stub })
    wrapper.vm.$on('on-click', stub)
    wrapper.vm.clicked('新增');
    expect(stub).toBeCalledWith('新增')
  })
})
