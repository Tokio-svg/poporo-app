<template>
  <div>
    <div class="itemList__header">
      <div class="itemList__header--button" @click="changeData('ring')" :class="{ button__active: select === 'ring' }">
        指輪
      </div>
      <div class="itemList__header--button" @click="changeData('weed')" :class="{ button__active: select === 'weed' }">
        草
      </div>
      <div class="itemList__header--button" @click="changeData('scroll')" :class="{ button__active: select === 'scroll' }">
        巻物
      </div>
      <div class="itemList__header--button" @click="changeData('cane')" :class="{ button__active: select === 'cane' }">
        杖
      </div>
      <div class="itemList__header--button" @click="changeData('pot')" :class="{ button__active: select === 'pot' }">
        壺
      </div>
    </div>
    <item-table :table-data="tableData" />
  </div>
</template>

<script>
import ItemTable from '@/components/ItemList/ItemTable.vue'
import ItemData from '@/const/itemData'

export default {
  components: {
    ItemTable
  },

  data() {
    return {
      tableData: ItemData['ring'],
      select: 'ring'
    }
  },

  methods: {
    changeData(str) {
      this.tableData = Object.assign({}, ItemData[str])
      this.select = str
    }
  }
}
</script>

<style scoped>
@import '@/styles/itemList_header.css';
</style>