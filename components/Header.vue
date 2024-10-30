<script setup lang="ts">
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
</script>
<template>
  <div class="tw-h-16 tw-border-b tw-border-gray-300">
    <div
      class="tw-h-full tw-flex tw-items-center tw-justify-between tw-container"
    >
      <NuxtLink
        to="/category"
        @Click="store.setCategory(item)"
        v-for="item of store.tree"
        class="tw-mr-4 tw-text-lg"
      >
        <!-- <v-img :src="item.menu_image" /> -->

        {{ item.locale[store.locale].cg_name }}
      </NuxtLink>
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
    </div>
  </div>
</template>
<style scoped></style>
