<template>
    <div>
        <img :src="content.img" :alt="content.alt">
        <h5>{{ content.title }}</h5>
    </div>
</template>

<script>
    export default {
        name: 'TopFooterComponent',
        props: {
            content: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;

// topfooter style
div {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    img {
        width: 70px;
    }
    h5 {
        color: $main-white-color;
        text-transform: uppercase;
        font-size: 1em;
    }
}

</style>