<template>
    <div> 
    <h2>{{title}}</h2>
    <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps,
    defineEmits, 
    ref
} from 'vue'
const childMessage = ref('Hello,Parent!')
// em
const emits = defineEmits(['child-message']) // 定义子组件的事件  父组件监听

defineProps({
    title: {
      type:String,
      required:true
    }
})
const sendMessageToParent = ()=>{
    emits('child-message',childMessage.value) // 发送消息给父组件
}


</script>

<style  scoped>

</style>