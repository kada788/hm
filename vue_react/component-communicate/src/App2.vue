<script setup>
// composition api
import { 
  ref, // 简单数据类型
  reactive// 复杂数据类型
   } from 'vue'

const counter = ref(0); // 简单数据类型
const increment = () => {
  counter.value++;
}

// 对象数据
const state = reactive({
  name: 'Alice',
  age: 25
})
const updateState = () => {
  state.name = 'Bob';
  state.age = 30;
}
const incrementAge = () => {
  state.age++;
}
</script>

<template>
<div>
  <p>{{counter}}</p>
  <button @click="increment" >increment</button>
  <hr>
  <p>Name: {{state.name}}</p>
  <p>Age: {{state.age}}</p>
  <!-- <button @click="updateState">updateState</button> -->
  <button @click="incrementAge">incrementAge</button>
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
