import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    authenticate() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});

export default useAuthStore;
