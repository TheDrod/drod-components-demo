<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodCardGlow } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodCardGlow">
    <template #example>
      <div class="dev-container">
        <DrodCardGlow> Awesome Card </DrodCardGlow>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
  }
</style>
