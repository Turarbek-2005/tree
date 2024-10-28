<script setup lang="ts">
import { useTreeStore } from "~/store/language";

const store = useTreeStore();

onBeforeMount(async () => {
  await store.loadTree();
  console.log(store.tree);
});
</script>

<template>
  <div>
    <p>{{ store.tree }}</p>
  </div>
</template>

<style scoped></style>
