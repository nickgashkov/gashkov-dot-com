<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <span
          >This website was developed by Nick&nbsp;Gashkov. Powered by
          <strong>Vue</strong> and <strong>Bulma</strong>.</span
        >
      </p>
      <p>
        <span>The source code is available at </span>
        <app-external-link
          url="https://github.com/nickgashkov/gashkov-dot-com"
          name="GitHub"
        />
      </p>
      <p>&copy; 2018</p>
    </div>
  </footer>
</template>

<script>
import AppExternalLink from "../components/AppExternalLink";

export default {
  name: "VFooter",
  components: { AppExternalLink }
};
</script>
