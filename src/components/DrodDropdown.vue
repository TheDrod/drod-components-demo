<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodDropdown } from "drod-components";
  import { reactive } from "vue";

  const state = reactive({
    foo: true,
    bar: false,
  });

  const onChange = (value) => {
    console.log(value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodDropdown">
    <template #example>
      <div class="dev-container">
        <DrodDropdown />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
