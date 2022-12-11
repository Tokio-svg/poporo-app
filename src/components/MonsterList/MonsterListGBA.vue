<template>
  <MonsterTable :table-data="MonsterTableData" />
</template>

<script setup>
import { computed } from 'vue'
import MonsterTable from '@/components/MonsterList/MonsterListTable.vue'
import MonsterDataGBA from '@/const/monsterDataGBA'

const MonsterTableData = computed(() => {
  return MonsterDataGBA.monsterDataGBA
})
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>