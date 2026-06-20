<script setup>
  import components from "../components/index.js";
  import iconNames from "../assets/iconNames.json";

  const componentCount = components.length;
  const iconCount = iconNames.length;
</script>

<template>
  <div class="dev-index">
    <section class="hero">
      <h1 class="hero__title">Drod Components</h1>
      <p class="hero__subtitle">
        A Vue 3 component library — {{ componentCount }} components and
        {{ iconCount }} icons, ready to drop in.
      </p>

      <div class="cards">
        <router-link
          class="card"
          to="/components"
        >
          <h2 class="card__title">Components</h2>
          <p class="card__desc">{{ componentCount }} building blocks</p>
          <span class="card__cta">Browse →</span>
        </router-link>

        <router-link
          class="card"
          to="/icons"
        >
          <h2 class="card__title">Icons</h2>
          <p class="card__desc">{{ iconCount }} icons</p>
          <span class="card__cta">Browse →</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .dev-index {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    box-sizing: border-box;
    overflow: auto;
    color: var(--font-color-500);
  }

  .hero {
    width: 100%;
    max-width: 720px;
    text-align: center;

    &__title {
      margin: 0 0 0.75rem;
      font-size: 2.75rem;
    }

    &__subtitle {
      margin: 0 auto 2.5rem;
      max-width: 32rem;
      font-size: 1.05rem;
      line-height: 1.5;
      opacity: 0.75;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1.5rem;
    text-align: left;
    text-decoration: none;
    color: inherit;

    background: var(--bg-color-400);
    border: 1px solid var(--border-color-500);
    border-radius: 0.75rem;
    transition:
      transform 0.15s ease,
      border-color 0.15s linear,
      box-shadow 0.15s ease;

    &:hover {
      transform: translateY(-3px);
      border-color: var(--primary-color-500);
      box-shadow: 0 8px 24px hsl(0 0% 0% / 0.18);
    }

    &__title {
      margin: 0;
      font-size: 1.4rem;
    }

    &__desc {
      margin: 0;
      opacity: 0.7;
    }

    &__cta {
      margin-top: 0.5rem;
      color: var(--primary-color-500);
      font-weight: 600;
    }
  }
</style>
