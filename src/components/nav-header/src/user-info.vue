<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          class="avatar"
        ></el-avatar>
        {{ name }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-error">退出登录</el-dropdown-item>
          <el-dropdown-item icon="el-icon-user-solid"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-s-operation"
            >系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => {
      return store.state.login.userInfo.name
    })
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;

  .avatar {
    margin-right: 8px;
  }
}
</style>
