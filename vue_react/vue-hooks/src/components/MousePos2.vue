<template>
    <div>
    <p>Mouse X: {{ mousePos.x }}</p>
    <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import { 
  // composition api vue3的核心亮点
  ref ,
  reactive,
  onMounted,
  onUnmounted
} from 'vue'
const x = ref(0)
const y = ref(0)
const mousePos = reactive({
    x: 0,
    y: 0
})

const mousePosHandler = (e) => {
        mousePos.x = e.clientX
        mousePos.y = e.clientY
        console.log('我还在。。。')
    }
//如果在组件销毁之前没有取消事件监听，那么事件处理函数仍然会被事件监听器引用。    
onUnmounted(() => {
    window.removeEventListener('mousemove', mousePosHandler)
})
onMounted(() => {
    window.addEventListener('mousemove', mousePosHandler)
})
</script>

<style  scoped>

</style>