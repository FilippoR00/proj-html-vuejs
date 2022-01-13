<template>
    <div class="bg">
        <div class="container trigger">
            <h1 class="title">Upcoming Events</h1>
            <div class="sub-title">MEET THE AUTHOR IN PERSON</div>
            <div class="cards">
                <div class="card">
                    <img src="../../assets/img/event-05-400x240.jpg" alt="Chicago Book Signing image">
                    <div class="gradient"></div>
                    <div>Chicago Book Signing</div>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.</p>
                </div>
                <div class="card">
                    <img src="../../assets/img/event-04-400x240.jpg" alt="Amanda photo">
                    <div class="gradient"></div>
                    <div>Meet & Greet With Amanda</div>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas.</p>
                </div>
                <div class="card">
                    <img src="../../assets/img/event-07-400x240.jpg" alt="Book image">
                    <div class="gradient"></div>
                    <div>Open Book: Dialogues</div>
                    <hr>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Events',
        mounted() {
            const fadein = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });
            fadein.observe(document.querySelector('.trigger'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .bg{
        background-color: $tan;
        .container{
            width: 75%;
            margin: 0px auto;
            padding: 70px 0px;
            text-align: center;
            .title{
                font-family: $serif;
                font-weight: 200;
                font-size: 40px;
            }
            .sub-title{
                color: $saffron;
                font-size: 20px;
                padding: 10px 0px;
            }
            .cards{
                display: flex;
                column-gap: 50px;
                margin-top: 50px;
                .card{
                    height: 500px;
                    background-color: $white;
                    position: relative;
                    img{
                        height: 50%;
                        width: 100%;
                        object-fit: cover;
                    }
                    .gradient{
                        width: 100%;
                        height: 50%;
                        position: absolute;
                        top: 0;
                        transition: opacity 0.5s ease-out;
                        background: rgb(73,169,135);
                        background: linear-gradient(0deg, rgba(73,169,135,0.31) 0%, rgba(255,255,255,0.39) 100%);
                        opacity: 0;
                    }
                    .gradient:hover{
                        opacity: 1;
                    }
                    div{
                        font-size: 25px;
                        padding-top: 30px;
                        transition: color 0.3s ease-out;
                    }
                    div:hover{
                        color: $saffron;
                    }
                    hr{
                        margin: 30px 40px;
                        opacity: 0.1;
                    }
                    p{
                        font-size: 18px;
                        color: $suvaGray;
                    }
                }
            }
        }
    }
    .fade-in{
        animation: fade_in 2s 1;
    }
    @keyframes fade_in {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    
</style>