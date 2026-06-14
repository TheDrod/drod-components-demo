<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodStackGrid } from "drod-components";
  import { ref } from "vue";
</script>

<template>
  <ComponentDocumentation :component="DrodStackGrid">
    <template #example>
      <div class="dev-container">
        <!-- <div class="card card-small"></div>
          <div class="card card-medium"></div>
          <div class="card card-large"></div>
          <div class="card card-small"></div>
          <div class="card card-medium"></div>
          <div class="card card-large"></div> -->
        <DrodStackGrid :columnMinWidth="200">
          <div class="card card-small"></div>
          <div class="card card-medium"></div>
          <div class="card card-large"></div>
          <div class="card card-small"></div>
          <div class="card card-medium"></div>
          <div class="card card-large"></div>
        </DrodStackGrid>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;

    .card {
      width: 100%;
      background: var(--primary-color-500);
      border: 1px solid var(--scroll-color-500);
      border-radius: 3px;

      &.card-small {
        height: 200px;
      }
      &.card-medium {
        height: 400px;
      }
      &.card-large {
        height: 600px;
      }
    }
  }
</style>
