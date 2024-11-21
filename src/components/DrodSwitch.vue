<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSwitch } from "drod-components";
  import { ref } from "vue";

  const value1 = ref(true);
  const value2 = ref(false);

  const onClick = (value) => {
    console.log(`${value} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodSwitch">
    <template #example>
      <div class="dev-container">
        <DrodSwitch
          v-model="value1"
          @change="onClick"
        />
        <DrodSwitch
          v-model="value2"
          leftIcon="light-theme"
          rightIcon="dark-theme"
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
