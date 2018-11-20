<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2"><img :src="this.imageUrl" /></figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ this.name }}</p>
      <p class="content">{{ this.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
