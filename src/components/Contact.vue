<template>
  <div>
    <section class="w-full py-32 lg:py-64" id="contact">
      <div class="container mx-auto">
        <div class="text-center max-w-xs md:max-w-2xl mx-auto">
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Get in Touch
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-400">
            Although I am not currently accepting new projects at this time,
            feel free to shoot me an email and I will be sure to get back to you
            when my schedule opens up!
          </p>
          <div class="text-center mt-10">
            <a
              type="button"
              href="mailto:jaralato@gmail.com"
              class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Message Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 ml-3 text-white"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
  components: {}
});
</script>
