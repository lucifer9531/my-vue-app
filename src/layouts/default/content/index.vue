<template>
  <div class="layout-content" v-loading="getOpenPageLoading && getPageLoading">
    <PageLayout />
  </div>
</template>
<script lang="ts">
  import type { RouteLocationNormalized, RouteMeta } from 'vue-router';
  import { defineComponent, ref, unref } from 'vue';
  import PageLayout from '/@/layouts/page/index.vue';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { REDIRECT_NAME } from '/@/router/constant';
  import { useUserStore } from '/@/store/modules/user';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { router } from '/@/router';
  import { useTransitionSetting } from '/@/hooks/setting/useTransitionSetting';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  const { getOpenPageLoading } = useTransitionSetting();
  const { getPageLoading } = useRootSetting();

  export default defineComponent({
    name: 'LayoutContent',
    components: { PageLayout },
    setup() {
      const userStore = useUserStore();
      const tabStore = useMultipleTabStore();
      const activeKeyRef = ref('');
      listenerRouteChange((route) => {
        const { name } = route;
        if (name === REDIRECT_NAME || !route || !userStore.getToken) {
          return;
        }

        const { path, fullPath, meta = {} } = route;
        const { currentActiveMenu, hideTab } = meta as RouteMeta;
        const isHide = !hideTab ? null : currentActiveMenu;
        const p = isHide || fullPath || path;
        if (activeKeyRef.value !== p) {
          activeKeyRef.value = p as string;
        }

        if (isHide) {
          const findParentRoute = router
            .getRoutes()
            .find((item) => item.path === currentActiveMenu);

          findParentRoute && tabStore.addTab(findParentRoute as unknown as RouteLocationNormalized);
        } else {
          tabStore.addTab(unref(route));
        }
      });

      return {
        getOpenPageLoading,
        getPageLoading,
      };
    },
  });
</script>

<style lang="less">
  .layout-content {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;

    &.fixed {
      width: 1200px;
      margin: 0 auto;
    }

    &-loading {
      position: absolute;
      top: 200px;
      z-index: 10000;
    }
  }
</style>
