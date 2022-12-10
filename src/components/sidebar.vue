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
      <router-link to="/monster_gba"
        :class="{'button__active' : isActiveDetailGBA}"
        active-class="button__active"
        class="sidebar__button--link">
        特殊モンスター一覧
      </router-link>
    </div>

    <div class="sidebar__button">
      <router-link to="/item" active-class="button__active" class="sidebar__button--link">
        アイテムリスト
      </router-link>
    </div>

    <div class="sidebar__blank">
      <CounterComponent/>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CounterComponent from '@/components/Counter.vue'

const route = useRoute()

const isActiveDetailGBA = computed(() => {
  if (route.name === 'monster_detail_gba') return true
    else return false
})
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>