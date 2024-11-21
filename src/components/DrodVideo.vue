<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodVideo } from "drod-components";

  const onLoad = () => {
    console.log(`Video loaded`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodVideo">
    <template #example>
      <div class="dev-container">
        <DrodVideo
          src="https://i.imgur.com/rt9xm7v.mp4"
          @loaded="onLoad"
        />
        <DrodVideo
          src="https://www.youtube.com/embed/hk1o2KMC3Ns"
          @loaded="onLoad"
        />
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
  }
</style>
