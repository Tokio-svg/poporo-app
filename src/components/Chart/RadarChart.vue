<template>
  <Radar
    :chart-data="chartData"
    :chart-options="chartOptions"
    style="width: 200px; height: 200px;"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
)

const props = defineProps({
  chartParam: {
    type: Object,
    required: true
  }
})

const chartOptions = ref({
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
      display: false
    }
  }
})

const chartData = computed(() => {
  const data = {
    labels: [
      'HP',
      '攻撃力',
      '防御力'
    ],
    datasets: [{
      label: '',
      data: props.chartParam.status,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  }
  return data
})
</script>