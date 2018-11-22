<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img src="../assets/your-next-project.jpg" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">...and your next beautiful project</p>
      <a
        class="is-size-7 has-text-grey"
        href="https://www.freepik.com/free-photos-vectors/background"
        >Vector created by Katemangostar, Freepik.com&nbsp;<app-icon
          name="external-link-alt"
          class="has-icon-margin-left"
          scale="0.7"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioItemYourNextProject"
};
</script>

<style scoped>
.card {
  height: 100%;
}

.has-margin-left {
  margin-left: 1ex;
}
.has-icon-margin-left {
  margin-left: 0.5ex;
}
</style>
