<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTextGradient } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodTextGradient">
    <template #example>
      <div class="dev-container">
        <DrodTextGradient>
          <h1 class="title">Cool Text</h1>
        </DrodTextGradient>
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

    .title {
      font-size: 5rem;
    }
  }
</style>
