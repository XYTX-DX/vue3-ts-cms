<template>
  <div class="user">
    <dx-form v-bind="searchFormConfig"></dx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DxForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    DxForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
