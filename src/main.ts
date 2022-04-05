import { createApp } from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

async function bootstrap() {
  const app = createApp(App);

  // TODO app 加强

  app.mount('#app');
}

renderWithQiankun({
  bootstrap() {},
  mount() {
    bootstrap();
  },
  unmount() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  bootstrap();
}
