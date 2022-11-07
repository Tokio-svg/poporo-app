<template>
  <div>
    <p>{{ MonsterData.name }}</p>
    <radar-chart :chart-data="dataCollection" :chart-options="options" />

    <button @click="changeLevel(-10)">-10</button>
    <button @click="changeLevel(-1)">-1</button>
    <div>レベル: {{displayLevel}}</div>
    <button @click="changeLevel(1)">+1</button>
    <button @click="changeLevel(10)">+10</button>
    <div>
      <button @click="resetLevel">初期レベルにリセット</button>
    </div>
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
          <td class="monsterList__table--number">{{ displayHP }}</td>
          <td class="monsterList__table--number">{{ displayATK }}</td>
          <td class="monsterList__table--number">{{ displayDEF }}</td>
          <td class="monsterList__table--number">{{ MonsterData.exp }}</td>
          <td class="monsterList__table--number">{{ displayLevel }}</td>
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
import PatternData from '@/const/growthPattern'
import RadarChart from '@/components/Chart/RadarChart.vue'

const patternList = {
  '普通早熟': 'normalPrecocious',
  '攻撃早熟': 'attackPrecocious',
  '防御早熟': 'defensePrecocious',
  '攻撃晩成': 'attackLateGrowth',
  '防御晩成': 'defenseLateGrowth',
  '万能晩成': 'versatileLateGrowth',
  '守備特殊': 'defenseSpecial'
}

export default {
  components: {
    RadarChart,
  },

  data() {
    return {
      dataCollection: {
        labels: [
          'HP',
          '攻撃力',
          '防御力'
        ],
        datasets: [{
          label: 'Lv ' + 1 + ' (経験値: ' + 0 + ')',
          data: [0, 0, 0],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
      options: null,
      displayLevel: 1
    }
  },

  mounted() {
    this.displayLevel = this.MonsterData.level

    // チャート用データ(仮)
    const chartData = {
      labels: [
        'HP',
        '攻撃力',
        '防御力'
      ],
      datasets: [{
        label: 'Lv ' + 1 + ' (経験値: ' + 0 + ')',
        data: [50, 50, 50],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    }

    const options = {
      responsive: true,
      elements: {
          line: {
              borderWidth: 2
          }
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            display: false
          },
          backgroundColor: 'rgb(80, 80, 90)',
          pointLabels: {
            color: 'rgb(200, 200, 200)',
          },
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgb(200, 200, 200)'
          }
        }
      }
    }

    this.dataCollection = chartData
    this.options = options
  },

  computed: {
    MonsterData() {
      const id = parseInt(this.$route.params.id)
      const targetData = MonsterData.monsterData.find((v) => v.id === id)
      return targetData
    },

    growthPattern() {
      return PatternData[patternList[this.MonsterData.growth]]
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
      const param = this.MonsterData.deffense + this.growthPattern[this.displayLevel][2] - this.growthPattern[this.MonsterData.level][2]
      return param
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
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterDetail.css';
</style>