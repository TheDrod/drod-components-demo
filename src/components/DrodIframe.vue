<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodIframe } from "drod-components";

  const src = `https://palexdrod.netlify.app/profile`;

  const onReady = () => {
    console.log("ready");
  };
  const onLoad = () => {
    console.log("load");
  };
</script>

<template>
  <ComponentDocumentation :component="DrodIframe">
    <template #example>
      <div class="dev-container">
        <DrodIframe
          name="iframe"
          frameId="iframe"
          :src="src"
          allow="camera *; geolocation *; microphone *; autoplay *"
          width="150px"
          height="200px"
          @ready="onReady()"
          @load="onLoad()"
        ></DrodIframe>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    place-items: center;
  }
</style>
