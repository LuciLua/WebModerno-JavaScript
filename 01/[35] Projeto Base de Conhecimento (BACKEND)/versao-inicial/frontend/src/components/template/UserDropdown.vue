<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block">{{ user.name }}</span>
      <div class="user-dropdown-img">
        <Gravatar :email="user.email" alt="user" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="/admin">
        <i class="fa fa-cogs"></i>
        Administração
      </router-link>
      <router-link to="/">
        <a href @click.prevent="logout">
          <i class="fa fa-cogs"></i>
          Sair
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { userKey } from "@/global";
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: "UserDropdown",
  components: { Gravatar },
  computed: mapState(["user"]),
  methods: {
    logout() {
      localStorage.removeItem(userKey);
      this.$store.commit("setUser", null);
      this.$router.push({ name: "auth" });
    },
  },
};
</script>

<style>
.user-dropdown {
  height: 100%;
  position: relative;
}

.user-button {
  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 20px;
  font-weight: 100;

  color: #fff;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
  margin: 0 10px;
}

.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  position: absolute;
  right: 5px;
  top: 65px;

  background-color: #f9f9f9;
  min-width: 170px;

  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;

  border-radius: 5px;

  z-index: 1;

  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  transition: visibility 0s, opacity 0.5s linear;
  opacity: 0;
}

.user-dropdown:hover .user-dropdown-content {
  opacity: 100%;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #000;

  padding: 10px;
  border-radius: 3px;
}

.user-dropdown-content a:hover {
  text-decoration: none;
  color: #000;
  background-color: #ededed;
}
</style>