<template>
  <div class="input">
    <wj-input-number
      class="wj-input"
      format="n2"
      :min="0"
      :max="10"
      :step="0.5"
      v-model="inputNum"
    />
    <p>value: {{ wjFormat(inputNum, 'n2') }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// wijmo
import * as wjcCore from '@grapecity/wijmo'
import { WjInputNumber } from '@grapecity/wijmo.vue2.input'

export default defineComponent({
  components: { WjInputNumber },
  setup() {
    const inputNum = ref(0)

    const wjFormat = (value: number, format: string) => wjcCore.Globalize.format(value, format)

    return { inputNum, wjFormat }
  },
})
</script>

<style scoped>
.wj-input {
  background: #eee;
}
</style>
