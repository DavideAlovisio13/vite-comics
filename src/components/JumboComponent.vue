<template>
    <div class="jumbo mt-5">
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
    background-size: cover;
    height: 600px;
}
</style>