<script setup>
  import { computed, ref } from "vue";
  import { DrodIcon } from "drod-components";

  import iconNames from "../assets/iconNames.json";

  const search = ref("");
  const copiedName = ref(null);

  const allIcons = iconNames.map((name) => ({ name }));

  const filteredIcons = computed(() => {
    const query = search.value.trim().toLowerCase();
    if (!query) return allIcons;
    return allIcons.filter((icon) => icon.name.toLowerCase().includes(query));
  });

  function copyIcon(name) {
    navigator.clipboard.writeText(name).then(() => {
      copiedName.value = name;
      setTimeout(() => {
        if (copiedName.value === name) copiedName.value = null;
      }, 1500);
    });
  }
</script>

<template>
  <div class="dev-icons">
    <header class="dev-icons__header">
      <h1 class="dev-icons__title">Icons <span class="count">{{ allIcons.length }}</span></h1>
      <input
        v-model="search"
        class="dev-icons__search"
        type="search"
        placeholder="Search icons…"
        aria-label="Search icons"
      />
    </header>

    <div class="dev-icons__grid">
      <div
        class="icon-card"
        :class="{ copied: copiedName === icon.name }"
        v-for="icon in filteredIcons"
        :key="icon.name"
        role="button"
        :title='`Copy "${icon.name}"`'
        @click="copyIcon(icon.name)"
      >
        <div class="icon-card__icon">
          <DrodIcon :name="icon.name" />
        </div>
        <div class="icon-card__name">{{ copiedName === icon.name ? "Copied!" : icon.name }}</div>
      </div>
    </div>

    <p
      v-if="!filteredIcons.length"
      class="dev-icons__empty"
    >
      No icons match "{{ search }}".
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .dev-icons {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.5rem 1rem 3rem;
    color: var(--font-color-500);

    &__header {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }

    &__title {
      margin: 0;
      font-size: 1.75rem;

      .count {
        font-size: 1rem;
        font-weight: 400;
        opacity: 0.6;
        margin-left: 0.35rem;
      }
    }

    &__search {
      margin-left: auto;
      min-width: 220px;
      box-sizing: border-box;
      padding: 0.55rem 0.8rem;
      border: 1px solid var(--border-color-500);
      border-radius: 0.5rem;
      background: var(--bg-color-400);
      color: inherit;
      font-size: 0.9rem;

      &:focus {
        outline: none;
        border-color: var(--primary-color-500);
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
    }

    &__empty {
      margin-top: 2rem;
      text-align: center;
      opacity: 0.6;
    }
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 0.75rem;
    cursor: pointer;
    user-select: none;

    background: var(--bg-color-400);
    border: 1px solid var(--border-color-500);
    border-radius: 0.6rem;
    transition:
      border-color 0.15s linear,
      transform 0.15s ease,
      background 0.15s linear;

    &:hover {
      transform: translateY(-2px);
      border-color: var(--primary-color-500);
    }

    &.copied {
      border-color: var(--primary-color-500);
      background: hsl(0 0% 50% / 0.1);
    }

    &__icon {
      font-size: 1.75rem;
      --icon-size: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__name {
      font-size: 0.8rem;
      text-align: center;
      word-break: break-word;
      opacity: 0.8;
      transition: opacity 0.15s linear;

      .copied & {
        opacity: 1;
        color: var(--primary-color-500);
      }
    }
  }
</style>
