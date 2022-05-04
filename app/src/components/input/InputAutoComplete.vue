<template>
  <SampleCard :title="'input-text'">
    <div class="child-component">
      <h3>Auto Complete</h3>
      <span>:</span>
      <wj-auto-complete
        display-member-path="country"
        :items-source="data"
        placeholder="Please select country"
        :value="null"
        v-model="result1"
      ></wj-auto-complete>
    </div>
    <div class="child-component">
      <h3>Combo box</h3>
      <span>:</span>
      <wj-combo-box
        display-member-path="country"
        :items-source="data"
        v-model="result2"
      ></wj-combo-box>
    </div>
    <p class="result">value1: {{ result1.country }}</p>
    <p class="result">value2: {{ result2.country }}</p>
  </SampleCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// wijmo
import { WjAutoComplete, WjComboBox } from '@grapecity/wijmo.vue2.input'

// components
import SampleCard from '../SampleCard.vue'

export default defineComponent({
  components: { SampleCard, WjAutoComplete, WjComboBox },
  setup() {
    const data = ref([
      {
        id: 0,
        country: 'Japan - Tokyo',
      },
      {
        id: 1,
        country: 'Japan - Kyoto',
      },
      {
        id: 2,
        country: 'Japan - Osaka',
      },
      {
        id: 3,
        country: 'America',
      },
      {
        id: 4,
        country: 'China',
      },
    ])

    const result1 = ref('')
    const result2 = ref('')

    return { data, result1, result2 }
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

.result {
  text-align: right;
}
</style>
