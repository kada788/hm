<template>
    <div>
      {{rate}}
    </div>
</template>

<script setup>
import { defineProps ,computed,ref} from 'vue';
let  count = ref(0)
// 子组件和父组件不一定是一直绑定的，哪里要用往哪搬
// 定义props 业务 消费数据， 不是自身的数据， 而和父组件绑定
// 告诉外界，我需要一个什么类型的数据zz
// 参数数据，外界传入的，不是自有的

let pros = defineProps({
    value: Number 
})
// 计算属性 
let rate = computed(()=>"⭐⭐⭐⭐⭐❌❌❌❌❌".slice(5-pros.value,10-pros.value))
</script>

<style  scoped>

</style>