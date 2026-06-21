<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTooltip } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodTooltip">
    <template #example>
      <div class="dev-container">
        <DrodTooltip location="top">
          <template #activator>
            <div class="box">Hover me (top)</div>
          </template>
          <template #content>I appear above the box</template>
        </DrodTooltip>
        <DrodTooltip location="bottom" :openOnClick="true" :allow="true">
          <template #activator>
            <div class="box">Click me (bottom)</div>
          </template>
          <template #content>I toggle on click</template>
        </DrodTooltip>
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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      width: 200px;
      color: var(--primary-color-font-color-500);
      background: var(--primary-color-500);
      border: 1px solid var(--scroll-color-500);
      border-radius: 3px;
      cursor: pointer;
    }
  }
</style>
