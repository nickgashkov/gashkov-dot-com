<template>
  <a :href="this.to" target="_blank">
    <span :class="{ 'has-margin-left': !!this.$slots.default }">{{
      this.name
    }}</span>
    <v-icon name="external-link-alt" class="has-margin-left" />
  </a>
</template>

<script>
export default {
  name: "ExternalLink",
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
