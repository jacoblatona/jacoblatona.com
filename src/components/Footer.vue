<template>
  <div>
    <footer class="bg-white">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base text-gray-400">
            Designed & Built by Jacob Latona
          </p>
        </div>
        <div class="mt-8 md:mt-0 md:order-2">
          <p class="text-center text-base text-black">
            <a
              target="_blank"
              class="mr-3"
              :href="social.url"
              v-for="(social, index) in socials"
              :key="index"
            >
              <FontAwesomeIcon class="mr-3" :icon="['fab', social.name]" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faTwitch,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add([faTwitter, faTwitch, faLinkedin]);

export default Vue.extend({
  name: "Footer",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      year: new Date().getFullYear(),
      socials: [
        { name: "twitter", url: "https://twitter.com/jaralato" },
        { name: "twitch", url: "https://twitch.tv/jaralato" },
        { name: "linkedin", url: "https://www.linkedin.com/in/jacob-latona/" }
      ]
    };
  }
});
</script>
