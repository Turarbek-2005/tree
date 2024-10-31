import { defineStore } from "pinia";
import { ref } from "vue";

export const useTreeStore = defineStore("tree", {
  state: () => ({
    locale: "ru",
    tree: ref<any>([]),
    category: ref<any>({}),
    child: ref<any>([]),
  }),

  actions: {
    async loadTree() {
      try {
        const { data, error } = await useFetch("/api/getTreeData");
        if (!error.value) {
          this.tree = data.value;
        } else {
          console.error("Error loading tree data:", error.value);
        }
      } catch (error) {
        console.error("Failed to fetch tree data:", error);
      }
    },

    setLocale(newLocale: string) {
      this.locale = newLocale;
    },
    setCategory(newCategory: any) {
      this.category = newCategory;
    },
    setChild(newChild: any) {
      this.child = newChild;
    },
    getLocalizedValue(item: any, key: string) {
      if (!item || !item.locale) return "";
      return (
        item.locale[this.locale]?.[key] ??
        item.locale["ru"]?.[key] ??
        item.locale["en"]?.[key] ??
        item.locale["fr"]?.[key]
      );
    },
  },
});
