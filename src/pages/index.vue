<template>
  <div>
    <Hero />
    <About />
    <RecentProjects />
    <Contact />
  </div>
</template>

<script>
import Vue from "vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import RecentProjects from "../components/RecentProjects.vue";
import Contact from "../components/Contact.vue";
export default Vue.extend({
  components: {
    Hero,
    About,
    RecentProjects,
    Contact
  },
  data() {
    return {};
  }
});
</script>
