<template>
  <external-link :to="this.to" :name="this.name" class="button">
    <slot></slot>
  </external-link>
</template>

<script>
import ExternalLink from "./ExternalLink";

export default {
  name: "SocialButton",
  components: { ExternalLink },
  props: {
    to: { type: String, required: true },
    name: { type: String, required: true }
  }
};
</script>
