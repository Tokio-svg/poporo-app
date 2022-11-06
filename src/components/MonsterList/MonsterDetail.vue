<template>
  <div>
    <p>{{ MonsterData.name }}</p>
    <radar-chart :chart-data="dataCollection" :chart-options="options" />
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
import RadarChart from '@/components/Chart/RadarChart.vue'

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
      options: null
    }
  },

  mounted() {
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
    }
  }
}
</script>

<style scoped>
@import '@/styles/monsterDetail.css';
</style>