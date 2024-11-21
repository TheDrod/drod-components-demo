<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMoodSelector } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMoodSelector">
    <template #example>
      <div class="dev-container">
        <DrodMoodSelector @change="onClick" />
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
