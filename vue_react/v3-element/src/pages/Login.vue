<template>
    <el-form 
    style="position: absolute;left:45%"
    ref="formRef"
    :model="form"
    label-width="auto"
    :rules="rules"
    >
     <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" size="small"/>
     </el-form-item>
     <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" size="small" type="password"/>
     </el-form-item>
     <el-button type="primary" @click="onSubmit" :loading="loading">
        登录
     </el-button>
      
     
    </el-form>   
</template>

<script setup>
import {ref} from 'vue'
import {reactive} from 'vue'
import {login} from '../api/index.js'
import { Loading } from 'element-plus/es/components/loading/src/service.mjs'

const formRef = ref(null)
const form = reactive({
  name: '',
  password:''
})
const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } 
  ] 
}
const loading = ref(false);
const onSubmit = async (valid) => {
   
    loading.value = true;
    // 账号，密码数据库是否匹配
    // 发送给前端一个凭证 token
    // 以后的请求 都需要携带这个凭证
    // 服务器解析凭证 得到用户对象

    if (valid) {
      await login(form)
      .then(res=>{
        console.log(res)
      })
    }
     
}
</script>

<style  scoped>

</style>