<template>
    <div>
    About
    <button @click="goHome">回到首页</button>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router' // 导入路由
const router = useRouter() // 路由实例 总管
const goHome = ()=>{
    //js 跳转  BOM  API
    //  Browser Object Model  >DOM
    // 破坏了啥？
    //window.location.href = '/' // 跳转首页    
    router.push('/') // 跳转首页  不刷新页面

}
</script>

<style lang="scss" scoped>

</style>