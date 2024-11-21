<script setup>
  import { onMounted } from "vue";

  onMounted(async () => {
    const storedTheme = localStorage.getItem("theme");
    document.body.classList.add(storedTheme ?? "dark");
  });
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  @import "./styles/variables.scss";
  @import "./styles/colors.scss";
  @import "./styles/_base.scss";

  body {
    background: var(--bg-color-500);
  }
</style>
