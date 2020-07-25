<template>
    <div>
        <transition>
            <footer class="footer around">
                <hr />
                <div class="container">
                    <nuxt-link
                    :to="to.to"
                    class="select_menu"
                    v-for="to in menu"
                    :key="to.name"
                    >{{ to.name}}</nuxt-link>
                </div>
                <div class="contaner-center">
                </div>
                <span class="copyright">&copy; 2019 CTRL web creater</span>
            </footer>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { to: "", name: "mail" },
                { to: "", name: "twitter" },
                { to: "", name: "homepage" },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    height: 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 30px 10%;
    @include mq(){
        flex-wrap: nowrap;
    }
}
</style>