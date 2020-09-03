<template>
    <div class="menu-wrapper">
        <div class="PullDown">
            <label for="label">ジャンル別</label>
             <input type="checkbox" id="label"/>
             <div class="PullDown_show">
                <nuxt-link
                :to="to.to"
                class="select_Show"
                v-for="to in menu"
                :key="to.name">{{to.name}}</nuxt-link>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menu: [
                {to: "", name: "競技プログラミング"},
                {to: "", name: "フロントエンド"},
                {to: "", name: "バックエンド"},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.PullDpwm{
    margin: 20px 0;
    padding: 0;
}

.PullDown label{
    padding: 15px;
    border: solid 2px #000000;
    cursor: pointer;
}

.PullDown label:hover{
    background: #FFFFFF;
}

.PullDown input{
    display: none;
}

.PullDown .PullDown_show{
    height: 0;
    padding: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.8s;
}

.PullDown input:checked ~ .PullDown_show{
    padding: 10px 0;
    height: auto;
    opacity: 1;
}

.PullDown_show{
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