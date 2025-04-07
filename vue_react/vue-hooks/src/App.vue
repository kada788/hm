<script setup>
import MousePos from './components/MousePos.vue';
import { ref } from 'vue';
const showMouse = ref(true)
const change = () =>{
    showMouse.value = !showMouse.value
}
</script>

<template>
  <div>
    <MousePos v-if="showMouse"/>
    <button @click="change">切换显示</button>
     
  </div>

</template>

<style scoped>

</style>
