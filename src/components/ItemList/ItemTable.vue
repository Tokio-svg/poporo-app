<template>
  <div class="itemList__table--container">
    <!-- オブジェクトは順番が保証されないので要修正 -->
    <table class="itemList__table">
      <tr>
        <template v-for="header in tableData.header" :key="header">
          <th>{{ header }}</th>
        </template>
      </tr>
      <template v-for="item in tableData.data" :key="item.id">
        <tr>
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
  props: {
    tableData: Object
  },

  methods: {
    displayParam(param) {
      let returnParam = param
      if (param===true) returnParam = '●'
      if (param===false) returnParam = ''
      return returnParam
    }
  }
}
</script>

<style scoped>
@import '@/styles/itemList_table.css';
</style>