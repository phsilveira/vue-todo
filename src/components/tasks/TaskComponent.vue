<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <v-list-item
      :class="task.is_done ? 'grey lighten-3' : ''"
      @click="task.is_done = !task.is_done"
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
          <v-btn icon @click.stop="" @click="confirmAction = true">
            <v-icon color="red lighten-1">mdi-delete-outline</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-dialog v-model="confirmAction" persistent max-width="500px">
          <v-card>
            <v-card-title class="headline">Confirm Action</v-card-title>
            <v-card-text
              >Are you sure you want to perform this action?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="confirmAction = false"
                >Cancel</v-btn
              >
              <v-btn color="success" text @click="performActionAndCloseDialog"
                >Confirm</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
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
