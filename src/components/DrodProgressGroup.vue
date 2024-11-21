<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodProgressGroup, DrodProgressGroupItem } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodProgressGroup">
    <template #example>
      <div class="dev-container">
        <DrodProgressGroup>
          <DrodProgressGroupItem
            name="HTML"
            :value="90"
          />
          <DrodProgressGroupItem
            name="CSS"
            :value="80"
          />
          <DrodProgressGroupItem
            name="JS"
            :value="70"
          />
        </DrodProgressGroup>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
