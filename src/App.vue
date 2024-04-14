<template>
  <HeaderComponent />
  <JumboComponent />
  <Animamation />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import JumboComponent from './components/JumboComponent.vue'
import Animamation from './components/Animamation.vue'
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
      JumboComponent,
      Animamation
    },
    data() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/_variables.scss" as *;

</style>