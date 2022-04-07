import type { Router } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { useMultipleTabStore } from '/@/store/modules/multipleTab';
import { useAppStore } from '/@/store/modules/app';
import { useUserStore } from '/@/store/modules/user';
import { removeTabChangeListener } from '/@/logics/mitt/routeChange';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // Just enter the login page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN) {
      const tabStore = useMultipleTabStore();
      const userStore = useUserStore();
      const appStore = useAppStore();
      appStore.resetAllState();
      userStore.resetState();
      tabStore.resetState();
      removeTabChangeListener();
    }
  });
}
