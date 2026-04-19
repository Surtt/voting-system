<script setup lang="ts"></script>

<template>
  <div class="card">
    <header class="card-header">
      <div class="card-company-container">
        <img src="~/assets/icons/purpleschool.svg" width="24" height="24" /><span
          class="card-company"
          >PurpleSchool</span
        >
      </div>
      <span class="card-date">4 дня назад</span>
    </header>
    <div class="card-content">
      <h3 class="card-heading">Добавить функцию голосования</h3>
      <p class="card-text">
        Попробовать добавить в приложение функцию голосования, которая позволит определить, какая
        фича более полезна, а какая нет. После добавления поста появляется...
      </p>
    </div>
    <footer class="card-footer">
      <div class="card-likes">
        <div class="card-like">
          <span class="card-like-count">10</span>
          <Icon name="solar:like-linear" size="18" />
        </div>
        <div class="card-dislike">
          <span class="card-dislike-count">1</span>
          <Icon name="solar:dislike-linear" size="18" />
        </div>
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
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 533px;
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
</style>
