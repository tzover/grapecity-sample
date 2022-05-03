<template>
  <div class="home">
    <!-- Title -->
    <h1>Welcome to HomeMenu</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="description">This repository is for practicing Grapecity wijmo.</p>
    <hr />
    <!-- Options -->
    <div class="options">
      <h2>Refereces</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Description</th>
            <th>URL</th>
          </tr>
        </thead>
        <a
          href="https://demo.grapecity.com/wijmo/demos/Core/ShowPopup/vue"
          target="_blank"
          rel="noopener"
          >Wijmo Demos</a
        >
        <a
          href="https://www.grapecity.co.jp/developer/wijmo/vue#features"
          target="_blank"
          rel="noopener"
          >Wijmo Vue</a
        >
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
})
</script>

<style scoped>
.home {
  padding: 0 5rem;
}
/* Title */
.home p {
  text-align: right;
  font-style: italic;
  letter-spacing: 0.2rem;
  color: #999;
}

/* Options */
.options {
  text-align: left;
}
</style>
