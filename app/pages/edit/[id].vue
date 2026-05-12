<script setup lang="ts">
import type { Post } from "~/interfaces/post.interface";

definePageMeta({ middleware: "auth" });

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const id = computed(() => route.params.id);
const { data, error: fetchError } = useFetch<Post>(`${API_URL}/posts/${id.value}`);

useHead(computed(() => ({
  title: data.value ? `Редактировать: ${data.value.title}` : "Редактировать пост",
  meta: [{ name: "description", content: "Отредактируйте ваш пост на платформе VoteApp" }],
})));

const loading = ref(false);
const error = ref<string | null>(null);

async function handleSubmit({ title, content }: { title: string; content: string }) {
  loading.value = true;
  error.value = null;
  try {
    await $fetch(`/api/posts/${id.value}`, {
      method: "PUT",
      body: { title, content },
      headers: { Authorization: `Bearer ${authStore.token}` },
    });
    router.push(`/${id.value}`);
  } catch {
    error.value = "Не удалось сохранить изменения";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div v-if="fetchError">Ошибка загрузки поста: {{ fetchError.message }}</div>
  <div v-else-if="data">
    <p v-if="error" class="error">{{ error }}</p>
    <PostForm
      :initial-title="data.title"
      :initial-content="data.content"
      :loading="loading"
      @submit="handleSubmit"
    />
  </div>
</template>

<style scoped>
.error {
  color: #ef4444;
  margin-bottom: 12px;
  font-size: 14px;
}
</style>
