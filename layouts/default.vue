<script setup lang="ts">
const store = useTreeStore();

onBeforeMount(async () => {
  try {
    await store.loadTree();
    console.log(store.tree);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
  await store.loadTree();
  console.log(store.tree);
});
</script>
<template>
  <div v-if="store.tree.length === 0">Загрузка данных...</div>
  <div v-else>
    <Header />
    <div>
      <slot />
    </div>
  </div>
</template>
<style scoped></style>
