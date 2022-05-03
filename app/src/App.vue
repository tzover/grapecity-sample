<template>
  <nav class="nav-menu">
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <p>|</p>
    <div>
      <router-link to="/grapecity">Grapecity</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
