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
          <bar-chart :chart-param="chartParam"/>
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

<script>
import BarChart from '@/components/Chart/BarChart.vue'

export default {
  components: {
    BarChart
  },

  data() {
    return {
      remainHp: 0,
      displayNum: 0,
      mode: true
    }
  },

  props: {
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
  },

  mounted() {
    this.allReset()
    document.addEventListener('keydown', this.onKeyDown)
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  },

  computed: {
    name() {
      return this.param.name
    },

    level() {
      return this.param.level
    },

    hp() {
      return this.param.hp
    },

    defense() {
      return this.param.defense
    },

    chartParam() {
      const param = {
        maxHp: this.hp,
        remainHp: this.remainHp
      }
      return param
    }
  },

  methods: {
    inputNum(num) {
      let number = this.displayNum
      if (number >= 100000000) return
      number = number * 10 + num
      this.displayNum = number
    },

    deleteNum() {
      this.displayNum = 0
    },

    enterNum() {
      if (this.mode) this.remainHp -= this.displayNum
        else {
          this.remainHp += this.displayNum
          if (this.remainHp > this.param.hp) this.remainHp = this.param.hp
        }
      if (this.remainHp < 0) this.remainHp = 0
      this.displayNum = 0
    },

    allReset() {
      this.remainHp = this.param.hp
    },

    switchMode() {
      this.mode = !this.mode
    },

    onKeyDown(event) {
      const key = event.key
      const keyCode = event.keyCode
      if (keyCode === 46 || keyCode === 8) this.deleteNum()
      else if (keyCode === 13) this.enterNum()
      else if (keyCode === 32) this.allReset()
      else if (!isNaN(key)) this.inputNum(parseInt(key))
    },

    divisionHp(num) {
      this.displayNum = parseInt(this.remainHp * num)
    }
  }
}
</script>

<style scoped>
@import '@/styles/damage_calc_modal.css';
</style>