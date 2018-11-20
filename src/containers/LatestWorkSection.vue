<template>
  <section id="latest-work" class="section has-text-white">
    <div class="container">
      <div class="title has-text-white">
        <span>Hungry for</span>
        <app-typed-strings
          element-id="project"
          :strings="['website?', 'desktop app?', 'web service?']"
        />
      </div>
      <div class="columns">
        <div class="column">
          <p class="content">
            I have worked on several personal and professional projects
            including this website.
          </p>
          <p class="content">
            <strong class="has-text-white">Unleash the portfolio!</strong>
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
    </div>
  </section>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem";
import AppTypedStrings from "../components/AppTypedStrings";

export default {
  name: "LatestWorkSection",
  components: { AppTypedStrings, PortfolioItem }
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
