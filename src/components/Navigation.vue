<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Training">Training</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </li>
      </ul>
      <div class="collapse navbar-collapse"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

.navbar {
  background-color: #000000;
  // height: 100px;
}
.nav-link {
  font-weight: bold;
  color: $main;
}
</style>
