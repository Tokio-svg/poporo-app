<template>
  <div>
    <div class="monsterDetail__title">
      {{ MonsterData.name }}
    </div>

    <div class="monsterDetail__chart--container">
      <RadarChart :chart-param="chartParam" />
    </div>

    <div class="monsterDetail__chart--label">
      Lv{{displayLevel}} (経験値: {{growthPattern[displayLevel][3]}})
    </div>

    <div class="controlPanel">
      <div class="controlPanel__label">レベルコントロールパネル</div>
      <button @click="changeLevel(-10)" class="button__level">-10</button>
      <button @click="changeLevel(-1)" class="button__level">-1</button>
      <div class="displayLevel" :class="{'isMaxLevel': isMaxLevel}">{{displayLevel}}</div>
      <button @click="changeLevel(1)" class="button__level">+1</button>
      <button @click="changeLevel(10)" class="button__level">+10</button>
      <div>
        <button @click="resetLevel" class="button__reset">初期レベルにリセット</button>
      </div>
    </div>

    <table class="monsterDetail__table">
      <tr>
        <th>Lv</th>
        <th>限Lv</th>
        <th>HP</th>
        <th>攻撃</th>
        <th>防御</th>
        <th>回復</th>
        <th>成長</th>
        <th>修正値</th>
      </tr>
      <tr>
        <td class="monsterDetail__table--number">{{ displayLevel }}</td>
        <td class="monsterDetail__table--number">{{ MonsterData.maxLevel }}</td>
        <td class="monsterDetail__table--number">{{ displayHP }}</td>
        <td class="monsterDetail__table--number">{{ displayATK }}</td>
        <td class="monsterDetail__table--number">{{ displayDEF }}</td>
        <td class="monsterDetail__table--number">{{ MonsterData.heal }}</td>
        <td>{{ MonsterData.growth }}</td>
        <td class="monsterDetail__table--number">
          <span :class="{'red': MonsterData.correction < -149}">
            {{ MonsterData.correction }}
          </span>
        </td>
      </tr>
    </table>

    <table class="monsterDetail__table">
      <tr>
        <th>階層</th>
        <th>系1</th>
        <th>系2</th>
        <th>EXP</th>
        <th>ドロップ率</th>
        <th>最大被ダメ</th>
      </tr>
        <tr>
          <td>{{ MonsterData.floor }}F</td>
          <td>{{ MonsterData.type1 }}</td>
          <td>{{ MonsterData.type2 }}</td>
          <td class="monsterDetail__table--number">{{ MonsterData.exp }}</td>
          <td class="monsterDetail__table--number">{{ MonsterData.drop }}%</td>
          <td>
            {{ maxDamage }}
            <span v-if="MonsterData.hasOwnProperty('skillDamage')">
              ({{ Math.round(maxDamage * MonsterData.skillDamage) }})
            </span>
          </td>
        </tr>
    </table>

    <div @click="modalOn" class="monsterDetail__calc">
      ダメージ計算
    </div>

    <div @click="linkToBack" class="monsterDetail__back">
      前の画面に戻る
    </div>

    <template v-if="MonsterData.hasOwnProperty('gbaId')">
      <div @click="linkToAnother(MonsterData.gbaId)" class="monsterDetail__link-another">
        GBA版に移動
      </div>
    </template>

    <template v-if="MonsterData.hasOwnProperty('ps2Id')">
      <div @click="linkToAnother(MonsterData.ps2Id)" class="monsterDetail__link-another">
        PS2版に移動
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store/index'
import MonstersData from '@/const/monsterData'
import MonstersDataGBA from '@/const/monsterDataGBA'
import PatternData from '@/const/growthPattern'
import RadarChart from '@/components/Chart/RadarChart.vue'
import CalcModal from '@/components/Modal/DamageCalcModal.vue'
import { markRaw } from "vue";

const PATTERN_LIST = {
  '普通早熟': 'normalPrecocious',
  '攻撃早熟': 'attackPrecocious',
  '防御早熟': 'defensePrecocious',
  '攻撃晩成': 'attackLateGrowth',
  '防御晩成': 'defenseLateGrowth',
  '万能晩成': 'versatileLateGrowth',
  '守備特殊': 'defenseSpecial',
  '攻撃特殊': 'attackSpecial'
}

const route = useRoute()
const router = useRouter()

const displayLevel = ref(1)

onMounted(() => {
  displayLevel.value = MonsterData.value.level
})

const MonsterData = computed(() => {
  const id = parseInt(route.params.id)
  const allMonsterDataArray = MonstersData.monsterData.concat(MonstersDataGBA.monsterDataGBA)
  const targetData = allMonsterDataArray.find((v) => v.id === id)
  return targetData
})

const growthPattern = computed(() => {
  return PatternData[PATTERN_LIST[MonsterData.value.growth]]
})

const displayHP = computed(() => {
  const param = MonsterData.value.hp + growthPattern.value[displayLevel.value][0]
                - growthPattern.value[MonsterData.value.level][0]
  return param
})

const displayATK = computed(() => {
  const param = MonsterData.value.attack + growthPattern.value[displayLevel.value][1]
                - growthPattern.value[MonsterData.value.level][1]
  return param
})

const displayDEF = computed(() => {
  const param = MonsterData.value.defense + growthPattern.value[displayLevel.value][2]
                - growthPattern.value[MonsterData.value.level][2]
  return param
})

const chartParam = computed(() => {
  const param = {
    status: [
      displayHP.value / 150 * 100,
      displayATK.value / 65 * 100,
      displayDEF.value / 58 * 100
    ],
    level: displayLevel.value,
    exp: growthPattern.value[displayLevel.value][3]
  }
  return param
})

const maxDamage = computed(() => {
  return Math.round(displayATK.value * 1.4625)
})

const isMaxLevel = computed(() => {
  return displayLevel.value === MonsterData.value.maxLevel
})

const changeLevel = (num) => {
  let level = displayLevel.value
  level += num
  if (level < 1) level = 1
  if (level > MonsterData.value.maxLevel) level = MonsterData.value.maxLevel
  displayLevel.value = level
}

const resetLevel = () => {
  displayLevel.value = MonsterData.value.level
}

const linkToBack = () => {
  router.go(-1)
}

const linkToAnother = (id) => {
  router.push({ name:'monster_detail', params: { id: id } })
}

const modalOn = () => {
  const data = {
    component: markRaw(CalcModal),
    header: 'ダメージ計算',
    param: {
      name:    MonsterData.value.name,
      level:   displayLevel.value,
      hp:      displayHP.value,
      defense: displayDEF.value
    }
  }
  store.dispatch('setModalData', data)
  store.dispatch('modalOn')
}
</script>

<style scoped>
@import '@/styles/monsterDetail.css';
</style>