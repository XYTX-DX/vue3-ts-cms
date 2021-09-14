<template>
  <div class="page-content">
    <dx-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
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
import { computed, defineComponent, ref, watch } from 'vue'
import DxTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    DxTable
  },
  setup(props) {
    const store = useStore()

    // 双向绑定页面信息
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    // 监听pageInfo,发生改变时重新发送请求
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    // 初始化页面时发送一次请求,获取到后端数据
    getPageData()

    // 从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    return { dataList, getPageData, dataCount, pageInfo }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
