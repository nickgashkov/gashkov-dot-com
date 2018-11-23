<template>
  <div id="app">
    <the-header />
    <div class="has-background-gradient">
      <section-who-am-i />
      <section-skills />
    </div>
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
import SectionSkills from "./containers/SectionSkills";

export default {
  name: "app",
  components: {
    SectionSkills,
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

.has-background-gradient {
  background: rgb(214, 14, 255);
  background: linear-gradient(
    133deg,
    rgba(214, 14, 255, 1) 0%,
    rgba(135, 13, 232, 1) 37%,
    rgba(74, 1, 255, 1) 64%,
    rgba(14, 74, 255, 1) 81%,
    rgba(16, 13, 232, 1) 100%
  );
}

html {
  scroll-behavior: smooth;
}
</style>
