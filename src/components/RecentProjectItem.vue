<template>
  <div>
    <div
      class="max-w-xs md:max-w-xl lg:max-w-full mx-auto lg:mr-5 mb-10 lg:mb-0"
    >
      <div class="bg-indigo-600 p-5 rounded-lg text-center">
        <img
          :src="project.image"
          class="h-64 mx-auto mt-0 lg:-mt-20 rounded-lg bg-white p-2"
        />
        <p class="font-bold text-white text-xl py-5">{{ project.name }}</p>
        <p class="text-white text-sm pb-5">
          {{ project.description }}
        </p>
        <div class="w-full -mb-7 mt-5">
          <a
            :href="project.url"
            target="_blank"
            class="bg-white px-5 py-3 rounded-md mx-auto w-full shadow-lg"
          >
            <span class="text-black font-bold">
              View Website
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "RecentProjectItem",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
});
</script>
