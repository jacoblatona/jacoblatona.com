<template>
  <div>
    <div
      class="w-full min-h-screen py-10 md:py-64 lg:py-24"
      id="recentProjects"
    >
      <div class="container mx-auto">
        <p class="text-black font-extrabold text-3xl text-center lg:text-left">
          Recent Projects
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 pt-14 lg:pt-32">
          <RecentProjectItem
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          />
        </div>
        <div class="w-full pt-20 pb-10 text-center">
          <p class="text-xl font-thin text-gray-400">
            Here are some other companies I have worked with...
          </p>
        </div>
        <div
          class="w-full flex flex-col lg:flex-row justify-center items-center"
        >
          <Company
            v-for="(company, index) in companies"
            :key="index"
            :image="company.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import RecentProjectItem from "./RecentProjectItem.vue";
import Company from "./Company.vue";
export default Vue.extend({
  name: "RecentProjects",
  components: {
    RecentProjectItem,
    Company
  },
  data() {
    return {
      projects: [
        {
          name: "Xposed TV",
          description:
            "Xposed is a professional live streamer on Twitch. This website is a hub for his massive following to interact and keep updated. ",
          image: "/images/xposed.jpeg",
          url: "https://xposed.tv"
        },
        {
          name: "R19 GG",
          description:
            "R19 is a sports betting enthusiast, proving bettings tips/tricks and more on his cool interactive website!",
          image: "/images/rand.png",
          url: "https://r19.gg"
        },
        {
          name: "Binge",
          description:
            "Binge is an immersive streaming platform creating premium content for the gaming universe.",
          image: "/images/binge.png",
          url: "https://binge.com"
        }
      ],
      companies: [
        {
          name: "Rise Nation",
          image: "/images/rise.png"
        },
        { name: "Esports Hub", image: "/images/eshub.png" },
        { name: "NAFEA", image: "/images/nafea.png" },
        { name: "Vanquish", image: "/images/vq.png" },
        { name: "Powr", image: "/images/powr.png" }
      ]
    };
  }
});
</script>
