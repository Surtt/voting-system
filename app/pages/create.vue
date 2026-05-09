<script setup lang="ts">
definePageMeta({ middleware: "auth" });

useHead({
  title: "Создать пост",
  meta: [{ name: "description", content: "Создайте новый пост и поделитесь им с сообществом VoteApp" }],
});
</script>

<template>
  <div>Create Post</div>
</template>

<style scoped></style>
