<template>
  <SampleCard :title="'input-calendar'">
    <p>onChange取得できない</p>
    <wj-calendar :initialized="initCalendar"></wj-calendar>
    <div>現在の日付: {{ formatDate(theCalendar.value) }}</div>
  </SampleCard>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// wijmo
import { WjCalendar } from '@grapecity/wijmo.vue2.input'
import * as wjcCore from '@grapecity/wijmo'

// components
import SampleCard from '../SampleCard.vue'

export default defineComponent({
  components: { WjCalendar, SampleCard },
  setup() {
    const theCalendar = ref({})

    const initCalendar = (calendar: object): void => {
      console.log(typeof calendar)
      console.log(calendar)
      theCalendar.value = calendar
    }

    const formatDate = (time: string) => wjcCore.Globalize.format(time, 'D')

    return { initCalendar, formatDate, theCalendar }
  },
})
</script>

<style></style>
