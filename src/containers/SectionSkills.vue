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
