<template>
  <h1>GrapeCity Sample</h1>
  <img src="https://grapecitycontentcdn.azureedge.net/jp/logo-grapecity.svg" alt="grapecity" />
  <hr />
  <InputNum />
  <InputAutoComplete />
</template>

<script>
import { defineComponent } from 'vue'
import InputNum from '../components/input/InputNum.vue'
import InputAutoComplete from '../components/input/InputAutoComplete.vue'

export default defineComponent({
  components: { InputNum, InputAutoComplete },
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
