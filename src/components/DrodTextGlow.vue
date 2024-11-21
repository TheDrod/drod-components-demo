<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTextGlow } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodTextGlow">
    <template #example>
      <div class="dev-container">
        <DrodTextGlow>
          <h1 class="title">Glow Text</h1>
        </DrodTextGlow>
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
