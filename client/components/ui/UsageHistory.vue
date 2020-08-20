<template>
    <div class="wrapper">
        <div class="title">
            利用履歴
        </div>

        <div class="headline">
            今までに借りた書籍 {{ bookNum }}冊
            <div
                v-for="book in returnedBooks"
                :key="book.id"
                class="book-name"
                >
                <span class="book-title">
                    {{ book.title }}
                </span>
                <span class="book-date">
                    {{ book.rentDate }}
                    {{ book.returnDate }}
                </span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            returnedBooks: [
                { title: "vue", rentDate: "2020/13/01", returnDate: "2020/13/02"},
                { title: "biiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiir", rentDate: "2020/13/03", returnDate: "2020/13/04"}
            ],
            bookNum: 510
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
.book-title{
    display: inline-block;
    width: 50%;
}
.book-date{
    display: inline-block;
    width: 30%;
    text-align: right;
}
</style>