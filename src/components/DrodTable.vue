<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  // import { DrodTable } from "drod-components-table";
  import { reactive } from "@vue/reactivity";

  const state = reactive({
    headers: [
      { text: "Name", value: "name", sortable: true },
      { text: "Height", value: "indicator.height" },
      { text: "Weight", value: "indicator.weight" },
      { text: "City", value: "number", width: 200 },
    ],
    data: [],
  });

  for (let i = 0; i < 30; i++) {
    state.data.push({
      name: "Name " + i,
      indicator: { height: i, weight: i },
      number: "City " + i,
    });
  }
</script>

<template>
  <!-- <ComponentDocumentation :component="DrodTable">
    <template #example>
      <div class="dev-container">
        <DrodTable
          :headers="state.headers"
          :data="state.data"
        />
      </div>
    </template>
  </ComponentDocumentation> -->
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
</style>
