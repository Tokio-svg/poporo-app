<template>
  <div>
    <p>モンスター一覧</p>
    <div v-for="monster in MonsterData" :key="monster">
      <router-link
        :to="{ name: 'monster_detail', params: { id: monster.id }}">
          {{ monster.name }}</router-link>
    </div>
  </div>
</template>

<script>
import MonsterData from '@/const/monsterData'

export default {
  computed: {
    MonsterData() {
      return MonsterData.monsterData
    }
  }
}
</script>