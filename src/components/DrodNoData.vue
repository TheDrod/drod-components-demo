<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodNoData } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodNoData">
    <template #example>
      <div class="dev-container">
        <DrodNoData />
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
