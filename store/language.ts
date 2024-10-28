import { defineStore } from "pinia";
import { ref } from "vue";

export const useTreeStore = defineStore("language", {
  state: () => ({
    locale: "ru",
    tree: ref([]),
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
  },
});
