<template>
  <div class="calc__container">
    <h1 class="calc__name">{{name}} Lv{{level}}</h1>
    <div class="calc__flex">
      <!-- 入力パネル -->
      <div class="calc__panel--container">
        <div class="calc__panel">
          <div class="calc__display" :class="{'display__heal': !mode}">{{displayNum}}</div>
          <div class="calc__button--flex">
            <div class="calc__button number" @click="inputNum(7)">7</div>
            <div class="calc__button number" @click="inputNum(8)">8</div>
            <div class="calc__button number" @click="inputNum(9)">9</div>
            <div class="calc__button back-space" @click="deleteNum">C</div>
          </div>
          <div class="calc__button--flex">
            <div>
              <div class="calc__button--flex">
                <div class="calc__button number" @click="inputNum(4)">4</div>
                <div class="calc__button number" @click="inputNum(5)">5</div>
                <div class="calc__button number" @click="inputNum(6)">6</div>
              </div>
              <div class="calc__button--flex">
                <div class="calc__button number" @click="inputNum(1)">1</div>
                <div class="calc__button number" @click="inputNum(2)">2</div>
                <div class="calc__button number" @click="inputNum(3)">3</div>
              </div>
              <div class="calc__button--flex">
                <div class="calc__button number" @click="inputNum(0)">0</div>
                <div class="calc__button division" @click="divisionHp(0.5)">1/2</div>
                <div class="calc__button division" @click="divisionHp(0.75)">1/4</div>
              </div>
              <div class="calc__button mode-switch" :class="{'mode-switch__on': !mode}" @click="switchMode">
                <span v-show="mode">回復OFF</span>
                <span v-show="!mode">回復ON</span>
              </div>
            </div>
            <div>
              <div class="calc__button enter" @click="enterNum">Enter</div>
            </div>
          </div>
        </div>
      </div>
      <!-- チャート -->
      <div class="calc__chart--container">
        <div class="calc__chart">
          <BarChart :chart-param="chartParam"/>
        </div>
        <div class="calc__chart--remain">
          残りHP: {{remainHp}}
        </div>
        <div class="calc__button reset" @click="allReset">
          残りHPをリセット
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineProps } from 'vue'
import BarChart from '@/components/Chart/BarChart.vue'

const props = defineProps({
  param: {
    type: Object,
    require: false,
    'default': () => {
      return {
        name: '指定なし',
        level: null,
        hp: 0,
        defense: 0
      }
    }
  }
})

onMounted(() => {
  allReset()
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
})

const remainHp = ref(0)
const displayNum = ref(0)
const mode = ref(true)

const name = computed(() => {
  return props.param.name
})
const level = computed(() => {
  return props.param.level
})
const hp = computed(() => {
  return props.param.hp
})
// const defense = computed(() => {
//   return props.param.defense
// })
const chartParam = computed(() => {
  const param = {
    maxHp: hp.value,
    remainHp: remainHp.value
  }
  return param
})

const inputNum = (num) => {
  let number = displayNum.value
  if (number >= 100000000) return
  number = number * 10 + num
  displayNum.value = number
}
const deleteNum = () => {
  displayNum.value = 0
}
const enterNum = () => {
  if (mode.value) remainHp.value -= displayNum.value
    else {
      remainHp.value += displayNum.value
      if (remainHp.value > props.param.hp) remainHp.value = props.param.hp
    }
  if (remainHp.value < 0) remainHp.value = 0
  displayNum.value = 0
}
const allReset = () => {
  remainHp.value = props.param.hp
}
const switchMode = () => {
  mode.value = !mode.value
}
const onKeyDown = (event) => {
  const key = event.key
  const keyCode = event.keyCode
  if (key === 'Tab') event.preventDefault()
  if (keyCode === 46 || keyCode === 8) deleteNum()
  else if (keyCode === 13) enterNum()
  else if (keyCode === 32) {
    event.preventDefault()
    allReset()
  } else if (!isNaN(key)) inputNum(parseInt(key))
}
const divisionHp = (num) => {
  displayNum.value = parseInt(remainHp.value * num)
}
</script>

<style scoped>
@import '@/styles/damage_calc_modal.css';
</style>