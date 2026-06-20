<script setup>
  import { DrodThemeSwitcher, DrodIcon } from "drod-components";
  import { useRoute } from "vue-router";

  import { sidebarState } from "../stores/sidebar.js";

  const route = useRoute();

  function toggleSidebar() {
    sidebarState.collapsed = !sidebarState.collapsed;
  }
</script>

<template>
  <header class="app-header">
    <button
      v-if="route.path.startsWith('/components')"
      class="burger"
      type="button"
      aria-label="Toggle sidebar"
      @click="toggleSidebar"
    >
      <DrodIcon name="menu" />
    </button>

    <router-link
      class="brand"
      to="/"
    >
      <img
        class="brand__logo"
        src="/logo.svg"
        alt=""
      />
      <span class="brand__name">Drod Components</span>
    </router-link>

    <nav class="nav">
      <router-link
        class="nav__link"
        to="/components"
      >
        Components
      </router-link>
      <router-link
        class="nav__link"
        to="/icons"
      >
        Icons
      </router-link>
    </nav>

    <div class="actions">
      <DrodThemeSwitcher />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .app-header {
    height: var(--app-header-height);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0 1rem;
    box-sizing: border-box;

    position: sticky;
    top: 0;
    z-index: 20;

    background: var(--bg-color-400);
    color: var(--font-color-500);
    border-bottom: 1px solid var(--border-color-500);

    .burger {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
      border: 0;
      border-radius: 0.4rem;
      background: transparent;
      color: inherit;
      cursor: pointer;
      --icon-size: 1.25rem;
      transition: background 0.15s linear;

      &:hover {
        background: hsl(0 0% 50% / 0.12);
      }
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: inherit;
      font-weight: 600;

      &__logo {
        height: 1.6rem;
        width: 1.6rem;
      }

      &__name {
        font-size: 1rem;
        white-space: nowrap;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      margin-left: auto;

      &__link {
        padding: 0.35rem 0.75rem;
        border-radius: 0.4rem;
        text-decoration: none;
        color: inherit;
        opacity: 0.75;
        transition:
          opacity 0.15s linear,
          background 0.15s linear,
          color 0.15s linear;

        &:hover {
          opacity: 1;
          background: hsl(0 0% 50% / 0.12);
        }

        &.router-link-active {
          opacity: 1;
          color: var(--primary-color-500);
          background: hsl(0 0% 50% / 0.1);
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      --icon-size: 1.25rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .app-header .brand__name {
      display: none;
    }
  }
</style>
