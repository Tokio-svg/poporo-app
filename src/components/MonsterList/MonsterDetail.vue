<template>
  <div>
    <p>{{ MonsterData.name }}</p>
    <table class="monsterList__table">
      <tr>
        <th>階層</th>
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
        <tr>
          <td>{{ MonsterData.floor }}F</td>
          <td>{{ MonsterData.type1 }}</td>
          <td>{{ MonsterData.type2 }}</td>
          <td class="monsterList__table--number">{{ MonsterData.hp }}</td>
          <td class="monsterList__table--number">{{ MonsterData.attack }}</td>
          <td class="monsterList__table--number">{{ MonsterData.deffense }}</td>
          <td class="monsterList__table--number">{{ MonsterData.exp }}</td>
          <td class="monsterList__table--number">{{ MonsterData.level }}</td>
          <td class="monsterList__table--number">{{ MonsterData.maxLevel }}</td>
          <td class="monsterList__table--number">{{ MonsterData.heal }}</td>
          <td>{{ MonsterData.growth }}</td>
          <td class="monsterList__table--number">{{ MonsterData.drop }}%</td>
          <td class="monsterList__table--number">{{ MonsterData.correction }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import MonsterData from '@/const/monsterData'

export default {
  computed: {
    MonsterData() {
      const id = parseInt(this.$route.params.id)
      const targetData = MonsterData.monsterData.find((v) => v.id === id)
      return targetData
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterDetail.css';
</style>