<script setup lang="ts">
interface LinkItem {
  title: string;
  disabled: boolean;
  href: string;
}

const store = useTreeStore();
const link = ref<LinkItem[]>([]);

const updateLink = () => {
  const path = store.child.locale[store.locale]?.link;
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

watch(() => store.child.locale[store.locale]?.link, updateLink);
</script>
<template>
  <div class="tw-container">
    <div class="tw-flex tw-items-center">
      <label>link:</label> <v-breadcrumbs :items="link"> </v-breadcrumbs>
    </div>
    <div class="tw-flex tw-items-center tw-mb-5 tw-h-40">
      <div class="">
        <h3 class="tw-text-xl tw-mb-5">
          Имя:
          {{
            store.getLocalizedValue(store.child, "cg_name") || "Default Name"
          }}
        </h3>
        <p class="tw-text-lg">
          Описание:
          {{ store.getLocalizedValue(store.child, "cg_description") }}
        </p>
      </div>
      <img
        :src="store.child.category_image || store.child.menu_image"
        class="tw-h-full"
      />
    </div>
    <div class="tw-flex tw-items-center tw-gap-4">
      <p class="tw-text-lg tw-font-semibold tw-mb-2">Дочерние категории:</p>
      <div class="tw-flex tw-gap-2">
        <NuxtLink
          to="/category/child"
          v-for="item of store.child.childs"
          @click="store.setChild(item)"
          class="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-text-black transition tw-shadow-sm"
        >
          {{ store.getLocalizedValue(item, "cg_name") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
