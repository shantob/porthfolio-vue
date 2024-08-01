<!-----=====|| {( START:- PORTFOLIO )} ||=====----->
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 p-0">
                <div class="portfolio-background">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div class="about-heading">
                                    <p>{{ subtitle }}</p>
                                    <h1>{{ title }}</h1>
                                    <div class="statusBar"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-4 col-xl-4" v-for="(item, index) in items" :key="index">
                                <div class="item">
                                    <img :src="item.images" :alt="'Image ' + index">
                                    <div class="overlay-text">
                                        <h1>Click Here to View Live Prewiew {{ index + 1 }}</h1>
                                        <a  :href="item.link" class="btn btn-info" target="_blank">More Info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-----=====|| {( END:- PORTFOLIO )} ||=====----->

<!-----=====|| {( START:- PORTFOLIO JAVASCRIPT )} ||=====----->
<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            subtitle: 'Showcasing some of my best work',
            title: 'Portfolio',
            images: require('@/assets/img/item-1.jpg'),
            showModal: false,
            popupText: '',
            items: [
                {
                    images:'https://dcassetcdn.com/design_img/3987175/838431/27840556/a9qgtnr1h8321t4afggmzbxpk0_image.jpg',
                    link: 'https://alnoorbazar.com/'
                },
                {
                    images: 'https://mistribari.umait.xyz/files/icons/1055368776.jpeg',
                    link: 'https://mistribari.umait.xyz/'
                },
                {
                    images: require('@/assets/jpg/news.jpg'),
                    link: 'https://news.matjelltd.com/'
                },
                {
                    images: require('@/assets/jpg/union.jpg'),
                    link: 'https://unionporishad.matjelltd.com/'
                },
                {
                    images: require('@/assets/jpg/lotery.jpg'),
                    link: 'https://lottery.matjelltd.com/login/'
                },
                {
                    images: require('@/assets/jpg/make.jpg'),
                    link: 'https://makeandgain.com/'
                },
            ]
        }
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>
<!-----=====|| {( END:- PORTFOLIO JAVASCRIPT )} ||=====----->

<!-----=====|| {( START:- PORTFOLIO STYLE )} ||=====----->
<style>
.portfolio-background {
    width: 100%;
    height: 1150px;
    background-color: #000;
}

.item {
    position: relative;
}

.item:first-child {
    margin-top: 30px;
}

.item img {
    width: 100%;
    height: 400px;
}

.item::before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: all 900ms;
}

.item:hover::before {
    background-color: rgba(0, 0, 0, 0.9);
}

.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 900ms;
    z-index: 1;
}

.overlay-text h1 {
    font-size: 16px;
    color: #55e6a5;
    margin-bottom: 15px;
}

.overlay-text button {
    display: table;
    margin: auto;
    color: #000;
    border: none;
    background-color: #fff;
    padding: 5px 20px;
    border-radius: 5px;
    transition: all 900ms;
}

.overlay-text button:hover {
    background-color: #55e6a5;
}

.item:hover .overlay-text {
    opacity: 2;
}

.simulation {
    position: absolute;
    width: 100%;
    height: 1150px;
    top: 0px;
    left: 0px;
    background-color: #000;
    z-index: 9;
}

.simulation img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
}

.simulation button {
    position: absolute;
    right: 15px;
    top: 15px;
    color: #fff;
    font-size: 18px;
    background-color: #000;
    border: none;
}
</style>
<!-----=====|| {( END:- PORTFOLIO STYLE )} ||=====----->