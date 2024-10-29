<script setup lang="ts">
import { useTreeStore } from "~/store/language";

interface ILocaleItem {
  language: string;
}

const languages: ILocaleItem[] = [
  {
    language: "ru",
  },
  {
    language: "en",
  },
  {
    language: "fr",
  },
];

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
  <div class="tw-p-4">
    <v-menu location="bottom center">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> {{ store.locale }} </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in languages" :key="index">
          <v-btn @Click="store.setLocale(item.language)">{{
            item.language
          }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="tw-flex tw-items-center tw-h-20">
      <v-btn v-for="item of store.tree">
        <!-- <v-img :src="item.menu_image" /> -->

        {{ item.locale[store.locale].cg_name }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
