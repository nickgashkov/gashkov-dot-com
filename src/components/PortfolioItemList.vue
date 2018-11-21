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
        name="A website"
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
    <div class="column">
      <portfolio-item
        name="...and your next beautiful project"
        description="This will be awesome"
        image-url="https://bulma.io/images/placeholders/480x320.png"
      />
    </div>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem";

export default {
  name: "PortfolioItemList",
  components: { PortfolioItem }
};
</script>

<style scoped></style>
