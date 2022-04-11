<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"> 登录 </h2>
  <Form
    class="p-4 enter-x"
    :model="formData"
    :rules="getFormRules"
    ref="formRef"
    @keypress.enter="handleLogin"
  >
    <FormItem name="username" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.username"
        placeholder="账号"
        class="fix-auto-fill"
      />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        placeholder="密码"
      />
    </FormItem>

    <FormItem class="enter-x">
      <Button type="primary" size="large" block @click="handleLogin" :loading="loading">
        登录
      </Button>
    </FormItem>
  </Form>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Form, Input, Button } from 'ant-design-vue';

  import { useFormRules, useFormValid } from './useLogin';
  import { useUserStore } from '/@/store/modules/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { encrypt } from '/@/utils/rsaEncrypt';

  const { notification, createErrorModal } = useMessage();

  const FormItem = Form.Item;
  const InputPassword = Input.Password;

  const formRef = ref();
  const loading = ref(false);
  const userStore = useUserStore();

  const formData = reactive({
    username: 'superadmin',
    password: 'Qcode@123',
  });

  const { getFormRules } = useFormRules();

  const { validForm } = useFormValid(formRef);

  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      loading.value = true;
      await userStore.getRsaPublicKey();
      const loginInfo = await userStore.login({
        username: data.username,
        password: encrypt(userStore.getPublicKey, data.password),
      });
      if (loginInfo) {
        notification.success({
          message: '登录成功',
          description: `欢迎回来: ${loginInfo.real_name}`,
          duration: 3,
        });
      }
    } catch (error) {
      console.log(error);
      createErrorModal({
        title: '错误提示',
        content: (error as unknown as Error).message || '网络异常，请检查您的网络连接是否正常!',
        getContainer: () => document.body,
      });
    } finally {
      loading.value = false;
    }
  }
</script>
