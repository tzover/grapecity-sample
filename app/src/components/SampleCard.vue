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
  width: 30%;
  padding: 0 2rem;
  border: 0.2rem solid #eee;
}

.card h1 {
  font-size: 24px;
  text-align: left;
  text-decoration: underline;
}
</style>
