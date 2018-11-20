<template>
  <div>
    <div :id="this.typedStringsElementId">
      <p v-for="string in this.strings" :key="string">{{ string }}</p>
    </div>
    <span :id="this.typedElementId"></span>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "VTyped",
  props: {
    elementId: { type: String, required: true },
    strings: { type: Array, required: true }
  },
  computed: {
    typedElementId: function() {
      return this.elementId;
    },
    typedStringsElementId: function() {
      return `${this.typedElementId}-strings`;
    },
    typedOptions: function() {
      return {
        stringsElement: `#${this.typedStringsElementId}`,
        typeSpeed: 100,
        loop: true
      };
    }
  },
  methods: {
    initTyped: function() {
      // eslint-disable-next-line no-unused-vars
      let typed = new Typed(`#${this.typedElementId}`, this.typedOptions);
    }
  },
  mounted: function() {
    this.initTyped();
  }
};
</script>
