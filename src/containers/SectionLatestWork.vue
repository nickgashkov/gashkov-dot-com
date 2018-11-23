<template>
  <section id="latest-work" class="section">
    <div class="container">
      <div class="title">
        <span>Hungry for</span>
        <typed-strings-hungry />
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          <p class="content">
            I have worked on several personal and professional projects
            including this website.
          </p>
        </div>
        <div class="column">
          <img src="../assets/macbook-langing-page.png" alt="" />
        </div>
      </div>
      <!-- <portfolio-item-list /> -->
    </div>
  </section>
</template>

<script>
import TypedStringsHungry from "../components/TypedStringsHungry";

export default {
  name: "SectionLatestWork",
  components: {
    TypedStringsHungry
  }
};
</script>
