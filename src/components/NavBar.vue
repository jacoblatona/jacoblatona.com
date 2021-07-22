<template>
  <div>
    <nav
      class="w-full fixed lg:absolute top-0 py-3 z-10 border-b bg-indigo-600 border-indigo-500 px-5 lg:px-0"
    >
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <img src="/images/logo.svg" class="h-8" />
        </div>
        <div class="hidden lg:flex lg:visible">
          <a
            href="#!"
            v-scroll-to="'#about'"
            class="text-indigo-200 uppercase text-xs mr-10"
            >About</a
          >
          <a
            href="#!"
            v-scroll-to="'#recentProjects'"
            class="text-indigo-200 uppercase text-xs  mr-10"
            >Work</a
          >
          <a
            href="#!"
            v-scroll-to="'#contact'"
            class="text-indigo-200 uppercase text-xs"
            >Contact</a
          >
        </div>
        <div class="visible lg:hidden">
          <svg
            @click="open = !open"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </nav>
    <div
      class="fixed inset-0 overflow-hidden z-20"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      v-show="open"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0" aria-hidden="true"></div>

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen max-w-md">
            <div
              class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
            >
              <div class="px-4 sm:px-6">
                <div class="flex items-start justify-end">
                  <div class="ml-3 h-7 flex items-center">
                    <button
                      class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        @click="open = !open"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="h-full pt-10" aria-hidden="true">
                    <div class="w-full py-4 text-center">
                      <a
                        href="#!"
                        class="font-bold text-xl"
                        v-scroll-to="'#about'"
                        @click="open = !open"
                        >About</a
                      >
                    </div>
                    <div class="w-full py-4 text-center">
                      <a
                        href="#!"
                        class="font-bold text-xl"
                        v-scroll-to="'#recentProjects'"
                        @click="open = !open"
                        >Work</a
                      >
                    </div>
                    <div class="w-full py-4 text-center">
                      <a
                        href="#!"
                        class="font-bold text-xl"
                        v-scroll-to="'#contact'"
                        @click="open = !open"
                        >Contact</a
                      >
                    </div>
                  </div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
const VueScrollTo = require("vue-scrollto");

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faTwitch,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add([faTwitter, faTwitch, faLinkedin]);
Vue.use(VueScrollTo);

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
      ],
      open: false
    };
  },
  methods: {}
});
</script>
