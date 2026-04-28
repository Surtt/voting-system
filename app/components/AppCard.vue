<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Post } from "~/interfaces/post.interface";

const { post, asLink = false } = defineProps<{ post: Post; asLink?: boolean }>();

const reactionsStore = useReactionsStore();
const reaction = computed(() => reactionsStore.getReaction(post.id));

const localLikes = ref(post.likes);
const localDislikes = ref(post.dislikes);

async function handleLike(e: Event) {
  e.preventDefault();
  const data = await reactionsStore.like(post.id);
  if (data) {
    localLikes.value = data.likes;
    localDislikes.value = data.dislikes;
  }
}

async function handleDislike(e: Event) {
  e.preventDefault();
  const data = await reactionsStore.dislike(post.id);
  if (data) {
    localLikes.value = data.likes;
    localDislikes.value = data.dislikes;
  }
}

const daysAgo = computed(() => {
  const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });
  const diffInDays = Math.round(
    (new Date(post.published_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
  return rtf.format(diffInDays, "day");
});
</script>

<template>
  <component
    :is="asLink ? NuxtLink : 'div'"
    :to="asLink ? `/${post.id}` : undefined"
    class="card-link"
  >
    <div class="card">
      <div class="card-container">
        <header class="card-header">
          <div class="card-company-container">
            <img src="~/assets/icons/purpleschool.svg" width="24" height="24" alt="logo" /><span
              class="card-company"
              >PurpleSchool</span
            >
          </div>
          <span class="card-date">{{ daysAgo }}</span>
        </header>
        <div class="card-content">
          <h3 class="card-heading">{{ post.title }}</h3>
          <p class="card-text">
            {{ post.content }}
          </p>
        </div>
        <footer class="card-footer">
          <div class="card-likes">
            <button
              class="card-like"
              :class="{ 'card-like--active': reaction === 'liked' }"
              @click="handleLike"
            >
              <span class="card-like-count">{{ localLikes }}</span>
              <Icon name="solar:like-linear" size="18" />
            </button>
            <button
              class="card-dislike"
              :class="{ 'card-dislike--active': reaction === 'disliked' }"
              @click="handleDislike"
            >
              <span class="card-dislike-count">{{ localDislikes }}</span>
              <Icon name="solar:dislike-linear" size="18" />
            </button>
          </div>
          <div class="card-actions">
            <div class="card-remove"><Icon name="solar:trash-bin-trash-linear" size="18" /></div>
            <div class="card-edit">
              <Icon name="solar:pen-linear" size="15" />
              <span class="card-edit-text">Изменить</span>
            </div>
          </div>
        </footer>
      </div>
      <hr v-if="asLink" class="line" />
    </div>
  </component>
</template>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;
  max-width: 533px;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 14px;
}

.card-company-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-company,
.card-date,
.card-text {
  font-weight: 300;
}

.card-company {
  color: var(--text-primary);
}

.card-date {
  color: var(--text-secondary);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-heading {
  font-size: 22px;
  color: var(--text-strong);
  font-weight: 400;
}

.card-text {
  color: var(--text-primary);
  line-height: 24px;
  letter-spacing: normal;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-likes,
.card-actions {
  display: flex;
  gap: 13px;
}

.card-like,
.card-dislike,
.card-remove,
.card-edit {
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-like,
.card-dislike {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.card-like--active {
  color: #22c55e;
}

.card-dislike--active {
  color: #ef4444;
}

.card-like-count,
.card-dislike-count,
.card-edit-text {
  font-size: 14px;
  font-weight: 400;
}

.card-like-count,
.card-dislike-count {
  color: var(--text-primary);
}

.line {
  border: 1px solid var(--border);
}
</style>
