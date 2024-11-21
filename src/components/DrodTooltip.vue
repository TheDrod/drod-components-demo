<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTooltip } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodTooltip">
    <template #example>
      <div class="dev-container">
        <div class="box">
          <DrodTooltip>The box</DrodTooltip>
        </div>
        <div class="box">
          <DrodTooltip :appendToBody="true">The box 2</DrodTooltip>
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .box {
      height: 200px;
      width: 200px;
      background: var(--primary-color-500);
      border: 1px solid var(--scroll-color-500);
      border-radius: 3px;
    }
  }
</style>
