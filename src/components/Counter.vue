<template>
  <div class="counter__container">
    <div class="counter__flex">
      <div class="counter__img"></div>
      <div
        class="counter__number"
        :class="{'counter__yellow': count >=4 && count < 8, 'counter__red': count >= 8}">
        {{count}}</div>
      <div @click="addCount" class="counter__add">+</div>
    </div>
    <div @click="resetCount" class="counter__reset">Reset</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    addCount() {
      this.count++
    },

    resetCount() {
      this.count = 0
    }
  }
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>