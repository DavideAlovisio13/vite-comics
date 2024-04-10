<template>
  <div class="w-50 d-flex justify-content-center">
    <div class="listitems">
      <ul>
        <h5>{{ list.listtiltle }}</h5>
        <li v-for="(item, index) in list.listitem" :key="index">{{ item }}</li>
      </ul>
    </div>
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
    font-size: 0.8rem;
  }
  li {
    list-style: none;
  }
}
</style>
