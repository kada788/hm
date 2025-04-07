<template>
    <div>
    <p>Mouse X: {{ x }}</p>
    <p>Mouse Y: {{ y }}</p>
    </div>
</template>

<script setup>
import { useMouse } from '../hooks/useMouse' // 引入自定义hook
const {x,y} = useMouse() // 解构出x,y
</script>

<style  scoped>

</style>