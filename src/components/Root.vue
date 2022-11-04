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
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>