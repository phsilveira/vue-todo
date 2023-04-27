<template>
  <div>
    <v-col cols="12" sm="12">
      <v-text-field
        v-model="inputField"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="addTask"
      ></v-text-field>
    </v-col>
    <TasksList/>
  </div>
</template>

<script>
import TasksList from "../components/tasks/TasksList.vue";

export default {
  components: {
    TasksList
  },

  name: "HomeView",

  data() {
    return {
      inputField: "",
      tasks: [
        
      ],
    };
  },

  created() {
    this.$store.commit("fetchTasks");
  },

  methods: {
    addTask() {
      this.$store.dispatch("addTask", this.inputField);
      this.inputField = "";
    },
  },
};
</script>
