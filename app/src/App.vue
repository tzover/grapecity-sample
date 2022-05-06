<template>
  <nav class="nav-menu">
    <router-link to="/">Home</router-link>
    <p>|</p>
    <router-link to="/grapecity">Grapecity</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 5rem;
}

hr {
  margin: 1rem 0;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-menu a {
  color: #999;
  text-decoration: none;
  margin-left: 20px;
}
.nav-menu a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
