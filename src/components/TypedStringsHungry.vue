<template>
  <app-typed-strings
    element-id="hungry"
    :strings="['websites?', 'desktop apps?', 'web services?']"
  />
</template>

<script>
import AppTypedStrings from "./AppTypedStrings";

export default {
  name: "TypedStringsHungry",
  components: { AppTypedStrings }
};
</script>
