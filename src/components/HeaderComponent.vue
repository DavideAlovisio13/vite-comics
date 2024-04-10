<template>
  <header>
    <div class="container">
      <div class="logoheader">
        <img src="/public/images/dc-logo.png" alt="dclogo" class="rotate-x-infinite" />
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
    padding: 10px 0;
  }

  // menubar
  .menubar {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
        font-size: 1rem;
        font-weight: 500;
        color: $main-black-bg;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        margin: auto 0;

        &::after {
          content: "";
          position: absolute;
          bottom: -58px;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: $logo-header-bg-color;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}

@keyframes rotateX {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.rotate-x-infinite {
  animation: rotateX 4s linear infinite;
}
</style>
