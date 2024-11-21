<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodYoutube } from "drod-components";

  const onLoad = () => {
    console.log(`Video loaded`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodYoutube">
    <template #example>
      <div class="dev-container">
        <DrodYoutube
          src="hk1o2KMC3Ns"
          :timestamp="2"
          :loop="true"
          :loopTimeout="5000"
          @ready="onLoad"
        />
        <DrodYoutube
          src="PrkCYd7XkGc"
          :mute="true"
          :autoplay="false"
          :showControls="true"
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
    padding: 0 4rem;
  }
</style>
