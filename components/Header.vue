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
  <div class="tw-h-16 tw-border-b tw-border-gray-300 bg-white">
    <div
      class="tw-h-full tw-flex tw-items-center tw-justify-between tw-container"
    >
      <div class="tw-flex tw-items-center">
        <NuxtLink
          to="/category"
          @click="store.setCategory(item)"
          v-for="item of store.tree"
          :key="item.id"
          class="tw-mr-4 tw-text-md tw-border tw-border-gray-300 tw-cursor-pointer tw-p-2 tw-shadow-md tw-rounded-md hover:tw-bg-gray-100 transition"
        >
          {{ store.getLocalizedValue(item, "cg_name") }}
        </NuxtLink>
      </div>

      <v-menu location="bottom center">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            {{ store.locale }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in languages" :key="index">
            <v-btn
              @click="store.setLocale(item.language)"
              class="tw-w-full tw-text-left hover:tw-bg-gray-100 transition"
            >
              {{ item.language }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<style scoped>
/* Дополнительные стили можно добавить здесь, если необходимо */
</style>
