<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodLoading } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodLoading">
    <template #example>
      <div class="dev-container">
        <DrodLoading />
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
