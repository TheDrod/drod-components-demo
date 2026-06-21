<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodRating } from "drod-components";
  import { ref } from "vue";

  const score = ref(3);
</script>

<template>
  <ComponentDocumentation :component="DrodRating">
    <template #example>
      <div class="dev-container">
        <DrodRating v-model="score" />
        <p class="hint">Rating: {{ score }} / 5</p>

        <DrodRating :model-value="4" readonly />
        <DrodRating v-model="score" :max="7" size="2rem" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .hint {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>
