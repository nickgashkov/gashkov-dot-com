<template>
  <section id="who-am-i" class="section">
    <div class="container">
      <h1 class="title">Hello, my name is Nick&nbsp;Gashkov</h1>
      <h2 class="subtitle">I'm a software engineer</h2>
    </div>
    <div class="buttons is-centered has-padding-top">
      <download-link class="button" to="favicon.ico" name="Resume" />
      <a href="mailto:nick@gashkov.com" class="button">Hire me</a>
    </div>
  </section>
</template>

<script>
import DownloadLink from "../components/DownloadLink";

export default {
  name: "IntroductionSection",
  components: { DownloadLink }
};
</script>

<style scoped>
  .has-padding-top {
    padding-top: 1rem;
  }
</style>
