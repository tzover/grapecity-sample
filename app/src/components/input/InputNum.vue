<template>
  <SampleCard :title="'input-num'">
    <div class="child-component">
      <h3>Simple</h3>
      <span>:</span>
      <wj-input-number format="n2" v-model="inputNum" />
    </div>
    <div class="child-component">
      <h3>Add button</h3>
      <span>:</span>
      <wj-input-number format="n2" :min="0" :max="10" :step="1.25" v-model="inputNum" />
    </div>
    <div class="child-component">
      <h3>Styling</h3>
      <span>:</span>
      <wj-input-number
        class="input"
        format="n2"
        :min="0"
        :max="10"
        :step="1.25"
        placeholder="Please input number but, isRequired = false"
        :isRequired="false"
        :value="null"
        v-model="inputNum"
      />
    </div>
    <p class="result">value: {{ wjFormat(inputNum, 'n2') }}</p>
  </SampleCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// wijmo
import * as wjcCore from '@grapecity/wijmo'
import { WjInputNumber } from '@grapecity/wijmo.vue2.input'

// components
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
.child-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.child-component h3,
.child-component span {
  flex: 1;
}

.wj-control {
  width: 50%;
}

.input {
  background: #64a96433;
  border: 0.1rem solid blue;
  color: red;
}

.result {
  text-align: right;
}
</style>
