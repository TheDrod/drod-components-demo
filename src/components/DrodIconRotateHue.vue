<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodIconRotateHue } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodIconRotateHue">
    <template #example>
      <div class="dev-container">
        <DrodIconRotateHue name="mdi:heart" color="#ef4444" />
        <DrodIconRotateHue name="mdi:star" color="#f59e0b" />
        <DrodIconRotateHue name="mdi:flash" color="#3b82f6" />
      </div>
      <p class="hint">Hover an icon to rotate its hue.</p>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 3rem;
  }

  .hint {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>
