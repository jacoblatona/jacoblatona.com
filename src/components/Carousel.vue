<template>
  <div>
    <VueSlickCarousel ref="carousel" v-bind="slickOptions">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="mb-10 text-center w-full"
      >
        <div class="mr-5 bg-white shadow-lg py-5 rounded-lg text-gray-500">
          {{ option.name }}
        </div>
      </div>
    </VueSlickCarousel>
    <div class="w-full flex justify-center lg:justify-end">
      <button class="p-3 rounded-full bg-indigo-700 mr-3" @click="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button class="p-3 rounded-full bg-indigo-700" @click="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default Vue.extend({
  name: "Carousel",
  components: { VueSlickCarousel },
  props: {
    options: Array
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    }
  }
});
</script>
