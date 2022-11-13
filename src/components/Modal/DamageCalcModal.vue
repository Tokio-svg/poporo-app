<template>
  <div>
    <p>{{name}}</p>
    <p>Lv{{level}}</p>
    <p>HP:{{hp}}</p>
    <p>防御力:{{defense}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainHp: 0
    }
  },

  props: {
    param: {
      type: Object,
      require: false,
      'default': () => {
        return {
          name: '指定なし',
          level: null,
          hp: 0,
          defense: 0
        }
      }
    }
  },

  mounted() {
    this.remainHp = this.param.hp
  },

  computed: {
    name() {
      return this.param.name
    },

    level() {
      return this.param.level
    },

    hp() {
      return this.param.hp
    },

    defense() {
      return this.param.defense
    }
  }
}
</script>