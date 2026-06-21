<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSpeedDial, createNotification } from "drod-components";

  const items = [
    { name: "Edit", icon: "edit" },
    { name: "Share", icon: "share" },
    { name: "Delete", icon: "delete" },
  ];

  const onAction = (name) => {
    createNotification({
      title: `${name} action`,
      message: `Speed dial: "${name}" selected.`,
      type: "info",
      position: "bottom-right",
    });
  };
</script>

<template>
  <ComponentDocumentation :component="DrodSpeedDial">
    <template #example>
      <div class="dev-container">
        <div class="cell">
          <p class="label">Up</p>
          <DrodSpeedDial :items="items" direction="up" @action="onAction" />
        </div>
        <div class="cell">
          <p class="label">Right</p>
          <DrodSpeedDial :items="items" direction="right" @action="onAction" />
        </div>
        <div class="cell">
          <p class="label">Hover (down)</p>
          <DrodSpeedDial :items="items" direction="down" :openOnHover="true" @action="onAction" />
        </div>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    gap: 5rem;
    justify-content: center;
    padding: 5rem 2rem;
  }
  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .label {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.7;
  }
</style>
