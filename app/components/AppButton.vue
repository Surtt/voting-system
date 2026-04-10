<script setup lang="ts"></script>

<template>
  <button class="btn"><slot /></button>
</template>

<style scoped>
.btn {
  border: none;
  background-color: var(--button-bg);
  color: var(--button-text);
  border-radius: 24px;
  padding: 11px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  cursor: pointer;
}
</style>
