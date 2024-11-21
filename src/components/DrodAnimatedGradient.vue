<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodAnimatedGradient } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodAnimatedGradient">
    <template #example>
      <div class="dev-container">
        <DrodAnimatedGradient class="background" />
        <DrodAnimatedGradient class="text">Animated Gradients</DrodAnimatedGradient>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    justify-content: center;
    gap: 40px;

    .background {
      height: 300px;
      width: 300px;
    }
    .background {
      height: 300px;
      width: 300px;
    }
  }
</style>
