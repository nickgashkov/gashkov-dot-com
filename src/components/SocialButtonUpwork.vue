<template>
  <app-social-button
    url="https://www.upwork.com/o/profiles/users/_~01e53467dfc4f476c8/"
    name="Upwork"
  >
    <upwork-icon style="height: 1em; width: 1em" class="fa-icon" />
  </app-social-button>
</template>

<script>
import AppSocialButton from "./AppSocialButton";
import UpworkIcon from "../assets/upwork.svg";

export default {
  name: "SocialButtonUpwork",
  components: {
    AppSocialButton,
    UpworkIcon
  }
};
</script>
