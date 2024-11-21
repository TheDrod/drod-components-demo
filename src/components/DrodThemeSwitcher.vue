<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodThemeSwitcher } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodThemeSwitcher">
    <template #example>
      <div class="dev-container">
        <DrodThemeSwitcher />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;

    > .drod-icon {
      --icon-size: 5em;
    }
  }
</style>
