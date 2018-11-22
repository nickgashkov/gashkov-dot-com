<template>
  <section id="who-am-i" class="section">
    <div class="container">
      <h1 class="title">Hello, my name is Nick</h1>
      <h2 class="subtitle">I'm a software engineer</h2>
      <div class="buttons">
        <app-download-link class="button" url="#" name="Get CV" disabled />
        <a href="mailto:nick@gashkov.com" class="button">Hire me</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppDownloadLink from "../components/AppDownloadLink";

export default {
  name: "SectionWhoAmI",
  components: { AppDownloadLink }
};
</script>
