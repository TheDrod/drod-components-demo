<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodFallbackPage } from "drod-components";

  const onClick = () => {
    console.log(`clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodFallbackPage">
    <template #example>
      <div class="dev-container">
        <DrodFallbackPage @return="onClick" />
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
