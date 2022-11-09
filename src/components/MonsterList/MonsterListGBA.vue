<template>
  <monster-table :table-data="MonsterData" />
</template>

<script>
import MonsterTable from '@/components/MonsterList/MonsterListTable.vue'
import MonsterDataGBA from '@/const/monsterDataGBA'

export default {
  components: {
    MonsterTable
  },

  computed: {
    MonsterData() {
      return MonsterDataGBA.monsterDataGBA
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>