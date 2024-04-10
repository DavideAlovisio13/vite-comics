<template>
  <header class="debug">
    <div class="container">
      <div class="logoheader">
        <img src="/public/images/dc-logo.png" alt="dclogo" />
      </div>
      <div role="navigation" class="menubar">
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menu: [
        { name: "Characters", link: "#" },
        { name: "Comics", link: "#" },
        { name: "Movies", link: "#" },
        { name: "Tv", link: "#" },
        { name: "Games", link: "#" },
        { name: "Collectibles", link: "#" },
        { name: "Videos", link: "#" },
        { name: "Fans", link: "#" },
        { name: "News", link: "#" },
        { name: "Shop", link: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// header style
header {
  width: 100%;
  background-color: $main-white-color;

  // container
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // menubar
  .menubar {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      li {
        list-style: none;
        font-size: 1.2rem;
        font-weight: 500;
        color: $main-black-bg;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
</style>
