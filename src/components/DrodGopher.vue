<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodGopher } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodGopher">
    <template #example>
      <div class="dev-container">
        <div class="gopher-stage">
          <DrodGopher />
        </div>
        <p class="hint">Move your mouse around — the gopher's eyes follow the cursor.</p>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .gopher-stage {
      position: relative;
      width: 120px;
      height: 160px;
    }

    .hint {
      margin: 0;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  }
</style>
