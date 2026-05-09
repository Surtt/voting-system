<script setup lang="ts">
const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin() {
  error.value = "";
  try {
    await authStore.login(email.value, password.value);
    router.push("/");
  } catch {
    error.value = "Неверный email или пароль";
  }
}
</script>

<template>
  <div class="login-wrapper">
    <form class="login-form" @submit.prevent="handleLogin">
      <p class="login-title">Вход на платформу</p>

      <div class="input-wrapper">
        <Icon name="solar:letter-linear" size="20" class="input-icon" />
        <input v-model="email" type="email" placeholder="Email" class="input" required />
      </div>

      <div class="input-wrapper">
        <Icon name="solar:lock-keyhole-minimalistic-linear" size="20" class="input-icon" />
        <input v-model="password" type="password" placeholder="Пароль" class="input" required />
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <AppButton class="login-btn" type="submit">Войти в аккаунт</AppButton>
    </form>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 340px;
}

.login-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 12px 18px;
  background-color: var(--bg);
}

.input-icon {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  color: var(--text-primary);
  font-family: var(--font);
  background: transparent;
}

.input::placeholder {
  color: var(--text-secondary);
}

.error {
  color: #e53935;
  font-size: 14px;
  align-self: flex-start;
}

.login-btn {
  width: 100%;
  margin-top: 4px;
}
</style>
