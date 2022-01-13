<template>
    <div class="container">
        <div class="gradient trigger2">
            <h1>Subscribe To My Newsletter</h1>
            <h3>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h3>
            <form action="newsletter">
                <input type="text" placeholder="Insert your email...*">
                <a href="#" class="button">Subscribe</a>
            </form>
            <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Newsletter',
        mounted() {
            const fadein2 = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });
            fadein2.observe(document.querySelector('.trigger2'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .container{
        height: 550px;
        background-image: url("../../assets/img/banner-2.jpg");
        background-size: cover;
        position: relative;
        .gradient{
            width: 100%;
            height: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            background: rgb(0,0,0);
            background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%);
            position: absolute;
            top: 0;
            h1{
                font-family: $serif;
                font-size: 40px;
                width: 300px;
                margin: 0px auto;
            }
            h3{
                color: $saffron;
                font-weight: 200;
                margin-top: 20px;
                letter-spacing: 1.5px;
            }
            form{
                input{
                    width: 300px;
                    height: 50px;
                    border-radius: 5px;
                    outline: none;
                    border: none;
                    padding: 0px 20px;
                    margin: 50px 0px;
                }
                .button{
                    padding: 18px 60px;
                    background-color: $keppel;
                    border-radius: 5px;
                    margin-left: 20px;
                    text-decoration: none;
                    color: white;
                    transition: 0.2s;
                    font-size: 18px;
                }
                .button:hover{
                    background-color: $blueLagoon;
                }
            }
            p{
                color: $suvaGray;
                width: 500px;
                font-size: 18px;
                margin: 0 auto;
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