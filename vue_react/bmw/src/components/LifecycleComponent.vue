<template>
    <div style="background-color: aqua;">
      <p>Lifecycle Component - Count: {{count}}</p>
    </div>
</template>

<script setup>
import { defineProps,
    onMounted,
    onBeforeUnmount,
    onUpdated,
    onBeforeUpdate
} from 'vue';
defineProps ({
    count: {
        type: Number,
        required: true // 必须传入
           }
})
// 组件由生老病死
onMounted(() => {
    // 已经完成了挂载
    console.log('组件挂载中');
})
onBeforeUnmount(() => {
    console.log('组件卸载前'); 
})
onUpdated(() => {
    console.log('组件更新后'); 
})
onBeforeUpdate(() => {
    console.log('组件更新前'); 
})
</script>

<style  scoped>

</style>