<template>
  <div>
    <p>モンスター詳細</p>
    <div v-for="param in MonsterData" :key="param">
      {{ param }}
    </div>
    <p>{{$route.path}}</p>
  </div>
</template>

<script>
import MonsterData from '@/const/monsterData'

export default {
  computed: {
    MonsterData() {
      const id = parseInt(this.$route.params.id)
      const targetData = MonsterData.monsterData.find((v) => v.id === id)
      return targetData
    }
  }
}
</script>