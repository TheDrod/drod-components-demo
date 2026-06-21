<script setup>
  import AppHeader from "./components/AppHeader.vue";
  import { DrodNotification } from "drod-components";
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <main class="app-body">
      <router-view />
    </main>

    <DrodNotification />
  </div>
</template>

<style lang="scss">
  @import "./styles/variables.scss";
  @import "./styles/colors.scss";
  @import "./styles/_base.scss";

  body {
    background: var(--bg-color-500);
  }

  .app-shell {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .app-body {
    flex: 1;
    min-height: 0;
    position: relative;
    color: var(--font-color-500);
  }
</style>
