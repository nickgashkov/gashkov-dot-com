<template>
  <section id="latest-work" class="section">
    <div class="container">
      <div class="title">
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
