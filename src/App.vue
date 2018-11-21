<template>
  <div id="app">
    <the-header />
    <section-who-am-i />
    <section-latest-work />
    <section-contact-me />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./containers/TheHeader";
import SectionWhoAmI from "./containers/SectionWhoAmI";
import SectionLatestWork from "./containers/SectionLatestWork";
import SectionContactMe from "./containers/SectionContactMe";
import TheFooter from "./containers/TheFooter";

export default {
  name: "app",
  components: {
    TheHeader,
    SectionWhoAmI,
    SectionLatestWork,
    SectionContactMe,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "~bulma";
</style>
