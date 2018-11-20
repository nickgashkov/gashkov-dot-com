<template>
  <div id="app">
    <v-header />
    <introduction-section />
    <latest-work-section />
    <contact-section />
    <v-footer />
  </div>
</template>

<script>
import VHeader from "./containers/VHeader";
import IntroductionSection from "./containers/IntroductionSection";
import ContactSection from "./containers/ContactSection";
import VFooter from "./containers/VFooter";
import LatestWorkSection from "./containers/LatestWorkSection";

export default {
  name: "app",
  components: {
    LatestWorkSection,
    VHeader,
    IntroductionSection,
    ContactSection,
    VFooter
  }
};
</script>

<style lang="scss">
@import "~bulma";
</style>
