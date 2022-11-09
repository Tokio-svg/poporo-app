<template>
  <div>
    <table class="monsterList__table">
      <tr>
        <th>名前</th>
        <!-- <th>階層</th> -->
        <th>系1</th>
        <th>系2</th>
        <th>HP</th>
        <th>攻撃</th>
        <th>防御</th>
        <th>EXP</th>
        <th>Lv</th>
        <th>限Lv</th>
        <th>回復</th>
        <th>成長</th>
        <th>ドロ率</th>
        <th>修正値</th>
      </tr>
      <template v-for="monster in tableData" :key="monster.id">
        <tr>
          <td><router-link
                :to="{ name: linkName, params: { id: monster.id }}"
                class="monsterList__table--name">
                {{ monster.name }}</router-link></td>
          <!-- <td>{{ monster.floor }}F</td> -->
          <td>{{ monster.type1 }}</td>
          <td>{{ monster.type2 }}</td>
          <td class="monsterList__table--number">{{ monster.hp }}</td>
          <td class="monsterList__table--number">{{ monster.attack }}</td>
          <td class="monsterList__table--number">{{ monster.deffense }}</td>
          <td class="monsterList__table--number">{{ monster.exp }}</td>
          <td class="monsterList__table--number">{{ monster.level }}</td>
          <td class="monsterList__table--number">{{ monster.maxLevel }}</td>
          <td class="monsterList__table--number">{{ monster.heal }}</td>
          <td>{{ monster.growth }}</td>
          <td class="monsterList__table--number">{{ monster.drop }}%</td>
          <td class="monsterList__table--number">{{ monster.correction }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableData : Array
  },

  computed: {
    linkName() {
      let name = null
      if (this.$route.path === '/monster') name = 'monster_detail'
        else name = 'monster_detail_gba'
      return name
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>