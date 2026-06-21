<script>
  export default { name: "DevComponents" };
</script>
<script setup>
  import { DrodSidebar, DrodSidebarItem } from "drod-components";
  import { computed, onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";

  import components, { groupOrder } from "../components/index.js";
  import { sidebarState } from "../stores/sidebar.js";

  const route = useRoute();

  const search = ref("");
  const sidebarWidth = ref("20rem");

  const isDesktop = ref(true);

  function updateDesktop() {
    isDesktop.value = window.matchMedia("(min-width: 780px)").matches;
  }

  onMounted(() => {
    updateDesktop();
    window.addEventListener("resize", updateDesktop);
    sidebarState.collapsed = !isDesktop.value;
  });

  const contentMargin = computed(() => {
    if (sidebarState.collapsed) return "0rem";
    return isDesktop.value ? sidebarWidth.value : "0rem";
  });

  const showBackdrop = computed(() => !sidebarState.collapsed && !isDesktop.value);

  // Collapse to the rail after navigating on mobile.
  watch(
    () => route.path,
    () => {
      if (!isDesktop.value) sidebarState.collapsed = true;
    },
  );

  const filteredComponents = computed(() => {
    const query = search.value.trim().toLowerCase();
    if (!query) return components;
    return components.filter((component) => component.name.toLowerCase().includes(query));
  });

  // Group the (filtered) components by their `group`, preserving groupOrder.
  const groupedComponents = computed(() => {
    const byGroup = new Map();
    for (const component of filteredComponents.value) {
      const group = component.group || "Extra";
      if (!byGroup.has(group)) byGroup.set(group, []);
      byGroup.get(group).push(component);
    }

    const ordered = groupOrder.filter((label) => byGroup.has(label));
    // Append any groups not listed in groupOrder (safety net).
    for (const label of byGroup.keys()) {
      if (!ordered.includes(label)) ordered.push(label);
    }

    return ordered.map((label) => ({ label, items: byGroup.get(label) }));
  });
</script>

<template>
  <div class="dev-main-container">
    <DrodSidebar
      class="menu"
      :responsive="true"
      :show-collapse="false"
      width-collapsed="0rem"
      v-model:collapsed="sidebarState.collapsed"
      @change-width="sidebarWidth = $event"
      :style="sidebarState.collapsed ? { '--drod-sidebar-width': '0rem', width: '0rem' } : {}"
    >
      <template #header>
        <input
          v-model="search"
          class="component-search"
          type="search"
          placeholder="Search components…"
          aria-label="Search components"
        />
      </template>

      <template #list>
        <template
          v-for="group in groupedComponents"
          :key="group.label"
        >
          <div
            class="sidebar-group-label"
            :class="{ 'sidebar-group-label--hidden': sidebarState.collapsed }"
          >
            {{ group.label }}
          </div>
          <DrodSidebarItem
            v-for="component in group.items"
            :key="component.url"
            icon="vue"
            :title="component.name"
            :to="`/components/${component.url}`"
            :active="route.path === `/components/${component.url}`"
          />
        </template>
        <p
          v-if="!filteredComponents.length"
          class="no-results"
        >
          No components match “{{ search }}”.
        </p>
      </template>
    </DrodSidebar>

    <div
      v-if="showBackdrop"
      class="sidebar-backdrop"
      @click="sidebarState.collapsed = true"
    />

    <div class="main-content" :style="{ marginLeft: contentMargin }">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dev-main-container {
    height: 100%;
    width: 100%;
    display: flex;

    .component-search {
      width: 100%;
      box-sizing: border-box;
      padding: 0.6rem 0.8rem;
      border: 1px solid rgba(127, 127, 127, 0.25);
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.08);
      color: inherit;
      font-size: 0.9rem;

      &:focus {
        outline: none;
        border-color: rgba(127, 127, 127, 0.5);
      }
    }

    .sidebar-group-label {
      padding: 0.75rem 0.6rem 0.25rem;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--on-surface-variant, rgba(127, 127, 127, 0.9));
      opacity: 0.75;
      white-space: nowrap;
      overflow: hidden;

      &:first-child {
        padding-top: 0.25rem;
      }

      &--hidden {
        display: none;
      }
    }

    .no-results {
      padding: 0.75rem 1rem;
      font-size: 0.85rem;
      opacity: 0.6;
    }

    .main-content {
      width: 100%;
      margin-left: 0; /* driven by inline :style binding */
      transition: margin 0.25s ease;
      padding: 0.5em;
      overflow: auto;
      position: relative;
    }

    .sidebar-backdrop {
      position: fixed;
      inset: 0;
      top: var(--app-header-height);
      background: hsl(0 0% 0% / 0.45);
      z-index: 9;
    }

    :deep(.drod-sidebar.responsive) {
      top: var(--app-header-height);
      height: calc(100% - var(--app-header-height));
      overflow: hidden;
    }
  }
</style>
