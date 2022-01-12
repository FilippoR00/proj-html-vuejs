<template>
	<div class="bg">
		<div class="gradient">
            <div class="container">
                <h1 class="title">Damon Vaughn</h1>
                <h1 class="subtitle">Best-selling author and the most influential public intellectual in the western world right now.</h1>
                <h2>- The New York Times</h2>
            </div>
            <div class="box">
                <div class="left">
                    <img src="../../assets/img/book-widget.png" alt="Book latest sale">
                    <a href="#" class="button"><i class="fab fa-amazon"></i> Buy On Amazon</a>
                </div>
                <div class="right">
                    <h2>Latest Book Release</h2>
                    <h3>D. VAUGHN AUTOBIOGRAPHY</h3>
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
                    <a href="#" class="button"><i class="fab fa-apple"></i> Buy On App Store</a>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	name: "Jumbo",
    mounted() {
        const left = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(entry => {
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('show-left');
                }
            });
        });
        left.observe(document.querySelector('.container'));
        const bottom = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(entry => {
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('show-bottom');
                }
            });
        });
        bottom.observe(document.querySelector('.box'));
    },
};
</script>

<style lang="scss" scoped>
@import "../../style/Global.scss";

.bg {
	height: 100vh;
	background-image: url("../../assets/img/hero-07-2x.jpg");
	background-size: cover;
	.gradient {
		position: absolute;
		height: 100vh;
		width: 100%;
		background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%); 
        .container{
            position: relative;
            width: 800px;
            height: 300px;
            color: white;
            top: 34%;
            left: 12%;
            .title{
                font-family: $yellow;
                font-size: 90px;
                font-weight: 200;
                color: $saffron;
            }
            .subtitle{
                font-family: $serif;
                font-size: 47px;
                margin: 5px 0px 40px 0px;
            }
            h2{
                color: $suvaGray;
                font-weight: 200;
            }
        }
        .show-left{
            animation: show_left 2s 1;
        }
        @keyframes show_left {
            0% {
                transform: translateX(-50px);
                opacity: 0;
            }
            50% {
                transform: translateX(0px);
                opacity: 1;
            }
        }
        .box{
            width: 700px;
            height: 400px;
            background-color: $white;
            position: absolute;
            right: 0px;
            bottom: 0px;
            display: flex;
            .left{
                width: 50%;
                padding: 50px 0px 0px 50px;
                img{
                    margin-bottom: 20px;
                }
            }
            .right{
                width: 50%;
                padding: 80px 0px;
                h2{
                    font-family: $serif;
                    font-weight: 200;
                    font-size: 25px;
                }
                h3{
                    color: $saffron;
                    font-size: 13px;
                    font-weight: 200;
                    margin: 15px 0px;
                }
                p{
                    width: 88%;
                    margin-bottom: 86px;
                    line-height: 25px;
                    color: $suvaGray;
                }
            }
            .button{
                font-size: 13px;
                padding: 12px 85px;
                background-color: #f5fcfa;
                border: 1px solid $keppel;
                color: black;
                text-decoration: none;
                border-radius: 5px;
                transition: 0.2s;
            }
            .button:hover{
                background-color: #49a987;
                color: $white;
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
	}
}
</style>