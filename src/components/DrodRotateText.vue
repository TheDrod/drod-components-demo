<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodRotateText } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodRotateText">
    <template #example>
      <div class="dev-container">
        <DrodRotateText>
          <template #front><h2>WoW</h2></template>
          <template #back><h2>Noice</h2></template>
        </DrodRotateText>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
  }
</style>
