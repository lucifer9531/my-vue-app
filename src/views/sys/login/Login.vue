<template>
  <div class="login relative w-full h-full px-4">
    <div class="container relative h-full py-2 mx-auto sm:px-10">
      <div class="flex h-full">
        <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
          <AppLogo class="-enter-x" />
          <div class="my-auto">
            <img
              :alt="title"
              src="../../../assets/svg/login-box-bg.svg"
              class="w-1/2 -mt-16 -enter-x"
            />
            <div class="mt-10 font-medium text-white -enter-x">
              <span class="inline-block mt-4 text-3xl">开箱即用的中后台管理系统</span>
            </div>
            <div class="mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x">
              输入您的个人详细信息开始使用！
            </div>
          </div>
        </div>
        <div class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
          <div
            class="login-form relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { AppLogo } from '/@/components/Application';
  import { useGlobSetting } from '/@/hooks/setting';
  import LoginForm from './LoginForm.vue';

  const globSetting = useGlobSetting();
  const title = computed(() => globSetting?.title ?? '');
</script>

<style lang="less">
  .login {
    min-height: 100%;
    overflow: hidden;
    @media (max-width: 1200px) {
      background-color: #293146;

      .login-form {
        background-color: #fff;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin-left: -48%;
      background-image: url(/@/assets/svg/login-bg.svg);
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      content: '';
      @media (max-width: 1200px) {
        display: none;
      }
    }

    .app-logo {
      position: absolute;
      top: 12px;
      height: 30px;

      &__title {
        font-size: 16px;
        color: #fff;
      }

      img {
        width: 32px;
      }
    }

    .container {
      .app-logo {
        display: flex;
        width: 60%;
        height: 80px;

        &__title {
          font-size: 24px;
          color: #fff;
        }

        img {
          width: 48px;
        }
      }
    }

    &-sign-in-way {
      .anticon {
        font-size: 22px;
        color: #888;
        cursor: pointer;

        &:hover {
          color: #0960bd;
        }
      }
    }

    input:not([type='checkbox']) {
      min-width: 360px;

      @media (max-width: 1200px) {
        min-width: 320px;
      }

      @media (max-width: 992px) {
        min-width: 260px;
      }

      @media (max-width: 768px) {
        min-width: 240px;
      }

      @media (max-width: 576px) {
        min-width: 160px;
      }
    }
  }
</style>
