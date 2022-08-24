<template>
  <div id="app">
    <Header />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/template/Header.vue";
import Menu from "@/components/template/Menu.vue";
import Content from "@/components/template/Content.vue";
import Footer from "@/components/template/Footer.vue";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer },
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
</style>