<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="filter">
    <button
      class="filter__tab"
      :class="{ 'filter__tab--active': modelValue === 'date' }"
      @click="$emit('update:modelValue', 'date')"
    >
      По дате
    </button>
    <button
      class="filter__tab"
      :class="{ 'filter__tab--active': modelValue === 'rating' }"
      @click="$emit('update:modelValue', 'rating')"
    >
      По рейтингу
    </button>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  gap: 42px;
  padding-bottom: 17px;
  max-width: 533px;
  border-bottom: 1px solid var(--border);
}

.filter__tab {
  background: none;
  border: none;
  font-size: 16px;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  font-weight: 300;
}

.filter__tab--active {
  color: var(--text-primary);
  font-weight: 400;
}
</style>
