<template>
  <a :href="this.to" class="button">
    <slot></slot> <span class="has-margin-left">{{ this.name }}</span>
  </a>
</template>

<script>
export default {
  name: "SocialButton",
  props: {
    to: { type: String, required: true },
    name: { type: String, required: true }
  }
};
</script>

<style scoped>
.has-margin-left {
  margin-left: 0.5ex;
}
</style>
