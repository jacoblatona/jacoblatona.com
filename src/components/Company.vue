<template>
  <div>
    <img :src="image" class="h-20 mx-10 mt-10 lg:mt-0" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Company",
  props: {
    image: {
      type: String,
      required: true
    }
  }
});
</script>
