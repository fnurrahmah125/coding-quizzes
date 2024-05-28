export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {} as any,
  }),
  actions: {
    async getAllCategories() {
      try {
        const { baseUrl, apikey } = useAppConfig();
        const { data, error } = await useFetch("/rest/v1/categories", {
          baseURL: baseUrl,
          method: "GET",
          headers: {
            apikey,
          },
        });

        if (error.value) {
          console.log("Get categories failed");
        } else if (data) {
          this.categories = data.value;
        }
      } catch (error) {
        console.log("An unexpected error occurred");
      }
    },
  },
});
