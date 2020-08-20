<template>
    <div class="wrapper">
        <div class="title">
            アカウント情報
        </div>

        <div class="headline">
            名前 {{ userName }}
            <div class="mail-address">
                メールアドレス {{ mail }}
            </div>
        </div>
        <div class="change-info">
            <a href="#">
                アカウント情報変更
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "CTRL_tarou",
            mail: "g1234567@tcu.ac.jp"
        }
    }
}
</script>

<style scoped>
.wrapper{
    width:  100%;
    height: 300px;
    border:   2px solid #323233;
    border-radius: 5px;
    margin: 10px 0px;
    color: #323233;
    position: relative;
}
.title{
    font-size: calc(15px + 0.5vw);
    width:  80%;
    margin: 20px auto;
    font-weight: bolder;
}
.headline{
    width:  80%;
    margin: 20px auto;
}
.mail-adress{
    width:  80%;
    margin: 20px auto;
}
.change-info{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>