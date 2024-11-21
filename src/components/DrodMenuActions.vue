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
            icon="edit"
            type="edit"
            @click="onClick('edit')"
          />
          <DrodMenuActionsItem
            icon="delete"
            type="delete"
            @click="onClick('delete')"
          />
          <DrodMenuActionsItem
            icon="locked"
            type="locked"
            @click="onClick('locked')"
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
