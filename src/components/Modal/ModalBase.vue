<template>
  <div @click.self="modalOff" class="modal__container">
    <div class="modal__main">
      <div class="modal__header">
        <div class="modal__title">{{header}}</div>
        <div @click="modalOff" class="modal__close">×</div>
      </div>
      <div class="modal__body">
        <component
          :is="component"
          :param="param"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store/index'

const modalData = computed(() => {
  return store.state.modalData
})

const component = computed(() => {
  return modalData.value.component
})

const header = computed(() => {
  return modalData.value.header
})

const param = computed(() => {
  return modalData.value.param
})

const modalOff = () => {
  store.dispatch('modalOff')
}
</script>

<style scoped>
@import '@/styles/modal_base.css';
</style>