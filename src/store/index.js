import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {
        id: 1,
        name: "Comprar pizza",
        is_done: false,
      },
      {
        id: 2,
        name: "Lavar roupa",
        is_done: true,
      },
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, name){
      if (name != "") {
        state.tasks.push({
          id: state.tasks.length + 1,
          name: name,
          is_done: false,
        });
      }
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id != id);
    }
  },
  actions: {
  },
  modules: {
  }
})
