<template>
    <div class="container">
        <img src="../../assets/img/ebay-logotan-2x-200x66.png" alt="Ebay Logo">
        <img src="../../assets/img/audible-logotan-2x-200x66.png" alt="Audible Logo">
        <img src="../../assets/img/bb-logotan-2x-200x66.png" alt="Barnes&noble Logo">
        <img src="../../assets/img/kindlefire-logotan-2x-200x66.png" alt="Kindle fire Logo">
    </div>
</template>

<script>
    export default {
        name: 'Banner',
    }
</script>

<style lang="scss" scoped>
    @import "../../style/Global.scss";
    .container{
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $tan;
        img{
            margin: 0px 30px;
        }
    }
</style>