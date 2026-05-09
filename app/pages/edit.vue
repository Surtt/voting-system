<script setup lang="ts">
definePageMeta({ middleware: "auth" });

useHead({
  title: "Редактировать пост",
  meta: [{ name: "description", content: "Отредактируйте ваш пост на платформе VoteApp" }],
});
</script>

<template>
  <div>Edit Post</div>
</template>

<style scoped></style>
