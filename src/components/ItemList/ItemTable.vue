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

<script>
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

export default {
  data() {
    return {
      displayHeader: this.tableData.header,
      displayData: this.tableData.data,
      sortStat: {
        header: null,
        order: null
      },
      inputWord: "",
      keyword: ""
    }
  },

  props: {
    tableData: Object
  },

  computed: {
    buyingPriceGroupe() {
      const data = this.displayData
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
    },

    sellingPriceGroupe() {
      const data = this.displayData
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
    }
  },

  methods: {
    displayParam(param) {
      let returnParam = param
      if (param===true) returnParam = '●'
      if (param===false) returnParam = ''
      return returnParam
    },

    sortData(str) {
      let newData = null
      if (this.sortStat.header !== str || this.sortStat.order !== 'asc') {
        // 昇順
        newData = this.displayData.sort((a,b)=> {
          if(a[SORT_OBJ[str]] < b[SORT_OBJ[str]]) return -1;
          if(a[SORT_OBJ[str]] > b[SORT_OBJ[str]]) return 1;
          return 0;
        })
        this.sortStat.order = 'asc'
      } else if (this.sortStat.header === str && this.sortStat.order !== 'desc') {
        // 降順
        newData = this.displayData.sort((a,b)=> {
          if(a[SORT_OBJ[str]] > b[SORT_OBJ[str]]) return -1;
          if(a[SORT_OBJ[str]] < b[SORT_OBJ[str]]) return 1;
          return 0;
        })
        this.sortStat.order = 'desc'
      }
      this.sortStat.header = str
      this.displayData = newData
      this.$refs.main_table.scrollTop = 0
    },

    search() {
      this.keyword = this.inputWord
      if (!this.inputWord) {
        this.keywordClear()
      } else {
        const result = this.displayData.filter(item => item.name.indexOf(this.keyword) !== -1)
        this.displayData = result
      }
    },

    keywordClear() {
      this.keyword = ''
      this.inputWord = ''
      this.displayData = this.tableData.data
      this.sortData('名前')
      this.sortStat.header = null
      this.sortStat.order = null
    }
  },

  watch: {
    tableData(nVal) {
      this.displayData = nVal.data
      this.displayHeader = nVal.header
      this.sortData('名前')
      this.sortStat.header = null
      this.sortStat.order = null
      this.$refs.main_table.scrollTop = 0
    }
  }
}
</script>

<style scoped>
@import '@/styles/itemList_table.css';
</style>