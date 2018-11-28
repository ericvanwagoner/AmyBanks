<template>
  <div class="about">
    <div class="bg-1"></div>
    <div class="container-fluid bg-2 text-center px-5">
      <h3>Who Am I?</h3>
      <h3>I'm an adventurer</h3>
      <p>
        Amy Banks-Farr has been in the Beauty industry since 1995 as a licensed
        Cosmetologist and Certified Permanent Cosmetic Artist and Educator. Her
        talent as an artist and attention to detail has made her one of the most
        sought after permanent makeup artists in the industry while continuing
        education helps her stay up to date with the latest trends and
        techniques.
      </p>
      <br />
      <p>
        Continually seeking to advance her knowledge in this field, Amy is also
        trained and certified in the Paramedical field of Permanent Cosmetics
        which includes areola re-pigmentation, needling techniques, scar
        camouflage and color correction.
      </p>
      <br />
      <p>
        Over the past 19 years, Amy has successfully trained and certified
        hundreds of students in the art of permanent makeup and assisted them in
        starting a career in this exciting and very lucrative sector of the
        beauty industry. She is passionate about sharing her love for this art
        and takes very seriously the success of every student she has the
        privilege to train.
      </p>
      <img src="../assets/img/AmyBanks.png" class="amy_img" alt="Amy Banks" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";
h3 {
  padding-top: 20px;
}
.about,
bg-1 {
  height: 100%;
}
.bg-1 {
  background-image: url(src/assets/pictures/logo.png) blue;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #000000;
}
.bg-2 {
  background-color: $white; /* Dark Blue */
  color: #ffffff;
}
.bg-3 {
  background-color: #ffffff; /* White */
  color: #555555;
}
</style>
