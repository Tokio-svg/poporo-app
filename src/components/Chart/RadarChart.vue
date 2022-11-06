<template>
  <Radar
    :chart-data="chartData"
    :chart-options="chartOptions"
    style="width: 200px; height: 200px;"
  />
</template>

<script>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  // Plugin
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
)

export default {
  components: { Radar },
  props: {
    chartData: {
        type: Object,
        required: true
      },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  }
}
</script>