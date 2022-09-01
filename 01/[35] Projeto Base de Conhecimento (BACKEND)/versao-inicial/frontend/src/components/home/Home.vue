<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de conhecimento" />
    <div class="stats">
      <Stat
        title="Categories"
        :value="stat.categories"
        icon="fa fa-folder"
        color="#d54d50"
      />
      <Stat
        title="Articles"
        :value="stat.articles"
        icon="fa fa-file"
        color="#3bc480cd"
      />
      <Stat
        title="Users"
        :value="stat.users"
        icon="fa fa-user"
        color="#3282d"
      />
    </div>
  </div>
</template>
  

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat.vue";
import axios from "axios";
import { baseApiUrl } from "../../global";

export default {
  name: "Home",
  components: { PageTitle, Stat, axios, baseApiUrl },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then((res) => (this.stat = res.data));
    },
  },
  mounted() {
    this.getStats();
  },
};
</script> 
  
<style>
  .stats{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>