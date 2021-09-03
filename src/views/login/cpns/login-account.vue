<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      formRef.value?.validate((v) => {
        if (v) {
          console.log('真正开始登录')
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
