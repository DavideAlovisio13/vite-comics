<template>
    <footer class="debug">
        <div class="container" id="footerTop">
            <TopFooterComponent v-for="(item, index) in content" :key="index" :content="item"/>
        </div>
        <div class="container footerCenter" >
            <CenterFooterComponent v-for="(item, index) in list" :key="index" :list="item"/>
            <div class="w-50">
                <img src="/public/images/dc-logo-bg.png" alt="dc-footer-logo">
            </div>
        </div>
        <div class="container" id="footerBottom">
            <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h4 class="px-2">follow us</h4>
                </div>
                <div>
                    <img src="/public/images/footer-facebook.png" alt="facebook" class="px-2">
                    <img src="/public/images/footer-twitter.png" alt="twitter"  class="px-2">
                    <img src="/public/images/footer-youtube.png" alt="youtube"  class="px-2">
                    <img src="/public/images/footer-pinterest.png" alt="pinterest" class="px-2">
                    <img src="/public/images/footer-periscope.png" alt="periscope"  class="px-2">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CenterFooterComponent from './CenterFooterComponent.vue';
import TopFooterComponent from './TopFooterComponent.vue';
    export default {
        name: 'FooterComponent',
        components: {
            TopFooterComponent,
            CenterFooterComponent
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

                ],
                list: [
                    {
                        listtiltle: 'Dc comics',
                        listitem: [
                            'Characters',
                            'Comics',
                            'Movies',
                            'Tv',
                            'Games',
                            'Videos',
                            'News'
                        ],
                    },
                    {
                        listtiltle: 'Shop',
                        listitem: [
                            'Shop DC',
                            'Shop DC Collectibles'
                        ],
                    },
                    {
                        listtiltle: 'Dc',
                        listitem: [
                            'Terms Of Use',
                            'Privacy policy (New)',
                            'Ad Choices',
                            'Advertising',
                            'Jobs',
                            'Subscriptions',
                            'Talent Workshops',
                            'CPSC Certificates',
                            'Ratings',
                            'Shop Help',
                            'Contact Us'
                        ],
                    },
                    {
                        listtiltle: 'Sites',
                        listitem: [
                            'DC',
                            'MAD Magazine',
                            'DC Kids',
                            'DC Universe',
                            'DC Power Visa'
                        ],
                    },
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
        justify-content: space-between;
        padding: 30px 0;

        // footerCenter style
        .footerCenter {
            background-image: url('/public/images/footer-bg.jpg');
            background-size: contain;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        // #footerBottom style
        #footerBottom {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>