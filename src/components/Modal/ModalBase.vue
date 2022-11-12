<template>
  <div @click.self="modalOff" class="modal__container">
    <div class="modal__main">
      <div class="modal__header">
        <button @click="modalOff">だいあろぐを閉じます</button>
      </div>
      <div class="modal__body">
        <component
          :is="component"
          :param="param"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    modalData() {
      return this.$store.state.modalData
    },

    component() {
      return this.modalData.component
    },

    param() {
      return this.modalData.param
    }
  },

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