<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header
      title="Cod3r - Base de Conhecimento"
      :hideToggle="!user"
      :hideUserDropdown="!user"
    />
    <Menu v-if="user" />
    <Content />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import Header from "@/components/template/Header.vue";
import Menu from "@/components/template/Menu.vue";
import Content from "@/components/template/Content.vue";
import Footer from "@/components/template/Footer.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer },
  computed: mapState(["isMenuVisible", "user"]),
  data: function () {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validateToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validateToken = false;
        this.$router.push({ name: "auth" });
        return;
      }
      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  /* Deixa a renderizacao das fontes mais suave */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;

  display: grid;
  /* header 60px, 1fr conteudo da pagina 40px footer */
  grid-template-rows: 60px 1fr 40px;

  grid-template-columns: 300px 1fr;

  /* primeira linha, segunda linha, terceira linha */
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>