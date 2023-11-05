import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

//firebase
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebase';

//FormKit
import { plugin, defaultConfig } from '@formkit/vue';
import theme from '../formkit.config';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(theme));
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.mount('#app');
