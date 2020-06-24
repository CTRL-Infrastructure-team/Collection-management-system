<template>
    <div>
        <transition>
            <footer class="footer around" v-if="$store.stote.created">
                <hr />
                <div class="countaner">
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
    
}
</script>

<style lang="scss" scoped>
.contaner{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 30px 10%;
    @include mq(){
        flex-wrap: nowrap;
    }
}
</style>