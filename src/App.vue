<template>
  <div id="app">
    <the-header />
    <introduction-section />
    <latest-work-section />
    <contact-section />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./containers/TheHeader";
import IntroductionSection from "./containers/IntroductionSection";
import ContactSection from "./containers/ContactSection";
import TheFooter from "./containers/TheFooter";
import LatestWorkSection from "./containers/LatestWorkSection";

export default {
  name: "app",
  components: {
    LatestWorkSection,
    TheHeader,
    IntroductionSection,
    ContactSection,
    TheFooter
  }
};
</script>

<style lang="scss">
@import "~bulma";
</style>
