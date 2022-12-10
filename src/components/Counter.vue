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

<script setup>
import { ref } from 'vue'

const count = ref(0)

const addCount = () => {
  count.value++
  if (count.value > 99) count.value = 99
}

const resetCount = () => {
  count.value = 0
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>