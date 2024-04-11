<template>
    <div class="mx-3 cardshop">
        <div class="img-cont animate__animated animate__fadeInUp">
            <img :src="content.img" :alt="content.alt">
        </div>
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
.cardshop {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    h5 {
        color: $main-white-color;
        text-transform: uppercase;
        font-size: 0.8em;
    }
    // img container
    .img-cont {
        width: 70px;
        height: 70px;
        // img style
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

</style>