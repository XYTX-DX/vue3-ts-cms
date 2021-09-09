<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="clickFold"
    ></i>
    <div class="content">
      <dx-breadcrumb></dx-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'
import DxBreadcrumb from '@/base-ui/breadcrumb'
// import { pathMapBreadcrumbs } from '@/utils/map-menus'
// import { useStore } from '@/store'
// import { useRoute } from 'vue-router'
// import { IBreadcrumb } from '@/base-ui/breadcrumb'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    userInfo,
    DxBreadcrumb
  },
  setup(props, { emit }) {
    // 控制图标方向
    const isFold = ref(false)

    // 点击图标后切换图标并发射事件,隐藏菜单
    const clickFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑参数
    // const store = useStore()
    // const userMeuns = store.state.login.userMenus
    // const route = useRoute()
    // const currentPath = route.path
    // const breadcrumbs: IBreadcrumb[] = [{ name: '123' }]
    // pathMapBreadcrumbs(userMeuns, currentPath)

    return {
      isFold,
      clickFold
      // breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
}
</style>
