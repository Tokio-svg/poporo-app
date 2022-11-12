<template>
  <div @click.self="modalOff" class="modal__container">
    <div class="modal__main">
      <div class="modal__header">
        <button @click="modalOff">だいあろぐを閉じます</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalOff() {
      this.$store.dispatch('modalOff')
    }
  }
}
</script>

<style scoped>
@import '@/styles/modal_base.css';
</style>