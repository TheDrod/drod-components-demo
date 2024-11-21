<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodReloadPWA } from "drod-components";
  import { ref } from "vue";

  const needRefresh = ref(true);
  const offlineReady = ref(false);
</script>

<template>
  <ComponentDocumentation :component="DrodReloadPWA">
    <template #example>
      <div class="dev-container">
        <DrodReloadPWA :useRegisterSW="() => ({ needRefresh, offlineReady })" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
</style>
