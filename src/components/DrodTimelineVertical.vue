<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodTimelineVertical, DrodTimelineVerticalItem } from "drod-components";

  const timeline = [
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
    {
      title: "About",
      description: "Lorem ipsum dolor sit amet.",
      date: "20/10/1888",
    },
  ];
</script>

<template>
  <ComponentDocumentation :component="DrodTimelineVertical">
    <template #example>
      <div class="dev-container">
        <DrodTimelineVertical>
          <DrodTimelineVerticalItem
            v-for="(entry, i) in timeline"
            :key="i"
          />
        </DrodTimelineVertical>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
