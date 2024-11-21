<script>
  export default { name: "DevComponents" };
</script>
<script setup>
  import { DrodSidebar, DrodSidebarItem } from "drod-components";
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  import components from "../components/index.js";

  const route = useRoute();
</script>

<template>
  <div class="dev-main-container">
    <DrodSidebar
      class="menu"
      :responsive="true"
    >
      <template #list>
        <DrodSidebarItem
          v-for="(component, index) in components"
          :key="index"
          icon="vue"
          :title="component.name"
          :to="`/components/${component.url}`"
          :active="route.path === `/components/${component.url}`"
        />
      </template>
    </DrodSidebar>

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dev-main-container {
    height: 100vh;
    width: 100vw;
    display: flex;

    --sidebar-width: 20rem;
    --sidebar-width-collapsed: 6em;

    .title {
      margin: 0;
      width: 100%;

      .vertical-title {
        width: 0;
        word-wrap: break-word;
      }
    }

    .main-content {
      width: 100%;
      // margin-left: var(--sidebar-width);
      transition: margin 0.2s linear;
      padding: 0.5em;
      overflow: auto;
      position: relative;
    }
    /* Large screens */
    @media only screen and (min-width: 780px) {
      // --sidebar-width: 0 !important;
      .main-content {
        margin-left: var(--sidebar-width);
      }
    }
    /* Small screens */
    @media only screen and (max-width: 779px) {
      // --sidebar-width: 0 !important;
      .main-content {
        margin-bottom: 5em;
      }
    }
  }
</style>
