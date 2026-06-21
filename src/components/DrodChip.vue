<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodChip } from "drod-components";
  import { ref } from "vue";

  const tags = ref(["Vue", "SCSS", "Vite", "MDI"]);
  const filters = ["All", "Active", "Archived"];
  const activeFilter = ref("All");

  const remove = (tag) => {
    tags.value = tags.value.filter((t) => t !== tag);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodChip">
    <template #example>
      <div class="dev-container">
        <div class="row">
          <DrodChip
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            closable
            @close="remove(tag)"
          />
          <DrodChip v-if="!tags.length" label="All removed" />
        </div>

        <div class="row">
          <DrodChip icon="mdi:star" label="Featured" />
          <DrodChip
            v-for="f in filters"
            :key="f"
            :label="f"
            selectable
            :active="activeFilter === f"
            @click="activeFilter = f"
          />
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
</style>
