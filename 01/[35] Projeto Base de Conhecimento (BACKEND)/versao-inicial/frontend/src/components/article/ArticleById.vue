<template>
  <div class="article-by-id">
    <PageTitle
      icon="fa fa-file-o"
      :main="article.name"
      :sub="article.description"
    />
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>
<script>
import { baseApiUrl } from "../../global";
import PageTitle from "../template/PageTitle.vue";
import axios from "axios";

export default {
  name: "ArticleById",
  components: {
    PageTitle,
  },
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    const url = `${baseApiUrl}/articles/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      this.article = res.data;
    });
  },
};
</script>

<style>
.article-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

/* codigos exibidos dentro de pre */
.article-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 1.2rem;

  background-color: #29282b;
  color: #ddd;
}

.article-content image {
  max-width: 100%;
}

.article-content :last-child {
  margin-bottom: 0;
}
</style>