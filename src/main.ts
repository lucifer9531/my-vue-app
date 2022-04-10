import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import '/@/design/index.less';

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
import actions from '/@/shared/actions';

let app;
async function appRun(props?: any) {
  qiankunWindow.__POWERED_BY_QIANKUN__ && props && actions.setActions(props);

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

  app.mount(props?.container || '#app');
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    appRun(props);
  },
  unmount() {
    app.unmount();
    app = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  appRun();
}
