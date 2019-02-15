import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex);

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
    {
      "id": 3,
      "name": "sing",
      "isComplete": false
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
