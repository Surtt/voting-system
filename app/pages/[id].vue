<script setup lang="ts">
import type { Post } from "~/interfaces/post.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const id = computed(() => route.params.id);
const { data, error } = useFetch<Post>(`${API_URL}/posts/${id.value}`);
console.log(id.value, data.value);
</script>

<template>
  <AppCard v-if="data" :key="data.id" :post="data" />
  <div v-else-if="error">Error: {{ error.message }}</div>
</template>

<style scoped></style>
