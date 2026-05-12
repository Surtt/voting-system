<script setup lang="ts">
definePageMeta({ middleware: "auth" });

useHead({
  title: "Создать пост",
  meta: [{ name: "description", content: "Создайте новый пост и поделитесь им с сообществом VoteApp" }],
});

const authStore = useAuthStore();
const router = useRouter();

const loading = ref(false);
const error = ref<string | null>(null);

async function handleSubmit({ title, content }: { title: string; content: string }) {
  loading.value = true;
  error.value = null;
  try {
    await $fetch("/api/posts", {
      method: "POST",
      body: { title, content },
      headers: { Authorization: `Bearer ${authStore.token}` },
    });
    router.push("/");
  } catch {
    error.value = "Не удалось создать пост";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div>
    <p v-if="error" class="error">{{ error }}</p>
    <PostForm :loading="loading" @submit="handleSubmit" />
  </div>
</template>

<style scoped>
.error {
  color: #ef4444;
  margin-bottom: 12px;
  font-size: 14px;
}
</style>
