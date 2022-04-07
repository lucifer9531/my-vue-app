import type { ProjectConfig, TransitionSetting, MultiTabsSetting } from '/#/config';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { PROJ_CFG_KEY } from '/@/enums/cacheEnum';
import { Persistent } from '/@/utils/cache/persistent';
import { deepMerge } from '/@/utils';
import { resetRouter } from '/@/router';

interface AppState {
  // project config
  projectConfig: ProjectConfig | null;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
  }),
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getTransitionSetting(): TransitionSetting {
      return this.getProjectConfig.transitionSetting;
    },
    getMultiTabsSetting(): MultiTabsSetting {
      return this.getProjectConfig.multiTabsSetting;
    },
  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
      Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },
    async resetAllState() {
      resetRouter();
      Persistent.clearAll();
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
