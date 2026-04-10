<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();

const goHome = () => {
  navigateTo({ name: "index" });
};
</script>

<template>
  <div class="error-container">
    <p class="status">{{ error.status }}</p>
    <p v-if="error.status === 404" class="message">
      Страница не найдена, вернитесь на главную страницу
    </p>
    <p v-else class="message">{{ error.message }}</p>
    <AppButton @click="goHome">На главную</AppButton>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
}

.status {
  font-size: 120px;
  font-weight: 500;
  line-height: 100%;
  color: var(--text-primary);
}

.message {
  font-size: 16px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 24px;
}
</style>
