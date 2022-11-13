<template>
  <div>
    <div class="itemList__header">
      <div class="itemList__header--blank"></div>

      <div class="itemList__header--button" @click="changeData('ring')" :class="{ 'button__active--item': select === 'ring' }">
        <div>
          <img src="@/assets/ring.png">
          <div>指輪</div>
        </div>
      </div>
      <div class="itemList__header--button" @click="changeData('weed')" :class="{ 'button__active--item': select === 'weed' }">
        <div>
          <img src="@/assets/weed.png">
          <div>草</div>
        </div>
      </div>
      <div class="itemList__header--button" @click="changeData('scroll')" :class="{ 'button__active--item': select === 'scroll' }">
        <div>
          <img src="@/assets/roll.png">
          <div>巻物</div>
        </div>
      </div>
      <div class="itemList__header--button" @click="changeData('cane')" :class="{ 'button__active--item': select === 'cane' }">
        <div>
          <img src="@/assets/cain.png">
          <div>杖</div>
        </div>
      </div>
      <div class="itemList__header--button" @click="changeData('pot')" :class="{ 'button__active--item': select === 'pot' }">
        <div>
          <img src="@/assets/pot.png">
          <div>壺</div>
        </div>
      </div>

      <div class="itemList__header--blank"></div>
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