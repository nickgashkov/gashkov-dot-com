<template>
  <a :href="this.url" target="_blank">
    <span>{{ this.name }}</span
    >&nbsp;<app-icon name="external-link-alt" class="has-margin-left" />
  </a>
</template>

<script>
export default {
  name: "AppExternalLink",
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
