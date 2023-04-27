<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
        v-bind="attrs" 
        v-on="on"
        icon> <v-icon dark >mdi-dots-vertical</v-icon> </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="item.click()">
          <v-icon left >{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEdit 
    v-if="items[0].modal" 
    @closeModal="items[0].modal = false"
    :task="task"/>
    <ModalDelete
    v-if="items[1].modal" 
    @closeModal="items[1].modal = false"
    :task="task"/>
  </div>
</template>
<script>
import ModalEdit from '../modal/ModalEdit.vue';
import ModalDelete from '../modal/ModalDelete.vue';

export default {
  components: { ModalEdit, ModalDelete },
  props: ["task"],
  data() {
    return {
      items: [
        { 
          icon: 'mdi-pencil', 
          title: "Editar",
          modal: false,
          click(){
            console.log('editar')
            this.modal = true
          }
        },
        { 
          icon: 'mdi-delete-outline', 
          title: "Excluir",
          modal: false,
          click(){
            console.log('excluir')
            this.modal = true
          }
        },
      ],
    };
  },
};
</script>
<style></style>
