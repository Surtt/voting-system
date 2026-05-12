<script setup lang="ts">
const props = defineProps<{
  initialTitle?: string;
  initialContent?: string;
  loading?: boolean;
}>();

const emit = defineEmits<{
  submit: [{ title: string; content: string }];
}>();

const title = ref(props.initialTitle ?? "");
const content = ref(props.initialContent ?? "");

function handleSubmit() {
  emit("submit", { title: title.value, content: content.value });
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form-body">
      <div class="form-title-row">
        <div class="form-add-btn">
          <Icon name="solar:add-circle-linear" size="20" />
        </div>
        <input v-model="title" class="form-title" placeholder="Тема" required />
      </div>
      <textarea v-model="content" class="form-content" placeholder="Текст...." />
    </div>
    <div class="form-footer">
      <AppButton type="submit" :disabled="loading">
        {{ loading ? "Сохранение..." : "Сохранить" }}
      </AppButton>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
}

.form-body {
  flex: 1;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
}

.form-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}

.form-add-btn {
  display: flex;
  align-items: center;
  color: var(--text-primary);
}

.form-title {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font);
  font-size: 16px;
  color: var(--text-primary);
}

.form-title::placeholder {
  color: var(--text-primary);
  font-weight: 300;
}

.form-content {
  flex: 1;
  border: none;
  outline: none;
  resize: none;
  padding: 16px 20px;
  font-family: var(--font);
  font-size: 16px;
  color: var(--text-primary);
  line-height: 24px;
}

.form-content::placeholder {
  color: var(--text-secondary);
  font-weight: 300;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
}
</style>
