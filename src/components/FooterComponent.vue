<template>
    <footer class="debug">
        <div class="container" id="footerTop">
            <TopFooterComponent v-for="(item, index) in content" :key="index" :content="item"/>
        </div>
        <div class="container" id="footerCenter">
            footerCenter
        </div>
        <div class="container" id="footerBottom">
            footerBottom
        </div>
    </footer>
</template>

<script>
import TopFooterComponent from './TopFooterComponent.vue';
    export default {
        name: 'FooterComponent',
        components: {
            TopFooterComponent
        },
        data() {
            return {
                content: [
                    {
                        img: '/public/images/buy-comics-digital-comics.png',
                        title: 'Digital Comics',
                        alt: 'digitalcomics'
                    },
                    {
                        img: '/public/images/buy-comics-merchandise.png',
                        title: 'Dc Merchandise',
                        alt: 'digitalcomics'
                    },
                    {
                        img: '/public/images/buy-comics-subscriptions.png',
                        title: 'Subscription',
                        alt: 'digitalcomics'
                    },
                    {
                        img: '/public/images/buy-comics-shop-locator.png',
                        title: 'Comic Shop Locator',
                        alt: 'digitalcomics'
                    },
                    {
                        img: '/public/images/buy-dc-power-visa.svg',
                        title: 'Dc Power Visa',
                        alt: 'digitalcomics'
                    }

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
// footer style
footer {
    width: 100%;
    background-color: $top-footer-bg-color;

    // container
    .container {
        display: flex;
    }
}
</style>