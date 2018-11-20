<template>
  <section id="contact-me" class="section has-text-centered">
    <h1 class="title">Let's get in touch</h1>
    <div class="buttons is-centered">
      <social-button to="https://github.com/nickgashkov" name="GitHub">
        <v-icon name="brands/github" />
      </social-button>
      <social-button to="https://linkedin.com/in/gashkov" name="Linkedin">
        <v-icon name="brands/linkedin" />
      </social-button>
      <social-button
        to="https://www.upwork.com/o/profiles/users/_~01e53467dfc4f476c8/"
        name="Upwork"
      >
        <upwork-icon style="height: 1em; width: 1em" class="fa-icon" />
      </social-button>
    </div>
    <p>Or just <a href="mailto:nick@gashkov.com">email</a> me.</p>
  </section>
</template>

<script>
import UpworkIcon from "../assets/upwork.svg";
import SocialButton from "../components/SocialButton";

export default {
  name: "ContactSection",
  components: {
    SocialButton,
    UpworkIcon
  }
};
</script>
