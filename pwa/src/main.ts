import { createApp } from 'vue';

import pinia from '@/plugins/pinia';
import router from '@/plugins/router';

import '@/style.css';

import App from '@/App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
