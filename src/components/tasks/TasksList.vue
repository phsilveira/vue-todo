<template>
  <div>
    <drop-list
      :items="computedTasks"
      @reorder="$event.apply(computedTasks)"
    >
      <template v-slot:item="{ item, reorder }">
        <drag :key="item.id" :data="item" @cut="remove(computedTasks, item)">


          <Task
          style="background-color: white"
          :style="
              reorder
                ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                : {}
            "
          :task="item"/>

          <v-divider />
        </drag>
      </template>
    </drop-list>
  </div>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";
import Task from "./TaskComponent.vue";

export default {
  components: { Drag, DropList, Task },
  computed: {
    computedTasks () {
      return this.$store.state.tasks;
    },
  },
};
</script>
<style></style>
