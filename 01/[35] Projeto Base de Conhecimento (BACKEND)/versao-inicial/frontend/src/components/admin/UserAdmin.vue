<template>
  <div class="user-admin">
    <b-table hover striped :items="users" :fields="fields">
    </b-table>
  </div>
</template>
  
  <script>
import { baseApiUrl } from "../../global";
import axios from "axios";

export default {
  name: "UserAdmin",
  data: () => {
    return {
      mode: "save",
      user: {},
      users: [],
      // descricao dos fields que serao usados pelo componente b-table
      fields: [
      {key: 'id', label: 'Código', sortable: true},
      {key: 'name', label: 'Nome', sortable: true},
      {key: 'email', label: 'E-mail', sortable: true},
      {key: 'admin', label: 'Administrador', sortable: true, formatter: value => value ? 'sim' : 'não'},
      {key: 'actions', label: 'Ações'},
    ]
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data;
        // console.log(this.users);
      });
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>
  
  <style>
</style>