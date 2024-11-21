<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodFloatingMenu, DrodMenuActionsItem, DrodThemeSwitcher } from "drod-components";
</script>

<template>
  <ComponentDocumentation :component="DrodFloatingMenu">
    <template #example>
      <div class="dev-container">
        <DrodFloatingMenu class="menu">
          <DrodMenuActionsItem>
            <DrodThemeSwitcher />
          </DrodMenuActionsItem>
          <DrodMenuActionsItem
            type="settings"
            icon="settings"
          />
        </DrodFloatingMenu>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    position: relative;

    .menu {
      // display: absolute;
    }
  }
</style>
