<template>
  <app-skill
    name="Frontend"
    :descriptions="[
      'I have an expertise in building high-performance scalable backends.'
    ]"
    :tags="['Python', 'Django', 'Docker', 'Ansible', 'Nginx', 'PostgreSQL']"
  />
</template>

<script>
import AppSkill from "./AppSkill";

export default {
  name: "SkillBackend",
  components: { AppSkill }
};
</script>
