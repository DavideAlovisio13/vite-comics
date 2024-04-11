<template>
    <main>
        <div class="container animate__animated animate__fadeInDown">
            <h1 class="container animate__animated animate__fadeInUp">contenuto titolo</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <CardComponent v-for="(item, index) in comics" :key="index" :comics="item"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CardComponent from './CardComponent.vue';
import {comics} from './data/store.js';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
        },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// main style
main {
    width: 100%;
    background-color: $main-white-color;

    // container
    .container {
        background-color: $main-black-bg;
        padding: 30px 0;
        // content
        h1 {
            color: $main-white-color;
            ;
        }
    }
}
</style>