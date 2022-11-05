<template>
  <div class="itemList__table--container">
    <table class="itemList__table">
      <tr>
        <template v-for="header in displayHeader" :key="header">
          <th @click="sortData(header)">
            {{ header }}
            <span v-show="sortStat.header === header && sortStat.order === 'asc'">▲</span>
            <span v-show="sortStat.header === header && sortStat.order === 'desc'">▼</span>
          </th>
        </template>
      </tr>
      <template v-for="item in displayData" :key="item.id">
        <tr>
          <!-- オブジェクトは順番が保証されないので要修正 -->
          <template v-for="(param, key) in item" :key="param">
            <template v-if="key!=='id'">
              <td
                :class="{ 'itemList__table--number': key === 'buyingPrice' || key === 'sellingPrice' }">
                {{ displayParam(param) }}</td>
            </template>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayHeader: this.tableData.header,
      displayData: this.tableData.data,
      sortObj: {
        '名前':   'id',
        '買値':   'buyingPrice',
        '売値':   'sellingPrice',
        '床':     'drop',
        '店':     'shop',
        '変化':   'change',
        '印数':   'slot',
        '印':     'slotName',
        '優先順': 'slotPriority'
      },
      sortStat: {
        header: null,
        order: null
      }
    }
  },

  props: {
    tableData: Object
  },

  methods: {
    displayParam(param) {
      let returnParam = param
      if (param===true) returnParam = '●'
      if (param===false) returnParam = ''
      return returnParam
    },

    sortData(str) {
      let obj = Object.assign({}, this.tableData)
      let newData = null
      if (this.sortStat.header !== str || this.sortStat.order !== 'asc') {
        // 昇順
        newData = obj.data.sort((a,b)=> {
          if(a[this.sortObj[str]] < b[this.sortObj[str]]) return -1;
          if(a[this.sortObj[str]] > b[this.sortObj[str]]) return 1;
          return 0;
        })
        this.sortStat.order = 'asc'
      } else if (this.sortStat.header === str && this.sortStat.order !== 'desc') {
        // 降順
        newData = obj.data.sort((a,b)=> {
          if(a[this.sortObj[str]] > b[this.sortObj[str]]) return -1;
          if(a[this.sortObj[str]] < b[this.sortObj[str]]) return 1;
          return 0;
        })
        this.sortStat.order = 'desc'
      }
      this.sortStat.header = str
      this.displayData = newData
    }
  },

  watch: {
    tableData(nVal) {
      this.displayData = nVal.data
      this.displayHeader = nVal.header
      this.sortData('名前')
      this.sortStat.header = null
      this.sortStat.order = null
    }
  }
}
</script>

<style scoped>
@import '@/styles/itemList_table.css';
</style>