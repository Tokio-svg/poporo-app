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

    <div class="sidebar__button">
      <div class="sidebar__button--link calc-button" @click="modalOn">
        ダメージ計算
      </div>
    </div>

    <div class="sidebar__blank">
    </div>

  </div>
</template>

<script>
import TestModal from '@/components/Modal/DamageCalcModal'
import { markRaw } from "vue";

export default {
  computed: {
    isActiveDetailGBA() {
      if (this.$route.name === 'monster_detail_gba') return true
        else return false
    }
  },

  methods: {
    modalOn() {
      const data = {
        component: markRaw(TestModal),
        header: 'ダメージ計算',
      }
      this.$store.dispatch('setModalData', data)
      this.$store.dispatch('modalOn')
    }
  }
}
</script>

<style scoped>
@import '@/styles/sidebar.css';
</style>