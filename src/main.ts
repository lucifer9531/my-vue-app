import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupErrorHandle } from '/@/logics/error-handle';
import { setupRouter } from '/@/router';
import { registerGlobComp } from '/@/components/registerGlobComp';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let app;
async function bootstrap(props: any = {}) {
  const { container } = props;
  app = createApp(App);

  // Configure store
  setupStore(app);

  // TODO Initialize internal system configuration

  // Register global components
  registerGlobComp(app);

  // Configure routing
  setupRouter(app);

  // TODO router-guard

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

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
