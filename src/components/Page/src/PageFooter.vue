<template>
  <div class="page-footer">
    <div class="page-footer__left">
      <slot name="left"></slot>
    </div>
    <slot></slot>
    <div class="page-footer__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'PageFooter',
    inheritAttrs: false,
  });
</script>

<style lang="less" scoped>
  .page-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 24px;
    line-height: 44px;
    background-color: #fff;
    border-top: 1px solid #f4f7f9;
    box-shadow: 0 -6px 16px -8px rgb(0 0 0 / 8%), 0 -9px 28px 0 rgb(0 0 0 / 5%),
      0 -12px 48px 16px rgb(0 0 0 / 3%);
    transition: width 0.2s;

    &__left {
      flex: 1 1;
    }
  }
</style>
