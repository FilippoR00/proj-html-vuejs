<template>
    <div class="container">
        <div class="BannerBox">
            <h1>More About Damon Vaughn</h1>
            <h2>Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller « The story of my life. »</h2>
            <a href="#">Meet The Author</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MoreBanner',
        mounted() {
            const bottom = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-bottom');
                    }
                });
            });
            bottom.observe(document.querySelector('.BannerBox'));
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .container{
        .BannerBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
        height: 550px;
        background-color: $white;
        display: flex;
        align-items: center;
        text-align: center;
        h1{
            color: $saffron;
            font-family: $yellow;
            font-size: 95px;
            font-weight: 200;
        }
        h2{
            font-weight: 200;
            font-size: 30px;
            width: 70%;
        }
        a{
            margin-top: 50px;
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
</style>