<template>
    <div>

    </div>
</template>

<script setup>
import { defineExpose } from 'vue'; // 暴露属性或方法
defineExpose({
    childName: "这是子组件的属性",
    someMethod() {
        console.log("这是子组件的方法");

    }
})
</script>

<style  scoped>

</style>