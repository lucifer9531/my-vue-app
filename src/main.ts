import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

import { createApp } from 'vue';
import App from './App.vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { registerGlobComp } from '/@/components/registerGlobComp';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import SharedModule from '/@/shared';

let app;
async function bootstrap(props: any = {}) {
  const { container, shared = SharedModule.getShared() } = props;

  app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Register global components
  registerGlobComp(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

  SharedModule.overloadShared(shared);
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
