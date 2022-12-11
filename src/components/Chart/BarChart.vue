<template>
  <Bar
  :chart-data="chartData"
  :chart-options="chartOptions"
  style="width: 240px;"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
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

const props = defineProps({
  chartParam: {
    type: Object,
    required: true
  }
})

const chartOptions = ref({
        responsive: true,
        scales: {
          y: {
            min: 0,
            max: props.chartParam.maxHp,
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
      })

const chartData = computed(() => {
  const data = {
          labels: [
            ''
          ],
          datasets: [{
            label: '',
            data: [props.chartParam.remainHp],
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            barPercentage: 0.4
          }]
        }
  return data
})
</script>