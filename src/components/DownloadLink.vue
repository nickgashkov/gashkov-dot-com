<template>
  <a :href="this.to" download>{{ this.name }}</a>
</template>

<script>
export default {
  name: "DownloadLink",
  props: {
    to: { type: String, required: true },
    name: { type: String, required: true }
  }
};
</script>
