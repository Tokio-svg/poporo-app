<template>
  <div class="sidebar__container">

    <div class="sidebar__button">
      <router-link to="/monster_table" active-class="button__active" class="sidebar__button--link">
        モンスター出現テーブル
      </router-link>
    </div>

    <div class="sidebar__button">
      <router-link to="/monster" active-class="button__active" class="sidebar__button--link">
        モンスター一覧
      </router-link>
    </div>

    <div class="sidebar__button">
      <router-link to="/item" active-class="button__active" class="sidebar__button--link">
        アイテムリスト
      </router-link>
    </div>

    <div class="sidebar__blank"></div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>