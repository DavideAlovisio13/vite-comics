<template>
    <div class="jumbo">
    </div>
</template>

<script>
    export default {
        name: 'JumboComponent'
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// jumbo style
.jumbo {
    width: 100%;
    background-image: url("/public/images/jumbotron.jpg");
    opacity: 0.8;
    background-size: cover;
    height: 400px;
}
</style>