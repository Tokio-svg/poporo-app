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
            </div>
            <div>
              <div class="calc__button mode-switch">
                <div class="mode-switch__damage" @click="switchMode(true)">Damage</div>
                <div class="mode-switch__heal" @click="switchMode(false)">Heal</div>
              </div>
            </div>
          </div>
          <div class="calc__button--flex">
            <div class="calc__button number" @click="inputNum(0)">0</div>
            <div class="calc__button enter" @click="enterNum">Enter</div>
          </div>
          <div class="calc__button reset" @click="allReset">
            状態をリセット
          </div>
        </div>
      </div>
      <!-- チャート -->
      <div class="cals__chart--container">{{remainHp}}</div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },

  methods: {
    inputNum(num) {
      let number = String(this.displayNum)
      if (number.length >= 9) return
      number += num
      this.displayNum = parseInt(number)
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

    switchMode(bool) {
      this.mode = bool
    }
  }
}
</script>

<style scoped>
@import '@/styles/damage_calc_modal.css';
</style>