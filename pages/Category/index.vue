<script setup lang="ts">
interface LinkItem {
  title: string;
  disabled: boolean;
  href: string;
}

const store = useTreeStore();
const link = ref<LinkItem[]>([]);

const updateLink = () => {
  const path = store.category.locale[store.locale]?.link;
  const segments = path.split("/").filter((segment: any) => segment);

  link.value = [
    {
      title: "Home",
      disabled: false,
      href: "/",
    },
    ...segments.map((segment: string, index: number) => ({
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      disabled: false,
      href: index === 0 ? "/category" : `/category/${segment}`,
    })),
  ];
};

updateLink();

watch(() => store.category.locale[store.locale]?.link, updateLink);
</script>
<template>
  <div
    v-if="store.category"
    class="tw-container tw-p-6 tw-bg-white tw-shadow-md tw-rounded-lg tw-mb-8"
  >
    <div class="tw-flex tw-items-center tw-mb-4">
      <label class="tw-font-bold tw-text-lg">Ссылки:</label>
      <v-breadcrumbs :items="link" class="tw-ml-4" />
    </div>

    <div class="tw-flex tw-items-center tw-justify-between tw-mb-5">
      <div class="tw-w-2/5">
        <h3 class="tw-text-2xl tw-font-semibold tw-mb-2">
          Имя:
          {{
            store.getLocalizedValue(store.category, "cg_name") || "Default Name"
          }}
        </h3>
        <p class="tw-text-lg tw-text-gray-700">
          Описание:
          {{ store.getLocalizedValue(store.category, "cg_description") }}
        </p>
      </div>
      <v-img
        :src="store.category.category_image || store.category.menu_image"
        class="tw-w-1/3 tw-h-auto tw-rounded-lg tw-shadow-lg"
      />
    </div>

    <div class="tw-flex tw-items-center tw-gap-4">
      <p class="tw-text-lg tw-font-semibold tw-mb-2">Дочерние категории:</p>
      <div class="tw-flex tw-gap-2">
        <NuxtLink
          to="/category/child"
          v-for="item of store.category.childs"
          @click="store.setChild(item)"
          class="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-black transition tw-shadow-sm"
        >
          {{ store.getLocalizedValue(item, "cg_name") }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="tw-container tw-p-6 tw-text-center">Загрузка...</div>
</template>

<style scoped></style>
