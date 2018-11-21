<template>
  <section id="latest-work" class="section has-text-white">
    <div class="container">
      <div class="title has-text-white">
        <span>Hungry for</span>
        <typed-strings-hungry />
      </div>
      <portfolio-item-list />
    </div>
  </section>
</template>

<script>
import PortfolioItemList from "../components/PortfolioItemList";
import TypedStringsHungry from "../components/TypedStringsHungry";

export default {
  name: "SectionLatestWork",
  components: {
    TypedStringsHungry,
    PortfolioItemList
  }
};
</script>

<style scoped>
.section {
  background: rgb(214, 14, 255);
  background: linear-gradient(
    133deg,
    rgba(214, 14, 255, 1) 0%,
    rgba(135, 13, 232, 1) 37%,
    rgba(74, 1, 255, 1) 64%,
    rgba(14, 74, 255, 1) 81%,
    rgba(16, 13, 232, 1) 100%
  );
}
</style>
