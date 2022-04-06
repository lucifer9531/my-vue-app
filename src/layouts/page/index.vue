<template>
  <RouterView>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </RouterView>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { getTransitionName } from './transition';

  export default defineComponent({
    name: 'PageLayout',
    setup() {
      return {
        getTransitionName,
      };
    },
  });
</script>
