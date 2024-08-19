<template>
    <div class="content-title-box">右边内容</div>
    <div class="content-container-box">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "right-view"
    }
</script>

<style scoped>
    .content-title-box {
        line-height: 46px;
        padding: 10px;
        border-bottom: solid 1px #e6e6e6;
    }

    .content-container-box {
        padding: 10px;
    }
</style>