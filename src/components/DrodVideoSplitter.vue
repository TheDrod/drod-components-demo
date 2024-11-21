<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodVideo, DrodVideoSplitter } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodVideoSplitter">
    <template #example>
      <div class="dev-container">
        <!-- <DrodVideo src="/assets/mov_bbb.mp4"></DrodVideo> -->
        <DrodVideoSplitter
          src="/assets/mov_bbb.mp4"
          :framesPerSecond="10"
        ></DrodVideoSplitter>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
