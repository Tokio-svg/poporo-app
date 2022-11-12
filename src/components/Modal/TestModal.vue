<template>
  <div>
    {{test}}
  </div>
</template>

<script>
export default {
  props: {
    param: Object
  },

  computed: {
    test() {
      return this.param.test
    }
  }
}
</script>