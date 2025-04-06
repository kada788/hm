<template>
    <div>
      PostIndex<br>{{sort}}
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const pros = defineProps({
    sort : String, // 定义props类型
})
const {sort} = pros


</script>

<style  scoped>

</style>