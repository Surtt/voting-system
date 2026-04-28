import type { Post } from "~/interfaces/post.interface";

export const useReactionsStore = defineStore(
  "reactions",
  () => {
    const reactions = ref<{ id: number; action: "liked" | "disliked" }[]>([]);

    const config = useRuntimeConfig();
    const API_URL = config.public.apiurl;

    function getReaction(postId: number) {
      return reactions.value.find((r) => r.id === postId)?.action || null;
    }

    async function like(postId: number) {
      if (getReaction(postId)) return null;
      const data = await $fetch<Post>(`${API_URL}/posts/${postId}/like`, { method: "POST" });
      const existing = reactions.value.find((r) => r.id === postId);
      if (existing) {
        existing.action = "liked";
      } else {
        reactions.value.push({ id: postId, action: "liked" });
      }
      return data;
    }

    async function dislike(postId: number) {
      if (getReaction(postId)) return null;
      const data = await $fetch<Post>(`${API_URL}/posts/${postId}/dislike`, { method: "POST" });
      const existing = reactions.value.find((r) => r.id === postId);
      if (existing) {
        existing.action = "disliked";
      } else {
        reactions.value.push({ id: postId, action: "disliked" });
      }
      return data;
    }

    return { reactions, getReaction, like, dislike };
  },
  { persist: true },
);
