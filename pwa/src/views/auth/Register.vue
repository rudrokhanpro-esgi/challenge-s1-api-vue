<template>
  <div>
    <h1>Register page</h1>

    <button type="submit" @click="registerAndLogin">
      Submit
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
    const { authenticate } = authStore;

    const registerAndLogin = () => {
      authenticate();

      router.replace('/');
    };

    return { registerAndLogin };
  },
};
</script>
