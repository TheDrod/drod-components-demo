<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodSidebar, DrodSidebarAvatar, DrodSidebarLogo, DrodSidebarItem } from "drod-components";
  import { reactive } from "vue";

  const state = reactive({
    activeId: "add",
  });

  const isActive = (id) => {
    return state.activeId === id;
  };

  const onClick = (id) => {
    state.activeId = id;
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodSidebar">
    <template #example>
      <div class="dev-container">
        <!-- FIRST -->
        <DrodSidebar :showCollapse="false">
          <template #header>
            <DrodSidebarAvatar src="https://i.psnprofiles.com/avatars/m/Gc0466d545.png" />
          </template>
          <template #list>
            <DrodSidebarItem
              v-for="(item, i) in 20"
              :key="i"
              icon="login"
              title="Item 1"
              to="/components/DrodSidebar"
              :active="isActive(i)"
              @click="onClick(i)"
            />
          </template>
        </DrodSidebar>

        <!-- SECOND -->
        <DrodSidebar
          :activeId="state.activeId"
          :collapsedOnStart="true"
        >
          <template #header>
            <DrodSidebarLogo icon="heart" />
          </template>
          <template #list>
            <DrodSidebarItem
              v-for="(item, i) in 20"
              :key="i"
              icon="login"
              :title="`title ${i}`"
              :active="isActive('login')"
              @click="onClick('login')"
            />
          </template>
        </DrodSidebar>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .drod-sidebar {
      height: 42rem;
    }
  }
</style>
