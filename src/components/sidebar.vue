<template>
  <div class="sidebar__container">
    サイドバーが入ります
    <router-link to="/second">second</router-link>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>