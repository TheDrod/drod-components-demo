<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSkeleton } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodSkeleton">
    <template #example>
      <div class="dev-container">
        <div class="card">
          <div class="card__head">
            <DrodSkeleton variant="avatar" />
            <DrodSkeleton variant="text" :count="2" width="180px" />
          </div>
          <DrodSkeleton variant="image" />
          <DrodSkeleton variant="text" :count="3" />
          <DrodSkeleton variant="button" />
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    max-width: 360px;
    margin: 0 auto;

    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__head {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
</style>
