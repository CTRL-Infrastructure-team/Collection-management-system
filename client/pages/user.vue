<template>
    <div class="container">
        <UserConditions />
    </div>

</template>

<script>
import UserConditions from "../components/ui/UserConditions.vue";

export default {
    components:{
        UserConditions
    }
}
</script>

<style scoped>
.container{
    width: 90%;
    max-width: 1000px;
    min-height: 100vh;
    margin: 50px auto;
}
</style>