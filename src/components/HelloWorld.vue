<template>
  <h1>{{ msg }}</h1>
  <img src="../assets/logo.png" alt="logo" />
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>
