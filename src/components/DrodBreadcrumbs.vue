<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodBreadcrumbs } from "drod-components";

  const items = [
    { label: "Home", to: "#" },
    { label: "Components", to: "#" },
    { label: "Navigation", to: "#" },
    { label: "Breadcrumbs" },
  ];

  const onSelect = (item) => console.log("navigate:", item.label);
</script>

<template>
  <ComponentDocumentation :component="DrodBreadcrumbs">
    <template #example>
      <div class="dev-container">
        <DrodBreadcrumbs :items="items" @select="onSelect" />
        <DrodBreadcrumbs :items="items" separator="mdi:slash-forward" @select="onSelect" />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
</style>
