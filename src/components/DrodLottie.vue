<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodLottie } from "drod-components";
  import SuccessJSON from "../assets/lotties/success.json";
</script>

<template>
  <ComponentDocumentation :component="DrodLottie">
    <template #example>
      <div class="dev-container">
        <DrodLottie
          :animationData="SuccessJSON"
          :loop="true"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
  }

  :deep(.drod-lottie) {
    --drod-lottie-width: 160px;
    --drod-lottie-height: 160px;
  }
</style>
