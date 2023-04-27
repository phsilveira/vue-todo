import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      // {
      //   id: 1,
      //   name: "Comprar pizza",
      //   is_done: false,
      // },
      // {
      //   id: 2,
      //   name: "Lavar roupa",
      //   is_done: true,
      // },
    ]
  },
  getters: {
  },
  mutations: {
    fetchTasks(state){
      db.collection('tasks').get().then(tasksDB => {
        state.tasks = tasksDB
      })
    },
    addTask(state, name){
      if (name != "") {
        db.collection('tasks').add({
          id: new Date().getTime(),
          name: name,
          is_done: false,
        });
      }
    },
    deleteTask(state, id){
      console.log(id)
      state.tasks = state.tasks.filter(task => task.id != id);
    },
    editTask(state, newTask){
      let task = state.tasks.filter(tasks => tasks.id == newTask.id)[0];
      task.name = newTask.name;
    },
  },
  actions: {
    async addTask(commit, name){
      await commit.commit('addTask', name);
      await commit.commit('fetchTasks');
    }
  },
  modules: {
  }
})
