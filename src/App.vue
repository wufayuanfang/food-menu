<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <main-header></main-header>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
