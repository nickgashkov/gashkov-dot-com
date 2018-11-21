<template>
  <section id="contact-me" class="section has-text-centered">
    <h1 class="title">Let's build something amazing together</h1>
    <div class="buttons is-centered">
      <social-button-github />
      <social-button-linkedin />
      <social-button-upwork />
    </div>
    <p>
      Or just send me an email to
      <a href="mailto:nick@gashkov.com">nick@gashkov.com</a>
    </p>
  </section>
</template>

<script>
import SocialButtonGithub from "../components/SocialButtonGithub";
import SocialButtonLinkedin from "../components/SocialButtonLinkedin";
import SocialButtonUpwork from "../components/SocialButtonUpwork";

export default {
  name: "ContactSection",
  components: {
    SocialButtonGithub,
    SocialButtonLinkedin,
    SocialButtonUpwork
  }
};
</script>
