<template>
  <main>
    <div class="container animate__animated animate__fadeInDown">
      <h1 class="animate__animated animate__fadeInUp shadow-lg">
        Current Series
      </h1>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-3 d-flex w-100 flex-wrap justify-content-center"
        >
          <CardComponent
            v-for="(item, index) in comics"
            :key="index"
            :comics="item"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { comics } from "./data/store.js";
export default {
  name: "MainComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      comics: comics,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// main style
main {
  width: 100%;
  background-color: $main-black-bg;

  // container
  .container {
    padding: 30px 0;
    // content
    h1 {
      position: relative;
      color: $main-white-color;
      text-transform: uppercase;
      width: fit-content;
      top: -60px;
      padding: 10px 20px;
      font-weight: bolder;
      background-color: $logo-header-bg-color;
    }
  }
}
</style>
