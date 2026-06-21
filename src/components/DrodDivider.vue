<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodDivider } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodDivider">
    <template #example>
      <div class="dev-container">
        <p>Above the divider</p>
        <DrodDivider />
        <p>Below the divider</p>

        <DrodDivider>OR</DrodDivider>

        <div class="row">
          <span>Left</span>
          <DrodDivider vertical />
          <span>Middle</span>
          <DrodDivider vertical />
          <span>Right</span>
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    max-width: 360px;
    margin: 0 auto;

    p {
      margin: 0.25rem 0;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
</style>
