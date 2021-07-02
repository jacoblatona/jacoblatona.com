<template>
  <div>
    <div class="w-screen h-screen bg-indigo-600 flex items-center text-center">
      <div class="container mx-auto">
        <p class="text-white font-extrabold text-4xl lg:text-7xl">
          Hi, I'm Jacob Latona
        </p>
        <p class="text-white md:text-xl font-thin my-5">
          Full Stack Web and App Developer
        </p>
        <button class="flex bg-white px-5 py-3 rounded-md mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-black mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-black font-bold">
            Under Construction
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      message: "Go to About Page"
    };
  }
});
</script>
