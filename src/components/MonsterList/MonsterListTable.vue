<template>
  <div>
    <div class="monsterList__search--container">
      <input type="text" class="monsterList__search--input" v-model="inputWord" @keydown.enter="search">
      <button
        class="monsterList__search--button search-button"
        @click="search"
        >検索</button>
      <button
        class="monsterList__search--button clear-button"
        @click="keywordClear"
        :class="{'available': keyword}">
        クリア</button>
    </div>

    <table ref="main_table" class="monsterList__table">
      <tr>
        <template v-for="item in headerSet" :key="item">
          <th @click="sortData(item.sortStr)">
            {{ item.headerStr }}
            <span v-show="sortStat.header === item.sortStr && sortStat.order === 'asc'">▲</span>
            <span v-show="sortStat.header === item.sortStr && sortStat.order === 'desc'">▼</span>
          </th>
        </template>
      </tr>
      <template v-for="monster in displayData" :key="monster.id">
        <tr v-show="isVisible(monster.name)">
          <td @click.self="linkToDetail(monster.id)" class="monsterList__table--name">
            {{ monster.name }}
            <img src="@/assets/calc.svg" alt="ダメージ計算" class="monsterList__table--calc" @click="modalOn(monster)">
          </td>
          <!-- <td>{{ monster.floor }}F</td> -->
          <td>{{ monster.type1 }}</td>
          <td>{{ monster.type2 }}</td>
          <td class="monsterList__table--number">{{ monster.hp }}</td>
          <td class="monsterList__table--number">{{ monster.attack }}</td>
          <td class="monsterList__table--number">{{ monster.defense }}</td>
          <td class="monsterList__table--number">{{ monster.exp }}</td>
          <td class="monsterList__table--number">{{ monster.level }}</td>
          <td class="monsterList__table--number">{{ monster.maxLevel }}</td>
          <td class="monsterList__table--number">{{ monster.heal }}</td>
          <td>{{ monster.growth }}</td>
          <td class="monsterList__table--number">{{ monster.drop }}%</td>
          <td class="monsterList__table--number">
            <span :class="{'red': monster.correction < -149}">
              {{ monster.correction }}
            </span>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import store from '@/store/index'
import CalcModal from '@/components/Modal/DamageCalcModal.vue'
import { markRaw } from "vue";

const route = useRoute()
const router = useRouter()

const props = defineProps({
  tableData : Array
})

// watch用にcomputedでpropsの値を返す
const tableData = computed(() => {
  return props.tableData
})

const main_table = ref()
const displayData = ref(props.tableData)
const sortStat = ref({
  header: null,
  order: null
})
const inputWord = ref("")
const keyword = ref("")
const headerSet = ref([
  { headerStr: '名前',   sortStr: 'name' },
  // { headerStr: '階層', sortStr: 'floor' },
  { headerStr: '系1',    sortStr: 'type1' },
  { headerStr: '系2',    sortStr: 'type2' },
  { headerStr: 'HP',     sortStr: 'hp' },
  { headerStr: '攻撃',   sortStr: 'attack' },
  { headerStr: '防御',   sortStr: 'defense' },
  { headerStr: 'EXP',    sortStr: 'exp' },
  { headerStr: 'Lv',     sortStr: 'level' },
  { headerStr: '限Lv',   sortStr: 'maxLevel' },
  { headerStr: '回復',   sortStr: 'heal' },
  { headerStr: '成長',   sortStr: 'growth' },
  { headerStr: 'ドロ率', sortStr: 'drop' },
  { headerStr: '修正値', sortStr: 'correction' }
])

const linkName = computed(() => {
  let name = null
  if (route.path === '/monster') name = 'monster_detail'
    else name = 'monster_detail_gba'
  return name
})

const sortData = (str) => {
  let newData = null
  if (sortStat.value.header !== str || sortStat.value.order !== 'asc') {
    // 昇順
    newData = displayData.value.sort((a,b)=> {
      if(a[str] < b[str]) return -1;
      if(a[str] > b[str]) return 1;
      return 0;
    })
    sortStat.value.order = 'asc'
  } else if (sortStat.value.header === str && sortStat.value.order !== 'desc') {
    // 降順
    newData = displayData.value.sort((a,b)=> {
      if(a[str] > b[str]) return -1;
      if(a[str] < b[str]) return 1;
      return 0;
    })
    sortStat.value.order = 'desc'
  }
  sortStat.value.header = str
  displayData.value = newData
  main_table.value.scrollTop = 0
}

const linkToDetail = (id) => {
  router.push({ name: linkName.value, params: { id: id } })
}

const modalOn = (monster) => {
  const data = {
    component: markRaw(CalcModal),
    header: 'ダメージ計算',
    param: {
      name:    monster.name,
      level:   monster.level,
      hp:      monster.hp,
      defense: monster.defense
    }
  }
  store.dispatch('setModalData', data)
  store.dispatch('modalOn')
}

const search = () => {
  keyword.value = inputWord.value
}

const keywordClear = () => {
  keyword.value = ''
  inputWord.value = ''
}

const isVisible = (name) => {
  if (!keyword.value) return true
  if (name.indexOf(keyword.value) !== -1) return true
  return false
}

watch(tableData, (nVal) => {
  displayData.value = nVal
  sortData('id')
  sortStat.value.header = null
  sortStat.value.order = null
})
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>