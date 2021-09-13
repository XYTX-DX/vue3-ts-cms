<template>
  <div class="table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propitem in propList" :key="propitem.prop">
        <el-table-column v-bind="propitem" align="center"> </el-table-column>
      </template>
    </el-table>
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
