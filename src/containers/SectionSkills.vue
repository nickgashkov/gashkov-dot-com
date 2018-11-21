<template>
  <section id="skills" class="section">
    <div class="container">
      <h1 class="title">Skills</h1>
      <h2 class="subtitle">Unleash the buzzwords</h2>
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
  components: {SkillAutomation, SkillFrontend, SkillBackend}
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
