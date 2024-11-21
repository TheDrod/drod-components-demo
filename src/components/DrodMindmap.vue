<!-- <script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMindmap } from "drod-components";

  const data = [
    {
      name: "De La Riva",
      children: [
        {
          name: "Sweep",
          children: [{ name: "Sweep #1", url: "url" }, { name: "Sweep #2" }, { name: "Sweep #3" }],
        },
        {
          name: "Submissions",
          collapse: true,
          children: [{ name: "Armlock" }, { name: "Triangle" }],
        },
        {
          name: "Retention",
          children: [{ name: "(...)" }, { name: "(...)" }, { name: "(...)" }, { name: "(...)" }, { name: "(...)" }],
          left: true,
        },
      ],
    },
  ];

  const onChange = (value) => {
    console.log(`onChange ~ value:`, value);
  };

  const onSave = (value) => {
    console.log(`onSave ~ value:`, value);
  };

  const onSelect = (value) => {
    console.log(`onSelect ~ value:`, value);
  };

  const onDblSelect = (value) => {
    console.log(`onDblSelect ~ value:`, value);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMindmap">
    <template #example>
      <div class="dev-container">
        <DrodMindmap
          :data="data"
          :sharpCorner="false"
          @change="onChange"
          @save="onSave"
          @select="onSelect"
          @dblSelect="onDblSelect"
        ></DrodMindmap>
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    height: 900px;
  }
</style> -->
