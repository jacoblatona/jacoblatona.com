<template>
  <div>
    <section class="bg-white w-full min-h-screen py-24" id="about">
      <div class="container mx-auto text-center lg:text-left">
        <div class="flex flex-col lg:flex-row justify-between">
          <p class="text-black font-extrabold text-3xl">What I Do</p>
          <p class="font-thin text-gray-400 mt-5 md:mt-0">
            I currently work at
            <a
              target="_blank"
              href="https://binge.com"
              class="text-indigo-600 font-bold"
              >Binge.com</a
            >
            and
            <a
              target="_blank"
              href="https://bytz.gg"
              class="text-indigo-600 font-bold"
            >
              Bytz.gg</a
            >
          </p>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 my-10 md:my-20">
          <div
            class="mx-auto lg:mr-5 p-5 shadow-lg rounded-lg bg-indigo-500 max-w-xs md:max-w-xl lg:max-w-full mb-10 lg:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 text-white mx-auto md:mx-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <p class="font-semibold text-xl my-5 text-white">Web Development</p>
            <p class="text-gray-100 text-sm">
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services
            </p>
          </div>
          <div
            class="mx-auto lg:mr-5 p-5 shadow-lg rounded-lg bg-indigo-500 max-w-xs md:max-w-xl lg:max-w-full mb-10 lg:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 text-white mx-auto md:mx-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p class="font-semibold text-xl my-5 text-white">UI/UX Design</p>
            <p class="text-gray-100 text-sm">
              User interface design or user interface engineering is the design
              of user interfaces for machines and software, such as computers,
              home appliances, mobile devices, and other electronic devices,
              with the focus on maximizing usability and the user
            </p>
          </div>
          <div
            class="p-5 shadow-lg rounded-lg bg-indigo-500 max-w-xs md:max-w-xl lg:max-w-full mx-auto mb-10 lg:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 text-white mx-auto md:mx-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p class="font-semibold text-xl my-5 text-white">
              Mobile App Development
            </p>
            <p class="text-gray-100 text-sm">
              Mobile app development is the act or process by which a mobile app
              is developed for mobile devices, such as personal digital
              assistants, enterprise digital assistants or mobile phones
            </p>
          </div>
        </div>
        <div class="max-w-xs md:max-w-full mx-auto md:float-left">
          <p class="text-xl font-thin text-gray-400">
            I use a variety of tools and frameworks to build projects. It all
            depends on the platform!
          </p>
          <p class="font-semibold">Tools I use range from...</p>
          <div class="w-full my-10 mx-auto md:float-right">
            <Carousel :options="options" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import Carousel from "./Carousel.vue";
export default Vue.extend({
  name: "About",
  components: {
    Carousel
  },
  data() {
    return {
      options: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "REACT" },
        { name: "PHP" },
        { name: "VUE" },
        { name: "TYPESCRIPT" },
        { name: "SASS" },
        { name: "NUXT.js" },
        { name: "LARAVEL" },
        { name: "NEXT.js" },
        { name: "MYSQL" },
        { name: "REACT NATIVE" }
      ]
    };
  }
});
</script>
