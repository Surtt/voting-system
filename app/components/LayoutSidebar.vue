<script setup lang="ts"></script>

<template>
  <div class="sidebar-container">
    <Icon name="solar:home-angle-linear" size="24" /><Icon name="solar:exit-linear" size="24" />
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 45px 30px;
  border-right: 1px solid var(--border);
}
</style>
