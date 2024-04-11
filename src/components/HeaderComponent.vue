<template>
  <header class="position-fixed z-3">
    <div class="container animate__animated animate__fadeInDown">
      <div class="logoheader">
        <img
          src="/public/images/dc-logo.png"
          alt="dclogo"
          class="rotate-x-infinite"
        />
      </div>
      <div role="navigation" class="menubar">
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div role="search" class="searchbar">
        <label for="search" class="px-2" @click="cleanResult"
          ><i class="fa fa-search" aria-hidden="true"></i
        ></label>
        <input
          type="search"
          placeholder="Search"
          v-model="searchQuery"
          @input="search"
        />
        <div v-if="searchResults.length" class="dropdown position-absolute z-3 bg-white p-3 shadow-lg">
          <div v-for="(result, index) in searchResults" :key="index">
            <a href="#" class="text-decoration-none text-black p-1">{{ result.series }}</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { comics } from "./data/store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchQuery: '',
      searchResults: [],
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
  methods: {
    search() {
      const lowSearchQuery = this.searchQuery.toLowerCase();
      this.searchResults = comics.filter(comic => comic.series.toLowerCase().includes(lowSearchQuery));
    }, 
    cleanResult() {
      this.searchResults = [];
    }
  }
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

        &:hover {
          color: $logo-header-bg-color;
        }

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
