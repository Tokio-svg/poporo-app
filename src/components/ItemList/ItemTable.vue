<template>
  <div class="itemList__table--container">
    <div class="itemList__search--container">
      <input type="text" class="itemList__search--input" v-model="inputWord" @keydown.enter="search">
      <button class="itemList__search--button search-button" @click="search">検索</button>
      <button
        class="itemList__search--button clear-button"
        @click="keywordClear"
        :class="{'available': keyword}">
        クリア</button>
    </div>
    <table ref="main_table" class="itemList__table">
      <tr>
        <template v-for="header in displayHeader" :key="header">
          <th @click="sortData(header)">
            {{ header }}
            <span v-show="sortStat.header === header && sortStat.order === 'asc'">▲</span>
            <span v-show="sortStat.header === header && sortStat.order === 'desc'">▼</span>
          </th>
        </template>
      </tr>
      <template v-for="(item, index) in displayData" :key="item.id">
        <tr>
          <td>{{item.name}}</td>
          <template v-if="item.hasOwnProperty('slot')">
            <td>{{item.slot}}</td>
            <td>{{item.slotName}}</td>
            <td>{{item.slotPriority}}</td>
          </template>
          <!-- 値段は連続する同じ値でまとめる -->
          <template v-if="index > 0">
            <td
              class="itemList__table--number"
              v-if="item.buyingPrice !== displayData[index-1].buyingPrice && buyingPriceGroupe[index] !== 0"
              :rowspan="buyingPriceGroupe[index]">
              {{item.buyingPrice}}
            </td>
          </template>
          <template v-else>
            <td class="itemList__table--number" :rowspan="buyingPriceGroupe[index]">
              {{item.buyingPrice}}
            </td>
          </template>
          <template v-if="index > 0">
            <td
              class="itemList__table--number"
              v-if="item.sellingPrice !== displayData[index-1].sellingPrice && sellingPriceGroupe[index] !== 0"
              :rowspan="sellingPriceGroupe[index]">
              {{item.sellingPrice}}
            </td>
          </template>
          <template v-else>
            <td class="itemList__table--number" :rowspan="sellingPriceGroupe[index]">
              {{item.sellingPrice}}
            </td>
          </template>
          <td>{{displayParam(item.drop)}}</td>
          <td>{{displayParam(item.shop)}}</td>
          <td>{{displayParam(item.change)}}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const SORT_OBJ = {
  '名前':   'id',
  '買値':   'buyingPrice',
  '売値':   'sellingPrice',
  '床':     'drop',
  '店':     'shop',
  '変化':   'change',
  '印数':   'slot',
  '印':     'slotName',
  '優先順': 'slotPriority'
}

const props = defineProps({
  tableData: Object
})

// watch用にcomputedでpropsの値を返す
const tableData = computed(() => {
  return props.tableData
})

const main_table = ref()

const displayHeader = ref(props.tableData.header)
const displayData = ref(props.tableData.data)
const sortStat = ref({
  header: null,
  order: null
})
const inputWord = ref("")
const keyword = ref("")

const buyingPriceGroupe = computed(() => {
  const data = displayData.value
  let count = 0
  const groupe = []
  data.forEach((item, index) => {
    count++
    if (index === data.length-1) {
      groupe.push(count)
      for(let i=1; i<count; i++) {
        groupe.push(0)
      }
    }
    else {
      if (item.buyingPrice !== data[index+1].buyingPrice) {
        groupe.push(count)
        for(let i=1; i<count; i++) {
          groupe.push(0)
        }
        count = 0
      }
    }
  })
  return groupe
})

const sellingPriceGroupe = computed(() => {
  const data = displayData.value
  let count = 0
  const groupe = []
  data.forEach((item, index) => {
    count++
    if (index === data.length-1) {
      groupe.push(count)
      for(let i=1; i<count; i++) {
        groupe.push(0)
      }
    }
    else {
      if (item.sellingPrice !== data[index+1].sellingPrice) {
        groupe.push(count)
        for(let i=1; i<count; i++) {
          groupe.push(0)
        }
        count = 0
      }
    }
  })
  return groupe
})

const displayParam = (param) => {
  let returnParam = param
  if (param === true) returnParam = '●'
  if (param === false) returnParam = ''
  return returnParam
}

const sortData = (str) => {
  let newData = null
  if (sortStat.value.header !== str || sortStat.value.order !== 'asc') {
    // 昇順
    newData = displayData.value.sort((a,b)=> {
      if(a[SORT_OBJ[str]] < b[SORT_OBJ[str]]) return -1;
      if(a[SORT_OBJ[str]] > b[SORT_OBJ[str]]) return 1;
      return 0;
    })
    sortStat.value.order = 'asc'
  } else if (sortStat.value.header === str && sortStat.value.order !== 'desc') {
    // 降順
    newData = displayData.value.sort((a,b)=> {
      if(a[SORT_OBJ[str]] > b[SORT_OBJ[str]]) return -1;
      if(a[SORT_OBJ[str]] < b[SORT_OBJ[str]]) return 1;
      return 0;
    })
    sortStat.value.order = 'desc'
  }
  sortStat.value.header = str
  displayData.value = newData
  main_table.value.scrollTop = 0
}

const search = () => {
  keyword.value = inputWord.value
  if (!inputWord.value) {
    keywordClear()
  } else {
    displayData.value = props.tableData.data.filter(item => item.name.indexOf(keyword.value) !== -1)
  }
}

const keywordClear = () => {
  keyword.value = ''
  inputWord.value = ''
  displayData.value = props.tableData.data
  sortData('名前')
  sortStat.value.header = null
  sortStat.value.order = null
}

watch(tableData, (nVal) => {
  displayData.value = nVal.data
  displayHeader.value = nVal.header
  sortData('名前')
  sortStat.value.header = null
  sortStat.value.order = null
  main_table.value.scrollTop = 0
})
</script>

<style scoped>
@import '@/styles/itemList_table.css';
</style>