<template>
  <SampleCard :title="'input-num'">
    <wj-input-number format="n2" :min="0" :max="10" :step="1.25" v-model="inputNum" />
    <p>value: {{ wjFormat(inputNum, 'n2') }}</p>
  </SampleCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// wijmo
import * as wjcCore from '@grapecity/wijmo'
import { WjInputNumber } from '@grapecity/wijmo.vue2.input'
import SampleCard from '../SampleCard.vue'

export default defineComponent({
  components: { SampleCard, WjInputNumber },
  setup() {
    const inputNum = ref(0)

    const wjFormat = (value: number, format: string) => wjcCore.Globalize.format(value, format)

    return { inputNum, wjFormat }
  },
})
</script>

<style scoped>
wj-input-number {
  font-size: 20px;
}
</style>
