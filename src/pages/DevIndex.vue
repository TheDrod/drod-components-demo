<script setup>
  import { computed } from "vue";
  import router from "../router";

  const links = computed(() => {
    return router.options.routes
      .filter((route) => route.meta || !route.meta?.hidden)
      .map((r) => ({ text: r.path, href: r.path }));
  });
</script>

<template>
  <div>
    <ul
      v-for="link in links"
      :key="link.href"
    >
      <li>
        <router-link :to="link.href"> {{ link.text }}</router-link>
      </li>
    </ul>
  </div>
</template>
