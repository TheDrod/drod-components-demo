<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSpacer } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodSpacer">
    <template #example>
      <div class="dev-container">
        <p class="label">Vertical (size 3):</p>
        <div class="stack">
          <div class="block">A</div>
          <DrodSpacer :size="3" />
          <div class="block">B</div>
        </div>

        <p class="label">Horizontal (size 4):</p>
        <div class="row">
          <div class="block">A</div>
          <DrodSpacer direction="horizontal" :size="4" />
          <div class="block">B</div>
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    .label {
      margin: 1rem 0 0.25rem;
      font-size: 0.85rem;
      opacity: 0.7;
    }
    .row {
      display: flex;
      align-items: center;
    }
    .block {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      color: var(--primary-color-font-color-500);
      background: var(--primary-color-500);
      border-radius: 8px;
    }
  }
</style>
