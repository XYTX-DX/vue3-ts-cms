<template>
  <div class="page-search">
    <dx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级查询</h2>
      </template>
      <template #footer>
        <div class="handel-btn">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handelQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </dx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DxForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    DxForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.点击重置事件
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 3.点击搜索事件
    const handelQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handelQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.handel-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
