<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastros & Cia"
    />
    <div class="admin-pages-tabs">
      <!-- tagas com b-... vem do bootstrap vue -->
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Aticles" active>
            <article-admin/>
          </b-tab>
          <b-tab title="Categories">
            <category-admin/>
          </b-tab>
          <b-tab title="Users">
            <user-admin/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
  
  <script>
import ArticleAdmin from "./ArticleAdmin.vue";
import CategoryAdmin from "./CategoryAdmin.vue";
import UserAdmin from "./UserAdmin.vue";

import PageTitle from "../template/PageTitle";

export default {
  name: "AdminPage",
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin },
};
</script>
  
  <style>
</style>