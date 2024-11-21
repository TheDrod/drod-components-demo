<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMenuIcon } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMenuIcon">
    <template #example>
      <div class="dev-container">
        <DrodMenuIcon
          look="burger"
          animation="squeeze"
        />
        <DrodMenuIcon
          look="burger"
          animation="minus"
        />
        <DrodMenuIcon
          look="burger"
          animation="boring"
        />
        <DrodMenuIcon look="dotted" />
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
