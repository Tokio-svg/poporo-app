<style>
@import '@/styles/destyle.css';
@import '@/styles/common.css';
</style>

<template>
  <div class="app-root">
    <sidebar/>
    <main class="app-main">
      <router-view/>
    </main>

    <transition name="fade" appear>
      <modal-window v-if="modalIsActive"/>
    </transition>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import ModalWindow from '@/components/Modal/ModalBase.vue'

export default {
  components: {
    Sidebar,
    ModalWindow
  },

  computed: {
    modalIsActive() {
      return this.$store.state.modalIsActive
    }
  }
}
</script>