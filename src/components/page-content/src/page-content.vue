<template>
  <div class="page-content">
    <dx-table :listData="userList" v-bind="contentTableConfig">
      <!-- 头部插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">添加用户</el-button>
      </template>

      <!-- 表格中的插槽 -->
      <template #status="scope">
        <el-button size="mini">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>

      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>

      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <template #handler>
        <div class="handle-btns">
          <el-button size="mini" type="text" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button size="mini" type="text" icon="el-icon-delete"
            >删除</el-button
          >
        </div>
      </template>
    </dx-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import DxTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    DxTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    return { userList }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
