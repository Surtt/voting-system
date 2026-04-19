<script setup lang="ts"></script>

<template>
  <div class="layout">
    <aside class="sidebar"><LayoutSidebar /></aside>
    <main class="main">
      <LayoutMain><slot /></LayoutMain>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 80px;
}

.main {
  flex: 1;
}
</style>
