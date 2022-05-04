<template>
  <h1>GrapeCity Sample</h1>
  <img src="https://grapecitycontentcdn.azureedge.net/jp/logo-grapecity.svg" alt="grapecity" />
  <hr />
  <InputNum />
</template>

<script>
import { defineComponent } from 'vue'
import InputNum from '../components/input/InputNum.vue'

export default defineComponent({
  components: { InputNum },
  setup() {
    return {}
  },
})
</script>

<style scoped>
img {
  width: 20%;
  margin: 1rem 0;
}
</style>
