<template>
  <Bar
  :chart-data="chartData"
  :chart-options="chartOptions"
  style="width: 240px;"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

export default {
  components: { Bar },
  data(){
    return {
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            min: 0,
            max: this.chartParam.maxHp,
            ticks: {
              display: true
            },
            pointLabels: {
              color: 'rgb(150, 150, 150)',
            },
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },

  props: {
    chartParam: {
        type: Object,
        required: true
      }
  },

  computed: {
    chartData() {
      const data = {
        labels: [
          ''
        ],
        datasets: [{
          label: '',
          data: [this.chartParam.remainHp],
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          barPercentage: 0.4
        }]
      }
      return data
    }
  }
}
</script>