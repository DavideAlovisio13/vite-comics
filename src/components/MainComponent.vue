<template>
    <main>
        <div class="container animate__animated animate__fadeInDown">
            <h1 class="container animate__animated animate__fadeInUp"> Content here </h1>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainComponent',
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