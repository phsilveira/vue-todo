<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Remover</v-card-title>
        <v-card-text>Tem certeza que deseja remover?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('closeModal')" >
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleDelete()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["task"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    handleDelete() {
      this.$store.commit('deleteTask', this.task.id)
      this.$emit('closeModal')
    },
  },
};
</script>
<style></style>
