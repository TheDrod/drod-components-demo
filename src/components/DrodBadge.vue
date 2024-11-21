<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodBadge } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodBadge">
    <template #example>
      <div class="dev-container">
        <DrodBadge color="#000">#000</DrodBadge>
        <DrodBadge color="#fff">white</DrodBadge>
        <DrodBadge color="#00f">blue</DrodBadge>
        <DrodBadge color="hsl(0, 80%, 52%)"> hsl(0, 80%, 52%)</DrodBadge>
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
