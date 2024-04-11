<template>
    <div class="listitems d-flex justify-content-center animate__animated animate__fadeInLeft">
      <ul>
        <h5>{{ list.listtiltle }}</h5>
        <li v-for="(item, index) in list.listitem" :key="index">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "CenterFooterComponent",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// listitems style
.listitems {

  h5 {
    text-transform: uppercase;
    color: $main-white-color;
    font-size: 1.5rem;
    padding-bottom: 10px;
    font-weight: bold;
  }
  li {
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 0.8em;
    list-style: none;
  }
}
</style>
