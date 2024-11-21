<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMap, DrodMapItem } from "drod-components";

  const onClick = (id) => {
    console.log(`${id} clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMap">
    <template #example>
      <div class="dev-container">
        <DrodMap
          id="workplace"
          name="workplace"
          src="https://www.w3schools.com/tags/workplace.jpg"
        >
          <DrodMapItem
            name="Computer"
            shape="rect"
            coords="34,44,270,350"
            @click="onClick('Computer')"
          />
          <DrodMapItem
            name="Phone"
            shape="rect"
            coords="290,172,333,250"
            @click="onClick('Phone')"
          />
          <DrodMapItem
            name="Cup"
            shape="circle"
            coords="337,300,44"
            @click="onClick('Cup')"
          />
        </DrodMap>
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
