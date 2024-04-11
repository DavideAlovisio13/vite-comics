<template>
  <div>
    <div
      class="card animate__animated"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{'animate__pulse': hover}"
    >
      <img :src="comics.thumb" class="card-img-top" alt="{{ comics.title }}" />
      <div class="card-body">
        <h5 class="card-title">{{ comics.series }}</h5>
        <p>
          Price: <a href="#">{{ comics.price }}</a>
        </p>
        <p>
          Type: <a href="#">{{ comics.type }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    comics: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// card style
.card {
  cursor: pointer;
  width: 300px;
  padding: 5px;
  margin: 10px;
  background: transparent;
  color: $main-white-color;

  // img style
  img {
    width: 100%;
    height: 400px;
  }
}
</style>
