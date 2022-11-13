<template>
  <div>
    <div class="monsterDetail__title">
      {{ MonsterData.name }}
    </div>

    <div class="monsterDetail__chart--container">
      <radar-chart :chart-param="chartParam" />
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

<script>
import MonsterData from '@/const/monsterData'
import MonsterDataGBA from '@/const/monsterDataGBA'
import PatternData from '@/const/growthPattern'
import RadarChart from '@/components/Chart/RadarChart.vue'
import CalcModal from '@/components/Modal/DamageCalcModal.vue'

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

export default {
  components: {
    RadarChart,
  },

  data() {
    return {
      displayLevel: 1
    }
  },

  mounted() {
    this.displayLevel = this.MonsterData.level
  },

  computed: {
    MonsterData() {
      const id = parseInt(this.$route.params.id)
      const allMonsterDataArray = MonsterData.monsterData.concat(MonsterDataGBA.monsterDataGBA)
      const targetData = allMonsterDataArray.find((v) => v.id === id)
      return targetData
    },

    growthPattern() {
      return PatternData[PATTERN_LIST[this.MonsterData.growth]]
    },

    displayHP() {
      const param = this.MonsterData.hp + this.growthPattern[this.displayLevel][0] - this.growthPattern[this.MonsterData.level][0]
      return param
    },

    displayATK() {
      const param = this.MonsterData.attack + this.growthPattern[this.displayLevel][1] - this.growthPattern[this.MonsterData.level][1]
      return param
    },

    displayDEF() {
      const param = this.MonsterData.defense + this.growthPattern[this.displayLevel][2] - this.growthPattern[this.MonsterData.level][2]
      return param
    },

    chartParam() {
      const param = {
        status: [
          this.displayHP / 150 * 100,
          this.displayATK / 65 * 100,
          this.displayDEF / 58 * 100
        ],
        level: this.displayLevel,
        exp: this.growthPattern[this.displayLevel][3]
      }

      return param
    },

    maxDamage() {
      return Math.round(this.displayATK * 1.4625)
    },

    isMaxLevel() {
      return this.displayLevel === this.MonsterData.maxLevel
    }

  },

  methods: {
    changeLevel(num) {
      let level = this.displayLevel
      level += num
      if (level < 1) level = 1
      if (level > this.MonsterData.maxLevel) level = this.MonsterData.maxLevel
      this.displayLevel = level
    },

    resetLevel() {
      this.displayLevel = this.MonsterData.level
    },

    linkToBack() {
      this.$router.go(-1)
    },

    linkToAnother(id) {
      this.$router.push({ name:'monster_detail', params: { id: id } })
    },

    modalOn() {
      const data = {
        component: CalcModal,
        header: 'ダメージ計算',
        param: {
          name: this.MonsterData.name,
          level: this.displayLevel,
          hp: this.displayHP,
          defense: this.displayDEF
        }
      }
      this.$store.dispatch('setModalData', data)
      this.$store.dispatch('modalOn')
    }

  }
}
</script>

<style scoped>
@import '@/styles/monsterDetail.css';
</style>