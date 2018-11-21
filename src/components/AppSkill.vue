<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ this.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <p v-for="description in this.descriptions" :key="description">{{ description }}</p>
      </div>
      <div class="tags">
        <span v-for="tag in this.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSkill",
  props: {
    name: { type: String, required: true },
    descriptions: { type: String, required: true },
    tags: { type: Array, required: true }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
