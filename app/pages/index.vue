<script setup lang="ts">
import type { GetPostsResponse } from "~/interfaces/post.interface";
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const { data, error } = useFetch<GetPostsResponse>(`${API_URL}/posts`);
</script>

<template>
  <div v-if="data"><AppCard v-for="post in data.posts" :key="post.id" :post="post" as-link /></div>
  <div v-else-if="error">Error: {{ error.message }}</div>
</template>

<style scoped></style>
