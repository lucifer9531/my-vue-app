<template>
  <section>
    <a-card :title="`欢迎你，${userInfo.nickname}`">
      <section>
        <div>
          <a-avatar :size="50" :src="userInfo.avatarUrl" />
        </div>
        <div>
          <span>用户名：</span>
          {{ userInfo.nickname }}
        </div>
        <div>
          <span>性别：</span>
          {{ userInfo.gender ? '男' : '女' }}
        </div>
        <div>
          <span>token：</span>
          {{ userInfo.token }}
        </div>
        <div>
          <span>所在地：</span>
          {{ `${userInfo.country} ${userInfo.province} ${userInfo.city}` }}
        </div>
      </section>
    </a-card>
  </section>
</template>
<script lang="ts">
  // 引入 SharedModule
  import SharedModule from '/@/shared';
  import { onMounted, reactive, toRefs } from 'vue';

  export default {
    name: 'Communication',

    setup() {
      const state = reactive({
        userInfo: {},
      });

      onMounted(() => {
        const shared = SharedModule.getShared();

        // 使用 shared 获取 token
        const token = shared.getToken();
        if (!token) {
          alert('未检测到登录信息!');
          return;
        }
        getUserInfo(token);
      });

      const getUserInfo = async (token: string) => {
        state.userInfo = {
          token,
          nickname: '111',
          avatarUrl: '',
          gender: true,
          country: '中国',
          province: '四川省',
          city: '成都市',
        };
      };

      return {
        ...toRefs(state),
      };
    },
  };
</script>
