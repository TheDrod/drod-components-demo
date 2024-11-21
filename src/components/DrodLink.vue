<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodLink } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodLink">
    <template #example>
      <div class="dev-container">
        <DrodLink> awesome test </DrodLink>
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
