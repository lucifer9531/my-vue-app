import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  meta: {
    orderNo: 10,
    title: '分析页',
  },
  children: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
  ],
};

export default dashboard;
