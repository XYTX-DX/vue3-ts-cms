<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="loginType">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-if="loginType === 'account'">
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
    const loginType = ref('account')

    const handelLoginClick = () => {
      if (loginType.value == 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('通过手机号登录')
      }
    }

    return {
      isKeepPassword,
      handelLoginClick,
      accountRef,
      loginType
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
  margin-top: 8px;
}
</style>
