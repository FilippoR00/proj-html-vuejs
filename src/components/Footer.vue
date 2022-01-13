<template>
	<div class="bg">
        <div class="row">
            <div class="logo">
                <img src="../assets/author-logo-round.png" alt="">
            </div>
            <div class="about">
                <h3>ABOUT ME</h3>
                <p>Vivamus suscipit <strong>tortor eget felis porttitor</strong> volutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
            <div class="links">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li v-for="(link, index) in dataShared.links" :key="index"><a :href="link.link">{{link.text}}</a></li>
                </ul>
            </div>
            <div class="contact">
                <h3>CONTACT INFO</h3>
                <p>63 E. Studebaker Street Bolingbrook, IL 60440</p>
                <p>Phone: (800) 000-0000</p>
                <p>Mobile: (800) 000-0000</p>
                <p>Email: <a href="#">info@your-company.com</a></p>
                <div class="social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>© Copyright 2012 - 2022 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights Reserved | Powered by <a href="#">WordPress</a></p>
        </div>
	</div>
</template>

<script>
    import dataShared from "../share/dataShared.js";

	export default {
		name: 'Footer',
        data() {
            return {
                dataShared,
            };
        },
	}
</script>

<style scoped lang="scss">
	@import "../style/Global.scss";

    .bg{
        height: 525px;
        background-image: url("../assets/img/footer-3.jpg");
        background-size: cover;
        color: $white;
        h3{
            font-family: $serif;
            font-weight: 200;
            letter-spacing: 1.5px;
            margin-bottom: 35px;
        }
        .row{
            display: flex;
            column-gap: 100px;
            padding: 120px 250px 50px 75px;
            height: 85%;
            .logo{
                width: 18%;
                height: 100%;
                img{
                    height: 210px;
                    position: relative;
                    top: -30px;
                }
            }
            .about{
                width: 26%;
                height: 100%;
                p{
                    font-size: 17px;
                    line-height: 28px;
                    color: $pumice;
                }
            }
            .links{
                width: 25%;
                height: 100%;
                ul{
                    margin-left: 30px;
                    li{
                        list-style: none;
                        a{
                            color: $pumice;
                            transition: 0.2s;
                            text-decoration: none;
                        }
                        line-height: 30px;
                        cursor: pointer;
                    }
                    li::before{
                        content: '\00276F';
                        position: relative;
                        left: -20px;
                        font-size: 12px;
                        font-weight: 800;
                    }
                    li:hover a{
                        color: $saffron;
                    }
                }
            }
            .contact{
                width: 31%;
                height: 100%;
                padding-left: 20px;
                p{
                    color: $pumice;
                    line-height: 35px;
                    font-size: 15px;
                    a{
                        text-decoration: none;
                        color: $pumice;
                        transition: 0.2s;
                    }
                    a:hover{
                        color: $saffron;
                    }
                }
                .social{
                    a{
                        color: $pumice;
                        text-decoration: none;
                        padding-right: 20px;
                        line-height: 70px;
                    }
                    a:hover{
                        color: $suvaGray;
                    }
                }
            }
        }
        .copyright{
            p{
                text-align: center;
                a{
                    text-decoration: none;
                    color: $pumice;
                    transition: 0.2s;
                }
                a:hover{
                    color: $saffron;
                }
            }
        }
    }
</style>