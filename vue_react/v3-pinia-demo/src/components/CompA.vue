<template>
    <div>
     <h2>CompA</h2>
     <p>count: {{ counterStore.count }}</p>
     <button @click="counterStore.increment">Add</button>
   
    </div>
</template>

<script setup>
// 引入中央模块
import  {useCounterStore} from '../store/counter'
import  {toRefs} from 'vue'   
const counterStore = useCounterStore();

</script>

<style  scoped>

</style>