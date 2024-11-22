<script setup>
  import ComponentDocumentation from "./ComponentDocumentation.vue";
  import { DrodMarkdown } from "drod-components-markdown";

  const onClick = (id) => {
    console.log(`clicked`);
  };
</script>

<template>
  <ComponentDocumentation :component="DrodMarkdown">
    <template #example>
      <div class="dev-container">
        <DrodMarkdown
          value="Some random markdown text"
          :showActions="true"
          @save="onClick"
        />
        <DrodMarkdown
          value="DrodMarkdown 2"
          :showActions="true"
          @save="onClick"
        />
      </div>
    </template>
  </ComponentDocumentation>
</template>

<style lang="scss" scoped>
  .dev-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    > * {
      width: 90%;
    }
  }
</style>
