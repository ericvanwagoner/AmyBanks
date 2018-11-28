<template>
  <div class="home">
    Home
    <div id="intro" class="view">
      <div class="full-bg-img">
        <div class="col-lg-12">
          <div class="intro-text">
            <span class="name">HEADING</span>
            <hr class="star-light" />
            <span class="skills">TEXT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

html
<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
#intro {
  background-image: url("../assets/img/logo.png") no-repeat center center fixed;
  background-size: cover;
}
</style>
