<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <v-list-item
      :class="task.is_done ? 'grey lighten-3' : ''"
      @click="$store.dispatch('checkTask', task)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.is_done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'grey--text text--darken-1': task.is_done }"
            >{{ task.name }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <TaskMenu :task="task"/>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from './TaskMenu.vue';

export default {
  components: {TaskMenu},
  name: "TaskComponent",
  props: ["task"],
  data() {
    return {
      confirmAction: false,
    };
  },
  methods: {
    deleteTask() {
      this.$store.commit("deleteTask", this.task.id);
    },
    performActionAndCloseDialog() {
      // Perform the action and close the dialog
      this.deleteTask();
      this.confirmAction = false;
    },
  },
};
</script>
