<template>
    <div class="container">
        <div>
            <h1>What The Critics Say</h1>
            <h3>TESTIMONIALS FROM AROUND THE WORLD</h3>
            <a href="#">Read All Testimonials</a>
        </div>
        <div class="row">
            <div class="left">
                
                <div class="box">
                    <div class="content-box">
                        <h1>Best Author Of His Generation</h1>
                        <hr>
                        <p>This book will change your perspective on life</p>
                        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus. In vitae enim quis sem pharetra.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <p>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut liber. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada.</p>
                        <div class="source">
                            <img src="../../assets/img/nytimes-logo-white-xsmall.png" alt="The New York Times Logo">
                            <span>Justine Kilpatrick,<span class="green">The New York Times</span></span>
                        </div>
                    </div>
                    <div class="big-card">
                        <div class="gradient"></div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="msg">
                    <h2>A True Masterpiece, Bravo!</h2>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.</p>
                </div>
                <div class="source">
                    <img src="../../assets/img/theguardian-xsmall.png" alt="The Guardian Logo">
                    <span>Gerald Hendley,<span class="yellow">The Guardian</span></span>
                </div>
                <div class="msg">
                    <h2>A Unique View On The World</h2>
                    <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet.</p>
                </div>
                <div class="source">
                    <img src="../../assets/img/globe-xsmall.png" alt="The Globe And MAil Logo">
                    <span>Mary Maxey,<span class="yellow">The Globe And Mail</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Testimonials',
        mounted() {
            const right = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-right');
                    }
                });
            });
            right.observe(document.querySelector('.row'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";

    .container{
        max-width: 1400px;
        width: 70%;
        margin: 70px auto;
        position: relative;
        h1{
            font-family: $serif;
            font-size: 40px;
        }
        h3{
            margin: 30px 0px;
            font-weight: 200;
            color: $keppel;
        }
        a{
            margin: 0px auto;
            text-decoration: none;
            color: white;
            padding: 10px 35px;
            background-color: $saffron;
            border-radius: 5px;
            transition: 0.2s;
            position: absolute;
            right: 0px;
            top: 30px;
        }
        a:hover{
            background-color: $anzac;
        }
        .row{
            display: flex;
            .left{
                width: 57%;
                height: 750px;
                position: relative;
                
                .box:hover .big-card {
                    scale: 1.04;
                    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                }
                .box{
                    margin: 0px auto;
                    width: 100%;
                    background-color: rgba(0,0,0,0);
                    position: absolute;
                    top: 0px;
                    left: 50%;
                    transform: translateX(-50%);
                    position: relative;
                    .big-card{
                        width: 100%;
                        height: 750px;
                        background-image: url("../../assets/img/testimonial2-2x.jpg");
                        background-size: cover;
                        border-bottom-right-radius: 100px;
                        position: absolute;
                        top: 0;
                        z-index: -1;
                        transition: 0.5s;
                        .gradient{
                            width: 100%;
                            height: 100%;
                            background: rgb(0,0,0);
                            background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%);
                            border-bottom-right-radius: 100px;
                        }
                    }
                    .content-box{
                        padding: 0px 100px;
                        h1{
                            color: white;
                            padding-top: 100px;
                        }
                        hr{
                            margin: 50px 0px;
                            opacity: 0.5;
                        }
                        p{
                            margin: 30px 0px;
                            color: white;
                            font-size: 18px;
                        }
                        p:first-of-type{
                            font-size: 22px;
                        }
                    }
                }
            }
            .right{
                width: 43%;
                padding-left: 75px;
                .msg{
                    position: relative;
                    background-color: $tan;
                    text-align: center;
                    padding: 50px 40px;
                    h2{
                        font-family: $serif;
                        font-weight: 200;
                    }
                    p{
                        color: $suvaGray;
                        font-size: 18px;
                        line-height: 30px;
                        margin-top: 10px;
                    }
                }
                .msg::after{
                    content: "";
                    display: block;
                    background-color: $tan;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    bottom: -10px;
                    transform: rotate(45deg);
                }
                .source{
                    color: $codGray;
                    margin: 25px 0px;
                    .yellow{
                        vertical-align: baseline;
                        color: $black;
                        cursor: pointer;
                        transition: 0.2s;
                    }
                    .yellow:hover{
                        color: $saffron;
                    }
                }
            }
        }
    }
    .source{
        color: white;
        margin-bottom: 100px;
        img{
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
            margin-left: 10px;
        }
        .green{
            color: $keppel;
            vertical-align: baseline;
        }
    }
    .show-right{
            animation: show_right 2s 1;
        }
        @keyframes show_right {
            0% {
                transform: translateX(50px);
                opacity: 0;
            }
            50% {
                transform: translateX(0px);
                opacity: 1;
            }
        }
</style>