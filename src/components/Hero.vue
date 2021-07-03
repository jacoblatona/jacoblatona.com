<template>
  <div>
    <section
      class="w-full h-screen bg-indigo-600 flex items-center relative z-0"
    >
      <div
        class="container mx-auto flex flex-col lg:flex-row justify-between items-center"
      >
        <div class="text-center lg:text-left lg:mt-0">
          <p class="text-white font-extrabold text-4xl lg:text-7xl">
            <span class="font-thin text-xl">Greetings!</span> <br />
            I'm Jacob Latona
          </p>
          <p class="text-white md:text-xl font-thin my-10 max-w-xs lg:max-w-xl">
            I'm a Nebraska-based Software Engineer specializing in building
            engaging and impactful applications in the esports and gaming
            industries. I currently work at
            <a href="#!" class="font-bold">Binge.com</a> and
            <a href="#!" class="font-bold">Bytz.gg</a>
          </p>
          <button
            class="flex bg-white px-5 py-3 rounded-md mx-auto lg:float-left"
          >
            <span class="text-black font-bold">
              Get in Touch
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </button>
        </div>
        <div>
          <img
            src="/images/hero.svg"
            class="hidden lg:block mt-16 max-w-xs md:max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Hero"
});
</script>

<style scoped>
img {
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0%,
  100% {
    ransform: translateX(0);
  }
  50% {
    transform: translateX(-100px);
  }
}
</style>
