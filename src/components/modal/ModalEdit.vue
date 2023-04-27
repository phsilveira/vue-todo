<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-card-text>Informe o novo título.</v-card-text>
        <v-text-field
          class="px-3"
          label="Título"
          outlined
          v-model=name
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('closeModal')" >
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleEdit()">
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
      name: null,
    };
  },
  created() {
    this.name = this.task.name;
  },
  methods: {
    handleEdit() {
      this.$store.dispatch('editTask', { name: this.name, id: this.task.id})
      this.$emit('closeModal')
    },
  },
};
</script>
<style></style>
