<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item has-text-brand is-size-2">Gashkov</div>
      <!-- <div class="navbar-item"><the-logo /></div> -->
      <div
        class="navbar-burger"
        data-target="navbar-menu"
        :class="{ 'is-active': this.isBurgerActive }"
        @click="toggleIsBurgerActive"
      >
        <!-- eslint-disable -->
        <span></span>
        <span></span>
        <span></span>
        <!-- eslint-enable -->
      </div>
    </div>
    <div
      id="navbar-menu"
      class="navbar-menu"
      :class="{ 'is-active': this.isBurgerActive }"
    >
      <div class="navbar-end">
        <a href="#skills" class="navbar-item">Skills</a>
        <a href="#latest-work" class="navbar-item">Latest work</a>
        <a href="#contact-me" class="navbar-item">Contact me</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "VHeader",
  data: function() {
    return {
      isBurgerActive: false
    };
  },
  methods: {
    toggleIsBurgerActive: function() {
      this.isBurgerActive = !this.isBurgerActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Cinzel");

.has-text-brand {
  font-family: "Cinzel", serif;
}
</style>
