<template>
  <MonsterTable :table-data="MonsterTableData" />
</template>

<script setup>
import { computed } from 'vue'
import MonsterTable from '@/components/MonsterList/MonsterListTable.vue'
import MonsterData from '@/const/monsterData'

const MonsterTableData = computed(() => {
  return MonsterData.monsterData
})
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>