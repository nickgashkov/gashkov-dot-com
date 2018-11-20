<template>
  <section id="contact-me" class="section has-text-centered">
    <h1 class="title">Let's build something amazing together</h1>
    <div class="buttons is-centered">
      <social-button to="https://github.com/nickgashkov" name="GitHub">
        <app-icon name="brands/github" />
      </social-button>
      <social-button to="https://linkedin.com/in/gashkov" name="Linkedin">
        <app-icon name="brands/linkedin" />
      </social-button>
      <social-button
        to="https://www.upwork.com/o/profiles/users/_~01e53467dfc4f476c8/"
        name="Upwork"
      >
        <upwork-icon style="height: 1em; width: 1em" class="fa-icon" />
      </social-button>
    </div>
    <p>
      Or just send me an email to
      <a href="mailto:nick@gashkov.com">nick@gashkov.com</a>
    </p>
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
