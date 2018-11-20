<template>
  <section id="who-am-i" class="section">
    <div class="container">
      <h1 class="title">Hello, my name is Nick Gashkov</h1>
      <h2 class="subtitle">I'm a backend developer</h2>
    </div>
    <div class="buttons is-centered">
      <download-link class="button" to="favicon.ico" name="Resume" />
      <a href="#contact-me" class="button"> Contact me </a>
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
