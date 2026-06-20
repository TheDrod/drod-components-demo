<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodHorizontalScroller } from "drod-components";

  const cards = Array.from({ length: 12 }, (_, i) => i + 1);
</script>

<template>
  <ComponentDocumentation :component="DrodHorizontalScroller">
    <template #example>
      <div class="dev-container">
        <DrodHorizontalScroller
          :button="true"
          snap="start"
        >
          <div
            v-for="card in cards"
            :key="card"
            class="scroller-card"
          >
            {{ card }}
          </div>
        </DrodHorizontalScroller>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    width: min(640px, 100%);
  }

  .scroller-card {
    flex: 0 0 auto;
    width: 140px;
    height: 140px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 12px;
    color: #fff;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
  }
</style>
