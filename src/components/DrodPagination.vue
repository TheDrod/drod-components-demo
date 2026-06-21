<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodPagination } from "drod-components";
  import { ref } from "vue";

  const page = ref(1);
  const bigPage = ref(7);
</script>

<template>
  <ComponentDocumentation :component="DrodPagination">
    <template #example>
      <div class="dev-container">
        <DrodPagination v-model="page" :length="5" />
        <p class="hint">Page {{ page }} of 5</p>

        <DrodPagination v-model="bigPage" :length="20" />
        <p class="hint">Page {{ bigPage }} of 20</p>
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
  }
  .hint {
    margin: 0 0 0.75rem;
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>
