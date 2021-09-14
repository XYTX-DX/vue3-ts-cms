<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
    ></page-content>
    <!-- <div class="content"></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { userPageSearch } from '@/hooks/user-page-search'

export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] =
      userPageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
