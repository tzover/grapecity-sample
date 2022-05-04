<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <!-- Sample Component -->
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // title: String,
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.card {
  padding: 0 2rem;
  border: 0.2rem solid #eee;
  border-radius: 1rem;
}

.card h1 {
  font-size: 1.5rem;
  text-align: left;
  text-decoration: underline;
}
</style>
