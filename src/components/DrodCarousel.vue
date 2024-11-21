<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodCarousel } from "drod-components";
  import { generateRandomNumber } from "drod-components-utils";

  let items = [];
  for (let i = 0; i < 20; i++) {
    items.push({
      name: `image #${i}`,
      src: `https://picsum.photos/id/${generateRandomNumber(0, 1084)}/536/354`,
    });
  }

  const onClick = (item) => {
    console.log(`onClick ~ item`, item);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodCarousel">
    <template #example>
      <div class="dev-container">
        <DrodCarousel
          :items="items"
          @select="onClick"
        />
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
