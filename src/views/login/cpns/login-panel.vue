<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> 手机登录</span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="btn" @click="handelLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handelLoginClick = () => {
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      handelLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 380px;
}
.title {
  text-align: center;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.btn {
  width: 100%;
}
</style>
