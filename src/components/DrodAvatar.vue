<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodAvatar } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodAvatar">
    <template #example>
      <div class="dev-container">
        <DrodAvatar image="https://i.pravatar.cc/100?img=12" size="3.5rem" />
        <DrodAvatar name="Pedro Drod" size="3.5rem" />
        <DrodAvatar icon="mdi:account" size="3.5rem" />
        <DrodAvatar name="Ana Lima" size="3.5rem" square />
        <DrodAvatar name="XS" size="2rem" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
