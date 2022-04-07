import type { ProjectConfig } from '/#/config';
import { RouterTransitionEnum, SessionTimeoutProcessingEnum } from '/@/enums/appEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // Use error-handler-plugin
  useErrorHandle: false,

  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,

  // Multi-label
  multiTabsSetting: {
    cache: false,
    // Turn on
    show: false,
    // Is it possible to drag and drop sorting tabs
    canDrag: true,
    // Turn on quick actions
    showQuick: false,
    // Whether to show the refresh button
    showRedo: false,
    // Whether to show the collapse button
    showFold: false,
  },

  // Transition Setting
  transitionSetting: {
    //  Whether to open the page switching animation
    // The disabled state will also disable pageLoading
    enable: false,

    // Route basic switching animation
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // Whether to open page switching loading
    // Only open when enable=true
    openPageLoading: true,

    // Whether to open the top progress bar
    openNProgress: false,
  },

  // Whether to enable KeepAlive cache is best to close during development, otherwise the cache needs to be cleared every time
  openKeepAlive: true,
};

export default setting;
