<template>
  <div id="app">
    <v-header />
    <introduction-section />
    <contact-section />
    <v-footer />
  </div>
</template>

<script>
import VHeader from "./containers/VHeader";
import IntroductionSection from "./containers/IntroductionSection";
import ContactSection from "./containers/ContactSection";
import VFooter from "./containers/VFooter";

export default {
  name: "app",
  components: {
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
