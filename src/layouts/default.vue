<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default Vue.extend({
  components: {
    NavBar,
    Footer
  }
});
</script>
<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
