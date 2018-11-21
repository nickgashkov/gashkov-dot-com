<template>
  <section id="skills" class="section has-text-white">
    <div class="container">
      <h1 class="title has-text-white">Skills</h1>
      <h2 class="subtitle has-text-white">Unleash the buzzwords</h2>
      <div class="columns">
        <div class="column"><skill-backend /></div>
        <div class="column"><skill-frontend /></div>
        <div class="column"><skill-automation /></div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBackend from "../components/SkillBackend";
import SkillFrontend from "../components/SkillFrontend";
import SkillAutomation from "../components/SkillAutomation";
export default {
  name: "SectionSkills",
  components: { SkillAutomation, SkillFrontend, SkillBackend }
};
</script>

<style scoped>
.card {
  height: 100%;
}

.section {
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
</style>
