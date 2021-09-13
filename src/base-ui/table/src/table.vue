<template>
  <div class="dx-table">
    <!-- 头部header -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <!-- 表格 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
        width="50"
        v-if="showSelectColumn"
      ></el-table-column>
      <el-table-column
        type="index"
        align="center"
        width="80"
        label="序号"
        v-if="showIndexColumn"
      ></el-table-column>
      <template v-for="propitem in propList" :key="propitem.prop">
        <el-table-column v-bind="propitem" align="center">
          <template #default="scope">
            <slot :name="propitem.slotName" :row="scope.row">
              {{ scope.row[propitem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 尾部footer -->
    <div class="footer">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      requested: true
    },
    propList: {
      type: Array,
      requested: true
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['selectionChange'],
  setup(prop, { emit }) {
    const handleSelectionChange = (value: any) => {
      // emit('selectionChange', value)
      console.log(value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
