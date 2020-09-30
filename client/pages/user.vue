<template>
    <div class="container">
        <PageHeadline />
        <UserConditions />
        <UsageHistory />
        <UserInfo />
    </div>
</template>

<script>
import PageHeadline from "../components/ui/PageHeadline.vue";
import UserConditions from "../components/ui/UserConditions.vue";
import UsageHistory from "../components/ui/UsageHistory.vue";
import UserInfo from "../components/ui/UserInfo.vue";


export default {
    components:{
        PageHeadline,
        UserConditions,
        UsageHistory,
        UserInfo
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