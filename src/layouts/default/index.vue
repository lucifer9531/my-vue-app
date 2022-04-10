<template>
  <Layout class="default-layout">
    <Layout class="default-layout-main">
      <LayoutContent />
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';

  import LayoutContent from './content/index.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutContent,
      Layout,
    },
    setup() {},
  });
</script>

<style lang="less">
  .default-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #f9f4f6;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
