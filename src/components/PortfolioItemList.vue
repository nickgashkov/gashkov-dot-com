<template>
  <div class="columns">
    <div class="column">
      <p class="content">
        I have worked on several personal and professional projects including
        this website.
      </p>
    </div>
    <div class="column"><portfolio-item-landing-page /></div>
    <div class="column"><portfolio-item-parser /></div>
    <div class="column"><portfolio-item-your-next-project /></div>
  </div>
</template>

<script>
import PortfolioItemYourNextProject from "./PortfolioItemYourNextProject";
import PortfolioItemLandingPage from "./PortfolioItemLandingPage";
import PortfolioItemParser from "./PortfolioItemParser";

export default {
  name: "PortfolioItemList",
  components: {
    PortfolioItemParser,
    PortfolioItemLandingPage,
    PortfolioItemYourNextProject
  }
};
</script>

<style scoped></style>
