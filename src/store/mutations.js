import db from "../services/localbase.js";

export default {
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
    db.collection('tasks').doc({id: newTask.id}).update({
      name: newTask.name
    })
  },
};