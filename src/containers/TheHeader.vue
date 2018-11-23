<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
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
