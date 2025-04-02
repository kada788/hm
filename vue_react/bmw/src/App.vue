<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue'
import { ref } from 'vue'
// option 选项式API -> 组合式 Composition API
const showComponent = ref(true)
const  toggltComponent = () => {
 showComponent.value = !showComponent.value
}

const count = ref(0)
const width = ref(100)
const  incrementCount = () => {
  count.value++
  width.value+=99
}
</script>

<template>
  <div>
   <button @click="toggltComponent"> Toggle Component</button>
   <button @click="incrementCount">incrementCount</button>
   <p>Count: {{count}}</p>
   <!-- vue 的内置组件 -->
   <transition name="fade">
   <LifecycleComponent v-show="showComponent" :count="count" />
   </transition>
    <div class="box1" :style="{width:width+'px'}" 
    style="background-color:aqua;height: 100px;transition: width 1s;"></div>
    <button @click="incrementCount">click</button>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
