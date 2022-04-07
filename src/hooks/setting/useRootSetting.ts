import { computed } from 'vue';

import { useAppStore } from '/@/store/modules/app';

export function useRootSetting() {
  const appStore = useAppStore();

  const getOpenKeepAlive = computed(() => appStore.getProjectConfig.openKeepAlive);
  return {
    getOpenKeepAlive,
  };
}
