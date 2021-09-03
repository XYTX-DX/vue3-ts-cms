<template>
  <div class="login-account">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="phone.tel"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      tel: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.code {
  display: flex;
}
.btn {
  margin-left: 8px;
}
</style>
