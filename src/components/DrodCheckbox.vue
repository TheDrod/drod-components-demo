<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodCheckbox } from "drod-components";
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
  <ComponentDocumentation :component="DrodCheckbox">
    <template #example>
      <div class="dev-container">
        <DrodCheckbox
          v-model="state.foo"
          @change="onChange"
        />
        <DrodCheckbox
          v-model="state.bar"
          @change="onChange"
        />
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
