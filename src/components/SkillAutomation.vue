<template>
  <app-skill
    name="Automation"
    :descriptions="[
      `Do you want to quit spending days of your life to something boring?`,
      `Say no more, let's automate things!`
    ]"
    :tags="['Python', 'Scrapy', 'schedule', 'Selenium']"
  />
</template>

<script>
import AppSkill from "./AppSkill";

export default {
  name: "SkillAutomation",
  components: { AppSkill }
};
</script>
