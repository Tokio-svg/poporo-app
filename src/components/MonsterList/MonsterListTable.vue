<template>
  <div>
    <table class="monsterList__table">
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
        <tr>
          <td><router-link
                :to="{ name: linkName, params: { id: monster.id }}"
                class="monsterList__table--name">
                {{ monster.name }}</router-link></td>
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
          <td class="monsterList__table--number">{{ monster.correction }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayData: this.tableData,
      sortStat: {
        header: null,
        order: null
      },
      headerSet: [
        { headerStr: '名前', sortStr: 'name' },
        // { headerStr: '階層', sortStr: 'floor' },
        { headerStr: '系1', sortStr: 'type1' },
        { headerStr: '系2', sortStr: 'type2' },
        { headerStr: 'HP', sortStr: 'hp' },
        { headerStr: '攻撃', sortStr: 'attack' },
        { headerStr: '防御', sortStr: 'defense' },
        { headerStr: 'EXP', sortStr: 'exp' },
        { headerStr: 'Lv', sortStr: 'level' },
        { headerStr: '限Lv', sortStr: 'maxLevel' },
        { headerStr: '回復', sortStr: 'heal' },
        { headerStr: '成長', sortStr: 'growth' },
        { headerStr: 'ドロ率', sortStr: 'drop' },
        { headerStr: '修正値', sortStr: 'correction' }
      ]
    }
  },

  props: {
    tableData : Array
  },

  computed: {
    linkName() {
      let name = null
      if (this.$route.path === '/monster') name = 'monster_detail'
        else name = 'monster_detail_gba'
      return name
    }
  },

  methods: {
    sortData(str) {
      let newData = null
      if (this.sortStat.header !== str || this.sortStat.order !== 'asc') {
        // 昇順
        newData = this.displayData.sort((a,b)=> {
          if(a[str] < b[str]) return -1;
          if(a[str] > b[str]) return 1;
          return 0;
        })
        this.sortStat.order = 'asc'
      } else if (this.sortStat.header === str && this.sortStat.order !== 'desc') {
        // 降順
        newData = this.displayData.sort((a,b)=> {
          if(a[str] > b[str]) return -1;
          if(a[str] < b[str]) return 1;
          return 0;
        })
        this.sortStat.order = 'desc'
      }
      this.sortStat.header = str
      this.displayData = newData
    }
  },

  watch: {
    tableData(nVal) {
      this.displayData = nVal
      this.sortData('id')
      this.sortStat.header = null
      this.sortStat.order = null
    }
  }

}
</script>

<style scoped>
@import '@/styles/monsterList_table.css';
</style>