<template>
  <div class="anticon app-logo">
    <img src="../../../assets/images/logo.png" />
    <div class="ml-2 truncate md:opacity-100" :class="getTitleClass" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useGlobSetting } from '/@/hooks/setting';
  const props = defineProps({
    /**
     * Whether to show title
     */
    showTitle: { type: Boolean, default: true },
    /**
     * The title is also displayed when the menu is collapsed
     */
    alwaysShowTitle: { type: Boolean },
  });

  const { title } = useGlobSetting();

  const getTitleClass = computed(() => [
    'app-logo__title',
    {
      'xs:opacity-0': !props.alwaysShowTitle,
    },
  ]);
</script>

<style lang="less" scoped>
  .app-logo {
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;

    &__title {
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
    }
  }
</style>
