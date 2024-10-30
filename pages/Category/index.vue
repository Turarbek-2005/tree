<script setup lang="ts">
const store = useTreeStore();

const path = store.category.locale[store.locale].link;
const segments = path.split("/").filter((segment: any) => segment);

// Создаем массив link на основе сегментов
const link = segments.map((segment: string, index: number) => ({
  title: segment.charAt(0).toUpperCase() + segment.slice(1),
  disabled: false,
  href: index == 0 ? "/category" : "/child",
}));
</script>
<template>
  <div v-if="store.category">
    <v-breadcrumbs :items="link"> </v-breadcrumbs>
    <v-img :src="store.category.category_image || store.category.menu_image" />
    <span>{{
      store.category.locale[store.locale]?.cg_name || "Default Name"
    }}</span>
  </div>
  <div v-else>Загрузка...</div>
</template>
<style scoped></style>
