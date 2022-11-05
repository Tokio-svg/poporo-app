<template>
  <div class="itemList__table--container">
    <table>
      <tr>
        <template v-for="header in tableData.header" :key="header">
          <th>{{ header }}</th>
        </template>
      </tr>
      <template v-for="item in tableData.data" :key="item.id">
        <tr>
          <template v-for="(param, key) in item" :key="param">
            <td v-if="key!=='id'">{{param}}</td>
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
  }
}
</script>

<style scoped>
@import '@/styles/itemList_table.css';
</style>