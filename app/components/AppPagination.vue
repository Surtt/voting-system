<template>
  <div class="pagination">
    <button
      v-for="item in pages"
      :key="item.key"
      class="pagination__btn"
      :class="{ 'pagination__btn--active': item.value === modelValue }"
      :disabled="item.value === null"
      @click="item.value && $emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
  totalPages: number;
}>();

defineEmits<{
  "update:modelValue": [value: number];
}>();

const pages = computed(() => {
  const total = props.totalPages;
  const current = props.modelValue;
  const items: { key: string; label: string; value: number | null }[] = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      items.push({ key: `p${i}`, label: String(i), value: i });
    }
    return items;
  }

  for (let i = 1; i <= 3; i++) {
    items.push({ key: `p${i}`, label: String(i), value: i });
  }

  if (current > 4) {
    items.push({ key: "dots", label: "...", value: null });
  }

  for (let i = Math.max(4, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    if (!items.find((item) => item.value === i)) {
      items.push({ key: `p${i}`, label: String(i), value: i });
    }
  }

  if (current < total - 3) {
    items.push({ key: "dots2", label: "...", value: null });
  }

  if (!items.find((item) => item.value === total)) {
    items.push({ key: `p${total}`, label: String(total), value: total });
  }

  return items;
});
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 4px;
  margin-top: 60px;
}

.pagination__btn {
  background: none;
  border: none;
  border-right: 1px solid #e0e0e0;
  padding: 8px 12px;
  font-size: 18px;
  color: var(--text-secondary);
  cursor: pointer;
}

.pagination__btn:last-child {
  border-right: none;
}

.pagination__btn:disabled {
  cursor: default;
}

.pagination__btn--active {
  color: var(--text-primary);
  font-weight: 600;
}
</style>
