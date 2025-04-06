<template>
    <div>
    Post-Show{{postId}}
    <hr>
    <router-view />
    </div>
</template>

<script setup>

import { useRoute } from 'vue-router';// 当前路由
const route = useRoute(); // 获取路由信息
const postId = route.params.postId; // 获取路由参数

</script>

<style  scoped>

</style>