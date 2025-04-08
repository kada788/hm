<template>
    <div>
    <p>Mouse X: {{ mousePos.x }}</p>
    <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import  {useMouse}  from '../hooks/useMouse' // 引入自定义hook

const mousePos = useMouse() // 解构出x和y

</script>

<style  scoped>

</style>