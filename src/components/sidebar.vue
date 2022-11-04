<template>
  <div class="sidebar__container">

    <router-link to="/monster_table" active-class="button__active">
      <div class="sidebar__button">
        モンスター出現テーブル
      </div>
    </router-link>

    <router-link to="/monster" active-class="button__active">
      <div class="sidebar__button">
        モンスター一覧
      </div>
    </router-link>

    <router-link to="/item" active-class="button__active">
      <div class="sidebar__button">
        アイテムリスト
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>