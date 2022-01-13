<template>
    <div class="container">
        <div>
            <h1>Recent Articles</h1>
            <h3>READ THE LATEST ENTRIES</h3>
            <a href="#" class="button">All Articles</a>
        </div>
        <div class="row">
            <div class="left">
                <div class="box-image">
                    <a href="#">
                        <img src="../../assets/img/20-Tips-800x471.jpg" alt="Article image">
                        <div class="gradient"></div>
                    </a>
                </div>
                <h2>20 Creativity Tips</h2>
                <h6>By <a href="#" class="link">wikmery</a> |octobre 24th, 2019|Categories: <a href="#" class="link">Event</a>, <a href="#" class="link">Tips & Tricks</a></h6>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet. </p>
            </div>
            <div class="right">
                <div class="article-box">
                    <div class="small-img">
                        <a href="#">
                            <img src="../../assets/img/thumb-13-2x-320x202.jpg" alt="Article image">
                        </a>
                    </div>
                    <h2 class="link">What’s On Your Booklist?</h2>
                    <h6>octobre 24th, 2019 |<a href="#" class="link"> 0 Comments</a></h6>
                </div>
                <div class="article-box">
                    <div class="small-img">
                        <a href="#">
                            <img src="../../assets/img/thumb-08-2x-320x202.jpg" alt="Article image">
                        </a>
                    </div>
                    <h2 class="link">Istanbul Travel Guide</h2>
                    <h6>octobre 24th, 2019 |<a href="#" class="link"> 0 Comments</a></h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Articles',
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";

    .container{
        position: relative;
        padding: 100px 15%;
        background-color: $tan;
        h1{
            font-family: $serif;
            font-size: 40px;
            font-weight: 200;
        }
        h3{
            margin: 10px 0px 30px;
            font-size: 18px;
            letter-spacing: 1.5px;
            font-weight: 200;
            color: $keppel;
        }
        .button{
            text-decoration: none;
            color: white;
            padding: 10px 75px;
            background-color: $saffron;
            border-radius: 5px;
            transition: 0.2s;
            position: absolute;
            right: 15%;
            top: 130px;
        }
        .button:hover{
            background-color: $anzac;
        }
        .row{
            display: flex;
            column-gap: 50px;
            .left{
                width: 68%;
                height: 700px;
                position: relative;
                background-color: $white;
                padding: 50px;
                .box-image{
                    width: 100%;
                    height: 75%;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .gradient{
                        width: 100%;
                        height: 100%;
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
                }
                h2{
                    font-size: 25px;
                    font-weight: 200;
                    margin: 40px 0px 0px 10px;
                }
                h6{
                    margin: 15px 10px;
                    font-size: 13px;
                    font-weight: 200;
                    color: $tundora;
                }
                p{
                    margin: 0px 10px;
                    font-size: 18px;
                    font-weight: 200;
                    color: $tundora;
                }
            }
            .right{
                background-color: $white;
                width: 32%;
                height: 700px;
                padding: 40px;
                .article-box{
                    width: 100%;
                    height: 50%;
                    .small-img{
                        width: 100%;
                        height: 200px;
                        overflow: hidden;
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: 1s;
                        }
                        img:hover{
                            scale: 1.1;
                        }
                    }
                    h2{
                        font-weight: 200;
                        margin: 15px 0px 10px;
                    }
                    h6{
                        color: $tundora;
                        font-weight: 200;
                        font-size: 13px;
                    }
                }
            }
        }
        .link{
            text-decoration: none;
            color: black;
            transition: 0.3s;
        }
        .link:hover{
            color: $saffron;
        }
    }
</style>