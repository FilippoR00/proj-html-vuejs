<template>
    <div class="container">
        <div class="title animation2">
            <h1>Dig A Little Deeper Into Damon Vaughn</h1>
            <h3>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h3>
        </div>
        <div class="row animation1">
            <div class="card">
                <a href="#">
                    <div class="box">
                        <div class="content-card">
                            <h2>About Me</h2>
                            <hr>
                            <p>Vestibulum ante ipsum primis</p>
                        </div>
                        <div class="small-card c1">
                            <div class="gradient"></div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#">
                    <div class="box">
                        <div class="content-card">
                            <h2>My Latest Book</h2>
                            <hr>
                            <p>Vestibulum ante ipsum primis</p>
                        </div>
                        <div class="small-card c2">
                            <div class="gradient"></div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#">
                    <div class="box">
                        <div class="content-card">
                            <h2>Book Signing</h2>
                            <hr>
                            <p>Vestibulum ante ipsum primis</p>
                        </div>
                        <div class="small-card c3">
                            <div class="gradient"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardSection',
        mounted() {
            const bottom = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-bottom');
                    }
                });
            });
            bottom.observe(document.querySelector('.animation1'));
            const fadein = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });
            fadein.observe(document.querySelector('.animation2'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .container{
        padding: 80px;
        text-align: center;
        .title{
            h1{
                font-family: $serif;
                font-size: 40px;
                font-weight: 200;
            }
            h3{
                font-weight: 200;
                color: $keppel;
                margin: 20px 0px 40px;
                letter-spacing: 1.5px;
            }
        }
        .row{
            display: flex;
            justify-content: center;
            column-gap: 50px;
            .card{
                width: 24%;
                height: 500px;
                position: relative;
                a{
                    text-decoration: none;
                    .box{
                        width: 100%;
                        height: 100%;
                        border-bottom-right-radius: 50px;
                        .content-card{
                            color: white;
                            position: relative;
                            top: 360px;
                            h2{
                                font-size: 30px;
                                font-weight: 200;
                            }
                            hr{
                                width: 50px;
                                margin: 15px auto;
                                opacity: 0.5;
                            }
                            p{
                                font-size: 18px;
                                color: $saffron;
                                font-weight: 200;
                            }
                        }
                    }
                }
                .small-card{
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    border-bottom-right-radius: 50px;
                    position: absolute;
                    top: 0;
                    transition: 0.3s;
                    .gradient{
                        width: 100%;
                        height: 100%;
                        background: rgb(0,0,0);
                        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%);
                        border-bottom-right-radius: 50px;
                    }
                }
                .box:hover .small-card{
                    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
                    scale: 1.02;
                }
                .c1{
                    background-image: url("../../assets/img/box-1.jpg");
                    background-size: cover;
                }
                .c2{
                    background-image: url("../../assets/img/box-4.jpg");
                    background-size: cover;
                }
                .c3{
                    background-image: url("../../assets/img/box-3.jpg");
                    background-size: cover;
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
    .show-bottom{
        animation: show_bottom 2s 1;
    }
    @keyframes show_bottom {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }
        50% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>