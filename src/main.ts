import { createApp } from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// createApp(App).mount('#app')

async function bootstrap() {
  const app = createApp(App);

  // TODO

  app.mount('#app');
}

renderWithQiankun({
  mount() {
    bootstrap();
  },
  bootstrap() {},
  unmount() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  bootstrap();
}
