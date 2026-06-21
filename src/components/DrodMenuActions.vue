<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMenuActions, DrodMenuActionsItem } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMenuActions">
    <template #example>
      <div class="dev-container">
        <DrodMenuActions>
          <DrodMenuActionsItem
            icon="mdi:pencil"
            tooltip="Edit"
            @click="onClick('edit')"
          />
          <DrodMenuActionsItem
            icon="mdi:delete"
            tooltip="Delete"
            @click="onClick('delete')"
          />
          <DrodMenuActionsItem
            icon="mdi:lock"
            tooltip="Lock"
            @click="onClick('locked')"
          />
          <DrodMenuActionsItem
            icon="mdi:share-variant"
            tooltip="Share"
            @click="onClick('share')"
          />
        </DrodMenuActions>
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
