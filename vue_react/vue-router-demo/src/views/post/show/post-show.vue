<template>
    <div>
      PostShow {{ postId }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router' // 引入路由
const route = useRoute() // 调用路由
const postId = route.params.postId // 获取路由参数
</script>

<style  scoped>

</style>