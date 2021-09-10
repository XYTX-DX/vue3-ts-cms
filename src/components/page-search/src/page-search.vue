<template>
  <div class="page-search">
    <dx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级查询</h2>
      </template>
      <template #footer>
        <div class="handel-btn">
          <el-button type="primary" icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
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
      requested: true
    }
  },
  components: {
    DxForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      creatTime: ''
    })
    return {
      formData
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
