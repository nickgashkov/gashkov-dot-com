<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <span>This website was developed with</span>
        <v-icon name="heart" class="has-text-danger has-margin-left" />
        <span class="has-margin-left">
          by Nick Gashkov with the power of <strong>Vue</strong> and
          <strong>Bulma</strong>.</span
        >
      </p>
      <p>
        <span>The source code is available at </span>
        <external-link
          to="https://github.com/nickgashkov/gashkov-dot-com"
          name="GitHub"
        />
      </p>
    </div>
  </footer>
</template>

<script>
import ExternalLink from "../components/ExternalLink";

export default {
  name: "VFooter",
  components: { ExternalLink }
};
</script>

<style scoped>
.has-margin-left {
  margin-left: 0.5ex;
}
</style>
