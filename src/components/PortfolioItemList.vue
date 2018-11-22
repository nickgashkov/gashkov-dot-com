<template>
  <div class="columns">
    <div class="column">
      <p class="content">
        I have worked on several personal and professional projects including
        this website.
      </p>
    </div>
    <div class="column">
      <portfolio-item
        name="A landing page"
        description="It was cool"
        image-url="https://bulma.io/images/placeholders/480x320.png"
      />
    </div>
    <div class="column">
      <portfolio-item
        name="An app"
        description="This was too"
        image-url="https://bulma.io/images/placeholders/480x320.png"
      />
    </div>
    <div class="column"><portfolio-item-your-next-project /></div>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem";
import PortfolioItemYourNextProject from "./PortfolioItemYourNextProject";

export default {
  name: "PortfolioItemList",
  components: { PortfolioItemYourNextProject, PortfolioItem }
};
</script>

<style scoped></style>
