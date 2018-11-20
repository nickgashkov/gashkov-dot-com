<template>
  <div class="is-fixed-top">
    <div class="has-text-centered">
      <hr />
      <v-logo style="display: inline" />
      <hr />
    </div>
  </div>
</template>

<script>
import VLogo from "../assets/logo.svg";

export default {
  name: "VHeader",
  components: { VLogo }
};
</script>
