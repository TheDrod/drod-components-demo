<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSelect } from "drod-components";
  import { ref } from "vue";

  const country = ref(null);
  const options = [
    { label: "Portugal", value: "pt" },
    { label: "Brazil", value: "br" },
    { label: "Japan", value: "jp" },
    { label: "Canada", value: "ca" },
    { label: "Australia", value: "au" },
  ];
</script>

<template>
  <ComponentDocumentation :component="DrodSelect">
    <template #example>
      <div class="dev-container">
        <DrodSelect v-model="country" :options="options" placeholder="Choose a country…" />
        <p class="hint">Selected: {{ country ?? "—" }}</p>
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
