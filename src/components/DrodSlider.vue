<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSlider } from "drod-components";
  import { ref } from "vue";

  const volume = ref(40);
  const temp = ref(20);
</script>

<template>
  <ComponentDocumentation :component="DrodSlider">
    <template #example>
      <div class="dev-container">
        <DrodSlider v-model="volume" :show-value="true" />
        <DrodSlider v-model="temp" :min="16" :max="30" :step="0.5" :show-value="true" />
        <DrodSlider :model-value="50" :disabled="true" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 360px;
    margin: 0 auto;
  }
</style>
