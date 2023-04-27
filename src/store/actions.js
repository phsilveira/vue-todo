import db from "../services/localbase.js";

export default {
  async addTask(commit, name) {
    await commit.commit("addTask", name);
    await commit.commit("fetchTasks");
  },
  editTask(commit, newTask) {
    db.collection("tasks")
      .doc({ id: newTask.id })
      .update({
        name: newTask.name,
      })
      .then(() => {
        commit.commit("fetchTasks");
      });
  },
  checkTask(commit, newTask) {
    db.collection("tasks")
      .doc({ id: newTask.id })
      .update({
        is_done: !newTask.is_done,
      })
      .then(() => {
        commit.commit("fetchTasks");
      });
  },
  deleteTask(commit, id) {
    db.collection("tasks")
      .doc({ id: id })
      .delete()
      .then(() => {
        commit.commit("fetchTasks");
      });
  },
};
