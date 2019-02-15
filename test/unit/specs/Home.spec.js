import { shallowMount, mount, createLocalVue  } from '@vue/test-utils'
import Home from '@/components/Home'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Home.vue', () =>{
  describe('nomal properties', () => {
    it('h1 text is to be "Welcome to the vue-jest-example" ', () =>{
      const wrapper = mount(Home)
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })

  describe('test router', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router,
    })

    const $route = {
      path: '/Dashboard'
    }
    router.push($route)

    it('$route.path to be "/Dashboard"', () => {
      wrapper.vm.goDashboard();
      expect(wrapper.vm.$route.path).toBe('/Dashboard')
    })
  })

})

