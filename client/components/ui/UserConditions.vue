<template>
    <div class="wrapper">
        <div class="title">
            利用状況
        </div>

        <div class="headline">
            <span class="headline-title">現在借りている書籍 :</span>
            <span 
                v-for="book in rentBooks" 
                :key="book.id"
                class="book-name"
                >

                {{ book }}
            </span>
        </div>

        <div class="headline">
            <span class="headline-title">予約している書籍 :</span>
            <span 
                v-for="book in reserveBooks" 
                :key="book.id"
                class="book-name"
                >

                {{ book }}
            </span>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            rentBooks: ["Vue.js入門","Nuxt.js入門"],
            reserveBooks: ["HTML入門","リーダブルコード"]
        }
    }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 300px;
    border: 2px solid #323233;
    border-radius: 5px;
    margin: 10px 0px;
    color:#323233;
}
.title{
    font-size: calc(15px + 0.5vw);
    width: 80%;
    margin: 20px auto;
    font-weight: bolder;
}
.headline{
    width: 80%;
    margin: 20px auto;
}
.book-name{
    width: 100px;
    margin: 0px 10px;
}
.headline-title{
    display: inline-block;
    width: 25%;
    text-align: right;
}
</style>