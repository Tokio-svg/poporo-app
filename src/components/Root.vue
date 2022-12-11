<template>
  <div class="app-root">
    <Sidebar/>
    <main class="app-main">
      <router-view/>
    </main>

    <transition name="fade" appear>
      <ModalWindow v-if="modalIsActive"/>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store/index'
import Sidebar from '@/components/sidebar.vue'
import ModalWindow from '@/components/Modal/ModalBase.vue'

const modalIsActive = computed(() => {
  return store.state.modalIsActive
})
</script>

<style>
@import '@/styles/destyle.css';
@import '@/styles/common.css';
</style>