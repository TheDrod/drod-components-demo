<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodToggleButton } from "drod-components";
  import { ref } from "vue";

  const checked = ref(false);
</script>

<template>
  <ComponentDocumentation :component="DrodToggleButton">
    <template #example>
      <div class="dev-container">
        <DrodToggleButton v-model="checked" />
        <p class="hint">Value: <strong>{{ checked }}</strong></p>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .hint {
      margin: 0;
      font-size: 0.9rem;
    }
  }
</style>
