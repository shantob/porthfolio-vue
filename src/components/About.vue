<!-----=====|| {( START:- ABOUT )} ||=====----->
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 p-0">
                <div class="about-background">
                    <!-----=====|| {( START:- SCROLLBAR )} ||=====----->
                    <Scroll />
                    <!-----=====|| {( END:- SCROLLBAR )} ||=====----->
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
                            <div class="col-12 col-md-12 col-lg-4 col-xl-4">
                                <div class="images">
                                    <img :src="me" alt="images">
                                    <div class="model-image">
                                        <img :src="model" alt="images">
                                        <p><b>2 +</b><br>Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-8 col-xl-8">
                                <div class="me-description">
                                    <h4>Who am i?</h4>
                                    <h1>{{ msg }}</h1>
                                    <p>{{ text }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-6 col-xl-6">
                                        <div class="text-about">
                                            <p>Name : <span>Shanto Bepari</span></p>
                                            <p>Age : <span>24</span></p>
                                            <p>Phone : <span>+88 01781768085</span></p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12 col-lg-6 col-xl-6">
                                        <div class="text-about">
                                            <p>E-mail : <span>shantobepary575@gmail.com</span></p>
                                            <p>From : <span>Bangladesh</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-5 col-lg-5 col-xl-5">
                                        <div class="cv-btn">
                                            <button @click="downloadPDF">Download CV<i class="fa fa-download" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-7 col-lg-7 col-xl-7">
                                        <div class="social-media">
                                            <a target="_blank" href="https://github.com/shantob"><img src="@/assets/social-media/github.png" alt="github"></a>

                                            <a target="_blank" href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkwxGgCsmZGdtWkLqfNmkvfVwWfKVPKdlGXmFwPcRlfLjmPlscvzMqKwccsvvWnfQqcljx'>
                                                <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" alt="gmail"></a>

                                            <a target="_blank" href="https://twitter.com/BeparyShan32224"><img src="@/assets/social-media/twitter.png" alt="twitter"></a>
                                        
                                            <a href="https://www.linkedin.com/in/shanto-bepary-276215207/" target='_blank'><img src="@/assets/social-media/linkedin.png" alt="linkedin"></a>
                                            
                                            <a href='http://wa.me/+8801781768085'   target='_blank'><img src="https://img.freepik.com/free-psd/whatsapp-icon-isolated-3d-render-illustration_47987-9785.jpg" alt="linkedin"></a>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-----=====|| {( START:- CART )} ||=====----->
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div class="service-title">
                                    <p>{{ serviceTitle }}</p>
                                    <h1>{{ myTitle }}</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                                <div
                                    v-for="item in cartItems"
                                    :key="item.id"
                                    class="col-12 col-md-6 col-lg-4 col-xl-4"
                                >
                                <Cart 
                                    :images="item.images"
                                    :name="item.name"
                                    :text=" item.text"
                                />
                            </div>
                        </div>
                        <!-----=====|| {( END:- CART )} ||=====----->  
                        
                        <!-----=====|| {( START:- TESTIMONIALS )} ||=====----->

                        <Testimonials></Testimonials>
                        
                        <!-----=====|| {( END:- TESTIMONIALS )} ||=====----->

                        <!-----=====|| {( START:- CHOOSE A PLAN )} ||=====----->

                        <Plan />

                        <!-----=====|| {( END:- CHOOSE A PLAN )} ||=====----->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-----=====|| {( END:- ABOUT )} ||=====----->

<!-----=====|| {( START:- ABOUT JAVASCRIPT )} ||=====----->
<script>
    import Cart from './Cart/Cart.vue'
    import Testimonials from './Cart/Testimonials.vue'
    import Plan from './Cart/Plan.vue'
    import Scroll from './Cart/ScrollBar.vue'

    export default {
    name: 'About',
    data() {
        return {
        subtitle: "Get to know me",
        title: "About Me",
        me: require("@/assets/jpg/my.jpeg"),
        msg: "I'm Shanto Bepari, a full Stack Developer with Laravel + Vue js / React Js",
        text: "I have professional experience with laravel 2 year+ . And Self 3 year + and React and vue js also 1 Year + . And aslo I continue a job with my profession",
        model: require("@/assets/png/medal.png"),
        serviceTitle: "Services I offer to my clients",
        myTitle: "My Services",

        cartItems: [
                { 
                    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
                    name: 'Laravel Web Application',
                    text: 'I have 3 Year work experience . Here 2 years In office experience and one year self experience.'
                },
                { 
                    images: "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
                    name: 'React Js Porthfolio/Fontend Application',
                    text: 'I know React Js for frontend design and view show with components. Without reload page routing and super first web application . I also experience with it 1 year +'
                },
                { 
                    images: require("@/assets/png/letter-v.png"),
                    name: 'Vue Js Porthfolio/Fontend Application',
                    text: 'I know Vue Js for frontend design and view show with components. Without reload page routing and super first web application . I also experience with 1 year.'
                },
                { 
                    images: "https://www.remoterocketship.com/images/blog/Nuxt-icon-for-blog.jpg",
                    name: 'Nuxt Js Fontend Application',
                    text: 'I know Nuxt Js for frontend design and view show with components and more valuable for this another featcher for seo and vary easy working. Without reload page routing and super first web application . I also experience with 1 year'
                },
                { 
                    images: 'https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg',
                    name: 'Full Stack Web Application',
                    text: 'I know Full Stack web application to make api and connet with frontend and backend by json response. I also experience with it lust 1 year'
                },
                { 
                    images: require("@/assets/png/responsive-design.png"),
                    name: 'Api Intregration For Mobile app',
                    text: 'I know Api Intregration for made external mobile application by json response. I also experience with it lust 2 year'
                },
            ]
        };
    },
    methods: {
        downloadPDF() {
            const pdfPath = '/CV/cv.pdf'; // Use a relative path

            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'shanto_bepary.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    },
    components: {
        Cart,
        Testimonials,
        Plan,
        Scroll
        },
    };
 
</script>
<!-----=====|| {( END:- ABOUT JAVASCRIPT )} ||=====----->

<!-----=====|| {( START:- ABOUT STYLE )} ||=====----->
<style>
    .about-background { width: 100%; height: 2750px; background-color: #000; }

    .about-heading { display: table; margin: auto; }

    .about-heading p { color: #868686; font-size: 16px; text-align: center; margin-top: 80px; margin-bottom: 0px; }

    .about-heading h1 { color: #fff; font-size: 36px; font-weight: 700; text-transform: uppercase; line-height: 1.2; word-break: normal; margin-top: 15px; text-align: center; margin-bottom: 15px; }
    
    .statusBar { width: 100px; height: 4px; position: relative; overflow: hidden; display: table; margin: auto; background-color: #55e6a5 ; }

    .statusBar:before { position: absolute; content: ''; width: 10px; top: 0; right: 0; bottom: 0; left: 0px; will-change: transform; background-color: #000; animation: progress 1500ms infinite; }
    
    .statusBar::after { position: absolute; content: ''; width: 10px; top: 0; right: 0; bottom: 0; left: 30px; will-change: transform; background-color: #000; animation: progress 1500ms infinite; }
   
    @keyframes progress { 0% { transform: translateX(0px); } 100% { transform: translateX(100px); } }

    .images { position: relative; margin-top: 70px; }

    .model-image { position: absolute; color: #000; width: 240px; height: 75px; padding: 15px; left: 0px; bottom: 0px; opacity: .7; border-radius: 0px 30px 0px 0px; background-color: #ccc; }
    
    .model-image img { float: left; width: 50px !important; background-color: #000; padding: 5px; border-radius: 5px; }

    .model-image p { float: left; margin-left: 15px; }
    
    .model-image p b { font-size: 18px; }

    .images img { width: 100%; }

    .me-description { margin-top: 70px; }

    .me-description h4 { color: #55e6a5; margin-bottom: 0px; }

    .me-description h1 { color: #fff; font-family: Roboto; font-size: 36px; margin-top: 15px; margin-bottom: 0px; }

    .me-description p { color: #868686; font-size: 16px; margin-top: 15px; text-align: justify; padding-bottom: 20px; line-height: 1.5; border-bottom: 1px solid #868686; }

    .text-about p { color: #fff; font-size: 16px; margin-bottom: 15px; }

    .text-about p span { color: #868686; margin-left: 15px; }

    .cv-btn { position: relative; margin-top: 15px; }

    .cv-btn::after{ position: absolute; content: ""; top: 18px; left: 180px; width: 160px; height: 2px; background-color: #868686; }

    .cv-btn button { color: #000; padding: 7px 20px; border: none; border-radius: 5px; background-color: #55e6a5; }

    .cv-btn button i { color: #000; margin-left: 10px; }

    .social-media { margin-top: 18px; }

    .social-media a img { width: 30px; margin-right: 15px; border: 2px solid #fff; border-radius: 5px; }

    .service-title { margin-top: 120px; }

    .service-title p { color: #868686; margin-bottom: 0px; }

    .service-title h1 { color: #fff; font-size: 36px; font-weight: 700; text-transform: uppercase; line-height: 1.2; word-break: normal; margin-top: 15px; margin-bottom: 15px; }
</style>
<!-----=====|| {( END:- ABOUT STYLE )} ||=====----->