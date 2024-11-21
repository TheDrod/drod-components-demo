<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodVerticalSpacing } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodVerticalSpacing">
    <template #example>
      <div class="dev-container">
        That
        <DrodVerticalSpacing size="4" />
        Gap
        <DrodVerticalSpacing size="16" />
        MUCH GAP
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
