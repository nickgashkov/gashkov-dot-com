<template>
  <a :href="this.url" class="button" rel="noreferrer" target="_blank">
    <slot></slot> <span class="has-margin-left">{{ this.name }}</span>
  </a>
</template>

<script>
export default {
  name: "AppSocialButton",
  props: {
    url: { type: String, required: true },
    name: { type: String, required: true }
  }
};
</script>

<style scoped>
.has-margin-left {
  margin-left: 0.5ex;
}
</style>
