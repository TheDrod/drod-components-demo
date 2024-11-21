<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodVideoScrubbable } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodVideoScrubbable">
    <template #example>
      <div class="dev-container">
        <DrodVideoScrubbable
          src="/assets/mov_bbb.mp4"
          :framesPerSecond="10"
        >
        </DrodVideoScrubbable>
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
