<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodIcon } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodIcon">
    <template #example>
      <div class="dev-container">
        <DrodIcon name="search"></DrodIcon>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
</style>
