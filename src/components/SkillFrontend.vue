<template>
  <app-skill
    name="Frontend"
    :descriptions="[
      `I create interfaces so good you'll want to lick them.`,
      `Mobile first PWAs are waiting for you.`
    ]"
    :tags="['JavaScript', 'HTML', 'CSS', 'Vue', 'SASS', 'Bulma', 'UI & UX']"
  />
</template>

<script>
import AppSkill from "./AppSkill";

export default {
  name: "SkillFrontend",
  components: { AppSkill }
};
</script>
