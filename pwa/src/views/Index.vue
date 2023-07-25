<template>
  <div>
    <h1>Index page</h1>

    <button type="button" @click="logoutAndExit">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import useAuthStore from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthRegister',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const { logout } = authStore;

    const logoutAndExit = () => {
      logout();

      router.replace('/auth/login');
    };

    return { logoutAndExit };
  },
};
</script>
