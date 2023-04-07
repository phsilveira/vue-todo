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
    <v-list flat subheader>
      <v-subheader>General</v-subheader>

      <v-list-item-group v-model="settings" multiple active-class="">
        <task-component
          v-for="task in $store.state.tasks"
          :key="task.id" :task="task"
        ></task-component>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TaskComponent from "../components/tasks/TaskComponent.vue";

export default {
  components: {
    TaskComponent,
  },

  name: "HomeView",

  data() {
    return {
      inputField: "",
      tasks: [
        
      ],
    };
  },

  methods: {
    addTask() {
      this.$store.commit("addTask", this.inputField);
      this.inputField = "";
    },
  },
};
</script>
