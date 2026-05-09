import type { User } from "~/interfaces/user.interface";

interface LoginResponse {
  token: string;
  user: User;
}

export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string | null>(null);
    const user = ref<User | null>(null);

    const isAuthenticated = computed(() => !!token.value);

    const config = useRuntimeConfig();
    const API_URL = config.public.apiurl;

    async function login(email: string, password: string) {
      const data = await $fetch<LoginResponse>(`${API_URL}/auth/login`, {
        method: "POST",
        body: { email, password },
      });
      token.value = data.token;
      user.value = data.user;
    }

    function logout() {
      token.value = null;
      user.value = null;
    }

    return { token, user, isAuthenticated, login, logout };
  },
  { persist: true },
);
