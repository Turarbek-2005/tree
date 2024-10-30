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
  <Header />
  <div>
    <slot />
  </div>
</template>
<style scoped></style>
