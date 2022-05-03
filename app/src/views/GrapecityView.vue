<template>
  <h1>GrapeCity Sample</h1>
  <img src="https://grapecitycontentcdn.azureedge.net/jp/logo-grapecity.svg" alt="grapecity" />
  <hr />
  <PracInput />
</template>

<script>
import { defineComponent } from 'vue'
import PracInput from '../components/grapecity/PracInput.vue'

export default defineComponent({
  components: { PracInput },
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
