<template>
  <app-skill
    name="Frontend"
    :descriptions="[
      'I create interfaces so good you want to lick them.',
      'Mobile first progressive web apps are waiting for you.'
    ]"
    :tags="['JavaScript', 'HTML', 'CSS', 'Vue', 'SASS', 'UI & UX']"
  />
</template>

<script>
import AppSkill from "./AppSkill";

export default {
  name: "SkillFrontend",
  components: { AppSkill }
};
</script>
