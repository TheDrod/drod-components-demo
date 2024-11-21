<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodVideoGif } from "drod-components";
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
  <ComponentDocumentation :component="DrodVideoGif">
    <template #example>
      <div class="dev-container">
        <DrodVideoGif src="/assets/mov_bbb.mp4" />
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
