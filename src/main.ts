import { createApp } from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let app;
async function bootstrap(props: any = {}) {
  const { container } = props;
  app = createApp(App);

  // TODO app 加强

  app.mount(container || '#app');
}

renderWithQiankun({
  bootstrap() {},
  mount() {
    bootstrap();
  },
  unmount() {
    app.unmount();
    app = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  bootstrap();
}
