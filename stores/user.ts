export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as any,
  }),
  actions: {
    async getUserByUsername() {
      try {
        const { baseUrl, apikey } = useAppConfig();
        const { data, error } = await useFetch(
          "/rest/v1/users?username=eq.user123",
          {
            baseURL: baseUrl,
            method: "GET",
            headers: {
              apikey,
            },
          },
        );

        if (error.value) {
          console.log("Get user failed");
        } else if (data) {
          this.user = data.value;
        }
      } catch (error) {
        console.log("An unexpected error occurred");
      }
    },
  },
  getters: {},
});
