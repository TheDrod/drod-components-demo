<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButtonFloating } from "drod-components";

  const onClick = () => {
    console.log(`clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodButtonFloating">
    <template #example>
      <div class="dev-container">
        <DrodButtonFloating @click="onClick" />
        <DrodButtonFloating
          class="custom"
          icon="info"
          @click="onClick"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    position: relative;

    .custom {
      --drod-floating-button-size: 5em;
      --drod-floating-button-margin: 5em;
      --drod-floating-button-position: fixed;
      --drod-floating-button-right: 0;
      --drod-floating-button-bottom: 0;
    }
  }
</style>
