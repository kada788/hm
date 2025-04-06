<template>
    <div>
     <h2>父组件</h2>
     <p>来自子组件的消息:{{messageFromChild}}</p>
     <ChildComponent @child-message="handleChildMessage" :title="title"/>
    </div>
</template>

<script setup>
// @ 事件  不是js内置事件，自定义事件
// 父子组件通信
import {ref} from 'vue'
import ChildComponent from './components/ChildComponent.vue' // 引入子组件
const title = ref('父组件传递的标题') // 定义props类型
// 自定义事件  child-message 父子组件间的约定  子组件调用child-message 告知父组件
const messageFromChild = ref('') // 定义props类型

const handleChildMessage = (message) =>{
    console.log('来自子组件的消息',message)
    messageFromChild.value = message
}


</script>

<style  scoped>

</style>