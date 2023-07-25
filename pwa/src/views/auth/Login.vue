<template>
  <div>
    <h1>Login page</h1>
    <router-link to="/auth/register">
      Register
    </router-link>

    <button type="button" @click="authAndLogin">
      Authenticate
    </button>
  </div>
</template>

<script lang="ts">
import useAuthStore from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthLogin',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const { authenticate } = authStore;

    const authAndLogin = () => {
      authenticate();

      router.replace('/');
    };

    return { authAndLogin };
  },
};
</script>
