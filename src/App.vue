<template>
  <RouterView />
</template>

<script lang="ts" setup>
  import { useTitle } from '/@/hooks/web/useTitle';

  // Listening to page changes and dynamically changing site titles
  useTitle();
</script>
