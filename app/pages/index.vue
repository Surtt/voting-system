<script setup lang="ts">
import type { GetPostsResponse } from "~/interfaces/post.interface";
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

const route = useRoute();
const router = useRouter();

const sort = computed(() => (route.query.sort as string) || "date");
const page = computed(() => Number(route.query.page) || 1);
const pageSize = 10;

const query = computed(() => ({
  page: page.value,
  page_size: pageSize,
  sort: sort.value,
}));

const { data, error } = useFetch<GetPostsResponse>(`${API_URL}/posts`, {
  query,
});

function setSort(value: string) {
  router.push({ query: { ...route.query, sort: value, page: 1 } });
}

function setPage(value: number) {
  router.push({ query: { ...route.query, page: value } });
}
</script>

<template>
  <AppFilter v-model="sort" @update:model-value="setSort" />
  <div v-if="data"><AppCard v-for="post in data.posts" :key="post.id" :post="post" as-link /></div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <AppPagination
    v-if="data && data.total_pages > 1"
    v-model="page"
    :total-pages="data.total_pages"
    @update:model-value="setPage"
  />
</template>

<style scoped></style>
