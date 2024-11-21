<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodWYSIWYViewer } from "drod-components";
  import { reactive } from "@vue/reactivity";

  const state = reactive({
    value: `<h1>Hello World</h1>`,
  });

  const onSave = (value) => {
    console.log(value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodWYSIWYViewer">
    <template #example>
      <div class="dev-container">
        <DrodWYSIWYViewer :value="state.value" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .drod-rtext {
      --drod-rtext-height: 100%;
    }
  }
</style>
