<template>
  <a :href="this.url" download>{{ this.name }}</a>
</template>

<script>
export default {
  name: "AppDownloadLink",
  props: {
    url: { type: String, required: true },
    name: { type: String, required: true }
  }
};
</script>
