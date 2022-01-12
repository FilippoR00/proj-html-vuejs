<template>
    <div class="container">
        <div class="left">
            <img src="../../assets/img/audible-app-2x-600x628.png" alt="Audible image" class="phone-img">
        </div>
        <div class="right">
            <div class="box2">
                <h2>New Audiobook</h2>
                <h3>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</h3>
                <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
                <a href="#" class="button"><i class="fab fa-audible"></i> Buy this on Audible</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Audiobook',
        mounted() {
            const bottom = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-bottom');
                    }
                });
            });
            bottom.observe(document.querySelector('.phone-img'));
            const right = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-right');
                    }
                });
            });
            right.observe(document.querySelector('.box2'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .container{
        background-image: url("../../assets/img/banner.jpg");
        background-size: cover;
        background-position:center;
        display: flex;
        justify-content: center;
        .left{
            img{
                margin-top: 80px;
                height: 550px;
                position: relative;
                top: 5px;
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
        }
        .right{
            width: 550px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2{
                font-family: $serif;
                color: $white;
                font-size: 40px;
                margin-top: 100px;
            }
            h3{
                color: $saffron;
                margin: 25px 0px;
                font-weight: 200;
            }
            p{
                color: $suvaGray;
                font-size: 18px;
                margin-bottom: 50px;
            }
            a{
                margin: 0px auto;
                text-decoration: none;
                color: white;
                padding: 10px 25px;
                background-color: $keppel;
                border-radius: 5px;
                transition: 0.2s;
            }
            a:hover{
                background-color: $blueLagoon;
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
    }
</style>