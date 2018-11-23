<template>
  <app-typed-strings
    element-id="hungry"
    :strings="[
      'a website?',
      'a desktop app?',
      'a web service?',
      'a script?',
      'apples?'
    ]"
  />
</template>

<script>
import AppTypedStrings from "./AppTypedStrings";

export default {
  name: "TypedStringsHungry",
  components: { AppTypedStrings }
};
</script>
