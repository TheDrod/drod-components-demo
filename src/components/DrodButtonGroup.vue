<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodButtonGroup } from "drod-components";

  const onClick = (id) => {
    console.log(`${JSON.stringify(id)} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodButtonGroup">
    <template #example>
      <div class="dev-container">
        <DrodButtonGroup
          :items="[
            { id: 'dark', icon: 'dark-theme' },
            { id: 'light', icon: 'light-theme' },
          ]"
          :active="'dark'"
          @change="onClick"
        />
        <DrodButtonGroup
          :multiple="true"
          :items="[
            { id: 0, title: '0' },
            { id: 2, title: '2' },
            { id: 1, title: '1' },
          ]"
          :active="[0, 1]"
          @change="onClick"
        />
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
